"""Small helpers for hand fixes to a course from a script (used for the 15/11/2026 accuracy pass).

    import pc_fixlib as F
    c = F.Course("africa-post-colonial")
    c.replace("3", "old exact text", "new exact text")         # module 3, must match exactly once
    c.recite("3", "unique snippet", "old-key", "new-key")     # the first {{old-key}} after the snippet
    c.add_ref("key", t="...", s="...", u="...", b="book", p="Chapter 5 (ch-006.txt, ch-007.txt)")
    c.set_ref_field("key", "p", "...")
    c.waive(key, kind, match, reason, item=None)
    c.save()
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def jesc(s):
    return json.dumps(s, ensure_ascii=False)[1:-1]


class Course:
    def __init__(self, cid):
        self.cid = cid
        self.D = ROOT / "courses" / cid
        self.mods = {}
        self.rp = self.D / ("course-%s-refs.js" % cid)
        self.refs = self.rp.read_text(encoding="utf-8")
        self.wp = self.D / "docs" / "verify-waivers.json"
        self.w = json.loads(self.wp.read_text(encoding="utf-8")) if self.wp.exists() else []
        self.log = []

    def _m(self, mod):
        if mod not in self.mods:
            f = self.D / "modules" / ("course-%s-%s.js" % (self.cid, mod))
            self.mods[mod] = [f, f.read_text(encoding="utf-8")]
        return self.mods[mod]

    def replace(self, mod, old, new):
        m = self._m(mod)
        n = m[1].count(jesc(old))
        if n != 1:
            self.log.append("MISS replace m%s (%d): %s" % (mod, n, old[:70]))
            return False
        m[1] = m[1].replace(jesc(old), jesc(new))
        return True

    def recite(self, mod, snippet, old, new):
        m = self._m(mod)
        i = m[1].find(jesc(snippet))
        if i < 0:
            self.log.append("MISS snippet m%s: %s" % (mod, snippet[:70]))
            return False
        j = m[1].find("{{%s}}" % old, i)
        if j < 0 or j - i > 4000:
            self.log.append("MISS cite m%s {{%s}} after: %s" % (mod, old, snippet[:60]))
            return False
        m[1] = m[1][:j] + "{{%s}}" % new + m[1][j + len(old) + 4:]
        return True

    def add_ref(self, key, **d):
        if re.search(r'^\s*"%s"\s*:' % re.escape(key), self.refs, re.M):
            return
        lines = self.refs.split("\n")
        close = max(i for i, ln in enumerate(lines) if ln.strip().startswith("});"))
        prev = close - 1
        while not lines[prev].strip():
            prev -= 1
        if not lines[prev].rstrip().endswith(","):
            lines[prev] = lines[prev].rstrip() + ","
        lines.insert(close, "  %s: %s," % (json.dumps(key), json.dumps(d, ensure_ascii=False)))
        self.refs = "\n".join(lines)

    def set_ref_field(self, key, field, value):
        lines = self.refs.split("\n")
        for i, ln in enumerate(lines):
            if re.match(r'\s*"%s"\s*:\s*\{' % re.escape(key), ln):
                pat = r'("?\b%s"?\s*:\s*")((?:[^"\\]|\\.)*)(")' % field
                if re.search(pat, ln):
                    lines[i] = re.sub(pat, lambda mm: mm.group(1) + jesc(value) + mm.group(3), ln, count=1)
                else:
                    lines[i] = re.sub(r'\}\s*(,?)\s*$', lambda mm: ', "%s": %s }%s' % (field, json.dumps(value, ensure_ascii=False), mm.group(1)), ln, count=1)
                self.refs = "\n".join(lines)
                return True
        self.log.append("MISS ref %s" % key)
        return False

    def ref_field(self, key, field):
        m = re.search(r'^\s*"%s"\s*:\s*\{.*?"?\b%s"?\s*:\s*"((?:[^"\\]|\\.)*)"' % (re.escape(key), field), self.refs, re.M)
        return json.loads('"%s"' % m.group(1)) if m else None

    def waive(self, key, kind, match, reason, item=None, checked="15/11/2026"):
        self.w.append(dict(key=key, kind=kind, item=item, match=match, reason=reason, checked=checked))

    def save(self):
        for mod, (f, t) in self.mods.items():
            f.write_text(t, encoding="utf-8")
        self.rp.write_text(self.refs, encoding="utf-8")
        self.wp.parent.mkdir(exist_ok=True)
        self.wp.write_text(json.dumps(self.w, indent=1, ensure_ascii=False), encoding="utf-8")
        for x in self.log:
            print(x)
        print("saved; %d problems" % len(self.log))
