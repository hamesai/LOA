/* Applies UNESCO vol IX chapter 3 of Section III (Blench, linguistic map) to module 1 l5. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-blench}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("gha9-blench")) throw new Error("already applied");
P.insertAfter(m, "l5", "Greenberg's classification of 1949 to 1963", [
  { t: "p", x: "Blench's chapter in volume IX shows how Greenberg's scheme has been revised. About 2,139 African languages are spoken today, in four phyla plus Austronesian on Madagascar, with about 1537 in Niger-Congo, 206 in Nilo-Saharan and 318 African Afroasiatic ones. " + H + " He says the unity of the first three phyla is generally accepted but lacks the proofs historians expect for Indo-European, that the unity of Khoisan swings back and forth, and that 'there remains much debate with a notable lack of consensus'. " + H + " Meroitic, which Greenberg put in Nilo-Saharan on thin evidence, now seems to belong there (Rilly and de Voogt). " + H + " [PROBABLE]" },
  { t: "p", x: "Blench also argues that the Afroasiatic family did not spread out of the Near East, because almost all its diversity lies in sub-Saharan Africa, especially Ethiopia. " + H + " He puts rough dates on the phyla from technology and climate: Nilo-Saharan about 12,000 years ago, Afroasiatic about 9000, Niger-Congo about 10,000 and Malagasy about 1500 years ago. " + H + " Malagasy is Austronesian, near the Barito languages of Borneo, with Malay sea terms and loanwords from Bantu languages of the East African coast. " + H + " Treat the dates as the author's correlations, not measurements. [CONTESTED]" },
  chk("Which statement about the four African language phyla is best supported by volume IX?", ["All four are proven to the standard of Indo-European", "The first three are widely accepted, but proofs are thinner", "Greenberg's scheme has been entirely abandoned", "Khoisan is certainly one single family", "Afroasiatic spread out of the Near East"], 1, "Blench says the first three phyla are generally accepted by specialists, but authoritative proofs of the Indo-European kind are lacking, and Khoisan unity is debated. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-blench": ' + JSON.stringify({ t: "Roger Blench, Linguistic map and classification of African languages, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 3 of Section III (ch-066.txt, ch-067.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
