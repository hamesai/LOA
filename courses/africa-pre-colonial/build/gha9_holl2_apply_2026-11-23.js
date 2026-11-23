/* Applies UNESCO vol IX chapter 21 (Holl, historical sciences; Konate introduction to the volume reviews) to module 1 l7 and module 8 l5. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-holl2}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m1.obj).includes("gha9-holl2")) throw new Error("already applied");
P.insertAfter(m1, "l7", "Bantu speech does not by itself mean ironworking", [
  { t: "p", x: "Holl's new synthesis in volume IX puts weight on climate and genes. Pollen records show the equatorial rainforest at its largest about 6,000 years ago, with a drop in rainfall about 4,000 years ago and a second shift to strong seasonality about 2,500 years ago, after which the forest shrank to scattered refuges and grassland spread. " + H + " On that evidence he argues there was no need to go round the forest, because it had largely gone. Y-chromosome and mitochondrial DNA from groups between the Nigeria-Cameroon border and the east and south do not support two branches that later met south of the forest, and the expanding Bantu speakers mixed with foragers on the way, which he calls demic diffusion. " + H + " Holl also notes the older argument was circular, since archaeologists leaned on linguists' reconstructions while linguists leaned on archaeologists' conclusions. " + H + " [PROBABLE]" },
  { t: "callout", k: "warn", x: "Holl's picture of one savannah frontier does not match the route in the language tree above, which follows the edge of the rainforest, and he writes that expansion began 4,000 years ago while the tree gives about 4,800 years for the Bantu branch. Treat the route and the date as [CONTESTED] between these two approaches. Holl also writes that the iron-metallurgy hypotheses in the 1981 volume I chapter are 'largely obsolete'. " + H }
]);
P.save(m1);
const m8 = P.load("africa-pre-colonial", "africa-pre-colonial-8");
P.insertAfter(m8, "l5", "The chapter on Afro-China relations before 1500", [
  { t: "p", x: "The review section of volume IX also drops Wallerstein's thesis, repeated in volume VI, that Africa stood outside the global economy before Europeans arrived, because recent work shows East Africa and Zanzibar belonged to an Indian Ocean system that reached Indonesia, China, India and Arabia. " + H + " [PROBABLE]" }
]);
P.save(m8);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-holl2": ' + JSON.stringify({ t: "A. F. C. Holl, Historical sciences and the multidisciplinary imperative, and D. Konate, Introduction to the review of volumes I to VIII, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 21 and Section II introduction (ch-037.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
