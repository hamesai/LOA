/* Applies UNESCO vol VI ch 6 (Mashingaidze) to module 7 lesson l5 and adds its ref. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "gha6_cape_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-7");
if (JSON.stringify(m.obj).includes("gha6-cape")) throw new Error("already applied");
P.insertAfter(m, "l5", "Shaka is the plainest case", B.section);
P.insertAfter(m, "l5", "A website says Shaka invented the regiment system", B.checks);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const VOL = "General History of Africa, vol. VI: Africa in the Nineteenth Century until the 1880s, ed. J. F. A. Ajayi (UNESCO, 1989)";
const add = '  "gha6-cape": ' + JSON.stringify({ t: "E. K. Mashingaidze, Chapter 6, The impact of the Mfecane on the Cape Colony, in " + VOL + "; read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000184295", b: "gha-vi", p: "Chapter 6 (ch-007.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha6-mfecane"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
