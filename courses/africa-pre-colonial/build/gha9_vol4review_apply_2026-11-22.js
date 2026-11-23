/* Applies the volume IX review of GHA volume IV (Adande, ch-048) to modules 4, 6 and 7 and adds its ref. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const A = "{{gha9-adande}}";
const call = (x) => ({ t: "callout", k: "warn", x });
const p = (x) => ({ t: "p", x });
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });

const m7 = P.load("africa-pre-colonial", "africa-pre-colonial-7");
if (JSON.stringify(m7.obj).includes("gha9-adande")) throw new Error("already applied");
P.insertAfter(m7, "l2", "Mapungubwe lies in the Limpopo valley", [
  call("Volume IX's review of volume IV says powerful rulers occupied the hill of Mapungubwe 'from the fifteenth century', which conflicts with the thirteenth-century dates in this lesson, and in the same review Tom Huffman is said to see its builders as ancestors of the Venda while Fagan sees Great Zimbabwe as Shona. The reviewer also says Fagan's 'mystery' about Great Zimbabwe's origins may have been true twenty years earlier but no longer holds. Check the dates in the excavation reports. " + A + " [CONTESTED]"),
  chk("A summary says Mapungubwe's rulers lived on the hill 'from the fifteenth century', citing the volume IX review of volume IV. How should you handle it?", ["Accept it, because a review in a newer volume corrects the older dates", "Reject all of the review, because it was written by one author only", "Flag the clash and check the excavation reports", "Average the fifteenth century and the thirteenth to get about 1350", "Replace the thirteenth-century dates with the fifteenth in the lesson"], 2, "The review's date conflicts with the lesson's thirteenth-century range, so the careful step is to name the clash and check the primary reports. " + A)
]);
P.save(m7);

const m4 = P.load("africa-pre-colonial", "africa-pre-colonial-4");
P.insertAfter(m4, "l2", "Important excavations at Niani began only in 1968", [
  p("Volume IX's review of volume IV adds that a recent reconstruction of the Kurukan Fuga charter is dated '1236/1240 CE?', with a question mark, and in another passage says the Manden Charter was proclaimed after Kirina in 1235. Even within one volume the date is not fixed, and the review treats the charter as a key contribution to jeli (griot) historiography. It also adds that archaeology at Dhar Tichitt, Tegdaoust, Kumbi-Saleh and Jenne-Jeno shows Sahelian urban growth before the trans-Saharan trade, and that the sanankuya joking relationship is part of the heritage from this period. " + A + " [CONTESTED]")
]);
P.save(m4);

const m6 = P.load("africa-pre-colonial", "africa-pre-colonial-6");
P.insertAfter(m6, "l1", "Farming and fishing Bantu-speaking communities built towns", [
  p("Volume IX's reviewer criticises Matveiev's chapter in volume IV for saying knowledge of the Swahili is 'incomplete for want of sources'. He argues sites such as Shanga on the Lamu archipelago date before the tenth century, to about the eighth, with a small Muslim community less than a hundred years after Islam began, and that the many Kiswahili words for boats show an old tradition of navigation. He also notes Swahili society was already divided between rural and urban people by the twelfth century. " + A + " [PROBABLE]")
]);
P.insertAfter(m6, "l4", "The Hima and Tutsi against Iru and Hutu pattern grew", [
  p("Volume IX's review of Ogot's chapter in volume IV stresses that the old picture of pastoralist 'civilising conquerors' over passive farmers is a colonial myth, and that states in the Lakes region were formed by agriculturalists before pastoralists came. The terms 'pastoralist' and 'agriculturalist', the reviewer says, mark occupation, not ethnicity, though once institutionalised they became ethnic in practice. " + A + " [PROBABLE]")
]);
P.save(m6);

const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-adande": ' + JSON.stringify({ t: "A. Adande, Chapter 4, Africa from the 12th to the 16th century: General History of Africa volume IV (a review), in General History of Africa Revisited, vol. IX (UNESCO); read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 4 (ch-048.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
