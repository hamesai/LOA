/* Applies the Equiano findings (22/11/2026) to module 8 of Pre-Colonial Africa: lessons l3, l5 and l6.
   Blocks come from equiano_blocks_2026-11-22.json. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "equiano_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-8");
if (JSON.stringify(m.obj).includes("equiano-west-indies")) throw new Error("already applied");

P.insertAfter(m, "l3", "The slave-trade period was unfavourable to objective reporting", B.l3_bullets);
P.insertAfter(m, "l3", "A textbook says 20 million British guns armed African kingdoms", [B.l3_check]);

P.insertAfter(m, "l5", "New institutions followed: the Sierra Leone settlement", B.l5_bullets);
P.insertAfter(m, "l5", "Which example best shows that enslaved Africans organised resistance", B.l5_checks);

P.insertAfter(m, "l6", "African adaptability was as important as Western decisions", [B.l6_bullet]);

P.save(m);
console.log("applied to africa-pre-colonial-8: l3, l5, l6");
