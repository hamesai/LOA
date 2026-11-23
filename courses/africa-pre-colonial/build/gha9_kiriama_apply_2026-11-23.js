/* Applies UNESCO vol IX chapter 19 (Kiriama, heritage) to module 6 l1. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-kiriama}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha9-kiriama")) throw new Error("already applied");
P.insertAfter(m, "l1", "Kiswahili is closest to Mijikenda and Pokomo", [
  { t: "p", x: "Kiriama adds a living source for the hinterland. The Mijikenda, 'nine houses', claim descent from Singwaya (Shungwaya) and say their ancestors arrived more than 600 years ago and built fortified homesteads, the Kayas, on six hilltops. About three centuries ago the elders made the old Kayas sacred places and burial grounds. " + H + " The elders' lineages of the Kaya founders point to an origin of the Mijikenda groups after the sixteenth century, which is later than the 600 years in the arrival tradition, so the two figures are not the same claim. " + H + " Treat both as oral dates attributed to their tellers. [CONTESTED]" },
  chk("Mijikenda tradition says the ancestors arrived more than 600 years ago, but the Kaya elders' lineages point to an origin after the sixteenth century. What is the best way to read this?", ["Choose the earlier figure because it is older", "Keep both as attributed claims and test them against other evidence", "Average them to about the fifteenth century", "Reject both because they are oral", "Accept the later figure because lineages cannot be wrong"], 1, "Kiriama reports both figures, and they do not agree, so each is held as an attributed oral claim until independent evidence tests it. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-kiriama": ' + JSON.stringify({ t: "Herman O. Kiriama, Tangible and intangible heritage and new approaches of African history, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 19 (ch-035.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
