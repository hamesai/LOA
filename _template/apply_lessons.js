/* Replaces a module's teaching lessons with a rebuilt set, keeping the injected lecturer lesson last.
   usage: node _template/apply_lessons.js <course-id> <module-key> [<module-key> ...]
   Reads courses/<id>/build/lessons/<module-key>.json: { "intro": "...", "outcomes": [...], "lessons": [...] }.
   intro is the text before the "Lecturer lens:" sentence (that sentence is kept); outcomes are the teaching
   outcomes (the "Lecturer's method:" outcome is kept). Lesson ids are renumbered l1, l2 ... in order.
   Run node _template/lec_inject.js <course-id> afterwards, or kit.py ship, which does it. */
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const [cid, ...keys] = process.argv.slice(2);
if (!cid || !keys.length) { console.error("usage: node _template/apply_lessons.js <course-id> <module-key> ..."); process.exit(1); }
const mdir = path.join(root, "courses", cid, "modules");
for (const key of keys) {
  const src = path.join(root, "courses", cid, "build", "lessons", key + ".json");
  const spec = JSON.parse(fs.readFileSync(src, "utf8"));
  const f = fs.readdirSync(mdir).find(n => fs.readFileSync(path.join(mdir, n), "utf8").includes('["' + key + '"]'));
  if (!f) throw new Error("no module file for " + key);
  const p = path.join(mdir, f), t = fs.readFileSync(p, "utf8");
  const head = t.slice(0, t.indexOf("(window.COURSE"));
  const g = { COURSE: {} };
  new Function("window", t)(g);
  const obj = g.COURSE[key];
  const lec = obj.lessons.filter(L => /^The lecturer's method/.test(L.title));
  if (spec.intro) {
    const m = obj.intro.match(/Lecturer lens:[\s\S]*$/);
    obj.intro = spec.intro.trim() + (m ? " " + m[0] : "");
  }
  if (spec.outcomes) obj.outcomes = spec.outcomes.concat(obj.outcomes.filter(o => /^Lecturer's method:/.test(o)));
  obj.lessons = spec.lessons.concat(lec);
  obj.lessons.forEach((L, i) => { L.id = "l" + (i + 1); });
  for (const L of spec.lessons) for (const b of L.blocks) if (!b.t) throw new Error(key + ": block without t in " + L.title);
  for (const L of spec.lessons) if (/(^what (the )?.{0,70}\badds?\b)|\bbooks add\b|\bwhat the (unesco|general history|supplied|books)\b/i.test(L.title))
    throw new Error(key + ": lesson '" + L.title + "' is organised by source; teach its findings inside the topic lessons");
  fs.writeFileSync(p, head + '(window.COURSE = window.COURSE || {})["' + key + '"] = ' + JSON.stringify(obj, null, 1).replace(/\n/g, "\r\n") + ";\r\n", "utf8");
  const words = spec.lessons.reduce((n, L) => n + JSON.stringify(L.blocks).replace(/\{\{[^}]+\}\}/g, "").split(/\s+/).length, 0);
  console.log(key + ": " + spec.lessons.length + " teaching lessons + " + lec.length + " lecturer; about " + words + " words (JSON count)");
}
