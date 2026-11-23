/* Applies UNESCO vol IX chapters 10 (di Lernia), 11 (Chami) and 12 (Wengrow) of Section III to modules 1 l6, 6 l1 and 2 l1. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const HD = "{{gha9-dilernia}}", HC = "{{gha9-chami}}", HW = "{{gha9-wengrow}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m1.obj).includes("gha9-dilernia")) throw new Error("already applied");
P.insertAfter(m1, "l6", "Holl's chapter in volume IX updates the farming picture", [
  { t: "p", x: "Di Lernia's chapter on pastoralism disagrees with the older picture of an independent African cattle centre. He says theories of independent domestication of cattle in Africa 'are no longer valid today', and that the most parsimonious reading of archaeology, bones and genes is an introduction of Bos taurus from south-west Asia around the mid-seventh millennium BCE. " + HD + " The earliest cattle and sheep or goats cluster in north-eastern Africa, with a cut-off date for small livestock around 6500 to 6200 BCE, and early domesticates at the Acacus sites from 6500 BCE. " + HD + " So the 'Andah' reading above, which treats Saharan cattle as earlier than those of the Nile Valley, and Holl's account of early cattle at Nabta, stand against a newer position. [CONTESTED]" },
  { t: "p", x: "Di Lernia adds what herding meant. Herders entered regions already held by hunter-gatherers who persisted in North Africa until at least the mid-fifth millennium BCE. " + HD + " Stone monuments with buried cattle appear from about 5600 to 5400 BCE at Nabta Playa, the Messak plateau and the Air mountains, and milk residues on pottery at Takarkori show dairying. " + HD + " Rock art did not begin with herders either, since late Pleistocene engravings of aurochs at Qurta show earlier art. " + HD + " [PROBABLE]" },
  chk("A web page says Saharan herders invented cattle domestication independently, citing Nabta Playa. What does di Lernia's chapter say?", ["That is now the settled view", "Such claims are no longer valid; cattle came from Asia", "Cattle were never kept in the Sahara", "Only sheep were domesticated there", "Nabta Playa has no cattle bones"], 1, "Di Lernia writes that theories of independent cattle domestication in Africa are no longer valid, and that the most likely route was an introduction from south-west Asia in the mid-seventh millennium BCE. " + HD)
]);
P.save(m1);
const m6 = P.load("africa-pre-colonial", "africa-pre-colonial-6");
P.insertAfter(m6, "l1", "Kiriama adds a living source for the hinterland", [
  { t: "p", x: "Chami argues that the East African coast and islands had food production far earlier than usually taught. He reports that his excavations on Zanzibar found cattle, goat, chicken, dog, cat and donkey bones at Kuumbi cave in a layer dated 3000 to 4000 BCE, and domestic animals with a date of 664 BCE at Mapangani cave on Pemba. " + HC + " He says this overturns the old consensus that domestic stock did not reach the coast east of the Serengeti, and he places the Egyptian land of Punt near Zanzibar, citing Kitchen and others. " + HC + " Both claims are minority readings resting on a few caves and relative pottery dates, so keep them attributed. [CONTESTED]" }
]);
P.save(m6);
const m2 = P.load("africa-pre-colonial", "africa-pre-colonial-2");
P.insertAfter(m2, "l1", "Kerma yielded 130 copper daggers", [
  { t: "p", x: "Wengrow's chapter in volume IX gives the Nile Valley a common prehistory. In the fifth millennium BCE, from about 5000 to 3800 BCE, cemeteries with rich body ornaments appear along both the Egyptian and Sudanese Nile, and mobile herding, not farming villages, was the base. " + HW + " At Kadruka in Sudan one mound has almost a hundred Neolithic burials arranged around a central male grave with cattle horns, which he reads as a hierarchy before any state. " + HW + " He argues the first Egyptian royal objects, such as Narmer's cosmetic palettes and mace-heads, copy forms from Nilotic herding societies that are 'as much Nubian and Sudanese as Egyptian', and calls Kerma and Meroe Egypt's rivals and closest cultural relatives. " + HW + " [PROBABLE]" }
]);
P.save(m2);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const R = (k, tt, p) => '  "' + k + '": ' + JSON.stringify({ t: tt, s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p, d: "23/11/2026" }) + ",\n";
const add = R("gha9-dilernia", "Savino di Lernia, Genesis and development of pastoralism in Sahara and North Africa, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 10 of Section III (ch-074.txt)")
 + R("gha9-chami", "Felix A. Chami, The advent of domestication in Eastern and Southern Africa, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 11 of Section III (ch-075.txt)")
 + R("gha9-wengrow", "David Wengrow, African foundations of ancient Egypt: a social and archaeological perspective, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 12 of Section III (ch-077.txt)");
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
