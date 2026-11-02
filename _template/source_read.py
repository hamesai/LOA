#!/usr/bin/env python3
"""Read a source in full, in order, and keep the review findings as you go.

A source review is only as good as the reading behind it. This tool serves the text of an ingested source in order, a chunk at a time,
and records a chapter as read only when its last chunk has been served. Reading a source means running this command until the
status says every chapter is read or skipped on purpose.

    python _template/source_read.py <course> <key>                       status: progress and the next chunk to read
    python _template/source_read.py <course> <key> --next [--words 4000]  print the next unread chunk (continues where you stopped)
    python _template/source_read.py <course> <key> --chapter ch-007.txt    start or continue one chapter
    python _template/source_read.py <course> <key> --chapter ch-007.txt --restart    read a chapter again from the top (clears its earlier read or skip record)
    python _template/source_read.py <course> <key> --suggest-skips         list covers, copyright pages, contents and indexes
    python _template/source_read.py <course> <key> --skip ch-001.txt ch-031.txt --reason "cover and index"
    python _template/source_read.py <course> <key> --log "module|verdict|location|text"    record a finding while you read
    python _template/source_read.py <course> <key> --findings              list the findings so far
    python _template/source_read.py <course> <key> --report [--write]      build the source review (docs/source-review-<key>.md)

Verdicts for --log: confirmed, refined, contradicted, extended, absent, note.
  confirmed     the course says it and the source agrees
  refined       the course is loose or incomplete and the source is more exact
  contradicted  the course and the source disagree (show both, and say which you trust)
  extended      the source adds depth that the course lacks
  absent        the course makes a claim that the source does not cover
  note          anything else worth keeping (a quotable example, a caution, a date)
Log findings as you read, while the passage is in front of you, with the chapter file as the location.

Only chapters served by this tool (or recorded with source_search.py --read) count as read. Skipping needs a reason that goes in the review.
"""
import argparse, re, sys
from datetime import date

import source_lib as S

DEFAULT_WORDS = 4000
SKIP_HINT = re.compile(r"^(part\d+|cover|title page|copyright|contents|table of contents|index|dummy_split_\d+|about the (authors?|author)|credits|also by|by the same author)\b", re.I)


def words(t):
    return len(t.split())


def chunks_for(text, limit):
    paras = [p for p in re.split(r"\n\s*\n", text) if p.strip()]
    pieces = []
    for p in paras:
        if words(p) > limit * 1.5:                     # a very long paragraph (common in OCR text): split at sentence ends
            cur = []
            for s in re.split(r"(?<=[.!?])\s+", p):
                cur.append(s)
                if words(" ".join(cur)) >= limit:
                    pieces.append(" ".join(cur))
                    cur = []
            if cur:
                pieces.append(" ".join(cur))
        else:
            pieces.append(p)
    out, cur, n = [], [], 0
    for p in pieces:
        w = words(p)
        if cur and n + w > limit:
            out.append("\n\n".join(cur))
            cur, n = [], 0
        cur.append(p)
        n += w
    if cur:
        out.append("\n\n".join(cur))
    return out or [""]


def progress_line(d, man):
    nm = S.numbers(d, man)
    return "source progress: %d of %d chapters read, %d skipped, %d unread (%d%% of words read)" % (
        nm["n_read"], nm["n"], nm["n_skipped"], len(nm["unread"]), round(100 * nm["read"] / max(1, nm["total"])))


def status(cid, key):
    d, man = S.find(cid, key)
    nm = S.numbers(d, man)
    print("%s  %s%s" % (man["key"], man["title"], (" by " + man["author"]) if man.get("author") else ""))
    print(progress_line(d, man))
    if man.get("warnings"):
        for w in man["warnings"]:
            print("WARNING  " + w)
    if not nm["unread"]:
        print("Every chapter is read or skipped on purpose. Run --report --write to build the source review.")
        return
    nxt = nm["unread"][0]
    sv = S.served(d).get(nxt["file"])
    where = (" (chunk %d of %d next)" % (sv["done"] + 1, sv["total"])) if sv else ""
    print("Next: %s  %s  %d words%s" % (nxt["file"], nxt["title"], nxt["words"], where))
    print("Unread after that: %d chapters, about %d words" % (max(0, len(nm["unread"]) - 1), sum(c["words"] for c in nm["unread"][1:])))
    print("Run:  python _template/source_read.py %s %s --next" % (cid, key))


def serve(cid, key, limit, chapter=None, restart=False):
    d, man = S.find(cid, key)
    st = S.status(d, man)
    if chapter:
        ch = next((c for c in man["chapters"] if c["file"] == chapter), None)
        if not ch:
            sys.exit("no chapter file %s in %s" % (chapter, key))
        if st[chapter] == "read" and not restart:
            sys.exit("%s is already recorded as read. Use --restart to read it again." % chapter)
        if st[chapter] == "skipped" and not restart:
            sys.exit("%s is skipped on purpose (%s). Use --restart to read it anyway." % (chapter, S.skipped(d)[chapter]))
    else:
        ch = next((c for c in man["chapters"] if st[c["file"]] == "unread"), None)
        if not ch:
            print("Nothing left to read in %s. %s" % (key, progress_line(d, man)))
            return
    if restart and chapter:
        # A restart undoes the earlier record, so the chapter is unread until it is served again in full.
        rd = S.read_set(d)
        rd.discard(ch["file"])
        S.save(d / "read.json", sorted(rd))
        sk = S.skipped(d)
        if sk.pop(ch["file"], None) is not None:
            S.save(d / "skipped.json", sk)
    sv = S.served(d)
    rec = sv.get(ch["file"])
    if restart or not rec or rec.get("done", 0) >= rec.get("total", 0):
        rec = {"limit": limit, "done": 0, "total": 0}
    text = (d / ch["file"]).read_text(encoding="utf-8")
    parts = chunks_for(text, rec["limit"])
    rec["total"] = len(parts)
    i = rec["done"]
    pg = (", pp. %d-%d" % tuple(ch["pages"])) if ch.get("pages") else ""
    print("=== %s | %s | %s%s | chunk %d of %d | chapter %d words ===" % (key, ch["file"], ch["title"], pg, i + 1, len(parts), ch["words"]))
    print()
    print(parts[i])
    print()
    rec["done"] = i + 1
    rec["date"] = date.today().isoformat()
    sv[ch["file"]] = rec
    S.save(d / "served.json", sv)
    if rec["done"] >= len(parts):
        rd = S.read_set(d) | {ch["file"]}
        S.save(d / "read.json", sorted(rd))
        print("=== end of %s: recorded as read in full. %s ===" % (ch["file"], progress_line(d, man)))
        nm = S.numbers(d, man)
        if nm["unread"]:
            print("Next chapter: %s  %s  (%d words)" % (nm["unread"][0]["file"], nm["unread"][0]["title"], nm["unread"][0]["words"]))
        else:
            print("The whole source is now read or skipped on purpose.")
    else:
        print("=== chunk %d of %d done. Run --next for the rest of %s ===" % (rec["done"], len(parts), ch["file"]))
    print("If this text was cut short by a pipe (head, tail), the chapter is not read in full. Run: source_read.py <course> <key> --chapter %s --restart" % ch["file"])


def suggest(cid, key):
    d, man = S.find(cid, key)
    st = S.status(d, man)
    def likely(c):
        title = c["title"].strip()
        if re.match(r"^(part\d+|dummy_split_\d+)$", title, re.I):
            return c["words"] < 500                    # untitled parts can be notes or footnotes, so only tiny ones are suggested
        return bool(SKIP_HINT.match(title)) and c["words"] < 1500 or title.lower() == "index" or c["words"] < 120
    hits = [c for c in man["chapters"] if st[c["file"]] == "unread" and likely(c)]
    if not hits:
        print("no obvious covers, contents or indexes to skip")
    for c in hits:
        print("%s  %-8d words  %s" % (c["file"], c["words"], c["title"]))
    print("Skip only what carries no content for the course, and give a reason: --skip <files> --reason \"...\"")
    print("Untitled parts and long sections may be notes or footnotes. Open anything over a few hundred words before skipping it.")


def skip(cid, key, files, reason):
    if not reason or len(reason.strip()) < 4:
        sys.exit("--skip needs a --reason, for example --reason \"cover and copyright\"")
    d, man = S.find(cid, key)
    names = [c["file"] for c in man["chapters"]]
    bad = [f for f in files if f not in names]
    if bad:
        sys.exit("no such chapter file(s): " + ", ".join(bad))
    sk = S.skipped(d)
    for f in files:
        sk[f] = reason.strip()
    S.save(d / "skipped.json", sk)
    print("skipped %d chapter(s): %s" % (len(files), reason.strip()))
    print(progress_line(d, man))


def log(cid, key, entry):
    parts = [p.strip() for p in entry.split("|", 3)]
    if len(parts) != 4 or not all(parts):
        sys.exit('--log needs "module|verdict|location|text", for example "cinematography-3|extended|ch-008.txt|Hyperfocal formula and a worked case"')
    module, verdict, loc, text = parts
    if verdict not in S.VERDICTS:
        sys.exit("verdict must be one of: " + ", ".join(S.VERDICTS))
    d, man = S.find(cid, key)
    line = "\t".join([date.today().isoformat(), module, verdict, loc, text.replace("\t", " ").replace("\n", " ")])
    with open(d / "findings.tsv", "a", encoding="utf-8") as f:
        f.write(line + "\n")
    print("logged %s finding for %s (%d so far)" % (verdict, module, len(S.findings(d))))


def list_findings(cid, key):
    d, man = S.find(cid, key)
    fs = S.findings(d)
    if not fs:
        print("no findings logged yet")
    for f in fs:
        print("[%s] %-14s %-12s %s  %s" % (f["date"], f["module"], f["verdict"], f["location"], f["text"]))


MARK = "<!-- generated by source_read.py --report -->"


def report(cid, key, write, force):
    d, man = S.find(cid, key)
    nm = S.numbers(d, man)
    st = S.status(d, man)
    sk = S.skipped(d)
    import source_apply as SA
    open_here = [x for x in SA.all_findings(cid) if x["book"] == key and x["state"] == "open"]
    done = not nm["unread"] and not open_here
    L = []
    L.append(MARK)
    L.append("# Source review: %s" % man["title"])
    L.append("")
    L.append("Source: %s%s. Format %s, %s words in %d sections, ingested from `%s`." % (man["title"], (" by " + man["author"]) if man.get("author") else "", man["format"], format(man["words"], ","), nm["n"], man["file"]))
    prov = man.get("provenance", {})
    if prov:
        how = {"user": "supplied by the user", "source-discovery": "found by Source Discovery", "unknown": "found by an unrecorded route"}.get(prov.get("found_by"), prov.get("found_by", "unknown"))
        added = prov.get("added", "unknown")
        if len(added) == 10 and added[4] == "-" and added[7] == "-":
            added = "%s/%s/%s" % (added[8:10], added[5:7], added[:4])
        L.append("Provenance: added %s, %s%s%s." % (added, how, (" (" + prov["query"] + ")") if prov.get("query") and not prov["query"].startswith("Source Discovery") else "", (", from " + prov["url"]) if prov.get("url") else ""))
    L.append("Status: %s" % ("complete" if done else "partial"))
    if open_here:
        L.append("Findings open: %d (each needs a lesson change, or a mark, avoid or skip with a reason, before the review can be complete)." % len(open_here))
    L.append("Coverage: %d of %d sections read in full (%d%% of words), %d skipped on purpose, %d unread." % (nm["n_read"], nm["n"], round(100 * nm["read"] / max(1, nm["total"])), nm["n_skipped"], len(nm["unread"])))
    L.append("Reading method: served in order by `source_read.py`, which records a chapter as read only when its last chunk has been served.")
    if man.get("warnings"):
        L.append("Warnings from ingestion: " + "; ".join(man["warnings"]))
    L.append("")
    L.append("## Sections")
    L.append("")
    L.append("| File | Title | Words | Status |")
    L.append("|---|---|---|---|")
    for c in man["chapters"]:
        s = st[c["file"]]
        L.append("| %s | %s | %d | %s |" % (c["file"], c["title"].replace("|", "/"), c["words"], s if s != "skipped" else "skipped: " + sk[c["file"]].replace("|", "/")))
    L.append("")
    fs = S.findings(d)
    L.append("## Findings by module")
    L.append("")
    if not fs:
        L.append("No findings logged.")
    mods = []
    for f in fs:
        if f["module"] not in mods:
            mods.append(f["module"])
    for m in mods:
        L.append("### %s" % m)
        L.append("")
        for v in S.VERDICTS:
            for f in fs:
                if f["module"] == m and f["verdict"] == v:
                    L.append("- **%s** (%s): %s" % (v, f["location"], f["text"]))
        L.append("")
    counts = {v: sum(1 for f in fs if f["verdict"] == v) for v in S.VERDICTS}
    L.append("Totals: " + ", ".join("%d %s" % (counts[v], v) for v in S.VERDICTS) + ".")
    extra = d / "review-notes.md"
    if extra.exists():
        L.append("")
        L.append("## Notes")
        L.append("")
        L.append(extra.read_text(encoding="utf-8").strip())
    out = "\n".join(L) + "\n"
    if not write:
        print(out)
        return
    path = S.ROOT / "courses" / cid / "docs" / ("source-review-%s.md" % key)
    if path.exists() and MARK not in path.read_text(encoding="utf-8") and not force:
        sys.exit("%s was written by hand. Use --force to replace it, or keep it and move its findings into --log entries." % path.name)
    path.write_text(out, encoding="utf-8")
    print("wrote %s (%s)" % (path.relative_to(S.ROOT), "complete" if done else "partial"))


def main():
    for s in (sys.stdout, sys.stderr):
        try:
            s.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("key")
    ap.add_argument("--next", action="store_true")
    ap.add_argument("--chapter")
    ap.add_argument("--restart", action="store_true")
    ap.add_argument("--words", type=int, default=DEFAULT_WORDS)
    ap.add_argument("--suggest-skips", action="store_true")
    ap.add_argument("--skip", nargs="+")
    ap.add_argument("--reason")
    ap.add_argument("--log")
    ap.add_argument("--findings", action="store_true")
    ap.add_argument("--report", action="store_true")
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()
    if a.words < 500 or a.words > 4500:
        sys.exit("--words must be between 500 and 4500 so a chunk fits in one tool output")
    if a.skip:
        skip(a.course, a.key, a.skip, a.reason)
    elif a.log:
        log(a.course, a.key, a.log)
    elif a.findings:
        list_findings(a.course, a.key)
    elif a.report:
        report(a.course, a.key, a.write, a.force)
    elif a.suggest_skips:
        suggest(a.course, a.key)
    elif a.next or a.chapter:
        serve(a.course, a.key, a.words, a.chapter, a.restart)
    else:
        status(a.course, a.key)


if __name__ == "__main__":
    main()
