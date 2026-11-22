/* Module 6, lesson 2: the Eastman toning sentence appeared twice in one callout. Keeps one copy. */
const P = require("../../../_template/course_patch.js");
const m = P.load("cinematography", "cinematography-6");
const dup = " Kodak's 1918 guide names the toning colours copper red (tone A), sepia (E), sulphide (F), olive green (G) and blue iron (H). Its bath times are for 1918 stock only: they are historical and must not be used as current instructions. {{eastman-tinting-toning}}";
P.replaceText(m, "l2", "Colour has been added to black and white", "{{eastman-tinting-toning}}" + dup, "{{eastman-tinting-toning}}");
P.save(m);
console.log("duplicate removed");
