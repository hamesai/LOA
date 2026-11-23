/* Applies UNESCO vol IX chapter 6 (Yai, Speaking of history in African languages) to module 1 lesson l3. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-yai}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("gha9-yai")) throw new Error("already applied");
P.insertAfter(m, "l3", "A folk tale is not oral tradition in this sense.", [
  { t: "p", x: "Yai, a linguist, adds a warning from Yoruba. Yoruba has several words for the activities that English calls 'history': ale, a twisted or transplanted tale told at night, itan, the account of the elders and diviners, and oriki, praise poetry that reopens the past in the present. " + H + " Translators usually render itan as 'history' and ale as 'myth', and Yai argues that one-word equivalents lose most of what the Yoruba terms hold. " + H + " The practical lesson is to ask which genre you are hearing before you decide what kind of evidence it is. [PROBABLE]" },
  { t: "p", x: "Yai also objects to the phrase 'oral tradition as a source', which he says puts speech beneath writing, and he reads Hampate Ba's line that an old man's death burns a library as a call to value the elders and their knowledge, not only to transcribe their words. " + H + " For this course the rule stays: an oral account is tested like any other testimony, but it is tested on its own terms. [CONTESTED]" },
  chk("A student finds the Yoruba word itan translated as 'history' in a textbook and treats every Yoruba account of the past as the same kind of source. What is the best correction?", ["Itan is the only Yoruba word for the past, so the student is right", "Several genres exist, so identify the genre and its teller before judging the evidence", "Yoruba accounts of the past are myth and should be discarded", "Only written Yoruba texts count as history", "Praise poetry is a modern invention and carries no past"], 1, "Yai shows that Yoruba separates tale, elders' account and praise poetry, so a single English word hides differences in who speaks and what the speech is for. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-yai": ' + JSON.stringify({ t: "Olabiyi B. J. Yai, Speaking of history in African languages, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 6 (ch-022.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
