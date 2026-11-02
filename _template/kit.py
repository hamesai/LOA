#!/usr/bin/env python3
"""One command for the repetitive parts of building a course.

    python _template/kit.py check <id>     TODOs, citations, figures, thin lessons (runs check_course.py)
    python _template/kit.py bump           new ?v= cache tag on every local asset in index.html
    python _template/kit.py md <id>        write the markdown library from the pack (courses/<id>/docs/course-<id>-notes.md supplies the sources note)
    python _template/kit.py figs <id>      write _figtest.html, a contact sheet of the course's figures (delete it afterwards)
    python _template/kit.py open <id>      open the course in the default browser
    python _template/kit.py gate           pre-ship gate for every course and the index.html links (runs gate.py)
    python _template/kit.py inject <id>    re-apply the lecturer lessons (needs node; skipped if _template/lec_data/<id>.json is missing)
    python _template/kit.py sources <id>   write course-<id>-sources.js from the sources-read note, so the page can show it
    python _template/kit.py ship <id>      inject, gate, check, sources, bump, md, then open. Stops if the gate or check reports a PROBLEM.
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


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    cid = sys.argv[2] if len(sys.argv) > 2 else ""
    if cmd == "check":
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
        sources(cid)
    elif cmd == "ship":
        if not inject(cid):
            sys.exit("Lecturer injection failed.")
        if not gate():
            sys.exit("The gate found a problem. Fix it first.")
        if not check(cid):
            sys.exit("Fix every PROBLEM first.")
        sources(cid)
        bump()
        md(cid)
        open_course(cid)
    else:
        print(__doc__)
