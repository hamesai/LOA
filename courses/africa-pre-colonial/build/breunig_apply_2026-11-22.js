/* Applies the Breunig findings (22/11/2026) to module 1 of Pre-Colonial Africa: lessons l5 (dates), l6 (early millet) and l7 (Nok).
   Blocks come from breunig_blocks_2026-11-22.json (made by breunig_blocks_2026-11-22.py). Safe to run once; refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "breunig_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-pre-colonial", "africa-pre-colonial-1");
if (JSON.stringify(m.obj).includes("breunig-wko")) throw new Error("already applied");

// l5: second worked example straight after the first, and one application check after the existing checks
P.insertAfter(m, "l5", "Worked example: reading a corrected radiocarbon date", [B.l5_example]);
P.insertAfter(m, "l5", "A charcoal sample from a furnace gives a radiocarbon date", [B.l5_check]);

// l6: newer millet evidence before the crops section, one more row in the three-readings table, two checks
P.insertAfter(m, "l6", "At Tichitt the share of pearl millet", B.l6_bullets);
const L6 = P.lesson(m, "l6");
const tb = L6.blocks.find(b => b.t === "table" && /When did African farming begin/.test(b.title));
if (!tb) throw new Error("readings table not found");
tb.title = tb.title.replace("Three readings", "Four readings");
tb.rows.push(B.l6_row);
P.insertAfter(m, "l6", "A textbook says 'Africa's geography cut it off", B.l6_checks);

// l7: Nok date range with the debate named, and one application check
P.insertAfter(m, "l7", "The figurines come mostly from tin-mining gravels", [B.l7_bullet]);
P.insertAfter(m, "l7", "A website says the Yoruba descend directly from the Nok", [B.l7_check]);

P.save(m);
console.log("applied to africa-pre-colonial-1: l5, l6, l7");
