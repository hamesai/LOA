"""Updates the Equiano refs after the full reading of 22/11/2026 and adds the section refs the lessons cite."""
import json
import re
from pathlib import Path

REFS = Path(__file__).resolve().parents[1] / "course-africa-pre-colonial-refs.js"
URL = "https://www.gutenberg.org/ebooks/15399"
BOOK = "Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, or Gustavus Vassa, the African (London, 1789; Project Gutenberg 15399)"
NEW = {
    "equiano": {"t": BOOK + "; read in full 22/11/2026 (2 of 2 sections)", "s": "source", "u": URL, "b": "equiano", "d": "22/11/2026"},
    "equiano-ch1": {"t": BOOK + ", chapter I: his account of his birthplace and country", "s": "Project Gutenberg", "u": URL, "b": "equiano", "p": "CHAPTER I (ch-002.txt)", "d": "22/11/2026"},
    "equiano-front": {"t": BOOK + ", dedication to Parliament dated 24/03/1789", "s": "Project Gutenberg", "u": URL, "b": "equiano", "p": "Dedication (ch-001.txt)", "d": "22/11/2026"},
    "equiano-africa": {"t": BOOK + ", chapters I to III: his country, kidnapping, the passage, Barbados, Virginia and arrival in England", "s": "Project Gutenberg", "u": URL, "b": "equiano", "p": "CHAPTERS I to III (ch-002.txt)", "d": "22/11/2026"},
    "equiano-west-indies": {"t": BOOK + ", chapters V to IX: Montserrat, the trading years, his freedom and the legal position of free Black people", "s": "Project Gutenberg", "u": URL, "b": "equiano", "p": "CHAPTERS V to IX (ch-002.txt)", "d": "22/11/2026"},
    "equiano-later": {"t": BOOK + ", chapters XI and XII: the Mosquito Shore, the Sierra Leone scheme and the argument for abolition", "s": "Project Gutenberg", "u": URL, "b": "equiano", "p": "CHAPTERS XI and XII (ch-002.txt)", "d": "22/11/2026"},
}
lines = REFS.read_text(encoding="utf-8").split("\n")
out, done = [], set()
for ln in lines:
    m = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', ln)
    if m and m.group(1) in ("equiano", "equiano-ch1"):
        if not done:
            for k, v in NEW.items():
                out.append("  %s: %s," % (json.dumps(k), json.dumps(v, ensure_ascii=False, separators=(",", ":"))))
                done.add(k)
        continue
    out.append(ln)
REFS.write_text("\n".join(out), encoding="utf-8")
print("refs written:", ", ".join(sorted(done)))
