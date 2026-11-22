#!/usr/bin/env python3
"""Bundles the course scripts in index.html into a few files, so the page makes far fewer requests.

    python _template/bundle.py bundle     build shared/bundles/run-N.js from every run of courses/ scripts in index.html
    python _template/bundle.py unbundle   put the per-file script tags back (needed before editing index.html's course list)
    python _template/bundle.py check      report whether the bundles still match the course files

How it works. index.html lists each course file in its own <script> tag, in load order. A run is a block of such tags with
nothing between them. bundle() replaces each run of two or more with one tag for shared/bundles/run-N.js, and keeps the
original lines in shared/bundles/manifest.json so unbundle() can restore them exactly.

Each course file is wrapped in its own try/catch and its own function scope, so an error in one file is logged and the
rest still run, as with separate tags. A file that fails `node --check` is left out of the bundle and reported as a
PROBLEM. Editing a course file after bundling makes the bundle stale: gate.py reports it, and `kit.py bundle` rebuilds.

kit.py ship unbundles at the start and bundles at the end, so the normal workflow does not change.
"""
import datetime, hashlib, json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"
BUNDLE_DIR = ROOT / "shared" / "bundles"
MANIFEST = BUNDLE_DIR / "manifest.json"
COURSE_TAG = re.compile(r'^<script src="(courses/[^"?]+\.js)\?v=([^"]*)"></script>$')
VERSION = re.compile(r'\?v=([^"]*)"')


def _sha1(path):
    return hashlib.sha1(path.read_bytes()).hexdigest()


def _lines():
    return INDEX.read_text(encoding="utf-8").split("\n")


def _current_version(lines):
    for line in lines:
        m = VERSION.search(line)
        if m:
            return m.group(1)
    return "v0"


def _runs(lines):
    """Blocks of consecutive course-file tags, as lists of (line index, src path, version)."""
    runs, cur = [], []
    for i, line in enumerate(lines):
        m = COURSE_TAG.match(line.strip())
        if m:
            cur.append((i, m.group(1), m.group(2)))
        elif cur:
            runs.append(cur)
            cur = []
    if cur:
        runs.append(cur)
    return runs


def _manifest():
    if not MANIFEST.exists():
        return None
    return json.loads(MANIFEST.read_text(encoding="utf-8"))


def bundled():
    return MANIFEST.exists()


def bundle():
    """Build the bundles from the per-file tags. Returns the number of problems (skipped files)."""
    unbundle()
    lines = _lines()
    version = _current_version(lines)
    runs = [r for r in _runs(lines) if len(r) >= 2]
    BUNDLE_DIR.mkdir(parents=True, exist_ok=True)
    problems = 0
    out_manifest = {"built": datetime.datetime.now().isoformat(timespec="seconds"), "runs": []}
    drop = set()
    for n, run in enumerate(runs, 1):
        rel = "shared/bundles/run-%d.js" % n
        parts, sources = [], []
        for _, src, _v in run:
            f = ROOT / src
            rec = {"path": src, "sha1": None, "skipped": False}
            if not f.exists():
                rec["skipped"] = True
                problems += 1
                print("PROBLEM  %s is listed in index.html but the file is missing (left out of the bundle)" % src)
            else:
                rec["sha1"] = _sha1(f)
                chk = subprocess.run(["node", "--check", str(f)], capture_output=True, text=True, encoding="utf-8")
                if chk.returncode:
                    rec["skipped"] = True
                    problems += 1
                    print("PROBLEM  %s does not parse (left out of the bundle):\n%s" % (src, chk.stderr.strip()[:400]))
                else:
                    code = f.read_text(encoding="utf-8")
                    parts.append("/* " + src + " */\ntry {\n(function () {\n" + code + "\n})();\n} catch (e) { "
                                 "console.error(\"LOA: " + src + " did not run\", e); }\n")
            sources.append(rec)
        text = ("/* Library of Alexandria: course scripts bundled by _template/bundle.py. Do not edit; "
                "edit the course files and run kit.py bundle. */\n" + "".join(parts))
        (ROOT / rel).write_text(text, encoding="utf-8", newline="\n")
        out_manifest["runs"].append({"bundle": rel, "version": version, "original": [lines[i] for i, _, _ in run],
                                     "first": run[0][0], "last": run[-1][0], "sources": sources})
        drop.update(i for i, _, _ in run)
        print("bundle   %s: %d files" % (rel, len([s for s in sources if not s["skipped"]])))
    # Bundles from an earlier build that no longer apply.
    for old in BUNDLE_DIR.glob("run-*.js"):
        if old.name not in {Path(r["bundle"]).name for r in out_manifest["runs"]}:
            old.unlink()
    # Rewrite index.html: each run becomes one tag, placed where its first line was.
    new_lines = []
    run_at = {r["first"]: r for r in out_manifest["runs"]}
    for i, line in enumerate(lines):
        if i in run_at:
            new_lines.append('<script src="%s?v=%s"></script>' % (run_at[i]["bundle"], version))
        elif i not in drop:
            new_lines.append(line)
    INDEX.write_text("\n".join(new_lines), encoding="utf-8")
    MANIFEST.write_text(json.dumps(out_manifest, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print("bundled %d course files into %d bundle%s" % (sum(len(r["sources"]) for r in out_manifest["runs"]),
                                                       len(runs), "" if len(runs) == 1 else "s"))
    return problems


def unbundle():
    """Restore the per-file tags from the manifest, keeping the current cache version. Does nothing if not bundled."""
    man = _manifest()
    if man is None:
        return False
    lines = _lines()
    version = _current_version(lines)
    for run in man["runs"]:
        pat = re.compile(r'^<script src="%s\?v=[^"]*"></script>$' % re.escape(run["bundle"]))
        at = [i for i, l in enumerate(lines) if pat.match(l.strip())]
        if len(at) != 1:
            sys.exit("index.html has %d tags for %s; fix it by hand, then run unbundle again" % (len(at), run["bundle"]))
        restored = [VERSION.sub('?v=%s"' % version, l) for l in run["original"]]
        lines[at[0]:at[0] + 1] = restored
    INDEX.write_text("\n".join(lines), encoding="utf-8")
    MANIFEST.unlink()
    for old in BUNDLE_DIR.glob("run-*.js"):
        old.unlink()
    return True


def stale_problems():
    """What is out of date when the page is bundled. Empty when the bundles match the files, or when not bundled."""
    man = _manifest()
    if man is None:
        return []
    probs = []
    html = INDEX.read_text(encoding="utf-8")
    for run in man["runs"]:
        if not (ROOT / run["bundle"]).exists():
            probs.append("%s is missing: run kit.py bundle" % run["bundle"])
        if run["bundle"] not in html:
            probs.append("index.html does not load %s: run kit.py bundle" % run["bundle"])
        for rec in run["sources"]:
            f = ROOT / rec["path"]
            if not f.exists():
                probs.append("%s was removed since the bundle was made: run kit.py bundle" % rec["path"])
            elif rec["sha1"] is not None and _sha1(f) != rec["sha1"]:
                probs.append("%s changed since the bundle was made: run kit.py bundle" % rec["path"])
    return probs


def bundled_paths():
    """Course file paths inside the bundles (so gate.py can still see which courses the page loads)."""
    man = _manifest()
    if man is None:
        return []
    return [rec["path"] for run in man["runs"] for rec in run["sources"]]


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "bundle":
        sys.exit(1 if bundle() else 0)
    elif cmd == "unbundle":
        print("unbundled" if unbundle() else "already per-file; nothing to do")
    elif cmd == "check":
        p = stale_problems()
        print("\n".join("STALE  " + x for x in p) if p else ("bundled and up to date" if bundled() else "not bundled"))
        sys.exit(1 if p else 0)
    else:
        sys.exit(__doc__)
