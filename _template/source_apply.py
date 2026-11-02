#!/usr/bin/env python3
"""Tracks what happened to every finding a source review logged, so nothing is left in a notebook.

    python _template/source_apply.py <course> status                     per-module table: findings, applied, confirmed, avoided, skipped, open
    python _template/source_apply.py <course> list [--module 5] [--book key] [--open]   findings with ids and state
    python _template/source_apply.py <course> mark <book> <id,id,...> --where "module 5, lesson Cuts and pace"
    python _template/source_apply.py <course> skip <book> <id,id,...> --reason "why no lesson change is needed"
    python _template/source_apply.py <course> avoid <book> <id,id,...> --reason "checked: the lessons do not repeat the claim"
    python _template/source_apply.py <course> auto [--write]             suggest findings the lessons already cover (same book cited, shared terms)
    python _template/source_apply.py <course> batch decisions.json       apply many decisions in one call: a JSON list of {"book", "state": "mark"|"skip"|"avoid", "ids": [...], "note"}

States
    open       logged, not yet used (extended, refined, note) or not yet checked (contradicted, absent)
    applied    a lesson now uses it (mark, or auto)
    confirmed  verdict "confirmed": the source agrees with the course, no change needed (derived, not stored)
    avoided    verdict "contradicted": checked that the lessons do not repeat the book's mistake
    skipped    deliberately not used, with a reason

Records live in courses/<course>/sources/<key>/findings-status.json, keyed by a stable id for each finding.
check_course.py reports open findings per module so a review is not finished while useful findings are unused.
"""
import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import source_lib as S  # noqa: E402
import source_map as M  # noqa: E402

ROOT = S.ROOT
STOP = set("the and for with that this from into than then have been were which their about there these those would could should course module lesson lessons book books source sources can use used using also more most such only each any not but are was has had its one two three four five six per its our you your when what where while does doing make made need needs like same other another over under between across both either neither whether".split())


def norm_module(m):
    m = str(m).strip().lower()
    m = re.sub(r"^[a-z-]*?-(\d+|cap)$", r"\1", m)
    if m in ("capstone", "cap"):
        return "cap"
    return m


def load_state(d):
    return S.load(d / "findings-status.json", {})


def save_state(d, st):
    S.save(d / "findings-status.json", st)


def all_findings(cid):
    out = []
    for d, man in S.sources(cid):
        st = load_state(d)
        for f in S.findings(d):
            fid = S.finding_id(f)
            rec = st.get(fid, {})
            state = rec.get("state", "open")
            if f["verdict"] == "confirmed" and state == "open":
                state = "confirmed"
            out.append(dict(book=man["key"], id=fid, module=norm_module(f["module"]), verdict=f["verdict"], location=f["location"],
                            text=f["text"], state=state, note=rec.get("note", ""), dir=d))
    return out


def tokens(text):
    words = re.findall(r"[a-z][a-z'-]{4,}|\d[\d.,/:]*\d", text.lower())
    return {w for w in words if w not in STOP and (not w[0].isdigit() or len(w) >= 3 or any(c in w for c in ".,/:"))}


def module_lessons(cid, mod):
    """[(lesson title, text, set of book keys it cites)] for one module."""
    sys.path.insert(0, str(ROOT / "_template"))
    import subprocess
    key = "%s-%s" % (cid, mod)
    js = ("const P=require(%s);const m=P.load(%s,%s);console.log(JSON.stringify(m.obj.lessons.map(l=>({title:l.title,text:JSON.stringify(l.blocks)}))))"
          % (json.dumps(str(ROOT / "_template" / "course_patch.js").replace("\\", "/")), json.dumps(cid), json.dumps(key)))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        return []
    refs = M.load_refs(cid)
    out = []
    for L in json.loads(r.stdout):
        books = {refs[k]["b"] for k in set(re.findall(r"\{\{([a-z0-9-]+)\}\}", L["text"])) if k in refs and refs[k].get("b")}
        out.append((L["title"], L["text"], books))
    return out


def auto_matches(cid):
    """Open findings that a lesson in the same module already covers: it cites the same book and shares distinctive terms."""
    found = []
    cache = {}
    for f in all_findings(cid):
        if f["state"] != "open" or f["verdict"] in ("contradicted", "absent"):
            continue
        mod = f["module"]
        if mod not in cache:
            cache[mod] = module_lessons(cid, mod)
        ft = tokens(f["text"])
        if len(ft) < 5:
            continue
        best = None
        for title, text, books in cache[mod]:
            same = f["book"] in books   # a lesson that cites another source for the same point also counts, at a stricter bar
            lt = tokens(re.sub(r"\{\{[^}]*\}\}", " ", text))
            ov = ft & lt
            score = len(ov) / len(ft)
            need = 0.35 if same else 0.5
            if len(ov) >= 5 and score >= need and (best is None or score > best[0]):
                best = (score, title + ("" if same else " [another source]"), sorted(ov)[:6])
        if best:
            found.append((f, best))
    return found


def cmd_status(cid):
    fs = all_findings(cid)
    mods = sorted({f["module"] for f in fs}, key=lambda x: (not x.isdigit(), int(x) if x.isdigit() else 99, x))
    print("%-8s %9s %8s %9s %8s %8s %6s" % ("module", "findings", "applied", "confirmed", "avoided", "skipped", "open"))
    tot = dict(n=0, applied=0, confirmed=0, avoided=0, skipped=0, open=0)
    for m in mods:
        sub = [f for f in fs if f["module"] == m]
        c = {k: sum(1 for f in sub if f["state"] == k) for k in ("applied", "confirmed", "avoided", "skipped", "open")}
        print("%-8s %9d %8d %9d %8d %8d %6d" % (m, len(sub), c["applied"], c["confirmed"], c["avoided"], c["skipped"], c["open"]))
        tot["n"] += len(sub)
        for k in c:
            tot[k] += c[k]
    print("%-8s %9d %8d %9d %8d %8d %6d" % ("all", tot["n"], tot["applied"], tot["confirmed"], tot["avoided"], tot["skipped"], tot["open"]))
    books = {}
    for f in fs:
        if f["state"] == "open":
            books[f["book"]] = books.get(f["book"], 0) + 1
    if books:
        print("open by book: " + ", ".join("%s %d" % (k, v) for k, v in sorted(books.items())))


def cmd_list(cid, module, book, only_open):
    for f in all_findings(cid):
        if module and f["module"] != module:
            continue
        if book and f["book"] != book:
            continue
        if only_open and f["state"] != "open":
            continue
        print("%s  m%-4s %-12s %-13s %-9s %s  %s" % (f["id"], f["module"], f["book"][:12], f["verdict"], f["state"], f["location"], f["text"]))


def set_state(cid, book, ids, state, note):
    d, man = S.find(cid, book)
    known = {S.finding_id(f) for f in S.findings(d)}
    want = [x.strip() for x in ids.split(",") if x.strip()]
    bad = [x for x in want if x not in known]
    if bad:
        sys.exit("unknown finding id(s) for %s: %s (run: list --book %s)" % (book, ", ".join(bad), book))
    st = load_state(d)
    for x in want:
        st[x] = dict(state=state, note=note, date=date.today().isoformat())
    save_state(d, st)
    print("%d finding(s) marked %s" % (len(want), state))


def cmd_auto(cid, write):
    found = auto_matches(cid)
    for f, (score, title, ov) in found:
        print("%s m%-3s %-12s -> %s (%.0f%%; %s)" % (f["id"], f["module"], f["book"][:12], title, 100 * score, ", ".join(ov)))
        if write:
            d = f["dir"]
            st = load_state(d)
            st[f["id"]] = dict(state="applied", note="auto: module %s, lesson %s" % (f["module"], title), date=date.today().isoformat())
            save_state(d, st)
    print("%d finding(s) %s" % (len(found), "marked applied" if write else "look already covered (add --write to record them)"))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("course")
    ap.add_argument("cmd", choices=["status", "list", "mark", "skip", "avoid", "auto", "batch"])
    ap.add_argument("book", nargs="?")
    ap.add_argument("ids", nargs="?")
    ap.add_argument("--module")
    ap.add_argument("--where")
    ap.add_argument("--reason")
    ap.add_argument("--open", action="store_true")
    ap.add_argument("--write", action="store_true")
    a = ap.parse_args()
    if a.cmd == "status":
        cmd_status(a.course)
    elif a.cmd == "list":
        cmd_list(a.course, norm_module(a.module) if a.module else None, a.book, a.open)
    elif a.cmd == "auto":
        cmd_auto(a.course, a.write)
    elif a.cmd == "batch":
        if not a.book:
            sys.exit("batch needs a JSON file of decisions")
        with open(a.book, encoding="utf-8") as fh:
            decisions = json.load(fh)
        for i, item in enumerate(decisions, 1):
            state = {"mark": "applied", "skip": "skipped", "avoid": "avoided"}.get(item.get("state"))
            ids = item.get("ids")
            ids = ",".join(ids) if isinstance(ids, list) else ids
            note = item.get("note", "")
            if not (state and item.get("book") and ids and note):
                sys.exit("decision %d needs book, state (mark, skip or avoid), ids and note" % i)
            set_state(a.course, item["book"], ids, state, note)
    else:
        if not (a.book and a.ids):
            sys.exit("%s needs a book key and finding ids" % a.cmd)
        note = a.where if a.cmd == "mark" else a.reason
        if not note:
            sys.exit("%s needs %s" % (a.cmd, "--where" if a.cmd == "mark" else "--reason"))
        set_state(a.course, a.book, a.ids, {"mark": "applied", "skip": "skipped", "avoid": "avoided"}[a.cmd], note)


if __name__ == "__main__":
    main()
