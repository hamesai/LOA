"""Teaching blocks from UNESCO vol VI ch 14 (Ibrahim, with Ogot on the south: The Sudan in the nineteenth century), read in full 22/11/2026. Module 2 lesson l4."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
I = "{{gha6-ibrahim}}"
out = {}

out["section"] = [
    A.h("The Sudan under the Turkiyya, 1821 to 1885"),
    A.p("Ibrahim's chapter in UNESCO's volume VI, with a section on the south by B. A. Ogot, calls the rule that began in 1820 to 1821 the Turkiyya, not 'Egyptian'. The rulers were a Turkish-speaking body, and Egyptians were given junior posts. Sennar capitulated in 1821, and the Fur sultans of Darfur ruled until 1874. The Funj sultanate had already broken into weak shaykhdoms, which gave Muhammad Ali his opening. " + I + " [PROBABLE]"),
    A.p("Why Muhammad Ali invaded is argued. Some Egyptian historians say he came for the welfare of the Sudanese, even at their request, and Muhammad Fu'ad Shukri added a 'theory of the vacuum' that made Egypt the lawful sovereign of a land without a sovereign. Ibrahim answers that Shukri was politically motivated by the case for Nile Valley unity, that the Sennar sultan remained the legal sovereign, and that the invasion was made in the Ottoman sultan's name. " + I + " [CONTESTED]"),
    A.p("Sudanese scholars working from archives find a harsher aim: men and money. Muhammad Ali hoped to recruit 20000 or 30000 Sudanese Africans for a new army, and he urged his commanders to intensify slave raids, calling it his 'utmost desire irrespective of the means used'. Many captives died on the way or at Aswan, and he then conscripted Egyptian peasants, who 'made some of the best regular infantry in the Middle East'. His search for Sudanese gold, including a visit at age seventy in 1838 to 1839, found none. " + I + " [PROBABLE]"),
    A.p("Tax was the next shock. People who had paid no regular taxes under the Funj now faced an Egyptian-style system, collected by irregular soldiers and often in cash. In 1822 Ismail, Muhammad Ali's son, demanded 30000 dollars and 6000 slaves from the Ja'liyyin at Shendi within two days, struck their chief Nimir with a pipe, and was burned alive with his staff in late October 1822. In Darfur Amir Harun rose in 1877 and was killed in 1880, and the Fur finally overthrew Turkish rule in 1884 with the Mahdi. " + I + " [PROBABLE]"),
    A.p("The southern section is bleaker. From 1840 slave raiding along the White Nile grew, private armies were paid in slaves, and traders built zeribas as bases. Kaka became the main slave market of the White Nile after 1854 and, by 1860, about 2000 slaves a year were sold there. The Shilluk king expelled Arab traders in 1860 and Muhammad al-Khayr destroyed Fashoda. A traveller counted at least 600 deserted huts at Kaka, and bridewealth fell from 20 to 30 cows to one between 1860 and 1900. " + I + " [PROBABLE]"),
    A.ex(
        "Worked example: what a fall from thirty cows to one means (our arithmetic)",
        "Ogot says Shilluk bridewealth fell from 20 to 30 cows to one cow between 1860 and 1900.",
        "One cow is 1 divided by 20, or 5 per cent, of the lower old figure and 1 divided by 30, about 3.3 per cent, of the higher. The fall is therefore between 95 and about 97 per cent.",
        "This is a proxy, since bridewealth was a social payment. It is useful because it shows how losing cattle to raids and taxes changed marriage itself, which is why Ogot uses it."
    ),
    A.p("The southern peoples fought back. The Bari in 1854 killed members of a French mission, and killed the Sardinian vice-consul Vaudey in a battle against about 5000 Bari. The Lokoya killed 120 of 150 soldiers in 1860. A Zande chief, Ndoruma, captured a zeriba and in 1870 beat a force of 2000, killing the slave trader Abu Kuron. The Jieng (Dinka) and Noath (Nuer) used their swamps. Ogot says weak groups 'nearly vanished as cohesive political or social units'. " + I + " [PROBABLE]"),
    A.p("Khedive Ismail (1863 to 1879) then tried to build a Nile empire, forcing European traders out by 1867 and justifying expansion as ending the slave trade. His British officers, Samuel Baker (1869 to 1873) and Charles Gordon (1874 to 1876 and 1877 to 1879), kept only a few posts. Mutesa of Buganda outmanoeuvred Gordon's envoy Nur Bey, and Gordon withdrew to Lado in 1876. Zubayr Rahma Mansur beat a government force in 1872 and was recognised as governor of Bahr al-Ghazal, then took Darfur in 1874. " + I + " [PROBABLE]"),
    A.call("warn", "Ibrahim says Baker 'arrived at Gondokoro in 1874' although he dates Baker's tenure 1869 to 1873, and says Baker retreated to Patiko in August 1872. He also says Gordon was appointed in 1873 yet gives his terms of office as 1874 to 1876 and 1877 to 1879. Do not repeat one date without checking another source. " + I),
    A.p("Ibrahim does credit the Turkiyya with modernisation. It united the territory from the second cataract to the equatorial lakes, introduced firearms, steamers (with a dockyard at Khartoum) and the telegraph, centralised government under one governor-general, and promoted orthodox Islam, which weakened the Sufi fakis. It also opened the south to the Jallaba, northern traders whose violence fed lasting distrust. Many Europeans employed in government bred xenophobia that the Mahdi used. " + I + " [CONTESTED]"),
    A.p("The chapter holds a tension. Ibrahim concludes that Turkish rule ended widespread slave-raiding, especially in the south, while Ogot's section shows raiding rising from 1840, Fashoda turned into a slave market in 1876 and Mahdist plunder of the south after 1885. Read both claims, say which period each covers, and cite whichever you use. His final argument that a 'socio-economic structure of domination' became a 'racial structure' in the south is an interpretation. " + I + " [CONTESTED]"),
]
out["checks"] = [
    A.case_chk5(
        "A textbook says Muhammad Ali occupied the Sudan in 1821 to save its people and at the request of its own leaders.",
        "How does Ibrahim's chapter treat that claim?",
        "As a contested view that archives challenge",
        [
            "As proved by the Sudanese scholars, who found a signed request from Sennar",
            "As proved by Shukri, whose 'theory of the vacuum' is the accepted law",
            "As irrelevant, because the invasion was fought by Egyptian peasants alone",
            "As a Mahdist invention, because Egyptian historians wrote nothing on it",
        ],
        "He says some notables asked for it for personal reasons, that the welfare view is challenged by archive-based studies and that Shukri's vacuum theory served a political aim. " + I,
    ),
    A.case_chk5(
        "A student says Baker arrived at Gondokoro in 1874 and ended his tenure in 1873.",
        "What should the student do?",
        "Spot the clash and check another source",
        [
            "Use 1874 because Ibrahim states it and a printed date is always final",
            "Use 1873 because the later date must be a misprint in all cases",
            "Drop Baker from the essay because his dates are unusable",
            "Average the dates and cite Baker's tenure as 1873 to 1874",
        ],
        "The chapter's own dates for Baker do not fit, so the careful step is to name the clash and verify the date elsewhere. " + I,
    ),
    A.case_chk5(
        "A website says the peoples of the southern Sudan were passive victims of the slavers and Turkish officers.",
        "What does Ogot's section suggest?",
        "Many fought hard, and some groups almost vanished",
        [
            "It is right, because no southern people ever resisted the zeriba traders",
            "It is right, because the Zande and Bari accepted Turkish rule from 1854",
            "It is wrong, because every southern group defeated the Turks by 1860",
            "It is wrong, because the south was never raided before the Mahdia",
        ],
        "He describes Bari, Lokoya, Shilluk, Zande, Jieng and Noath resistance, while weaker groups were enslaved or killed. " + I,
    ),
]
(HERE / "gha6_ibrahim_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
