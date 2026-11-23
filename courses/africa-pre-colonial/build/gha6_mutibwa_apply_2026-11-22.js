/* Applies UNESCO vol VI ch 16 (Mutibwa) to module 6 lesson l7 and adds its ref. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "gha6_mutibwa_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha6-mutibwa")) throw new Error("already applied");
P.insertAfter(m, "l7", "Madagascar fed the Indian Ocean and Atlantic slave trades", B.section);
P.insertAfter(m, "l7", "A student says Malagasy is a Bantu language", B.checks);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const VOL = "General History of Africa, vol. VI: Africa in the Nineteenth Century until the 1880s, ed. J. F. A. Ajayi (UNESCO, 1989)";
const add = '  "gha6-mutibwa": ' + JSON.stringify({ t: "P. M. Mutibwa, with F. V. Esoavelomandroso, Chapter 16, Madagascar 1800-80, in " + VOL + "; read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000184295", b: "gha-vi", p: "Chapter 16 (ch-017.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha6-pankhurst"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
