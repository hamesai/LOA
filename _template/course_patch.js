/* Helpers for editing module files from a script, used when a source review changes a course.
   const P = require("./course_patch.js");        (from a script in _template, or require the full path)
   const m = P.load("cinematography", "cinematography-3");
   P.replaceText(m, "l2", "text that identifies the block", "old words", "new words");
   P.insertAfter(m, "l2", "text that identifies the block", [ {t:"p", x:"..."}, {t:"check", q:"...", o:[...], a:0, w:"..."} ]);
   P.addLessonBeforeLecturer(m, {id:"", title:"...", min:20, blocks:[...]});     renumbers l1, l2... and keeps the lecturer lesson last
   P.save(m);
   Blocks are found by searching the block's JSON for the identifying text, so use words that appear in only one block.
   Never renumber or remove modules: saved progress and the ledger use module keys. Lesson ids are positional and may shift. */
const fs = require("fs"), path = require("path");
exports.load = function (cid, key) {
  const dir = path.join(__dirname, "..", "courses", cid, "modules") + path.sep;
  const file = fs.readdirSync(dir).map(f => dir + f).find(f => fs.readFileSync(f, "utf8").includes('["' + key + '"]'));
  if (!file) throw new Error("no module file for " + key);
  const t = fs.readFileSync(file, "utf8");
  const g = { window: { COURSE: {} } };
  new Function("window", t)(g.window);
  return { f: file, head: t.slice(0, t.indexOf("(window.COURSE")), key, obj: g.window.COURSE[key] };
};
exports.save = function (m) {
  fs.writeFileSync(m.f, m.head + '(window.COURSE = window.COURSE || {})[' + JSON.stringify(m.key) + '] = ' + JSON.stringify(m.obj, null, 1) + ";\n", "utf8");
};
exports.lesson = (m, id) => m.obj.lessons.find(L => L.id === id);
exports.find = function (m, lid, needle) {
  const L = exports.lesson(m, lid);
  const i = L.blocks.findIndex(b => JSON.stringify(b).includes(needle));
  if (i < 0) throw new Error("not found in " + lid + ": " + needle);
  return { L, i };
};
exports.replaceText = function (m, lid, needle, oldS, newS) {
  const { L, i } = exports.find(m, lid, needle);
  const s = JSON.stringify(L.blocks[i]), o = JSON.stringify(oldS).slice(1, -1);
  if (!s.includes(o)) throw new Error("old text not in block: " + oldS);
  L.blocks[i] = JSON.parse(s.replace(o, () => JSON.stringify(newS).slice(1, -1)));
};
exports.insertAfter = function (m, lid, needle, blocks) {
  const { L, i } = exports.find(m, lid, needle);
  L.blocks.splice(i + 1, 0, ...blocks);
};
exports.addLessonBeforeLecturer = function (m, lesson) {
  const idx = m.obj.lessons.findIndex(L => /^The lecturer's method/.test(L.title));
  m.obj.lessons.splice(idx < 0 ? m.obj.lessons.length : idx, 0, lesson);
  m.obj.lessons.forEach((L, i) => L.id = "l" + (i + 1));
};
