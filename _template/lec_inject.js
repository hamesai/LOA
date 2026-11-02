/* Applies lecturer lessons from _template/lec_data/<course>.json to the course module files and pack.
   usage: node _template/lec_inject.js <course-id>
   Idempotent: replaces the lesson titled "The lecturer's method: ...", the outcome and intro sentence it added, and the quiz question it added. */
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const cid = process.argv[2];
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "lec_data", cid + ".json"), "utf8"));
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
const refsPath = path.join(root, "shared", "course-lecturer-refs.js");
const refsJson = path.join(__dirname, "lec_data", "_refs.json");
let refs = fs.existsSync(refsJson) ? JSON.parse(fs.readFileSync(refsJson, "utf8")) : {};
Object.assign(refs, data.refs || {});
fs.writeFileSync(refsJson, JSON.stringify(refs, null, 1), "utf8");
const lines = Object.keys(refs).map(k => "  " + JSON.stringify(k) + ": { t: " + JSON.stringify(refs[k][0]) + ", s: " + JSON.stringify(refs[k][1]) + ", u: " + JSON.stringify(refs[k][2]) + " }");
fs.writeFileSync(refsPath, "/* Sources for the lecturers' method lessons. Cite with {{key}}. Written by _template/lec_inject.js from _template/lec_data/_refs.json. */\nObject.assign(window.COURSE_REFS = window.COURSE_REFS || {}, {\n" + lines.join(",\n") + "\n});\n", "utf8");

const packPath = path.join(root, "courses", cid, "pack-" + cid + ".js");
let packT = fs.readFileSync(packPath, "utf8"), pack;
const m = packT.match(/^([\s\S]*?)ARCHIVE_ADD\(([\s\S]*)\);\s*$/);
new Function("ARCHIVE_ADD", "pack_out", "pack_out(" + "(" + m[2] + ")" + ");")(null, x => { pack = x; });

for (const e of data.modules) {
  const { p, t, obj } = loadModule(e.key);
  obj.lessons = obj.lessons.filter(L => !/^The lecturer's method/.test(L.title));
  obj.lessons.push({ id: "", title: "The lecturer's method: " + e.name, min: e.min || 15, blocks: e.blocks });
  obj.lessons.forEach((L, i) => { L.id = "l" + (i + 1); });
  obj.outcomes = obj.outcomes.filter(o => !/^Lecturer's method:/.test(o));
  obj.outcomes.push("Lecturer's method: " + e.outcome);
  obj.intro = obj.intro.replace(/\s*Lecturer lens:[\s\S]*$/, "") + " Lecturer lens: " + e.intro;
  const head = t.slice(0, t.indexOf("(window.COURSE"));
  fs.writeFileSync(p, head + '(window.COURSE = window.COURSE || {})[' + JSON.stringify(e.key) + '] = ' + JSON.stringify(obj, null, 1) + ";\n", "utf8");
  if (e.quiz) {
    pack.quiz[e.key] = (pack.quiz[e.key] || []).filter(q => !q.lec);
    pack.quiz[e.key].push(Object.assign({ lec: 1 }, e.quiz));
  }
  console.log("ok", e.key, "lessons:", obj.lessons.length);
}
fs.writeFileSync(packPath, m[1] + "ARCHIVE_ADD(" + JSON.stringify(pack, null, 1) + ");\n", "utf8");
