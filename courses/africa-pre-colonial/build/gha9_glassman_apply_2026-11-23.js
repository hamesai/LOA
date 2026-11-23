/* Applies UNESCO vol IX chapter 11 of Section IV (Glassman, Zanzibar's commercial empire) to module 6 l2. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-glassman}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha9-glassman")) throw new Error("already applied");
P.insertAfter(m, "l2", "Zanzibar then outgrew its rivals.", [
  { t: "p", x: "Glassman's chapter in volume IX adds three corrections. First, the 'Arab slavery' label is a misnomer, because many coastal plantation masters were Africans with little Middle Eastern ancestry, and claiming Arab descent was a claim to status that denied slave ancestry. " + H + " Second, he says Said bin Sultan moved his court to Zanzibar early in the century, which is earlier than the dates given in this lesson, so keep each attributed. " + H + " Third, he calls the saying 'when the pipes play at Zanzibar they dance at the lakes' a chauvinist fantasy, since Zanzibar's command of the trade routes was often exaggerated. " + H + " He also notes that Barghash was pressed by the British in 1873 to outlaw the ocean-going slave trade, though slaves were by then a minor part of exports. " + H + " [CONTESTED]" },
  chk("A book calls Zanzibar's plantation system 'Arab slavery' and says its planters were Arabs. What does Glassman's chapter add?", ["It confirms that all planters were Arabs", "Many masters were African, and 'Arab' claimed status", "Planters were all Indians", "Plantations used no enslaved labour", "The label was invented by Omanis in 1973"], 1, "Glassman says the label is a misnomer, many masters were Africans with little Middle Eastern ancestry, and a claim of Arab descent was a claim to status. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-glassman": ' + JSON.stringify({ t: "Jonathon Glassman, Zanzibar's commercial empire, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 11 of Section IV (ch-117.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
