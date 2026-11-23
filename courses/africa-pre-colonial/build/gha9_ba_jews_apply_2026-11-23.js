/* Applies UNESCO vol IX chapter 7 of Section IV (Ba, Jewish diaspora) and chapter 6 (Razafindralambo, Madagascar slavery) to module 4 l3 and module 6 l7. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const HB = "{{gha9-bajews}}", HR = "{{gha9-razaf}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m4 = P.load("africa-pre-colonial", "africa-pre-colonial-4");
if (JSON.stringify(m4.obj).includes("gha9-bajews")) throw new Error("already applied");
P.insertAfter(m4, "l3", "Al-Mansur's motives were gold", [
  { t: "p", x: "Ba's chapter in volume IX adds a minority story. Jewish merchants lived along the Saharan routes and, by the fourteenth and fifteenth centuries, in Walata, Timbuktu, Gao and Tendirma. " + HB + " Influenced by his adviser al-Maghili, who had urged the massacre of the Jewish community of Touat, Askia Muhammad arrested the Jewish merchants of his empire, and they were then released or expelled. " + HB + " Ba says the claim of a massacre in Songhay is weakly substantiated, and that Jewish merchants returned in the eighteenth and nineteenth centuries. " + HB + " [PROBABLE]" },
  { t: "p", x: "He also warns that stories of Jewish origins for Fulani, Soninke, Berber and other peoples often rest on biblical parallels, misreadings of Ibn Khaldun, or colonial and missionary theories, and that the Portuguese even mistook Senegambian griots for Jews. " + HB + " Beta Israel of Ethiopia are, on the latest research, probably Agaw people who took a Jewish identity. " + HB + " [CONTESTED]" },
  chk("A website says the Fulani descend from Jewish ancestors because of similar customs. What does Ba's chapter advise?", ["Accept it, because customs match", "Check for misreadings and ideology before accepting it", "Reject all Jewish presence in Africa", "Treat Ibn Khaldun as proof", "Say the Portuguese confirmed it"], 1, "Ba shows that many Jewish-origin stories rest on biblical parallels, mistranslation and outside theories, and calls for caution because ideology plays a large role. " + HB)
]);
P.save(m4);
const m6 = P.load("africa-pre-colonial", "africa-pre-colonial-6");
P.insertAfter(m6, "l7", "In his second chapter Esoavelomandroso shows", [
  { t: "p", x: "Razafindralambo's chapter on slavery in Madagascar says enslaved people, andevo, could not become ancestors and had no tombs, while the freed could rejoin their group after a ritual 'washing'. " + HR + " She dates the 1817 treaty between Radama I and Farquhar to the end of the slave trade in return for weapons, notes it was not really applied, and says Madagascar imported slaves from East Africa from 1820. " + HR + " Abolition was proclaimed by the French on 26 September 1896. " + HR + " [PROBABLE]" }
]);
P.save(m6);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const R = (k, tt, p) => '  "' + k + '": ' + JSON.stringify({ t: tt, s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p, d: "23/11/2026" }) + ",\n";
const add = R("gha9-bajews", "Idrissa Ba, The long-term Jewish diaspora of Africa: between historical realities and borrowing processes, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 7 of Section IV (ch-110.txt)")
 + R("gha9-razaf", "Lolona Nathalie Razafindralambo, Slavery in Madagascar: former servitude and current aspects of inequality, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 6 of Section IV (ch-109.txt)");
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
