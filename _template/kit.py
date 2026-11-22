#!/usr/bin/env python3
"""One command for the repetitive parts of building a course.

    python _template/kit.py check <id>     TODOs, citations, figures, thin lessons (runs check_course.py)
    python _template/kit.py bump           new ?v= cache tag on every local asset in index.html
    python _template/kit.py md <id>        write the markdown library from the pack (courses/<id>/docs/course-<id>-notes.md supplies the sources note)
    python _template/kit.py figs <id>      write _figtest.html, a contact sheet of the course's figures (delete it afterwards)
    python _template/kit.py open <id>      open the course in the default browser
    python _template/kit.py gate           pre-ship gate for every course and the index.html links (runs gate.py)
    python _template/kit.py bundle         bundle the course scripts into shared/bundles/ (fewer requests). Run it after editing
                                           any course file; gate fails until the bundles match. ship bundles automatically.
    python _template/kit.py unbundle       put the per-file script tags back in index.html (for hand edits to the course list)
    python _template/kit.py inject <id>    re-apply the lecturer lessons (needs node; skipped if _template/lec_data/<id>.json is missing)
    python _template/kit.py sources <id>   write course-<id>-sources.js from the sources-read note, so the page can show it
    python _template/kit.py meta           write shared/course-meta.js from courses/<id>/meta/*.js (about, deepnotes, lecturer-notes,
                                           lecturer-intro, lecturers, faqs, dossiers, oversight) and check each file parses
    python _template/kit.py stale [<id>]   cited web sources never checked or checked over 6 months ago, time-sensitive first
                                           (writes docs/STALE-SOURCES.md; stale_sources.py --backfill takes dates from refs' own reading notes)
    python _template/kit.py audit <id>    the accuracy and competence report: source flags by kind, author-talk, applied practice,
                                           open findings, reading coverage. Run it after every module, not only at the end.
    python _template/kit.py ship <id>      inject, meta, gate, check, sources, bump, md, then open. Stops if the gate or check reports a PROBLEM,
                                           or if lecturer lessons in the module files differ from lec_data (lec_sync_from_modules.js fixes it).
    python _template/kit.py rebuild <id>   run courses/<id>/build/build.py (the course's own build scripts live in courses/<id>/build/,
                                           never in a session scratchpad), then ship
"""
import datetime, json, os, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def load_pack(cid):
    s = (ROOT / "courses" / cid / ("pack-%s.js" % cid)).read_text(encoding="utf-8")
    return json.loads(s[s.index("ARCHIVE_ADD(") + len("ARCHIVE_ADD("): s.rindex(");")])


def check(cid):
    r = subprocess.run([sys.executable, str(ROOT / "_template" / "check_course.py"), cid], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout + r.stderr)
    return "PROBLEM" not in r.stdout


def gate():
    r = subprocess.run([sys.executable, str(ROOT / "_template" / "gate.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout + r.stderr)
    return r.returncode == 0


def bump():
    # If the page is bundled and a course file changed since, rebuild the bundles first, so "edit, then bump" is enough.
    sys.path.insert(0, str(ROOT / "_template"))
    import bundle as bundle_mod
    if bundle_mod.bundled() and bundle_mod.stale_problems():
        print("course files changed since the last bundle; rebuilding the bundles")
        if bundle_mod.bundle():
            print("PROBLEM  a course file did not parse and was left out of the bundle")
    f = ROOT / "index.html"
    s = f.read_text(encoding="utf-8")
    tag = "v" + datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    s, n = re.subn(r"\?v=[A-Za-z0-9]+", "?v=" + tag, s)
    f.write_text(s, encoding="utf-8")
    print("cache tag %s on %d assets" % (tag, n))


def md(cid):
    pack = load_pack(cid)
    lib = pack["libraries"][0]
    L = []
    w = L.append
    w("# Library of Alexandria: %s\n" % lib["subject"])
    w("Level: %s. Created %s.\n" % (lib["level"], datetime.date.today().strftime("%d/%m/%Y")))
    w("%s\n" % lib.get("summary", ""))
    mods = [m for m in pack["modules"] if m["kind"] == "module"]
    w("## Progression ladder\n\n| Rank | Requirement |\n|---|---|")
    w("| White | Module 1 complete |\n| Brown | All %d modules complete |\n| Black | Capstone complete |\n" % len(mods))
    for m in pack["modules"]:
        d = pack["details"].get(m["key"], {})
        if m["kind"] == "capstone":
            w("## Capstone: %s\n\n%s\n" % (m["title"], d.get("core", "")))
            w("**Deliverable:** " + "; ".join(d.get("steps", [])) + ".\n\n**Rubric**\n")
            for c in d.get("challenges", []):
                w("- %s: %s Passing result: %s" % (c["level"], c["task"], c["key"]))
            w("\n**Pass condition:** %s\n" % d.get("pass", ""))
            continue
        w("## Module %s: %s\n\nPrerequisites: %s. Time: %s.\n" % (m["number"], m["title"], d.get("prereq", ""), m["hours"]))
        w("### Core idea\n%s\n\n### Tutorial\n" % d.get("core", ""))
        for i, s in enumerate(d.get("steps", []), 1):
            w("%d. %s" % (i, s))
        w("\nWorked example: %s\n\n### Challenges\n" % d.get("worked", ""))
        for c in d.get("challenges", []):
            w("**%s (%s).** %s\n- Answer key: %s\n- Self-check: %s\n" % (c["id"], c["level"].lower(), c["task"], c["key"], c["check"]))
        w("### Common mistakes\n")
        for x in d.get("mistakes", []):
            w("- " + x)
        if d.get("review"):
            w("\n### Review\n")
            for i, r in enumerate(d["review"], 1):
                w("R%d. %s Answer: %s" % (i, r["q"], r["a"]))
        w("\n### Resources\n")
        for r in pack["resources"]:
            if int(m["number"]) in r["modules"]:
                w("- [%s](%s) (%s, %s, %s). %s" % (r["title"], r["url"], r["type"], r["difficulty"], r["status"], r.get("note", "")))
        w("\n### Pass condition\n%s\n" % d.get("pass", ""))
    notes = ROOT / "courses" / cid / "docs" / ("course-%s-notes.md" % cid)
    w("## Sources read in full and not\n")
    w(notes.read_text(encoding="utf-8") if notes.exists() else "Not recorded. Write courses/%s/docs/course-%s-notes.md listing what was read in full, in part, or not at all." % (cid, cid))
    name = lib.get("file") or ("courses/%s/docs/Library of Alexandria - %s.md" % (cid, lib["subject"]))
    (ROOT / name).parent.mkdir(parents=True, exist_ok=True)
    (ROOT / name).write_text("\n".join(L), encoding="utf-8")
    print("wrote", name)


def inject(cid):
    """Rebuilding module files removes the injected lecturer lesson, so ship always re-applies it (the injector is idempotent)."""
    if not (ROOT / "_template" / "lec_data" / (cid + ".json")).exists():
        print("no lecturer data for %s, skipping inject" % cid)
        return True
    r = subprocess.run(["node", str(ROOT / "_template" / "lec_inject.js"), cid], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout + r.stderr)
    return r.returncode == 0


def sources(cid):
    """Writes course-<id>-sources.js for the page: the sources-read note (as written) and the structured map behind
    'How far the sources were read' (books from the read records, other sources from the note). Registers the script in index.html."""
    sys.path.insert(0, str(ROOT / "_template"))
    import source_map
    notes = ROOT / "courses" / cid / "docs" / ("course-%s-notes.md" % cid)
    smap = source_map.build(cid)
    if not notes.exists() and not smap["books"]:
        print("no sources note or ingested sources for %s, skipping" % cid)
        return
    md = notes.read_text(encoding="utf-8") if notes.exists() else ""
    js = ROOT / "courses" / cid / ("course-%s-sources.js" % cid)
    head = "/* Sources-read data for %s. Written by _template/kit.py sources from docs/course-%s-notes.md and the read records in sources/. Edit those, not this file. */" % (cid, cid)
    body = [head,
            "(window.COURSE_SOURCES = window.COURSE_SOURCES || {})[%s] = %s;" % (json.dumps(cid), json.dumps(md)),
            "(window.COURSE_SOURCEMAP = window.COURSE_SOURCEMAP || {})[%s] = %s;" % (json.dumps(cid), json.dumps(smap, ensure_ascii=False))]
    js.write_text(chr(10).join(body) + chr(10), encoding="utf-8")
    f = ROOT / "index.html"
    s = f.read_text(encoding="utf-8")
    tag = ('<script src="courses/%s/course-%s-sources.js?v=v0"></script>' + chr(10)) % (cid, cid)
    if "course-%s-sources.js" % cid not in s:
        m = re.search((r'<script src="courses/%s/pack-%s\.js[^"]*"></script>' + chr(10)) % (re.escape(cid), re.escape(cid)), s)
        if not m:
            sys.exit("could not find the pack script tag for %s in index.html" % cid)
        s = s[:m.end()] + tag + s[m.end():]
        f.write_text(s, encoding="utf-8")
    c = smap["counts"]
    print("sources map written for %s: %d books, %d other sources (%d full, %d part, %d search, %d not read, %d extent not recorded)" % (cid, len(smap["books"]), len(smap["pages"]), c["full"], c["part"], c["search"], c["none"], c["unknown"]))


def figs(cid):
    html = """<!doctype html><meta charset="utf-8"><title>figtest</title>
<style>:root{--ink:#1d2a24;--muted:#5b6b63;--line:#c9d3cd;--accent:#b4691f;--warn:#c98a00;--bad:#c0392b;--ok:#2f8f5b;--panel:#fff;--f-body:system-ui,sans-serif}body{margin:0;padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:10px;font-family:system-ui}div.c{border:1px solid #ccc;padding:4px}h4{margin:0 0 4px;font:12px system-ui;color:#555}</style>
<script src="shared/course-engine.js"></script><script src="courses/%s/course-%s-figs.js"></script>
<script>addEventListener('DOMContentLoaded',function(){var F=window.CourseEngine.figs;Object.keys(F).filter(function(k){return k.indexOf('%s-')===0}).forEach(function(k){var d=document.createElement('div');d.className='c';d.innerHTML='<h4>'+k+'</h4>';try{d.appendChild(F[k]())}catch(e){d.innerHTML+='ERR '+e.message}document.body.appendChild(d)})})</script>""" % (cid, cid, cid)
    (ROOT / "_figtest.html").write_text(html, encoding="utf-8")
    print("serve the archive folder, open /_figtest.html, then delete _figtest.html")


def open_course(cid):
    url = (ROOT / "index.html").as_uri() + "#course=" + cid
    if os.name == "nt":
        os.startfile(url)
    else:
        subprocess.run(["xdg-open", url])
    print("opened", url)


META_KINDS = ["about", "deepnotes", "lecturer-notes", "lecturer-intro", "lecturers", "faqs", "dossiers", "oversight"]


def meta():
    """Writes shared/course-meta.js: which courses have which courses/<id>/meta/<kind>.js file, and LOA_META(kind), which
    index.html calls at each kind's place in the load order. Each file is its own <script>, so a fault in one course's file
    cannot stop another course loading. Checks every meta file parses, and that a lecturer shared by two courses has identical
    entries in both. Returns True if all is well."""
    ok, have = True, {k: [] for k in META_KINDS}
    for d in sorted((ROOT / "courses").iterdir()):
        for k in META_KINDS:
            f = d / "meta" / (k + ".js")
            if not f.exists():
                continue
            r = subprocess.run(["node", "--check", str(f)], capture_output=True, text=True, encoding="utf-8")
            if r.returncode:
                ok = False
                print("PROBLEM  %s does not parse (left out of the page):\n%s" % (f.relative_to(ROOT), r.stderr.strip()[:400]))
                continue
            have[k].append(d.name)
        for f in (d / "meta").glob("*.js") if (d / "meta").exists() else []:
            if f.stem not in META_KINDS:
                print("note     %s is not a known meta kind, so the page does not load it" % f.relative_to(ROOT))
    js = ("/* Written by _template/kit.py meta. Do not edit: add or remove files in courses/<id>/meta/ and run kit.py meta.\n"
          "   LOA_META(kind) writes one <script> per course that has courses/<id>/meta/<kind>.js, carrying this file's ?v= tag. */\n"
          "window.LOA_META_FILES = %s;\n"
          "(function () {\n"
          "  var s = document.currentScript, v = ((s && s.src.match(/\\?v=[^&#]+/)) || [\"\"])[0];\n"
          "  window.LOA_META = function (kind) {\n"
          "    (window.LOA_META_FILES[kind] || []).forEach(function (id) {\n"
          "      document.write('<script src=\"courses/' + id + '/meta/' + kind + '.js' + v + '\"><\\/script>');\n"
          "    });\n"
          "  };\n"
          "})();\n") % json.dumps(have, indent=1)
    (ROOT / "shared" / "course-meta.js").write_text(js, encoding="utf-8")
    chk = ("const fs=require('fs'),vm=require('vm'),seen={};for(const f of process.argv.slice(1)){const w={};w.window=w;"
           "try{vm.runInNewContext(fs.readFileSync(f,'utf8'),w)}catch(e){console.log('PROBLEM  '+f+': '+e.message);continue}"
           "for(const [n,p] of Object.entries(w.COURSE_LECTURER_PEOPLE||{})){const j=JSON.stringify(p);"
           "if(seen[n]&&seen[n][0]!==j)console.log('PROBLEM  lecturer '+n+' differs between '+seen[n][1]+' and '+f);seen[n]=[j,f]}}")
    files = [str(ROOT / "courses" / c / "meta" / "lecturers.js") for c in have["lecturers"]]
    r = subprocess.run(["node", "-e", chk] + files, capture_output=True, text=True, encoding="utf-8")
    if r.stdout.strip():
        ok = False
        print(r.stdout.strip())
    print("course-meta.js: %s" % ", ".join("%s %d" % (k, len(v)) for k, v in have.items()))
    return ok


def audit(cid):
    """One report of everything the gate holds a course to, each line with the command that fixes it. Returns True if clean."""
    sys.path.insert(0, str(ROOT / "_template"))
    import source_verify as SV, practice_audit as PA, source_lib as SL
    ok = True
    print("== %s: accuracy and competence audit\n" % cid)
    mdir = ROOT / "courses" / cid / "modules"
    mods = sorted(re.search(r"-(\w+)\.js$", f.name).group(1) for f in mdir.glob("course-%s-*.js" % cid))
    checked, flags = SV.check(cid, mods)
    by = {k: [f for f in flags if f["kind"] == k] for k in SV.KINDS}
    print("Sources: %d cited sentences checked against their chapters" % checked)
    fixes = {"pointer": "fix the ref's p: (name the files: 'Chapter 4 (ch-006.txt)'), or run source_repoint.py",
             "unread": "read the chapter with source_read.py, or check the passage and record a waiver",
             "number": "correct the figure, cut precision the chapter lacks, label 'our arithmetic', or waive OCR damage",
             "names": "the sentence says something the chapter does not: re-cite it to the right chapter or rewrite it"}
    for k in SV.KINDS:
        if by[k]:
            ok = False
            f = by[k][0]
            print("  %-8s %3d   first: module %s, %s (%s)\n           fix: %s" % (k, len(by[k]), f["module"], f["lesson"][:50], ", ".join(f["items"])[:40], fixes[k]))
        else:
            print("  %-8s   0" % k)
    print("  details: python _template/source_verify.py %s --kind <kind>\n" % cid)
    r = subprocess.run([sys.executable, str(ROOT / "_template" / "check_course.py"), cid], capture_output=True, text=True, encoding="utf-8")
    talk = [l for l in r.stdout.splitlines() if "author-talk" in l]
    print("Author-talk: %d module(s)%s" % (len(talk), "" if not talk else "\n  " + "\n  ".join(t.strip()[:200] for t in talk)))
    ok = ok and not talk
    print("\nPractice (standard: half of checks and quiz items applied, one applied challenge per module):")
    for a in PA.audit(cid):
        good = a["share"] >= PA.STANDARD and a["ch_app"] >= 1
        ok = ok and good
        print("  %s %-28s %2d/%2d applied (%3d%%), %d applied challenge(s)" % ("ok " if good else "LOW", a["module"], a["app"], a["n"], round(100 * a["share"]), a["ch_app"]))
    print("  fix: write case_chk / case_question items (author.py), or convert with practice_convert.py\n")
    open_lines = [l.strip() for l in r.stdout.splitlines() if "findings still open" in l]
    print("Findings: %s" % ("none open" if not open_lines else "\n  " + "\n  ".join(open_lines)))
    ok = ok and not open_lines
    print("\nReading coverage:")
    for d, man in SL.sources(cid):
        n = SL.numbers(d, man)
        print("  %-24s %3d of %3d read in full, %3d skipped with a reason, %3d unread" % (man["key"], n["n_read"], n["n"], n["n_skipped"], len(n["unread"])))
    print("\n%s" % ("CLEAN" if ok else "NOT CLEAN: fix the lines above, then run it again"))
    return ok


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    cid = sys.argv[2] if len(sys.argv) > 2 else ""
    sys.path.insert(0, str(ROOT / "_template"))
    import bundle as bundle_mod
    if cmd == "bundle":
        sys.exit(1 if bundle_mod.bundle() else 0)
    elif cmd == "unbundle":
        print("unbundled" if bundle_mod.unbundle() else "already per-file; nothing to do")
    elif cmd == "audit":
        sys.exit(0 if audit(cid) else 1)
    elif cmd == "check":
        sys.exit(0 if check(cid) else 1)
    elif cmd == "bump":
        bump()
    elif cmd == "md":
        md(cid)
    elif cmd == "figs":
        figs(cid)
    elif cmd == "open":
        open_course(cid)
    elif cmd == "gate":
        sys.exit(0 if gate() else 1)
    elif cmd == "inject":
        sys.exit(0 if inject(cid) else 1)
    elif cmd == "sources":
        bundle_mod.unbundle()
        sources(cid)
    elif cmd == "meta":
        sys.exit(0 if meta() else 1)
    elif cmd == "stale":
        sys.exit(subprocess.run([sys.executable, str(ROOT / "_template" / "stale_sources.py")] + ([cid] if cid else ["--all"])).returncode)
    elif cmd == "rebuild":
        b = ROOT / "courses" / cid / "build" / "build.py"
        if not b.exists():
            sys.exit("courses/%s/build/build.py does not exist. This course's module files are its source; edit them with "
                     "course_patch.js or pc_fixlib.py, then run kit.py ship %s." % (cid, cid))
        r = subprocess.run([sys.executable, str(b)], cwd=str(b.parent))
        if r.returncode:
            sys.exit("build.py failed; nothing shipped.")
        os.execv(sys.executable, [sys.executable, __file__, "ship", cid])
    elif cmd == "ship":
        # Lecturer lessons edited by hand in the module files would be silently reverted by the injector, so stop first.
        if (ROOT / "_template" / "lec_data" / (cid + ".json")).exists():
            d = subprocess.run(["node", str(ROOT / "_template" / "lec_sync_from_modules.js"), cid, "--check"],
                               capture_output=True, text=True, encoding="utf-8")
            if d.returncode:
                print(d.stdout + d.stderr)
                sys.exit("Lecturer lessons in the module files differ from lec_data; nothing shipped.")
        bundle_mod.unbundle()  # work on the per-file tags; the bundles are rebuilt at the end
        if not inject(cid):
            sys.exit("Lecturer injection failed.")
        if not meta():
            sys.exit("A course meta file has a problem. Fix it first.")
        if not gate():
            sys.exit("The gate found a problem. Fix it first.")
        if not check(cid):
            sys.exit("Fix every PROBLEM first.")
        sources(cid)
        sys.path.insert(0, str(ROOT / "_template"))
        import reading_state
        reading_state.build(cid)
        subprocess.run([sys.executable, str(ROOT / "_template" / "stale_sources.py"), cid])
        bump()
        md(cid)
        if bundle_mod.bundle():
            sys.exit("A course file does not parse, so it was left out of the bundle. Fix it, then run kit.py bundle.")
        open_course(cid)
    else:
        print(__doc__)
