#!/usr/bin/env python3
"""Checks that sentences citing an ingested book are backed by the chapter they cite.

    python _template/source_verify.py <course> [--module 5] [--kind number|names|pointer|unread] [--waived]

For each lesson sentence that ends in a {{key}} citation to an ingested book (a ref with b: "<book>"), four checks run:

  pointer  the ref's p: field (for example "Chapter 12") must match a chapter in the book's manifest. A pointer that
           matches nothing is a wrong chapter pointer, and the sentence cannot be checked at all.
  unread   the cited chapter must be recorded as read in full (read.json). Citing a chapter nobody has read is a claim
           of sourcing that has not been earned.
  number   every number in the sentence must appear in the cited chapter, unless the sentence says it is our own work
           ("our arithmetic", "our inference", "illustrative"...). The publication year of the cited work is ignored.
  names    the proper names in the sentence (people, places, peoples, titles) must mostly appear in the cited chapter.
           When most of them do not, the sentence probably says something the chapter does not say, or cites the
           wrong chapter.

Matching is forgiving of scanned text: case, accents, letter-spaced words ("M a n s a"), digit-spaced numbers
("1 3 3 5"), thousands printed with spaces ("474 000"), OCR letters inside numbers ("l335", "1O76"), words broken
across lines with a hyphen, and year ranges printed short ("1312-35" for 1312 to 1335).

A flag is not always an error, but every flag must be resolved: correct the sentence, fix the pointer, read the
chapter, or record a waiver in courses/<course>/docs/verify-waivers.json after checking the chapter by hand:

    [{"key": "gha5-borno", "kind": "number", "item": "1498", "match": "Ali Gaji built",
      "reason": "chapter prints the date as 'c. 1497/8'; checked by hand", "checked": "14/11/2026"}]

"match" is a piece of the sentence, so a waiver stops applying when the sentence is rewritten. check_course.py fails
a course while any flag is neither fixed nor waived.
"""
import argparse
import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import source_lib as S  # noqa: E402
import source_map as M  # noqa: E402

ROOT = S.ROOT
OWN = re.compile(r"(?i)\b(our (arithmetic|inference|estimate|check|note|example|worked|caution|sum|addition|application)|illustrative|worked by hand|our own)\b")
NUM = re.compile(r"\d[\d,]*\.?\d*(?:/\d[\d,]*)?")
CITE = re.compile(r"\{\{([a-z0-9-]+)\}\}")
KINDS = ("pointer", "unread", "number", "names")

# Capitalised words that are not names a chapter must contain.
STOP = set("""
a an and as at but by for from he her his how if in into it its of on or our she so that the their them then there these
they this those to was we were what when where which while who why with you your after before about also although because
both during each every however many most much never often once only other over some such than though through under until
very yet one two three four five six seven eight nine ten first second third later early late north south east west
northern southern eastern western central upper lower great king queen sultan emperor mansa sarki oba alafin bey pasha
dey caliph shaykh prophet god lord sir saint st mount lake river cape bight gulf coast island islands sea ocean desert
africa african africans europe european europeans asia asian arab arabs arabic islam islamic muslim muslims christian
christians christianity jews jewish english french portuguese dutch british spanish italian german ottoman roman romans
greek greeks bce ce ad bc century centuries chapter chapters volume volumes vol unesco general history histories
probable contested firm thin evidence biased unsupported check rewrite verdict source note answer question claim
january february march april may june july august september october november december wikipedia library course
module lesson table figure map timeline who what
""".split())


def fold(s):
    s = unicodedata.normalize("NFKD", s)
    return "".join(ch for ch in s if not unicodedata.combining(ch))


def strings(o, out):
    if isinstance(o, str):
        out.append(o)
    elif isinstance(o, list):
        for x in o:
            strings(x, out)
    elif isinstance(o, dict):
        for k, v in o.items():
            if k not in ("t", "k", "a", "id"):
                strings(v, out)


def lessons(cid, mod):
    key = "%s-%s" % (cid, mod)
    js = ("const P=require(%s);const m=P.load(%s,%s);console.log(JSON.stringify(m.obj.lessons.map(l=>({title:l.title,blocks:l.blocks}))))"
          % (json.dumps(str(ROOT / "_template" / "course_patch.js").replace("\\", "/")), json.dumps(cid), json.dumps(key)))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    return json.loads(r.stdout) if r.returncode == 0 else []


_ONES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split()
_TENS = "_ _ twenty thirty forty fifty sixty seventy eighty ninety".split()
_ORD = {"first": 1, "second": 2, "third": 3, "fourth": 4, "fifth": 5, "sixth": 6, "seventh": 7, "eighth": 8, "ninth": 9,
        "tenth": 10, "eleventh": 11, "twelfth": 12, "thirteenth": 13, "fourteenth": 14, "fifteenth": 15, "sixteenth": 16,
        "seventeenth": 17, "eighteenth": 18, "nineteenth": 19, "twentieth": 20}


def words_for(n):
    """Spellings of a whole number up to 999 as a book might print it: 'eighty-five', 'eighty five', 'two hundred'."""
    if n < 20:
        return [_ONES[n]]
    if n < 100:
        return [_TENS[n // 10]] if n % 10 == 0 else ["%s-%s" % (_TENS[n // 10], _ONES[n % 10]), "%s %s" % (_TENS[n // 10], _ONES[n % 10])]
    if n < 1000:
        h = _ONES[n // 100] + " hundred"
        rest = n % 100
        hs = [h, "a hundred"] if n // 100 == 1 else [h]
        if rest == 0:
            return hs
        return [x + " " + w for x in hs for w in words_for(rest)] + [x + " and " + w for x in hs for w in words_for(rest)]
    return []


_MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august",
           "september", "october", "november", "december"]


def present(n, txt):
    """True if the number is in the text as digits, as a short year range, as a century, or spelled out."""
    if re.search(r"(?<!\d)%s(?!\d)" % re.escape(n), txt):
        return True
    # a lesson's DD/MM is a date; books print it as '4 August' or 'August 4'
    dm = re.fullmatch(r"(\d{1,2})/(\d{1,2})", n)
    if dm and 1 <= int(dm.group(2)) <= 12:
        d, mon = int(dm.group(1)), _MONTHS[int(dm.group(2)) - 1]
        mo = r"(%s|%s\.?)" % (mon, mon[:3])
        if re.search(r"(?<!\d)%d(st|nd|rd|th)? (day )?(of )?%s" % (d, mo), txt) or re.search(r"\b%s %d(?!\d)" % (mo, d), txt):
            return True
        if re.search(r"(?<![\d.])0?%d[.-]0?%d[.-]\d{2,4}\b" % (d, int(dm.group(2))), txt):   # '26.1.67', '11.11.1975'
            return True
    # a lesson's MM/YYYY: books print 'February 1881', 'Feb. 1881', 'February of 1881', '4 February 1881'
    my = re.fullmatch(r"(\d{1,2})/(\d{4})", n)
    if my and 1 <= int(my.group(1)) <= 12:
        mon = _MONTHS[int(my.group(1)) - 1]
        if re.search(r"\b(%s|%s\.?)\s*(of\s+|,\s*)?(\d{1,2}(st|nd|rd|th)?,?\s+)?%s\b" % (mon, mon[:3], my.group(2)), txt):
            return True
    if n.startswith("0.") and n[1:] in txt:
        return True
    if re.fullmatch(r"\d{4}", n):
        # second year of a short range: '1312-35', '1417-19', '1312 to 35'
        if re.search(r"(?<!\d)%s\d\d\s*(?:-|–|—|to|/)\s*%s(?!\d)" % (n[:2], n[2:]), txt):
            return True
        if re.search(r"(?<!\d)%s\d\s*(?:-|–|—|to|/)\s*%s(?!\d)" % (n[:3], n[3:]), txt):   # '1763-4'
            return True
        # a round year given as a century or millennium: 1100 -> 'eleventh/twelfth century', 1000 -> 'year 1000'/'millennium'
        if n.endswith("00"):
            c = int(n[:2])
            for w, v in _ORD.items():
                if v in (c, c + 1) and re.search(r"\b%s[- ]century" % w, txt):
                    return True
            if re.search(r"(?<!\d)%d(st|nd|rd|th)[- ]century" % (c + 1), txt) or re.search(r"(?<!\d)%d(st|nd|rd|th)[- ]century" % c, txt):
                return True
    if re.fullmatch(r"\d+", n):
        if int(n) <= 21:   # a century or other ordinal: '14th', 'fourteenth'
            ords = [w for w, v in _ORD.items() if v == int(n)]
            if any(re.search(r"\b%s" % w, txt) for w in ords) or re.search(r"(?<!\d)%s(st|nd|rd|th)\b" % n, txt):
                return True
        if int(n) < 1000:
            return any(re.search(r"\b%s\b" % re.escape(w), txt) for w in words_for(int(n)))
        if int(n) % 1000 == 0 and int(n) < 1000000:
            k = int(n) // 1000
            return any(re.search(r"\b%s thousand\b" % re.escape(w), txt) for w in words_for(k)) if k < 1000 else False
    return False


def _ocr_digits(m):
    t = m.group(0)
    if sum(ch.isdigit() for ch in t) < 2:
        return t
    return t.replace("l", "1").replace("i", "1").replace("o", "0")


def norm(s):
    s = fold(s).lower().replace("−", "-").replace("⁄", "/").replace("∕", "/")
    s = re.sub(r"(\d)\s*½", r"\1.5", s)
    s = re.sub(r"(\d)\s*¼", r"\1.25", s)
    s = re.sub(r"(\d)\s*¾", r"\1.75", s)
    s = re.sub(r"(?<=\d),(?=\d{3}\b)", "", s)
    return s


def norm_book(s):
    s = norm(s)
    s = re.sub(r"(?<![a-z\d])[il]o+(?![a-z])", lambda m: "1" + "0" * (len(m.group(0)) - 1), s)  # 'io', 'iooo' for 10, 1000
    s = s.replace("￾", "").replace("�", "a")                                                  # a lost accented letter ('t�dmekka')
    s = re.sub(r"(\w)-\s*\n\s*(\w)", r"\1\2", s)                                  # words broken across lines
    for _m in _MONTHS:                                                              # 'novembe r 1915', 'ma y 1945'
        s = re.sub(r"\b%s ?%s\b" % (_m[:-1], _m[-1]), _m, s) if len(_m) > 3 else s
    s = re.sub(r"\bma y\b", "may", s)
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"\b\d(?: \d){2,}\b", lambda m: m.group(0).replace(" ", ""), s)       # '1 3 3 5'
    s = re.sub(r"\b[a-z](?: [a-z]){2,}\b", lambda m: m.group(0).replace(" ", ""), s)  # 'm a n s a', 'm a y'
    s = re.sub(r"(?<![a-z\d])[il]o+(?![a-z])", lambda m: "1" + "0" * (len(m.group(0)) - 1), s)  # 'io', 'iooo' for 10, 1000
    s = re.sub(r"(?<=\d) ?ooo\b", "000", s)                                          # '10 ooo'
    s = re.sub(r"(?<![a-z])[0-9lio]{3,}(?![a-z])", _ocr_digits, s)                    # 'l335', '1o76'
    s = re.sub(r"(?<=\d) (?=\d{3}\b)", "", s)                                        # '474 000'
    return s


def pub_years(ref):
    t = ref.get("t", "")
    return (set(re.findall(r"\b(1[5-9]\d\d|20\d\d)\)", t)) | set(re.findall(r",\s*(1[5-9]\d\d|20\d\d)\b", t))
            | set(re.findall(r"\((1[5-9]\d\d|20\d\d)[;,]", t)))


def names_in(seg, ref):
    """Proper names in a sentence piece: capitalised words not at a sentence start, minus common words and the ref's own words."""
    own = {w.lower() for w in re.findall(r"[A-Za-z]+", fold(ref.get("t", "")))}
    out = []
    for sent in re.split(r"(?<=[.!?:;])\s+|\(|\)|'", fold(seg)):
        toks = re.findall(r"[A-Za-z][A-Za-z\-]+", sent)
        for i, w in enumerate(toks):
            base = w.split("-")[0]
            if i == 0 or not base[:1].isupper() or base.isupper() and len(base) <= 4:
                continue
            lw = base.lower()
            if len(lw) < 4 or lw in STOP or lw in own:
                continue
            if lw not in out:
                out.append(lw)
    return out


_SKEL = {}


def skel(w):
    for a, b in (("dj", "j"), ("kh", "k"), ("gh", "g"), ("sh", "s"), ("ph", "f"), ("q", "k"), ("c", "k")):
        w = w.replace(a, b)
    return re.sub(r"[aeiouyhw'\-]", "", w)


def name_present(n, txt):
    if n in txt:
        return True
    # tolerate common transliteration endings and plurals: 'sefuwa'/'sayfuwa', 'almoravids'/'almoravid'
    stem = n[:max(4, len(n) - 2)]
    if stem in txt:
        return True
    # scanned text drops accented letters ('sijilm�sa') and spellings vary ('sumanguru'/'sumaoro'):
    # compare consonant skeletons, allowing the text's word to have lost one letter
    key = id(txt)
    if key not in _SKEL:
        words = set(re.findall(r"[a-z�]{3,}", txt))
        sk = set()
        for w in words:
            sk.add(skel(w.replace("�", "")))
        _SKEL[key] = sk
    s = skel(n)
    if len(s) < 3:
        return False
    if s in _SKEL[key]:
        return True
    return any(s[:i] + s[i + 1:] in _SKEL[key] for i in range(len(s))) if len(s) >= 5 else False


class Books:
    def __init__(self, cid):
        self.cid, self.cache = cid, {}
        self.srcs = {man["key"]: (d, man) for d, man in S.sources(cid)}

    def match(self, book, p):
        """The chapter files a ref's p: field points to (empty list when it matches nothing)."""
        d, man = self.srcs[book]
        files = []
        m = re.search(r"(?i)chapter\s+(\d+)", p or "")
        mf = re.findall(r"ch-\d+\.txt", p or "")   # explicit files: "Chapter 1 (ch-002.txt, ch-003.txt)"
        inside = False
        for c in man["chapters"]:
            title = c["title"].strip().lower()
            if mf and c["file"] in mf:
                files.append(c["file"]); inside = True
            elif not mf and m and re.match(r"^(chapter\s*)?%s(?=\b|[a-z:])" % m.group(1), title):
                files.append(c["file"]); inside = True
            elif not mf and p and not m and p.lower() in title:
                files.append(c["file"]); inside = True
            elif inside and re.match(r"^(part\d+)?$", title):   # untitled continuation parts of the same chapter
                files.append(c["file"])
            else:
                inside = False
        return files

    def text(self, book, p):
        k = (book, p)
        if k in self.cache:
            return self.cache[k]
        d, man = self.srcs[book]
        files = self.match(book, p) if p else []
        if files:
            txt = "\n".join((d / f).read_text(encoding="utf-8") for f in files)
        elif (d / "full.txt").exists():
            txt = (d / "full.txt").read_text(encoding="utf-8")
        else:
            txt = "\n".join((d / c["file"]).read_text(encoding="utf-8") for c in man["chapters"])
        self.cache[k] = (norm_book(txt), files)
        return self.cache[k]


def load_waivers(cid):
    p = ROOT / "courses" / cid / "docs" / "verify-waivers.json"
    ws = S.load(p, [])
    good = [w for w in ws if w.get("reason") and len(w["reason"]) >= 20 and w.get("kind") in KINDS and w.get("key") and w.get("match")]
    return good, len(ws) - len(good)


def waived(waivers, kind, key, seg, item=None):
    flat = re.sub(r"\s+", " ", seg)
    for w in waivers:
        if w["kind"] == kind and w["key"] == key and w["match"] in flat and (item is None or w.get("item") in (None, item)):
            w["_used"] = True
            return True
    return False


def check(cid, mods, with_waived=False):
    """Returns (checked, problems). Each problem: module, lesson, key, kind, items, where, text, waived."""
    refs = M.load_refs(cid)
    books = Books(cid)
    waivers, _bad = load_waivers(cid)
    problems, checked = [], 0
    for mod in mods:
        for L in lessons(cid, mod):
            texts = []
            strings(L["blocks"], texts)
            for s in texts:
                last = 0
                cites = list(CITE.finditer(s))
                for ci, m in enumerate(cites):
                    seg, last = s[last:m.start()], m.end()
                    key = m.group(1)
                    # a run of citations after one sentence ("... {{a}} {{b}} [TAG]") is checked against all of them together
                    group = [key]
                    for nx in cites[ci + 1:]:
                        between = s[(cites[cites.index(nx) - 1]).end():nx.start()]
                        if re.sub(r"\[[A-Z /,]+\]|\s", "", between):
                            break
                        group.append(nx.group(1))
                    r = refs.get(key)
                    if not r or not r.get("b") or r["b"] not in books.srcs:
                        continue
                    if len(re.sub(r"\{\{[^}]+\}\}|\[[A-Z /,]+\]", "", seg).strip()) < 25:
                        continue   # a bare citation after a table cell or a heading
                    checked += 1
                    p = r.get("p", "")
                    txt, files = books.text(r["b"], p)
                    flat = re.sub(r"\s+", " ", seg).strip()
                    base = dict(module=mod, lesson=L["title"], key=key, where=p or "whole book", text=flat[:170])

                    def flag(kind, items, item_for_waiver=None):
                        w = all(waived(waivers, kind, key, seg, it) for it in (items or [None]))
                        if w and not with_waived:
                            return
                        problems.append(dict(base, kind=kind, items=items, waived=w))

                    d, man = books.srcs[r["b"]]
                    if p and not files:
                        flag("pointer", [p])
                    if files:
                        rd = S.read_set(d)
                        unread = [f for f in files if f not in rd and next(c["words"] for c in man["chapters"] if c["file"] == f) >= 100]   # tiny files are title stubs
                        if unread:
                            flag("unread", unread)
                    elif not p:
                        # a whole-book citation: fine only if the book is read in full
                        if not S.complete(d, man):
                            flag("unread", ["whole book cited, not read in full"])
                    co = [refs.get(k) for k in group[1:]]
                    if any(not c or not c.get("b") or c["b"] not in books.srcs for c in co):
                        continue   # co-cited with a source that is not an ingested text: its figures cannot be checked here
                    for c in co:
                        txt += "\n" + books.text(c["b"], c.get("p", ""))[0]
                    if not OWN.search(seg):
                        lseg = re.sub(r"(?<=\d) (?=\d{3}\b)", "", norm(seg))
                        # '2.74 million' -> '2740000' when the book prints the full figure; both forms are tried
                        alt = {mm.group(1): str(round(float(mm.group(1)) * 1e6)) for mm in re.finditer(r"\b(\d+\.\d{1,3}) million\b", lseg)}
                        lseg = re.sub(r"\b(\d\d)(\d\d) to (\d\d)(?![.,/]?\d)\b(?!\s+in\b)", lambda mm: "%s%s to %s%s" % (mm.group(1), mm.group(2), mm.group(1), mm.group(3)) if mm.group(3) > mm.group(2) else mm.group(0), lseg)   # '1496 to 97' -> '1496 to 1497', not '29/01'
                        lseg = re.sub(r"\b(\d\d\d)(\d) to (\d)(?![.,/]?\d)\b(?!\s+in\b)", lambda mm: "%s%s to %s%s" % (mm.group(1), mm.group(2), mm.group(1), mm.group(3)) if mm.group(3) > mm.group(2) else mm.group(0), lseg)     # '1833 to 4', not '1921 to 1.179'
                        nums = {n.strip(".,") for n in NUM.findall(lseg)}
                        nums = {n for n in nums if n and (len(n.replace(".", "").replace("/", "")) >= 2 or "." in n)}
                        nums -= pub_years(r)
                        missing = sorted(n for n in nums if not present(n, txt) and not (n in alt and present(alt[n], txt)))
                        if missing:
                            flag("number", missing)
                    nm = names_in(seg, r)
                    if len(nm) >= 2:
                        gone = [n for n in nm if not name_present(n, txt)]
                        if len(gone) >= 3 or (gone and len(gone) * 2 > len(nm)):
                            flag("names", gone)
    return checked, problems


def unused_waivers(cid):
    ws, _ = load_waivers(cid)
    return ws


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("--module")
    ap.add_argument("--kind", choices=KINDS)
    ap.add_argument("--waived", action="store_true", help="also list flags that a waiver covers")
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()
    mdir = ROOT / "courses" / a.course / "modules"
    mods = [a.module] if a.module else sorted(re.search(r"-(\w+)\.js$", f.name).group(1) for f in mdir.glob("course-%s-*.js" % a.course))
    checked, problems = check(a.course, mods, a.waived)
    if a.kind:
        problems = [p for p in problems if p["kind"] == a.kind]
    if a.json:
        print(json.dumps(problems, indent=1, ensure_ascii=False))
        return 1 if any(not p["waived"] for p in problems) else 0
    words = {"pointer": "pointer matches no chapter", "unread": "cites a section not read in full",
             "number": "number not in the cited text", "names": "names not in the cited text"}
    for p in problems:
        print("%smodule %s, %s: %s: %s (cited {{%s}}, %s)\n    %s" % ("[waived] " if p["waived"] else "", p["module"], p["lesson"], words[p["kind"]],
                                                              ", ".join(p["items"]), p["key"], p["where"], p["text"]))
    by = {k: sum(1 for p in problems if p["kind"] == k and not p["waived"]) for k in KINDS}
    print("%d sourced sentences checked; open flags: %d pointer, %d unread, %d number, %d names" % (checked, by["pointer"], by["unread"], by["number"], by["names"]))
    return 1 if any(by.values()) else 0


if __name__ == "__main__":
    sys.exit(main())
