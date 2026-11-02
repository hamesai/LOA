"""Builds a detailed "lecturer's method" lesson from a compact description.

    from _detail import lesson_entry
    M.append(lesson_entry(key=..., name=..., min=22, outcome=..., intro=..., record=[...], steps=[...],
        extra=[...], table=(title, head, rows, src), worked=[(title, step, step, ...)], apply=(title, [steps]),
        act="...", checks=[(q, options, answer_index, why)], take=[...], quiz=(q, options, answer_index, why)))

Every text field may carry {{source-key}} citations. Cites inside table cells are moved to the table's sources line,
because the page does not resolve them inside cells.
"""
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from author import p, h, ul, ol, table, call, ex, act as _act, chk, take as _take

CITE = re.compile(r"\s*\{\{[a-z0-9-]+\}\}")
CITEK = re.compile(r"\{\{([a-z0-9-]+)\}\}")


def _table(t):
    title, head, rows, src = t
    keys = []

    def clean(x):
        for k in CITEK.findall(x):
            if k not in keys:
                keys.append(k)
        return CITE.sub("", x).strip()
    title, head = clean(title), [clean(c) for c in head]
    rows = [[clean(c) for c in r] for r in rows]
    have = set(CITEK.findall(src))
    extra = " ".join("{{%s}}" % k for k in keys if k not in have)
    return table(title, head, rows, (src + " " + extra).strip())


def lesson_entry(key, name, min, outcome, intro, record, steps, table=None, worked=(), apply=None, act="", checks=(), take=(), quiz=None,
                 extra=(), method_title="His method, step by step", notes=()):
    b = [h("The record behind this lesson")]
    b += [p(x) for x in record]
    b += [h(method_title), ol(*steps)]
    b += list(extra)
    b += [call("note", x) for x in notes]
    if table:
        b.append(_table(table))
    for w in worked:
        b.append(h(w[0]))
        b.append(ex(w[1], *w[2:]))
    if apply:
        b.append(h(apply[0]))
        b.append(ol(*apply[1]))
    if act:
        b.append(_act(act))
    for q, o, a, why in checks:
        b.append(chk(q, o, a, why))
    b.append(_take(*take))
    e = dict(key=key, name=name, min=min, outcome=outcome, intro=intro, blocks=b)
    e["quiz"] = dict(q=quiz[0], o=quiz[1], a=quiz[2], w=quiz[3]) if quiz else None
    return e
