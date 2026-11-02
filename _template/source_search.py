#!/usr/bin/env python3
"""Search the sources ingested for a course, and see what has been read.

    python _template/source_search.py <course-id> "terms to find" [--key source] [-n 8]   best passages, with chapter and page
    python _template/source_search.py <course-id> --list                                   sources, chapters and read status
    python _template/source_search.py <course-id> --coverage                               one line per source: share of words read
    python _template/source_search.py <course-id> --read <key> ch-001.txt ...              record chapters you have read in full BY HAND

A search hit is a pointer, not a reading. For a source review, read the source in order with source_read.py, which serves the text
itself and records progress, so that "read in full" means the text was actually put in front of the reader.
--read is for chapters read some other way (for example a short chapter opened directly). It cannot mark a whole source at once.
"""
import argparse, re, sys

import source_lib as S


def search(cid, query, key, n):
    terms = [t for t in re.findall(r"[\w£%'-]+", query.lower()) if len(t) > 2]
    if not terms:
        sys.exit("give at least one search term of three or more letters")
    hits = []
    for d, man in S.sources(cid):
        if key and man["key"] != key:
            continue
        for ch in man["chapters"]:
            text = (d / ch["file"]).read_text(encoding="utf-8")
            for para in re.split(r"\n\s*\n", text):
                low = para.lower()
                got = [t for t in terms if t in low]
                if got:
                    score = len(got) * 10 + sum(low.count(t) for t in got)
                    hits.append((score, man, ch, para.strip()))
    hits.sort(key=lambda h: -h[0])
    if not hits:
        print("no passages found for: " + query)
        return
    for score, man, ch, para in hits[:n]:
        pg = (", pp. %d-%d" % tuple(ch["pages"])) if ch.get("pages") else ""
        low = para.lower()
        i = min((low.find(t) for t in terms if t in low), default=0)
        a = max(0, i - 160)
        snip = ("..." if a else "") + " ".join(para[a:a + 460].split()) + ("..." if a + 460 < len(para) else "")
        print("[%s %s%s] %s\n    %s\n" % (man["key"], ch["file"], pg, ch["title"], snip))


def listing(cid):
    bs = S.sources(cid)
    if not bs:
        print("no sources ingested for %s. Run: python _template/ingest_source.py %s" % (cid, cid))
    for d, man in bs:
        st = S.status(d, man)
        sk = S.skipped(d)
        print("%s  %s%s  (%d words, %s)" % (man["key"], man["title"], (" by " + man["author"]) if man.get("author") else "", man["words"], man["format"]))
        for ch in man["chapters"]:
            pg = (" pp. %d-%d" % tuple(ch["pages"])) if ch.get("pages") else ""
            tag = {"read": "[read]", "skipped": "[skip]", "unread": "[ -- ]"}[st[ch["file"]]]
            extra = ("  (skipped: %s)" % sk[ch["file"]]) if st[ch["file"]] == "skipped" else ""
            print("   %s %-11s %6d words%s  %s%s" % (tag, ch["file"], ch["words"], pg, ch["title"], extra))
        for w in man.get("warnings", []):
            print("   WARNING  " + w)


def mark(cid, key, which):
    d, man = S.find(cid, key)
    files = [c["file"] for c in man["chapters"]]
    if which == ["all"]:
        sys.exit("'all' is no longer accepted. Read the source in order with source_read.py, which records each chapter as it is served.")
    bad = [p for p in which if p not in files]
    if bad:
        sys.exit("no such chapter file(s): " + ", ".join(bad))
    rd = S.read_set(d) | set(which)
    S.save(d / "read.json", sorted(rd))
    print("%s: %d of %d chapters recorded as read in full" % (key, len(rd), len(files)))


def coverage(cid):
    for d, man in S.sources(cid):
        nm = S.numbers(d, man)
        print("%s: %d of %d chapters read in full (%d%% of words), %d skipped on purpose, %d unread" % (
            man["key"], nm["n_read"], nm["n"], round(100 * nm["read"] / max(1, nm["total"])), nm["n_skipped"], len(nm["unread"])))


def main():
    for s in (sys.stdout, sys.stderr):                      # Windows consoles default to cp1252 and crash on symbols such as the fraction slash
        try:
            s.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("query", nargs="?")
    ap.add_argument("--key")
    ap.add_argument("-n", type=int, default=8)
    ap.add_argument("--list", action="store_true")
    ap.add_argument("--coverage", action="store_true")
    ap.add_argument("--read", nargs="+", metavar=("KEY", "CHAPTER"))
    a = ap.parse_args()
    if a.read:
        if len(a.read) < 2:
            sys.exit("--read needs a source key and at least one chapter file")
        mark(a.course, a.read[0], a.read[1:])
    elif a.list:
        listing(a.course)
    elif a.coverage:
        coverage(a.course)
    elif a.query:
        search(a.course, a.query, a.key, a.n)
    else:
        ap.print_help()


if __name__ == "__main__":
    main()
