/* Builds shared/course-oversight.js: a lecturer's oversight (brief, what they hold you to, challenge, sign-off) for every module
   that has a lecturer and no oversight of its own yet. It is derived from each module's existing lecturer welcome, steps and challenges,
   so it adds no new facts. Courses with hand-written oversight (cinematography) are skipped.
   usage: node _template/gen_oversight.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.resolve(__dirname, "..");
const w = {};
vm.runInNewContext(fs.readFileSync(path.join(root, "shared", "course-lecturers.js"), "utf8"), { window: w });
const L = w.COURSE_LECTURERS;
const out = {};
function short(t, n) {
  t = String(t || "").replace(/\s+/g, " ").trim();
  if (t.length <= n) return t;
  const cut = t.slice(0, n), i = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
  return (i > 40 ? cut.slice(0, i + 1) : cut.replace(/\s+\S*$/, "") + "…");
}
for (const cid of fs.readdirSync(path.join(root, "courses"))) {
  if (cid === "cinematography") continue;
  const pf = path.join(root, "courses", cid, "pack-" + cid + ".js");
  if (!fs.existsSync(pf)) continue;
  const txt = fs.readFileSync(pf, "utf8"), m = txt.match(/ARCHIVE_ADD\(([\s\S]*)\);\s*$/);
  let pack; new Function("pack_out", "pack_out(" + m[1] + ");")(x => { pack = x; });
  for (const mod of pack.modules) {
    const lec = L[mod.key], d = (pack.details || {})[mod.key];
    if (!lec || !d) continue;
    const ch = d.challenges || [];
    const o = {
      brief: lec.welcome,
      holds: (d.steps || []).filter(Boolean).slice(0, 4),
      signoff: ch.map(c => "Challenge " + c.id + " (" + c.level + "): " + short(c.task, 150)),
    };
    const last = ch[ch.length - 1];
    if (last) o.challenge = { title: "Challenge: " + last.level, task: last.task, rubric: [short(last.key, 220)].concat(last.check ? [short(last.check, 160)] : []) };
    if (o.signoff.length || o.holds.length) out[mod.key] = o;
  }
}
const js = "/* Lecturer oversight for courses other than cinematography. Written by _template/gen_oversight.js from each module's lecturer welcome, steps and challenges. Voiced lines are simulated, written for teaching, and add no facts. */\n" +
  "(function () {\n  var O = " + JSON.stringify(out, null, 1) + ";\n  var LN = (window.COURSE_LEARN = window.COURSE_LEARN || {});\n  Object.keys(O).forEach(function (k) { var e = (LN[k] = LN[k] || {}); if (!e.oversight) e.oversight = O[k]; });\n})();\n";
fs.writeFileSync(path.join(root, "shared", "course-oversight.js"), js, "utf8");
console.log("oversight for", Object.keys(out).length, "modules");
