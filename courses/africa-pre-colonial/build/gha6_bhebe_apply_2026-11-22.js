/* Applies UNESCO vol VI ch 7 (Bhebe) to module 7 lessons l5 and l6 and adds its ref. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "gha6_bhebe_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-7");
if (JSON.stringify(m.obj).includes("gha6-bhebe")) throw new Error("already applied");
P.insertAfter(m, "l5", "Cetshwayo, from 1872", B.l5_section);
P.insertAfter(m, "l5", "A website says Shaka invented the regiment system", B.l5_checks);
P.insertAfter(m, "l6", "Mzilikazi's Ndebele grew", [...B.l6_section_a, ...B.l6_section_b]);
P.insertAfter(m, "l6", "Missionaries report a horde of 30,000 attackers", B.l6_checks);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const VOL = "General History of Africa, vol. VI: Africa in the Nineteenth Century until the 1880s, ed. J. F. A. Ajayi (UNESCO, 1989)";
const add = '  "gha6-bhebe": ' + JSON.stringify({ t: "N. Bhebe, Chapter 7, The British, Boers and Africans in South Africa, 1850-80, in " + VOL + "; read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000184295", b: "gha-vi", p: "Chapter 7 (ch-008.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha6-cape"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
