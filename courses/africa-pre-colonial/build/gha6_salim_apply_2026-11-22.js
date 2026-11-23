/* Applies UNESCO vol VI ch 9 (Salim) to module 6 lessons l2 and l3 and adds its ref. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "gha6_salim_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha6-salim")) throw new Error("already applied");
P.insertAfter(m, "l2", "Omani rule moved to Zanzibar under Sayyid Said", B.l2_section);
P.insertAfter(m, "l2", "A textbook says 'Portugal destroyed the Swahili towns", B.l2_checks);
P.insertAfter(m, "l3", "Luo immigrants reached the Kavirondo Gulf", B.l3_section);
P.insertAfter(m, "l3", "An atlas shows Arab trade routes deep into Kenya", B.l3_checks);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const VOL = "General History of Africa, vol. VI: Africa in the Nineteenth Century until the 1880s, ed. J. F. A. Ajayi (UNESCO, 1989)";
const add = '  "gha6-salim": ' + JSON.stringify({ t: "A. I. Salim, Chapter 9, The East African coast and hinterland, 1800-45, in " + VOL + "; read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000184295", b: "gha-vi", p: "Chapter 9 (ch-010.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha6-isaacman"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
