/* Applies UNESCO vol IX chapter 10 (Gayibor, oral traditions) to module 1 l3. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-gayibor}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("gha9-gayibor")) throw new Error("already applied");
P.insertAfter(m, "l3", "Yai also objects to the phrase", [
  { t: "p", x: "Gayibor adds a trap that works in the other direction: writing feeds back into speech. Many written sources are transcriptions of oral traditions, and once a version is printed it can return to the community and replace the older telling. His example is the founding legend of the Baule queen Pokou, set down by Delafosse in 1900 and now repeated in school books, tourist guides and on the internet. " + H + " So a tradition that sounds 'pure' may already carry a colonial-era written version inside it; ask when it was first recorded and by whom. [FIRM]" },
  { t: "p", x: "He also warns that the informants are dying. Fieldwork slowed after 1980 and he speaks of the 'programmed extinction of traditionalists', so collected recordings are now a finite archive. " + H + " [PROBABLE]" },
  chk("A tour guide tells you a founding legend 'exactly as the elders have always told it'. The earliest version you can find is a printed transcription from 1900 that is now in school books. What should you conclude?", ["The legend is proved ancient because the guide's version matches it", "The match may show feedback from the printed version, so test it against independent evidence", "The legend is false because it was written down", "Printed versions never influence oral ones", "Only the school books count as evidence"], 1, "Gayibor says printed versions of the Pokou legend spread back into popular tellings, so agreement with a printed text may reflect borrowing, not independent memory. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-gayibor": ' + JSON.stringify({ t: "Theodore Nicoue Gayibor, Oral traditions: sources of an updated African historiography, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 10 (ch-026.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
