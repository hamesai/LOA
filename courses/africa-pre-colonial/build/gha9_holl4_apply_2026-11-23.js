/* Applies UNESCO vol IX chapter 9 of Section III (Holl, food-producing economies) to module 1 l6. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-holl4}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("gha9-holl4")) throw new Error("already applied");
P.insertAfter(m, "l6", "Crops also travelled out of Africa", [
  { t: "p", x: "Holl's chapter in volume IX updates the farming picture of volume I. At Nabta Playa in the eastern Sahara the sorghum stayed morphologically wild, so it shows people using and perhaps tending a wild grass, not yet a domestic crop. " + H + " Seed imprints in pottery at the Butana site KG23 in eastern Sudan, dated 3500 to 3000 BCE, are his clearest early evidence of domestic sorghum. " + H + " For cattle he reports the older view that herders between the Nile and Nabta domesticated local wild cattle early in the Holocene, then quotes Brass (2017) that modern DNA and the dates of sheep and goats mean the idea of an independent early centre should be abandoned, and notes that Brass does not explain cattle in the Acacus before 6500 BCE. " + H + " [CONTESTED]" },
  { t: "p", x: "He gives dates for other crops. African rice is documented at Jenne-Jeno in layers of 300 to 200 BCE and at Dia in 800 to 700 BCE, the oldest black-eyed peas come from central Ghana at 1830 to 1595 BCE, and burned fonio and cowpea at Kerebe-Sira-Tomo 4 in Burkina Faso date from 1100 to 1200 CE. " + H + " Banana phytoliths from southern Cameroon date to 500 BCE and a core at Munsa in Uganda has banana phytoliths in a layer of 3500 BCE, which he says would force a rethink of tropical African farming 'if these data are confirmed'. " + H + " He also says the camel was domesticated on the Arabian Peninsula and reached North Africa under Roman rule. " + H + " [PROBABLE]" },
  chk("A page says bananas reached Africa only about 2,000 years ago with Austronesian settlers. What does Holl's chapter add?", ["Nothing, because the claim is settled", "Older phytoliths exist, but the early ones need confirming", "The oldest banana is from Madagascar", "Bananas are native to the Sahara", "Phytoliths cannot be dated"], 1, "Holl reports banana phytoliths of 500 BCE in Cameroon and of 3500 BCE at Munsa, and says the older finding must be confirmed before the origin story is rewritten. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-holl4": ' + JSON.stringify({ t: "A. F. C. Holl, The emergence and development of food-producing economies, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 9 of Section III (ch-073.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
