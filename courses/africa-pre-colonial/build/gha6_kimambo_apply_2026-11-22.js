/* Applies UNESCO vol VI ch 10 (Kimambo) to module 6 lessons l2 and l3 and adds its ref. Refuses to run twice.
   Run after gha6_salim_apply (it anchors on the Salim blocks). */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "gha6_kimambo_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha6-kimambo")) throw new Error("already applied");
P.insertAfter(m, "l2", "Worked example: how large was the disagreement over slave numbers", B.l2_section);
P.insertAfter(m, "l2", "A documentary says 'exactly 20000 people", B.l2_checks);
P.insertAfter(m, "l3", "Worked example: how quickly did the caravans spread", B.l3_section);
P.insertAfter(m, "l3", "A textbook says Arab traders opened up the East African interior", B.l3_checks);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const VOL = "General History of Africa, vol. VI: Africa in the Nineteenth Century until the 1880s, ed. J. F. A. Ajayi (UNESCO, 1989)";
const add = '  "gha6-kimambo": ' + JSON.stringify({ t: "I. N. Kimambo, Chapter 10, The East African coast and hinterland, 1845-80, in " + VOL + "; read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000184295", b: "gha-vi", p: "Chapter 10 (ch-011.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha6-salim"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
