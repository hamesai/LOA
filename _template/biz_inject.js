/* Applies business-lens lessons from _template/lec_data/biz-<course>.json to the course modules and pack.
   usage: node _template/biz_inject.js <course-id>
   Idempotent: replaces the lesson titled "Business lens: ...", the outcome and intro sentence it added, and the quiz question it added.
   The business lesson goes before the lecturer's method lesson, and lesson ids are renumbered l1, l2, ... */
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const cid = process.argv[2];
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "lec_data", "biz-" + cid + ".json"), "utf8"));
const mdir = path.join(root, "courses", cid, "modules");
const files = fs.readdirSync(mdir).filter(f => f.endsWith(".js"));
function loadModule(key) {
  for (const f of files) {
    const p = path.join(mdir, f), t = fs.readFileSync(p, "utf8");
    if (t.includes('["' + key + '"]')) {
      const g = { window: { COURSE: {} } };
      new Function("window", t)(g.window);
      return { p, t, obj: g.window.COURSE[key] };
    }
  }
  throw new Error("module file not found for " + key);
}
/* refs go into the same shared file the lecturer lessons use */
const refsPath = path.join(root, "shared", "course-lecturer-refs.js");
const refsJson = path.join(__dirname, "lec_data", "_refs.json");
let refs = fs.existsSync(refsJson) ? JSON.parse(fs.readFileSync(refsJson, "utf8")) : {};
Object.assign(refs, data.refs || {});
fs.writeFileSync(refsJson, JSON.stringify(refs, null, 1), "utf8");
const lines = Object.keys(refs).map(k => "  " + JSON.stringify(k) + ": { t: " + JSON.stringify(refs[k][0]) + ", s: " + JSON.stringify(refs[k][1]) + ", u: " + JSON.stringify(refs[k][2]) + " }");
fs.writeFileSync(refsPath, "/* Sources for the lecturers' method lessons and business lenses. Cite with {{key}}. Written by _template/lec_inject.js and biz_inject.js from _template/lec_data/_refs.json. */\nObject.assign(window.COURSE_REFS = window.COURSE_REFS || {}, {\n" + lines.join(",\n") + "\n});\n", "utf8");

const packPath = path.join(root, "courses", cid, "pack-" + cid + ".js");
const packT = fs.readFileSync(packPath, "utf8");
const m = packT.match(/^([\s\S]*?)ARCHIVE_ADD\(([\s\S]*)\);\s*$/);
let pack;
new Function("ARCHIVE_ADD", "pack_out", "pack_out((" + m[2] + "));")(null, x => { pack = x; });

for (const e of data.modules) {
  const { p, t, obj } = loadModule(e.key);
  obj.lessons = obj.lessons.filter(L => !/^Business lens:/.test(L.title));
  const at = obj.lessons.findIndex(L => /^The lecturer's method/.test(L.title));
  const lesson = { id: "", title: e.title, min: e.min || 15, blocks: e.blocks };
  if (at < 0) obj.lessons.push(lesson); else obj.lessons.splice(at, 0, lesson);
  obj.lessons.forEach((L, i) => { L.id = "l" + (i + 1); });
  obj.outcomes = obj.outcomes.filter(o => !/^Business lens:/.test(o));
  obj.outcomes.push("Business lens: " + e.outcome);
  obj.intro = obj.intro.replace(/\s*Business lens:[\s\S]*?(?=\s*Lecturer lens:|$)/, "") + (/Lecturer lens:/.test(obj.intro) ? "" : "");
  const li = obj.intro.indexOf(" Lecturer lens:");
  obj.intro = li >= 0 ? obj.intro.slice(0, li) + " Business lens: " + e.intro + obj.intro.slice(li) : obj.intro + " Business lens: " + e.intro;
  const head = t.slice(0, t.indexOf("(window.COURSE"));
  fs.writeFileSync(p, head + '(window.COURSE = window.COURSE || {})[' + JSON.stringify(e.key) + '] = ' + JSON.stringify(obj, null, 1) + ";\n", "utf8");
  if (e.quiz) {
    pack.quiz[e.key] = (pack.quiz[e.key] || []).filter(q => !q.biz);
    pack.quiz[e.key].push(Object.assign({ biz: 1 }, e.quiz));
  }
  console.log("ok", e.key, "lessons:", obj.lessons.length);
}
const P = data.pack;
if (P) {
  const lib = pack.libraries[0];
  lib.summary = P.summary; lib.capstone = P.capstone; lib.level = P.level; lib.tags = P.tags;
  const capMod = pack.modules.find(x => x.kind === "capstone");
  if (capMod) capMod.title = P.cap_title;
  const d = pack.details[cid + "-cap"];
  if (d) {
    d.core = P.cap_core; d.steps = P.cap_steps;
    d.challenges = P.cap_challenges.map((c, i) => Object.assign({}, d.challenges[i] || {}, c, { check: (d.challenges[i] || {}).check || "" }));
  }
}
fs.writeFileSync(packPath, m[1] + "ARCHIVE_ADD(" + JSON.stringify(pack, null, 1) + ");\n", "utf8");
