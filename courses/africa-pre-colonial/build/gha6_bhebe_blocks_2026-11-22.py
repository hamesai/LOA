"""Teaching blocks from UNESCO vol VI ch 7 (Bhebe, The British, Boers and Africans in South Africa, 1850-80), read in full 22/11/2026.
Module 7: lesson l5 (why the Zulu war came) and lesson l6 (Lesotho; rule under colony and republic)."""
import json, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parents[2] / "_template"))
import author as A  # noqa: E402
B = "{{gha6-bhebe}}"
out = {}

out["l5_section"] = [
    A.h("Why the Zulu war came, 1875 to 1881"),
    A.p("Bhebe's chapter in UNESCO's volume VI explains the Anglo-Zulu War as one step in a British plan to federate South Africa. Lord Carnarvon launched the federation policy on 4 May 1875. Two conferences failed because the Cape, the Boer republics and the diamond-field claimants stayed away, so he turned to force. " + B + " [PROBABLE]"),
    A.p("Theophilus Shepstone annexed the bankrupt Transvaal on 12 April 1877 after a Boer war with the Pedi had stalled in 1876. Sir Bartle Frere then wanted the African states dealt with first, and Zululand was the target. Shepstone, who had backed Cetshwayo's claim to disputed land against the Transvaal, changed sides once he ruled the Transvaal, because he now only needed to uphold the Transvaal's claims to secure a labour corridor. " + B + " [PROBABLE]"),
    A.p("The pretexts were small. Sirayo's sons pursued two of his wives into Natal and brought them back to be executed. Cetshwayo offered a fine of 50 pounds and an apology, but Frere demanded 500 cattle and the men, and Cetshwayo was still collecting the cattle when war came. Two Natal whites who strayed over the border were roughly handled but not injured. " + B + " [PROBABLE]"),
    A.p("The ultimatum of 11 December 1878 demanded that the Zulu army be dismantled and a British resident accepted, together with fines and the return of missionaries. Bhebe calls it impossible to meet in twenty to thirty days. Lord Chelmsford invaded on 10 January 1879 with about 15000 men, many of them Africans drafted in Natal, against a Zulu force he puts at probably 45000. " + B + " [PROBABLE]"),
    A.p("Bhebe explains the British advantage by firepower used with trenches, waggon walls and sandbags, while Zulu spears and shields could not close the distance. Isandlwana on 22 January 1879 was the one battle fought in the open, which the Zulu won. After the defeat at Ulundi, Cetshwayo was captured in August and sent to Cape Town. " + B + " [PROBABLE]"),
    A.p("The kingdom did not fall at Ulundi, Bhebe says, following Jeff Guy. Sir Garnet Wolseley did not annex Zululand but split it into thirteen independent chiefdoms. Some of the new chiefs could not govern, and a civil war ran well into the 1880s. " + B + " [PROBABLE]"),
    A.table(
        "Two ways to explain the same war",
        ["Reading", "What it stresses", "What would test it"],
        [
            ["'Official mind' (Goodfellow)", "The personalities and plans of Carnarvon and Frere", "Do their dispatches show a plan to provoke war?"],
            ["Atmore and Marks, with Etherington", "African labour for the diamond mines and railways, which Transvaal, Free State and Zulu systems obstructed", "Do labour routes and pass laws line up with the places and dates chosen?"],
        ],
        B,
    ),
    A.p("Atmore and Marks add that the crises on the frontier were themselves caused by the break-down of African authority under industrial Britain's demands. Bhebe sides with their reading, and Etherington shows labour drawn from as far as Mozambique and Zimbabwe after the diamond discoveries. Treat it as a strong argument, not a closed case. " + B + " [CONTESTED]"),
    A.call("warn", "Bhebe dates the end of fighting at Ulundi to 7 July 1879, while this lesson, following Britannica, gives 04/07/1879. His own chapter says Wolseley took over from Chelmsford on 4 July. Check the date in a second source before you repeat it. " + B + " {{britannica-anglozulu}}"),
    A.ex(
        "Worked example: how much time did the ultimatum allow (our arithmetic)",
        "The ultimatum was delivered on 11 December 1878 and the invasion began on 10 January 1879.",
        "From 11 December to 31 December is 20 days, and 10 more days take us to 10 January. That is 30 days.",
        "Bhebe says the demands were impossible to meet in the twenty to thirty days given, so the window had already run out when the army crossed the river.",
    ),
]
out["l5_checks"] = [
    A.case_chk5(
        "A student reads Bhebe and Atmore and Marks and writes: 'The Zulu war began because a Zulu chief's sons carried out an execution.'",
        "How should the student revise that claim?",
        "Treat the sons' case as a pretext",
        [
            "Keep it, because Bhebe names the execution as the sole cause of the war",
            "Drop it, because Bhebe says Cetshwayo refused every demand and fought at once",
            "Keep it, because Cetshwayo had paid no fine and so gave the British the cause",
            "Swap it for the claim that the diamond fields were Zulu and the war was theirs",
        ],
        "Bhebe says Cetshwayo sent a fine and an apology, that Frere raised the demand to 500 cattle, and that the war was meant to remove an obstacle to federation and African labour. " + B,
    ),
    A.case_chk5(
        "A website says the Zulu kingdom ended at Ulundi on 7 July 1879. Bhebe, following Guy, says the kingdom survived the battle.",
        "What is the best correction?",
        "Wolseley's thirteen chiefdoms ended it",
        [
            "Ulundi ended it, because Cetshwayo was killed there by Chelmsford's column",
            "Nothing ended it, because Wolseley annexed the kingdom into Natal in 1879",
            "Isandlwana ended it, because the British column was destroyed in the open",
            "The Transvaal ended it, because Shepstone took over Zululand in 1877",
        ],
        "Bhebe says the settlement split the kingdom into thirteen chiefdoms, and civil war followed into the 1880s. The date of the battle itself also varies by source. " + B,
    ),
]

out["l6_section_a"] = [
    A.h("Lesotho under pressure, 1848 to 1881"),
    A.p("Bhebe shows Moshoeshoe surviving between two white powers, and not merely as a clever defender. In the Orange River Sovereignty, Major Warden drew boundaries in 1848 that favoured the Boers and smaller states, and the announcement of boundaries set off a race to occupy land and more cattle raids. Moshoeshoe's own people ignored the lines and he could only rebuke them. " + B + " [PROBABLE]"),
    A.p("Warden beat Moshoeshoe's ally the Taung at Viervoet, taking 3468 cattle. Moshoeshoe and the Taung then defeated Warden and the British administration collapsed in June 1851. The British disengaged by the Sand River Convention of 17 January 1852, which recognised the Transvaal and set an arms embargo on Africans, and by the Bloemfontein Convention of 23 February 1854. " + B + " [PROBABLE]"),
    A.p("In between, at Platberg on 15 December 1852, Governor Cathcart demanded 1000 horses and 10000 cattle in three days. Moshoeshoe failed, the British invaded and met stiff resistance, and on 20 December Moshoeshoe wrote a submissive letter offering peace. Cathcart left with over 5000 captured cattle and with 38 men dead and 15 wounded. " + B + " [PROBABLE]"),
    A.p("The balance then tipped. By the 1860s Moshoeshoe was old and his sons were competing for the succession, while the Free State grew stronger. Molapo made a separate peace in 1865, and in 1866 Moshoeshoe signed the Treaty of Thaba Bosiu, losing a great deal of arable land. He had asked for British protection in 1861 and 1865, and Governor Wodehouse annexed Lesotho on 12 March 1868. " + B + " [PROBABLE]"),
    A.p("Lesotho's last fight of the period came from the Cape. Under Cape rule from 1872, the Peace Preservation Act of 1878 ordered Africans to hand over guns for compensation, and it was extended to Lesotho. The Sotho valued guns as wages from the diamond mines, as defence and as a sign of passing from boy to man. The Cape also raised the hut tax to one pound and took 12000 pounds from the Lesotho account. " + B + " [PROBABLE]"),
    A.p("The war began on 13 September 1880 and lasted seven months, and the Cape's costs reached about 3 million pounds. The Governor's Award of 29 April 1881 let the Sotho keep guns if they were licensed, offered amnesty and fined the 'rebels' 5000 cattle. Bhebe calls it a Sotho win, especially for the chiefs Lerotholi, Masopha and Joel, while King Litsie, who had counselled peace, lost standing. " + B + " [PROBABLE]"),
    A.ex(
        "Worked example: from the first shots to the Award (our arithmetic)",
        "The Cape moved into Lesotho on 13 September 1880 and the Award was dated 29 April 1881.",
        "From 13 September to 30 September is 17 days. Then October 31, November 30, December 31, January 31, February 28, March 31, and 29 days of April. The sum is 17 plus 31 plus 30 plus 31 plus 31 plus 28 plus 31 plus 29, which is 228 days. 1881 is not a leap year.",
        "That is about seven and a half months. The war lasted seven months by Bhebe's account, so the Award came after the fighting ended.",
    ),
]
out["l6_section_b"] = [
    A.h("Rule under colony and republic, 1850 to 1880"),
    A.p("The cattle-killing of 1856 to 1857 is the starkest event in Bhebe's account of the Xhosa. In March 1856 the girl Nongqause, under the guidance of Mhlakaza, prophesied that if the people killed their cattle and burned their grain, ancestors would return and a whirlwind would blow the English into the sea. Large numbers starved in 1857 on both sides of the Kei, and many Xhosa went to the Colony for work. " + B + " [PROBABLE]"),
    A.p("Why it happened is argued. E. A. Walker thought Moshoeshoe engineered it to draw the British off the Free State, and others call it a white plot, but Bhebe says little or no evidence supports either. He follows Monica Wilson in reading it as a millenarian movement of people trying to be rid of foreign rule and recover land. Grey then took land from chiefs and drove the people of Sarili across the Mbashe river. " + B + " [CONTESTED]"),
    A.p("Natal ran its African majority through reserves and Shepstone. By 1860 about 2 million acres (810000 hectares) had been set aside, mostly rugged land. Shepstone kept chiefs and customary law, taxed huts in cash or cattle, and kept administration cheap. Whites were about 18000 by 1870, and Indian labourers, first brought in 1860 for sugar, numbered about 6000 by the end of that decade. " + B + " [PROBABLE]"),
    A.p("Cape and Natal franchises were colour-blind on paper and hard on Africans in practice. The Cape's 1853 constitution needed property worth 25 pounds or a salary of 50 pounds for the lower house, and English-only proceedings shut out about 70 per cent of rural Boers. Natal's petition rules left the lieutenant-governor free to refuse every African applicant. " + B + " [PROBABLE]"),
    A.p("The republics wrote exclusion into law. Both denied citizenship to Black people. In the Transvaal, African families on a white farm owed labour as payment for the land, passes were compulsory, and horses and guns were forbidden. Children taken in raids were bound as apprentices until 25 for boys and 21 for girls, a system missionaries and traders called slavery. " + B + " [PROBABLE]"),
    A.p("African states resisted with guns. Sechele's Kwena and Gaseitsiwe's Ngwaketse used guns bought from traders and missionaries and kept their independence. At Makapane's cave in 1854 the Boers sealed the entrance for twenty-five days, and Bhebe cites an estimate of 900 killed and more than twice that many dead in the cave. The Pedi fought the Boers to a stalemate in 1876 and were crushed only in 1879 by the British and Swazi. " + B + " [THIN EVIDENCE]"),
    A.table(
        "Four ways of ruling Africans in the 1860s, on Bhebe's account",
        ["Place", "Vote or citizenship", "Labour and land"],
        [
            ["Cape Colony", "Colour-blind property franchise, with English-only proceedings", "Reserves, taxes and industrial education to push Africans into wage work"],
            ["Natal", "Colour-blind on paper, with petitions the governor could refuse", "Reserves, hut tax and squatters on white farms, then Indian indentured labour for sugar"],
            ["Orange Free State", "Black people excluded from citizenship", "Clients such as Moroka; land bought from Adam Kok in 1861"],
            ["Transvaal", "No equality in the constitution", "Free labour as rent, passes, apprenticeship of children"],
        ],
        B,
    ),
]
out["l6_checks"] = [
    A.case_chk5(
        "A student says: 'Moshoeshoe kept Lesotho free because Britain protected it from the start, so he never faced real danger.'",
        "Which reply does Bhebe's chapter best support?",
        "He lost land and sought protection late",
        [
            "That is right, because the Warden boundary kept the Boers out of Lesotho",
            "That is right, because Cathcart's army beat him and so ended Boer claims",
            "That is wrong, because he never asked for British protection or annexation",
            "That is wrong, because the Cape annexed Lesotho before the Boer war of 1865",
        ],
        "He asked for protection in 1861 and 1865 and signed the Treaty of Thaba Bosiu in 1866, losing arable land, before the annexation of 12 March 1868. " + B,
    ),
    A.case_chk5(
        "A report says the Gun War of 1880 to 1881 was caused by Sotho hostility to the Cape alone.",
        "What does Bhebe give as a fuller set of causes?",
        "Disarmament, hut tax and land alienation",
        [
            "A dispute over the succession to King Litsie and nothing more",
            "A Cape plan to move the Sotho to Natal for sugar plantations",
            "A British ban on diamond mining and the wages that came from it",
            "A Transvaal invasion of Lesotho during the first Anglo-Boer War",
        ],
        "He names the Peace Preservation Act of 1878, the plan to alienate Moorosi's district, the hut tax rise to one pound and the appropriation of 12000 pounds, set beside the Sotho view of guns. " + B,
    ),
    A.case_chk5(
        "A student quotes the Makapane figures (900 killed escaping and more than twice that in the cave) as certain facts.",
        "What should a careful historian do?",
        "Say it was an estimate and name its source",
        [
            "Repeat the figures, because the chapter states them as a count made on the day",
            "Drop the story, because no Boer commando ever attacked the Makapane chiefdom",
            "Double them, because Boer sources always understate African casualties",
            "Replace them with a round 3000, which is the mean of the two chapter figures",
        ],
        "Bhebe writes 'it was estimated', citing a secondary source, so the number should be hedged and tagged [THIN EVIDENCE]. " + B,
    ),
]

(HERE / "gha6_bhebe_blocks_2026-11-22.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", {k: len(v) for k, v in out.items()})
