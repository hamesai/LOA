#!/usr/bin/env python3
"""Finds the chapter file a citation really rests on, for refs whose p: field matches no chapter or covers a whole book.

    python _template/source_repoint.py <course>                 report what it would do
    python _template/source_repoint.py <course> --write         apply it
    python _template/source_repoint.py <course> --split gha-vii --split gha-viii --write

Each chapter file of the cited book is scored by how many of the citing sentences' names and figures it contains
(the matching rules of source_verify.py). Two cases:

  ref repoint   a ref whose p: matches no chapter ("Chapter 19" in a book whose files are named index_split_025):
                the file with the highest total score over all its citing sentences is written into p:, as
                "Chapter 19 (ch-020.txt)". Only when the winner clearly beats the runner-up.
  --split KEY   a ref that covers a whole volume ("Chapters 1 to 30"): every sentence citing it gets its own chapter
                ref, KEY-chNN, made from the manifest title, with the next file added when the book's chapters run
                over a file boundary. Sentences with no clear winner keep the whole-volume ref and are listed.

Nothing here proves a claim: run source_verify.py afterwards. Every pointer it writes is then checked for numbers and
names like any other, and a pointer it got wrong shows up as a flag.
"""
import argparse
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import source_lib as S  # noqa: E402
import source_map as M  # noqa: E402
import source_verify as V  # noqa: E402

ROOT = S.ROOT


def chapter_texts(d, man):
    """Candidate files: everything not skipped on purpose (bibliographies, indexes and other back matter are skipped)."""
    sk = S.skipped(d)
    out = []
    for c in man["chapters"]:
        if c["file"] in sk:
            continue
        t = V.norm_book((d / c["file"]).read_text(encoding="utf-8"))
        out.append((c["file"], c["title"], c["words"], t))
    return out


def score(seg, ref, txt):
    lseg = re.sub(r"(?<=\d) (?=\d{3}\b)", "", V.norm(seg))
    nums = {n.strip(".,") for n in V.NUM.findall(lseg)}
    nums = {n for n in nums if len(n.replace(".", "").replace("/", "")) >= 3} - V.pub_years(ref)
    names = V.names_in(seg, ref)
    return 2 * sum(1 for n in nums if V.present(n, txt)) + sum(1 for n in names if V.name_present(n, txt)), len(nums) * 2 + len(names)


def segments(cid):
    """(module, key, segment) for every citation in the course."""
    mdir = ROOT / "courses" / cid / "modules"
    out = []
    for f in sorted(mdir.glob("course-%s-*.js" % cid)):
        mod = re.search(r"-(\w+)\.js$", f.name).group(1)
        for L in V.lessons(cid, mod):
            texts = []
            V.strings(L["blocks"], texts)
            for s in texts:
                last = 0
                for m in V.CITE.finditer(s):
                    out.append((mod, m.group(1), s[last:m.start()], f))
                    last = m.end()
    return out


def best(seg_list, ref, chs, skip_small=200):
    tot = {}
    for seg in seg_list:
        for fn, title, words, txt in chs:
            if words < skip_small:
                continue
            sc, _ = score(seg, ref, txt)
            # a sentence that names the chapter's author ("Uzoigwe's chapter") points at the file whose title or opening carries the name
            head = V.norm_book(title) + " " + txt[:800]
            sc += 6 * sum(1 for n in V.names_in(seg, {}) if len(n) >= 5 and n in head)
            tot[fn] = tot.get(fn, 0) + sc
    ranked = sorted(tot.items(), key=lambda kv: -kv[1])
    if not ranked or ranked[0][1] < 2:
        return None, ranked[:3]
    if len(ranked) > 1 and ranked[0][1] < ranked[1][1] + 2 and ranked[0][1] < 1.5 * ranked[1][1]:
        return None, ranked[:3]
    return ranked[0][0], ranked[:3]


def set_p(line, newp):
    if re.search(r'"?\bp"?\s*:\s*"', line):
        return re.sub(r'("?\bp"?\s*:\s*")[^"]*(")', lambda m: m.group(1) + newp.replace("\\", "") + m.group(2), line, count=1)
    return re.sub(r'\}\s*(,?)\s*$', lambda m: ', p: %s }%s' % (json.dumps(newp), m.group(1)), line, count=1)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("--split", action="append", default=[])
    ap.add_argument("--write", action="store_true")
    a = ap.parse_args()
    cid = a.course
    refs = M.load_refs(cid)
    books = V.Books(cid)
    segs = segments(cid)
    rp = ROOT / "courses" / cid / ("course-%s-refs.js" % cid)
    lines = rp.read_text(encoding="utf-8").split("\n")
    idx = {}
    for i, ln in enumerate(lines):
        mm = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', ln)
        if mm:
            idx[mm.group(1)] = i
    by_key = {}
    for mod, key, seg, f in segs:
        by_key.setdefault(key, []).append((mod, seg, f))

    cache = {}

    def chs_for(book):
        if book not in cache:
            d, man = books.srcs[book]
            cache[book] = chapter_texts(d, man)
        return cache[book]

    # 1. whole-ref repoints
    for key, r in sorted(refs.items()):
        if key in a.split or not r.get("b") or r["b"] not in books.srcs or key not in by_key:
            continue
        p = r.get("p", "")
        if not p or books.match(r["b"], p):
            continue
        win, ranked = best([s for _, s, _ in by_key[key]], r, chs_for(r["b"]))
        if not win:
            print("NO CLEAR FILE  {{%s}} p=%r  top: %s" % (key, p, ranked))
            continue
        newp = "%s (%s)" % (re.sub(r"\s*\(ch-[\d., ch-]+txt\)\s*$", "", p), win)
        print("repoint  {{%s}}  %r -> %r   top: %s" % (key, p, newp, ranked))
        if a.write and key in idx:
            lines[idx[key]] = set_p(lines[idx[key]], newp)

    # 2. whole-volume splits
    edits = {}   # module file -> list of (old segment+cite, new)
    newrefs = {}
    for key in a.split:
        r = refs[key]
        chs = chs_for(r["b"])
        names = [c["file"] for c in books.srcs[r["b"]][1]["chapters"]]
        for mod, seg, f in by_key.get(key, []):
            if len(re.sub(r"\{\{[^}]+\}\}|\[[A-Z /,]+\]", "", seg).strip()) < 25:
                continue
            win, ranked = best([seg], r, chs)
            if not win:
                print("KEEP WHOLE  module %s {{%s}}: %s   top: %s" % (mod, key, re.sub(r"\s+", " ", seg).strip()[:90], ranked))
                continue
            title = next(t for fn, t, w, x in chs if fn == win)
            cm = re.match(r"(?i)chapter\s+(\d+)", title)
            nk = "%s-ch%s" % (key, cm.group(1).zfill(2) if cm else win[3:6])
            nxt = names[names.index(win) + 1] if names.index(win) + 1 < len(names) else None
            files = win + (", " + nxt if nxt else "")
            newrefs[nk] = dict(t="%s, in %s" % (title, re.sub(r"\s*\(.*$", "", r["t"])), s=r.get("s", ""), u=r.get("u", ""), b=r["b"],
                               p="%s (%s)" % (title.split(":")[0], files))
            edits.setdefault(f, []).append((seg + "{{%s}}" % key, seg + "{{%s}}" % nk))
            print("split  module %s {{%s}} -> {{%s}}   top: %s" % (mod, key, nk, ranked))
    if a.write:
        for nk, d in sorted(newrefs.items()):
            if nk not in idx:
                close = max(i for i, ln in enumerate(lines) if ln.strip().startswith("});"))
                prev = close - 1
                while not lines[prev].strip():
                    prev -= 1
                if not lines[prev].rstrip().endswith(","):
                    lines[prev] = lines[prev].rstrip() + ","
                lines.insert(close, "  %s: %s," % (json.dumps(nk), json.dumps(d, ensure_ascii=False)))
        # last entry must not end with a stray comma for old JS engines; trailing commas are fine in modern JS
        rp.write_text("\n".join(lines), encoding="utf-8")
        for f, pairs in edits.items():
            t = f.read_text(encoding="utf-8")
            n = 0
            for old, new in pairs:
                o, nw = json.dumps(old, ensure_ascii=False)[1:-1], json.dumps(new, ensure_ascii=False)[1:-1]
                if t.count(o) >= 1:
                    t = t.replace(o, nw, 1); n += 1
                else:
                    print("could not place edit in %s: %s" % (f.name, old[-80:]))
            f.write_text(t, encoding="utf-8")
            print("%s: %d citations re-pointed" % (f.name, n))


if __name__ == "__main__":
    main()
