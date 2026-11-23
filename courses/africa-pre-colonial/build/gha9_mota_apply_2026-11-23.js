/* Applies UNESCO vol IX chapter 5 of Section II (Mota, review of vol V) to module 1 l1. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-mota}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("gha9-mota")) throw new Error("already applied");
P.insertAfter(m, "l1", "The newer volume IX", [
  { t: "p", x: "Mota's review of volume V, on the sixteenth to eighteenth centuries, lists limits to look for in any UNESCO volume. Most works it cites date from the 1970s and before, its chapters favour political history, and it refuses to give the Atlantic slave trade a determining role, which Ogot says in the concluding chapter. " + H + " It also uses the idea of 'Black Islam', a product of French colonialism, and sets the Sahara as a divide between the chapters on North Africa and those on the Sudan. " + H + " Its regions 'Upper Guinea' and 'Lower Guinea' reflect the slave trade, not local dynamics, the Kongo area is under-represented, Portuguese sources are scarcely used, and no woman authored a chapter. " + H + " [PROBABLE]" },
  chk("You cite volume V of the UNESCO General History for a claim about the Atlantic slave trade. What does Mota's review advise?", ["Treat it as final, since UNESCO published it", "Read it as a 1992 product with a stated bias, and check newer work", "Reject it, because it never mentions slavery", "Use it only for the nineteenth century", "Assume Portuguese sources are fully used"], 1, "Mota says volume V is dated, favours political history and refuses the slave trade a determining role, so claims from it need checking against newer work. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-mota": ' + JSON.stringify({ t: "Thiago Henrique Mota, Africa from the 16th to the 18th century: General History of Africa volume V (review), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Review of volume V (ch-051.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
