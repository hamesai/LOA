/* Applies UNESCO vol IX Section IV introduction (Holl) to module 4 l1, module 1 l8 and module 7 l2. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-holl5}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m4 = P.load("africa-pre-colonial", "africa-pre-colonial-4");
if (JSON.stringify(m4.obj).includes("gha9-holl5")) throw new Error("already applied");
P.insertAfter(m4, "l1", "Even on a firm 1076, the fall passed almost unnoticed", [
  { t: "p", x: "Holl's introduction to the ancient and modern history section of volume IX supports that reading. He says Ghana's height lay between 900 and 1100 CE, that its territory measured roughly 200,000 to 300,000 square kilometres around Awkar, and that an Almoravid expedition sacked Tegdaoust and Kumbi-Saleh in the middle of the eleventh century, but 'the kingdom did not collapse and the towns were not abandoned as was generally thought'. " + H + " Instead its wealth dwindled and trade routes shifted east to the Niger bend, and the Mema region shows fewer settlements after the end of the twelfth century. " + H + " He also says the old story that Ghana's dynasty was founded by Jewish or other Near Eastern immigrants has been discarded. " + H + " [PROBABLE]" },
  chk("A textbook says Ghana was destroyed by the Almoravids in 1076 and its towns abandoned. What does Holl's introduction say?", ["It is correct, since both towns were abandoned", "The towns were sacked, but the kingdom did not collapse", "The Almoravids never entered Ghana", "Ghana had no towns at all", "Ghana was founded by Jewish settlers"], 1, "Holl writes that the Almoravid expedition sacked Tegdaoust and Kumbi-Saleh in the middle of the eleventh century, but the kingdom did not collapse and the towns were not abandoned. " + H)
]);
P.save(m4);
const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
P.insertAfter(m1, "l8", "The McIntoshes argue for heterarchy", [
  { t: "p", x: "Holl, in volume IX, suggests three ways to read the missing signs of rank at Jenne-Jeno, a site of about 40 ha that was tested only in small units. It may have been a politically small place without prestigious office-holders, a booming trade town at the junction of river and desert transport, or both, in which case the excavated sample is too small. " + H + " He adds that rich burial mounds of the eighth to twelfth century lie near the Niger floodplain, so rank existed in the region even if it is not found in the town. " + H + " He dates Dia to 800 BCE and Jenne-Jeno to the third century BCE. " + H + " [CONTESTED]" }
]);
P.save(m1);
const m7 = P.load("africa-pre-colonial", "africa-pre-colonial-7");
P.insertAfter(m7, "l2", "Connah's survey adds scale", [
  { t: "p", x: "Holl's survey gives Mapungubwe still other dates. He calls it a state of about 1100 to 1280 CE, with an elite hilltop and commoners below, abandoned as droughts, soil depletion and shifting trade routes pulled primacy north to the Zimbabwe plateau. " + H + " He places Great Zimbabwe's emergence at the end of the thirteenth century, its peak from 1300 to 1450, and its decline from the middle of the fifteenth century as Torwa and Mutapa took the long-distance trade. " + H + " Keep each range attributed to its author. [CONTESTED]" }
]);
P.save(m7);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-holl5": ' + JSON.stringify({ t: "A. F. C. Holl, Introduction to Section IV, Ancient and modern history of Africa: an update, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Section IV introduction (ch-099.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
