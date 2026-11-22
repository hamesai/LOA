"""Updates the Breunig ref after the full reading of 22/11/2026 and adds the two per-chapter refs the lessons cite."""
import json
import re
from pathlib import Path

REFS = Path(__file__).resolve().parents[1] / "course-africa-pre-colonial-refs.js"
URL = "https://discovery.ucl.ac.uk/id/eprint/10048844/"
BOOK = "Winds of Change: Archaeological Contributions in Honour of Peter Breunig, ed. N. Rupp, C. Beck, G. Franke and K. P. Wendt (Frankfurter Archäologische Schriften 35, Habelt, Bonn, 2017)"
NEW = {
    "breunig": {"t": BOOK + "; the front chapter of the volume (prefaces, forewords, contents and the opening of one article) read in full 22/11/2026: 2 of 2 sections; the other contributions are not in the ingested text and were not read",
                "s": "source", "u": URL, "b": "breunig", "d": "22/11/2026"},
    "breunig-foreword": {"t": "Foreword by Y. A. Usman (National Commission for Museums and Monuments, Abuja) and the contents pages, in " + BOOK,
                         "s": "source", "u": URL, "b": "breunig", "p": "Pages 1 to 20 (ch-001.txt)", "d": "22/11/2026"},
    "breunig-wko": {"t": "K. MacDonald, L. Champion and K. Manning, Windé Koroji Ouest (Mali, Third and Second Millennia BCE): The Environmental and Subsistence Evidence, in " + BOOK + ", pp. 165 to 179",
                    "s": "source", "u": URL, "b": "breunig", "p": "Pages 21 to 34 (ch-002.txt)", "d": "22/11/2026"},
}
lines = REFS.read_text(encoding="utf-8").split("\n")
out = []
done = set()
for ln in lines:
    m = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', ln)
    if m and m.group(1) == "breunig":
        for k, v in NEW.items():
            out.append("  %s: %s," % (json.dumps(k), json.dumps(v, ensure_ascii=False, separators=(",", ":"))))
            done.add(k)
        continue
    out.append(ln)
REFS.write_text("\n".join(out), encoding="utf-8")
print("refs written:", ", ".join(sorted(done)))
