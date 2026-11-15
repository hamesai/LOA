/* Copies the lecturer lessons as they stand in a set of module files (and the lecturer quiz items in a pack) back into
   _template/lec_data/<course>.json, so that lec_inject.js re-applies the current text instead of an older one.
   Use it after hand-editing lecturer lessons in module files, before the next kit.py ship.
   usage: node _template/lec_sync_from_modules.js <course-id> [<modules-dir> [<pack-file>]] [--check]
   --check writes nothing and exits 1 if any lecturer lesson differs (kit.py ship runs this before injecting).
   The modules dir and pack default to the course's own; pass a backup's to restore from it. */
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const argv = process.argv.slice(2), checkOnly = argv.includes("--check");
const [cid, mdirArg, packArg] = argv.filter(a => a !== "--check");
if (!cid) { console.error("usage: node _template/lec_sync_from_modules.js <course-id> [<modules-dir> [<pack-file>]]"); process.exit(1); }
const mdir = mdirArg ? path.resolve(mdirArg) : path.join(root, "courses", cid, "modules");
const packPath = packArg ? path.resolve(packArg) : path.join(root, "courses", cid, "pack-" + cid + ".js");
const dataPath = path.join(__dirname, "lec_data", cid + ".json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const g = { COURSE: {} };
for (const f of fs.readdirSync(mdir).filter(n => n.endsWith(".js"))) new Function("window", fs.readFileSync(path.join(mdir, f), "utf8"))(g);
const pt = fs.readFileSync(packPath, "utf8"), m = pt.match(/ARCHIVE_ADD\(([\s\S]*)\);\s*$/);
let pack; new Function("ARCHIVE_ADD", "pack_out", "pack_out((" + m[1] + "));")(null, x => { pack = x; });
let changed = 0;
for (const e of data.modules) {
  const obj = g.COURSE[e.key];
  if (!obj) { console.log("skip", e.key, "(not in modules)"); continue; }
  const L = obj.lessons.find(x => /^The lecturer's method/.test(x.title));
  const out = obj.outcomes.find(o => /^Lecturer's method:/.test(o));
  const im = obj.intro.match(/Lecturer lens:\s*([\s\S]*)$/);
  const q = (pack.quiz[e.key] || []).find(x => x.lec);
  const before = JSON.stringify([e.blocks, e.min, e.outcome, e.intro, e.quiz]);
  if (L) { e.blocks = L.blocks; e.min = L.min; }
  if (out) e.outcome = out.replace(/^Lecturer's method:\s*/, "");
  if (im) e.intro = im[1].trim();
  if (q) { const c = Object.assign({}, q); delete c.lec; e.quiz = c; }
  if (JSON.stringify([e.blocks, e.min, e.outcome, e.intro, e.quiz]) !== before) { changed++; console.log((checkOnly ? "differs " : "synced ") + e.key); }
}
if (checkOnly) {
  if (changed) {
    console.log(changed + " lecturer lesson(s) in the module files differ from " + path.relative(root, dataPath) + ".\n" +
      "Keep the module text: node _template/lec_sync_from_modules.js " + cid + "\n" +
      "Or apply lec_data on purpose: python _template/kit.py inject " + cid + ", then ship again.");
    process.exit(1);
  }
  process.exit(0);
}
fs.writeFileSync(dataPath, JSON.stringify(data, null, 1), "utf8");
console.log(changed + " module entries updated in " + path.relative(root, dataPath));
