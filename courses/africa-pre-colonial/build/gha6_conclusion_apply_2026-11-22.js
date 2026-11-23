/* Applies UNESCO vol VI ch 29 (Ajayi, conclusion) to module 8 lesson l6 and adds its ref. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "gha6_conclusion_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-8");
if (JSON.stringify(m.obj).includes("gha6-conclusion")) throw new Error("already applied");
P.insertAfter(m, "l6", "A website says Africa moved from the slave trade", [...B.section, ...B.checks]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const VOL = "General History of Africa, vol. VI: Africa in the Nineteenth Century until the 1880s, ed. J. F. A. Ajayi (UNESCO, 1989)";
const add = '  "gha6-conclusion": ' + JSON.stringify({ t: "J. F. A. Ajayi, Chapter 29, Conclusion: Africa on the eve of the European conquest, in " + VOL + "; read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000184295", b: "gha-vi", p: "Chapter 29 (ch-030.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha6-knight"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
