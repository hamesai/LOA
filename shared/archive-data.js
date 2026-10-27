/* Library data. Every course is a pack file (pack-<id>.js) that registers itself with ARCHIVE_ADD.
   Add a course with _template/new_course.py, or ask Claude to run Library of Alexandria. */
window.ARCHIVE = { updated: "2026-10-10", libraries: [], modules: [], resources: [], activity: [], slides: [], quiz: {}, details: {} };
window.ARCHIVE_ADD = function (pack) {
  var A = window.ARCHIVE;
  ["libraries", "modules", "resources", "activity", "slides"].forEach(function (k) { if (pack[k]) A[k] = A[k].concat(pack[k]); });
  ["quiz", "details"].forEach(function (k) { if (pack[k]) Object.keys(pack[k]).forEach(function (m) { A[k][m] = pack[k][m]; }); });
  if (pack.updated && pack.updated > A.updated) A.updated = pack.updated;
};
