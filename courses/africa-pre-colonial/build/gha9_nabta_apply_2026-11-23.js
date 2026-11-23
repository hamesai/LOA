/* Applies UNESCO vol IX chapter 13 of Section III (Ibrahim, Nabta Playa) to module 2 l1. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-ibrahim}}";
const m = P.load("africa-pre-colonial", "africa-pre-colonial-2");
if (JSON.stringify(m.obj).includes("gha9-ibrahim")) throw new Error("already applied");
P.insertAfter(m, "l1", "Wengrow's chapter in volume IX gives the Nile Valley", [
  { t: "p", x: "Nabta Playa in Egypt's Western Desert adds a ritual centre of cattle herders. Its megalithic alignments, a small calendar circle and tumuli with buried cattle belong to the Late Neolithic, and the circle faces the summer solstice sunrise, which would have signalled the coming rains. " + H + " Ibrahim says the circle was not a precise sighting device and that alignments dated by star positions to 4800 to 4000 BCE may have commemorated a link between heaven and earth rather than fixed a calendar. " + H + " No burials lie under the megaliths, and one 'Little Lord of Nabta' tumulus held only a boy's skull, so the claim of a ranked society rests on thin grave evidence. " + H + " [THIN EVIDENCE]" }
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-ibrahim": ' + JSON.stringify({ t: "Hebat Allah A. A. Ibrahim, Megaliths of Nabta Playa: ritual complex and astronomical observatory, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 13 of Section III (ch-078.txt, ch-079.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
