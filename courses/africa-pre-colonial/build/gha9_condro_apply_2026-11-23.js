/* Applies UNESCO vol IX chapter 17 (Condro, African written forms) to module 1 l4. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-condro}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("gha9-condro")) throw new Error("already applied");
P.insertAfter(m, "l4", "The Vai script was invented about 1833", [
  { t: "p", x: "Condro adds the wider record of African writing, so that 'no writing' cannot be argued from a single case. It runs from Egyptian hieroglyphs through Meroitic, Libyco-Berber and Ethiopic to the Vai script of 1832 to 1834 and King Njoya's Bamum script in Cameroon, and includes Arabic and Latin scripts adopted or adapted for African languages. " + H + " Meroitic was deciphered in 1911 and stayed in use until about 350 CE, and Rilly links its language to the eastern Sudanic branch of Nilo-Saharan. " + H + " The Ethiopic syllabary has 26 basic characters and 182 in all, with its oldest dated documents from the fourth century CE. " + H + " [PROBABLE]" },
  { t: "callout", k: "warn", x: "Three claims in the same chapter do not hold up on its own evidence. It places Meroitic writing in the third millennium BCE although it also says the script ended about 350 CE, so the early date looks like a slip. It cites Bekerie that Ethiopian inscriptions suggest a system at least 3,000 years old, against the fourth century CE for the oldest documents. It also speaks of nearly a million medieval Timbuktu manuscripts, which is a round figure with no source in the chapter. " + H + " Vai is now dated 1832 to 1834 here, 1833 above and 1818 or 1833 in volume VI; keep each date attributed. [CONTESTED]" },
  chk("A chapter states that the Ethiopic script is 'at least 3,000 years old' but lists the oldest documents as fourth-century CE coins and inscriptions. How should you treat the 3,000-year figure?", ["As established, because the chapter lists the script's history", "As one author's inference from inscriptions, weaker than the dated documents", "As proved by the coins", "As irrelevant because Ethiopia lies outside Africa", "As the same date given by every source"], 1, "The dated documents are fourth-century CE, while the 3,000-year figure is Bekerie's inference from inscriptions, so it needs separate support. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-condro": ' + JSON.stringify({ t: "Mlaali Condro, African written forms, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 17 (ch-033.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
