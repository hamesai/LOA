/* Applies UNESCO vol IX chapters 20 (Beaujard) and 21 (Robertshaw) of Section III to module 6 l2 and l4; fixes a number citation in module 2 l3. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const HB = "{{gha9-beaujard}}", HR = "{{gha9-robertshaw}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m6 = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m6.obj).includes("gha9-beaujard")) throw new Error("already applied");
P.insertAfter(m6, "l2", "Kilwa peaked around the 13th and 14th centuries", [
  { t: "p", x: "Beaujard's chapter places Kilwa in a longer pattern. He sees four phases: a periphery of an Afro-Eurasian system until about 600, a semi-periphery from 600 to 1000 with the first Swahili city-states, an active part in that system from the tenth to the fourteenth century, and a restructuring in the fifteenth and sixteenth centuries. " + HB + " A Yemeni dynasty took power in Kilwa in the thirteenth century. " + HB + " The world system fell into a sudden decline in 1320 to 1330, with plague from China from 1346, and Kilwa 'seems to have become depopulated', its Great Mosque collapsing in the fourteenth century and being rebuilt a century later, and Husuni Kubwa left unfinished. " + HB + " Treat the depopulation as an inference from those buildings, not a counted loss. [PROBABLE]" },
  { t: "p", x: "For the Portuguese he writes that they took Sofala in 1503 and Kilwa and Mombasa in 1505, and that their arrival reconfigured trade networks without weakening the Swahili city-states. " + HB + " That differs from the 1503 capture of Zanzibar given below, so keep both attributed. [CONTESTED]" }
]);
P.save(m6);
const m6b = P.load("africa-pre-colonial", "africa-pre-colonial-6");
P.insertAfter(m6b, "l4", "Oral tradition links these sites to the legendary Chwezi", [
  { t: "p", x: "Robertshaw's chapter in volume IX says archaeologists and historians are now sceptical of the picture of the Bachwezi as rulers of a loosely organised empire in the fourteenth century. " + HR + " One ditch at Bigo seems to date between the late thirteenth and mid-fifteenth century, and the ditches at Munsa to the fifteenth or sixteenth century. " + HR + " He notes that Bachwezi figures are tied to places such as Mubende Hill that have no earthworks, while earthwork sites are tied to figures such as Kateboha who are not in the Bachwezi traditions, so the earthworks cannot be identified as Bachwezi capitals. " + HR + " He reads the Bachwezi instead as a network of spirit-mediums, and the sites at Ntusi as a chiefdom with a two-tier hierarchy, with no archaeological evidence of outside immigrants. " + HR + " [CONTESTED]" },
  chk("A guidebook says the Bigo earthworks were the capital of the Bachwezi empire. What does Robertshaw's chapter say?", ["The claim is confirmed by dating", "Dates fit loosely, but traditions and sites do not match", "Bigo was built by Egyptians", "Bigo was built by Great Zimbabwe's builders", "The earthworks have never been dated"], 1, "Robertshaw says the earthwork dates correlate reasonably with conjectured Bachwezi dates, but the places linked to the Bachwezi lack earthworks and the earthwork sites are linked to other figures, so the capital claim fails. " + HR)
]);
P.save(m6b);
const m2 = P.load("africa-pre-colonial", "africa-pre-colonial-2");
let n = 0;
for (const l of m2.obj.lessons) for (const b of l.blocks || []) if (b.t === "p" && b.x && b.x.startsWith("The volume IX chapter by Curtis and Schmidt revises the picture.")) {
  b.x = b.x.replace(" That differs from the 75 hectares and 20,000 people given above, so keep both attributed. {{gha9-curtis}}", " That differs from the figures given above, so keep both attributed."); n++; }
if (n !== 1) throw new Error("curtis para not found");
P.save(m2);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const R = (k, tt, p) => '  "' + k + '": ' + JSON.stringify({ t: tt, s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p, d: "23/11/2026" }) + ",\n";
const add = R("gha9-beaujard", "Philippe Beaujard, East Africa and the Indian Ocean networks (1st-15th century), in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 20 of Section III (ch-095.txt)")
 + R("gha9-robertshaw", "Peter Robertshaw, The emergence of social complexity in the Great Lakes region, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 21 of Section III (ch-098.txt)");
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
