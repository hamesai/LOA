"""Teaching blocks from UNESCO vol VI ch 25 (Arhin and Ki-Zerbo, States and peoples of the Niger Bend and the Volta), read in full 22/11/2026.
Module 5 lesson l4 (Asante, Fante and the coast) and module 4 lesson l4 (Mossi, Volta peoples, Liptako, Segu and Kaarta, trade)."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
R = "{{gha6-arhin}}"
out = {}

out["m5_section"] = [
    A.h("Asante, the Fante and the coast, 1800 to 1896"),
    A.p("Arhin and Ki-Zerbo's chapter in UNESCO's volume VI describes Asante at its peak under Osei Bonsu (1801 to 1824), whose armies reached the coast in 1807, 1811 and 1814. Britain, at war with Napoleon and without a clear policy, accepted Asante's suzerainty over the coastal peoples. After the British governor MacCarthy was killed at Nsamankow in 1824, the Asante advance to the coast was crushed at Dodowa in 1826 by a coalition of coastal peoples under British leadership. " + R + " [PROBABLE]"),
    A.p("The chapter's classification of the empire is contested. It describes a core of Asante chiefdoms bound by the Golden Stool and the oath, a ring of Akan states under Asante law and officials, and distant non-Akan states such as Dagomba, Mamprusi and Gonja held mainly for tribute. Wilks, cited in the notes, rejects this three-part scheme. The Great Oath, the Ntam Kesie, was imposed on subject Akan peoples, and chiefs had to attend the Odwira festival. " + R + " [CONTESTED]"),
    A.p("From 1830 to 1843 the merchant governor George Maclean kept the peace on the coast. His tripartite treaty recognised coastal independence south of the Pra river, and he built a system of courts that taught English law. By 1840 palm oil had replaced the slave trade as the coast's chief export, where slaves had been nine-tenths of Gold Coast exports at the start of the century. Britain took direct control again in 1843 to 1844, and a poll tax of one shilling was introduced in 1852 and abandoned in 1864. " + R + " [PROBABLE]"),
    A.p("The tax failed because only 8 per cent of its revenue went to schools and roads, the rest paying civil servants, so 92 per cent went elsewhere (our arithmetic). Arhin and Ki-Zerbo call the resistance the first of a purely social and national, non-ethnic character. In 1864 chiefs sent a list of grievances, and Aggrey of Cape Coast, advised by the lawyer Charles Bannerman, demanded a share of revenue and was deported. " + R + " [PROBABLE]"),
    A.p("The Fante Confederation grew from this. Chiefs and educated men such as James Africanus Horton met at Mankessim, and a constitution signed in November 1871 by thirty-one chiefs set up an elected king-president, an assembly and a supreme court, raised an army of 15000 and levied a tax. In 1872 it was amended to need British recognition, and the British repressed the intellectuals and divided the chiefs. The authors see it as a forerunner of the educated elite's role, and as the 'last gasp of protest' against creeping colonialism. " + R + " [CONTESTED]"),
    A.p("Asante's end was gradual. The Dutch sold their forts in 1872 and Asante invaded the coast. In 1874 General Wolseley took and burned Kumasi, and the Treaty of Fomena forced Asante to give up its rights on the Gold Coast. War with Dwaben in 1875 caused anarchy, and Prempeh was arrested by a ruse in 1896. From the death of MacCarthy in 1824 to the burning of Kumasi in 1874 is 50 years (our arithmetic). " + R + " [PROBABLE]"),
    A.p("They also quote the Asantehene, when the slave trade was abolished, as saying that he could not feed the 20000 captives on his hands and that 'unless I kill or sell them, they will grow strong and kill my people'. The quotation comes by way of Dupuis and Boahen, so it is [THIN EVIDENCE] of what Asante rulers said, but it shows why abolition was a shock inland. Missionaries came too: the Basel Mission by 1828 in the south-east, and Thomas Birch Freeman's Methodists, and Christaller's Twi grammar of 1875 and dictionary of 1881 remain standard. " + R + " [PROBABLE]"),
]
out["m5_checks"] = [
    A.case_chk5(
        "A website calls the Fante Confederation of 1871 'a tribal rebellion against British rule'.",
        "How does Arhin and Ki-Zerbo's chapter correct that?",
        "A constitutional project of chiefs and educated men",
        [
            "It was a pure Asante plot, because Kumasi drafted the Mankessim constitution",
            "It was a tribal war, because each chief fought for his own lineage alone",
            "It was a British scheme, because the governor wrote its articles of union",
            "It was an Elmina affair, because the Dutch were the only party who joined",
        ],
        "They describe an assembly, a king-president, a supreme court, a tax and an army drawn up by chiefs with educated advisers, and say the British repressed it. " + R,
    ),
    A.case_chk5(
        "A student writes: 'Asante ruled all of its tributaries in the same way, through Kumasi's commissioners.'",
        "What do Arhin and Ki-Zerbo suggest?",
        "They distinguish three types, though Wilks disputes it",
        [
            "That is right, because the chapter finds no difference between any provinces",
            "That is right, because Wilks confirmed the chapter's single model in 1975",
            "That is wrong, because Asante had no tributaries beyond the Pra river",
            "That is wrong, because the chapter shows only the coast was ever tributary",
        ],
        "They describe core, Akan and non-Akan categories, and note that Wilks rejects the classification and that economic and political motives mixed in all wars. " + R,
    ),
]

out["m4_section"] = [
    A.h("Mossi, Volta peoples and the Sahel, 1800 to 1890"),
    A.p("Arhin and Ki-Zerbo open with a verdict: political disintegration struck Asante, Kong and the Mossi and Bambara kingdoms, from internal strains and, increasingly, from changes in trade flows. They add that peoples migrated and that non-centralised groups were often the ones that survived best. " + R + " [PROBABLE]"),
    A.call("warn", "The lesson above says Dagomba was forced to send 2,000 prisoners a year to Kumasi from 1744, from volume V. Arhin and Ki-Zerbo date the yearly tribute of two thousand slaves 'especially after the 1794 treaty'. The two dates are fifty years apart (our arithmetic), so cite the source with the date and check the treaty in a third source. " + R + " {{gha5-volta}}"),
    A.p("The Mossi kingdoms were riven. Wagadugu and the newer Busuma kingdom fought a 'circular war' at the start of the century, and under Naaba Karfo (1842 to 1849) a powerful vassal and the Widi Naaba, a commoner minister, rebelled in a civil war. The Mogho Naaba Wobgho (1889 to 1897) hired Zamberma mercenaries, who looted their way across Mossi land, and in 1897 he fled the French while his vassal of Lalle was executed at Wagadugu. " + R + " [PROBABLE]"),
    A.p("Yatenga fell into dynastic war. Naaba Tuguri (1806 to 1822) was elected against the will of his brothers and rivals reigned in quick succession, hiring Samo archers and Fulbe horsemen. The sons of Tuguri and the sons of Sagha fought during Naaba Baogho's reign (1885 to 1894), which the authors call an ideal opening for French intervention. " + R + " [PROBABLE]"),
    A.p("West and south of the Mossi, lineage-based peoples, among them the Lobi, Birifor and Dagara, absorbed pressure better than states. A coalition of Bwaba, Ko and Gurunsi inflicted a 'resounding defeat' on the Zamberma in 1885, and Arhin and Ki-Zerbo call these 'village democracies' remarkably vital and under-stressed by historians. The states of Gwiriko and Kenedugu, offshoots of Kong, rose and fell, and Tieba of Kenedugu, once captured and sold as a slave, later withstood Samori's siege of Sikasso before being defeated in 1890. " + R + " [CONTESTED]"),
    A.p("In Liptako the Fulbe of Weedu rose against their Gulmanceba overlords after the Sokoto jihad, and Brahima Saidu Diandikko carried a standard from Sokoto and became amir. The rival Torodbe were given the right to choose the amir, which tied them into the system. Segu and Kaarta decayed: in 1854 to 1856 the tonjons, the freedmen soldiers, are said to have fired blank ammunition in a brothers' war and told the king they had had enough, a story that rests on a note citing Tauxier and is [THIN EVIDENCE]. " + R),
    A.p("The slave trade grew as the Atlantic trade was abolished. Weapons cost more slaves, and the Zamberma specialised in capture. Arhin and Ki-Zerbo report that Dori held 50000 free people and 50000 captives by the end of the century, and note that Barth, passing in 1853, said nothing about slaves, which they take to show a rise in the trade, an inference. In the Pura gold district men sold for 100000 cowries and women for double, and slave-dealers are said to have found slaves ninety times as profitable as gold. " + R + " [THIN EVIDENCE]"),
    A.p("Trade moved too. Kola routes shifted from the west through Kong and Buna to the north-east through Dagomba and Hausaland, and Salaga, in Gonja, boomed as the market linking Asante, Hausaland and the Volta. Dupuis is quoted as putting Salaga's population at 400000, twice Kumasi's, which cannot be tested and should not be repeated as fact. The authors also report that 99 per cent of people farmed, 'safely estimated' without statistics. " + R + " [THIN EVIDENCE]"),
    A.p("Social change followed. In Liptako the Fulbe became overlords over rimaibe serfs, artisans were forced into endogamy and the blacksmith, feared for his magic, mediated disputes. Among the Lobi, captive-origin 'Dea' were integrated into the clan, which suggests slavery could bind a lineage as well as exploit it. Islam spread even to the Bambara and Mossi, who were once called 'ramparts against Islam', and Naaba Dulugu built a mosque. " + R + " [CONTESTED]"),
    A.ex(
        "Worked example: how big were the 'captive' and 'free' populations of Dori (our arithmetic)",
        "Arhin and Ki-Zerbo say Dori held 50000 free people and 50000 captives by the end of the century.",
        "That is 100000 people in all, of whom half, or 50 per cent, were captives.",
        "The figures are round and come from an unnamed source. Use them as an order of magnitude, and contrast them with Barth's silence in 1853, which shows only that he did not mention slaves."
    ),
]
out["m4_checks"] = [
    A.case_chk5(
        "A student says: 'The Mossi and Bambara states were ramparts against Islam until the French arrived.'",
        "How do Arhin and Ki-Zerbo answer?",
        "Islam was strong in both by the nineteenth century",
        [
            "It is right, because they say no Mossi king ever built a mosque or took an imam",
            "It is right, because Segu's rulers expelled every marabout in 1800",
            "It is wrong, because they say both kingdoms had converted wholly by 1700",
            "It is wrong, because they say Islam only reached them with the French",
        ],
        "They say the cliche may once have held but not in the nineteenth century, when Islam was powerful at the top and through society in both, and cite Naaba Dulugu's mosque. " + R,
    ),
    A.case_chk5(
        "A guide says Salaga had 400000 people in the early 1800s because a visitor named Dupuis wrote it.",
        "What should a careful guide say?",
        "Dupuis gave the figure, which cannot be tested",
        [
            "Salaga had 400000 people, because Arhin and Ki-Zerbo confirm it with a census",
            "Salaga had exactly half Kumasi's population, because Dupuis reversed the figures",
            "Salaga had no people, because the market was only a seasonal fair",
            "Salaga had 100000 people, because the chapter divides the figure by four",
        ],
        "The chapter says Dupuis 'tells us' Salaga was twice Kumasi's size, a claim to attribute and tag as [THIN EVIDENCE]. " + R,
    ),
]
(HERE / "gha6_arhin_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
