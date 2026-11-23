"""Teaching blocks from UNESCO vol VI ch 6 (Mashingaidze, the Mfecane and the Cape Colony), read in full 22/11/2026, for module 7 lesson l5."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
C = "{{gha6-cape}}"
out = {}
out["section"] = [
    A.h("The mfecane at the Cape's door"),
    A.p("Mashingaidze's chapter in UNESCO's volume VI follows the mfecane to its southern edge, where it met the Cape Colony. He opens with a caution: the exact causes of the mfecane are not known, and the explosion built up over generations as Nguni chiefdoms grew into larger states under pressure on pasture and farmland. " + C + " [CONTESTED]"),
    A.p("The frontier was already violent. The Colony's eastern boundary had been moved from about the Gamtoos river in 1771 to the Great Fish river in 1779, yet many Xhosa communities were settled along and west of the Fish before it was proclaimed, and they treated the zone as ancestral land. Colonial commandos answered cattle raids with raids that often went beyond their stated aim. " + C + " [PROBABLE]"),
    A.p("The Colony was weak at home. Nearly 5000 British settlers had arrived in 1820, mostly in the Albany district with about 40 hectares each. Floods in 1822 destroyed crops, and by 1823 only about a third of the original farmers were still on their plots. Labour was the chronic shortage, because the 1820 settlers were not allowed Xhosa, Khoisan or slave labour. " + C + " [PROBABLE]"),
    A.p("Refugees from the Highveld and the Caledon valley began to arrive from 1822 to 1823. The governor decided in 1823 that they should be apprenticed to colonists for at least seven years, and Mashingaidze says they were paid in animals and other valuables that some took home. George Thompson is reported to have counted 1000 refugees in the Colony by 1826, but the chapter admits that exact figures are impossible, 'several hundreds, if not thousands'. " + C + " [THIN EVIDENCE]"),
    A.p("His argument is that the weakest agents of the mfecane changed the Cape most. The refugees ended the 'all-white phase' of Albany and Graaff-Reinet by the late 1820s, undermined settler self-reliance and intensive farming, and 100-acre farms were enlarged in 1825. He calls the refugees' misfortune 'ironically' the Colony's blessing. " + C + " Weigh this as his reading, not a settled fact. [CONTESTED]"),
    A.p("Be careful with the names in the sources. Colonists called the Sotho and Tswana refugees 'Mantatees', but the term is misleading because they had no link with the Tlokwa leader MmaNthatisi. 'Fetcane' or 'Mfecane' in colonial writing meant the northern Nguni invaders such as the Zulu and Matiwane's Ngwane. " + C + " [PROBABLE]"),
    A.p("The fighting itself was short. Mpondo resistance under Faku halted the Zulu and Ngoza's Thembu south of the Umzimvubu, though the Zulu drove off many Mpondo cattle in 1823 to 1824. Matiwane's Ngwane crossed the Orange river into Thembu country in early 1828 and were beaten at Mbholompo by a joint force of British troops, colonial burghers, Xhosa and Thembu. Matiwane later went back to Natal and was killed by Dingane. " + C + " [PROBABLE]"),
    A.p("Trade went on beside the raiding. From 1821 the acting governor Sir Rufane Donkin allowed a fair on the Keiskamma, which grew from an annual event to a weekly market at Fort Willshire by 1824. Xhosa traders brought ivory, horns, hides, gum and beef and took back beads, buttons, brass wire and brandy. Mashingaidze calls the market a facade on a violent frontier, since guns were also being smuggled to the Xhosa. " + C + " [PROBABLE]"),
    A.h("The Mfengu: a name, a myth and a trek"),
    A.p("The Mfengu were Natal Nguni refugees, mainly Hlubi, Bhele, Ngwane and Zizi, who settled among the Xhosa, Thembu and Mpondo. Mashingaidze derives the name from ukufenguza, 'begging', and says their hosts gave it. The refugees were first welcomed with land, food and cattle on loan, and they prospered by growing tobacco and trading on the frontier. " + C + " [PROBABLE]"),
    A.p("Relations soured among the Xhosa, and Mashingaidze says what caused it is not known. He then argues, following R. A. Moyer, that Wesleyan missionaries, led by John Ayliff, exaggerated their position into a 'master and slave' relationship, and spread a second myth that the mfecane had destroyed the Mfengu as a military force. The motives he gives are mission converts, cheap farm labour and a Cape government wanting a buffer. " + C + " [CONTESTED]"),
    A.p("In the Sixth Frontier War (1834 to 1835) Mfengu couriers carried messages for Ayliff over the 240 kilometres between Xhosa territory and Grahamstown. Governor D'Urban declared them British subjects on 3 May 1835. They left on 9 May with not less than 16000 people and about 15000 cattle, 'all belonging to the Xhosa chiefs', and had crossed the Keiskamma into the new Peddie District by 14 May. About 500 Mfengu joined the British army. " + C + " [PROBABLE]"),
    A.table(
        "Who gained from the mfecane at the Cape, on Mashingaidze's account",
        ["Group", "What they gained", "What it cost"],
        [
            ["Colonists in Albany and Graaff-Reinet", "Cheap labour, larger farms", "The self-reliant farming the settlement was founded on"],
            ["Sotho and Tswana refugees", "Shelter and wages in animals", "Apprenticeship of at least seven years"],
            ["Mfengu", "Land at Peddie, mission schooling, British protection", "Oaths to the king, military service, cheap labour and the loss of Xhosa ties"],
            ["Xhosa", "Allies against Matiwane for one campaign", "Lost the Mfengu and their cattle in 1835, a buffer set between them and the Colony"],
        ],
        C,
    ),
    A.call("warn", "The same volume gives two dates for Zwide's defeat. Mashingaidze says the Ndwandwe were defeated in 1818, while Ngcongco, cited in the lesson above, has Shaka beating Zwide in 1819 and 1820. Do not average them. Note the clash and look for a third source before you repeat either date. " + C + " {{gha6-mfecane}}"),
    A.ex(
        "Worked example: the size of the Mfengu move (our arithmetic)",
        "The chapter says nearly 5000 British settlers arrived in 1820 and that not less than 16000 Mfengu left the Xhosa area in May 1835.",
        "16000 divided by 5000 is 3.2. The 1835 trek was therefore more than three times the whole 1820 settler party.",
        "The trek began on 9 May and ended on 14 May 1835, which is 5 days later. That is a large movement in a very short time, and it was set up by the war and an army escort.",
    ),
    A.act("Mashingaidze says exact refugee numbers are unknown but gives a figure of 1000 for 1826. Write one sentence on how much weight that figure can bear and what you would want to see before using it in an essay."),
]
out["checks"] = [
    A.case_chk5(
        "A student writes: 'The mfecane only harmed the people it touched.' They have read Mashingaidze on the Cape.",
        "Which reply is best supported by his chapter?",
        "Refugee labour reshaped the Colony's farming",
        [
            "He shows the mfecane never reached the Cape, so it changed nothing there at all",
            "He shows the Colony gained nothing, because the refugees were all armed and hostile",
            "He shows the Zulu conquered the Colony in 1828, so its farms were wholly destroyed",
            "He shows the refugees were never apprenticed, so colonists gained no labour from them",
        ],
        "He argues the Sotho and Tswana refugees' labour ended the all-white phase of Albany and Graaff-Reinet and weakened the settlers' self-reliance, though he gives this as his own reading. " + C,
    ),
    A.case_chk5(
        "A student has Zwide's defeat as 1818 from Mashingaidze and as 1819 to 1820 from Ngcongco in the same UNESCO volume.",
        "What is the best next step?",
        "Flag the clash and check a third source",
        [
            "Choose the later date because later chapters in a volume always correct earlier ones",
            "Average the two and write 1819 so that the essay carries a single clean date",
            "Drop both dates because a volume that disagrees with itself cannot be used at all",
            "Choose 1818 because the chapter on the Cape is longer and so must be more accurate",
        ],
        "Two chapters by different authors can disagree. The lesson's habit is to note the clash and check another source, as with the Isandlwana date. " + C + " {{gha6-mfecane}}",
    ),
    A.case_chk5(
        "A mission report of 1835 says the Mfengu were slaves of the Xhosa who were 'delivered' by the British.",
        "How does Mashingaidze, following Moyer, help you read that report?",
        "It is a missionary claim, called a myth",
        [
            "It is proved by the 16000 who left, because nobody leaves a kind master in wartime",
            "It is a neutral census, because missionaries counted the Mfengu and the Xhosa alike",
            "It is a Xhosa account, because Hintsa wrote it to explain the loss of his cattle",
            "It is a British army order, so the matter of slavery was settled by law in 1835",
        ],
        "He says Ayliff turned a ruler-subject relationship into a 'master and slave' one, and that the Mfengu, missionaries and the Cape government each had motives for believing it. " + C,
    ),
]
(HERE / "gha6_cape_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok")
