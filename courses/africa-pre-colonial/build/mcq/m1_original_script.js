/* Module 1 question rewrite (17/11/2026): five options, distractors of similar length, correct slot spread evenly.
   Each entry: match = start of the old question text; q = new stem (optional); c = correct option; d = four distractors.
   Covers lesson checks (modules/course-africa-pre-colonial-1.js), the module quiz (pack) and the pre-checks (learning file).
   usage: node build/m1_checks_v2.js   (from courses/africa-pre-colonial), then lec_sync_from_modules.js and kit.py ship */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..", "..");
const Q = [
 { match: "A 1960s lecture says Africa has no history",
   c: "Literacy existed in many regions, and oral tradition, archaeology and linguistics recover the rest",
   d: ["Concede it for most regions, but argue that Egypt and Aksum prove Africa had some history",
       "Say oral tradition alone is as reliable as any archive, so the lack of writing is irrelevant",
       "Say every African society kept written records, and colonial rule destroyed nearly all of those records",
       "Accept that unwritten pasts are prehistory, but argue that African prehistory deserves study"] },
 { match: "A source claims a West African city was founded by 'Hamites'",
   c: "Language is not race or origin: Hausa speakers ruled by Fulani break the equation",
   d: ["Afro-Asiatic languages reached West Africa only after the city was founded",
       "Nothing in principle; a study of the rulers' skeletons would settle the matter of origin",
       "Hamitic should be replaced by Semitic, the proper name of the language family",
       "The Hamitic idea holds only for East African kingdoms, not for West Africa"] },
 { match: "Which pairing of evidence would make the strongest claim?",
   c: "An excavation plus an independent line, such as linguistics or a written source",
   d: ["Two excavations at neighbouring sites, run by one team with the same methods",
       "Ten radiocarbon dates taken from a single sealed layer at one well-excavated site",
       "An oral tradition recorded in two villages that share one ruling lineage",
       "A famous chronicle, cross-checked against a later chronicle that copied it"] },
 { match: "A timeline states 'Koumbi Saleh fell in 1086'",
   c: "Koumbi Saleh declined towards the end of the eleventh century",
   d: ["Koumbi Saleh fell in 1086, give or take a year either side",
       "Koumbi Saleh fell to the Almoravids in 1076, the corrected year",
       "Koumbi Saleh fell in 1086 [FIRM], as the Arabic chronicle says",
       "Koumbi Saleh's decline cannot be placed in any century at all"] },
 { match: "Two clans tell their origins.",
   c: "Clan B's, because it runs against the teller's own interest",
   d: ["Clan A's, because founders keep the fullest record of a town",
       "Clan B's, because later arrivals remember migrations more freshly",
       "Equal weight, since both are oral and neither can be checked",
       "Clan A's, because it is the version most townspeople repeat"] },
 { match: "A king list has 20 rulers",
   c: "No: succession rules shift the average, so tag any such date as approximate",
   d: ["Yes: twenty-year reigns are the standard rate, so 400 years is sound",
       "Yes, but only if two griots recite the list identically; then tag it [FIRM]",
       "No: king lists are invented, so a founding date cannot be estimated at all",
       "No: use 30-year generations instead, since early kings reigned for longer"] },
 { match: "An essay quotes the Kano Chronicle",
   c: "It is tradition written down late, not known as a text before the 1800s",
   d: ["It was composed by Songhai scholars at Gao and only later copied in Kano",
       "It is eyewitness for the eleventh century but tradition for later reigns",
       "It is a Portuguese traveller's report, so it describes Kano from outside",
       "It is a reliable eyewitness record, but only for reigns it dates exactly"] },
 { match: "A student says the Sudanic belt was the only part of Africa",
   c: "Documents show where writers looked, not where states existed",
   d: ["States needed writing to keep accounts, so unwritten regions had none",
       "Arabic writers had no motive to omit states, so the silence is evidence",
       "The flaw is only the date: states arose elsewhere after 1450, not before",
       "It holds for central Africa but fails for the Swahili coast alone"] },
 { match: "A blog argues that Swahili is a Semitic language",
   c: "Loanwords do not show descent; Swahili's structure and core vocabulary are Bantu",
   d: ["It is half right: Swahili is a mixed language, part Bantu and part Semitic",
       "It is right: a language belongs to whichever family supplies the most of its vocabulary",
       "It is wrong because Swahili's Arabic words came through Persian, not Arabic",
       "It is wrong because Swahili has only a handful of Arabic loanwords in all"] },
 { match: "A charcoal sample from a furnace gives a radiocarbon date of 650 BCE",
   c: "The wood may be older than the smelt, and the date sits on the 800 to 400 BCE plateau",
   d: ["It dates the smelt exactly, but the lab's error of about 50 years must always be quoted with it",
       "It dates the tree, so the smelt itself must be older than 650 BCE",
       "Furnace charcoal is contaminated by heat, so it cannot be dated at all",
       "It lies outside the plateau, so it can stand as a precise calendar date"] },
 { match: "A Saharan site has grindstones and hoe-like tools",
   c: "Not yet shown to be farming: only plant remains, pollen or fields prove it",
   d: ["A farming village, since grindstones are used only to process grown cereals",
       "An early farming site [PROBABLE], since tools and settlement together suggest it",
       "A herding camp, since tools without plant remains point to pastoral use",
       "A town of specialists, since purpose-made tools imply a division of labour"] },
 { match: "A textbook says 'Africa's geography cut it off from the world'",
   c: "Isolation was relative: Mediterranean and Indian Ocean trade ran for centuries",
   d: ["Africa was fully isolated until Portuguese ships reached its coasts in the 1400s",
       "Africa was never isolated, since its coasts have many deep natural harbours",
       "Only the Sahara isolated Africa; its seas carried trade on every coast",
       "Isolation was real everywhere except Egypt, which faced the Mediterranean"] },
 { match: "A documentary says: 'The Nok were the first people",
   c: "Nok is among the early iron-using cultures; 'first' cannot be supported",
   d: ["Nok was first, since it has the oldest radiocarbon dates of any iron site",
       "Iron reached Nok from Carthage, so Nok cannot be first in any sense",
       "Nok was first in West Africa, though not in sub-Saharan Africa as a whole",
       "Meroë smelted iron first, so Nok should be called the second centre"] },
 { match: "A textbook says 'wherever Bantu languages spread, ironworking went with them'",
   c: "The Bubi of Fernando Po, Bantu speakers who had no iron",
   d: ["Jenne-jeno, an iron-using town where no Bantu was spoken",
       "Great Zimbabwe, a Bantu-speaking state that worked iron",
       "The Nok, early iron users whose language is unknown",
       "Meroë, a Nile iron centre with no Bantu speakers at all"] },
 { match: "A website says the Yoruba descend directly from the Nok",
   c: "Style alone cannot show descent, and Nok's language and identity are unknown",
   d: ["The Yoruba never made terracotta heads, so the comparison itself fails",
       "Nok terracottas cannot be dated reliably, so no sequence of styles can ever be built",
       "Descent needs the two styles to be no more than 500 years apart",
       "Nothing is wrong, provided the Ife heads copy Nok features exactly"] },
 { match: "An excavated town has specialist quarters",
   c: "Heterarchy: power spread across several specialist groups",
   d: ["A chiefdom whose ruler's palace has not yet been found",
       "Hierarchy: specialists ranked beneath one council of elders",
       "An oligarchy: a merchant class ruling the craft quarters",
       "A colony run by foreign merchants who left no burials"] },
 { match: "A town had a wall in the first millennium CE.",
   c: "An inference, to be labelled as such: a wall alone does not show kingship",
   d: ["A finding, since a wall of that size needs a central authority to plan and build it",
       "A traditional date, since it rests on what townspeople say of the wall",
       "Thin evidence, which is simply another name for an inference",
       "A contested finding, since scholars disagree about the wall's date"] },
 { match: "A griot gives a date for a battle.",
   c: "[TRADITIONAL DATE]",
   d: ["[FIRM]", "[CONTESTED]", "[ESTIMATE]", "No tag, since the griot is the source"] },
 { match: "You find that a short Wolof word sounds like an ancient Egyptian word",
   c: "Nothing yet: it needs regular sound matches across many words",
   d: ["The two languages are related, though only distantly",
       "Wolof borrowed the word from Egyptian through Saharan trade",
       "There was a migration from the Nile valley to Senegal",
       "One match is enough, provided the two meanings are exactly identical"] },
 { match: "What does the working definition of oral tradition require?",
   c: "Transmission by word of mouth over at least one generation",
   d: ["A fixed text memorised word for word by trained specialists",
       "An account of events that the teller witnessed in person",
       "Any story about the past told by members of a royal court",
       "Testimony written down by an outsider within a generation"] },
 { match: "Why should a date from a founding tradition be tagged traditional?",
   c: "Details thin out in the floating gap, and tellers shape the past",
   d: ["Griots were paid by rulers, so every date they give is invented",
       "Oral tradition counts in generations, so it holds no dates at all",
       "Founding stories are remembered best, so only later dates need tags",
       "The dates were added by colonial collectors who wrote stories down"] },
 { match: "Which kind of evidence best shows that a farming vocabulary",
   c: "Historical linguistics",
   d: ["Radiocarbon dating", "Archaeobotany", "Oral praise-song genealogies", "Portuguese letters"] },
 { match: "Which tag fits the date c. 1235 for Kirina?",
   c: "[TRADITIONAL DATE]",
   d: ["[FIRM]", "[CONTESTED]", "[THIN EVIDENCE, CONTESTED]", "[ESTIMATE]"] },
 { match: "What is wrong with the phrase 'the Bantu tribe'?",
   c: "Bantu is a language family, not a tribe",
   d: ["Bantu is a race, so 'people' is better",
       "Bantu was one tribe that later split",
       "Bantu names a region, not a group",
       "Nothing, if it means the Bantu of Cameroon"] },
 { match: "What makes Jenne-jeno important?",
   c: "Urban growth with no clear king, before regular trans-Saharan trade",
   d: ["Urban growth driven by trans-Saharan trade under a Ghanaian governor",
       "The earliest iron smelting in West Africa, under a single ruling king",
       "A walled royal capital that later became the first seat of Mali",
       "A Roman trading post on the Niger that later grew into a city"] },
 { match: "Which historian is credited with making oral tradition",
   c: "Jan Vansina",
   d: ["Walter Rodney", "Ivor Wilks", "Julian Cobbing", "Cheikh Anta Diop"] },
 { match: "Which kind of evidence is best for showing that a vocabulary",
   c: "Historical linguistics",
   d: ["Radiocarbon dating", "Portuguese letters", "Archaeological pottery styles", "Pollen cores"] },
 { match: "Is Bantu a tribe?",
   c: "No, it is a language family",
   d: ["Yes, one tribe that spread", "No, it is a racial group", "Yes, but only in Cameroon today", "No, it is a region"] },
];

/* Seeded RNG so a rerun gives the same layout. Correct slots: a shuffled run of 0-4 repeated, so each slot is used 5-6 times. */
let s = 20261117; const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const shuf = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
let slots = []; while (slots.length < Q.length) slots = slots.concat(shuf([0, 1, 2, 3, 4]));
Q.forEach((e, i) => { const o = shuf(e.d.slice()); o.splice(slots[i], 0, e.c); e.o = o; e.a = slots[i]; });

const used = new Set();
const pick = q => { const e = Q.find(x => q.startsWith(x.match)); if (e) used.add(e.match); return e; };

/* 1. lesson checks */
const P = require(path.join(ROOT, "..", "..", "_template", "course_patch.js"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
m.obj.lessons.forEach(L => L.blocks.forEach(b => { if (b.t !== "check") return; const e = pick(b.q); if (!e) throw new Error("no rewrite for check: " + b.q); if (e.q) b.q = e.q; b.o = e.o; b.a = e.a; }));
P.save(m);

/* 2/3. quiz (pack) and pre-checks (learning): patch the text in place so the rest of each file is untouched */
function arrEnd(t, i) { let d = 0, str = false; for (; i < t.length; i++) { const ch = t[i]; if (str) { if (ch === "\\") i++; else if (ch === '"') str = false; } else if (ch === '"') str = true; else if (ch === "[") d++; else if (ch === "]" && --d === 0) return i + 1; } throw new Error("unclosed array"); }
function patchFile(file, list) {
  let t = fs.readFileSync(file, "utf8");
  list.forEach(q => {
    const e = pick(q.q); if (!e) throw new Error("no rewrite for: " + q.q);
    const at = t.indexOf('"q": ' + JSON.stringify(q.q)); if (at < 0) throw new Error("not found in " + file + ": " + q.q);
    const oi = t.indexOf('"o": [', at), oe = arrEnd(t, oi + 5);
    const indent = (t.slice(0, oi).match(/\n( *)$/) || ["", ""])[1];
    const oTxt = '"o": [\n' + e.o.map(x => indent + " " + JSON.stringify(x)).join(",\n") + "\n" + indent + "]";
    t = t.slice(0, oi) + oTxt + t.slice(oe);
    const ai = t.indexOf('"a": ', oi); const am = t.slice(ai).match(/^"a": \d+/);
    t = t.slice(0, ai) + '"a": ' + e.a + t.slice(ai + am[0].length);
    if (e.q) t = t.replace('"q": ' + JSON.stringify(q.q), '"q": ' + JSON.stringify(e.q));
  });
  fs.writeFileSync(file, t, "utf8");
}
global.window = global; global.ARCHIVE_ADD = x => { global.PACK = x; };
const packF = path.join(ROOT, "pack-africa-pre-colonial.js"), learnF = path.join(ROOT, "learning-africa-pre-colonial.js");
require(packF); require(learnF);
patchFile(packF, PACK.quiz["africa-pre-colonial-1"]);
patchFile(learnF, COURSE_LEARN["africa-pre-colonial-1"].pretest);

const missed = Q.filter(e => !used.has(e.match)).map(e => e.match);
if (missed.length) throw new Error("rewrites not applied: " + missed.join(" | "));
const count = [0, 0, 0, 0, 0]; Q.forEach(e => count[e.a]++);
console.log("rewrote " + Q.length + " questions; correct slot A-E counts: " + count.join(" "));
