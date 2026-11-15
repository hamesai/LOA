"""Rebuilds courses/<course>/meta/lecturer-notes.js from _template/lec_data/notes/<course>.json (a map of module key -> list of
notes, one per lesson index, null to keep the existing note). The JSON's list sets each module's length.
Run: python _template/build_notes.py [<course>]   (no course: every notes file), then python _template/kit.py meta"""
import json, subprocess, sys
from pathlib import Path
A = Path(__file__).resolve().parent.parent
READ = "global.window={};new Function('window',require('fs').readFileSync(process.argv[1],'utf8'))(global.window);console.log(JSON.stringify(global.window.COURSE_LNOTES||{}))"
only = sys.argv[1] if len(sys.argv) > 1 else None
for f in sorted((A / "_template" / "lec_data" / "notes").glob("*.json")):
    cid = f.stem
    if only and cid != only:
        continue
    target = A / "courses" / cid / "meta" / "lecturer-notes.js"
    cur = json.loads(subprocess.run(["node", "-e", READ, str(target)], capture_output=True, text=True, check=True).stdout) if target.exists() else {}
    for k, v in json.loads(f.read_text(encoding="utf8")).items():
        old = cur.get(k, [])
        cur[k] = [n if n else (old[i] if i < len(old) else "") for i, n in enumerate(v)]
    head = ("/* Lecturer's notes (%s): one framing note per lesson, keyed by module key, in lesson order. Rebuilt by _template/build_notes.py "
            "from _template/lec_data/notes/%s.json. Simulated voice written for teaching; adds no new facts. */\n") % (cid, cid)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(head + "Object.assign(window.COURSE_LNOTES = window.COURSE_LNOTES || {}, " + json.dumps(cur, indent=1, ensure_ascii=False) + ");\n", encoding="utf8")
    print("wrote", target.relative_to(A), len(cur), "modules")
