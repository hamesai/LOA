/* Module 6: the 85-filter ratio and stop figures are our own arithmetic; say so, as the standard requires. */
const P = require("../../../_template/course_patch.js");
const m = P.load("cinematography", "cinematography-6");
let n = 0;
for (const L of m.obj.lessons) {
  for (const b of L.blocks) {
    const s = JSON.stringify(b);
    if (s.includes("The ratio is 500") && !s.includes("our arithmetic")) {
      P.replaceText(m, L.id, "The ratio is 500", "The ratio is", "In our arithmetic the ratio is");
      n++;
    }
  }
}
P.save(m);
console.log("labelled", n, "block(s)");
