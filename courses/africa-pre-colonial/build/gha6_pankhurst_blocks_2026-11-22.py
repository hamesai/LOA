"""Teaching blocks from UNESCO vol VI ch 15 (Pankhurst, with Cassanelli on Somalia: Ethiopia and Somalia), read in full 22/11/2026. Module 2 lesson l5."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
P = "{{gha6-pankhurst}}"
out = {}

out["section"] = [
    A.h("Ethiopia and the Horn in the nineteenth century"),
    A.p("Pankhurst's chapter in UNESCO's volume VI opens in the Masafent, 'the judges', a name Ethiopian historians took from the Book of Judges, 'there was no king in Israel'. Emperors were puppets of feudal lords, Gondar was shrunken and the scribe Abagaz Sa'una lamented that lords had 'become serfs and serfs lords'. The highlands were three states: Tigre, Amhara and Shoa. " + P + " [PROBABLE]"),
    A.p("Tigre was the strongest, rich from the salt-bar trade and from taxes on coastal trade, with more firearms than its neighbours. Ras Walda Sellase (1795 to 1816) wrote to George III in 1810 asking for firearms and for help in obtaining an abuna, and his successors repeated such pleas. In Shoa, Sahla Sellase (1813 to 1847) bought guns, signed treaties with Britain in 1841 and France in 1843, and kept a peace that let peasants farm 'certain to harvest after having sown'. " + P + " [PROBABLE]"),
    A.p("Beyond the highlands there was a mosaic. The Oromo kings of Enarya, Jimma and Gera replaced the egalitarian gada system with dynasties led by 'fathers of war', and several kings, such as Bofu of Enarya, adopted Islam. Harar was a walled Muslim city whose amir coined his own money. On the Somali side the Geledi sultans dominated the Benadir ivory trade, burned the reformist settlement of Bardera in 1843, and obliged Zanzibar to ask their leave to build a fort. " + P + " [PROBABLE]"),
    A.p("Kassa Heyku, born about 1820 and later Tewodros II, rose from Qwara. His enemies called him 'the kosso vendor's son', a slur on his mother's trade. He took Gondar in 1847, broke the Yajju dynasty at Ayshal in 1853, became negus in 1854, defeated Webe at Darasge in 1855 and took 7000 firearms, and was crowned emperor as Tewodros, a name tied to a prophecy of a righteous king. " + P + " [PROBABLE]"),
    A.p("Tewodros reformed. He mixed provincial soldiers into regiments, paid them, ordered duties collected at only three places, built roads and, with missionary craftsmen at Gafat, cast a seven-ton cannon called 'Sebastopol' that took 500 people to pull. His attempts to cut church land and make priests salaried were opposed, and Sven Rubenson calls the hostility of the priests and provincial nobles 'probably the single most important cause of his failure'. " + P + " [CONTESTED]"),
    A.call("warn", "Most of what we know of Tewodros comes from British consuls, missionaries, and travellers, and from British parliamentary papers, with Ethiopian chronicles far less used. Consul Plowden's praise of him in 1855 and Napier's expedition's accounts were both written by Britons with their own aims. Mark which source each claim rests on. " + P),
    A.p("The quarrel with Britain turned on a letter. In 1862 Tewodros wrote to Queen Victoria proposing an embassy, but the Foreign Office kept silence for months and Earl Russell later said that 'considering the short tenure of power of Abyssinian Kings' Britain should withdraw from Abyssinian engagements. Tewodros chained the consul Cameron in January 1864 and later held Hormuzd Rassam, sent with a reply, and others. Britain also valued friendly ties with Egypt, then producing 70 million kilograms of cotton a year while the American Civil War cut world supply. " + P + " [PROBABLE]"),
    A.p("Sir Robert Napier's expedition of about 12000 fighting men, two-thirds of them Indian, landed at Zulla in October 1867 and met little opposition because the future Yohannes IV and others stood aside. The only real battle was at Aroge on Good Friday, 10 April, and Magdala fell on 13 April. Tewodros, after a last letter blaming his soldiers and his 'worthless' artillery, shot himself. The British took his son Alamayehu and about 400 manuscripts, and gave Kassa of Tigre 12 heavy guns and 752 muskets. " + P + " [PROBABLE]"),
    A.p("Kassa became Emperor Yohannes IV, crowned at Axum in January 1872. He courted the clergy, imported firearms, tried mass baptism of Muslims and forbade tobacco. Egypt's Khedive Ismail then pressed in from Massawa and Bogos. At Gundat on 15 November 1875 Yohannes, with perhaps 70000 men, almost annihilated an Egyptian force of 2500 and captured 2500 Remington rifles, and at Gura on 7 to 9 March 1876 he beat a larger Egyptian army of 20000, taking 12000 or 13000 Remingtons. " + P + " [PROBABLE]"),
    A.ex(
        "Worked example: the odds at Gundat and Gura (our arithmetic)",
        "Pankhurst gives perhaps 70000 Ethiopians against 2500 Egyptians at Gundat, and close on 200000 against 20000 at Gura.",
        "70000 divided by 2500 is 28 to 1, and 200000 divided by 20000 is 10 to 1.",
        "The Ethiopian figures are estimates ('perhaps', 'close on') and may count carriers and camp followers. Both victories came from numbers and from Ethiopia's seizure of Remington rifles, which made Yohannes the first well-armed ruler of his country in over three centuries."
    ),
    A.p("Victory brought an uneasy unity. In March 1878 Yohannes crowned Menelik King of Shoa and Wallo, which Pankhurst reads as paramountcy in law and independence in fact. At Boru Meda they agreed to give Muslims and followers of traditional religions a set number of years to become Christian, and many conversions were nominal, with converts described as 'Christians by day, Muslims by night'. Gordon, sent by Egypt in 1879, found Yohannes demanding the return of Bogos and access to the sea. " + P + " [PROBABLE]"),
    A.p("The coast was already being bought. A French consul purchased Obok in 1856, and in 1862 Afar chiefs sold it for 10000 Maria Theresa dollars, though local chiefs later denied the claim. After the Suez Canal opened in November 1869, the Italian missionary Giuseppe Sapeto bought Assab for 6000 dollars and later added 8100 more. Pankhurst ends on the eve of the Mahdi, the Italian seizure of Massawa in 1885 and the rinderpest epidemic that followed. " + P + " [PROBABLE]"),
]
out["checks"] = [
    A.case_chk5(
        "A study guide says Emperor Tewodros II was 'a mad tyrant whose only achievement was imprisoning Europeans'.",
        "What does Pankhurst's chapter suggest the guide leaves out?",
        "His army, road and tax reforms and unification",
        [
            "That he never imprisoned any European, because he held only Ethiopian prisoners",
            "That he was born an emperor, so he had no need to unify rival provinces",
            "That he ruled for forty years without a rebellion and left a united state",
            "That he made peace with Britain in 1862, so no dispute with the British arose",
        ],
        "He describes regiments, pay, fewer tolls, roads and an end to the Masafent, as well as the violence and the dispute that destroyed his rule, so the guide is one-sided. " + P,
    ),
    A.case_chk5(
        "A student writes: 'Yohannes IV beat the Egyptians at Gundat in 1875 with 70000 men against 2500', and cites Pankhurst as an exact count.",
        "How should the sentence be reworded?",
        "Say 'perhaps 70000', as an estimate",
        [
            "Say 'exactly 70000', because Pankhurst took the number from a census",
            "Say '2500 men', since the Ethiopian figure is never given in any source",
            "Say 'about 200000', because the figure for Gura is the right one for Gundat",
            "Say nothing of numbers, because no figure for either army survives anywhere",
        ],
        "Pankhurst writes 'perhaps 70000 armed men', so the number is an estimate and the wording should carry that. " + P,
    ),
]
(HERE / "gha6_pankhurst_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
