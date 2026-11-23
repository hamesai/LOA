"""Teaching blocks from UNESCO vol VI ch 28 (Knight, with Talib and Curtin: The African diaspora), read in full 22/11/2026. Module 8 lesson l5."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
K = "{{gha6-knight}}"
out = {}

out["section"] = [
    A.h("The diaspora in volume VI: numbers, populations and return"),
    A.p("Knight's chapter in UNESCO's volume VI, with Talib on Asia and Curtin on Europe, treats the diaspora in three arenas. The eastern one, into the Middle East and Asia, is the oldest and, he writes, fed in 'probably not exceeding several hundreds per year' to the Mediterranean world, where plantations were few. Africans served as soldiers, eunuchs and rulers, as did Abu'l-Misk Kafur of Egypt (died 968), and some 5000 African soldiers served Sultan Bahadur of Gujarat in the 1520s and 1530s. " + K + " [PROBABLE]"),
    A.p("In the nineteenth century East Africa was the main source for Asia, with Muscat the greatest clearing house for the Gulf, Persia, Iraq and India. Ethiopian children aged 8 to 16 were shipped from Red Sea ports to Jeddah and Mocha, and Malagasy 'Kafirs' were taken to Bombay, Madras and Sumatra. West African pilgrims to Mecca, sometimes selling a slave along the way, formed small communities of poor porters and sweepers. " + K + " [PROBABLE]"),
    A.p("Knight denies that Africans were widely assimilated in Asia. He cites traits of a 'closed mode of slavery', and groups such as the Akhdam of south-western Arabia who did work seen as polluting. A traveller of the period, Doughty, described slaves as adopted and content, which Knight calls a propaganda line against records of cruelty, escape and revolt. Weigh such accounts by who wrote them. " + K + " [CONTESTED]"),
    A.p("In Europe, Seville had about 5000 black people in the early sixteenth century, and by the late eighteenth century France had about 2000 and England nearly 15000. France banned mixed marriages in 1777, and Lord Mansfield ruled in 1772 that an African could not be enslaved in England. Curtin adds that before the 1840s far more people of tropical African descent lived in Europe than Europeans in tropical Africa. The community was overwhelmingly male, so it had to be replenished from overseas. " + K + " [PROBABLE]"),
    A.p("In the Americas Knight puts the Afro-American population at about 8.5 million around 1800, of whom more than 2 million, nearly 25 per cent, lived in the USA. About 2 million lived in the Antilles in 1810, Brazil had 2.5 million and Haiti about 450000. Its main argument is that populations did not track imports: slave numbers in Latin America and the Caribbean fell by 2 to 4 per cent a year, and the USA was the exception. " + K + " [PROBABLE]"),
    A.table(
        "Slave imports, 1700 to 1810, as given in Knight's Table 28.1",
        ["Region", "Share of all Africans", "Approximate number"],
        [
            ["Brazil", "31.3 per cent", "1800000"],
            ["British Caribbean", "23.2 per cent", "1400000"],
            ["French Antilles", "22.3 per cent", "1300000"],
            ["Spanish America", "9.6 per cent", "600000"],
            ["Dutch and Danish Antilles", "8.0 per cent in the table", "450000"],
            ["British North America (USA)", "5.8 per cent", "350000"],
        ],
        K,
    ),
    A.call("warn", "The chapter contradicts itself in places. Its text gives the Dutch and Danish Antilles 5.8 per cent while the table says 8.0, and 450000 of a total of 5900000 is about 7.6 per cent (our arithmetic). It says the Caribbean took 36 per cent of the whole trade in one place and 43 per cent in another, and it gives 3 million Afro-Americans in the Caribbean in 1886 in the text but 2.2 million in the table. Module 8 also gives Paul Cuffee's voyage as 1814, whereas Knight says repatriation began 'after 1815'. Check any figure in a second source. " + K),
    A.ex(
        "Worked example: imports against populations (our arithmetic)",
        "Knight's Table 28.2: Brazil imported 4.0 million (38 per cent of the trade) and had 4.0 million Afro-Americans in 1890. The Caribbean imported 5.0 million (43 per cent) and had 2.2 million in 1886. The USA imported 0.5 million (4.5 per cent) and had 4.5 million in 1865.",
        "The Caribbean's 1886 population was 2.2 divided by 5.0, or 44 per cent of its imports. The USA's 1865 population was 4.5 divided by 0.5, or nine times its imports. Brazil's was about equal.",
        "The contrast shows why raw import totals mislead about the population that followed, and Knight blames the high death rate and low birth rate of plantation slavery in the Caribbean and Latin America."
    ),
    A.p("Knight describes a range of conditions: the USA's rigid black and white line, a three-tier order of black, mixed and white elsewhere, and more mobility in towns and in coffee and cattle areas than on sugar plantations. About 20 per cent of the enslaved worked as sailors, artisans, vendors and so on. Marronage was 'an eloquent and visible condemnation' of slavery, as at Palmares in Brazil, which lasted almost a century, and at Esmeraldas and in Jamaica. " + K + " [PROBABLE]"),
    A.p("He also lists achievements and reversals. Haiti's African cultural revival, and the Cuban wars of 1868 to 1898 that made Antonio Maceo and Maximo Gomez heroes, stand beside racial war in Cuba in 1912. Black colleges such as Virginia Union (1864), Atlanta and Fisk (1865), and Hampton and Howard (1867) were founded, and he credits inventors such as Norbert Rilleux, with the vacuum evaporation pan of 1846. These claims are attributed to him and each would need its own source. " + K + " [CONTESTED]"),
    A.p("Return to Africa was small. Paul Cuffe took 38 settlers in 1815 or soon after, Liberia grew under the American Colonization Society from 1830, and by 1860 only about 15000 had gone, fewer than 2000 after the Civil War. Basel Mission recruits from Jamaica in 1843 were another stream. Knight says the descendants who returned numbered only a few thousand, and that the Pan-African Association of 1897 and Garvey's movement kept the link alive. " + K + " [PROBABLE]"),
]
out["checks"] = [
    A.case_chk5(
        "A student says the USA received most of the Africans carried across the Atlantic because it had the largest Afro-American population in 1865.",
        "How does Knight's Table 28.2 correct this?",
        "The USA took about 5 per cent but grew fastest",
        [
            "It is right, because the table shows the USA importing more than Brazil did",
            "It is right, because the table shows the USA importing nine million people",
            "It is wrong, because the table shows the USA with no Afro-American population",
            "It is wrong, because the table shows Brazil's population far above its imports",
        ],
        "The table gives the USA 4.5 per cent of imports and about 4.5 million Afro-Americans in 1865, nine times its imports, unlike the Caribbean, where numbers fell. " + K,
    ),
    A.case_chk5(
        "An essay copies the Dutch and Danish share of the Atlantic trade as 5.8 per cent from Knight's text and then as 8.0 per cent from his table.",
        "What should the essay do?",
        "Note the clash and test it by arithmetic",
        [
            "Use 5.8 per cent because text is always more reliable than a table",
            "Use 8.0 per cent because a table can never contain a misprint",
            "Average the two and write 6.9 per cent without further comment",
            "Drop the region because two figures from one author cannot be reconciled",
        ],
        "450000 of 5.9 million is about 7.6 per cent (our arithmetic), nearer the table, and the essay should say the chapter is inconsistent. " + K,
    ),
]
(HERE / "gha6_knight_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
