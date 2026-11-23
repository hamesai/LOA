"""Teaching blocks from UNESCO vol VI ch 26 (Asiwaju, Dahomey, Yorubaland, Borgu and Benin in the nineteenth century), read in full 22/11/2026. Module 5 lesson l5."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
S = "{{gha6-asiwaju}}"
out = {}

out["section"] = [
    A.h("After Old Oyo: the Mono-Niger wars, 1800 to 1897"),
    A.p("Asiwaju's chapter in UNESCO's volume VI treats the lands between the Mono and the Niger as one region, where four culture areas, the Aja, the Yoruba, the Borgu and the Edo, interpenetrated through migration and shared origin traditions. The region includes a 'gap' where the savanna runs through the forest to the sea, which is where Oyo's cavalry could operate. Borgu was ruled in Boko, a Mande language, while the masses spoke Baatonu, a Voltaic one, and bilingualism joined them. " + S + " [PROBABLE]"),
    A.p("About 1800 Old Oyo drew tribute from the western half of the region. Dahomey had been tributary since 1748, after Oyo attacks from about 1740, until the early 1820s, which is about 75 years (our arithmetic). Oyo posted officials, the ajele, at Ilaro and Ijanna on the road to Porto-Novo, its slave port. The signs of decline came early: an Egba rebellion under Lisabi about 1774, defeats by Borgu in 1783 and Nupe in 1791, and short-lived alafins ending in an interregnum of nearly two decades. " + S + " [PROBABLE]"),
    A.p("Afonja, the army commander, revolted at Ilorin with Muslim support, and the Fulbe teacher Alimi took control of his force, the Djama'a. Alimi's son Abdul Salaam became Ilorin's first emir with Sokoto's blessing, turning it into a frontier post of the jihad. Asiwaju dates Oyo's collapse about 1835, 61 years after the Egba revolt (our arithmetic), and says the caliphate's push south was stopped at Osogbo in 1840, after the Eleduwe War of 1836. " + S + " [PROBABLE]"),
    A.p("The Yoruba then fought one another. The Owu War of about 1820 to 1825 led to the founding of Ibadan about 1829 as a victors' camp and Abeokuta about 1830 as an Egba refuge, while Alafin Atiba rebuilt Oyo at Agbo-Oja. The Ijaye War of 1860 to 1865 saw Ijaye destroyed in 1862, and the Ekitiparapo or Kiriji War of 1877 to 1893 lasted 16 years (our arithmetic). Ruined cities, Asiwaju says, struck every traveller. " + S + " [PROBABLE]"),
    A.p("Dahomey's independence under Gezo (1818 to 1858) came in the early 1820s. The story that an Oyo army under Balogun Ajanaku was routed by Dahomey is, Asiwaju argues, a simplification: Oyo was too weak, and the force was more probably a joint Sabe and Ketu one, with Fon traditions saying Ajanaku came from Sabe. Gezo captured and executed him. Treat the older version as [CONTESTED]. " + S),
    A.p("After that, Dahomey raided Yorubaland almost yearly. It razed the Egbado towns of Ijanna in 1831 and Refurefu in 1836, attacked Abeokuta unsuccessfully in 1851 and 1864, and finally destroyed Ketu in 1886. Asiwaju stresses these were not simply ethnic wars: Dahomey also invaded Aja communities and Porto-Novo, its Aja neighbour, in the late 1880s. The French conquered Dahomey in 1892. " + S + " [PROBABLE]"),
    A.p("Wars moved people. Towns such as Oyo itself, Igboho and Ketu were destroyed, new ones such as Ibadan and Abeokuta grew, and the thinly settled coast filled with people. The Oyo diaspora explains Sango worship, the men's loom and shoulder-sling drums in eastern Yorubaland, which should not be read, Asiwaju says, as evidence of Oyo rule before 1800. Warrior baloguns displaced the obas, and towns tried new constitutions: military dictatorship at Ijaye under Kurumi, federalism in Abeokuta under Sodeke and constitutional monarchy at Epe under Kosoko. " + S + " [CONTESTED]"),
    A.p("Benin was spared Oyo's collapse but shrank. The Fulbe jihad pushed in from Nupe and Ilorin, forcing the Esan to pay tribute to the emir of Bida, Ibadan's expansion cut into eastern Yorubaland, and the coastal trade went to the Itsekiri, the Ijo and British merchants while Ughoton declined. The Olu of Warri's stool had no accepted heir from 1848. Some scholars read the rise in human sacrifice from the late 1880s as desperation before collapse, an interpretation, and Oba Ovonramwen faced opposition from his brother and chiefs. " + S + " [CONTESTED]"),
    A.p("Europe came in two phases. John Beecroft became British consul for the Bights in 1849, Lagos was bombarded in 1851 and annexed in 1861, and France declared a protectorate over Porto-Novo in 1863, with the Anglo-French convention of August 1863 setting a boundary at the Yewa. The rulers of western Yorubaland welcomed intervention as protection from Dahomey. The conquest of Dahomey in 1892, the partition of Borgu in 1895 and the capture of Benin in 1897 were, Asiwaju argues, the logical end of this rivalry. " + S + " [PROBABLE]"),
    A.p("Dahomey kept exporting slaves from Whydah until Brazil abolished slavery in 1888, though the British squadron had ended the trade off Porto-Novo by 1851. Gezo, persuaded by the French firm Victor Regis, built a palm-oil economy, and captives became labour and carriers. The returnees, the Saros from Sierra Leone and the Brazilians from Bahia, formed a first middle class, such as Bishop Samuel Ajayi Crowther and James Johnson. " + S + " [PROBABLE]"),
    A.ex(
        "Worked example: three intervals in Asiwaju's chronology (our arithmetic)",
        "Asiwaju gives the Egba revolt about 1774, the collapse of Oyo about 1835, and the Kiriji war as 1877 to 1893. He gives Dahomey as tributary from 1748 to the early 1820s.",
        "From 1774 to 1835 is 61 years. The Kiriji war covered 1893 minus 1877, which is 16 years. Tribute from 1748 to about 1823 is about 75 years.",
        "The first and third intervals use 'about' dates, so state them as approximate: the collapse of Oyo was a slow process, not an event."
    ),
]
out["checks"] = [
    A.case_chk5(
        "A website says: 'In the early 1820s the great Oyo army under Ajanaku marched on Dahomey and was routed by King Gezo.'",
        "How does Asiwaju's chapter qualify that?",
        "The force was more probably Sabe-Ketu, not Oyo's",
        [
            "It is exact, because Oyo's imperial army was at its strongest in the 1820s",
            "It is exact, because Fon traditions say Ajanaku was Alafin of Old Oyo",
            "It is wrong, because Gezo was not yet king and had no army to rout",
            "It is wrong, because Ajanaku was a Dahomey general who fought Oyo for Gezo",
        ],
        "He says Oyo was in no position to send a worthwhile army, that research suggests a joint Sabe and Ketu force, and that Fon traditions make Ajanaku a man of Sabe. " + S,
    ),
    A.case_chk5(
        "A student reads that the Sango cult and the men's loom are common in eastern Yorubaland and concludes that Oyo ruled there before 1800.",
        "What does Asiwaju suggest?",
        "The Oyo diaspora after the collapse may explain them",
        [
            "That they prove Oyo ruled the east, because customs only follow conquest",
            "That they are Benin imports, because Benin founded the Sango cult",
            "That they are recent European gifts, because missionaries introduced looms",
            "That they date from Ife, because only Ife kings can create such customs",
        ],
        "He says these influences should be read less as pre-1800 hegemony than as the result of the nineteenth-century Oyo diaspora. " + S,
    ),
    A.case_chk5(
        "A textbook says Dahomey's wars on its neighbours were wars of the Fon against the Yoruba.",
        "What does Asiwaju add?",
        "Dahomey also attacked fellow Aja states",
        [
            "Nothing, because he says every Dahomey war was fought against Yoruba",
            "That Dahomey fought only the French, because it never raided its neighbours",
            "That Dahomey was the victim, because it never invaded any other state",
            "That Dahomey fought only Borgu, because Yorubaland was out of reach",
        ],
        "He notes invasions of Aja communities and a late war with Porto-Novo after an earlier accord, so the wars were not simply inter-ethnic. " + S,
    ),
]
(HERE / "gha6_asiwaju_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
