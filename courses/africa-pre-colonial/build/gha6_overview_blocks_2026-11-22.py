"""Builds the teaching blocks from the volume VI overview chapters (Ajayi, Wallerstein, Boahen; reading of 22/11/2026)
for module 8, lesson 6. Checks use author.case_chk5. Apply with gha6_overview_apply_2026-11-22.js."""
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402

AJ = "{{gha6-ajayi}}"
WA = "{{gha6-wallerstein}}"
BO = "{{gha6-boahen}}"
out = {}

out["section"] = [
    A.h("Three readings of the century before partition"),
    A.p("Historians in UNESCO's volume VI disagree about what drove African change before the 1880s. Set their readings side by side before you choose one. [CONTESTED]"),
    A.table(
        "Three readings of Africa in the nineteenth century",
        ["Reading", "Main claim", "How to test it"],
        [
            ["Ajayi", "Continuity with the eighteenth century and change from inside far outweighed outside pressure; he calls the century an 'African Age of Improvement' " + AJ, "Do the Mfecane, Egypt under Muhammad Ali and the jihads have causes that predate European trade?"],
            ["Wallerstein", "From about 1750 northern, western and southern Africa were drawn into the world economy, and partition completed that process " + WA, "Do production, labour and prices change in the ways he lists, and is the date of 1750 defensible?"],
            ["Boahen", "A century of new trends in people, religion, politics and trade, ending in a tragedy of conquest because technology and processing did not change " + BO, "Is his claim that conquest ended healthy trends a fact or a counterfactual?"],
        ],
        "",
    ),
    A.p("Ajayi cautions that Dike's dictum that African history is largely the history of trade with Europe is an exaggeration, and that the Mfecane, Muhammad Ali's reforms and the jihads started inside Africa. " + AJ + " Wallerstein replies that these events cluster in the same years because Africa was being drawn into a wider economy. " + WA + " Both readings use the same evidence, so name which one you are following. [CONTESTED]"),
    A.p("Both Wallerstein and Boahen reject the label 'legitimate commerce' as Eurocentric. Chamberlin, cited by Wallerstein, points out that the switch from slave to other exports began before 1807 and went on after it, and Coquery-Vidrovitch and Moniot add that for Africans the two trades were complementary until the 1860s. " + WA + " " + BO + " [PROBABLE]"),
    A.p("Some numbers from the same chapters, each from a secondary summary. Estates in Egypt grew from about 10 per cent of arable land in 1818 to about 45 per cent by 1844, which is about 4.5 times (our arithmetic). Cotton-goods imports into West Africa rose fifty-fold between 1815 and 1850, and seven times more by 1891. " + WA + " The palm-oil boom is dated to end in 1861 by the sources Wallerstein cites. " + WA + " [PROBABLE]"),
    A.p("Who gained from the new trade is argued too. Munro, cited by Wallerstein, says gathering, carrying and storing palm oil and groundnuts took more labour than the slave trade, and the shift favoured private over royal merchants. " + WA + " Boahen argues that income moved from the kings and their soldiers, who monopolised the slave trade, to ordinary people who gathered the new crops, though he adds that the means of production and processing did not change. " + BO + " [CONTESTED]"),
    A.p("On population, the usual figure of 100 million for Africa about 1800 is partly arbitrary, projected back from data after 1950. Ajayi holds that numbers fell in the seventeenth and eighteenth centuries because of the slave trade and its wars, rose from the early nineteenth century and rose faster from 1850 to 1880, while the internal slave trade grew. " + AJ + " [CONTESTED]"),
    A.p("Boahen counts new schools and new elites. Missionary societies working in West Africa rose from three in 1800 to more than fifteen by 1840, and the Lovedale institution in the Cape taught 3,448 African students between 1841 and 1896, over 700 of them in professional work, which is about one in five (our arithmetic). " + BO + " He names educated writers such as James Africanus Horton (1835 to 1883) and Edward Wilmot Blyden, and the first African-led breakaway church in South Africa in 1884. " + BO + " [PROBABLE]"),
    A.p("A close reading finds a slip. Boahen dates the constitution of the Fante Confederation to 1874 and says in the same passage that the British had ended the initiative by 1873, so the two dates cannot both be right. " + BO + " Check such dates against a second source before you repeat them (our check). [PROBABLE]"),
    A.p("Boahen's closing claim, that without colonial rule the trends towards centralisation, schools and reform would have continued, is a counterfactual and not a finding. " + BO + " Use it as an argument to weigh. [CONTESTED]"),
]
out["checks"] = [
    A.case_chk5(
        "A teacher says: 'Africa only changed in the nineteenth century because of European trade.' A student answers with Ajayi's chapter in UNESCO's volume VI.",
        "Which reply is best supported by that chapter?",
        "The Mfecane, Egypt's reforms and the jihads began inside Africa",
        [
            "Trade had no effect, because every nineteenth-century change began inside Africa alone",
            "Ajayi proves the teacher right, because the chapter lists trade as the only cause",
            "The Mfecane was caused by the Cape Colony alone, so only outside pressure counts",
            "Population was falling throughout the century, so no change could have begun inside",
        ],
        "Ajayi argues the major events of the early century had internal origins while accepting that European trade mattered; he warns against the 'trade and politics' dictum as an exaggeration. " + AJ,
    ),
    A.case_chk5(
        "A website says Africa moved from the slave trade to 'legitimate commerce' in 1807, when Britain banned the trade.",
        "What do Wallerstein and Boahen suggest is wrong with that sentence?",
        "It began before 1807, ran after it, and the label is Eurocentric",
        [
            "The shift happened in 1807 exactly, but the label 'legitimate' is the website's mistake",
            "The shift never happened, because Africans kept exporting people until the 1880s",
            "The shift ended the internal slave trade at once, so the website's date is too late",
            "The shift was caused by Africans alone, so Britain's ban of 1807 had no part at all",
        ],
        "Chamberlin's point, cited by Wallerstein, is that the changeover pre-dated and post-dated the British measure of 1807, and Boahen calls the term typically Eurocentric. " + WA,
    ),
]

(HERE / "gha6_overview_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("blocks written:", ", ".join(out))
