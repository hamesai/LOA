/* Adds hands-on activity blocks to lessons from a spec file, placing each before the lesson's first check.
   usage: node _template/add_activities.js <course-id> <spec.json>
   spec: { "<module-key>": { "l2": "Task text ...", "l4": "Task text ..." } }
   A lesson id that already holds the same text is skipped, so the script is safe to run twice.
   Activities are tasks for the learner: they use only what the lesson already teaches and add no new factual claims.
   Run python _template/kit.py bump afterwards (rebuilds the bundles). */
const fs = require("fs"), path = require("path");
const P = require("./course_patch.js");
const [cid, specFile] = process.argv.slice(2);
if (!cid || !specFile) { console.error("usage: node _template/add_activities.js <course-id> <spec.json>"); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(specFile, "utf8"));
let added = 0, skipped = 0;
for (const [key, lessons] of Object.entries(spec)) {
  const m = P.load(cid, key);
  for (const [lid, text] of Object.entries(lessons)) {
    const L = P.lesson(m, lid);
    if (!L) throw new Error("no lesson " + lid + " in " + key);
    if (L.blocks.some(b => b.t === "activity" && b.x === text)) { skipped++; continue; }
    let i = L.blocks.findIndex(b => b.t === "check");
    if (i < 0) i = L.blocks.findIndex(b => b.t === "take");
    if (i < 0) i = L.blocks.length;
    L.blocks.splice(i, 0, { t: "activity", x: text });
    added++;
  }
  P.save(m);
}
console.log(cid + ": " + added + " activities added, " + skipped + " already present");
