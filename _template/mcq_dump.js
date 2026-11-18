/* Prints a course's multiple-choice items per module, one stem once, for writing an mcq_rewrite.js data file.
   usage: node _template/mcq_dump.js <course-id> [<module-key> ...]   (* marks the right option) */
const fs = require("fs"), path = require("path");
const [cid, ...only] = process.argv.slice(2);
const CDIR = path.join(__dirname, "..", "courses", cid);
global.window = global; global.ARCHIVE_ADD = x => { global.__PACK = x; };
require(path.join(CDIR, "pack-" + cid + ".js"));
const lf = path.join(CDIR, "learning-" + cid + ".js"); if (fs.existsSync(lf)) require(lf);
const md = path.join(CDIR, "modules"); fs.readdirSync(md).filter(f => f.endsWith(".js")).forEach(f => require(path.join(md, f)));
const L = global.COURSE_LEARN || {}, C = global.COURSE || {};
for (const m of __PACK.modules) {
  const key = m.key; if (only.length && !only.includes(key)) continue;
  const seen = new Set(), out = [];
  const add = q => { if (!q || q.gen || !Array.isArray(q.o) || seen.has(q.q)) return; seen.add(q.q); out.push(q); };
  ((C[key] || {}).lessons || []).forEach(l => l.blocks.forEach(b => { if (b.t === "check") add(b); }));
  ((__PACK.quiz || {})[key] || []).forEach(add);
  for (const s in (L[key] || {})) if (Array.isArray(L[key][s])) L[key][s].forEach(add);
  console.log("\n=== " + key + " (" + out.length + ")");
  out.forEach((q, i) => console.log(i + ". " + q.q + "\n   * " + q.o[q.a] + "\n   - " + q.o.filter((x, j) => j !== q.a).join(" | ")));
}
