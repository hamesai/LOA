import json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from _detail import lesson_entry
from author import p, h, ul, ol, table, call, ex, act, chk, take

CID = "africa-post-colonial"
EXC = "We read an encyclopaedic page in excerpt form on 30/10/2026, not his own work. "
refs = {
 "wiki-boahen": ["Albert Adu Boahen (secondary; excerpts on dates, career, UNESCO General History of Africa, his 1988 lecture)", "Wikipedia", "https://en.wikipedia.org/wiki/Albert_Adu_Boahen"],
 "wiki-dubois": ["W. E. B. Du Bois (secondary; excerpts on fieldwork, Black Reconstruction, NAACP and his move to Ghana)", "Wikipedia", "https://en.wikipedia.org/wiki/W._E._B._Du_Bois"],
 "wiki-nyerere": ["Julius Nyerere (secondary; excerpts on dates, TANU, Ujamaa and later life)", "Wikipedia", "https://en.wikipedia.org/wiki/Julius_Nyerere"],
 "wiki-biko": ["Steve Biko (secondary; excerpts on SASO, Black Consciousness and his death)", "Wikipedia", "https://en.wikipedia.org/wiki/Steve_Biko"],
 "wiki-achebe": ["Chinua Achebe (secondary; excerpts on dates, Biafra and There Was a Country)", "Wikipedia", "https://en.wikipedia.org/wiki/Chinua_Achebe"],
}
M = []

M.append(lesson_entry(
 key=CID + "-1", name="Albert Adu Boahen", min=20,
 outcome="Re-read a colonial-period claim from the African side: what did Africans do, and what lasted?",
 intro="Boahen (1932 to 2006) was a Ghanaian historian who made African perspectives central to the study of the colonial period. Here we borrow one habit of his: ask what Africans were doing, and what continued.",
 record=[EXC + "Wikipedia says he taught at the University of Ghana from 1959 to 1990, was professor from 1971, was the first African to chair its history department, and worked on the UNESCO General History of Africa committee from 1993 to 1999. {{wiki-boahen}}",
         "Our library cites his view that the colonial period was short and that African institutions persisted. We did not read his books, so the method below is our application, not his words. {{lib}}"],
 steps=["Start from the African actors. Name who acted, for example Menelik at Adwa. {{lib}}", "Ask what continued under colonial rule: chiefs, markets, languages, institutions. {{lib}}", "Ask what the colonial sources leave out, as Iliffe noted of the German history of Maji Maji. {{wiki-maji}}", "Compare the colonial record with an African voice, such as oral testimony or a memoir. {{lib}}", "Tag the result and say which perspective you used."],
 table=("Two perspectives on one event (our application)", ["Event", "Colonial-record view", "African-perspective view"], [["Maji Maji", "A rebellion put down in 1907", "A response to forced cotton and taxes, remembered in oral testimony"], ["Adwa", "An Italian defeat", "An Ethiopian victory won by mobilisation, diplomacy and modern rifles"], ["Mau Mau", "An emergency in 1952 to 1960", "A land struggle and a civil conflict among Kikuyu"]], "{{lib}} {{wiki-maji}}"),
 worked=[("Worked example: rewriting a sentence (our application)", "Start from 'The Germans suppressed a native rebellion in 1905 to 1907.'", "Name the actors: many peoples, led by spirit mediums such as Kinjikitile, resisted forced cotton growing and taxes.", "Name the cost: tens or hundreds of thousands died, mostly of hunger. {{lib}} {{wiki-maji}}", "Rewrite: 'Many peoples of southern German East Africa rose against forced cotton and taxes, and the repression caused famine.'")],
 apply=("Apply it: rewrite one sentence", ["Pick a sentence about conquest or resistance.", "Name the African actors.", "Add what lasted.", "Tag the claim."]),
 act="Rewrite one colonial-style sentence from Module 1 or 2 from the African side, and tag it.",
 checks=[("What is the first move in the African-perspective method?", ["Name the African actors", "Trust the governor's report", "Skip the dates", "Look for a single cause"], 0, "The method starts from who acted. {{lib}}"),
         ("Why did Iliffe's remark about Gotzen's history matter?", ["It showed an official history omitted the cotton scheme", "It proved Maji Maji was a myth", "It dated the rising", "It named the casualties"], 0, "The omission shows how an official source shapes the story. {{wiki-maji}}")],
 take=["Start from African actors and what lasted. {{lib}}", "Check what the colonial source leaves out. {{wiki-maji}}", "Our application of his habit is not his own words."],
 quiz=("Which perspective did Boahen add to the study of the colonial period?", ["An African one, stressing that African institutions persisted", "A purely economic one", "A military one", "A European one"], 0, "As summarised in the library. {{lib}}")))

M.append(lesson_entry(
 key=CID + "-2", name="Albert Adu Boahen", min=20,
 outcome="Weigh African and colonial records for the same event and say what each can and cannot show.",
 intro="The same Boahen habit applies to resistance. Here we use it on Mau Mau, Maji Maji and the Herero and Nama war to decide which record answers which question.",
 record=[EXC + "Wikipedia reports that in February 1988 he lectured publicly on Ghana's history from 1972 to 1987, an act credited with breaking a culture of silence. It also says he spoke against Marxist history early in his career. {{wiki-boahen}}",
         "Confidence: partial. We did not read his writings. The sorting table below is our own design. {{lib}}"],
 steps=["List the questions you are asking: who died, why it began, how it is remembered.", "Match each question to the record that can answer it.", "Mark what each record leaves out. {{lib}}", "Use a late-released archive to correct an early one, as with FCO 141. {{lib}}", "Write the answer as a range with the method."],
 table=("Which record answers which question (our design)", ["Question", "Best record", "Limit"], [["Why did Maji Maji begin?", "Oral testimony of the 1968 project", "Memory and later politics"], ["How many Herero died?", "German statements and demography", "Pre-war population uncertain"], ["What happened in the Mau Mau camps?", "Migrated archives (FCO 141) and survivors' accounts", "Files were moved or destroyed before 1963"]], "{{lib}}"),
 worked=[("Worked example: choosing a record (our application)", "Question: how was Mau Mau remembered after independence?", "Use Kenya's ban on the movement until 2003 and veterans' complaints of being sidelined.", "These are African official and oral records, and they answer a different question from the British death counts.", "Keep them separate in your notes. {{lib}}")],
 apply=("Apply it: sort questions to records", ["Write three questions about Module 2.", "Name the record for each.", "Name its limit."]),
 act="Fill in the sorting table for a case of your own choice from Module 2.",
 checks=[("Why keep African and colonial records separate in your notes?", ["They answer different questions", "They always agree", "One of them is false", "They are the same"], 0, "Each has its own limits. {{lib}}"),
         ("What did the FCO 141 release do?", ["Showed that files migrated from Kenya had been kept and made them public", "Ended the Emergency", "Banned Mau Mau", "Created the OAU"], 0, "Britain acknowledged them in 2011. {{lib}}")],
 take=["Match each question to the record that can answer it. {{lib}}", "Late archives can correct early ones.", "Write ranges with methods."],
 quiz=None))

M.append(lesson_entry(
 key=CID + "-3", name="W. E. B. Du Bois", min=20,
 outcome="Combine evidence with organising: ask what a document shows, and who gathered it and for what purpose.",
 intro="Du Bois (1868 to 1963) was a scholar and organiser who convened the Pan-African Congresses. Here we borrow his twin habit: collect the data, then argue from it, which is also the habit that exposes a fake.",
 record=[EXC + "Wikipedia says his first major academic work, The Philadelphia Negro (1899), was a detailed sociological study based on fieldwork in 1896 and 1897. His 1935 Black Reconstruction marshalled extensive references. He co-founded the NAACP in 1909. {{wiki-dubois}}",
         "He moved to Ghana in October 1961 and died in Accra on 27/08/1963, aged 95, and was given a state funeral. Our library names him as organiser of the Pan-African Congresses. {{wiki-dubois}} {{lib}}"],
 steps=["Ask what data supports the claim, as in his fieldwork. {{wiki-dubois}}", "Ask for references, as in Black Reconstruction. {{wiki-dubois}}", "Ask who organised the evidence and why. {{lib}}", "Run the four tests of authenticity on any quoted document.", "Say plainly what the evidence supports and what it does not."],
 table=("Du Bois's habits applied to a viral quotation (our application)", ["Habit", "Question", "On the Willie Lynch letter"], [["Fieldwork", "Where is the collected evidence?", "None: no eighteenth-century source"], ["References", "Does the claim cite real sources?", "None independent of the text"], ["Purpose", "Who gains from the story?", "It offers a simple explanation of disunity"]], "{{cobb}} {{sun}} {{wiki-dubois}}"),
 worked=[("Worked example: asking for the data (our application)", "Claim: a 1712 speech fixed slaveholder policy.", "Ask for the manuscript: none is cited.", "Ask for references: none independent.", "Verdict: the claim has no data behind it, so it cannot be evidence of anything about 1712. Cobb and the Sun reach the same view. {{cobb}} {{sun}}")],
 apply=("Apply it: demand the data", ["Choose a quotation you have seen.", "Ask for its first appearance.", "Ask for an independent reference.", "Write a one-line verdict."]),
 act="Run the three habits on one claim from Module 3 and write the verdict.",
 checks=[("Which Du Bois habit asks for the collected evidence?", ["Fieldwork", "Slogans", "Flattery", "Silence"], 0, "The Philadelphia Negro rested on fieldwork. {{wiki-dubois}}"),
         ("Where did Du Bois die?", ["Accra, on 27/08/1963", "Manchester, 1945", "Paris, 1919", "Lagos, 1960"], 0, "He had moved to Ghana in 1961. {{wiki-dubois}}")],
 take=["Ask for the data, the references and the purpose. {{wiki-dubois}}", "A story without data cannot be evidence.", "Real evidence exists and can be cited. {{cobb}}"],
 quiz=("What did Du Bois's The Philadelphia Negro (1899) rest on?", ["Fieldwork in 1896 and 1897", "A single letter", "Oral legend only", "A newspaper column"], 0, "As reported by Wikipedia. {{wiki-dubois}}")))

M.append(lesson_entry(
 key=CID + "-4", name="Julius Nyerere", min=20,
 outcome="Judge an independence project by its own stated aim and by its results, and name a criterion first.",
 intro="Nyerere (1922 to 1999) led Tanganyika to independence and proclaimed ujamaa. We borrow one habit: state the aim, then test results against it, and admit the costs.",
 record=[EXC + "Wikipedia says he was born on 13/04/1922 and died on 14/10/1999, helped form TANU in 1954 and campaigned for independence, and was influenced by Gandhi to preach non-violent protest. It says his ideology, ujamaa, was a form of African socialism, and that he developed much of his philosophy while studying in Edinburgh. {{wiki-nyerere}}",
         "He also translated Shakespeare's Julius Caesar and The Merchant of Venice into Swahili. Our library records that he stepped down voluntarily in 1985. {{wiki-nyerere}} {{lib}}"],
 steps=["State the aim: self-reliance, villages, equality. {{lib}}", "List results: literacy, unity and no ethnic civil war. {{lib}}", "List costs: compulsory villagisation and falling output. {{lib}}", "Choose a criterion and say why.", "State the limit of your evidence."],
 table=("Aims against results for ujamaa (from the library)", ["Aim", "Result", "Tag"], [["Self-reliance", "Output suffered; crisis by the late 1970s", "[CONTESTED]"], ["National unity", "Swahili common language; no ethnic civil war", "[CONTESTED]"], ["Voluntary handover", "Stepped down in 1985", "[FIRM]"]], "{{lib}}"),
 worked=[("Worked example: stating a criterion first (our application)", "Question: did ujamaa fail?", "Criterion A, output: fell, so fail. Criterion B, cohesion: held, so succeed.", "Say which criterion you chose and why.", "A one-sentence verdict: 'on output it failed; on cohesion it succeeded'. {{lib}}")],
 apply=("Apply it: judge a project", ["Choose another independence-era project.", "State its aim.", "List results and costs.", "Name your criterion."]),
 act="Write a 100-word verdict on ujamaa that states a criterion first.",
 checks=[("Why state the criterion first?", ["Different criteria give different verdicts", "Verdicts are meaningless", "To avoid evidence", "To pick the winner"], 0, "Output and cohesion give different answers. {{lib}}"),
         ("What did Nyerere do in 1985?", ["Stepped down voluntarily", "Was overthrown", "Declared a one-party state", "Joined the OAU"], 0, "The library says so. {{lib}}")],
 take=["State the aim, then test the results. {{lib}}", "Name the criterion before the verdict.", "He is not quoted; this is our application."],
 quiz=None))

M.append(lesson_entry(
 key=CID + "-5", name="Steve Biko", min=20,
 outcome="Separate the system from the mind: ask what a law did, and what it asked people to believe about themselves.",
 intro="Biko (1946 to 1977) was the leading voice of Black Consciousness. We borrow one habit: define terms precisely and ask what a system did to people's sense of themselves.",
 record=[EXC + "Wikipedia says Biko was born on 18/12/1946, founded the South African Students' Organisation in 1968 and helped develop its Black Consciousness ideology. A 1971 SASO manifesto, as reported, defined it as an attitude of mind and a way of life. {{wiki-biko}}",
         "He was banned in 1973 and arrested in August 1977, and died on 12/09/1977 after beatings in police custody. In 2025 the National Prosecuting Authority said it would reopen the inquest. {{wiki-biko}}"],
 steps=["Define each term before using it: law, policy, event. {{lib}}", "Ask what a measure did to movement, housing or schooling. {{lib}}", "Ask what it asked people to accept about themselves.", "Ask who gained from the category.", "Keep the evidence of what happened apart from the interpretation."],
 table=("Apartheid measures and the question Biko's habit adds (our application)", ["Measure", "What it did", "Added question"], [["Population Registration Act (1950)", "Classified people by race", "What did the label ask people to believe?"], ["Bantu Education Act (1953)", "Segregated schooling", "What did it teach about worth?"], ["Pass laws", "Controlled movement", "What did constant checking do to confidence?"]], "{{lib}}"),
 worked=[("Worked example: law or event? (our application)", "Sort 'Bantu Education Act' and 'Soweto uprising'.", "The Act is a law of 1953. The uprising is a protest of 16/06/1976 against compulsory Afrikaans in teaching.", "The link: the 1976 protest was about the schooling system the Act created.", "Keep the law and the event apart, then connect them. {{lib}}")],
 apply=("Apply it: one measure, two questions", ["Pick one apartheid law.", "Say what it did.", "Say what it asked people to believe."]),
 act="Write a two-column note for one apartheid law: what it did, what it asked people to believe.",
 checks=[("Which is a law and which an event?", ["Group Areas Act is a law; Soweto is an event", "Both are laws", "Both are events", "Neither"], 0, "Keep laws and events apart. {{lib}}"),
         ("When did Biko die?", ["12/09/1977", "16/06/1976", "21/03/1960", "11/02/1990"], 0, "He died in police custody. {{wiki-biko}}")],
 take=["Define terms precisely. {{lib}}", "Ask what a system did and what it asked people to believe.", "Separate evidence from interpretation."],
 quiz=("When did Steve Biko die?", ["12/09/1977", "16/06/1976", "11/02/1990", "27/04/1994"], 0, "He died on 12/09/1977 after beatings in custody. {{wiki-biko}}")))

M.append(lesson_entry(
 key=CID + "-6", name="Chinua Achebe", min=20,
 outcome="Read a witness and a historian together, and mark which questions each can answer.",
 intro="Achebe (1930 to 2013) was a Nigerian novelist who served Biafra as an envoy. We borrow one habit: place the witness beside the numbers, and say what each adds and what each lacks.",
 record=[EXC + "Wikipedia says he was born on 16/11/1930 and died on 21/03/2013, published Things Fall Apart in 1958, travelled as an ambassador promoting the Biafran cause, and published There Was a Country in 2012, a work that reopened discussion of the Nigerian civil war. {{wiki-achebe}}",
         "The page also notes that critics have called him sexist in his depiction of Igbo society, which is a reminder that every witness has limits. We did not read his books. {{wiki-achebe}} {{lib}}"],
 steps=["Read the witness for what it was like to live through the event.", "Read the historian for scale and cause. {{lib}}", "Mark where they agree and where they conflict.", "Mark what each lacks.", "Do not use the witness for a number, or the number for the experience."],
 table=("Witness beside historian (our application)", ["Question", "Witness can show", "Historian can show"], [["What was famine like?", "Experience, memory, voice", "Not individual experience"], ["How many died?", "Not a reliable count", "A range with methods (500,000 to 2 million)"], ["Was it genocide?", "A moral claim", "The dispute and the evidence on each side"]], "{{lib}}"),
 worked=[("Worked example: using each for what it can do (our application)", "Use Achebe's memoir for the experience of Biafra and for the Igbo sense of marginalisation after the war.", "Use the demographic ranges for scale: the civilian toll runs from 500,000 to 2 million.", "Do not convert the memoir into a number. Say that the numbers are contested and the memoir is partial. {{lib}} {{wiki-biafra}}", "Write one sentence of each kind and keep them apart.")],
 apply=("Apply it: pair a witness with numbers", ["Pick one event from Module 6.", "Name a witness and a range.", "Write what each cannot show."]),
 act="Write two sentences about Biafra: one from a witness, one from the numbers, each with its limit.",
 checks=[("What should you not take from a witness?", ["A reliable death toll", "The experience of the event", "A voice", "A perspective"], 0, "Use the witness for experience, not counts. {{lib}}"),
         ("Which book of Achebe's reopened discussion of the civil war?", ["There Was a Country (2012)", "Things Fall Apart (1958)", "Home and Exile (2000)", "No Longer at Ease"], 0, "Per the encyclopaedia page. {{wiki-achebe}}")],
 take=["Use the witness for experience and the historian for scale. {{lib}}", "Mark what each lacks.", "Every witness has limits. {{wiki-achebe}}"],
 quiz=("Which of Achebe's works, published in 2012, reopened discussion of the Nigerian civil war?", ["There Was a Country", "Things Fall Apart", "Home and Exile", "No Longer at Ease"], 0, "As reported on the encyclopaedia page. {{wiki-achebe}}")))

M.append(lesson_entry(
 key=CID + "-7", name="Julius Nyerere", min=20,
 outcome="Judge an institution against its founding aim and against what members were willing to give up.",
 intro="Nyerere preferred gradual steps to unity over a continental government. We apply that stance to the African Union and ask what states were willing to give up.",
 record=[EXC + "Wikipedia reports that he published widely, wrote poetry and developed his ujamaa ideology. Our library records that in the 1960s he and others preferred gradual regional steps to Nkrumah's continental government. {{wiki-nyerere}} {{lib}}",
         "Confidence: partial. The application to the AU is our inference, not a quotation from him. {{lib}}"],
 steps=["State the founding aim of the institution. {{lib}}", "List what members agreed to give up.", "Compare words with practice: Article 4(h) against money and reluctance. {{lib}}", "Ask whether gradual steps or a single leap fits better.", "State the limit of the evidence."],
 table=("The AU against its aim (our application)", ["Aim", "What members gave up", "Practice"], [["Intervene in grave cases", "A part of non-interference", "Limited by money and reluctance"], ["Free trade", "Some tariff autonomy", "AfCFTA began trading on 01/01/2021"], ["Peace and security", "Some sovereignty over coups", "Suspension of states is the usual tool"]], "{{lib}}"),
 worked=[("Worked example: step or leap? (our application)", "Nkrumah wanted a continental government; Nyerere and others wanted gradual steps.", "The OAU of 1963 chose cooperation; the AU of 2002 added Article 4(h) and later bodies.", "That is a step, not a leap.", "A fair summary: African states moved in steps, and enforcement still lags the text. {{lib}}")],
 apply=("Apply it: judge an institution", ["Name an aim.", "Name what members gave up.", "Compare words and practice."]),
 act="Write 100 words judging the AU against Article 4(h) using the three questions.",
 checks=[("Which approach did Nyerere and others prefer in the 1960s?", ["Gradual regional steps", "An immediate continental government", "No cooperation", "A federal Europe"], 0, "The library says so. {{lib}}"),
         ("Which limit of the AU does the library name?", ["Money and member-state reluctance", "Too many powers", "No members", "No charter"], 0, "Enforcement is limited. {{lib}}")],
 take=["Compare an institution's words with practice. {{lib}}", "Ask what members gave up.", "This is our application, not his words."],
 quiz=None))

M.append(lesson_entry(
 key=CID + "-cap", name="Chinua Achebe", min=20,
 outcome="Write the African-voice note by placing a witness beside the numbers and naming the limits of each.",
 intro="The capstone requires an African voice and its limits. Achebe's practice of writing from inside the experience, and the critics' remarks about his own limits, give a model.",
 record=[EXC + "The page reports his career, his work for the Biafran cause and the criticism of his picture of Igbo society. {{wiki-achebe}}",
         "Confidence: partial; his books were not read. {{lib}}"],
 steps=["Name the voice: memoir, speech, oral testimony, court record or archive.", "Say who produced it and when.", "Say what it shows and what it cannot show.", "Pair it with a number or a record.", "State the limit in one sentence."],
 table=("Template for the 200-word voice note (our design)", ["Line", "Prompt"], [["Voice", "Which African source did you use?"], ["Producer and date", "Who made it, and how long after the events?"], ["Shows", "What does it show well?"], ["Limits", "What can it not show?"], ["Pairing", "Which number or record did you set beside it?"]], "{{lib}}"),
 worked=[("Worked example: one note in four lines (illustrative)", "Voice: Mandela's statement from the dock, 20/04/1964.", "Shows: a prepared political claim made in court. Limits: one speaker, a court setting, no independent count.", "Pairing: the Rivonia sentences of 12/06/1964. {{lib}}", "Write the note in 200 words.")],
 apply=("Apply it: draft your note", ["Choose your voice.", "Fill the five lines.", "Write 200 words."]),
 act="Draft the 200-word note from the template.",
 checks=[("What must the voice note say about the source?", ["What it shows and what it cannot show", "Only its length", "Only its price", "Nothing"], 0, "The rubric asks for use and limits. {{lib}}"),
         ("What should you pair with a witness?", ["A number or a record", "A rumour", "A slogan", "A flag"], 0, "Pairing keeps each in its place. {{lib}}")],
 take=["Name the voice, its producer, what it shows and its limits. {{lib}}", "Pair a witness with a record.", "State one limit plainly."],
 quiz=None))

out = {"refs": refs, "modules": M}
Path(__file__).with_suffix(".json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print(len(M), "modules")
