/* One-off migration (15/11/2026): split the course-keyed parts of the shared data files into one file per course,
   courses/<id>/meta/<kind>.js. Kept for the record; do not run it again (the shared files it reads are gone).
   usage: node _template/migrations/split_shared_2026-11-15.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.resolve(__dirname, "..", "..");
const sh = n => fs.readFileSync(path.join(root, "shared", "course-" + n + ".js"), "utf8");

// Module key -> course id, from the packs.
const mod2c = {}, courses = [];
const ctx0 = { ARCHIVE_ADD: p => { (p.libraries || []).forEach(l => courses.push(l.id)); (p.modules || []).forEach(m => { mod2c[m.key] = m.library; }); } };
for (const c of fs.readdirSync(path.join(root, "courses"))) {
  const f = path.join(root, "courses", c, "pack-" + c + ".js");
  if (fs.existsSync(f)) vm.runInNewContext(fs.readFileSync(f, "utf8"), ctx0);
}
const w = {}; w.window = w;
for (const k of ["about", "deepnotes", "lecturer-notes", "lecturer-intro", "lecturers", "faqs", "dossiers"]) vm.runInNewContext(sh(k), w);
// Oversight data, captured without applying it.
const ov = {}; vm.runInNewContext(sh("oversight").replace("var LN =", "window.__O = O; var LN ="), { window: Object.assign(ov, { COURSE_LEARN: {} }) });

const J = o => JSON.stringify(o, null, 1);
const out = {}; // out[cid][kind] = text
const put = (cid, kind, text) => { (out[cid] = out[cid] || {})[kind] = text; };
const byCourse = (obj, keyToC) => { const r = {}; for (const k of Object.keys(obj)) { const c = keyToC(k); if (!c) throw new Error("no course for " + k); (r[c] = r[c] || {})[k] = obj[k]; } return r; };
const isCourse = k => courses.includes(k) ? k : null;

for (const [c, o] of Object.entries(byCourse(w.COURSE_ABOUT, isCourse)))
  put(c, "about", "/* About this course (" + c + "). Shared wording for every course is COURSE_ABOUT_COMMON in shared/course-about.js. */\n(window.COURSE_ABOUT = window.COURSE_ABOUT || {})[" + J(c) + "] = " + J(o[c]) + ";\n");
for (const [c, o] of Object.entries(byCourse(w.COURSE_DEEP, k => mod2c[k])))
  put(c, "deepnotes", "/* Notes tab, 'Behind this module' (" + c + "), keyed by module key. place, skills [type, text], benefit, style, stumble, connects. */\nObject.assign(window.COURSE_DEEP = window.COURSE_DEEP || {}, " + J(o) + ");\n");
for (const [c, o] of Object.entries(byCourse(w.COURSE_LNOTES, k => mod2c[k])))
  put(c, "lecturer-notes", "/* Lecturer's notes (" + c + "): one framing note per lesson, keyed by module key, in lesson order. Rebuilt by _template/build_notes.py from _template/lec_data/notes/" + c + ".json. Simulated voice written for teaching; adds no new facts. */\nObject.assign(window.COURSE_LNOTES = window.COURSE_LNOTES || {}, " + J(o) + ");\n");
for (const [c, o] of Object.entries(byCourse(w.COURSE_LECTURER_INTRO, isCourse)))
  put(c, "lecturer-intro", "/* Meet your lecturers (" + c + "). History lines are limited to facts checked in shared/LECTURERS-SOURCES.md; which modules each leads comes from meta/lecturers.js. */\n(window.COURSE_LECTURER_INTRO = window.COURSE_LECTURER_INTRO || {})[" + J(c) + "] = " + J(o[c]) + ";\n");
for (const [c, o] of Object.entries(byCourse(w.COURSE_FAQ, k => k === "library" ? "__lib" : isCourse(k)))) if (c !== "__lib")
  put(c, "faqs", "/* FAQ dropdowns for " + c + ": [question, answer]. The home-page list (library) is in shared/course-faqs.js and shows under these. */\n(window.COURSE_FAQ = window.COURSE_FAQ || {})[" + J(c) + "] = " + J(o[c]) + ";\n");

// Lecturers: rows per course, plus the PEOPLE entries those rows use (a person who lectures in two courses is in both files).
const P = w.COURSE_LECTURER_PEOPLE, rows = {}, people = {};
for (const [k, v] of Object.entries(w.COURSE_LECTURERS)) {
  const c = mod2c[k]; (rows[c] = rows[c] || []).push([k, v.name, v.why, v.welcome]);
  (people[c] = people[c] || {})[v.name] = P[v.name];
}
for (const c of Object.keys(rows)) {
  put(c, "lecturers", "/* Lecturers for " + c + ": one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.\n   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.\n   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */\n(function () {\n  var PEOPLE = " + J(people[c]) + ";\n  var ROWS = [\n" + rows[c].map(r => " " + JSON.stringify(r)).join(",\n") + "\n];\n  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});\n  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });\n  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);\n})();\n");
  const D = {}, M = {};
  for (const n of Object.keys(people[c])) { if (w.COURSE_DOSSIERS[n] !== undefined) D[n] = w.COURSE_DOSSIERS[n]; if ((w.COURSE_METHODS || {})[n] !== undefined) M[n] = w.COURSE_METHODS[n]; }
  if (Object.keys(D).length || Object.keys(M).length)
    put(c, "dossiers", "/* Lecturer dossiers and methods for " + c + " (review-prompt button, Lecture Mode). Built from the sources named in each dossier; simulated voices built from them are not quotations. */\nObject.assign(window.COURSE_DOSSIERS = window.COURSE_DOSSIERS || {}, " + J(D) + ");\nObject.assign(window.COURSE_METHODS = window.COURSE_METHODS || {}, " + J(M) + ");\n");
}
for (const [c, o] of Object.entries(byCourse(ov.__O, k => mod2c[k])))
  put(c, "oversight", "/* Lecturer oversight for " + c + ". Written by _template/gen_oversight.js from each module's lecturer welcome, steps and challenges. Voiced lines are simulated and add no facts. */\n(function () {\n  var O = " + J(o) + ";\n  var LN = (window.COURSE_LEARN = window.COURSE_LEARN || {});\n  Object.keys(O).forEach(function (k) { var e = (LN[k] = LN[k] || {}); if (!e.oversight) e.oversight = O[k]; });\n})();\n");

// Dossier entries for people who lead no module are not expected; fail loudly if any would be lost.
const placed = new Set(); Object.values(people).forEach(p => Object.keys(p).forEach(n => placed.add(n)));
const lost = Object.keys(w.COURSE_DOSSIERS).concat(Object.keys(w.COURSE_METHODS || {})).filter(n => !placed.has(n));
if (lost.length) throw new Error("dossiers with no course: " + lost.join(", "));

let n = 0;
for (const [c, kinds] of Object.entries(out)) {
  const d = path.join(root, "courses", c, "meta"); fs.mkdirSync(d, { recursive: true });
  for (const [k, t] of Object.entries(kinds)) { fs.writeFileSync(path.join(d, k + ".js"), t, "utf8"); n++; }
}
// What stays shared: the home FAQ list and the common About wording.
fs.writeFileSync(path.join(root, "shared", "course-faqs.js"), "/* FAQ entries shown as dropdowns. COURSE_FAQ.library is the home page; it also shows at the bottom of every course, after the course's own\n   questions, which live in courses/<id>/meta/faqs.js. Format: [question, answer]. */\nwindow.COURSE_FAQ = window.COURSE_FAQ || {};\nwindow.COURSE_FAQ.library = " + J(w.COURSE_FAQ.library) + ";\n", "utf8");
fs.writeFileSync(path.join(root, "shared", "course-about.js"), "/* \"About this course\": wording shared by every course. Each course's own entry is courses/<id>/meta/about.js.\n   The page adds counts (modules, lessons, hours, challenges) from the pack and the lesson files. */\nwindow.COURSE_ABOUT = window.COURSE_ABOUT || {};\nwindow.COURSE_ABOUT_COMMON = " + J(w.COURSE_ABOUT_COMMON) + ";\n", "utf8");
console.log("wrote", n, "files for", Object.keys(out).length, "courses");
