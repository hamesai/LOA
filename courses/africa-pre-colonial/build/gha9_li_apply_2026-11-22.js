/* Applies UNESCO vol IX chapter 4 (Anshan Li, Afro-China relations before 1500) to module 8 lesson l5. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-li}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });

const m8 = P.load("africa-pre-colonial", "africa-pre-colonial-8");
if (JSON.stringify(m8.obj).includes("gha9-li")) throw new Error("already applied");
P.insertAfter(m8, "l5", "Volume IX adds China.", [
  { t: "p", x: "The chapter on Afro-China relations before 1500 adds material evidence for the Indian Ocean trade. Song-dynasty coins have been found at Mafia, Mogadishu, Gedi, Kilwa and Zanzibar, and blue and white porcelain appears in East Africa from the fourteenth century. " + H + " Li also says Chinese records note envoys from Mogadishu, Pate, Malindi and Zanzibar in 1285, 1286 and 1300, but he gives four places and three dates, so do not match each date to a place. " + H + " [PROBABLE]" },
  { t: "p", x: "Li's account of Zheng He's seventh voyage has the fleet at 100 ships, including 61 treasure ships, against three ships for Columbus and four for da Gama. " + H + " The same chapter repeats a story that Africans at Mozambique told da Gama in 1498 that white men in similar ships had come before, and Li concludes only that a Chinese fleet 'may' have arrived earlier. " + H + " Treat that as a possibility from one retold report, not as a result. [THIN EVIDENCE]" },
  { t: "callout", k: "warn", x: "Not every claim in the chapter carries equal weight. Li also cites studies that read skulls and figures from the Shang capital Anyang as showing an African presence in China in the seventeenth to eleventh century BCE, and says the origins of the Black figures in Han and Tang China are disputed, with 'multiple origins' the more reasonable view. " + H + " Coins, porcelain and dated records are firm evidence; the Shang reading is [CONTESTED]." },
  chk("A museum label says a Chinese fleet reached Mozambique before da Gama, citing Africans who told da Gama that white men had come before. What is the best reading of that evidence?", ["It proves the Chinese fleet landed there first", "It is a possibility from one retold report, to test against finds", "It shows Africans never traded with Asia before 1498", "It is settled because volume IX prints it", "It matters only for the Atlantic coast"], 1, "Li only says a Chinese fleet 'may' have arrived earlier, from a story retold about da Gama, so it is a possibility to test against archaeology, not a result. " + H)
]);
P.save(m8);

const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-li": ' + JSON.stringify({ t: "Anshan Li, Afro-China relations before 1500, in General History of Africa Revisited, vol. IX (UNESCO); read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 4 (ch-020.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
