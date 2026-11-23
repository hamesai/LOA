/* Applies UNESCO vol IX chapter 1 of Section III (Lezine, paleoclimate) to module 1 l6 and Coquery-Vidrovitch's review of vol VI to modules 7 l6 and 8 l6. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const HL = "{{gha9-lezine}}", HC = "{{gha9-cqv}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m1.obj).includes("gha9-lezine")) throw new Error("already applied");
P.insertAfter(m1, "l6", "No part of the Sahara has a stratigraphy", [
  { t: "p", x: "Lezine's synthesis of pollen and lake records gives the climate frame for those dates. After the last Ice Age a surge of monsoon rain made large lakes and a river network in what is now desert, the African Humid Period, and tropical trees spread north into the Sahara around 10 ka. " + HL + " Its start is argued: one marine study puts the onset around 14.8 ka in West Africa, while lake records elsewhere show wetter conditions earlier, so the 'abrupt' start is not agreed. " + HL + " The end was a general drying with abrupt forest loss between 4.5 ka and 2.5 ka, and at Lake Bambili in Cameroon over half the forest disappeared about 3.3 ka. " + HL + " Pollen also shows oil palm exploited from 4.15 ka, banana from 2.7 ka and pearl millet from 2.5 ka in the western Central African forest. " + HL + " [PROBABLE]" },
  chk("A page says the Sahara dried up 'suddenly' about 5,000 years ago. What does Lezine's evidence suggest?", ["It was sudden everywhere, with one date", "Drying varied by place, between 4.5 ka and 2.5 ka", "The Sahara never had lakes", "The desert dried before the last Ice Age", "Only the east of the Sahara changed"], 1, "Lezine says the transition was abrupt or gradual depending on local conditions, with forest loss between 4.5 ka and 2.5 ka, so one sudden date does not fit. " + HL)
]);
P.save(m1);
const m7 = P.load("africa-pre-colonial", "africa-pre-colonial-7");
P.insertAfter(m7, "l6", "The term mfecane, or difaqane", [
  { t: "p", x: "Coquery-Vidrovitch's review of volume VI adds two cautions. The chapters on the Nguni region say nothing about slavery, yet later studies show export networks to the Indian Ocean through Delagoa Bay and to the Atlantic along the Namibian coast were wider than thought. " + HC + " And the older theory that Shaka's Zulu kingdom caused the mfecane is now debated, because Shaka's power and ferocity may have been 'invented' in part by Boer tradition. " + HC + " She also notes the volume's phrase 'Kaffir Wars' should read Xhosa Wars. " + HC + " [CONTESTED]" },
  chk("A textbook says Shaka's cruelty alone caused the mfecane. What does the review of volume VI suggest?", ["Accept it, since the old theory is standard", "Treat it as contested, since parts of the image may be invented", "Reject it because Shaka never existed", "Say the slave trade explains everything", "Say Boer sources are the best evidence"], 1, "Coquery-Vidrovitch reports that South African historians now debate whether Shaka's ferocity was partly invented by the Boer tradition, so the single-cause story is contested. " + HC)
]);
P.save(m7);
const m8 = P.load("africa-pre-colonial", "africa-pre-colonial-8");
P.insertAfter(m8, "l6", "Historians in UNESCO's volume VI disagree", [
  { t: "p", x: "The same review of volume VI challenges two of its premises. It calls Boahen's opening claim that the abolition of the slave trade was the most revolutionary change of the century controversial, since abolition touched little of Africa before the 1850s and the Atlantic trade stayed at a level comparable to the eighteenth century until then, while slavery within West Africa grew in the last third of the century. " + HC + " It also says the often-repeated figure of 12 million people crossing the Sahara was questioned by a quantitative study that puts it at 6 or 7 million between the tenth and nineteenth centuries. " + HC + " Keep both figures attributed. [CONTESTED]" },
  chk("A book says 12 million enslaved people crossed the Sahara. What does the review of volume VI add?", ["That figure is now certain", "A quantitative study questions it, giving 6 or 7 million", "The real figure is below one million", "The Sahara carried no slave trade", "Figures cannot be compared"], 1, "Coquery-Vidrovitch reports that a serious quantitative study questions the 12 million figure and brings it to 6 or 7 million between the tenth and nineteenth centuries. " + HC)
]);
P.save(m8);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-lezine": ' + JSON.stringify({ t: "Anne-Marie Lezine, Paleoclimatic and paleoenvironmental research in Africa, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 1 of Section III (ch-063.txt)", d: "23/11/2026" }) + ",\n" +
 '  "gha9-cqv": ' + JSON.stringify({ t: "Catherine Coquery-Vidrovitch, Africa in the 19th century until the 1880s: General History of Africa volume VI (review), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Review of volume VI (ch-057.txt, ch-058.txt, ch-059.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
