"""Turns the single-block Fisher EPUB and the Mackay Gutenberg text into chapter-headed Markdown for ingest.
    python -I courses/investing/build/split_sources.py      (writes fisher-1930.md and mackay-1841.md into source ingest/investing/)
Then ingest each .md with _template/ingest_source.py --key fisher-1930 / mackay-1841."""
import re
import sys
from pathlib import Path

R = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(R / "_template"))
import ingest_source as IS  # noqa: E402

I = R / "source ingest" / "investing"

# Fisher: the EPUB holds the contents list and the whole book in one document.
chapters = IS.read_epub(I / "Fisher - The Theory of Interest (1930).epub")[0]
f = "\n".join(c["text"] for c in chapters)
first = f.index("PART I, CHAPTER I: INCOME AND CAPITAL")
body = f[f.rindex("PART I.: INTRODUCTION", 0, first):]
end = body.find("Liberty Fund, Inc.")
body = body[:end] if end > 0 else body
head = re.compile(r"^(PART ([IV]+), CHAPTER ([IVXL]+):(.*)|APPENDIX TO CHAPTER [IVXL]+.*|BIBLIOGRAPHY.*)$", re.M)


def title(m):
    if m.group(2):
        return "Fisher ch. %s (part %s):%s" % (m.group(3), m.group(2), m.group(4))
    return "Fisher " + m.group(1).strip().lower()


out, pos = ["# Fisher front: preface and part one title\n"], 0
for m in head.finditer(body):
    out.append(body[pos:m.start()])
    out.append("\n## " + title(m).strip() + "\n")
    pos = m.end()
out.append(body[pos:])
md = "".join(out)
# stop ingest's part/chapter splitter from firing on running text, so the ## headings decide the chapters
md = re.sub(r"^(?=(?:part|chapter)\s+(?:\d+|[ivxlc]+)\b)", "- ", md, flags=re.M | re.I)
(I / "fisher-1930.md").write_text(md, encoding="utf-8")

# Mackay: sections by the volume's contents list.
t = (I / "Mackay - Extraordinary Popular Delusions vol 1 (1841).txt").read_text(encoding="utf-8", errors="replace")
t = t[t.index("NATIONAL DELUSIONS."):t.index("END OF THE FIRST VOLUME.")]
names = ["THE MISSISSIPPI SCHEME", "THE SOUTH SEA BUBBLE", "THE TULIPOMANIA.", "RELICS.", "MODERN PROPHECIES.",
         "POPULAR ADMIRATION FOR GREAT THIEVES.", "INFLUENCE OF POLITICS AND RELIGION ON THE HAIR AND BEARD.", "DUELS AND ORDEALS",
         "THE LOVE OF THE MARVELLOUS AND THE DISBELIEF OF THE TRUE.", "POPULAR FOLLIES IN GREAT CITIES", "THE O.P. MANIA."]
for n in names:
    t = re.sub(r"^" + re.escape(n) + r"\s*$", "## " + n.rstrip("."), t, count=1, flags=re.M)
(I / "mackay-1841.md").write_text("# Preface\n" + t, encoding="utf-8")
print("ok")
