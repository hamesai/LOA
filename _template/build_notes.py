"""Rebuilds shared/course-lecturer-notes.js: existing notes are kept, and any _template/lec_data/notes/<course>.json
(a map of module key -> list of notes, one per lesson index, null to skip) replaces that course's notes.
Run: python _template/build_notes.py"""
import json, subprocess, sys
from pathlib import Path
A = Path(__file__).resolve().parent.parent
target = A / "shared" / "course-lecturer-notes.js"
js = "global.window={};new Function('window',require('fs').readFileSync(process.argv[1],'utf8'))(global.window);console.log(JSON.stringify(global.window.COURSE_LNOTES))"
cur = json.loads(subprocess.run(["node", "-e", js, str(target)], capture_output=True, text=True, check=True).stdout)
head = target.read_text(encoding="utf8").split("window.COURSE_LNOTES")[0]
for f in sorted((A / "_template" / "lec_data" / "notes").glob("*.json")):
    data = json.loads(f.read_text(encoding="utf8"))
    for k, v in data.items():
        old = cur.get(k, [])
        merged = []
        for i, n in enumerate(v):
            merged.append(n if n else (old[i] if i < len(old) else ""))
        cur[k] = merged
    print(f.stem, len(data), "modules")
lines = []
for k, v in cur.items():
    lines.append("  %s: [\n%s\n  ]" % (json.dumps(k), ",\n".join("    " + json.dumps(n, ensure_ascii=False) for n in v)))
target.write_text(head + "window.COURSE_LNOTES = {\n" + ",\n".join(lines) + "\n};\n", encoding="utf8")
print("wrote", target.name, len(cur), "modules")
