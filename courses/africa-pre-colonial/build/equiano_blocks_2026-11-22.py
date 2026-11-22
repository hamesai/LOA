"""Builds the Equiano teaching blocks (reading of 22/11/2026) and writes equiano_blocks_2026-11-22.json.
Checks use author.case_chk5 so the five-option standard holds. Apply with equiano_apply_2026-11-22.js."""
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402

FRONT = "{{equiano-front}}"
AFR = "{{equiano-africa}}"
WI = "{{equiano-west-indies}}"
LATE = "{{equiano-later}}"
out = {}

# Module 8, lesson 3: how to read Equiano on the African side (after the birthplace bullets).
out["l3_bullets"] = [
    A.h("Reading Equiano on the African side"),
    A.p("He addressed the Narrative to Parliament on 24/03/1789, hoping to stir compassion before the debate on abolition, so read it as testimony with a purpose. " + FRONT + " He was about eleven when he was taken, which puts the events about 33 years before he published (our arithmetic). " + AFR + " [PROBABLE]"),
    A.p("He says two men and a woman climbed the wall of his family's compound while the adults were in the fields and seized him and his sister, who were parted within days; he adds that children in his village took turns watching from trees for kidnappers. " + AFR + " He then travelled for six or seven months through several hands to the coast, and says he was sold once for 172 shells at a town he calls Tinmah. " + AFR + " [PROBABLE]"),
    A.p("On how captives were obtained he gives a belief, not a count: more were taken by raids between small states and by kidnapping than any other way, and traders' goods tempted chiefs to raid. " + AFR + " In his own district he says those sold to the traders were prisoners of war or people convicted of kidnapping, adultery and similar crimes. " + AFR + " Set that beside Miles's record above: one boy's memory of one district and 1,308 recorded barters measure different things. [CONTESTED]"),
    A.p("He describes the enslaved in his own society as doing no more work than others and eating apart from the free-born, and says some held slaves of their own. " + AFR + " That is one memory of one household, so weigh it against the Songhai and Hausa evidence above. [THIN EVIDENCE]"),
    A.p("He also argues that his people's customs resembled those of the Jewish patriarchs and that Africans descend from Abraham through Keturah, following authors he names. " + AFR + " That is an eighteenth-century theory he used in his argument, not evidence about his homeland. [CONTESTED]"),
]
out["l3_check"] = A.case_chk5(
    "A student writes: 'Equiano says most captives came from raids and kidnapping, so the Atlantic trade was mostly kidnapping.'",
    "Which reply is best supported?",
    "It is one witness's belief about one district, to test against records like Miles's",
    [
        "It is proved, because an eyewitness cannot be wrong about events in his own childhood",
        "It is worthless, because a book written to persuade Parliament can contain no true facts",
        "It is proved, because a published autobiography counts as a record of the whole trade",
        "It is disproved, because Miles's records show that every captive was sold by a king",
    ],
    "He gives a belief about raids and kidnapping and describes one district, while Miles's record of 1,308 barters with 295 dealers shows a wider pattern; neither alone settles the matter. " + AFR,
)

# Module 8, lesson 5: Equiano as a witness to the Caribbean and the Sierra Leone scheme (after the Americas bullets).
out["l5_bullets"] = [
    A.h("A freedman's testimony from the Caribbean: Equiano"),
    A.p("Equiano says he was sold at Barbados within about a fortnight, shipped on to Virginia and bought by a naval officer, Michael Henry Pascal, who renamed him Gustavus Vassa; he thought the price thirty or forty pounds and cannot say which. " + AFR + " He reached England in the spring of 1757, after a passage of thirteen weeks, aged near twelve. " + AFR + " [PROBABLE]"),
    A.p("Resold in the West Indies to a Quaker merchant, Robert King of Montserrat, he traded on his own account between the islands and bought his freedom for forty pounds sterling; the deed of 10/07/1766 records seventy pounds current money of the island. " + WI + " If both describe one payment the ratio is 1.75 to 1 (our arithmetic: 70 divided by 40), but the narrative does not explain the difference. [PROBABLE]"),
    A.p("He describes weak legal protection for free Black people: no Black person's evidence was admitted against a white person, so he could not recover wages or debts in court, and anyone leaving an island had to advertise as a slave would. " + WI + " He names Joseph Clipson, a free-born boat builder from St Kitts, seized from a vessel at Montserrat and taken to Bermuda. " + WI + " [PROBABLE]"),
    A.p("He quotes a Barbados act under which a master who wilfully killed his own slave paid fifteen pounds sterling into the public treasury, while a death under punishment for running away carried no fine. " + WI + " Treat his reading as an abolitionist's account and check the act itself. [CONTESTED]"),
    A.p("He was also a participant: in 1776 he helped his employer, Dr Charles Irving, buy enslaved Africans at Jamaica for a plantation on the Mosquito Shore, choosing his own countrymen, and he managed the work. " + LATE + " He says the overseer who followed him treated them so cruelly that they fled by canoe and drowned. " + LATE + " A witness can be a participant too. [PROBABLE]"),
    A.p("In 1786 he was appointed commissary of stores for the black poor sailing to Sierra Leone. He says supplies were bought for 750 people but only 426 mustered, and that he was dismissed on 24/03/1787 after complaining of the agent. " + LATE + " The 426 is close to the 'over 400' settlers given above, though his number counts those who mustered, not those who landed (our note). [PROBABLE]"),
    A.ex(
        "Worked example: checking an author's numbers (Equiano on Barbados)",
        "Equiano says Barbados had an original stock of 80,000 enslaved people and needed 1,000 new captives a year, and concludes that an enslaved person's whole working life there was sixteen years. " + WI,
        "Divide the stock by the yearly recruits: 80,000 divided by 1,000 is 80 (our arithmetic). The figures as printed do not give sixteen, so either they describe different things or the conclusion needs another source. He takes the figures from the Quaker writer Anthony Benezet, so go to that source before repeating them.",
        "The same check works on his Sierra Leone figures: 426 of 750 is 57 per cent (our arithmetic), which shows how far the plan fell short of the number the supplies were bought for. " + LATE,
    ),
]
out["l5_checks"] = [
    A.case_chk5(
        "Equiano says he paid forty pounds sterling for his freedom, but the manumission deed dated 10/07/1766 records seventy pounds current money of Montserrat.",
        "What is the sound way to treat the two sums?",
        "As maybe one payment in two currencies, a 1.75 ratio the narrative leaves unexplained",
        [
            "As proof that Equiano invented the whole story, since one of the two sums must be false",
            "As proof that the deed is a later forgery, because no deed could name another currency",
            "As two payments, so he must have paid a hundred and ten pounds for his freedom in all",
            "As unimportant, because figures in a first-person narrative never need to be compared",
        ],
        "Sterling and island current money were different currencies, so the sums may describe one payment; the narrative does not explain the gap. " + WI,
    ),
    A.case_chk5(
        "Equiano says Barbados held 80,000 enslaved people, needed 1,000 new captives a year, and that a life there lasted sixteen years.",
        "What do the figures as printed give, and what follows?",
        "80,000 divided by 1,000 is 80, so sixteen needs another source",
        [
            "1,000 divided by 80,000 is 8 per cent, so a life there lasted about twelve years",
            "80,000 divided by 1,000 is 16, so the claim holds exactly as he states it",
            "80,000 minus 1,000 is 79,000, so a life there lasted about seventy-nine years",
            "The figures cannot be tested, because an eighteenth-century writer could not count",
        ],
        "Stock divided by yearly recruits is 80, not 16 (our arithmetic), so his conclusion does not follow from the numbers as printed. " + WI,
    ),
]

# Module 8, lesson 6: the commerce argument, under 'Why did abolition happen?'
out["l6_bullet"] = A.p(
    "A formerly enslaved African made the commercial case in 1789. Equiano argued that trade in goods across Africa, in place of the trade in people, would raise African demand for British manufactures, and he guessed spending of five pounds a head a year. " + LATE + " It was a prediction and not a measurement, but it shows that the 'legitimate commerce' argument was being made before the 1807 ban, by an African author. [PROBABLE]"
)

(HERE / "equiano_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("blocks written:", ", ".join(out))
