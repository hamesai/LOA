#!/usr/bin/env python3
"""Turn books the user supplies into searchable, chapter-by-chapter text for a course.

    python _template/ingest_source.py <course-id> [file ...] [--key short-key] [--title "Book title"]

With no files, it ingests everything in the inbox, source ingest/<course-id>/ (next to index.html).
Supports PDF, EPUB, DOCX, TXT and MD. Output goes to courses/<course-id>/sources/<key>/:
    manifest.json   title, file, sha256, format, words, per-chapter title, file, words and (PDF) page range, warnings
    ch-001.txt ...  one file per chapter
    full.txt        the whole book

The text stays on this machine. Do not upload, publish or serve it: it is the user's copy, for reading and checking claims.
Quote at most 15 words from it in a course, and paraphrase the rest.

Then use _template/source_search.py to find passages and to record which chapters you have read.
"""
import argparse, hashlib, html, json, re, subprocess, sys, zipfile
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
MIN_CHAPTER_WORDS = 150      # shorter EPUB sections (covers, dedications, contents) fold into a neighbour
PDF_CHUNK_PAGES = 20         # fallback when a PDF has no outline and no recognisable chapter headings


def slug(s):
    s = s.split(":")[0].replace("'", "").replace("’", "")        # drop the subtitle and apostrophes: "The Filmmaker's Handbook: A Guide" -> filmmakers-handbook
    s = re.sub(r"^(the|a|an)\s+", "", s.strip(), flags=re.I)
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:40] or "book"


def words(t):
    return len(t.split())


def tidy(t):
    t = t.replace("\r\n", "\n").replace("\r", "\n").replace("­", "")
    t = re.sub(r"(\w)-\n(\w)", r"\1\2", t)               # hyphenated line breaks
    t = re.sub(r"[ \t ]+", " ", t)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t.strip()


class Text(HTMLParser):
    BLOCK = {"p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "section", "blockquote", "pre"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.skip, self.title, self._in_h = [], 0, "", None

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style", "head"):
            self.skip += 1
        if tag in self.BLOCK:
            self.out.append("\n\n" if tag != "br" else "\n")
        if tag in ("h1", "h2", "h3") and not self.title:
            self._in_h = []

    def handle_endtag(self, tag):
        if tag in ("script", "style", "head"):
            self.skip = max(0, self.skip - 1)
        if tag in self.BLOCK:
            self.out.append("\n\n")
        if tag in ("h1", "h2", "h3") and self._in_h is not None:
            self.title = " ".join("".join(self._in_h).split())
            self._in_h = None

    def handle_data(self, d):
        if self.skip:
            return
        self.out.append(d)
        if self._in_h is not None:
            self._in_h.append(d)


def html_text(raw):
    p = Text()
    p.feed(raw)
    return tidy("".join(p.out)), p.title


# ---------- readers: each returns (chapters, meta, warnings); chapters = [{title, text, pages?}] ----------
def read_txt(path):
    t = tidy(path.read_text(encoding="utf-8", errors="replace"))
    parts = re.split(r"\n(?=(?:chapter|part)\s+(?:\d+|[ivxlc]+)\b[^\n]{0,80}\n)", t, flags=re.I)
    if len(parts) < 2:
        parts = re.split(r"\n(?=#{1,2} [^\n]+\n)", t)
    chapters = []
    for i, p in enumerate(parts, 1):
        p = p.strip()
        if p:
            chapters.append({"title": p.splitlines()[0].lstrip("# ").strip()[:90] or "Section %d" % i, "text": p})
    return chapters, {}, []


def read_docx(path):
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read("word/document.xml"))
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    W = "{%s}" % ns["w"]
    paras, chapters, cur = [], [], {"title": "Start", "lines": []}
    for p in root.iter(W + "p"):
        txt = "".join(t.text or "" for t in p.iter(W + "t")).strip()
        style = p.find("w:pPr/w:pStyle", ns)
        sv = style.get(W + "val", "") if style is not None else ""
        if re.match(r"(?i)heading\s*1$|title$", sv) and txt:
            if cur["lines"]:
                chapters.append(cur)
            cur = {"title": txt[:90], "lines": []}
        elif txt:
            cur["lines"].append(txt)
    if cur["lines"]:
        chapters.append(cur)
    return [{"title": c["title"], "text": "\n\n".join(c["lines"])} for c in chapters], {}, []


def read_epub(path):
    warns = []
    with zipfile.ZipFile(path) as z:
        names = set(z.namelist())
        container = ET.fromstring(z.read("META-INF/container.xml"))
        opf_path = next(e.get("full-path") for e in container.iter() if e.tag.endswith("rootfile"))
        opf = ET.fromstring(z.read(opf_path))
        base = opf_path.rsplit("/", 1)[0] + "/" if "/" in opf_path else ""
        items = {e.get("id"): e.get("href") for e in opf.iter() if e.tag.endswith("}item") or e.tag == "item"}
        spine = [e.get("idref") for e in opf.iter() if e.tag.endswith("itemref")]
        title = next((e.text for e in opf.iter() if e.tag.endswith("}title") and e.text), "")
        author = next((e.text for e in opf.iter() if e.tag.endswith("}creator") and e.text), "")
        secs = []
        for ref in spine:
            href = items.get(ref)
            if not href:
                continue
            name = (base + href.split("#")[0]).replace("%20", " ")
            if name not in names:
                continue
            blob = z.read(name)
            try:
                raw = blob.decode("utf-8")
            except UnicodeDecodeError:
                raw = blob.decode("cp1252", errors="replace")      # older EPUBs sometimes declare or imply Windows-1252
            text, h = html_text(raw)
            if text:
                secs.append({"title": h or Path(href).stem, "text": text})
    chapters, carry = [], ""
    for s in secs:                                         # fold tiny sections into the previous one, or into the next if there is none yet
        if words(s["text"]) < MIN_CHAPTER_WORDS:
            if chapters:
                chapters[-1]["text"] += "\n\n" + s["text"]
            else:
                carry += s["text"] + "\n\n"
        else:
            if carry:
                s = {"title": s["title"], "text": carry + s["text"]}
                carry = ""
            chapters.append(s)
    if carry and not chapters:
        chapters.append({"title": "Text", "text": carry.strip()})
    if not chapters:
        warns.append("no readable text found in the EPUB")
    return chapters, {"title": title, "author": author}, warns


def pdf_pages(path):
    warns, pages = [], []
    try:
        from pypdf import PdfReader
        r = PdfReader(str(path))
        if r.is_encrypted:
            try:
                r.decrypt("")
            except Exception:
                warns.append("the PDF is encrypted and could not be opened")
        pages = [(p.extract_text() or "") for p in r.pages]
    except Exception as e:
        warns.append("pypdf failed: %s" % e)
    if not pages or sum(len(p) for p in pages) / max(1, len(pages)) < 200:
        try:                                                # second opinion: poppler's layout-aware extractor
            out = subprocess.run(["pdftotext", "-layout", str(path), "-"], capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=300).stdout
            alt = out.split("\f")
            if alt and alt[-1].strip() == "":
                alt.pop()
            if sum(len(p) for p in alt) > sum(len(p) for p in pages):
                pages = alt
        except Exception:
            pass
    return pages, warns


def read_pdf(path):
    pages, warns = pdf_pages(path)
    meta = {}
    try:
        from pypdf import PdfReader
        r = PdfReader(str(path))
        info = r.metadata or {}
        mt = str(info.get("/Title") or "")
        if re.search(r"\.(pdf|tif|tiff|doc|docx|indd|qxd)|^[A-Za-z]{0,3}\d{4,}", mt, re.I):
            mt = ""                                              # a scanner or software file name, not a title
        meta = {"title": mt, "author": str(info.get("/Author") or "")}
        starts = []
        def walk(o, depth=0):
            for it in o:
                if isinstance(it, list):
                    walk(it, depth + 1)
                elif depth == 0:
                    try:
                        starts.append((str(it.title).strip(), r.get_destination_page_number(it)))
                    except Exception:
                        pass
        walk(r.outline)
        starts = sorted(set((t, p) for t, p in starts if 0 <= p < len(pages)), key=lambda x: x[1])
    except Exception:
        starts = []
    n = len(pages)
    avg = sum(len(p) for p in pages) / max(1, n)
    if n and avg < 200:
        warns.append("only %d characters per page on average: this looks like a scanned PDF. OCR it first (the pdf skill covers OCR), then ingest the result" % avg)
    if len(starts) < 3:                                    # no usable outline: look for chapter headings at the top of pages
        starts = []
        for i, p in enumerate(pages):
            first = " ".join(p.strip().split("\n")[:3])
            if re.match(r"(?i)\s*(chapter|part)\s+(\d+|[ivxlc]+)\b", first):
                starts.append((first.strip()[:90], i))
    if len(starts) < 3:
        starts = [("Pages %d to %d" % (i + 1, min(i + PDF_CHUNK_PAGES, n)), i) for i in range(0, n, PDF_CHUNK_PAGES)]
        warns.append("no chapter outline or headings found: split into %d-page blocks" % PDF_CHUNK_PAGES)
    if starts and starts[0][1] > 0:
        starts.insert(0, ("Front matter", 0))
    chapters = []
    for k, (t, a) in enumerate(starts):
        b = (starts[k + 1][1] if k + 1 < len(starts) else n)
        text = tidy("\n\n".join(pages[a:b]))
        if text:
            chapters.append({"title": t, "text": text, "pages": [a + 1, max(a + 1, b)]})
    return chapters, meta, warns


READERS = {".pdf": read_pdf, ".epub": read_epub, ".docx": read_docx, ".txt": read_txt, ".md": read_txt}


def add_ref(cid, key, title, author, url):
    """Add a citation key for a book with a known URL, unless the course refs file already has that key."""
    if not url:
        return
    refs = ROOT / "courses" / cid / ("course-%s-refs.js" % cid)
    if not refs.exists():
        return
    text = refs.read_text(encoding="utf-8")
    if re.search(r'^\s*"%s":' % re.escape(key), text, flags=re.M):
        return
    anchor = re.search(r"^Object\.assign\(window\.COURSE_REFS[^\n]*\n", text, flags=re.M)
    if not anchor:
        print("  NOTE  no Object.assign block in %s, so no citation key was added for %s" % (refs.name, key))
        return
    entry = '  "%s": { t: %s, s: %s, u: %s },\n' % (key, json.dumps(title + " (read in full)", ensure_ascii=False), json.dumps(author or "source", ensure_ascii=False), json.dumps(url))
    refs.write_text(text[:anchor.end()] + entry + text[anchor.end():], encoding="utf-8")
    print("  added citation key '%s' to %s" % (key, refs.name))


def ingest(cid, path, key=None, title=None, found_by=None, url=None, query=None, note=None):
    path = Path(path)
    ext = path.suffix.lower()
    if ext not in READERS:
        sys.exit("unsupported file type %s (use PDF, EPUB, DOCX, TXT or MD)" % ext)
    chapters, meta, warns = READERS[ext](path)
    if not chapters:
        sys.exit("no text could be read from %s. %s" % (path.name, "; ".join(warns)))
    sha = hashlib.sha256(path.read_bytes()).hexdigest()
    key = key or slug(title or meta.get("title") or path.stem)
    out = ROOT / "courses" / cid / "sources" / key
    out.mkdir(parents=True, exist_ok=True)
    prov = {}
    if (out / "manifest.json").exists():
        old = json.loads((out / "manifest.json").read_text(encoding="utf-8"))
        if old.get("sha256") != sha:
            sys.exit("a different book already uses the key '%s'. Pass --key to choose another." % key)
        prov = dict(old.get("provenance", {}))
    # Provenance: when the book was first added, and how it was found. Re-ingesting keeps the first date and any value not passed again.
    prov.setdefault("added", date.today().isoformat())
    prov.setdefault("source_file", path.name)
    prov.setdefault("found_by", "unknown")
    for k, v in (("found_by", found_by), ("url", url), ("query", query), ("note", note)):
        if v:
            prov[k] = v
    for f in out.glob("ch-*.txt"):
        f.unlink()
    man_ch = []
    for i, c in enumerate(chapters, 1):
        fn = "ch-%03d.txt" % i
        (out / fn).write_text(c["text"] + "\n", encoding="utf-8")
        e = {"file": fn, "title": c["title"], "words": words(c["text"])}
        if c.get("pages"):
            e["pages"] = c["pages"]
        man_ch.append(e)
    (out / "full.txt").write_text("\n\n".join("## %s\n\n%s" % (c["title"], c["text"]) for c in chapters) + "\n", encoding="utf-8")
    total = sum(c["words"] for c in man_ch)
    man = {"key": key, "title": title or meta.get("title") or path.stem, "author": meta.get("author", ""), "file": path.name, "format": ext[1:],
           "sha256": sha, "words": total, "chapters": man_ch, "warnings": warns, "provenance": prov}
    (out / "manifest.json").write_text(json.dumps(man, indent=1, ensure_ascii=False), encoding="utf-8")
    add_ref(cid, key, man["title"], man["author"], prov.get("url"))
    print("%s: %d words in %d chapters -> courses/%s/sources/%s/" % (man["title"], total, len(man_ch), cid, key))
    for c in man_ch[:40]:
        print("  %-10s %6d words  %s%s" % (c["file"], c["words"], c["title"], ("  (pp. %d-%d)" % tuple(c["pages"])) if c.get("pages") else ""))
    if len(man_ch) > 40:
        print("  ... %d more" % (len(man_ch) - 40))
    for w in warns:
        print("  WARNING  " + w)
    sample = " ".join(c["text"] for c in chapters)[:400000].lower().split()
    common = set("the of and to a in is that it for as with was on be by are this or from at an which not have has had were but can their one all".split())
    n = max(1, len(sample))
    share = sum(1 for w in sample if w.strip(".,;:()'\"") in common) / n
    odd = sum(1 for w in sample if re.search(r"[^\w.,;:()'\"\-!?’“”—–]", w)) / n
    man["text_quality"] = {"common_word_share": round(share, 3), "odd_character_share": round(odd, 3)}
    if share < 0.29 or odd > 0.012:      # clean English prose measured 0.31 to 0.33 common words and under 0.01 odd characters
        warns.append("text quality looks poor (%d%% common English words, %.1f%% words with stray symbols), which usually means OCR errors. Quote nothing from it, treat figures and names as unverified, and re-OCR the scan if you can" % (round(share * 100), odd * 100))
        man["warnings"] = warns
    (out / "manifest.json").write_text(json.dumps(man, indent=1, ensure_ascii=False), encoding="utf-8")
    if total < 3000:
        print("  WARNING  very little text (%d words): check the file is the whole book" % total)
    return man


def main():
    for s in (sys.stdout, sys.stderr):                      # Windows consoles default to cp1252 and crash on symbols such as the fraction slash
        try:
            s.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("files", nargs="*")
    ap.add_argument("--key")
    ap.add_argument("--title")
    ap.add_argument("--found-by", choices=["user", "source-discovery", "unknown"], help="how the source was found: the user supplied it, the per-course source search found it, or unknown")
    ap.add_argument("--url", help="where it was found or downloaded from")
    ap.add_argument("--query", help="the search that found it, if any")
    ap.add_argument("--note", help="anything else worth keeping about where it came from")
    a = ap.parse_args()
    if not (ROOT / "courses" / a.course).is_dir():
        sys.exit("no course folder courses/%s" % a.course)
    files = [Path(f) for f in a.files]
    if not files:
        inbox = ROOT / "source ingest" / a.course
        files = sorted(p for p in inbox.glob("*") if p.suffix.lower() in READERS and p.name.upper() not in ("READING-LIST.MD", "README.MD")) if inbox.is_dir() else []
        if not files:
            sys.exit("no files given and nothing in %s. Put the books there, or pass their paths." % inbox)
    if (a.key or a.title) and len(files) > 1:
        sys.exit("--key and --title go with a single file")
    for f in files:
        if not f.exists():
            sys.exit("not found: %s" % f)
        ingest(a.course, f, a.key, a.title, a.found_by, a.url, a.query, a.note)


if __name__ == "__main__":
    main()
