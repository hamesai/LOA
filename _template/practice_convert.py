#!/usr/bin/env python3
"""Applies hand-written applied versions of recall items to a course.

    python _template/practice_convert.py <course> <conversions.json> [--dry]

conversions.json maps a module number (or "cap") to items:
    {"3": {"old exact question": "new question",                        # keep options, answer and explanation
           "other old question": {"q": "...", "o": [...], "a": 1, "w": "..."},   # replace any of them
           "Q2": "new quiz question",                                    # quiz item by index in the pack
           "C2": "new challenge task"}}                                  # challenge by id
Every converted item is tagged kind: "application", so practice_audit.py counts it however it is worded. Write the new
question so it really is a case to work on (a claim to judge, a situation to decide, a figure to use), not a reworded
fact question; the tag only saves the classifier from guessing.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main():
    cid, cf = sys.argv[1], sys.argv[2]
    dry = "--dry" in sys.argv
    conv = json.loads(Path(cf).read_text(encoding="utf-8"))
    checks = {m: {k: v for k, v in d.items() if not re.fullmatch(r"[QC]\d+", k)} for m, d in conv.items()}
    js = r"""
const P=require(%s);const job=JSON.parse(require('fs').readFileSync(%s,'utf8'));const dry=%s;
for (const mod of Object.keys(job)) {
  const m=P.load(%s, %s+'-'+mod); let n=0;
  for (const [old, nw] of Object.entries(job[mod])) {
    let hit=0;
    m.obj.lessons.forEach(L=>L.blocks.forEach(b=>{ if(b.t==='check' && b.q===old){
      if(typeof nw==='string') b.q=nw; else { for (const k of ['q','o','a','w']) if (nw[k]!==undefined) b[k]=nw[k]; }
      b.kind='application'; hit++; } }));
    if(hit<1) console.log('MISS module',mod,':',old.slice(0,80)); else n++;
  }
  if(!dry) P.save(m); console.log('module',mod,'checks converted',n);
}""" % (json.dumps(str(ROOT / "_template" / "course_patch.js").replace("\\", "/")),
         json.dumps(str(Path(cf).with_suffix(".checks.json")).replace("\\", "/")), "true" if dry else "false",
         json.dumps(cid), json.dumps(cid))
    Path(cf).with_suffix(".checks.json").write_text(json.dumps(checks, ensure_ascii=False), encoding="utf-8")
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout.strip(), r.stderr.strip())
    Path(cf).with_suffix(".checks.json").unlink()

    pp = ROOT / "courses" / cid / ("pack-%s.js" % cid)
    t = pp.read_text(encoding="utf-8")
    m = re.match(r"^([\s\S]*?)ARCHIVE_ADD\(([\s\S]*)\);\s*$", t)
    pack = json.loads(m.group(2))
    nq = nc = 0
    for mod, d in conv.items():
        key = "%s-%s" % (cid, mod)
        for k, nw in d.items():
            if re.fullmatch(r"Q\d+", k):
                q = pack["quiz"][key][int(k[1:])]
                if isinstance(nw, str):
                    q["q"] = nw
                else:
                    q.update({x: nw[x] for x in ("q", "o", "a", "w") if x in nw})
                q["kind"] = "application"; nq += 1
            elif re.fullmatch(r"C\d+", k):
                ch = [c for c in pack["details"][key]["challenges"] if c.get("id") == k]
                if not ch:
                    print("MISS challenge", key, k); continue
                if isinstance(nw, str):
                    ch[0]["task"] = nw
                else:
                    ch[0].update(nw)
                ch[0]["kind"] = "application"; nc += 1
    if not dry:
        pp.write_text(m.group(1) + "ARCHIVE_ADD(" + json.dumps(pack, indent=1, ensure_ascii=False) + ");\n", encoding="utf-8")
    print("quiz converted %d, challenges converted %d" % (nq, nc))


if __name__ == "__main__":
    main()
