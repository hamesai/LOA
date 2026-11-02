#!/usr/bin/env python3
"""Check that every source and resource link of a course still answers. Usage: python check_links.py <course-id>

Reads the course's refs and pack files, requests each web address (GET, 15 s timeout) and prints the status.
Local paths are checked on disk. Run it a few times a year, because stock sheets, prices and pages change.
Some sites refuse scripted requests (403 or 429), so treat those as "check by hand", not as dead.
Exit code 1 if any link is clearly dead (404, 410, DNS or connection failure).
"""
import json, re, sys, urllib.request, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    cid = sys.argv[1]
    d = ROOT / "courses" / cid
    urls = {}
    refs = d / ("course-%s-refs.js" % cid)
    if refs.exists():
        for u in re.findall(r'u:\s*"([^"]+)"', refs.read_text(encoding="utf-8")):
            urls.setdefault(u, "refs")
    pack = d / ("pack-%s.js" % cid)
    m = re.search(r"ARCHIVE_ADD\((.*)\);\s*$", pack.read_text(encoding="utf-8"), re.S)
    for r in json.loads(m.group(1)).get("resources", []):
        if r.get("url"):
            urls.setdefault(r["url"], "resource " + r["id"])
    dead = 0
    for u, where in urls.items():
        if not u.startswith("http"):
            ok = (ROOT / u).exists()
            print("%-9s %s (%s)" % ("local ok" if ok else "MISSING", u, where))
            dead += 0 if ok else 1
            continue
        try:
            req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0 (course link check)"})
            code = urllib.request.urlopen(req, timeout=15).status
            print("%-9s %s (%s)" % (code, u, where))
        except urllib.error.HTTPError as e:
            tag = "check" if e.code in (401, 403, 429) else "DEAD"
            print("%-9s %s (%s)" % ("%s %s" % (e.code, tag), u, where))
            dead += 1 if tag == "DEAD" else 0
        except Exception as e:
            if "CERTIFICATE" in str(e).upper() or "SSL" in str(e).upper():
                print("%-9s %s (%s) certificate check failed here; open it by hand" % ("check", u, where))
            else:
                print("%-9s %s (%s) %s" % ("DEAD", u, where, str(e)[:60]))
                dead += 1
    print("\n%d links, %d clearly dead" % (len(urls), dead))
    sys.exit(1 if dead else 0)


if __name__ == "__main__":
    main()
