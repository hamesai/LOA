/* Applies UNESCO vol IX chapter 1 of Section IV (Dembele, Inner Niger Delta) to module 1 l8. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-dembele}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m1.obj).includes("gha9-dembele")) throw new Error("already applied");
P.insertAfter(m1, "l8", "Holl, in volume IX, suggests three ways", [
  { t: "p", x: "Dembele's survey shows how crowded the delta was. Between 1989 and 1991 the Togue project recorded 834 anthropogenic mounds, ancient village sites, in a diamond of nearly 2,000 square kilometres around Djenne, Kouakourou, Mopti and Sofara, an average of 2.8 km apart, against over 6 km between villages today. " + H + " He says 65 mounds lie within 4 km of Djenne, and reads the delta as a refuge for people leaving the drying southern Sahara. " + H + " Metal traces appear in the first settlements at Dia, at the end of the ninth century BCE, and at Jenne-Jeno in the third century BCE. " + H + " [PROBABLE]" },
  { t: "p", x: "The neighbouring Mema region, of nearly 10,000 square kilometres, was an iron-producing province, and the largest site at Boulel has over 500 low-shaft furnaces, a scale Haaland calls industrial. " + H + " Dembele argues this iron and grain economy fed the rise of Ghana and Mali, and he says Ghana emerged in the sixth century, a date that is his and not a settled one. " + H + " [CONTESTED]" },
  chk("A student says 'there was nothing in the Niger delta before Ghana and Mali'. What does Dembele's survey show?", ["He agrees, since the delta was empty", "Hundreds of earlier mounds show dense settlement", "Only Jenne-Jeno existed there", "The mounds are all modern", "Settlement began with Mali"], 1, "The Togue survey recorded 834 mounds in a diamond of nearly 2,000 square kilometres, a very dense settlement system that predates the great empires. " + H)
]);
P.save(m1);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-dembele": ' + JSON.stringify({ t: "Mamadi Dembele, Population growth in the Inner Niger Delta (Mali) prior to the formation of the great empires, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 1 of Section IV (ch-101.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
