"""Freshness pass, 21/11/2026.

CDC 'Keep Food Safe After a Disaster or Emergency' (page dated 24/11/2025) now gives one
sanitising mix, 1 cup (240 mL) unscented bleach in 5 gallons of clean water, for dishes,
utensils and food-contact surfaces (soak 1 minute, or wipe on with a cloth), and the same mix
for cans and pouches (soak 15 minutes). The older 1 tablespoon per gallon figure is gone.
Run once: python courses/grid-down-food/build/freshness_2026-11-21.py
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


edit("modules/course-grid-down-food-1.js", [
    ("After flooding, CDC gives 1 cup (240 mL) of unscented household bleach in 5 gallons of clean water for cans and non-food surfaces, and 1 tablespoon in 1 gallon for food-contact surfaces such as countertops and plates. Let items air dry. {{cdcfood}}",
     "After flooding, CDC gives one mix for dishes, utensils and food-contact surfaces such as countertops: 1 cup (240 mL) of unscented household bleach in 5 gallons of clean water. Soak items for 1 minute, fully covered, or wipe the solution on with a cloth, then let them air dry. {{cdcfood}}"),
])

edit("modules/course-grid-down-food-6.js", [
    ("Sanitise: for cans and non-food surfaces, 1 cup (240 mL) of unscented household bleach in 5 gallons of clean water. For food-contact surfaces such as countertops and plates, 1 tablespoon of bleach in 1 gallon of clean water.",
     "Sanitise: 1 cup (240 mL) of unscented household bleach in 5 gallons of clean water. Soak dishes and utensils for 1 minute, fully covered; wipe the solution onto countertops and fridge drawers with a cloth."),
    ("The CDC mix for cans and non-food surfaces is 1 cup (240 mL) of bleach in 5 gallons (about 19 L) of water: about 12.6 mL per litre.",
     "The CDC mix for cans, pouches and food-contact surfaces is 1 cup (240 mL) of bleach in 5 gallons (about 19 L) of water: about 12.6 mL per litre."),
])

rp = os.path.join(ROOT, "course-grid-down-food-refs.js")
L = open(rp, encoding="utf8").read().split("\n")
for k in ["cdcadv", "cdcbot", "cdcfood", "cdcwater", "cmo", "fsa", "fsis", "ukhsaco", "who5keys"]:
    for i, ln in enumerate(L):
        if re.match(r'\s*"%s"\s*:\s*\{' % re.escape(k), ln):
            if re.search(r'\bd: *"[^"]*"', ln):
                L[i] = re.sub(r'\bd: *"[^"]*"', 'd: "%s"' % DATE, ln, count=1)
            else:
                L[i] = re.sub(r'(,\s*)(u: *")', r'\1d: "%s", \2' % DATE, ln, count=1)
            assert 'd: "%s"' % DATE in L[i], k
            break
    else:
        raise SystemExit("missing ref " + k)
open(rp, "w", encoding="utf8").write("\n".join(L))
print("done")
