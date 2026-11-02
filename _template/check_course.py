#!/usr/bin/env python3
"""Quality gate for a course. Usage: python check_course.py <course-id>

Reports leftover TODO placeholders, citations with no source, figures that are not drawn,
modules without lessons, quiz or details, and thin lessons. Exit code 1 if any hard problem is found.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STANDARD_FROM = "2026-10-15"  # courses created on or after this date must meet the lesson-length standard
COURSES = ROOT / "courses"
Q = "[\"']?"   # JSON-style files quote their keys, hand-written ones may not


def read(p):
    return p.read_text(encoding="utf-8") if p.exists() else ""


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    cid = sys.argv[1]
    D = COURSES / cid
    pack_path = D / ("pack-%s.js" % cid)
    pack_text = read(pack_path)
    if not pack_text:
        sys.exit("no pack-%s.js found" % cid)
    m = re.search(r"ARCHIVE_ADD\((.*)\);\s*$", pack_text, re.S)
    pack = json.loads(m.group(1))
    strict = (pack.get("libraries") or [{}])[0].get("created", "") >= STANDARD_FROM
    keys = [x["key"] for x in pack["modules"]]

    lesson_files = {}
    for k in keys:
        last = k.split("-")[-1]
        cands = [D / "modules" / ("course-%s.js" % k), D / "modules" / ("course-%s-%s.js" % (cid, last))]
        if cid == "greenhouse-year":   # the finished example uses older file names
            cands += [D / "modules" / ("course-m%s.js" % last), D / "modules" / "course-cap.js"]
        for c in cands:
            if c.exists():
                lesson_files[k] = c
                break
    refs_text = read(D / "course-refs.js") + read(D / ("course-%s-refs.js" % cid)) + read(ROOT / "shared" / "course-lecturer-refs.js")
    defined_refs = set(re.findall(r'^\s*"([a-z0-9-]+)"\s*:\s*\{', refs_text, re.M))
    figs_text = read(D / "course-figs.js") + read(D / ("course-%s-figs.js" % cid))
    defined_figs = set(re.findall(r'CE\.figs\.([A-Za-z0-9_]+)\s*=', figs_text)) | set(re.findall(r'CE\.figs\["([^"]+)"\]\s*=', figs_text))

    hard, soft = [], []
    for k in keys:
        if k not in lesson_files:
            hard.append("%s: no lesson file" % k)
            continue
        t = read(lesson_files[k])
        n_todo = len(re.findall(r"TODO", t))
        if n_todo:
            hard.append("%s: %d TODO placeholders left in %s" % (k, n_todo, lesson_files[k].name))
        for ref in sorted(set(re.findall(r"\{\{([a-z0-9-]+)\}\}", t))):
            if ref not in defined_refs:
                hard.append("%s: cites {{%s}} but no source has that key" % (k, ref))
        for fig in sorted(set(re.findall(Q + "t" + Q + r"\s*:\s*\"fig\"\s*,\s*" + Q + "id" + Q + r"\s*:\s*\"([^\"]+)\"", t))):
            if fig not in defined_figs:
                hard.append("%s: figure '%s' is not drawn in a figs file" % (k, fig))
        lessons = re.findall(Q + "id" + Q + r"\s*:\s*\"l\d+\"", t)
        checks = len(re.findall(Q + "t" + Q + r"\s*:\s*\"check\"", t))
        takes = len(re.findall(Q + "t" + Q + r"\s*:\s*\"take\"", t))
        strings = re.findall(r'"((?:[^"\\]|\\.)*)"', t)
        words = sum(len(re.sub(r"\{\{[^}]+\}\}", "", x).split()) for x in strings if len(x) > 20)
        # Lesson-length standard (set 15/10/2026): 4+ lessons, 2,000+ words, 2 checks per lesson and a takeaways block in each.
        # Hard for courses created on or after STANDARD_FROM; older courses get notes so the gate keeps passing.
        sink = hard if strict else soft
        if len(lessons) < (4 if strict else 3) and not k.endswith("-cap"):
            sink.append("%s: only %d lessons (the standard is 4 or more)" % (k, len(lessons)))
        if checks < len(lessons) * 2:
            sink.append("%s: %d checks for %d lessons (the standard is two per lesson)" % (k, checks, len(lessons)))
        if takes < len(lessons):
            sink.append("%s: a lesson has no key takeaways block" % k)
        if words < (2000 if strict else 1500) and not k.endswith("-cap"):
            sink.append("%s: about %d words of lesson text (the standard is 2,000 to 3,500)" % (k, words))
        if not re.search(Q + "t" + Q + r"\s*:\s*\"example\"", t):
            soft.append("%s: no worked example" % k)
        if k not in pack.get("details", {}):
            hard.append("%s: missing from details" % k)
        if not k.endswith("-cap") and k not in pack.get("quiz", {}):
            hard.append("%s: missing from quiz" % k)
    # Checked dates: a ref may carry d: "DD/MM/YYYY" (when someone last opened the source). Old dates are flagged, and so is a course with none.
    import datetime
    cited = set()
    for k in lesson_files:
        cited |= set(re.findall(r"\{\{([a-z0-9-]+)\}\}", read(lesson_files[k])))
    dated, stale = {}, []
    for line in refs_text.splitlines():
        mm = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', line)
        dm = re.search(r'\bd:\s*"(\d\d)/(\d\d)/(\d{4})"', line)
        if mm and dm and mm.group(1) in cited:
            when = datetime.date(int(dm.group(3)), int(dm.group(2)), int(dm.group(1)))
            dated[mm.group(1)] = when
            if (datetime.date.today() - when).days > 365:
                stale.append(mm.group(1))
    own = [c for c in cited if c in defined_refs]
    if own and not dated:
        soft.append("no cited source has a checked date (add d: \"DD/MM/YYYY\" to a ref when you last opened it; useful for law, tax and price claims)")
    for s in sorted(stale):
        soft.append("source '%s' was last checked over a year ago: reopen it and update its date" % s)
    # Books the user supplied (courses/<id>/sources/<book>/): each should be cited, and the read record should be honest.
    src_dir = D / "sources"
    if src_dir.is_dir():
        cited_books = set()
        for line in refs_text.splitlines():
            mm = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', line)
            bm = re.search(r'\bb:\s*"([a-z0-9-]+)"', line)
            if mm and bm and mm.group(1) in cited:
                cited_books.add(bm.group(1))
        for mf in sorted(src_dir.glob("*/manifest.json")):
            man = json.loads(mf.read_text(encoding="utf-8"))
            rf = mf.parent / "read.json"
            rd = set(json.loads(rf.read_text(encoding="utf-8"))) if rf.exists() else set()
            n_read = len([c for c in man["chapters"] if c["file"] in rd])
            if man["key"] not in cited_books:
                soft.append("book '%s' is ingested but no cited source points to it (add b: \"%s\" to the refs that rest on it)" % (man["key"], man["key"]))
            import source_lib as SL
            nm = SL.numbers(mf.parent, man)
            if nm["unread"]:
                soft.append("source '%s': %d of %d sections read in full, %d skipped on purpose, %d unread (read the rest in order with source_read.py)" % (man["key"], nm["n_read"], nm["n"], nm["n_skipped"], len(nm["unread"])))
            review = D / "docs" / ("source-review-%s.md" % man["key"])
            if review.exists():
                rt = review.read_text(encoding="utf-8")
                sm = re.search(r"^Status:\s*(\w+)", rt, re.M)
                stat = sm.group(1).lower() if sm else ""
                if stat == "complete" and nm["unread"]:
                    hard.append("source review for '%s' says Status: complete but %d sections are unread. Read them with source_read.py or change the status to partial" % (man["key"], len(nm["unread"])))
                elif stat != "complete":
                    soft.append("the source review for '%s' is %s: finish reading the source and regenerate it (source_read.py --report --write)" % (man["key"], stat or "missing a Status line"))
            elif SL.findings(mf.parent):
                soft.append("source '%s' has logged findings but no docs/source-review-%s.md (run source_read.py --report --write)" % (man["key"], man["key"]))
    # Reading and review hygiene added 19/10/2026: refs load, records agree, findings are used, numbers match the books.
    try:
        import source_map as SM
        SM.load_refs(cid)
    except SystemExit as e:
        hard.append("the refs file does not load, so no source shows on the page: %s" % str(e).splitlines()[-1][:160])
    if src_dir.is_dir():
        import source_lib as SL2
        for mf in sorted(src_dir.glob("*/manifest.json")):
            d2 = mf.parent
            both = sorted(SL2.read_set(d2) & set(SL2.skipped(d2)))
            if both:
                hard.append("source '%s': %s recorded as both read and skipped (read.json and skipped.json disagree; keep one)" % (d2.name, ", ".join(both)))
        try:
            import source_apply as SA
            fs_all = SA.all_findings(cid)
            open_by_mod = {}
            for x in fs_all:
                if x["state"] == "open":
                    open_by_mod.setdefault(x["module"], []).append(x)
            for mod, xs in sorted(open_by_mod.items(), key=lambda kv: kv[0]):
                use = sum(1 for x in xs if x["verdict"] in ("extended", "refined"))
                chk = sum(1 for x in xs if x["verdict"] in ("contradicted", "absent"))
                notes_n = len(xs) - use - chk
                hard.append("module %s: %d findings still open (%d to use, %d to check against the lessons, %d notes). Use them, or close them with source_apply.py mark, avoid or skip" % (mod, len(xs), use, chk, notes_n))
        except Exception as e:  # keep the checker running if the tracker cannot read something
            soft.append("could not read the findings tracker: %s" % e)
        try:
            import source_verify as SV
            mods = sorted(re.search(r"-(\w+)\.js$", f2.name).group(1) for f2 in (D / "modules").glob("course-%s-*.js" % cid))
            checked, flagged = SV.check(cid, mods)
            if flagged:
                soft.append("%d of %d sourced sentences have a number that is not in the cited chapter (run: python _template/source_verify.py %s). First: module %s, %s, %s" % (len(flagged), checked, cid, flagged[0]["module"], flagged[0]["lesson"], ", ".join(flagged[0]["numbers"])))
        except Exception as e:
            soft.append("could not run the number verifier: %s" % e)
    pt = pack_text.count("TODO")
    if pt:
        hard.append("pack-%s.js: %d TODO placeholders left" % (cid, pt))
    if not pack.get("resources"):
        soft.append("no resources attached (add videos, papers, books and references with verified links)")

    print("Course %s: %d modules, %d lesson files found" % (cid, len(keys), len(lesson_files)))
    for h in hard:
        print("  PROBLEM  " + h)
    for s in soft:
        print("  note     " + s)
    if not hard and not soft:
        print("  clean")
    sys.exit(1 if hard else 0)


if __name__ == "__main__":
    main()
