"""Teaching blocks from UNESCO vol VI ch 27 (Alagoa, with Elango on Cameroon and Metegue N'Nah on Gabon: The Niger delta and the Cameroon region), read in full 22/11/2026. Module 5 lesson l6."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
G = "{{gha6-alagoa}}"
out = {}

out["section"] = [
    A.h("The delta, the Cross River and the Cameroon coast, 1800 to 1890"),
    A.p("Alagoa's chapter in UNESCO's volume VI, with sections on Cameroon by L. Z. Elango and on Gabon by M. Metegue N'Nah, links five sub-regions by the same four pressures: the slave trade and its abolition, 'legitimate' trade in produce, missionaries, and imperial conquest. Each community answered with its own institutions, and Alagoa argues that internal factors stayed primary. " + G + " [PROBABLE]"),
    A.p("In the western delta the Itsekiri kingdom of Warri took over the trade that had gone through Benin's port of Ughoton, and Olu Akengbuwa defied the Oba of Benin. When he died in 1848 his people believed the Oba's curse had killed him and that it kept Warri without an Olu from 1848 to 1936, which is 88 years (our arithmetic). British consuls installed the 'Governor of the River' Diare in 1851 and removed Tsanomi in 1879, and Nana Olomu, the last, was exiled in 1894. " + G + " [PROBABLE]"),
    A.p("The eastern delta states, Bonny, Elem Kalabari, Nembe and Okrika, were run by kings and by the Houses, or wari, which recruited slaves and refugees. New slaves had their hair ritually shaved like newborns and became children of a senior member, and the open Ekine masquerade society trained them in language and lore. Alagoa concludes they had no separate identity and little ground for revolt. " + G + " [PROBABLE]"),
    A.p("K. O. Dike read the delta's troubles as slave revolts made by Christianity. Alagoa answers that palm oil, not conversion, upset the Houses: the change from slave-trading to oil needed more labour and canoes, so the internal slave trade grew, new Houses led by ambitious men multiplied and the old balance broke. In the 1860s the Bonny factions were led by Jaja and Oko Jumbo, both of slave origin, and in 1869 Jaja founded Opobo. " + G + " [CONTESTED]"),
    A.p("British power rose step by step. A naval squadron reached Fernando Po in 1827, John Beecroft became consul in 1849 for the Bights of Benin and Bonny, and treaties demanded the end of slaving, set 'comey' duties and paid subsidies. Courts of Equity run by British traders overrode local law. The Landers were brought from Aboh to Nembe by King Boy Amain in 1830, which opened the Niger to British interest. William Pepple of Bonny was exiled in 1854 and Jaja was removed in 1887. " + G + " [PROBABLE]"),
    A.p("In Igboland, small units without large states were open to slave raiding, and the Aro oracle at Arochukwu and mercenary allies such as the Abam, Ohaffia, Abiriba and Edda fed the trade. Alagoa contrasts the Aro's violence with the earlier ritual influence of the Nri. Imports of metal bars undercut the Awka smiths. The Aro Expedition of 1900 covered 15500 square kilometres, yet found no army, since the Aro 'system' was only religious experts and traders working together. " + G + " [PROBABLE]"),
    A.p("Calabar, on firm land, had plantation villages and a new kind of king. The obong, only established from the early nineteenth century, dealt with the 'comey' paid by traders, while the Ekpe society, called Egbo in older English sources, made and enforced law. Its grades grew from five in 1828 to ten in 1840 and eleven in 1858, and slaves could reach only the lower ones. Duke Ephraim (c. 1800 to 1834) and Eyo Honesty II (1836 to 1858) were the leading men, and by 1852 Creek Town took two-thirds of the comey. " + G + " [PROBABLE]"),
    A.p("The Bloodmen, plantation slaves bound by oath, did not seek emancipation. They came to town in a body whenever a notable fell ill or died, to stop slaves being killed or poisoned in the ordeal, and their pressure helped bring the Ekpe law against human sacrifice of 1850 to 1851. A treaty ending the trade was signed in 1842, Scottish missionaries arrived in 1846, and a protectorate followed in 1891. " + G + " [PROBABLE]"),
    A.p("On the Cameroon coast the Duala, divided between King Bell and King Akwa from 1814, kept unity through the ngondo council. At Bimbia the merchant King William (Bile) in 1833 offered Britain a protectorate, which London refused, and hired out slaves as labourers to Fernando Po, which led to a parliamentary inquiry. A Court of Equity opened at Duala in 1856, the Baptist Joseph Merrick came in 1843, and Germany annexed Cameroon in July 1884, a step the chiefs resisted because it threatened their middleman role. " + G + " [PROBABLE]"),
    A.p("In Gabon the first treaty allowing colonial occupation was signed on 9 February 1839 with 'King Denis' of the Ogowe, and Libreville was founded in 1849. By 1882 more than ninety trading houses, many of them English or German, and over twenty mission stations stood in the Ogowe basin. Fang migration towards the coast and a wealth-based stratification followed, yet cults such as Bwiti and Ombwiri resisted conversion. " + G + " [PROBABLE]"),
    A.ex(
        "Worked example: change in the Ekpe society (our arithmetic)",
        "Alagoa gives five Ekpe grades in 1828, ten in 1840 and eleven in 1858.",
        "From five to eleven is a rise of six grades in 30 years, a gain of 120 per cent. Most of it came in the twelve years from 1828 to 1840, when the number doubled.",
        "The grades were bought by fees, so more grades meant more ways to charge and exclude the poor and the enslaved, which is Alagoa's reason for stressing them."
    ),
]
out["checks"] = [
    A.case_chk5(
        "A textbook says Christianity turned the slaves of the delta states into revolutionaries who tore the states apart.",
        "How does Alagoa's chapter answer this account, which comes from Dike?",
        "Palm-oil trade and new Houses caused the strain",
        [
            "It is right, because Alagoa says slaves in every state formed separate armies",
            "It is right, because Alagoa says missionaries drove every king from his throne",
            "It is wrong, because Alagoa says there was no strain at all in the delta states",
            "It is wrong, because Alagoa says the British ended slavery in the delta in 1807",
        ],
        "He argues the shift from slaves to palm oil, the growth of new Houses and competition for hinterland markets caused the disorder, and that slaves were integrated and did not form a separate group. " + G,
    ),
    A.case_chk5(
        "A student says the British Aro Expedition of 1900 defeated a powerful Aro army at Arochukwu.",
        "What does Alagoa's chapter say?",
        "No army opposed it; the Aro were priests and traders",
        [
            "It says the Aro had a large standing army, which the British destroyed at Bende",
            "It says the Aro were Nri, whose kings controlled every Igbo town by force",
            "It says the Aro Expedition never took place, because the Aro had surrendered",
            "It says the Aro were Calabar allies, who fought with the Efik navy",
        ],
        "He calls the expedition 'a sort of anti-climax', since the Aro system was a group of religious experts and traders and no military force came out. " + G,
    ),
]
(HERE / "gha6_alagoa_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
