"""Teaching blocks from UNESCO vol VI ch 12 (Vellut, The Congo Basin and Angola), read in full 22/11/2026. Module 6 lesson l6."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
V = "{{gha6-vellut}}"
out = {}

out["section"] = [
    A.h("West Central Africa, 1800 to 1880: producers, trade zones and new masters"),
    A.p("Vellut's chapter in UNESCO's volume VI opens by rejecting three clichés. The nineteenth century was not mainly about long-distance trade, because economies still rested more on production. It was not an age of incessant 'tribal warfare', because most people lived peacefully as farmers, and it was not just the history of despotic kingdoms. He stresses continuity and slow change, while also noting that the region was more tied to the world market than ever. " + V + " [CONTESTED]"),
    A.p("Population was uneven. In the open woodland south of the rain forest the density could reach at most about 8 people per square kilometre, with finger millet, millets and sorghum supplemented by gathering, hunting and fishing. High-density areas rested on American crops, which spread over some two centuries between 1600 and 1850, and Tuckey's 1818 list of the lower Congo's plants shows maize and cassava widely used. A Mongo proverb says 'sweet cassava never becomes like yam', meaning a foreigner never knows the language and customs like a native. " + V + " [PROBABLE]"),
    A.p("The figures are weak. Around 1800 the Luanda authorities, working from recruitment into the armed forces, put the Ambundu of Golungo at 60000 and Ambaca at 37000, and the Ovimbundu of Bailundu at 56000 and Bie at over 30000. Vellut calls them 'very doubtful', since about 1850 L. Magyar estimated the Ovimbundu alone at 1220000. The annual growth rates he uses, 0.05 to 0.10 per cent for early farming and 0.10 to 0.15 for diversified farming, are borrowed from comparable societies and not measured. " + V + " [THIN EVIDENCE]"),
    A.ex(
        "Worked example: how far apart are the Ovimbundu estimates (our arithmetic)",
        "Bailundu at 56000 and Bie at more than 30000 give about 86000 for those two districts around 1800. Magyar, about 1850, gives 1220000 for the Ovimbundu as a whole.",
        "1220000 divided by 86000 is about 14, so Magyar's figure is some fourteen times the sum of the two districts.",
        "The two figures count different things, two districts around 1800 against a whole people around 1850, and they come from different methods. Compound growth explains little: at 0.15 per cent a year over 250 years a population multiplies by about 1.45, and at 0.05 per cent by about 1.13. A gap of fourteen times is a gap in method."
    ),
    A.p("Political and farming change fed each other. The Zande under the Avungara, who began to unify the area at the end of the eighteenth century, supported about 40 people per square kilometre in the 1870s on Schweinfurth's estimate. Among the Chokwe, women from Lunda settlements who knew cassava helped hunters start crops in the forest, and the children of female captives joined their father's clan, as 'children of the house' among the Kongo and 'children of the village' among the Chokwe. " + V + " [PROBABLE]"),
    A.p("The zone of Ovambo in southern Angola shows poor soils turned productive. People irrigated and manured from the flooding of the Cuvelai basin, raised millet and sorghum, and the king acted as rainmaker and organised the dams and irrigation works. Vellut calls the conquest of poor soils one of nineteenth-century African agriculture's greatest triumphs. " + V + " [PROBABLE]"),
    A.p("He maps four trading zones around 1880. In the north-east Egyptian, Coptic and European traders worked from zeribas, or fortified camps, in the Bahr al-Ghazal, and Georg Schweinfurth left an account of the Zande and Mangbetu in the 1870s. The Swahili zone grew from small caravans to trading principalities such as Tippu Tip's at Kasongo from 1875. The Portuguese-African zone ran from Luanda, Benguela and Mocamedes. The river trade of the equatorial Congo spread the Babangi language, and Ngaliema, a former slave, held sway at the Pool around 1880. " + V + " [PROBABLE]"),
    A.p("In the Portuguese-African zone Africans, more than Portuguese, ran the trade in good times. Ovimbundu caravans in the 1870s bypassed the Lunda state of Kalagne to buy slaves in Luba country and sell them to the Kuba for ivory, and Ambaquista traders from Malanje (founded 1857) went to the Lunda capital, the mussumba. Luanda, with 6000 to 10000 people about 1850, was the largest town, and fortunes there were 'quickly made and as quickly lost'. " + V + " [PROBABLE]"),
    A.p("The nature of the trade changed. From 1780 to 1830, between 15000 and 20000 slaves a year left Central African ports, mostly for Brazil, and the Atlantic trade largely ended in the 1850s, surviving on the lower Congo until the late 1860s. Ivory, wax, copal, coffee and later rubber replaced it. The value of goods through Angolan ports rose sevenfold between 1844 and 1881, yet exports in the early 1870s were worth only about twice the slave exports of the 1820s. " + V + " [PROBABLE]"),
    A.p("Slavery did not end with the trade. In Angola it was formally abolished in 1878, yet a slave labour sector underlay the booms in cotton, coffee and especially sugar cane, and the brandy distilled from cane was the main trade good for the interior. Vellut argues that nineteenth-century slavery here was often tied to the market-related sector and so differed from older tribute-based forms. " + V + " [CONTESTED]"),
    A.p("Portuguese policy swung like a pendulum. The 1850s saw conquest and efforts to remove African traders such as the Imbangala and the Kongo. From about 1860 Portugal withdrew after defeats at Cassanga in 1862 and in the Dembo country in 1871 to 1872, and by the early 1870s it had fallen back to the coast, while Silva Porto lost his fortune to Ovimbundu competition. Tonnage shipped down the Kwanza from Dondo grew sevenfold between 1867 and 1873. A recession, a drought and a credit crisis in 1874 to 1876 then opened a new phase of expansion. " + V + " [PROBABLE]"),
    A.call("warn", "Vellut gives two end dates for the Portuguese retreat in Angola: the ebb of occupation is dated 1862 to 1872 in one passage and 1862 to 1875 in another. He gives Msiri settling in Katanga 'in about 1885' but also a state by 1880, and Kimambo (earlier in this lesson's module) dates Msiri's departure for Katanga to the 1850s. Do not repeat any one of these dates without a second source. " + V + " {{gha6-kimambo}}"),
    A.p("On power, Vellut sees two old models, tribute-based kingdoms and egalitarian rule by councils of elders and notables, with every compromise between them. Kalagne, the Lunda state under Nawej (c. 1820 to 1852), used firearms from Angola, and Nawej's heirs fought for the throne. Under Muteba (c. 1857 to 1873) an Ambundu colony led by Lourenco Bezerra, 'Lufuma', stayed some thirty years at the mussumba and became a titled Lunda dignitary. The Chokwe, driven by the search for ivory, wax and later rubber, eclipsed Lunda power between the Tshikapa and Kasai from the 1870s. " + V + " [PROBABLE]"),
    A.p("The Luba state weakened under caravan pressure in the 1870s, and Vellut warns that colonial administrators who wanted to reconstruct past empires overestimated Luba centralisation. Msiri, born Ngelengwa Mwenda, rose from a trading expedition into a ruler, took the title mwami, founded Bunkeya and drew chiefs of the Mwant Yav and the Mulopwe into his state, and was killed on 20 December 1891 by a European. His wife Masengo's execution set off a long Sanga revolt. " + V + " [PROBABLE]"),
    A.p("Vellut ends by calling the century too short and too suddenly broken for great states to emerge. The region looked like a 'horizontal' network of chiefdoms, not a vertical hierarchy, and the chief's office proved malleable: held by traders, upstarts or newly created titles. He cautions against talking of 'social classes' since differences followed political, clan and ethnic lines. This sets a limit on the class vocabulary used by Isaacman for the Zambezi. " + V + " [CONTESTED]"),
]
out["checks"] = [
    A.case_chk5(
        "A website says: 'Before 1880 Central Africa lived by the slave trade and was ruled by despotic kingdoms in constant tribal war.'",
        "How does Vellut's chapter answer it?",
        "Production dominated; most people lived peacefully",
        [
            "It agrees, because he says every society in the region was a slave state",
            "It agrees, because he calls the nineteenth century a time of unbroken warfare",
            "It is wrong because the slave trade ended in 1800 and left no later mark",
            "It is wrong because the region had no kingdoms of any kind before 1880",
        ],
        "He says the economy rested more on production than trade, that most people were peaceful producers and that political forms ran from kingdoms to councils. " + V,
    ),
    A.case_chk5(
        "A guide gives 'about 56000 Ovimbundu at Bailundu in 1800' as a fact, citing Vellut.",
        "How should the sentence be changed?",
        "Call it a rough, very doubtful estimate",
        [
            "Keep it as a census figure, because the Luanda authorities counted every village",
            "Keep it and add Magyar's 1220000 to give a total for 1800",
            "Delete the place name, because Bailundu was a Kongo district, not Ovimbundu",
            "Round it to 100000, because round numbers are safer than rough ones",
        ],
        "Vellut says the Luanda estimates were made on a very rough basis from recruitment and calls the figures 'very doubtful'. " + V,
    ),
    A.case_chk5(
        "A timeline says Portugal steadily extended its control over Angola through the whole nineteenth century.",
        "What does Vellut's account suggest?",
        "It swung between expansion and retreat",
        [
            "It is right, because he says Portuguese troops won every battle after 1850",
            "It is right, because he says Africans never controlled any trade in the interior",
            "It is wrong, because he says Portugal held no coast posts before 1870",
            "It is wrong, because he says Angola was never a Portuguese colony in this century",
        ],
        "He describes a pendulum: conquest in the 1850s, defeats and withdrawal to the coast around 1862 to 1875, while African traders took over the sertao trade, then renewed expansion. " + V,
    ),
]
(HERE / "gha6_vellut_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
