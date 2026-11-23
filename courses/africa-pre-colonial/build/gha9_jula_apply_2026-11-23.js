/* Applies UNESCO vol IX chapter 10 of Section IV (Cisse, Jula diaspora) to module 3 l4. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-cisse}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-3");
if (JSON.stringify(m.obj).includes("gha9-cisse")) throw new Error("already applied");
P.insertAfter(m, "l4", "Merchants, notably the Mande traders called Wangara or Dyula", [
  { t: "p", x: "Cisse's chapter says the Jula merchant class was established at the latest in the fifteenth century in the Senegal-Niger region, and that the word Jula is first mentioned in Richard Jobson's account of the Gambia in 1623. " + H + " Their long-distance trade centred on Saharan salt for forest kola, and Jula settlements grew along the trade roads, including the founding of Begho between forest and savannah in the fifteenth century. " + H + " That Begho date is later than the eleventh-century trading start given elsewhere in this course, so keep each attributed. " + H + " [CONTESTED]" },
  { t: "p", x: "He also describes Jula identity as built on trade, language and Islam, with the Jakhanke teacher al-Hajj Salim Suware setting out a peaceful, conciliatory stance in the fifteenth century that the Kong revolution of Sekou Watara in the early eighteenth century and Samori Ture later departed from. " + H + " He rejects the idea of Jula as a simple ethnic group, a category he says the French explorer Binger imposed in 1892. " + H + " [PROBABLE]" }
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-cisse": ' + JSON.stringify({ t: "Chikouna Cisse, Settlement and identity construction in West Africa: the Jula trading diaspora, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 10 of Section IV (ch-114.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
