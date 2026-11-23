"""Teaching blocks from UNESCO vol VI ch 29 (Ajayi, Conclusion: Africa on the eve of the European conquest), read in full 22/11/2026. Module 8 lesson l6."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
C = "{{gha6-conclusion}}"
out = {}

out["section"] = [
    A.h("Ajayi's conclusion: reform, guns and the legacy of wars"),
    A.p("Ajayi's closing chapter of UNESCO's volume VI argues that the decade 1875 to 1885 ended a century in which African leaders were trying to strengthen their states, and that European activity 'systematically' undermined these efforts. He says historians who assumed colonialism and the world economy were conditions of modernisation have missed how far the century was an African effort at self-development. That is his thesis, and the whole volume does not agree on it. " + C + " [CONTESTED]"),
    A.p("He lists the reforms. Rulers centralised power, built officials dependent on themselves and kept standing forces, as in Asante, Dahomey and Buganda, while Benin was allowed only to contract. The Mfecane spread the northern Nguni model of the age-regiment army. Tewodros and Yohannes tried to revive an ancient empire, the khedives of Egypt to build a modern one, the jihad states to found Islamic theocracies, and Madagascar and the Fante to use literate officials and written law. Ajayi rejects reading all this as an 'African Scramble' that provoked the European one, since the search for stable structures was older. " + C + " [PROBABLE]"),
    A.p("Armies changed. Before the middle of the century muskets made 'little difference', as disciplined cavalry or spearmen could rush musketeers before they reloaded. The major change was the professional warrior, often an entrepreneur with a private following, and the king as war leader on Shaka's model. By the 1870s breechloaders, repeaters and artillery were imported, and Europeans kept the Maxim gun to themselves. Ajayi argues that the decisive edge was guns, not generalship. " + C + " [PROBABLE]"),
    A.p("Social change followed. Slaveholding rose in the third quarter of the century, with slave shares estimated at 25 to 50 per cent of the population in many parts, and in the Gold Coast a pawn system of 'hostages' for debt grew to rival slavery by the 1870s. Slaves rarely formed a distinct class. Old Calabar, where they were kept apart, was the exception. Ajayi sees tension in households and between lineages as the main social dynamic, and not class conflict. " + C + " [CONTESTED]"),
    A.p("The balance shifted from 1870. Germany and Italy were unified, Germany beat France in 1870 to 1871, and France turned to empire, crushing the Kabylia revolt and seizing land for settlers. Diamonds were found in 1869 to 1870. Europeans used 'free trade' as a slogan to attack rulers' right to regulate trade, pushed loans, and imposed debt commissions on Egypt and Tunisia that led to loss of independence 'with little or no fighting'. France claimed Tunisia in 1878 and Britain took Egypt in 1882. " + C + " [PROBABLE]"),
    A.p("European forces were not huge. France used as many as 110000 troops in Algeria up to 1871. Britain sent about 12000, mostly Indian, to Ethiopia in 1868 but only 2500 British troops under Wolseley against Asante, which is about one fifth of the Ethiopian force (our arithmetic). Afterwards the powers recruited emancipated slaves. Ajayi stresses that the confidence of European officers came from knowing that they might lose a battle but would win the war while their arms were superior. " + C + " [PROBABLE]"),
    A.p("The argument closes on diplomacy. The Berlin Conference of 1885 and the Brussels Act of 1889 treated Africa as terra nullius, limited arms supplies to Africans in the name of anti-slavery, and exempted self-governing settlers in South Africa. African leaders, he says, thought they could play one European power against another, did not forge any common front, and were slowed by what he calls the legacy of wars: wars that had become more total, and in which state power counted for more than ethnicity. " + C + " [CONTESTED]"),
    A.ex(
        "Worked example: European troops in 1868 and 1874 (our arithmetic)",
        "Ajayi says Britain used as many as 12000 troops, mostly Indian, in Ethiopia in 1868 and 2500 British troops under Wolseley against Asante in 1874.",
        "12000 divided by 2500 is 4.8, so the Ethiopian force was nearly five times the Asante one. The Asante force of 2500 is about 21 per cent of the Ethiopian one.",
        "The numbers show Europe was cautious about large forces, and the second campaign rested on better rifles and on African allies, which is Ajayi's point about arms."
    ),
]
out["checks"] = [
    A.case_chk5(
        "A student writes: 'In the 1870s African rulers launched their own Scramble for Africa, which explains why Europeans partitioned the continent.'",
        "How does Ajayi's conclusion respond?",
        "Reform was long-running, not a sudden scramble",
        [
            "It agrees, because he calls the 1870s the start of African state-building",
            "It agrees, because he says African rulers invited the Berlin Conference",
            "It rejects it, because he says African states made no effort to reform at all",
            "It rejects it, because he says only Europeans ever sought stronger states",
        ],
        "He says the search for more stable structures had gone on throughout the century and before, with at most a quickening of pace, and was not comparable to the European Scramble. " + C,
    ),
    A.case_chk5(
        "A textbook says the Brussels Act of 1889 was simply a humanitarian measure against the slave trade.",
        "What does Ajayi add?",
        "It limited arms to Africans, exempting settlers",
        [
            "That it freed every slave in Africa at once, so no further factor was needed",
            "That it was written by African rulers, who had asked Europe to ban guns",
            "That it ended the Berlin Conference's free trade rule, so no arms moved at all",
            "That it applied only to Egypt, which was the one state with an arms trade",
        ],
        "He argues that linking arms limits to anti-slavery let the British exempt settlers in South Africa and treat African states as unrecognised in international law. " + C,
    ),
]
(HERE / "gha6_conclusion_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
