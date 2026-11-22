/* Applies the volume VI overview findings (Ajayi, Wallerstein, Boahen; 22/11/2026) to module 8, lesson 6, and adds their refs.
   Blocks come from gha6_overview_blocks_2026-11-22.json. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "gha6_overview_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-8");
if (JSON.stringify(m.obj).includes("gha6-wallerstein")) throw new Error("already applied");

// New section after the 'where the next course begins' callout, before the counting-years example.
P.insertAfter(m, "l6", "Where the next course begins", B.section);
P.insertAfter(m, "l6", "What does the 1830 invasion of Algeria show about the label", B.checks);
P.save(m);

// Refs: one per chapter, after the existing Daget ref.
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const VOL = "General History of Africa, vol. VI: Africa in the Nineteenth Century until the 1880s, ed. J. F. A. Ajayi (UNESCO, 1989)";
const U = "https://unesdoc.unesco.org/ark:/48223/pf0000184295";
const mk = (k, title, p) => '  "' + k + '": ' + JSON.stringify({ t: title + ", in " + VOL + "; read in full 22/11/2026", s: "UNESCO", u: U, b: "gha-vi", p: p, d: "22/11/2026" }) + ",\n";
const add = mk("gha6-ajayi", "J. F. A. Ajayi, Chapter 1, Africa at the beginning of the nineteenth century: issues and prospects", "Chapter 1 (ch-002.txt)")
  + mk("gha6-wallerstein", "I. Wallerstein, Chapter 2, Africa and the world-economy", "Chapter 2 (ch-003.txt)")
  + mk("gha6-boahen", "A. A. Boahen, Chapter 3, New trends and processes in Africa in the nineteenth century", "Chapter 3 (ch-004.txt)");
const anchor = t.indexOf('  "gha6-daget"');
if (anchor < 0) throw new Error("anchor ref not found");
const eol = t.indexOf("\n", anchor) + 1;
t = t.slice(0, eol) + add + t.slice(eol);
fs.writeFileSync(rp, t, "utf8");
console.log("applied to africa-pre-colonial-8 l6; refs added");
