"""Builds the data behind "How far the sources were read" on a course page.

    python _template/source_map.py <course-id>        prints the map as JSON (kit.py sources writes it into the page script)

Two inputs, so the page never relies on hand-written claims about the books:

1. Ingested books and papers (courses/<id>/sources/<key>/): status, coverage, skipped sections and reasons, findings
   and the review status come from the read records that source_read.py keeps. Modules that cite a book come from the
   {{key}} citations in the lesson files, matched to refs that carry b: "<key>".
2. The sources-read note, courses/<id>/docs/course-<id>-notes.md, for everything else (web pages, articles, manuals).
   Notes written in the standard format below are parsed into a table. Older free-text notes are shown unchanged
   under "Full notes".

Each source also carries origin: "user" for every ingested book or paper and for any ref whose source line says it was
supplied by the learner. The page shows an "Added by you" tag for these, and each card opens a modal built from the
lessons' own citations (modules, lessons, chapters, the course's wording) and from the finding records.

Standard note format (one source per line, four fields separated by a bar):

    # Course title: how far the sources were read
    Short intro sentence (optional).

    ## Sources
    - full | Wikipedia: Shutter angle | 1 | The formula and the 180 degree convention.
    - part | Wikipedia: Crop factor | 2, 3 | Introduction and sensor sections only.
    - search | Wikipedia: Super 8 film | 6 | Found by searching for numbers; the page was not read through.
    - none | Lens maker manuals | | Not read.

    ## Book notes
    - story | Used for mood, point of view and pace. Limits worth knowing.

    ## Not read, or not verified
    - Any plain bullet. Every other "##" section becomes a collapsible list under its own heading.

Status words: full (read from start to end), part (some sections read), search (found by searching, not read
through), none (not read). Modules: numbers separated by commas, "cap" for the capstone, "all", or empty.
"""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import source_lib as S  # noqa: E402

ROOT = S.ROOT
STATUS = ("full", "part", "search", "none", "unknown")
MOD_RE = re.compile(r"course-%s-(\w+)\.js$")


def parse_notes(md):
    """Return dict(title, intro, sources, book_notes, sections, standard)."""
    out = dict(title="", intro="", sources=[], book_notes={}, sections=[], standard=False)
    cur = None
    intro = []
    for raw in md.splitlines():
        line = raw.rstrip()
        m = re.match(r"^(#+)\s+(.*)$", line)
        if m:
            level, text = len(m.group(1)), m.group(2).strip()
            if level == 1:
                out["title"] = text
                cur = None
                continue
            cur = dict(title=text, items=[])
            out["sections"].append(cur)
            continue
        if not line.strip():
            continue
        if cur is None:
            intro.append(line.strip())
            continue
        b = re.match(r"^\s*[-*]\s+(.*)$", line)
        cur["items"].append(b.group(1).strip() if b else line.strip())
    out["intro"] = " ".join(intro)
    keep = []
    for sec in out["sections"]:
        t = sec["title"].lower()
        if t == "sources":
            out["standard"] = True
            for it in sec["items"]:
                f = [x.strip() for x in it.split("|")]
                if len(f) >= 2 and f[0].lower() in STATUS:
                    out["sources"].append(dict(status=f[0].lower(), name=f[1], modules=parse_modules(f[2] if len(f) > 2 else ""), note=f[3] if len(f) > 3 else ""))
        elif t.startswith("book notes"):
            for it in sec["items"]:
                f = [x.strip() for x in it.split("|", 1)]
                if len(f) == 2:
                    out["book_notes"][f[0]] = f[1]
        else:
            keep.append(sec)
    out["sections"] = keep
    return out


def parse_modules(s):
    s = (s or "").strip().lower()
    if not s:
        return []
    if s == "all":
        return ["all"]
    res = []
    for part in re.split(r"[,\s]+", s):
        if part == "cap":
            res.append("cap")
        elif part.isdigit():
            res.append(int(part))
    return res


def cite_modules(cid):
    """book key -> sorted module labels, from {{key}} citations whose refs carry b: "<book>"."""
    refs = ROOT / "courses" / cid / ("course-%s-refs.js" % cid)
    by_key = {}
    if refs.exists():
        for m in re.finditer(r'"([a-z0-9-]+)":\s*\{[^{}]*?\bb:\s*"([^"]+)"', refs.read_text(encoding="utf-8")):
            by_key[m.group(1)] = m.group(2)
    res = {}
    mdir = ROOT / "courses" / cid / "modules"
    if mdir.is_dir():
        for f in sorted(mdir.glob("course-%s-*.js" % cid)):
            m = re.search(r"course-%s-(\w+)\.js$" % re.escape(cid), f.name)
            if not m:
                continue
            label = int(m.group(1)) if m.group(1).isdigit() else m.group(1)
            for k in set(re.findall(r"\{\{([a-z0-9-]+)\}\}", f.read_text(encoding="utf-8"))):
                if k in by_key:
                    res.setdefault(by_key[k], set()).add(label)
    return {b: sorted(v, key=lambda x: (isinstance(x, str), x)) for b, v in res.items()}


def load_refs(cid):
    """All refs the lessons can cite: the course's refs file plus the shared lecturer refs, as {key: {t, s, b, p}}."""
    import subprocess
    files = [ROOT / "courses" / cid / ("course-%s-refs.js" % cid), ROOT / "shared" / "course-lecturer-refs.js"]
    files = [str(f).replace("\\", "/") for f in files if f.exists()]
    if not files:
        return {}
    js = "global.window={};%s;console.log(JSON.stringify(window.COURSE_REFS||{}))" % ";".join("require(%s)" % json.dumps(f) for f in files)
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        raise SystemExit("could not load the refs for %s (a syntax error in the refs file?):\n%s" % (cid, r.stderr.strip()[:400]))
    return json.loads(r.stdout)


def cited_keys(cid):
    """{key: sorted module labels} for every {{key}} citation in the course's lesson files."""
    res = {}
    mdir = ROOT / "courses" / cid / "modules"
    if mdir.is_dir():
        for f in sorted(mdir.glob("course-%s-*.js" % cid)):
            m = re.search(r"course-%s-(\w+)\.js$" % re.escape(cid), f.name)
            if not m:
                continue
            label = int(m.group(1)) if m.group(1).isdigit() else m.group(1)
            for k in set(re.findall(r"\{\{([a-z0-9-]+)\}\}", f.read_text(encoding="utf-8"))):
                res.setdefault(k, set()).add(label)
    return {k: sorted(v, key=lambda x: (isinstance(x, str), x)) for k, v in res.items()}


PART_WORDS = ("as far as", "in part", "only the", "excerpt", "opening", "passages", "sections read", "section read", "partly", "earlier pass", "this pass")


def derive_status(t):
    """Read in full / in part / by search, taken from the words in the ref's own title. 'unknown' when it says nothing."""
    tl = t.lower()
    if "found by search" in tl or "search only" in tl:
        return "search"
    full = "read in full" in tl
    part = any(w in tl for w in PART_WORDS) or bool(re.search(r"\bread\s*\)\s*$", tl))
    if full and not part:
        return "full"
    if part:
        return "part"
    if full:
        return "full"
    return "unknown"


def split_title(t):
    m = re.match(r"^(.*?)\s*\((.*)\)\s*(.*)$", t)
    if not m:
        return t.strip(), ""
    note = m.group(2).strip()
    rest = m.group(3).strip(" ,.")
    if rest:
        note = note + ", " + rest
    note = re.sub(r"(?i)[,;]?\s*\bread in (full|part)\b[,;]?", ",", note)   # the status pill already says this
    note = re.sub(r"\s+", " ", note).strip(" ,;.")
    return m.group(1).strip(" ,"), (note[:1].upper() + note[1:] if note else "")


def pages_from_refs(cid):
    """Non-book sources: every ref the lessons cite that is not tied to an ingested book, with modules from the citations."""
    refs, cites = load_refs(cid), cited_keys(cid)
    pages = []
    for k, mods in cites.items():
        r = refs.get(k)
        if not r or r.get("b"):
            continue
        name, note = split_title(r.get("t", k))
        pages.append(dict(key=k, status=derive_status(r.get("t", "")), name=name, by=r.get("s", ""), modules=mods, note=note))
    pages.sort(key=lambda p: (min((m for m in p["modules"] if isinstance(m, int)), default=99), p["name"].lower()))
    return pages


def review_status(cid, key):
    f = ROOT / "courses" / cid / "docs" / ("source-review-%s.md" % key)
    if not f.exists():
        return ""
    m = re.search(r"^Status:\s*(\w+)", f.read_text(encoding="utf-8"), re.M)
    return m.group(1) if m else ""


def clean_title(t):
    t = re.sub(r"^\s*\d+\s*", "", t).strip()
    return t or "untitled"


def group_skipped(sk, by_file):
    """Skipped sections grouped by reason: [{reason, titles}]."""
    groups = {}
    for f, r in sk.items():
        groups.setdefault(r, []).append(clean_title(by_file[f]["title"]) if f in by_file else f)
    return [dict(reason=r, titles=v) for r, v in groups.items()]


def pack_modules(cid):
    """{module label: title} from the pack file. Labels are integers, or "cap" for the capstone."""
    pf = ROOT / "courses" / cid / ("pack-%s.js" % cid)
    out = {}
    if not pf.exists():
        return out
    s = pf.read_text(encoding="utf-8")
    try:
        d = json.loads(s[s.index("ARCHIVE_ADD(") + len("ARCHIVE_ADD("): s.rindex(");")])
    except Exception:
        return out
    for m in d.get("modules", []):
        n = str(m.get("number", ""))
        out["cap" if m.get("kind") == "capstone" else (int(n) if n.isdigit() else n)] = m.get("title", "")
    return out


def _strings(o, out):
    if isinstance(o, str):
        out.append(o)
    elif isinstance(o, list):
        for x in o:
            _strings(x, out)
    elif isinstance(o, dict):
        for k, v in o.items():
            if k not in ("t", "k", "a", "id"):
                _strings(v, out)


def lesson_uses(cid, refs, source_of):
    """{source id: {module label: {lesson title: {chapters, points}}}} from the {{key}} citations in the lessons.
    source_of maps a ref key to the id of the source it belongs to (the book key, or the ref key for other sources)."""
    import subprocess
    mods = pack_modules(cid)
    keys = ["%s-%s" % (cid, ("cap" if lab == "cap" else lab)) for lab in mods]
    js = ("const P=require(%s);const out={};for(const k of %s){try{const m=P.load(%s,k);out[k]=m.obj.lessons.map(l=>({title:l.title,blocks:l.blocks}));}catch(e){}}console.log(JSON.stringify(out))"
          % (json.dumps(str(ROOT / "_template" / "course_patch.js").replace("\\", "/")), json.dumps(keys), json.dumps(cid)))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        return {}
    data = json.loads(r.stdout)
    uses = {}
    for lab in mods:
        key = "%s-%s" % (cid, lab)
        for les in data.get(key, []):
            texts = []
            _strings(les["blocks"], texts)
            for s in texts:
                last = 0
                for m in re.finditer(r"\{\{([a-z0-9-]+)\}\}", s):
                    seg, last = s[last:m.start()], m.end()
                    src = source_of.get(m.group(1))
                    if not src:
                        continue
                    point = re.sub(r"\{\{[^}]*\}\}", "", seg)
                    point = re.sub(r"\s+", " ", point).strip()
                    r0 = refs.get(m.group(1), {})
                    ch = r0.get("p") or re.sub(r":? read in full.*$", "", r0.get("t", ""))
                    ent = uses.setdefault(src, {}).setdefault(lab, {}).setdefault(les["title"], {"chapters": [], "points": []})
                    if ch and ch not in ent["chapters"]:
                        ent["chapters"].append(ch)
                    if len(point) >= 25 and point not in ent["points"] and len(ent["points"]) < 5:
                        ent["points"].append(point)
    out = {}
    for src, bymod in uses.items():
        out[src] = [dict(module=lab, title=mods.get(lab, ""), lessons=[dict(title=t2, chapters=v["chapters"], points=v["points"]) for t2, v in bymod[lab].items()])
                    for lab in sorted(bymod, key=lambda x: (isinstance(x, str), x))]
    return out


def finding_detail(cid, key):
    """What happened to a book's findings: the mistakes checked, where findings were used, why others were skipped."""
    import source_apply as SA
    avoided, where, skipped = [], {}, {}
    for x in SA.all_findings(cid):
        if x["book"] != key:
            continue
        if x["state"] == "avoided":
            avoided.append(x["text"][:280])
        elif x["state"] == "applied" and x["note"]:
            where[x["note"]] = where.get(x["note"], 0) + 1
        elif x["state"] == "skipped" and x["note"]:
            skipped[x["note"]] = skipped.get(x["note"], 0) + 1
    top = lambda d: [dict(text=k, n=v) for k, v in sorted(d.items(), key=lambda kv: -kv[1])]
    return dict(avoided=avoided, where=top(where)[:10], skipped=top(skipped)[:8])


def build(cid):
    nf = ROOT / "courses" / cid / "docs" / ("course-%s-notes.md" % cid)
    md = nf.read_text(encoding="utf-8") if nf.exists() else ""
    notes = parse_notes(md) if md else dict(title="", intro="", sources=[], book_notes={}, sections=[], standard=False)
    mods = cite_modules(cid)
    books = []
    for d, man in S.sources(cid):
        nm = S.numbers(d, man)
        sk = S.skipped(d)
        by_file = {c["file"]: c for c in man["chapters"]}
        if not nm["unread"]:
            st = "full"
        elif nm["n_read"] > 0:
            st = "part"
        else:
            st = "none"
        fnd = S.findings(d)
        verdicts = {}
        for x in fnd:
            verdicts[x["verdict"]] = verdicts.get(x["verdict"], 0) + 1
        pct = round(100 * nm["read"] / nm["total"]) if nm["total"] else 0
        books.append(dict(
            key=man["key"], name=man.get("title", man["key"]), by=man.get("author", ""), words=nm["total"], status=st,
            read=nm["n_read"], skipped=group_skipped(sk, by_file),
            sections=nm["n"], pct=pct, unread=[clean_title(c["title"]) for c in nm["unread"]],
            findings=len(fnd), verdicts=verdicts, review=review_status(cid, man["key"]),
            modules=mods.get(man["key"], []), note=notes["book_notes"].get(man["key"], ""), prov=man.get("provenance", {})))
    try:   # what happened to each logged finding (used in a lesson, checked, skipped, still open)
        import source_apply as SA
        states = {}
        for x in SA.all_findings(cid):
            states.setdefault(x["book"], {}).setdefault(x["state"], 0)
            states[x["book"]][x["state"]] += 1
        for b in books:
            b["states"] = states.get(b["key"], {})
    except Exception:
        pass
    refs_all = load_refs(cid)
    source_of = {k: (r["b"] if r.get("b") else k) for k, r in refs_all.items()}
    uses = lesson_uses(cid, refs_all, source_of)
    for b in books:
        b["uses"] = uses.get(b["key"], [])
        # origin comes from the provenance recorded at ingest: "user", "discovery" (the per-course source search), or "" when it was never recorded
        b["origin"] = {"user": "user", "source-discovery": "discovery"}.get((b.get("prov") or {}).get("found_by"), "")
        try:
            b["detail"] = finding_detail(cid, b["key"])
        except Exception:
            b["detail"] = {}
    pages = pages_from_refs(cid)
    for pg in pages:
        pg["uses"] = uses.get(pg.get("key"), []) if pg.get("key") else []
        pg["origin"] = "user" if re.search(r"(?i)supplied by the learner|learner.supplied|added by the learner", pg.get("by", "") + " " + pg.get("note", "")) else ""
    seen = {p["name"].lower() for p in pages}
    for x in notes["sources"]:   # sources listed by hand in the note: things not cited in a lesson (videos, manuals, items not read)
        if x["name"].lower() not in seen:
            pages.append(dict(key="", by="", **x))
    counts = {s: 0 for s in STATUS}
    for x in books + pages:
        counts[x["status"]] += 1
    return dict(modules={str(k): v for k, v in pack_modules(cid).items()}, title=notes["title"], intro=notes["intro"], standard=notes["standard"], books=books, pages=pages,
                sections=notes["sections"], counts=counts, hasMd=bool(md))


if __name__ == "__main__":
    print(json.dumps(build(sys.argv[1]), indent=1, ensure_ascii=False))
