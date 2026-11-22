"""Points the linked cinematography refs at the chapter files their sentences rest on (checked by hand against the ingested text, 22/11/2026).
Run after link_uncited_books_2026-11-22.py."""
import re
from pathlib import Path

REFS = Path(__file__).resolve().parents[1] / "course-cinematography-refs.js"
P = {
    "talbot-moving-pictures": "Chapter 1 (ch-002.txt)",
    "canon-5d2-manual": "Pages 121 to 140, and page 205 for the clip limit (ch-007.txt, ch-011.txt)",
    "lmu-nonsense": "The Edit (ch-010.txt)",
    "eastman-tinting-toning": "Parts I and II (ch-002.txt, ch-003.txt)",
}
lines = REFS.read_text(encoding="utf-8").split("\n")
for i, ln in enumerate(lines):
    m = re.match(r'\s*"([a-z0-9-]+)"\s*:\s*\{', ln)
    if m and m.group(1) in P:
        lines[i] = re.sub(r'(\bp:\s*")[^"]*(")', lambda mm: mm.group(1) + P[m.group(1)] + mm.group(2), ln, count=1)
        print("pointed", m.group(1))
# a second LMU ref for the frame-rate note, which sits in a different chapter
if not any('"lmu-nonsense-ch05"' in ln for ln in lines):
    for i, ln in enumerate(lines):
        if ln.lstrip().startswith('"lmu-nonsense"'):
            new = ln.replace('"lmu-nonsense"', '"lmu-nonsense-ch05"', 1)
            new = re.sub(r'(\bp:\s*")[^"]*(")', lambda mm: mm.group(1) + "Cinematic Space (ch-005.txt)" + mm.group(2), new, count=1)
            lines.insert(i + 1, new)
            print("added lmu-nonsense-ch05")
            break
REFS.write_text("\n".join(lines), encoding="utf-8")
