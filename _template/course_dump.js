/* Prints a module's lesson text compactly, so claims, numbers and examples can be checked against a source.
   usage: node _template/course_dump.js <course-id> <module-key>      e.g. node _template/course_dump.js cinematography cinematography-3
   The lecturer's-method lesson is skipped. Citation keys are removed. */
const fs = require("fs"), path = require("path");
const [cid, key] = process.argv.slice(2);
if (!cid || !key) { console.error("usage: node _template/course_dump.js <course-id> <module-key>"); process.exit(1); }
const dir = path.join(__dirname, "..", "courses", cid, "modules");
const g = { window: { COURSE: {} } };
for (const f of fs.readdirSync(dir)) new Function("window", fs.readFileSync(path.join(dir, f), "utf8"))(g.window);
const c = g.window.COURSE[key];
if (!c) { console.error("no module " + key + ". Keys: " + Object.keys(g.window.COURSE).join(", ")); process.exit(1); }
const strip = s => String(s).replace(/\{\{[^}]+\}\}/g, "");
console.log("INTRO:", strip(c.intro));
console.log("OUTCOMES:", c.outcomes.map(strip).join(" | "));
for (const L of c.lessons) {
  if (/lecturer's method/i.test(L.title)) continue;
  console.log("\n## " + L.id + " " + L.title);
  for (const b of L.blocks) {
    if (b.t == "p") console.log("- " + strip(b.x));
    else if (b.t == "h") console.log("### " + b.x);
    else if (b.t == "ul" || b.t == "ol") b.i.forEach(i => console.log("  * " + strip(i)));
    else if (b.t == "table") { console.log("[table] " + b.title); console.log("  " + b.head.join(" | ")); b.rows.forEach(r => console.log("  " + r.map(strip).join(" | "))); }
    else if (b.t == "callout") console.log("[callout " + b.k + "] " + strip(b.x));
    else if (b.t == "example") { console.log("[example] " + b.title); b.steps.forEach(s => console.log("  > " + strip(s))); }
    else if (b.t == "terms") b.i.forEach(t => console.log("  term " + t[0] + ": " + strip(t[1])));
    else if (b.t == "check") console.log("[check] " + b.q + " => " + b.o[b.a] + " (" + strip(b.w) + ")");
    else if (b.t == "activity") console.log("[activity] " + strip(b.x));
    else if (b.t == "take") b.i.forEach(i => console.log("  take: " + i));
    else if (b.t == "fig") console.log("[fig] " + b.title + " - " + (b.cap || ""));
  }
}
