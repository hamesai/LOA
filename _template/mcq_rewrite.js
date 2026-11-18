/* Applies rewritten multiple-choice questions to a course: lesson checks (module files), the module quiz (pack) and the
   pre-check and retrieval items (learning file). Every item gets five options with the correct slot spread evenly.
   usage: node _template/mcq_rewrite.js <course-id> <data-file> [<module-key> ...]
   The data file (keep it in courses/<id>/build/mcq/) sets module.exports = { "<module-key>": [ entry, ... ], ... }, where
     entry = { match: "start of the current question text", q: "new stem (optional)", c: "correct option",
               d: ["four", "distractor", "options", "here"], w: "new explanation (optional)" }
   Rules it enforces (the MCQ standard in TEMPLATE.md):
     - exactly four distractors, all different from the correct option;
     - the correct option is never the uniquely longest one;
     - every multiple-choice item in the module is matched, and every entry is used.
   Correct slots: a seeded shuffle of 0-4 repeated, so each slot is used about equally and a rerun gives the same layout.
   Edits pack and learning files in place, inside the module's own section, so nothing else in them moves. */
const fs = require("fs"), path = require("path");
const [cid, dataArg, ...only] = process.argv.slice(2);
if (!cid || !dataArg) { console.log("usage: node _template/mcq_rewrite.js <course-id> <data-file> [<module-key> ...]"); process.exit(2); }
const ROOT = path.join(__dirname, ".."), CDIR = path.join(ROOT, "courses", cid);
const DATA = require(path.resolve(dataArg));
const P = require("./course_patch.js");

function rng(seedStr) { let s = 0; for (const ch of seedStr) s = (s * 31 + ch.charCodeAt(0)) & 0x7fffffff; s = s || 1;
  return () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff); }
function shuf(a, r) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function arrEnd(t, i) { let d = 0, str = false; for (; i < t.length; i++) { const ch = t[i];
  if (str) { if (ch === "\\") i++; else if (ch === '"') str = false; } else if (ch === '"') str = true;
  else if (ch === "[") d++; else if (ch === "]" && --d === 0) return i + 1; } throw new Error("unclosed array"); }
function strEnd(t, i) { for (i++; i < t.length; i++) { if (t[i] === "\\") i++; else if (t[i] === '"') return i + 1; } throw new Error("unclosed string"); }

global.window = global; global.ARCHIVE_ADD = x => { global.__PACK = x; };
const packF = path.join(CDIR, "pack-" + cid + ".js"), learnF = path.join(CDIR, "learning-" + cid + ".js");
require(packF); if (fs.existsSync(learnF)) require(learnF);
const LEARN = global.COURSE_LEARN || {};
let packT = fs.readFileSync(packF, "utf8"), learnT = fs.existsSync(learnF) ? fs.readFileSync(learnF, "utf8") : "";
let bad = 0;

for (const key of Object.keys(DATA).filter(k => !only.length || only.includes(k))) {
  const list = DATA[key], r = rng(cid + "|" + key);
  list.forEach(e => {
    if (!Array.isArray(e.d) || e.d.length !== 4) throw new Error(key + ": need four distractors: " + e.match);
    if (e.d.includes(e.c) || new Set(e.d).size !== 4) throw new Error(key + ": duplicate option: " + e.match);
    if (e.c.length > Math.max(...e.d.map(x => x.length))) { bad++; console.log("LONGEST  " + key + ": correct option is the longest (" + e.c.length + " vs " + Math.max(...e.d.map(x => x.length)) + " chars): " + e.match); }
  });
  let slots = []; while (slots.length < list.length) slots = slots.concat(shuf([0, 1, 2, 3, 4], r));
  list.forEach((e, i) => { const o = shuf(e.d.slice(), r); o.splice(slots[i], 0, e.c); e.o = o; e.a = slots[i]; });
  const used = new Set();
  const pick = (q, where) => { const e = list.find(x => q.startsWith(x.match) || (x.q && q === x.q)); if (!e) throw new Error(key + ": no rewrite for " + where + ": " + q); used.add(e); return e; };
  const apply = (b, e) => { if (e.q) b.q = e.q; if (e.w) b.w = e.w; b.o = e.o.slice(); b.a = e.a; };

  /* lesson checks */
  const m = P.load(cid, key);
  m.obj.lessons.forEach(L => L.blocks.forEach(b => { if (b.t === "check") apply(b, pick(b.q, "check")); }));
  P.save(m);

  /* pack quiz and learning items, patched in place inside this module's section */
  function patch(t, sectionStart, items, label) {
    let from = sectionStart;
    items.forEach(q => {
      if (!q || q.gen || !Array.isArray(q.o)) return;
      const e = pick(q.q, label);
      const at = t.indexOf('"q": ' + JSON.stringify(q.q), from); if (at < 0) throw new Error(key + ": not found in " + label + ": " + q.q);
      const qEnd = strEnd(t, at + 5);
      const oi = t.indexOf('"o": [', at), oe = arrEnd(t, oi + 5);
      const indent = (t.slice(0, oi).match(/\n( *)$/) || ["", ""])[1];
      let mid = t.slice(qEnd, oi);
      let tail = t.slice(oe);
      const am = tail.match(/^(\s*,\s*)"a": \d+/); if (!am) throw new Error(key + ": expected a after o: " + q.q);
      tail = am[1] + '"a": ' + e.a + tail.slice(am[0].length);
      if (e.w) { const wi = tail.indexOf('"w": '); const we = strEnd(tail, wi + 5); tail = tail.slice(0, wi) + '"w": ' + JSON.stringify(e.w) + tail.slice(we); }
      const oTxt = '"o": [\n' + e.o.map(x => indent + " " + JSON.stringify(x)).join(",\n") + "\n" + indent + "]";
      const head = '"q": ' + JSON.stringify(e.q || q.q);
      t = t.slice(0, at) + head + mid + oTxt + tail;
      from = at + head.length + mid.length + oTxt.length;
    });
    return t;
  }
  const qs = packT.indexOf('"quiz": {'), qk = packT.indexOf(JSON.stringify(key) + ": [", qs);
  if ((__PACK.quiz || {})[key]) packT = patch(packT, qk, __PACK.quiz[key], "quiz");
  if (LEARN[key]) {
    const ls = learnT.indexOf(JSON.stringify(key) + ": {");
    for (const s of Object.keys(LEARN[key])) {
      const arr = LEARN[key][s]; if (!Array.isArray(arr) || !arr.some(x => x && Array.isArray(x.o))) continue;
      const ss = learnT.indexOf('"' + s + '": [', ls);
      learnT = patch(learnT, ss, arr, s);
    }
  }
  const unused = list.filter(e => !used.has(e)); if (unused.length) throw new Error(key + ": entries not used: " + unused.map(e => e.match).join(" | "));
  const cnt = [0, 0, 0, 0, 0]; list.forEach(e => cnt[e.a]++);
  console.log(key + ": " + list.length + " questions, correct slot A-E " + cnt.join(" "));
}
fs.writeFileSync(packF, packT, "utf8"); if (learnT) fs.writeFileSync(learnF, learnT, "utf8");
if (bad) { console.log(bad + " item(s) with the correct option longest: lengthen a distractor or trim the answer, then rerun."); process.exit(1); }
