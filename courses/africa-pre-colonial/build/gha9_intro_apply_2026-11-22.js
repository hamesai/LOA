/* Applies UNESCO vol IX (General History of Africa Revisited) general introduction (Holl) to modules 1, 6 and 8, and adds its ref. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-holl}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });

const m1 = P.load("africa-pre-colonial", "africa-pre-colonial-1");
const m1done = JSON.stringify(m1.obj).includes("gha9-holl");
if (!m1done) P.insertAfter(m1, "l1", "The Unesco General History was planned by", [
  { t: "p", x: "The newer volume IX, 'General History of Africa Revisited', says that after four decades of research most of the content of the first three volumes is 'partially or totally outdated'. Its editor Holl judges that volumes I and II probably need the most updating and that volume VIII was already dated soon after publication, and he replaces 'prehistory' with 'initial history'. " + H + " Check any claim from the 1981 volumes against newer work. [PROBABLE]" },
  chk("A textbook cites the UNESCO volumes of 1981 for a claim about early Saharan farming. How should you treat that citation?", ["As final, because UNESCO volumes are never revised", "As dated, and check it against newer work", "As worthless, because all eight volumes are outdated", "As final, because volume IX repeats volumes I and II unchanged", "As dated only if it comes from volume VIII"], 1, "Volume IX says volumes I and II are the ones most in need of updating, so older claims should be tested against newer research. " + H)
]);
if (!m1done) P.save(m1);

const m6 = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m6.obj).includes("gha9-holl")) throw new Error("already applied");
P.insertAfter(m6, "l2", "The dates of Zheng He's African calls differ", [
  { t: "p", x: "Volume IX gives a third set: the fourth voyage (1413 to 1415), the fifth (1416 to 1419) and the sixth (1421 to 1422) called at Mogadishu, Malindi and Mombasa, and the fleet exchanged goods for live animals such as zebras and giraffes. Holl adds that Chinese celadon from Mapungubwe Hill is now 'firmly dated' to the late Yuan and early Ming dynasties. Mapungubwe is usually placed in the thirteenth century, so ask which layers the shards came from (our reading). " + H + " Treat all of these dates as attributed to their authors. [CONTESTED]" }
]);
P.save(m6);

const m8 = P.load("africa-pre-colonial", "africa-pre-colonial-8");
P.insertAfter(m8, "l5", "Knight denies that Africans were widely assimilated in Asia", [
  { t: "p", x: "Volume IX adds China. The Tang annals record a Zanj girl offered as tribute from Srivijaya in 724, and further gifts of Zanj children in 813 and 818, with a black slave received by the Song court in 976. Africans worked as gatekeepers and caulkers in Guangzhou, brought by Arab and Indonesian intermediaries, and Ibn Battuta reached Guangzhou in 1345. Holl notes much more research is needed. " + H + " [PROBABLE]" }
]);
P.save(m8);

const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-holl": ' + JSON.stringify({ t: "A. F. C. Holl, General introduction and General History of Africa Revisited: an introduction, in General History of Africa Revisited, vol. IX (UNESCO); read in full 22/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "General introduction (ch-016.txt)", d: "22/11/2026" }) + ",\n";
const a = t.indexOf('  "gha6-conclusion"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
