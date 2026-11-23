/* Applies UNESCO vol IX chapter 18 (Moraes Farias, epigraphy) to module 3 l4. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const H = "{{gha9-farias}}";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const m = P.load("africa-pre-colonial", "africa-pre-colonial-3");
if (JSON.stringify(m.obj).includes("gha9-farias")) throw new Error("already applied");
P.insertAfter(m, "l4", "Tadmekka, north of Gao", [
  { t: "p", x: "Stone gives a check on that date. The earliest internally dated writing known from West Africa is an Arabic graffito at Essuk, the site of Tadmekka, made in AH 401, which is 1011 CE, and a second graffito there reads simply AH 404. " + H + " Arabic writing was therefore in use at Tadmekka about a century before the 1109 conversion date above, so treat 1109 as one tradition's date for a community's conversion, not the arrival of Islam or its script. [PROBABLE]" },
  { t: "p", x: "Moraes Farias argues that inscriptions must be read as whole texts, not mined for names and dates. At Essuk and on the Niger Bend, graffiti in Tifinagh, the Berber script, coexisted with Arabic ones: Tifinagh was used for play, signatures, love messages and notes between herders, while Arabic took over funerary and religious writing. " + H + " The Arabic epitaphs stress the Islamic era in emphatic phrases, and the oldest unmistakable Songhay words in writing appear in Arabic inscriptions of 1203 and 1253. " + H + " [PROBABLE]" },
  { t: "p", x: "The same inscriptions change a reading of women's rank. Four elite women on the Niger Bend carry the title malika, queen, between about AH 450 and AH 549. No husbands are named, and sons of two of them are named without fathers, so Moraes Farias reads malika as an autonomous female office with a ritual role, not as 'the king's wife'. " + H + " This is an interpretation from comparison with other West African offices, so tag it [PROBABLE], not [FIRM]." },
  chk("An inscription calls a woman malika but names no husband. Which reading best fits the Niger Bend evidence described by Moraes Farias?", ["She was certainly a king's wife whose husband's name was lost", "She may have held an autonomous female office, since sons are named without fathers", "The title proves Arabs ruled the Niger Bend", "The inscription is worthless without a chronicle to confirm it", "Queens never existed in West African states"], 1, "Four malika inscriptions name no husbands and two sons are named without fathers, which led Moraes Farias to read the title as a female office in its own right. " + H)
]);
P.save(m);
const rp = path.join(__dirname, "..", "course-africa-pre-colonial-refs.js");
let t = fs.readFileSync(rp, "utf8");
const add = '  "gha9-farias": ' + JSON.stringify({ t: "Paulo Fernando de Moraes Farias, Epigraphy and the understanding of the African past, in General History of Africa Revisited, vol. IX (UNESCO); read in full 23/11/2026", s: "UNESCO", u: "https://unesdoc.unesco.org/ark:/48223/pf0000396045", b: "gha-ix", p: "Chapter 18 (ch-034.txt)", d: "23/11/2026" }) + ",\n";
const a = t.indexOf('  "gha9-holl"'); if (a < 0) throw new Error("anchor");
const eol = t.indexOf("\n", a) + 1;
fs.writeFileSync(rp, t.slice(0, eol) + add + t.slice(eol), "utf8");
console.log("applied");
