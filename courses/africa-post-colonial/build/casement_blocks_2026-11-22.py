"""Builds the Casement teaching blocks (reading of 22/11/2026) for Post-Colonial Africa, module 1, lesson 4 (the Congo Free State).
Applied checks use author.case_chk5 so the five-option standard holds. Apply with casement_apply_2026-11-22.js."""
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402

INC = "{{casement-inclosures}}"
REP = "{{casement-reply}}"
out = {}

out["bullets"] = [
    A.h("How the report was tested"),
    A.p("Casement did not take the first accounts at face value. Of the refugees' story of rubber quotas and killings he wrote that it seemed to him, if not false, greatly exaggerated, and he then recorded the corroboration he found: missionary letters and accounts from State sentries. " + INC + " He took statements through interpreters and had them signed before him, and the mission witnesses signed too. " + INC + " [FIRM]"),
    A.p("One missionary's counts show how the Lukolela figure was built. Rev. John Whitehead put the villages at not less than 6,000 in January 1891, which is an estimate, then counted 719 at the end of December 1896 and 352 in July 1903. " + INC + " Our arithmetic: 719 to 352 is a fall of 51 per cent in six and a half years, and 6,000 to 352 is a fall of 94 per cent. Only the two later figures are counts. [PROBABLE]"),
    A.p("Whitehead also put quite half of the riverside deaths down to sleeping sickness, and he argued that fear, hunger and the compulsory supply of food and rubber made the death rate worse. " + INC + " That is a missionary's judgement, not a measurement. [CONTESTED]"),
    A.p("A second missionary table lists 14 villages on Lake Mantumba with careful estimates of 12,320 people in 1893 and 1,610 in 1903, a fall of 87 per cent (our arithmetic). He names four causes: killings in the 'wars', weak bodies and hunger, the deaths of children sent to missions, and fewer births. " + INC + " His estimate that 99 per cent of the wars began over unmet demands for produce, labour or men is one man's reckoning. [PROBABLE]"),
    A.h("The Free State's reply, and the reply to the reply"),
    A.p("The State answered on 12/03/1904. It said Casement gave no basis for his population figures, pointed to a place where he seemed to give 500 people and then 240, and blamed sleeping sickness, smallpox, migration and the end of the slave trade. " + REP + " The British answer was that the two figures counted different groups of villages, those along one line and those feeding one wood post (our reading of the memorandum). " + REP + " [PROBABLE]"),
    A.p("The State also argued that Casement travelled with Protestant missionaries and was taken by villagers for a redresser of wrongs, and that two interpreters stood between him and each witness. " + REP + " Some of its wording about African witnesses was racial contempt used as an argument; read it as part of the source, not as evidence. " + REP + " [PROBABLE]"),
    A.p("The Epondo case shows how a dispute is argued. Casement recorded a young man's left hand cut off and about 40 villagers naming a company sentry. " + INC + " A State prosecutor's inquiry of September and October 1903 had about twenty witnesses say a boar bit the hand off and found the villagers' story a plot to avoid rubber work. " + REP + " The British reply noted that the prosecutor was the company's guest, that the boy retracted on 08/10/1903 at the company's headquarters after swearing the opposite the day before, that a witness said to have fled in fact testified, and that the stump was not fully healed on 07/09/1903 though the boy said the accident was long ago. " + REP + " [CONTESTED]"),
    A.p("The documents do not settle Epondo. What they do show is the checks to use: who ran the inquiry, where it was held, who interpreted, what the date evidence allows, and whether the case is typical. Casement's report gave the case under a page of 39, while the State's reply gave it about half its length. " + REP + " [FIRM]"),
    A.p("The strongest evidence came from the State's own court. On appeal at Boma on 15/03/1904 a company zone chief, Caudron, was found guilty of premeditated murder as the moral author of killings: he sent armed men to fire on Liboké on the night of 15 to 16/10/1902, and led expeditions in January to March 1903 told to fire on villagers to raise rubber. " + REP + " The court held that unpaid tax could not justify killing, that no law then allowed the company to demand rubber as tax, and that obeying superiors was no defence. " + REP + " [FIRM]"),
    A.p("The same judgment cut his sentence from twenty years to five, with extenuating circumstances, and kept ten years for a Lagos clerk, Silvanus Jones, with a hope of early release. " + REP + " The acting consul's covering note says fifteen years, which the judgment does not; when a summary and the text disagree, trust the text. " + REP + " The note also gives 122 verified deaths as something he was told, so treat that figure as hearsay. [PROBABLE]"),
    A.p("Three circulars of the Governor-General, Wahis, show what the State knew. In 1900 he wrote that company 'police' rights had been misread and used for the gravest abuses. In 1903 he complained that armed soldiers were still being sent out under African non-commissioned officers against orders. And in 29/03/1901 he told his officials to push for more rubber as prices fell. " + INC + " [FIRM]"),
    A.p("The British memorandum added a table: exports from the Congo State were 15,146,976 francs in 1897 and 50,069,514 in 1902, while imports fell from 21,181,462 to 18,080,909. " + REP + " Our arithmetic: exports rose 3.3 times while imports fell by about 3.1 million francs, in regions the State itself said were losing people. The memorandum argued that the producers were not being paid. [PROBABLE]"),
    A.ex(
        "Worked example: dating an injury (the Epondo case)",
        "A mission worker, Danielson, said the clearing of the bank for a landing slip at Bonginda began on 21/01/1903, and the villagers dated the injury to that clearing. " + INC,
        "From 21/01/1903 to the day Casement saw the stump, 07/09/1903, is 229 days, about seven and a half months (our arithmetic). The stump was still wrapped and not fully healed. " + REP,
        "The boy later said, to the State's prosecutor, that the accident was long ago. A long-ago bite and an unhealed stump do not sit easily together, but the documents do not say how long such a wound would take to heal. So the dating test points one way without settling the case, and you should say exactly that.",
    ),
]
out["checks"] = [
    A.case_chk5(
        "The Congo State says Casement's villagers lied about the boy Epondo, and cites a prosecutor's inquiry in which about twenty witnesses said a boar took his hand. The British reply says the inquiry was held as the company's guest.",
        "What is the best way to treat the case in your notes?",
        "As unsettled: compare who ran each inquiry and what the dates allow",
        [
            "As proved false, because twenty sworn witnesses outweigh the account of one consul",
            "As proved true, because Casement was a British consul and so could not be mistaken",
            "As irrelevant, because one case says nothing at all about how the inquiries were run",
            "As decided by the boy alone, because the person injured is always the best witness",
        ],
        "The documents conflict on who ran the inquiry, where the boy retracted and how long the stump had been healing, so the case stays disputed. " + REP,
    ),
    A.case_chk5(
        "A cover note from the acting consul says the Boma appeal court cut Caudron's sentence from twenty years to fifteen. The judgment itself, printed in the same file, says five.",
        "Which should you use, and why?",
        "Five years: the judgment is the primary text and the note a summary",
        [
            "Fifteen years, because a consul writing the same week would not have made an error",
            "Twenty years, because a sentence cannot be cut on appeal by a Free State court",
            "Ten years, because the two figures should be averaged when they disagree",
            "Either figure, because a summary and the original text carry the same weight",
        ],
        "The judgment says five years' penal servitude with extenuating circumstances; the covering note's fifteen is a mistake or a miscopying, so go to the text. " + REP,
    ),
    A.case_chk5(
        "A missionary counted 719 people in his villages at the end of 1896 and 352 in July 1903. A website says he counted 6,000 in 1891 and that the fall to 352 was therefore 94 per cent.",
        "What is the correction to make?",
        "6,000 was an estimate; only 719 to 352, a 51 per cent fall, rests on counts",
        [
            "The 6,000 was a census, so the 94 per cent is exact and needs no warning at all",
            "The 719 was an estimate, so only the fall from 6,000 to 719 rests on real counts",
            "The 94 per cent is wrong, because a fall cannot be worked out from only two years",
            "Both 6,000 and 352 were estimates, so no percentage can be drawn from the letter",
        ],
        "Whitehead says the 1891 figure 'must have been' not less than 6,000, while 719 and 352 are counts he made himself; 719 to 352 is 51 per cent. " + INC,
    ),
]

(HERE / "casement_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("blocks written:", ", ".join(out))
