#!/usr/bin/env python3
"""Scaffold a new course in the Education Archive from the template.

    python new_course.py <id> "<Course title>" [--modules 6] [--level Beginner]
                         [--summary "..."] [--accent "#2f8f5b"] [--no-capstone]

Creates, next to index.html:
    courses/<id>/pack-<id>.js            library entry, modules, details, quiz (every TODO to replace)
    course-<id>-refs.js     the sources this course cites
    course-<id>-figs.js     the diagrams this course draws
    course-<id>-<n>.js      one lesson file per module (and course-<id>-cap.js for the capstone)
and registers them in index.html between the COURSES markers. Nothing else needs editing.
Small Scale Greenhouse (pack-greenhouse-year.js, course-m1.js ...) is the finished example.
"""
import argparse, datetime, json, math, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSES = ROOT / "courses"


def js_round(x):
    return int(math.floor(x + 0.5))


def belt_labels(n):
    counts = [1, min(2, n), js_round(n * 4 / 7), js_round(n * 6 / 7), n]
    names = ["White", "Yellow", "Orange", "Green", "Brown"]
    at, prev = {}, 1
    for i, c in enumerate(counts):
        c = min(max(c, prev), n)
        prev = c
        at[c] = names[i]
    return at


def prereq(n):
    return "None" if n == 1 else ("Module 1" if n == 2 else "Modules 1–%d" % (n - 1))


def lesson_skeleton(key, title, number, is_cap):
    kind = "capstone" if is_cap else "module %s" % number
    blocks = [
        {"t": "p", "x": "TODO: open the lesson with the one idea the learner must hold. Cite sources like this {{source-key}}."},
        {"t": "h", "x": "TODO: subheading"},
        {"t": "p", "x": "TODO: explain it plainly. One idea per sentence, because each sentence becomes a slide bullet."},
        {"t": "table", "title": "TODO: table title", "head": ["Column A", "Column B", "Column C"], "rows": [["TODO", "TODO", "TODO"], ["TODO", "TODO", "TODO"]], "src": "{{source-key}}"},
        {"t": "callout", "k": "key", "x": "TODO: the single takeaway of this section."},
        {"t": "example", "title": "Worked example: TODO", "steps": ["TODO: step one with the numbers shown.", "TODO: step two.", "TODO: the result, and what it means. Say 'illustrative' if the numbers are invented."]},
        {"t": "terms", "i": [["TODO term", "TODO plain definition."], ["TODO term", "TODO plain definition."]]},
        {"t": "activity", "x": "TODO: something the learner does, tied to a challenge."},
        {"t": "check", "q": "TODO: a question that tests understanding, not recall of a phrase.", "o": ["TODO option", "TODO option", "TODO option", "TODO option"], "a": 0, "w": "TODO: why it is right, citing the source."},
        {"t": "take", "i": ["TODO takeaway", "TODO takeaway", "TODO takeaway"]},
    ]
    lessons = [{"id": "l1", "title": "TODO lesson title", "min": 12, "blocks": blocks}]
    obj = {
        "intro": "TODO: why this %s matters and what the learner will be able to do." % kind,
        "outcomes": ["TODO: a measurable outcome", "TODO: a measurable outcome", "TODO: a measurable outcome"],
        "lessons": lessons,
    }
    return ("/* %s (%s). Replace every TODO. Block types and rules: _template/TEMPLATE.md. */\n"
            "(window.COURSE = window.COURSE || {})[%s] = %s;\n") % (title, kind, json.dumps(key), json.dumps(obj, ensure_ascii=False, indent=2))


def main():
    ap = argparse.ArgumentParser(description="Scaffold a new course.")
    ap.add_argument("id", help="kebab-case course id, for example 'sourdough-basics'")
    ap.add_argument("title", help="course title shown on the library card")
    ap.add_argument("--modules", type=int, default=6)
    ap.add_argument("--level", default="Beginner")
    ap.add_argument("--summary", default="TODO: one or two sentences on what the learner can do after this course.")
    ap.add_argument("--accent", default="#2f8f5b")
    ap.add_argument("--no-capstone", action="store_true")
    a = ap.parse_args()

    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", a.id):
        sys.exit("id must be kebab-case: lowercase letters, digits and hyphens")
    n = a.modules
    if n < 2 or n > 12:
        sys.exit("--modules must be between 2 and 12")
    index = ROOT / "index.html"
    html = index.read_text(encoding="utf-8")
    if "<!-- COURSES:END -->" not in html:
        sys.exit("index.html has no COURSES markers")
    D = COURSES / a.id
    if ('pack-%s.js' % a.id) in html or D.exists():
        sys.exit("a course called %s already exists" % a.id)

    (D / "modules").mkdir(parents=True)
    (D / "docs").mkdir()
    today = datetime.date.today().isoformat()
    cap = not a.no_capstone
    belts = belt_labels(n)
    modules, details, quiz = [], {}, {}
    for i in range(1, n + 1):
        key = "%s-%d" % (a.id, i)
        modules.append({"key": key, "library": a.id, "number": str(i), "kind": "module", "title": "TODO: module %d title" % i,
                        "hours": "3 h", "challenges": 3, "belt": belts.get(i, ""), "status": "Not started", "completed_on": None})
        details[key] = {
            "prereq": prereq(i), "core": "TODO: two to four sentences on why this module matters.",
            "steps": ["TODO: key step one", "TODO: key step two", "TODO: key step three"], "worked": "TODO: a short worked example.",
            "challenges": [
                {"id": "C1", "level": "Warm-up", "task": "TODO", "key": "TODO: the answer key", "check": "TODO: a self-check the learner can run"},
                {"id": "C2", "level": "Core", "task": "TODO", "key": "TODO", "check": "TODO"},
                {"id": "C3", "level": "Stretch", "task": "TODO", "key": "TODO", "check": "TODO"}],
            "mistakes": ["TODO: a common mistake and its fix"],
            "review": [] if i == 1 else [{"q": "TODO: a question from an earlier module", "a": "TODO"}],
            "pass": "TODO: the observable result that marks this module complete."}
        quiz[key] = [{"q": "TODO question %d" % q, "o": ["TODO", "TODO", "TODO", "TODO"], "a": 0, "w": "TODO: why"} for q in range(1, 5)]
    if cap:
        key = "%s-cap" % a.id
        modules.append({"key": key, "library": a.id, "number": "Capstone", "kind": "capstone", "title": "TODO: capstone title", "hours": "TODO",
                        "challenges": 0, "belt": "Black", "status": "Not started", "completed_on": None})
        details[key] = {"prereq": "All modules", "core": "TODO: the capstone brief.", "steps": ["TODO: required deliverable"], "worked": "",
                        "challenges": [{"id": str(r), "level": "TODO criterion", "task": "TODO", "key": "TODO: what passes", "check": ""} for r in (1, 2, 3)],
                        "mistakes": [], "review": [], "pass": "TODO: all rubric rows meet the passing result."}
    pack = {
        "updated": today,
        "libraries": [{"id": a.id, "subject": a.title, "level": a.level, "created": today, "modules": n, "challenges": 3 * n,
                       "capstone": "TODO capstone title" if cap else "", "file": "", "summary": a.summary, "tags": [], "accent": a.accent,
                       "metrics": {}}],
        "modules": modules, "resources": [], "details": details, "quiz": quiz, "slides": [],
        "activity": [{"id": "a1", "date": today, "library": a.id, "event": "Course scaffolded", "detail": "Created from the template. Replace every TODO before use."}],
    }
    (D / ("pack-%s.js" % a.id)).write_text(
        "/* Course pack: %s. Registered with ARCHIVE_ADD. Replace every TODO. */\nARCHIVE_ADD(%s);\n" % (a.title, json.dumps(pack, ensure_ascii=False, indent=1)), encoding="utf-8")
    (D / ("course-%s-refs.js" % a.id)).write_text(
        "/* Sources for %s. Cite them in lessons with {{key}}. Read each source in full before you cite it. */\n"
        "Object.assign(window.COURSE_REFS = window.COURSE_REFS || {}, {\n"
        "  /* \"source-key\": { t: \"Title\", s: \"Author or publisher, year\", u: \"https://...\" }, */\n});\n" % a.title, encoding="utf-8")
    (D / ("course-%s-figs.js" % a.id)).write_text(
        "/* Diagrams for %s. Prefix every figure id with the course id so ids never clash. Use theme tokens such as var(--ink) and var(--accent). */\n"
        "(function () {\n  var CE = window.CourseEngine, S = CE.S;\n"
        "  CE.figs[%s] = function () {\n"
        "    var svg = S(\"svg\", { viewBox: \"0 0 640 200\", width: \"100%%\", role: \"img\", \"aria-label\": \"Example figure\" });\n"
        "    var t = S(\"text\", { x: 320, y: 105, \"text-anchor\": \"middle\", style: \"fill:var(--ink);font:600 20px var(--f-body)\" });\n"
        "    t.textContent = \"Replace with a diagram\"; svg.appendChild(t); return svg;\n  };\n})();\n" % (a.title, json.dumps(a.id + "-example")), encoding="utf-8")
    files = []
    for i in range(1, n + 1):
        f = "course-%s-%d.js" % (a.id, i)
        (D / "modules" / f).write_text(lesson_skeleton("%s-%d" % (a.id, i), a.title, i, False), encoding="utf-8")
        files.append(f)
    if cap:
        f = "course-%s-cap.js" % a.id
        (D / "modules" / f).write_text(lesson_skeleton("%s-cap" % a.id, a.title, "cap", True), encoding="utf-8")
        files.append(f)

    m = re.search(r"\?v=([0-9a-z]+)", html)
    v = m.group(1) if m else "1"
    pre = "courses/%s/" % a.id
    tags = [pre + "pack-%s.js" % a.id, pre + "course-%s-refs.js" % a.id, pre + "course-%s-figs.js" % a.id] + [pre + "modules/" + f for f in files]
    block = "".join('<script src="%s?v=%s"></script>\n' % (t, v) for t in tags)
    html = html.replace("<!-- COURSES:END -->", block + "<!-- COURSES:END -->")
    index.write_text(html, encoding="utf-8")
    print("Created course '%s' with %d modules%s." % (a.id, n, " and a capstone" if cap else ""))
    print("Next: fill every TODO, read each source in full, then run:  python _template/check_course.py %s" % a.id)


if __name__ == "__main__":
    main()
