/* Applies UNESCO vol IX chapter 3 of Section II (Ba review of vol III) to module 3 l2 and module 7 l2. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-ba}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m3 = P.load("africa-pre-colonial", "africa-pre-colonial-3");
if (JSON.stringify(m3.obj).includes("gha9-ba")) throw new Error("already applied");
P.insertAfter(m3, "l2", "Accounts of the Kahina are late Arabic sources", [
  { t: "p", x: "Ba's review of volume III summarises the conquest as the volume tells it: a first stage from 641 to 649, a long pause in the civil war, the appointment of Ukba ibn Nafi in 670 and the founding of Kayrawan, the Berber kingdom of Kusayla from 687 to 690 and the Kahina's rising ending with her death in battle in 711. " + H + " Ba then warns that the volume stresses Islam so heavily that Africa appears to exist only through Islam and its world economy, and he agrees with Lewicki that Ukba's expeditions were 'rather to reconnoitre'. " + H + " So do not present the conquest as a single march with fixed dates, and keep the 711 date for the Kahina attributed, since other accounts differ. [CONTESTED]" },
  chk("A textbook gives a fixed date for every stage of the Arab conquest of the Maghreb and calls Ukba's raid a conquest. What does Ba's review suggest?", ["Keep the dates, since the volume gives them", "Treat the emphasis as Islam-centred and Ukba's raid as a reconnaissance", "Drop all dates because the sources are Arabic", "Say the Berbers never resisted", "Present Ukba as the founder of Mali"], 1, "Ba criticises volume III for giving international Islamic dynamics more weight than internal African ones, and cites Lewicki that Ukba's expeditions were rather reconnaissance. " + H)
]);
P.save(m3);
const m7 = P.load("africa-pre-colonial", "africa-pre-colonial-7");
P.insertAfter(m7, "l2", "Mapungubwe lies in the Limpopo valley", [
  { t: "p", x: "Volume III as summarised by Ba gives other dates: Huffman places the Zimbabwe culture's rise about a thousand years ago and Mapungubwe as its first capital from 1075 to 1220, fed by trade in beads, glass and cloth from the east coast for gold and ivory. " + H + " That sits alongside the 1220 to 1290 span given above for the hill itself, so keep each range attributed and ask which layer a date describes. [CONTESTED]" }
]);
P.save(m7);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-ba": ' + JSON.stringify({ t: "Idrissa Ba, Africa from the 7th to the 11th century: General History of Africa volume III (review), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Review of volume III (ch-045.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
