/* Applies UNESCO vol IX chapter 8 of Section IV (Beaujard, Asian diasporas) to module 6 l1. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-beaujard2}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha9-beaujard2")) throw new Error("already applied");
P.insertAfter(m, "l1", "Archaeologists such as Horton and Middleton emphasise", [
  { t: "p", x: "Beaujard's chapter on Asian diasporas says the Shirazi origin myth was largely elaborated in the fifteenth century from memories of Persian arrivals in the Buyid period, and that the Shirazi were in fact Swahili people who left the Lamu Archipelago to spread Islam south along the coast. " + H + " Kufic inscriptions from Zanzibar and Tumbatu date to about 1100, and Omani papers from about 1116 and 1200 show Ibadis in Kilwa opposed to Twelver Shiites from Persia. " + H + " Yemeni Mahdalis settled at several ports in the second half of the thirteenth century, and in the fifteenth century Gujaratis were pre-eminent, with the Great Mosque of Kilwa rebuilt under Indian influences. " + H + " He concludes that the migrants' role may not have been as crucial as some researchers once thought, and that Swahili culture is primarily a mixed African culture. " + H + " [PROBABLE]" },
  chk("A museum label says Kilwa's rulers were Persian settlers from Shiraz. What does Beaujard's chapter suggest?", ["It is the confirmed origin of the coast", "The Shirazi myth was elaborated late; the culture was mainly African", "Persians never reached the coast", "Only Indians influenced the coast", "The Shirazi came from Madagascar"], 1, "Beaujard says the Shirazi myth was largely elaborated in the fifteenth century, the Shirazi were Swahilis from Lamu, and Swahili culture is primarily a mixed African culture. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-beaujard2": ' + JSON.stringify({ t: "Philippe Beaujard, Asian diasporas in East Africa and the islands (1st-15th century), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 8 of Section IV (ch-111.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
