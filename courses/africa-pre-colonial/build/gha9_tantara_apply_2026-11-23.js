/* Applies UNESCO vol IX chapter 11 (Esoavelomandroso, Tantara) to module 6 l7. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-tantara}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-6");
if (JSON.stringify(m.obj).includes("gha9-tantara")) throw new Error("already applied");
P.insertAfter(m, "l7", "Merina state-making began under Ralambo", [
  { t: "p", x: "Much of this history comes from tantara, the oral narratives of Malagasy lineages and kingdoms, which Esoavelomandroso says cover the sixteenth century to the colonial conquest. " + H + " They have a clear owner and purpose: a lineage's tantara states its claim to its ancestral land, and royal tantara try to replace lineage ones. " + H + " Slaves are said to have no ancestors and so no tantara, and outcast groups' tantara were smothered or distorted by the powerful. " + H + " The first European to collect and publish tantara was Flacourt in 1658, from the Anosy region. " + H + " [PROBABLE]" },
  { t: "callout", k: "warn", x: "Tantara of rival groups contradict each other on purpose. The royal tradition says Ralambo chose his youngest son Andrianjaka as heir for his qualities, while the eldest son's descendants say he gave up power voluntarily. " + H + " The same chapter dates Andrianampoinimerina to 1787 to 1810, against the 'about 1777' used above, so keep the dates attributed to their authors. [CONTESTED]" },
  chk("Two groups in Imerina tell different stories of why Ralambo's eldest son did not rule. What should a historian do first?", ["Choose the royal version because it comes from the winning dynasty", "Ask what each version does for its tellers, then look for independent evidence", "Average the two versions into one story", "Discard both because they are oral", "Accept the older looking version"], 1, "Esoavelomandroso shows that each group's tantara supports its own standing, so the aim of each version must be tested before either is used. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-tantara": ' + JSON.stringify({ t: "Manasse Esoavelomandroso, Tantara: Madagascar's African historical tradition, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 11 (ch-027.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
