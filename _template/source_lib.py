"""Shared helpers for the source tools (source_search.py, source_read.py, check_course.py).

A source is a book, paper or report ingested by ingest_source.py into courses/<course>/sources/<key>/.
Beside manifest.json each source folder can hold:
    read.json      chapter files recorded as read in full (by source_read.py, or by hand with source_search.py --read)
    served.json    chapters served to the reader in order by source_read.py, with chunk progress
    skipped.json   chapters deliberately not read (cover, copyright, index...), each with a reason
    findings.tsv   findings logged while reading: module, verdict, location, text
    review-notes.md  optional free notes that the generated source review includes
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERDICTS = ("confirmed", "refined", "contradicted", "extended", "absent", "note")


def load(p, default):
    p = Path(p)
    if not p.exists():
        return default
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return default


def save(p, obj):
    Path(p).write_text(json.dumps(obj, indent=1, ensure_ascii=False), encoding="utf-8")


def sources(cid):
    base = ROOT / "courses" / cid / "sources"
    out = []
    if base.is_dir():
        for d in sorted(base.iterdir()):
            if (d / "manifest.json").exists():
                out.append((d, json.loads((d / "manifest.json").read_text(encoding="utf-8"))))
    return out


def find(cid, key):
    for d, man in sources(cid):
        if man["key"] == key:
            return d, man
    raise SystemExit("no ingested source with key '%s' in course %s" % (key, cid))


def read_set(d):
    return set(load(d / "read.json", []))


def skipped(d):
    return load(d / "skipped.json", {})


def served(d):
    return load(d / "served.json", {})


def status(d, man):
    """Map chapter file -> 'read', 'skipped' or 'unread'."""
    rd, sk = read_set(d), skipped(d)
    return {c["file"]: ("read" if c["file"] in rd else "skipped" if c["file"] in sk else "unread") for c in man["chapters"]}


def numbers(d, man):
    st = status(d, man)
    total = sum(c["words"] for c in man["chapters"])
    got = sum(c["words"] for c in man["chapters"] if st[c["file"]] == "read")
    skp = sum(c["words"] for c in man["chapters"] if st[c["file"]] == "skipped")
    unread = [c for c in man["chapters"] if st[c["file"]] == "unread"]
    return {"total": total, "read": got, "skipped": skp, "unread": unread,
            "n_read": sum(1 for v in st.values() if v == "read"), "n_skipped": sum(1 for v in st.values() if v == "skipped"), "n": len(st)}


def complete(d, man):
    """True when every chapter is either read in full or deliberately skipped with a reason."""
    return not numbers(d, man)["unread"]


def findings(d):
    f = d / "findings.tsv"
    out = []
    if f.exists():
        for line in f.read_text(encoding="utf-8").splitlines():
            parts = line.split("\t")
            if len(parts) >= 5:
                out.append(dict(date=parts[0], module=parts[1], verdict=parts[2], location=parts[3], text="\t".join(parts[4:])))
    return out


def finding_id(f):
    """Stable 8-character id for a finding, used by source_apply.py to track what happened to it."""
    import hashlib
    return hashlib.sha1("|".join([f["date"], f["module"], f["verdict"], f["location"], f["text"]]).encode("utf-8")).hexdigest()[:8]
