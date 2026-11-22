"""Updates the Casement ref after the full reading of 22/11/2026 and adds the two section refs the lessons cite."""
import json
import re
from pathlib import Path

REFS = Path(__file__).resolve().parents[1] / "course-africa-post-colonial-refs.js"
lines = REFS.read_text(encoding="utf-8").split("\n")
URL = None
for ln in lines:
    m = re.match(r'\s*"casement"\s*:\s*\{.*?\bu:\s*"([^"]+)"', ln)
    if m:
        URL = m.group(1)
assert URL, "casement ref url not found"
TITLE = "Roger Casement, Report to the Marquess of Lansdowne on the Upper Congo, 11/12/1903, printed as Africa No. 1 (1904), with Africa No. 7 (1904) (the Congo State's reply and the British rejoinder); Parliamentary Papers, Internet Archive text; read in full 22/11/2026 except Parts 1 and 4, which are covering diplomatic papers, skipped on purpose"
NEW = {
    "casement": {"t": TITLE, "s": "UK Parliament, Foreign Office", "b": "casement", "p": "Part 2", "u": URL, "d": "22/11/2026"},
    "casement-inclosures": {"t": "Roger Casement, Report on the Upper Congo (Africa No. 1, 1904), the inclosures: refugee notes, the Whitehead letters, the Lake Mantumba statement, the statements taken by Casement and the Governor-General's circulars (Part 3)", "s": "UK Parliament, Foreign Office", "b": "casement", "p": "Part 3 (ch-003.txt)", "u": URL, "d": "22/11/2026"},
    "casement-reply": {"t": "Africa No. 7 (1904): the Congo State's notes of 12/03/1904, the Epondo inquiry, the Caudron appeal judgment of 15/03/1904, and the British memorandum and despatches of 1903 and 1904 (Part 5)", "s": "UK Parliament, Foreign Office", "b": "casement", "p": "Part 5 (ch-005.txt)", "u": URL, "d": "22/11/2026"},
}
out, done = [], False
for ln in lines:
    m = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', ln)
    if m and m.group(1) == "casement":
        for k, v in NEW.items():
            out.append("  %s: { t: %s, s: %s, b: %s, p: %s, u: %s, d: %s }," % (json.dumps(k), json.dumps(v["t"], ensure_ascii=False), json.dumps(v["s"]), json.dumps(v["b"]), json.dumps(v["p"]), json.dumps(v["u"]), json.dumps(v["d"])))
        done = True
        continue
    out.append(ln)
assert done
REFS.write_text("\n".join(out), encoding="utf-8")
print("refs written:", ", ".join(NEW))
