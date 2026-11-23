/* Applies UNESCO vol IX chapter 1 of Section II (Holl review of vol I) to module 1 l7. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-holl3}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("gha9-holl3")) throw new Error("already applied");
P.insertAfter(m, "l7", "Holl's picture of one savannah frontier", [
  { t: "p", x: "Holl's review of volume I tells you which of its claims have not lasted. Its introduction says centuries of slave trading kept population density below the level at which 'civilization' could appear, but Holl replies that complex societies and urbanism are now documented in West Africa from 2000 BCE and that bananas in southern Cameroon about 500 BCE show the equatorial forest was not a barrier. " + H + " He calls Huard's link between the Sao of the Chad basin and cultures out to the Nile 'inaccurate', and he calls the Central African stone-age chapters' pluvial chronology 'completely obsolete' by the early 1980s. " + H + " He also notes that Sutton's pan-African 'aqualithic civilization' of Nilo-Saharan speakers is particularly controversial. " + H + " [PROBABLE]" },
  { t: "p", x: "On iron, the volume I chapter on West Africa reports iron smelting at Taruga in central Nigeria and on Niger mounds from the fifth to third centuries BCE and says it seems to have come from Carthaginian North Africa, while the Nile chapter treats Meroe as the source of sub-Saharan iron. " + H + " Holl's verdict is that the iron hypotheses of volume I are largely obsolete, so cite those origin stories as 1981 positions, not results. " + H + " [CONTESTED]" },
  chk("A web page cites the 1981 UNESCO volume I to say West African ironworking came from Carthage. What is the best response?", ["Accept it, since UNESCO published it", "Treat it as a 1981 hypothesis that Holl calls largely obsolete", "Treat it as proven by the Taruga dates", "Replace it with the claim that iron came from Meroe", "Reject all dates from Taruga as invented"], 1, "Holl records the Carthage origin as a volume I suggestion and judges the volume's iron hypotheses largely obsolete, so the claim needs newer evidence. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-holl3": ' + JSON.stringify({ t: "A. F. C. Holl, Methodology and African prehistory: General History of Africa volume I (review), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Review of volume I (ch-039.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
