"""Links cinematography refs to their ingested books (b: and a whole-book p:) so source_verify checks the sentences that cite them.
Run once; a ref that already has b: is left alone. Then run source_repoint.py (and --split KEY for whole-book refs) and source_verify.py."""
import re
from pathlib import Path

REFS = Path(__file__).resolve().parents[1] / "course-cinematography-refs.js"
LINK = {
    "canon-5d2-manual": ("canon-5d-mark-ii-manual", "Pages 1 to 228"),
    "lmu-nonsense": ("no-nonsense-filmmaking", "Chapters 1 to 12"),
    "gregory-motion-picture": ("gregory-motion-picture-photography", "Chapters 1 to 27"),
    "talbot-moving-pictures": ("talbot-moving-pictures", "Chapters 1 to 32"),
    "eastman-tinting-toning": ("eastman-tinting-toning", "Parts 1 to 2"),
    "filming-england-drones": ("filming-england-drones", "Pages 1 to 6"),
    "adapt-telecine": ("adapt-telecine", "Page 1"),
    "film-london-code": ("film-london-filming-code", "Pages 1 to 26"),
}
lines = REFS.read_text(encoding="utf-8").split("\n")
for i, ln in enumerate(lines):
    m = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', ln)
    if not m or m.group(1) not in LINK or re.search(r'\bb:\s*"', ln):
        continue
    book, p = LINK[m.group(1)]
    lines[i] = re.sub(r"\s*\}(,?)\s*$", lambda mm: ', b: "%s", p: "%s" }%s' % (book, p, mm.group(1)), ln, count=1)
    print("linked", m.group(1), "->", book)
REFS.write_text("\n".join(lines), encoding="utf-8")
