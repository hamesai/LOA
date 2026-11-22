"""Freshness pass, 21/11/2026: reopened every time-sensitive web source.

Changes: Budget 2026 trading allowance rise (GOV.UK TIIN, 28/10/2026), eBay private
fee page re-dated, eBay business per-order fee now verified, myth and resource notes.
Run once: python courses/vintage-reselling/build/freshness_2026-11-21.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATE = "21/11/2026"


def edit(rel, pairs):
    p = os.path.join(ROOT, rel)
    s = open(p, encoding="utf8").read()
    for old, new in pairs:
        if new in s and old not in s:
            continue  # already applied
        assert s.count(old) == 1, (rel, old[:70], s.count(old))
        s = s.replace(old, new)
    open(p, "w", encoding="utf8").write(s)


T3K = " From 06/04/2027 (the 2027 to 2028 tax year) HMRC plans to raise the allowance to £3,000. {{gov-trading-3000}}"

edit("modules/course-vintage-reselling-1.js", [
    ('"The trading allowance gives up to £1,000 a year of tax-free trading income. {{gov-allowance}}"',
     '"For the 2026 to 2027 tax year the trading allowance gives up to £1,000 a year of tax-free trading income. {{gov-allowance}}' + T3K + '"'),
    ('"If your annual gross trading income is over £1,000 you must register for Self Assessment. {{gov-allowance}}"',
     '"If your annual gross trading income is over £1,000 you must register for Self Assessment; from 2027 to 2028 that threshold also rises to £3,000. {{gov-allowance}} {{gov-trading-3000}}"'),
])

edit("modules/course-vintage-reselling-2.js", [
    ("this applies to private sellers, and the page was last updated on 30/09/2026. {{ebay-private}}",
     "this applies to private sellers, and the page was last updated on 05/11/2026. {{ebay-private}}"),
    (" and £0.40 above that (unverified: check eBay's business fees page), and",
     " and £0.40 above that, and"),
])

edit("modules/course-vintage-reselling-5.js", [
    ("gives 300 free listings a month; the page was last updated on 30/09/2026. {{ebay-private}}",
     "gives 300 free listings a month, then 35p a listing; the page was last updated on 05/11/2026. {{ebay-private}}"),
])

edit("modules/course-vintage-reselling-6.js", [
    ('"The trading allowance is up to £1,000 a year of tax-free trading income. {{gov-allowance}}"',
     '"For the 2026 to 2027 tax year the trading allowance is up to £1,000 a year of tax-free trading income. {{gov-allowance}}' + T3K + '"'),
    ('"If your annual gross trading income is over £1,000, you must register for Self Assessment. {{gov-allowance}}"',
     '"If your annual gross trading income is over £1,000, you must register for Self Assessment. From 2027 to 2028 the reporting threshold for trading income rises to £3,000 with the allowance. {{gov-allowance}} {{gov-trading-3000}}"'),
    ("and the Self Assessment threshold. The government announced on 11/03/2025 that it plans to raise the Self Assessment reporting threshold to £3,000 within this parliament, but as of 09/2026 an accountants' guide says no start date had been set; tax would still be due above £1,000. {{iak}} Check GOV.UK for each.",
     "and exactly how the 2027 change applies to you. HMRC's Budget 2026 note raises the trading allowance and the Self Assessment reporting threshold for trading income from £1,000 to £3,000 from 06/04/2027; the change is to be made in the Finance Bill 2026-27, and sales in the 2026 to 2027 tax year still use £1,000. {{gov-trading-3000}} Check GOV.UK for each."),
])

edit("learning-vintage-reselling.js", [
    ('"The £3,000 threshold means I pay no tax on £3,000.",\n    "The proposed change is to filing, not to the tax: tax is still due above £1,000. No start date had been set."',
     '"The £3,000 allowance already covers this year\'s sales.",\n    "Not yet. For 2026 to 2027 the allowance and the filing threshold are £1,000; HMRC plans to raise both to £3,000 from 06/04/2027. Check which tax year each sale falls in."'),
])

edit("pack-vintage-reselling.js", [
    ('"note": "Worked examples, badges of trade summary, and the proposed 3,000 pound threshold."',
     '"note": "Worked examples and badges of trade summary. Written before Budget 2026 raised the allowance to 3,000 pounds from 06/04/2027."'),
    ('"note": "Last updated 30/09/2026; check before use."',
     '"note": "Last updated 05/11/2026; check before use."'),
])

# refs: new source, corrected page date, checked dates
rp = os.path.join(ROOT, "course-vintage-reselling-refs.js")
r = open(rp, encoding="utf8").read()
r = r.replace('s: "eBay.co.uk help, last updated 30/09/2026"', 's: "eBay.co.uk help, last updated 05/11/2026"')
if '"gov-trading-3000"' not in r:
    new = ('  "gov-trading-3000": { t: "Income Tax: increasing the trading allowance (tax information and impact note, 28/10/2026): '
           'raises the trading allowance from £1,000 to £3,000 from 06/04/2027, for 2027 to 2028 onwards, with the Self Assessment '
           'reporting threshold for trading income also rising to £3,000; legislation in the Finance Bill 2026-27.", '
           's: "GOV.UK, HM Revenue & Customs", d: "%s", u: "https://www.gov.uk/government/publications/income-tax-increasing-the-trading-allowance/increasing-the-trading-allowance" },' % DATE)
    r = re.sub(r'(\n\s*"gov-allowance"\s*:)', "\n" + new + r"\1", r, count=1)
    assert '"gov-trading-3000"' in r
CHECKED = ["cra-notes", "cra-s2", "cra-s9", "ebay-business", "ebay-private", "etsy-fees", "etsy-guide",
           "gov-allowance", "gov-digital", "gov-distance", "gov-expenses", "gov-ivory", "gov-ivory-cert",
           "hmrc-bim86000", "iak", "leg-ffr", "vinted-fee"]
L = r.split("\n")
for k in CHECKED:
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
