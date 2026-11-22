/* Applies the Casement findings (22/11/2026) to Post-Colonial Africa module 1, lesson 4 (the Congo Free State).
   Blocks come from casement_blocks_2026-11-22.json. Refuses to run twice. */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const B = JSON.parse(fs.readFileSync(path.join(__dirname, "casement_blocks_2026-11-22.json"), "utf8"));
const m = P.load("africa-post-colonial", "africa-post-colonial-1");
if (JSON.stringify(m.obj).includes("casement-reply")) throw new Error("already applied");

// The names were removed, according to the Foreign Office's own despatch, to protect witnesses.
P.replaceText(m, "l4", "The Foreign Office stripped the witnesses' names",
  "The Foreign Office stripped the witnesses' names under pressure, which weakened the report against Leopold's reply.",
  "The Foreign Office printed the report with names, places and dates removed, and its despatch of 19/04/1904 gives the reason as protecting witnesses from the officials they accused; the State said this made inquiry harder and asked for the full text. {{casement-reply}} Hochschild says the names were stripped under pressure, which weakened the report against Leopold's reply; the despatch gives only the protective reason, so treat the pressure as one author's claim.");

// New section after the note on testimony taken with interpreters, before 'African resistance'.
P.insertAfter(m, "l4", "Casement's report records African testimony taken with interpreters", B.bullets);
P.insertAfter(m, "l4", "Once Belgium took over the Congo in 1908", B.checks);

P.save(m);
console.log("applied to africa-post-colonial-1: l4");
