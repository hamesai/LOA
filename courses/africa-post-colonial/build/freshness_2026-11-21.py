"""Freshness pass, 21/11/2026: [check current] claims in Module 7 reopened.

- South Sudan: polling moved on 14/11/2026 from 22/12/2026 to 11/02/2027 (AP, NEC timetable).
- Coups: Madagascar (14/10/2025) and Guinea-Bissau (26/11/2025) takeovers, failed Benin attempt
  (07/12/2025); 11 takeovers since 2020 (Anadolu year-ender, 31/12/2025).
- DRC: AFC/M23 regrouped as the FRN under Joseph Kabila; fighting continued despite the Washington
  and Doha processes (Al Jazeera, 18/11/2026).
Run once: python courses/africa-post-colonial/build/freshness_2026-11-21.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATE = "21/11/2026"


def edit(rel, pairs):
    p = os.path.join(ROOT, rel)
    s = open(p, encoding="utf8").read()
    for old, new in pairs:
        if new in s and old not in s:
            continue
        assert s.count(old) == 1, (rel, old[:70], s.count(old))
        s = s.replace(old, new)
    open(p, "w", encoding="utf8").write(s)


M7 = "modules/course-africa-post-colonial-7.js"
edit(M7, [
    ("In September 2026 Kiir dissolved the transitional government; Machar is detained and on trial, and elections are scheduled for 22/12/2026 [check current]. {{ap-southsudan-2026}} {{crs-southsudan-2026}}",
     "In September 2026 Kiir dissolved the transitional government, and Machar is detained and on trial. {{ap-southsudan-2026}} {{crs-southsudan-2026}} On 14/11/2026 the election commission postponed the first national elections again, moving polling from 22/12/2026 to 11/02/2027 [check current]. {{ap-southsudan-nov2026}}"),
    ("Military takeovers since 2020 in Mali, Burkina Faso and Niger, and in Guinea and Gabon, have challenged AU norms and regional bodies [check current]. {{iss-coups-2023}}",
     "Military takeovers since 2020 in Mali, Burkina Faso and Niger, and in Guinea and Gabon, have challenged AU norms and regional bodies. {{iss-coups-2023}} Soldiers then took power in Madagascar on 14/10/2025 and in Guinea-Bissau on 26/11/2025, and a coup attempt in Benin on 07/12/2025 failed; one count gives 11 military takeovers in Africa since 2020 [check current]. {{aa-coups-2025}}"),
    ("\"A scheduled date 53 days away may move; treat it as 'scheduled' and not as 'will happen'.\",",
     "\"A scheduled date 53 days away may move; treat it as 'scheduled' and not as 'will happen'.\",\n      \"It did move: on 14/11/2026 the commission set polling for 11/02/2027 instead. {{ap-southsudan-nov2026}}\","),
    ("Fighting in the east continues [check current]. {{bbc-drc-2010}} {{cfr-drc}}",
     "Fighting in the east continues. {{bbc-drc-2010}} {{cfr-drc}} By 18/11/2026 the army was fighting the Front for the Refoundation of the Nation (FRN), a coalition led by former president Joseph Kabila that took over from the AFC/M23 alliance, despite the Washington and Doha peace processes [check current]. {{aj-drc-2026}}"),
])

NEW = [
    ('ap-southsudan-nov2026', "South Sudan delays first national elections again, setting February vote (AP News, 14/11/2026; opening paragraphs read 21/11/2026): polling moved from 22 December 2026 to 11 February 2027 under a revised National Election Commission timetable", "AP News",
     "https://apnews.com/article/south-sudan-election-postponement-february-2027-c62033bb79a606ef8ce7e335cfc8478b"),
    ('aa-coups-2025', "Year-ender: Africa in 2025, 2 military coups and 1 failed attempt (Anadolu Agency, 31/12/2025; read 21/11/2026): Madagascar 14 October, Guinea-Bissau 26 November, failed attempt in Benin 7 December; 11 military takeovers since 2020", "Anadolu Agency",
     "https://www.aa.com.tr/en/africa/year-ender-africa-in-2025-2-military-coups-and-1-failed-attempt/3786062"),
    ('aj-drc-2026', "DR Congo's rival peace efforts fail to halt violence in the east (Al Jazeera, 18/11/2026; excerpts read 21/11/2026): fighting between the army and the FRN, a coalition led by former president Joseph Kabila, continues despite the Washington and Doha processes", "Al Jazeera",
     "https://www.aljazeera.com/news/2026/11/18/dr-congos-rival-peace-efforts-fail-to-halt-violence-in-the-east"),
]
rp = os.path.join(ROOT, "course-africa-post-colonial-refs.js")
r = open(rp, encoding="utf8").read()
for k, t, s, u in NEW:
    if '"%s"' % k in r:
        continue
    line = '  "%s": {"t": "%s", "s": "%s", "d": "%s", "u": "%s"},' % (k, t, s, DATE, u)
    r = re.sub(r'(\n\s*"ap-southsudan-2026"\s*:)', "\n" + line.replace("\\", "\\\\") + r"\1", r, count=1)
    assert '"%s"' % k in r, k

L = r.split("\n")
for k in ["bbc-drc-2010", "gov-maumau-2013", "icg-2020", "loc-ghana", "mamdani-1996"]:
    for i, ln in enumerate(L):
        if re.match(r'\s*"%s"\s*:\s*\{' % re.escape(k), ln):
            if re.search(r'"d"\s*:\s*"[^"]*"', ln):
                L[i] = re.sub(r'"d"\s*:\s*"[^"]*"', '"d": "%s"' % DATE, ln, count=1)
            else:
                L[i] = re.sub(r'(,\s*)("u"\s*:\s*")', r'\1"d": "%s", \2' % DATE, ln, count=1)
            assert '"d": "%s"' % DATE in L[i], k
            break
    else:
        raise SystemExit("missing ref " + k)
open(rp, "w", encoding="utf8").write("\n".join(L))
print("done")
