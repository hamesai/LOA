"""Builds the new teaching blocks from the Breunig reading (22/11/2026) and writes them to breunig_blocks_2026-11-22.json.
Application checks use author.case_chk5 so the five-option standard (right answer never longest, spread slots) holds.
Apply with: node courses/africa-pre-colonial/build/breunig_apply_2026-11-22.js"""
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402

CITE_FW = "{{breunig-foreword}}"
CITE_WKO = "{{breunig-wko}}"

out = {}

# Module 1, lesson 5: a second worked example on reading excavation dates.
out["l5_example"] = A.ex(
    "Worked example: reading two dates from one excavation (Windé Koroji Ouest, Mali)",
    "The excavators report two charcoal dates. The hearth in the sunken house gave 3635 plus or minus 90 radiocarbon years before present, calibrated to 2136 to 1893 BCE at one sigma. The midden above it gave 3115 plus or minus 195, calibrated to 1612 to 1123 BCE. " + CITE_WKO,
    "The two ranges do not overlap, and the gap between their nearest ends is 1893 minus 1612, which is 281 years (our arithmetic). Read at face value the site was occupied for about a thousand years.",
    "The authors do not read it that way. The midden fills the house, and the pottery shows no change between the layers, so they think a thousand-year span unlikely and suggest only a limited extension of the hearth's 2100 to 1900 BCE range, perhaps to 1400 BCE. " + CITE_WKO + " The method point for you: check the stratigraphy and the finds before you accept the arithmetic of two dates. One sigma is a range that holds about two times in three, not a hard limit (our note).",
)
out["l5_check"] = A.case_chk5(
    "An excavation report gives a hearth date of 2136 to 1893 BCE and a date from the midden that fills the same house of 1612 to 1123 BCE, with no change in pottery between the layers.",
    "What is the best reading of the two dates?",
    "Treat the later date with caution and prefer a short occupation near the hearth date",
    [
        "Accept both at face value, because a calibrated range is a firm limit on the occupation",
        "Average the two ranges and report a single date near 1500 BCE for the whole site",
        "Discard the hearth date, because charcoal always dates the tree and not the people",
        "Conclude that two different peoples lived there a thousand years apart",
    ],
    "The midden over-fills the house and the pottery does not change, so the authors judge a thousand-year span unlikely and suggest a limited extension. Ranges at one sigma are not hard limits. " + CITE_WKO,
)

# Module 1, lesson 6: newer evidence on early millet, and how it is shown.
out["l6_bullets"] = [
    A.h("Newer finds: millet earlier than Tichitt"),
    A.p("The Tichitt case above comes from the 1981 volume. Later work reports domestic pearl millet from the Lower Tilemsi Valley in north-eastern Mali at 2500 to 2000 BCE, which the authors of a 2017 excavation report call the earliest morphologically domestic millet known from Africa. " + CITE_WKO + " [PROBABLE]"),
    A.p("They give two other series for comparison: pearl millet impressions in pottery from Dhar Nema in Mauritania dated to 1750 to 1500 BCE, and millet at Dhars Tichitt and Oualata dated to 1900 to 1500 BCE. At Windé Koroji Ouest in Mali the early settlement dates to about 2100 to 1900 BCE, and the same report holds that domestic millet was there from the start. " + CITE_WKO + " [PROBABLE]"),
    A.p("How is millet shown to be there? The excavators floated 26 litres of soil in ten samples through a 0.25 mm mesh and identified 197 grains and fruit remains, among them 17 charred pearl-millet seeds that turned up in all three phases of the site. " + CITE_WKO + " An attempt in 1994 to date two grains directly failed for lack of carbon, so the early date rests on the charcoal from the hearth beside them, not on a date for the grains. " + CITE_WKO + " [PROBABLE]"),
    A.p("The same layers hold hunting, fishing and gathered fruit, domestic sheep in the earliest phase, and cattle from about 1600 BCE. " + CITE_WKO + " The excavators describe a flexible economy that was not tied to one resource, except perhaps millet. " + CITE_WKO + " [PROBABLE]"),
    A.call("note", "Cattle bones here were first doubted, because African buffalo bones look alike. The authors separated the two by bone shape. A claim about a domestic animal needs that kind of check, as a claim about a crop needs plant remains. " + CITE_WKO),
]
out["l6_row"] = [
    "Manning and colleagues (2011), reported by MacDonald and others (2017)",
    "Domestic pearl millet in the Lower Tilemsi Valley, Mali, 2500 to 2000 BCE; at Windé Koroji Ouest about 2100 to 1900 BCE " + CITE_WKO,
    "[PROBABLE]",
]
out["l6_checks"] = [
    A.case_chk5(
        "A textbook based on the 1981 UNESCO volume says the only clear case of Saharan farming is millet at Tichitt from about 1500 BCE.",
        "Which correction is best supported by the 2017 excavation report?",
        "Later finds put domestic pearl millet earlier, at 2500 to 2000 BCE in the Tilemsi Valley",
        [
            "Tichitt millet is now dated to about 3500 BCE, so the textbook only needs a new number and nothing else",
            "There was no millet farming anywhere in the Sahel before the first millennium BCE began",
            "The textbook is right, because Tilemsi millet has not been shown to be domestic at all",
            "Millet reached the Tilemsi Valley from Egypt about the same time that Tichitt began",
        ],
        "The report cites millet from the Lower Tilemsi Valley at 2500 to 2000 BCE as the earliest morphologically domestic millet known from Africa, with Dhars Tichitt and Oualata at 1900 to 1500 BCE. " + CITE_WKO,
    ),
    A.case_chk5(
        "A site report says domestic millet was present from the first occupation, about 2100 to 1900 BCE. The two millet grains sent for direct dating gave no result because they held too little carbon.",
        "What does the early date for millet rest on?",
        "Charcoal from the hearth, with millet seeds found in the same early phase",
        [
            "A direct radiocarbon date on the two millet grains, confirmed by a second laboratory",
            "The age of the pottery style alone, since the pottery was dated elsewhere",
            "Thermoluminescence dates on the grindstones found with the hearth and the millet",
            "A historical text from the first millennium BCE that mentions millet in the region",
        ],
        "The direct dating failed, so the date rests on the hearth charcoal and on finding pearl-millet seeds in all three phases, including the early one. " + CITE_WKO,
    ),
]

# Module 7, lesson 1: a wider date range for Nok, with the debate named.
out["l7_bullet"] = A.p(
    "A 2017 foreword by Nigeria's National Commission for Museums and Monuments dates the Nok Culture to about 1500 to 0 BCE and reports about 350 sites documented, around 80 of them excavated. It adds that the project's first hypothesis, that Nok art and early iron emerged from a complex society, changed as settlement, iron-smelting, geochemical and plant studies came in. " + CITE_FW + " The 1500 BCE start is a claim under debate: the volume's contents list a chapter asking whether second-millennium BCE sites in central Nigeria belong to Nok at all, and that chapter is not among the pages read here. " + CITE_FW + " [CONTESTED]"
)
out["l7_check"] = A.case_chk5(
    "A museum label says the Nok Culture began about 1500 BCE. A 2017 foreword gives the same range, but the same volume's contents list a chapter titled 'Early Nok or Not?' about second-millennium BCE sites.",
    "How should you word the start date in your own notes?",
    "As debated: 1500 BCE is proposed, but whether early sites are Nok is argued",
    [
        "As settled fact, because a national museums commission published the date in a foreword",
        "As plainly wrong, because Nok figures are known only from the first millennium BCE",
        "As firm, because the Goethe University project has dated all 350 documented sites",
        "As irrelevant to your notes, because Nok has no secure dates of any kind at all",
    ],
    "The foreword gives 1500 to 0 BCE, but the contents show a chapter questioning whether second-millennium sites belong to Nok, so the start date is contested. " + CITE_FW,
)

(HERE / "breunig_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("blocks written:", ", ".join(out))
