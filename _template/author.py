"""Authoring helpers: write lessons and the pack in Python instead of hand-editing JSON.

    import sys; sys.path.insert(0, r"<archive>\\_template")
    from author import *
    course("camping-basics", "Camping fundamentals (UK and Ireland)")
    write_module(1, intro, outcomes, [lesson("l1", "Title", 12, p("..."), table(...), chk(...), take(...))])
    write_refs({"key": ["Title", "Publisher, year", "https://..."]})
    write_pack(pack_dict)          # strips {{cites}} from quiz text, which the quiz view does not resolve

Block helpers match _template/TEMPLATE.md. Write one idea per sentence in p().
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def _dir(sub=""):
    d = ROOT / "courses" / _C["id"] / sub
    d.mkdir(parents=True, exist_ok=True)
    return d
_C = {"id": None, "title": None}


def course(cid, title):
    _C["id"], _C["title"] = cid, title


def fig_id(name): return _C["id"] + "-" + name
def p(x): return {"t": "p", "x": x}
def h(x): return {"t": "h", "x": x}
def ul(*i): return {"t": "ul", "i": list(i)}
def ol(*i): return {"t": "ol", "i": list(i)}
def table(title, head, rows, src=""): return {"t": "table", "title": title, "head": head, "rows": rows, "src": src}
def call(k, x): return {"t": "callout", "k": k, "x": x}
def fig(name, title, cap): return {"t": "fig", "id": fig_id(name), "title": title, "cap": cap}
def ex(title, *steps): return {"t": "example", "title": title, "steps": list(steps)}
def terms(*pairs): return {"t": "terms", "i": [list(x) for x in pairs]}
def act(x): return {"t": "activity", "x": x}
def chk(q, o, a, w): return {"t": "check", "q": q, "o": o, "a": a, "w": w}
def take(*i): return {"t": "take", "i": list(i)}
def video(id, title, by, note): return {"t": "video", "id": id, "title": title, "by": by, "note": note}
def lesson(id, title, mins, *blocks): return {"id": id, "title": title, "min": mins, "blocks": list(blocks)}
def challenge(id, level, task, key, check): return {"id": id, "level": level, "task": task, "key": key, "check": check}
def question(q, o, a, w): return {"q": q, "o": o, "a": a, "w": w}


def _strings(o):
    if isinstance(o, str):
        yield o
    elif isinstance(o, list):
        for x in o:
            yield from _strings(x)
    elif isinstance(o, dict):
        for x in o.values():
            yield from _strings(x)


def write_module(n, intro, outcomes, lessons):
    cid = _C["id"]
    body = {"intro": intro, "outcomes": outcomes, "lessons": lessons}
    js = "/* %s (module %s). Block types: _template/TEMPLATE.md. */\n(window.COURSE = window.COURSE || {})[%s] = %s;\n" % (
        _C["title"], n, json.dumps("%s-%s" % (cid, n)), json.dumps(body, ensure_ascii=False, indent=1))
    (_dir("modules") / ("course-%s-%s.js" % (cid, n))).write_text(js, encoding="utf-8")
    words = sum(len(s.split()) for s in _strings(body) if len(s) > 20)
    print("module %s: %d lessons, about %d words" % (n, len(lessons), words))


def write_refs(refs):
    cid = _C["id"]
    lines = ",\n".join("  %s: { t: %s, s: %s, u: %s }" % (json.dumps(k), json.dumps(v[0], ensure_ascii=False), json.dumps(v[1], ensure_ascii=False), json.dumps(v[2])) for k, v in refs.items())
    js = "/* Sources for %s. Cite with {{key}}. */\nObject.assign(window.COURSE_REFS = window.COURSE_REFS || {}, {\n%s\n});\n" % (_C["title"], lines)
    (_dir() / ("course-%s-refs.js" % cid)).write_text(js, encoding="utf-8")
    print("refs: %d sources" % len(refs))


def write_pack(pack):
    cid = _C["id"]
    for k in pack.get("quiz", {}):
        for it in pack["quiz"][k]:
            if "gen" in it:   # generated question, built in the browser by window.QGEN
                continue
            it["w"] = re.sub(r"\s*\{\{[^}]+\}\}", "", it["w"]).strip()
    js = "/* Course pack: %s. */\nARCHIVE_ADD(%s);\n" % (_C["title"], json.dumps(pack, ensure_ascii=False, indent=1))
    (_dir() / ("pack-%s.js" % cid)).write_text(js, encoding="utf-8")
    print("pack written")
