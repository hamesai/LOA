/* Applies UNESCO vol IX chapters 3 and 4 of Section IV (Henriques; Ciss) to module 8 l3. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const HH = "{{gha9-henriques}}", HC = "{{gha9-ciss}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-8");
if (JSON.stringify(m.obj).includes("gha9-henriques")) throw new Error("already applied");
P.insertAfter(m, "l3", "Slavery inside the Sahel existed long before the Atlantic trade", [
  { t: "p", x: "Volume IX contains two chapters that disagree about slavery inside Africa. Henriques argues for south-central Africa that most dependants were integrated through kinship, marriage and debt pawnship, that they could change masters, and that 'modern slavery, in which men lose their human qualities to become simple commodities' was created by Arab and European intervention. " + HH + " She also reports that a traveller in the mid-1800s said a third to a half of the people of the Bie plateau in Angola were enslaved. " + HH + " Ciss, writing on Senegambia, quotes historians who disagree: Grenouilleu stresses internal origins of slavery and warrior elites, while Niane says it is an exaggeration to root slavery in African culture. " + HC + " He describes aristocratic raids, such as the Tieddo attacks at harvest time, and refuge strategies of the Serer, the Bassari and others. " + HC + " [CONTESTED]" },
  { t: "p", x: "Ciss adds that Islamic reform movements did not end domestic slavery: the theocracies of Boundou, Fouta Toro and Fouta Jalon institutionalised it, and in Fouta Toro opposition from provincial dignitaries to abolition helped defeat Abdel Kader. " + HC + " Read the two chapters side by side, because 'gentle' kin-based dependence and elite raiding existed together in different places and periods. [PROBABLE]" },
  chk("Two chapters in one UNESCO volume describe African slavery very differently. What is the best reading?", ["One chapter must be wrong; delete it", "Both describe real patterns; test each by region and period", "Slavery did not exist before Europeans came", "Only the chapter by the older author counts", "Slavery was identical everywhere"], 1, "Henriques stresses integration and Ciss stresses raiding and elite enslavement, so the sources point to different regional and period patterns that have to be tested separately. " + HC)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const R = (k, tt, p) => '  "' + k + '": ' + JSON.stringify({ t: tt, s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p, d: "23/11/2026" }) + ",\n";
const add = R("gha9-henriques", "Isabel Castro Henriques, Modalities of enslavement in south-central Africa (18th-19th century), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 3 of Section IV (ch-106.txt)")
 + R("gha9-ciss", "Ismaila Ciss, Slave trade and resistance in Senegambia, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 4 of Section IV (ch-107.txt)");
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
