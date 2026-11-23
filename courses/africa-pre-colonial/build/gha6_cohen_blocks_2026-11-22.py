"""Teaching blocks from UNESCO vol VI ch 11 (Cohen, Peoples and states of the Great Lakes region), read in full 22/11/2026. Module 6 lesson l4."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
C = "{{gha6-cohen}}"
out = {}

out["section"] = [
    A.h("The Great Lakes states as arenas of conflict, 1800 to 1880"),
    A.p("Cohen's chapter in UNESCO's volume VI begins with a story, not a king list. In the late eighteenth century Prince Kakungulu fled his father, the Ganda king Semakokiro, to the Mabira forest. Semakokiro had himself used the Mabira as a refuge, returned and overthrown his brother Junju. Kakungulu never won the throne, but his raids raised the turbulence around Buganda. Cohen uses this to argue that Lakes states were shaped by conflict from inside and out, not by tidy courts and capitals. " + C + " [PROBABLE]"),
    A.p("Cohen finds two nineteenth-century trends. Power became more centred in a few large states, and Buganda, Rwanda, Burundi and a revived Bunyoro grew at the expense of more than two hundred smaller domains. Their kings reigned longer. Kamanya ruled thirty to thirty-five years, Suna twenty and Mutesa twenty-eight, where eleven kabakas had ruled in the eighteenth century and many were murdered or removed. " + C + " [PROBABLE]"),
    A.table(
        "Long reigns in the nineteenth-century Lakes states, on Cohen's account",
        ["State", "Rulers named", "Length of reign"],
        [
            ["Buganda", "Kamanya, Suna, Mutesa", "30 to 35, 20 and 28 years"],
            ["Rwanda", "Yuhi Gahindiro, Mutara Rwogera, Kigeri Rwabugiri", "More than 30, about 30 and nearly 40 years, to 1895"],
            ["Burundi", "Ntare II Rugamba, Mwezi II Gisabo", "Only two rulers; Gisabo from mid-century to 1908"],
            ["Bunyoro", "Kabarega", "From about 1870 to his removal in 1899"],
        ],
        C,
    ),
    A.p("Cohen reads long reigns as a cause as well as an effect. Time let rulers build networks of marriage, service and clientage, routinise rewards and open new land. Stability gave people away from the court reasons to take part in the state instead of opposing it. Legitimacy, he argues, was built section by section over time and not simply conferred by an accession ritual. " + C + " [CONTESTED]"),
    A.p("The business of the state was extraction. Buganda's governmental farms provisioned courts and the kabaka's palace, and in Rwanda, Nkore, Karagwe and Burundi the royal herds fed the lords. From central Busoga Buganda took dried bananas and meal, and Cohen calls the extra output 'defensive surpluses': producers made far more than they ate because the state could seize any withheld store. He suggests this explains travellers' impressions of unending abundance. " + C + " [CONTESTED]"),
    A.p("Further out extraction became raiding. An army from Buganda camped in Busoga for several months and dismantled much of its production, which Cohen says would take many years to recover. By the 1860s areas north of Buganda's transit route were abandoned. Rwanda sent similar expeditions towards Lake Kivu. People resisted, and in 1875 H. M. Stanley witnessed the failure of a Buganda campaign against the Buvuma Islands. " + C + " [PROBABLE]"),
    A.p("Markets mattered too. Cohen names three overlapping trade circuits: an eastern lake circuit round Lake Victoria, a Bunyoro-Kyoga circuit, and a Kivu circuit in which woven bracelets from Butembo, the butega, worked as a currency by the second half of the century. Bukerebe, an island state, raised output with maize and cassava and supplied famine-hit mainland neighbours, before Swahili and Arab traders based at Unyamwezi displaced it. " + C + " [PROBABLE]"),
    A.p("His boldest contrast is between Bunyoro and Buganda. Bunyoro, he says, was integrated into regional markets in salt, iron and food, and taxed their flow without destroying it, while Buganda sought military solutions to shortages and sold ivory and slaves for guns on the coast route. This disagrees with older accounts of Bunyoro as a warfare state. In the last decade of the century Buganda used the coast system to cut Bunyoro off from it. " + C + " [CONTESTED]"),
    A.p("Cohen is open about his evidence. He notes the 'disappointingly small' amount of work on precolonial economic history, and he often writes 'might postulate' and 'may have'. His account of Langi sesame surpluses traded for Bunyoro iron hoes is reasoned from a careful study but remains a conjecture about motives. Tag such passages [THIN EVIDENCE] when you repeat them. " + C + " [THIN EVIDENCE]"),
    A.p("The last part is about everyday life. In Busoga thousands of stories tell of families moving from state to state, which Cohen calls 'opportunity-seeking', and which undermined courts. Religion offered another refuge: the Nyabingi movement, led by followers of a female spirit, resisted Rwanda's northward expansion and later colonial rule. He concludes that for many people the Lakes state showed 'more of its extractive than its protective face'. " + C + " [CONTESTED]"),
    A.ex(
        "Worked example: how much longer did nineteenth-century kings reign (our arithmetic)",
        "Cohen says eleven kabakas ruled Buganda in the eighteenth century, and that Kamanya, Suna and Mutesa ruled about 30 to 35, 20 and 28 years.",
        "Eleven rulers in 100 years is an average of about 9 years each. The three nineteenth-century kabakas together ruled 78 to 83 years, so they averaged about 26 to 28 years each.",
        "Mutesa's 28 years fits the lesson's dates, 1856 to 1884. The average tells you about the pattern, not about any single king, since some eighteenth-century reigns were long and some short."
    ),
]
out["checks"] = [
    A.case_chk5(
        "A travel book of 1890 says Buganda's villages were wonderfully rich, with food produced in unending abundance by contented farmers.",
        "How does Cohen suggest reading that impression?",
        "Output was inflated by tribute demands",
        [
            "As proof the farmers were free, because abundance shows a state that took nothing",
            "As false, because Cohen says the region never produced a food surplus at all",
            "As a Bunyoro invention, because Buganda traded no food with its neighbours",
            "As a ruse by the missionaries, because Cohen says the books were all forged",
        ],
        "He says surpluses were 'defensive': producers made far more than they ate because the tribute-taking state would seize any store held back. " + C,
    ),
    A.case_chk5(
        "A student writes: 'Cohen proves the Langi planned their sesame surplus in order to dominate the iron trade with Bunyoro.'",
        "What is the best correction?",
        "He postulates this, as an interpretation",
        [
            "None, because he cites the Langi chiefs' own written plans for the trade",
            "None, because the chapter dates the Langi plan to a treaty of 1850",
            "The Langi were Buganda's tribute-payers, so no surplus was ever traded",
            "The sesame trade was Swahili-run, so the Langi had no part in it",
        ],
        "The chapter says 'one might postulate' motives; the pattern of surplus is based on careful study but the aims behind it are inferred. " + C,
    ),
]
(HERE / "gha6_cohen_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
