/* Applies length fixes to an mcq_rewrite.js data object: each fix replaces one distractor so the right answer is not the longest.
   In a data file:  require("../../../../_template/mcq_fix.js")(module.exports, "<course-id>", [[moduleSuffix, matchStart, index, newText], ...]); */
module.exports = function (data, cid, fixes) {
  for (const [m, match, i, text] of fixes) {
    const list = data[cid + "-" + m];
    if (!list) throw new Error("fix: no module " + m);
    const e = list.find(x => x.match.startsWith(match) || match.startsWith(x.match));
    if (!e) throw new Error("fix target not found: " + match);
    if (!(i >= 0 && i < 4)) throw new Error("fix index must be 0-3: " + match);
    e.d[i] = text;
  }
  return data;
};
