#!/usr/bin/env python3
"""Sorts a course's practice items into recall and application, so the gate can see whether learners practise using
the subject or only remembering it.

    python _template/practice_audit.py <course> [--list recall|application] [--module 3]

Items checked: lesson checks (t: "check"), the module quiz in the pack, and the module challenges.

  application  the item gives a case, claim, source, figure or situation and asks the learner to do something with it:
               judge, date, rewrite, choose a safer wording, weigh evidence, predict, calculate, decide what to do.
  recall       the item asks for a fact, name, date, definition or match that was stated in the lesson.

An item can be marked by hand with "kind": "application" or "kind": "recall" (lesson checks and quiz items), which
overrides the classifier. The standard (check_course.py): at least half of each module's checks and quiz items are
application, and every module has at least one application challenge.
"""
import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STANDARD = 0.5

APPLY = re.compile(r"""(?ix)
  \b(what\s+should|how\s+should|should\s+(you|a|the|we)|what\s+would|what\s+do\s+you|which\s+(is|would\s+be)\s+(the\s+)?(safest|safer|best|strongest|weakest|most\s+\w+|least\s+\w+)
  |which\s+(rewrite|wording|sentence|version|reading|conclusion|claim|source|step|check|answer|statement)\b
  |rewrite|re-?word|re-?phrase|you\s+(find|read|see|meet|are|have|want|need|come\s+across|open|hear|write)|a\s+(student|learner|friend|colleague|museum|website|textbook|blog|documentary|guide|label|writer|lesson|post|video|client|customer|buyer|seller)\b
  |\b(says|claims|states|writes|argues|reports)\b.*\?|(work\s+out|calculate|estimate|compute|how\s+many\s+years|how\s+long\s+(after|before)|how\s+much)
  |what\s+can\s+(you|we)\s+(conclude|infer|say)|best\s+evidence|most\s+likely|why\s+(would|might|should)
  |evaluate|assess|sketch|draw\s+up|plan\b|design|draft|in\s+about\s+\d+\s+words|safest|best\s+(use|way)|which\s+would\s+you
  |respond(ing)?\s+to|argue\s+a|rate\s+it|correct\s+it|build\s+a\s+table|comparing|rank\b
  |given\s+(that|this|the)|if\s+(a|an|the|you|two|one)\b|suppose|imagine|scenario|case:|in\s+this\s+case|apply|tag\s+(it|this|the)|which\s+tag
  |what\s+is\s+(wrong|missing|the\s+flaw|the\s+problem|the\s+mistake)|spot\s+the|which\s+(error|mistake|flaw)|compare|weigh|reconcile|judge|verdict|decide
  |'[^']{25,}'|"[^"]{25,}"|“[^”]{25,}”)""")
RECALL = re.compile(r"(?i)^\s*(who|when|where|which\s+(feature|king|state|ruler|city|people|year|date|term|name)|what\s+(is|was|were|are|does|did)\s+(the\s+)?(name|date|capital|meaning|term|year|status)|name\s|match|list|define|in\s+what\s+year)")


def classify(text, hand=None):
    if hand in ("application", "recall"):
        return hand
    t = re.sub(r"\{\{[^}]+\}\}", "", text or "")
    if APPLY.search(t):
        return "application"
    return "recall"


def module_items(cid, key):
    js = ("const P=require(%s);const m=P.load(%s,%s);const out=[];m.obj.lessons.forEach(L=>L.blocks.forEach(b=>{if(b.t==='check')out.push({q:b.q,kind:b.kind||null,lesson:L.title})}));console.log(JSON.stringify(out))"
          % (json.dumps(str(ROOT / "_template" / "course_patch.js").replace("\\", "/")), json.dumps(cid), json.dumps(key)))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    return json.loads(r.stdout) if r.returncode == 0 and r.stdout.strip() else []


def pack(cid):
    t = (ROOT / "courses" / cid / ("pack-%s.js" % cid)).read_text(encoding="utf-8")
    return json.loads(re.search(r"ARCHIVE_ADD\((.*)\);\s*$", t, re.S).group(1))


def audit(cid):
    P = pack(cid)
    out = []
    for m in P["modules"]:
        key = m["key"]
        if key.endswith("-cap"):
            continue
        items = [dict(src="check", q=x["q"], lesson=x["lesson"], kind=classify(x["q"], x.get("kind"))) for x in module_items(cid, key)]
        items += [dict(src="quiz", q=q.get("q", "") or "generated: " + q.get("gen", ""), lesson="quiz",
                       kind="application" if q.get("gen") else classify(q.get("q", ""), q.get("kind"))) for q in P.get("quiz", {}).get(key, [])]   # gen: a randomised worked problem
        ch = [dict(src="challenge", q=c.get("task", ""), lesson=c.get("id", ""), kind=classify(c.get("task", ""), c.get("kind")))
              for c in P.get("details", {}).get(key, {}).get("challenges", [])]
        n = len(items)
        a = sum(1 for x in items if x["kind"] == "application")
        out.append(dict(module=key, items=items, challenges=ch, n=n, app=a, share=(a / n if n else 0.0),
                        ch_app=sum(1 for c in ch if c["kind"] == "application")))
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("--list", choices=("recall", "application"))
    ap.add_argument("--module")
    a = ap.parse_args()
    bad = 0
    for r in audit(a.course):
        if a.module and not r["module"].endswith("-" + a.module):
            continue
        ok = r["share"] >= STANDARD and r["ch_app"] >= 1
        bad += not ok
        print("%s %s: %d of %d checks and quiz items are application (%d%%); %d of %d challenges" % (
            "ok  " if ok else "LOW ", r["module"], r["app"], r["n"], round(100 * r["share"]), r["ch_app"], len(r["challenges"])))
        if a.list:
            for x in r["items"] + r["challenges"]:
                if x["kind"] == a.list:
                    print("    [%s] %s" % (x["src"], x["q"][:160]))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
