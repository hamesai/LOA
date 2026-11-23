"""Teaching blocks from UNESCO vol VI ch 16 (Mutibwa, with Esoavelomandroso: Madagascar 1800-80), read in full 22/11/2026. Module 6 lesson l7."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
M = "{{gha6-mutibwa}}"
out = {}

out["section"] = [
    A.h("Madagascar's kingdom and its reforms, 1800 to 1880"),
    A.p("Mutibwa's chapter in UNESCO's volume VI follows two trends: the Merina monarchy at Antananarivo spreading its rule over the island, and a deliberate programme of modernisation. A British consul put Madagascar's population at 5 million in 1865, of whom about 800000 were Merina, which is about 16 per cent (our arithmetic). Mutibwa stresses one language and culture across some eighteen ethnic groups, and says that by 1880 the government controlled over two-thirds of the island. " + M + " [PROBABLE]"),
    A.call("warn", "Mutibwa has Andrianampoinimerina proclaim himself king about 1785 and move his capital to Antananarivo in 1791 or 1792. The lesson above gives about 1777 for the start of reunification and 1797 for taking Antananarivo, from volume V. Treat these as different reckonings, and cite which author you follow. Mutibwa also says the slave trade was banned by the Anglo-Malagasy Treaty 'in 1847', although he dates that treaty 1817 earlier in the chapter, so the 1847 looks like a slip. " + M + " {{gha5-madag2}}"),
    A.p("Radama I (1810 to 1828) came to the throne at about 18 and set out to reach the sea. The British governor of Mauritius, Farquhar, wanted slaves stopped and Madagascar's cattle and rice. The treaty of 23 October 1817 recognised Radama as king of the whole island, and in return for ending the export of slaves Britain promised 1000 dollars in gold, 1000 in silver, 100 barrels of gunpowder, 100 muskets and uniforms. Radama had argued that giving up the slave trade, his main revenue, would be 'economic suicide'. " + M + " [PROBABLE]"),
    A.p("Radama's tools were an army and schools. British instructors trained about 15000 soldiers with ranks counted in 'honours', and by 1828 two-thirds of the island was under Merina control. The Sakalava of the west held out through three campaigns, in 1820, 1821 and 1822. The first school opened on 8 December 1820 with three pupils, and by 1829 the LMS had 23 schools and about 2300 pupils, while Mutibwa says more than 4000 Malagasy could read and write by 1827. Those two numbers measure different things, pupils at a time and people who were ever literate. " + M + " [PROBABLE]"),
    A.p("Ranavalona I (1828 to 1861) cancelled the treaty in December 1828, and in 1829 the French bombarded Tamatave and Tintingue. She banned baptism in 1832 and Christianity in 1835, and the first martyrs died in 1837 and 1838. Mutibwa notes about 200 converts by 1830 and 'several hundreds' killed later. In 1845 an Anglo-French squadron attacked Tamatave and was beaten off. Meanwhile the Frenchman Jean Laborde built a complex at Mantasoa with some 20000 workers making guns, glass and soap, and the queen's palace. " + M + " [PROBABLE]"),
    A.p("Her reign is read two ways. To Europeans it was a 'reign of terror', and missionaries called her a 'female Nero'. To many Malagasy she stood for independence from foreign influence, though subject peoples of the south-east suffered severe repression and the Antanosy emigrated west. Mutibwa also notes she lifted the ban on trade with Mauritius and Reunion in 1853 after merchants paid 15000 dollars, and that a plot of 1857 by the Frenchman Lambert and her own son failed. " + M + " [CONTESTED]"),
    A.p("Radama II (1861 to 1863) threw open the door. Treaties with France on 12 September 1862 and Britain on 4 December 1862 let foreigners buy land and exempted them from duties that paid officials, and he ratified Lambert's charter and signed a secret treaty. The oligarchy of Hova officials, led by the two sons of Rainiharo, had him strangled with a silken sash on 12 May 1863, so no royal blood was shed. Rumours that he survived lasted more than two years, and Delval later argued he lived on, a claim to treat as [THIN EVIDENCE]. " + M),
    A.p("From July 1864 the prime minister was Rainilaiarivony, who held power for almost the rest of the century and married successive queens. The oligarchy cancelled the charters and revised the treaties. Britain accepted Madagascar's terms in the treaty of 27 June 1865, with no foreign land ownership and 10 per cent duties. France demanded an indemnity of 1200000 francs, paid on 1 January 1866, and then signed a treaty on 8 August 1868 without land rights. " + M + " [PROBABLE]"),
    A.p("In February 1869 Queen Ranavalona II and Rainilaiarivony became Protestants. In 1863 there were about 5000 Christians in a capital of some 60000 people, which is about 8 per cent (our arithmetic), and by the end of 1868 the LMS alone counted 10546 church members and 153000 adherents. Mutibwa argues conversion was both sincere and political: it neutralised the pro-British Christian leader Rainimaharavo and drew Madagascar closer to Britain against France. Traditional priests of the royal sampy later led opposition. " + M + " [CONTESTED]"),
    A.p("The reforms went far. A Code of 101 articles in 1868 grew to 305 articles in March 1881, cutting capital offences from eighteen to thirteen and ending collective family responsibility. Eight ministries were created in 1876. By 1880 over 40000 pupils were in school, and the prime minister decreed that children over seven must attend. In 1877 the government freed the Makoa, the slaves and descendants of slaves from the African mainland, an estimated 150000 people. " + M + " [PROBABLE]"),
    A.p("The economy depended on rice, cattle and beef, which provided half of the government's customs revenue. Imported cloth and earthenware undercut local crafts, and the Mantasoa works faded after Laborde left. The 1881 Code made selling land to foreigners punishable by death. Mutibwa concludes that the claim that Africa was colonised because it was poor and undeveloped does not fit Madagascar, quoting a British admiral of 1881 who called the Malagasy 'a race fit to govern their land'. He adds that modernity in some ways weakened the kingdom. " + M + " [CONTESTED]"),
    A.ex(
        "Worked example: checking the conversion figures (our arithmetic)",
        "Mutibwa gives about 5000 Christians in Antananarivo, population some 60000, in 1863, and 10546 LMS church members with 153000 adherents at the end of 1868.",
        "5000 divided by 60000 is about 8 per cent. 153000 divided by 10546 is about 14.5 adherents for each member.",
        "The two sets of figures are for different places and groups: one is a city, the other all of Madagascar, and 'adherents' is a loose count by the mission. Do not subtract one from the other to get growth."
    ),
]
out["checks"] = [
    A.case_chk5(
        "A website says Queen Ranavalona I simply hated foreigners and closed Madagascar to the world for thirty-three years.",
        "What does Mutibwa's chapter add?",
        "She also traded, hired Laborde and sent an embassy",
        [
            "She ended all contact in 1828, because she never traded or hired a foreigner",
            "She banned only the British, because the French were allowed every right",
            "She changed nothing, because the Christian ban of 1835 was a European invention",
            "She was a puppet of Lambert, because he held power from 1828 until her death",
        ],
        "He shows trade with the US and Mauritius resumed, Laborde and de Lastelle ran works, an embassy went to Europe in 1836, and trade reopened in 1853, so the picture is more mixed. " + M,
    ),
    A.case_chk5(
        "A student says Radama II was murdered because his people hated modernisation.",
        "How does Mutibwa describe the cause?",
        "The pace, the foreign favourites and the charters",
        [
            "A rejection of all schooling, because the oligarchy closed every school in 1863",
            "A French invasion, because Napoleon III ordered the king killed in 1862",
            "A Sakalava rising, because the western kingdoms marched on the capital",
            "A plague of cattle, because rinderpest ruined the royal treasury in 1863",
        ],
        "He says the oligarchy was not against modernisation, only the speed, the privileges granted to foreigners and the threat to the prime minister's clans. " + M,
    ),
]
(HERE / "gha6_mutibwa_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
