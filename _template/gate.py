#!/usr/bin/env python3
"""Pre-ship gate for the whole archive. Usage: python _template/gate.py

Runs check_course.py on every course folder (TODOs, citations, figures, thin lessons),
then checks that every course folder is referenced in index.html and that index.html
names no course folder that is missing. Network link checks are left to check_links.py,
because they are slow and some sites refuse scripted requests.
Exit code 1 if any hard problem is found.
"""
import re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSES = ROOT / "courses"


def main():
    problems = 0
    ids = sorted(p.name for p in COURSES.iterdir() if p.is_dir())
    print("Courses on disk: %d" % len(ids))

    for cid in ids:
        r = subprocess.run([sys.executable, str(ROOT / "_template" / "check_course.py"), cid],
                           capture_output=True, text=True, encoding="utf-8")
        out = (r.stdout + r.stderr).strip()
        print(out)
        if r.returncode != 0:
            problems += 1
            print("FAIL  %s: check_course.py exit %d" % (cid, r.returncode))

    html = (ROOT / "index.html").read_text(encoding="utf-8")
    referenced = set(re.findall(r"courses/([a-z-]+)/", html))
    for cid in ids:
        if cid not in referenced:
            problems += 1
            print("FAIL  %s: folder exists but index.html never references it" % cid)
    for cid in sorted(referenced - set(ids)):
        problems += 1
        print("FAIL  index.html references courses/%s/ but that folder is missing" % cid)

    print("\nGate: %s (%d problem%s)" % ("PASS" if problems == 0 else "FAIL", problems, "" if problems == 1 else "s"))
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
