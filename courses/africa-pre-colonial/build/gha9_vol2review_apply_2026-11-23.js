/* Applies UNESCO vol IX chapter 2 of Section II (Anselin review of vol II) to module 2 l1, l2, l3. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-anselin}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-2");
if (JSON.stringify(m.obj).includes("gha9-anselin")) throw new Error("already applied");
P.insertAfter(m, "l1", "Kerma, on the upper Nile in Sudan", [
  { t: "p", x: "Anselin's review adds newer Kerma work. Swiss and Sudanese excavations show large herds of cattle, with cattle skulls ringing the oldest royal tombs, and a pre-Kerma settlement of two hectares about 3000 BCE with storage pits, cattle pens and a fence barrier eight metres wide and 160 metres long. " + H + " Reisner took Kerma for an Egyptian trading post, while Hintze judged it the seat of the local ruler of Kush. " + H + " [PROBABLE]" }
]);
P.insertAfter(m, "l2", "Meroitic writing either continues Egyptian writing", [
  { t: "p", x: "Anselin sharpens the point: the Meroitic script has been read since the early twentieth century, but about 800 texts collected by Griffiths have given only a little vocabulary, a few word endings and no translation. Rilly's argument that the language belongs to a central Sudanic family has replaced the older link to Cushitic languages. " + H + " Anselin also says the decline of Kush should not be read as Kush simply fading, since Kushite culture 'sometimes asserts itself more in its specificity' and at other times follows Egyptian models. " + H + " [PROBABLE]" }
]);
P.insertAfter(m, "l3", "The Ethiopic script was derived from a south Arabian one", [
  { t: "callout", k: "warn", x: "The line above says the oldest surviving Ethiopic writing is of the thirteenth century, but Anselin's review says Ezana's fourth-century inscriptions introduced the vowel signs and syllabic form for writing Ge'ez, and that Aksum minted gold coins from the second century. " + H + " The two statements cannot both stand as written, so keep each attributed and check which kind of document (manuscript or inscription) each means. [CONTESTED]" },
  chk("Two UNESCO chapters differ on the oldest Ethiopic writing: one says thirteenth century, one points to fourth-century inscriptions. What is the first thing to check?", ["Which one was published later", "Whether each means manuscripts or inscriptions", "Which author is Ethiopian", "Whether Ge'ez is a real language", "Whether Aksum had any coins"], 1, "A claim about 'the oldest writing' depends on the kind of document counted, so find out whether manuscripts or inscriptions are meant before choosing a date. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-anselin": ' + JSON.stringify({ t: "Alain Anselin, Ancient civilizations of Africa: General History of Africa volume II (review), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Review of volume II (ch-042.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
