/* Applies UNESCO vol IX chapter 8 (Binam Bikoi, The word Africa) to module 1 l1 and module 2 l4. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-binam}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m1.obj).includes("gha9-binam")) throw new Error("already applied");
P.insertAfter(m1, "l1", "The newer volume IX", [
  { t: "p", x: "Even the name 'Africa' has no settled origin. Binam Bikoi lists the proposals: the Berber group Afrig south of Carthage, two Phoenician words, the Latin word for sunny, and a king named Ifriqui of Yemen whom Leo Africanus reported. He says recent work tends to credit the Leo Africanus version, while Ki-Zerbo thought the Arabic Ifriqiya was a transliteration of the Roman name. " + H + " The Roman use of the name is well attested, so treat the Yemeni king as a medieval tradition, not an established origin. [CONTESTED]" },
  chk("Which statement about the origin of the name 'Africa' fits the evidence in volume IX?", ["It comes from Arabic and was first used in the Middle Ages", "Several origins are proposed and none is settled", "It is a Greek word invented by Herodotus", "It was chosen by African states in 1963", "Ki-Zerbo proved it comes from a Yemeni king"], 1, "Binam Bikoi lists several rival etymologies, and Ki-Zerbo says the ultimate origin is hard to pin down, so no single origin is settled. " + H)
]);
P.save(m1);
const m2 = P.load("africa-pre-colonial", "africa-pre-colonial-2");
P.insertAfter(m2, "l4", "After Meroë the Nubian kingdoms of Nobadia", [
  { t: "p", x: "Volume IX describes the baqt as a treaty after a battle the Nubians had won: Arab losses are put at 2,000 dead, and Makuria agreed to deliver 360 slaves a year. " + H + " The same author calls it the first instance of the slave trade, which goes beyond his evidence, since the chapter gives no earlier record to compare. Take the figures as his reading of Ibn Khaldun's tradition. [CONTESTED]" }
]);
P.save(m2);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-binam": ' + JSON.stringify({ t: "Charles Binam Bikoi, The word Africa and its strategic challenges, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 8 (ch-024.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
