#!/usr/bin/env python3
"""Checks that numbers in sourced sentences really appear in the source text they cite.

    python _template/source_verify.py <course> [--module 5] [--all]

For each lesson sentence that ends in a {{key}} citation to an ingested book (a ref with b: "<book>"), every number in
that sentence must appear in the cited chapter (matched from the ref's p: field, for example "Chapter 12"), unless the
sentence says it is our own work ("our arithmetic", "our inference", "illustrative"...). A number that is not found is
reported. It is not always an error: scanned books garble digits, and a lesson may round a figure. It is the check that
catches a figure copied wrongly from a note into a lesson, which a human skim does not.
"""
import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import source_lib as S  # noqa: E402
import source_map as M  # noqa: E402

ROOT = S.ROOT
OWN = re.compile(r"(?i)\b(our (arithmetic|inference|estimate|check|note|example|worked|caution)|illustrative|worked by hand|our own)\b")
NUM = re.compile(r"\d[\d,]*\.?\d*(?:/\d[\d,]*)?")
CITE = re.compile(r"\{\{([a-z0-9-]+)\}\}")


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


def words_for(n):
    """Spellings of a whole number up to 999 as a book might print it: 'eighty-five', 'eighty five', 'two hundred'."""
    if n < 20:
        return [_ONES[n]]
    if n < 100:
        return [_TENS[n // 10]] if n % 10 == 0 else ["%s-%s" % (_TENS[n // 10], _ONES[n % 10]), "%s %s" % (_TENS[n // 10], _ONES[n % 10])]
    if n < 1000:
        h = _ONES[n // 100] + " hundred"
        rest = n % 100
        return [h] if rest == 0 else [h + " " + w for w in words_for(rest)] + [h + " and " + w for w in words_for(rest)]
    return []


def present(n, txt):
    """True if the number is in the text as digits (with or without a leading zero or a trailing th), or spelled out."""
    if n in txt:
        return True
    if n.startswith("0.") and n[1:] in txt:
        return True
    if re.fullmatch(r"\d+", n):
        return any(w in txt for w in words_for(int(n)))
    return False


def norm(s):
    s = s.lower().replace("−", "-").replace("⁄", "/").replace("∕", "/")
    s = re.sub(r"(\d)\s*\u00bd", r"\1.5", s)
    s = re.sub(r"(\d)\s*\u00bc", r"\1.25", s)
    s = re.sub(r"(\d)\s*\u00be", r"\1.75", s)
    return re.sub(r"(?<=\d),(?=\d{3}\b)", "", s)


class Books:
    def __init__(self, cid):
        self.cid, self.cache = cid, {}
        self.srcs = {man["key"]: (d, man) for d, man in S.sources(cid)}

    def text(self, book, p):
        k = (book, p)
        if k in self.cache:
            return self.cache[k]
        d, man = self.srcs[book]
        files = []
        m = re.match(r"(?i)chapter\s+(\d+)", p or "")
        inside = False
        for c in man["chapters"]:
            title = c["title"].strip().lower()
            if m and re.match(r"^(chapter\s*)?%s(?=\b|[a-z:])" % m.group(1), title):
                files.append(c["file"])
                inside = True
            elif p and not m and p.lower() in title:
                files.append(c["file"])
                inside = True
            elif inside and re.match(r"^(part\d+)?$", title):   # untitled continuation parts of the same chapter
                files.append(c["file"])
            else:
                inside = False
        if files:
            txt = "\n".join((d / f).read_text(encoding="utf-8") for f in files)
        elif (d / "full.txt").exists():
            txt = (d / "full.txt").read_text(encoding="utf-8")
        else:
            txt = "\n".join((d / c["file"]).read_text(encoding="utf-8") for c in man["chapters"])
        self.cache[k] = (norm(txt), bool(files))
        return self.cache[k]


def check(cid, mods):
    refs = M.load_refs(cid)
    books = Books(cid)
    problems, checked = [], 0
    for mod in mods:
        for L in lessons(cid, mod):
            texts = []
            strings(L["blocks"], texts)
            for s in texts:
                last = 0
                for m in CITE.finditer(s):
                    seg, last = s[last:m.start()], m.end()
                    r = refs.get(m.group(1))
                    if not r or not r.get("b") or r["b"] not in books.srcs:
                        continue
                    if OWN.search(seg):
                        continue
                    nums = {norm(n).strip(".,") for n in NUM.findall(seg)}
                    nums = {n for n in nums if n and (len(n.replace(".", "").replace("/", "")) >= 2 or "." in n)}
                    if not nums:
                        continue
                    txt, exact = books.text(r["b"], r.get("p", ""))
                    checked += 1
                    missing = sorted(n for n in nums if not present(n, txt))
                    if missing:
                        problems.append(dict(module=mod, lesson=L["title"], key=m.group(1), where=r.get("p", "whole book") + ("" if exact else " (chapter not matched, searched the whole book)"),
                                             numbers=missing, text=re.sub(r"\s+", " ", seg).strip()[:150]))
    return checked, problems


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("--module")
    a = ap.parse_args()
    mdir = ROOT / "courses" / a.course / "modules"
    mods = [a.module] if a.module else sorted(re.search(r"-(\w+)\.js$", f.name).group(1) for f in mdir.glob("course-%s-*.js" % a.course))
    checked, problems = check(a.course, mods)
    for p in problems:
        print("module %s, %s: %s not found in %s (cited {{%s}})\n    %s" % (p["module"], p["lesson"], ", ".join(p["numbers"]), p["where"], p["key"], p["text"]))
    print("%d sourced sentences with numbers checked, %d with a number not found in the cited text" % (checked, len(problems)))
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
