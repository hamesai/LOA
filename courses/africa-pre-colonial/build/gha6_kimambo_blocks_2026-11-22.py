"""Teaching blocks from UNESCO vol VI ch 10 (Kimambo, The East African coast and hinterland, 1845-80), read in full 22/11/2026.
Module 6: lesson l2 (slave trade, sultans and Europeans) and lesson l3 (routes, new rulers, Ngoni, Maasai)."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
K = "{{gha6-kimambo}}"
out = {}

out["l2_section"] = [
    A.h("Sultans, slavers and missionaries, 1845 to 1880"),
    A.p("Kimambo's chapter in UNESCO's volume VI argues that East Africa was already drawn into the capitalist world economy before colonial rule, through two commodities. He insists that ivory and slaves were not simply one trade, because both were bought with bulky goods such as cloth, wire and beads. East African ivory was softer, and so suited to combs, billiard balls and piano keys. " + K + " [CONTESTED]"),
    A.p("Indian merchants held the ivory trade by way of Bombay, and the few American traders at Zanzibar depended on them, so British attempts to take the trade directly failed. On slaves, Kimambo says the islands of Zanzibar and Pemba were absorbing about 10000 a year by the 1860s and that the Zanzibar market alone may have handled as many as 70000, though he warns these figures may be greatly exaggerated. " + K + " [CONTESTED]"),
    A.p("He rejects the picture of helpless victims. In many cases Africans seized the initiative in building trade with the coast. But he doubts that trade made them better off. Curtin's Senegambia study found terms of trade improving about tenfold over 150 years, and no such data exist for East Africa. Zanzibar's customs rose from 65000 pounds in 1869 to over 100000 pounds a year by 1876, and Kilwa made 120000 pounds a year in profit in 1876. " + K + " [CONTESTED]"),
    A.p("Kimambo adds that cheap imports hurt local cloth making, such as bark-cloth around the lakes and hand-woven cloth in south-western Tanzania, and that energy went into raiding and supplying instead of building local economies. This is the 'underdevelopment' reading Wallerstein and Salim also use, and Ajayi doubts. Hold it as an argument. " + K + " [CONTESTED]"),
    A.p("British pressure to end the trade moved slowly. Colonel Atkins Hamerton became consul in Zanzibar in 1841. After Said died in 1856 his empire split in two, and Majid, who took the East African half, was as reluctant to stop the trade. He began a new capital called Dar es Salaam on the mainland and died in 1870. In 1873 Barghash, under British threat, decreed an end to the trade by sea. " + K + " [PROBABLE]"),
    A.p("The decree changed less than it seems. The plantations kept growing, the mainland trade was prohibited only in 1876, and slaves were smuggled at night to Pemba from hidden stations between Pangani and Mombasa. Grain plantations worked by slaves sprang up along the coast to feed the islands, so it was impossible to tell slaves for sale from slaves for use. Kimambo concludes the slave trade stayed a major activity well into the colonial period. " + K + " [PROBABLE]"),
    A.call("warn", "Kimambo dates the Hamerton Treaty to 1845, while Salim's chapter 9, in the same volume, says Hamerton persuaded Said to sign it in 1847. The lesson cannot settle this from the volume alone, so check a third source before you give either date. " + K + " {{gha6-salim}}"),
    A.p("Europe's pressure came through four linked activities: ending the slave trade, missions, exploration and 'legitimate commerce'. Krapf reached Mombasa in 1844, Rebmann saw Kilimanjaro by 1856 and Erhardt's map of an inland sea inspired Burton and Speke's journey of 1858. After Livingstone's Missionary Travels (1857) the Universities' Mission came, then the Scottish mission at Blantyre in 1875, the CMS at Mpwapwa in 1876 and the White Fathers at Tabora in 1878. " + K + " [PROBABLE]"),
    A.p("Kimambo argues the mission stations were small independent states, built near the slave caravans and around freed slaves, and that they prepared the ground for colonial claims. Most of the roughly 300 Europeans on the mainland before 1884 were linked to missions. He also notes that William Mackinnon began ships to Zanzibar in 1872 and that the plans behind them became the British East Africa Company. " + K + " [CONTESTED]"),
    A.ex(
        "Worked example: reading the Zanzibar customs figures (our arithmetic)",
        "Kimambo gives Zanzibar's customs revenue as 65000 pounds in 1869 and over 100000 pounds a year by 1876.",
        "The rise is at least 35000 pounds, which is 35000 divided by 65000, about 54 per cent, over 7 years, or about 7.7 per cent a year on a simple average.",
        "The word 'over' makes the final figure a floor. Revenue growth shows a bigger trade, and it does not show who gained from it, which is the argument Kimambo is making."
    ),
]
out["l2_checks"] = [
    A.case_chk5(
        "A student quotes the Hamerton Treaty as signed in 1845 and cites Kimambo. Another quotes 1847 and cites Salim, from the same UNESCO volume.",
        "What is the best way to handle the clash?",
        "Flag it and check a third source",
        [
            "Trust Kimambo, because the later chapter in the volume always corrects the earlier",
            "Trust Salim, because the author of a chapter on Zanzibar must be more exact",
            "Average the two and write 1846, because a mean date cannot be wrong by much",
            "Leave out the treaty, because a date disputed by two authors cannot be used",
        ],
        "Both chapters are in the same volume and disagree, so the lesson's habit applies: say so, look at a third source, and do not average. " + K + " {{gha6-salim}}",
    ),
    A.case_chk5(
        "A website states that 70000 people a year passed through the Zanzibar market in the 1860s as an established fact.",
        "How does Kimambo's wording change what you should write?",
        "Say 'as many as', and that it may be exaggerated",
        [
            "Say 'exactly', because he gives the figure with no sign of doubt at all",
            "Say 'about 10000', because he says only that figure is reliable",
            "Say 'none', because he says the Zanzibar market had no slave trade after 1845",
            "Say '2500', because he follows Sheriff's lower figure for the 1860s",
        ],
        "He writes that the market may have handled 'as many as' 70000 and that the figures 'may have been greatly exaggerated'. " + K,
    ),
]

out["l3_section"] = [
    A.h("Routes, new rulers and the Ngoni, 1845 to 1880"),
    A.p("Kimambo organises the caravan trade into four regional routes: the Kilwa hinterland, central Tanzania, the Pangani valley and the Mombasa hinterland. He insists the integration came by transforming earlier regional networks, not just by Arab and Swahili penetration. " + K + " [PROBABLE]"),
    A.p("On the Kilwa route the Yao held the trade, and by mid-century they had formed larger settlements under stronger chiefs. Kimambo says this stratification began before the Ngoni arrived, and that except for pockets like Khota-Khota and Karonga the Arabs were generally clients of Yao chiefs who supplied guns and shared the spoils. " + K + " [PROBABLE]"),
    A.p("On the central route Indian financiers advanced goods to caravan leaders, and Arab settlements grew at Unyanyembe, where they formed a colony competing with Nyamwezi rulers, and at Ujiji, where they were folded into the Ha state. In the Pangani valley the Zigula gained from trade after a famine of about 1836, and Kisabengo's walled town near Morogoro had several thousand people in Stanley's account of 1871. " + K + " [PROBABLE]"),
    A.p("The mountain kingdoms did worse. The Shambaa, Pare and Chagga rulers sat on the mountains while the caravans used the plains, so subordinate rulers nearer the route could arm themselves and defy the capital. Semboja moved the Shambaa capital to Mazinde on the plains, and after Kimweri's death in the 1860s Usambara was full of violence. Kimambo concludes that the effect of long-distance trade 'was generally destructive'. " + K + " [CONTESTED]"),
    A.p("Wanga in western Kenya grew under Shiundu and his son Mumia (from 1882) with Swahili traders at court and Maasai mercenaries. G. S. Were argues that the idea of a large Wanga empire was built up in the colonial period as a British strategy, though he agrees its real authority covered at least two neighbouring areas. A traveller's account of a raid five years before his visit, which says thousands were killed, is hearsay and should be tagged [THIN EVIDENCE]. " + K + " [CONTESTED]"),
    A.p("In western Tanzania new rulers rose from warbands, the ruga-ruga, made up of war captives, runaway slaves, deserting porters and outcasts, modelled on Nguni war bands. Msiri left in the 1850s for Katanga. Mirambo, probably captured as a youth by the Ngoni, took control from the 1860s and made the Tabora Arabs pay tribute in 1876. Nyungu ya Mawe built a state among the Kimbu with appointed officials called vatwale. Both men died in 1884. " + K + " [PROBABLE]"),
    A.table(
        "Two empires built on the trade, on Kimambo's account",
        ["", "Mirambo", "Nyungu ya Mawe"],
        [
            ["Base", "Uyowa, west of Tabora", "Kiwele, among the Kimbu"],
            ["Method of control", "Military: tribute, a moving army, replaced resistant rulers", "Appointed officials (vatwale) over groups of old states"],
            ["After 1884", "Broke up into its parts", "Survived until the colonialists dismantled it"],
        ],
        K,
    ),
    A.p("In the Great Lakes, Buganda under Mutesa (1856 to 1884) gained most from the coast, because he kept guns under his personal control and raided his neighbours. Kabarega of Bunyoro tried to compete for direct contact with Zanzibar and with 'Khartoumers' from the Nile. Rwanda and Burundi kept the coastal traders out and coped with guns by stability, which Kimambo offers as an alternative strategy. " + K + " [PROBABLE]"),
    A.p("The Ngoni reached the Fipa plateau early in the 1840s after crossing the Zambezi in 1835, by then over a hundred thousand people. Zwangendaba died about 1848 and the nation split into five kingdoms. The Tuta raided north of Tabora, and the Gwangara settled around Songea. Sheriff argues they could not have lived as raiders for long, and that once settled they turned to organised farming with conquered people as cultivators. " + K + " [CONTESTED]"),
    A.p("An older view said the Hehe and Sangu centralised in response to the Ngoni. Redmayne's research, cited by Kimambo, shows centralisation began before the Ngoni, though Ngoni military methods did strengthen both. The Hehe under Mwinyigumba fought the Gwangara from 1878 to 1881 without a victory on either side. " + K + " [CONTESTED]"),
    A.p("The Maasai fell for reasons other than conquest. Their expansion had ended by the late eighteenth century, and civil wars followed the famine of 1836. Jacobs described pastoralists against the agricultural Iloikop, while Berntsen says the divide was never permanent. Cholera came in 1869 from the Samburu, and smallpox and pleuro-pneumonia in the 1880s killed people and herds. Kimambo says epidemics, more than war, ended Maasai power. " + K + " [CONTESTED]"),
    A.call("warn", "Kimambo reports two dates for the succession of the Maasai ritual leader Mbatian after Subet: 1864 by age-set reckoning (Jacobs) and 1866 from other sources (Low). The two dates reflect two methods, so cite the method with the date. " + K),
    A.ex(
        "Worked example: the Ngoni 'snowball' (our arithmetic)",
        "Isaacman's chapter, in this volume, says Zwangendaba began with about 300 people. Kimambo says there were over a hundred thousand when they reached the Fipa plateau.",
        "100000 divided by 300 is about 333, so the group had grown by more than three hundredfold. Sheriff, whom Kimambo cites, says 'more than a hundredfold'.",
        "The growth could only come from absorbing captives and refugees, and both chapters agree on that, though neither gives a headcount from a source made at the time."
    ),
]
out["l3_checks"] = [
    A.case_chk5(
        "A student writes: 'Mirambo's and Nyungu ya Mawe's empires both lasted until the Germans came, because strong rulers always build lasting states.'",
        "What does Kimambo's account show?",
        "Only Nyungu's lasted, thanks to his vatwale",
        [
            "Neither lasted, because both rulers were killed by Germans in 1884",
            "Both lasted, because each man chose his successor before his death in 1884",
            "Only Mirambo's lasted, because his army was always kept moving",
            "Neither existed, because ruga-ruga were too few to hold any state",
        ],
        "He says Mirambo's empire broke up for lack of a successor able to keep the army, while Nyungu's appointed officials let it survive until colonial rule. " + K,
    ),
    A.case_chk5(
        "A museum label says: 'The Maasai were destroyed by European guns in the 1880s.'",
        "How does Kimambo's chapter qualify that claim?",
        "Wars and epidemics weakened them before colonialism",
        [
            "It is exact, because he says the German army broke the Maasai in 1884",
            "It is exact, because he says the pastoralists lost to the Hehe in 1878",
            "It is wrong, because he says the Maasai grew stronger in the 1880s",
            "It is wrong, because he says there were no wars among the Maasai at all",
        ],
        "He says civil wars cut Maasai land and numbers, then cholera, smallpox and pleuro-pneumonia, more than the wars, weakened them before colonial rule. " + K,
    ),
]

(HERE / "gha6_kimambo_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
