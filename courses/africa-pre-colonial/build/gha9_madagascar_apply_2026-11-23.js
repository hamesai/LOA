/* Applies UNESCO vol IX chapter 2 of Section IV (Esoavelomandroso, political constructions in Madagascar) to module 6 l7. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-madagascar}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha9-madagascar")) throw new Error("already applied");
P.insertAfter(m, "l7", "Tantara of rival groups contradict each other", [
  { t: "p", x: "In his second chapter Esoavelomandroso shows how varied Malagasy states were. Islamised trading city-states such as Mahilaka in the north-west and Irodo in the north-east were self-governing from the ninth century, and Langany later became the capital of a sultan-led group of trading posts. " + H + " Not every people had kings: the Tsimihety formed a confederation of 38 clans, and some groups ignored monarchy or rejected it after a short trial. " + H + " The west was dominated by the Sakalava kingdoms of Menabe and Boina, rich from trade with foreigners. " + H + " He dates Andriamasinavalona to 1675 to 1710, the first to unite most principalities, whose kingdom split among four sons, and Andrianampoinimerina to 1787 to 1810. " + H + " [PROBABLE]" },
  { t: "p", x: "He also argues that Radama I's 'Kingdom of Madagascar', recognised by foreign powers, still omitted large areas such as northern Menabe, the Mahafaly and the Androy, and that a Merina oligarchy ruled it as an army of occupation. " + H + " When France began colonising in 1896, he writes, political unification had not been concluded. " + H + " Treat 'unified Madagascar before colonisation' as an overstatement. [CONTESTED]" },
  chk("A textbook says Madagascar was a single united kingdom before French conquest. What does Esoavelomandroso's chapter say?", ["That is correct, since Radama unified the island", "Unification was unfinished; areas lay outside the kingdom", "The island had only city-states", "The French created the Merina kingdom", "Every group already had a king"], 1, "Esoavelomandroso lists regions that stayed outside Radama's kingdom and says unification had not been concluded when France began colonising. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-madagascar": ' + JSON.stringify({ t: "Manasse Esoavelomandroso, Political constructions in Madagascar from their origins to the 19th century, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 2 of Section IV (ch-104.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
