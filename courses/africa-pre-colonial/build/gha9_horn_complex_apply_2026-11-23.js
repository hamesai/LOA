/* Applies UNESCO vol IX chapters 16 (Huysecom, pottery), 18 (Connah, complexity) and 19 (Curtis and Schmidt, northern Horn) of Section III to modules 1 l6, 7 l2 and 2 l3. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const HH = "{{gha9-huysecom}}", HC = "{{gha9-connah}}", HK = "{{gha9-curtis}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m1.obj).includes("gha9-huysecom")) throw new Error("already applied");
P.insertAfter(m1, "l6", "Di Lernia adds what herding meant", [
  { t: "p", x: "Huysecom's chapter dates the oldest African pottery. At Ounjougou on the Bandiagara plateau in Mali, sherds in the early Holocene layers of Ravin de la Mouche carry a terminus ante quem of 9400 BCE, found with small bifacial arrowheads, and he argues pottery was invented south of the Sahara and then spread to the Central and Eastern Sahara around 9000 BCE. " + HH + " He treats the Nile Valley as unresolved, because the dated sherds at Bir Kiseiba lack a clear stratigraphic link to the dates. " + HH + " He also warns that 'Neolithic' is used in two conflicting ways in Africa, either for any site with pottery or only for true food-production economies, so check which sense a source means. " + HH + " [PROBABLE]" }
]);
P.save(m1);
const m7 = P.load("africa-pre-colonial", "africa-pre-colonial-7");
P.insertAfter(m7, "l2", "Volume III as summarised by Ba gives other dates", [
  { t: "p", x: "Connah's survey adds scale. He gives the succession of large Zambezian settlements between the thirteenth and nineteenth century as Mapungubwe, Great Zimbabwe, Khami and Danangombe, and says Great Zimbabwe might have held as many as 18,000 people. " + HC + " On the Highveld he reports a visitor's estimate of 20,000 for Kaditshwene in the early nineteenth century, when Cape Town, the biggest colonial settlement, held fewer than 19,000. " + HC + " Both figures are estimates, so quote them as such. [PROBABLE]" }
]);
P.save(m7);
const m2 = P.load("africa-pre-colonial", "africa-pre-colonial-2");
P.insertAfter(m2, "l3", "By AD 500 Aksum was a highland city", [
  { t: "p", x: "The volume IX chapter by Curtis and Schmidt revises the picture. It estimates that the urban centre of Aksum covered 80 to 100 ha in the first four centuries CE and about 180 ha by the sixth century, with perhaps 50,000 people at its height. " + HK + " That differs from the 75 hectares and 20,000 people given above, so keep both attributed. " + HK + " [CONTESTED]" },
  { t: "p", x: "They also argue against a South Arabian origin. Communities of the first millennium BCE in Tigray and Eritrea farmed cattle, sheep, goats, teff, barley and emmer wheat, and many had little hierarchy, while South Arabian temples, inscriptions and titles such as malik at Yeha are limited to ceremonial sites that local elites seem to have adopted. " + HK + " An inscribed polity named D'MT is known only from a few inscriptions and is not named outside Ethiopia and Eritrea. " + HK + " Aksum itself had no large irrigation system, relied on rain-fed farming and water conservation, and issued coins from the late third century CE to the mid-seventh century CE. " + HK + " [PROBABLE]" },
  chk("A textbook says Aksum was founded by South Arabian settlers. What does the evidence in volume IX support?", ["The claim, because Sabaean inscriptions exist", "Local development, with South Arabian features borrowed", "That Aksum had no writing before the fourth century", "That Aksum copied Egypt entirely", "That Yeha was built by Romans"], 1, "Curtis and Schmidt find a long local farming and settlement history and say South Arabian forms occur in a small range of elite sites that local elites seem to have adopted. " + HK)
]);
P.save(m2);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const R = (k, tt, p) => '  "' + k + '": ' + JSON.stringify({ t: tt, s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p, d: "23/11/2026" }) + ",\n";
const add = R("gha9-huysecom", "Eric Huysecom, The invention of pottery in Africa and the context in which it appeared, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 16 of Section III (ch-084.txt)")
 + R("gha9-connah", "Graham Connah, The emergence of complex societies and urbanization in Africa, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 18 of Section III (ch-089.txt)")
 + R("gha9-curtis", "Matthew C. Curtis and Peter R. Schmidt, The growth of socio-political complexity in the northern Horn of Africa, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", "Chapter 19 of Section III (ch-092.txt)");
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
