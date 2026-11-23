"""Teaching blocks from UNESCO vol VI ch 24 (Person, States and peoples of Senegambia and Upper Guinea), read in full 22/11/2026. Module 4 lesson l6."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
Y = "{{gha6-person}}"
out = {}

out["section"] = [
    A.h("Senegambia and Upper Guinea after 1800: gum, groundnuts and Samori"),
    A.p("Yves Person's chapter in UNESCO's volume VI starts from a change in what the coast sold. The slave trade from Senegambia had been declining since the 1760s, and by the 1830s the yearly value of gum exports was more than five times the value of slave exports at their peak. Groundnuts were spreading from about 1850. Income moved from the old slave-trading aristocracy to new producers, and peasants converted to Islam in large numbers, partly in protest at rulers who raided them. " + Y + " [PROBABLE]"),
    A.p("Wolof politics show the strain. The Damel of Kayor beat the Almami of Futa Toro in 1786 and restored the aristocracy, while the masses turned to Islam. In 1830 a blacksmith, Diile of Kayor, led the Muslim opposition and took the whole country in a few weeks, until the French governor of Saint-Louis intervened and had him hanged. Faidherbe annexed Waalo in 1855, the French took Dakar in 1857, and Lat Dior, elected in 1862, drifted from resistance to Tijani Islam. " + Y + " [PROBABLE]"),
    A.p("Lat Dior returned as Damel, agreed in principle in 1879 to a Dakar to Saint-Louis railway, then banned it in 1881, 'preferring hopeless resistance to submission'. He died in 1886 after a guerrilla war, which is 24 years after his election in 1862 (our arithmetic). His relative Albury Njay in Jolof held out until 1890, then joined Ahmadu of Segu and met his death about 1900 near Sokoto. " + Y + " [PROBABLE]"),
    A.p("In Salum and Baadibu the marabout Maba Jaaxu overthrew the old order after 1862 with the backing of Lat Dior and took Bawol and Jolof by 1865. In July 1867 he invaded Siin, a purely Sereer country without Muslims, and met 'a real national resistance' that defeated and killed him. Person's point is that a jihad could win against divided aristocracies but not against a united, non-Muslim people. " + Y + " [PROBABLE]"),
    A.p("Futa Jallon came to a compromise in 1799. The Alfaya and Soriya parties would each name an almami, and the two would rule at Timbo in turn, changing every two years. The rule limited the violence of civil war and did not end it. At least three-quarters of the population were subjects, many of them enslaved or of Jallonke origin, while Labe expanded between 1810 and 1820 to the upper Gambia, a campaign Person says meant 'actual genocide' for some traditionalist groups. " + Y + " [CONTESTED]"),
    A.p("The Hubbu revolt that began in 1849 was a puritan Qadiriyya movement of marginal Fulbe, serfs and outcasts under Modi Mamadu Jue. They twice burned Timbo, an almami died trying to take their fortress of Boketto in 1871, and the Fulbe finally appealed to Samori, who helped crush the Hubbu in 1884. Person calls his reading of this movement a hypothesis. Kaabu, the old Mandinka empire, fell to Futa Jallon at Kansala in 1867. " + Y + " [PROBABLE]"),
    A.call("warn", "Person dates the invention of the Vai script to about 1818, and adds that how it happened is 'not clear'. Module 1 of this course, following an earlier source, gives about 1833. The two dates are fifteen years apart (our arithmetic), so cite the source with the date. " + Y),
    A.p("On the Rivers coast, Mandinka and Fulbe lineages became political leaders and were absorbed linguistically, and the Poro initiation societies cut across the area. The Kru, forest farmers and seamen, supplied 'Krumen' as sailors and labourers from the 1780s, and in 1871 the Grebo, copying the Fante Confederation, set up a 'Kingdom of the Grebo' that Liberia could not reduce until 1910. " + Y + " [PROBABLE]"),
    A.p("Samori Ture, the most important figure of the interior, was born about 1830. His family were Muslim pedlars who had reverted to traditional practice, so he counted more traditionalist peasants than Muslim traders among his ancestors. He became a soldier in 1848 to free his mother, was left 'alone and hunted' in 1861, took Bissandugu as his capital in 1871 and by 1881 ruled the upper Niger, with a rule modelled in part on the Tukuloor empire. " + Y + " [PROBABLE]"),
    A.p("Person reads Samori as the peak of a 'Joola revolution': Muslim trading minorities, who had grown with the routes to the coast, would no longer accept their place in a traditionalist society. Samori, he says, opened trade routes and freed the Joola Muslims 'without enslaving the traditionalists'. He took the title faama about 1868 and became almami only in 1884, and Person says the empire in 1880 to 1881 'could not be regarded as a Muslim state'. This is his interpretation. " + Y + " [CONTESTED]"),
    A.ex(
        "Worked example: the time scales of Samori's rise (our arithmetic)",
        "Person gives 1861 as the year Samori was alone, 1871 as the founding of Bissandugu, 1881 as the empire established and early 1882 to 1896 as the war with France.",
        "From 1861 to 1881 is 20 years, matching Person's phrase 'in twenty years', and 1871 to 1881 is the decade of rapid expansion. The French war from 1882 to 1896 lasted about 14 years.",
        "Each of these intervals comes from one author's chronology, so check them in a second source when you build a timeline."
    ),
]
out["checks"] = [
    A.case_chk5(
        "A student writes: 'Samori was a Muslim theocrat like al-Hajj Umar, who founded a jihad state in 1861.'",
        "How does Person's chapter correct this?",
        "His empire was a military state, not a Muslim one",
        [
            "It is right, because Person says Samori was an almami from his first campaign",
            "It is right, because Person says Samori's traditionalist subjects were all enslaved",
            "It is wrong, because Person says Samori never fought any Muslim neighbours",
            "It is wrong, because Person says Samori was born in Mecca and educated there",
        ],
        "Person says Samori came from traditionalist peasants, took the title faama about 1868 and almami only in 1884, and ruled a military hegemony 'that could not be regarded as a Muslim state' in 1880 to 1881. " + Y,
    ),
    A.case_chk5(
        "A website says the Vai script was invented about 1833, while Person's chapter says about 1818.",
        "What should a careful student do?",
        "Say the sources differ and cite each",
        [
            "Choose 1833 because it is the later and so the more recent date",
            "Choose 1818 because Person was the most recent scholar to publish",
            "Average the dates and write 1825 so the essay has one date",
            "Leave the script out because a disputed date cannot be used at all",
        ],
        "Person calls the invention's circumstances unclear and dates it about 1818, while the earlier module gives about 1833, so the dates should be attributed. " + Y,
    ),
]
(HERE / "gha6_person_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
