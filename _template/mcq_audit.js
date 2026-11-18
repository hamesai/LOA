/* Audits a course's multiple-choice items against the MCQ standard (17/11/2026): lesson checks, module quiz, and the
   pre-check and retrieval items in the learning file. Generated items ({gen}) are skipped; their generators must follow it too.
   usage: node _template/mcq_audit.js <course-id> [--json]
   Standard, per item: exactly five options, all different, and the correct option never the uniquely longest one.
   Per module: the correct slot is spread, so no slot holds more than 40% of the module's items (with 5 or more items).
   Prints one line per problem, or JSON {items, problems: [..]} with --json. Exit 1 if any problem. Fix with mcq_rewrite.js. */
const fs = require("fs"), path = require("path");
const args = process.argv.slice(2), asJson = args.includes("--json"), cid = args.find(a => !a.startsWith("--"));
if (!cid) { console.log("usage: node _template/mcq_audit.js <course-id> [--json]"); process.exit(2); }
const CDIR = path.join(__dirname, "..", "courses", cid);
global.window = global; global.ARCHIVE_ADD = x => { global.__PACK = x; };
require(path.join(CDIR, "pack-" + cid + ".js"));
const learnF = path.join(CDIR, "learning-" + cid + ".js"); if (fs.existsSync(learnF)) require(learnF);
const mdir = path.join(CDIR, "modules");
fs.readdirSync(mdir).filter(f => f.endsWith(".js")).forEach(f => { try { require(path.join(mdir, f)); } catch (e) {} });
const LEARN = global.COURSE_LEARN || {}, COURSE = global.COURSE || {};
const problems = []; let items = 0;
for (const m of __PACK.modules || []) {
  const key = m.key, list = [];
  ((COURSE[key] || {}).lessons || []).forEach(L => (L.blocks || []).forEach(b => { if (b.t === "check") list.push(["check", b]); }));
  ((__PACK.quiz || {})[key] || []).forEach(q => list.push(["quiz", q]));
  for (const s of Object.keys(LEARN[key] || {})) { const a = LEARN[key][s]; if (Array.isArray(a)) a.forEach(q => { if (q && Array.isArray(q.o)) list.push([s, q]); }); }
  const real = list.filter(([, q]) => q && !q.gen && Array.isArray(q.o));
  const slots = [0, 0, 0, 0, 0];
  real.forEach(([where, q]) => {
    items++;
    const tag = key + " " + where + ": " + String(q.q).slice(0, 70);
    if (q.o.length !== 5) problems.push(tag + " (has " + q.o.length + " options, the standard is 5)");
    if (new Set(q.o).size !== q.o.length) problems.push(tag + " (duplicate options)");
    if (!(q.a >= 0 && q.a < q.o.length)) { problems.push(tag + " (answer index out of range)"); return; }
    if (q.a < 5) slots[q.a]++;
    const c = q.o[q.a].length, other = Math.max(...q.o.filter((x, j) => j !== q.a).map(x => x.length));
    if (c > other) problems.push(tag + " (correct option is the longest: " + c + " vs " + other + " chars)");
  });
  if (real.length >= 5) { const mx = Math.max(...slots); if (mx / real.length > 0.4) problems.push(key + ": correct answer sits in slot " + "ABCDE"[slots.indexOf(mx)] + " for " + mx + " of " + real.length + " items"); }
}
if (asJson) console.log(JSON.stringify({ items, problems }));
else { problems.forEach(p => console.log(p)); console.log(cid + ": " + items + " multiple-choice items, " + problems.length + " problem(s)"); }
process.exit(problems.length ? 1 : 0);
