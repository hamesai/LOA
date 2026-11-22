/* Library-wide search. Finds words across every course: course titles and summaries, module titles, intros, outcomes,
   and all lesson text (paragraphs, headings, lists, tables, checks, terms). Built lazily on first use from window.ARCHIVE
   and window.COURSE. Opens results with window.LOA_openCourse / window.LOA_openModule (set in index.html). */
(function () {
  "use strict";

  // Keys holding ids, paths, flags or metadata rather than readable text.
  var SKIP = { t: 1, id: 1, key: 1, library: 1, file: 1, src: 1, url: 1, href: 1, belt: 1, kind: 1, status: 1, type: 1,
    fig: 1, hours: 1, min: 1, challenges: 1, number: 1, metrics: 1, created: 1, updated: 1, accent: 1, level: 1, tags: 1 };

  var index = null;
  var MAX_RESULTS = 30;

  function collect(v, out) {
    if (v == null) return out;
    if (typeof v === "string") { if (v.length > 1) out.push(v); return out; }
    if (Array.isArray(v)) { v.forEach(function (x) { collect(x, out); }); return out; }
    if (typeof v === "object") {
      Object.keys(v).forEach(function (k) { if (!SKIP[k]) collect(v[k], out); });
    }
    return out;
  }

  function buildIndex() {
    var A = window.ARCHIVE || { libraries: [], modules: [] };
    var C = window.COURSE || {};
    var out = [];
    A.libraries.forEach(function (lib) {
      out.push({
        lib: lib.id, subj: lib.subject, mod: null, modTitle: "Course overview", les: null,
        title: lib.subject, raw: [lib.subject, lib.summary || "", (lib.tags || []).join(" ")].join(" ")
      });
    });
    A.modules.forEach(function (m) {
      if (!m.key) return;
      var lib = A.libraries.filter(function (l) { return l.id === m.library; })[0];
      var subj = lib ? lib.subject : m.library;
      var c = C[m.key] || {};
      var modTitle = m.title || "";
      out.push({
        lib: m.library, subj: subj, mod: m.key, modTitle: modTitle, les: null, title: modTitle,
        raw: [modTitle, c.intro || "", (c.outcomes || []).join(" ")].join(" ")
      });
      (c.lessons || []).forEach(function (les) {
        var body = collect(les.blocks, []).join(" ");
        out.push({
          lib: m.library, subj: subj, mod: m.key, modTitle: modTitle, les: les.title || "", title: les.title || modTitle,
          raw: (les.title || "") + " " + body
        });
      });
    });
    out.forEach(function (e) { e.low = e.raw.toLowerCase(); e.titleLow = (e.title || "").toLowerCase(); e.modLow = (e.modTitle || "").toLowerCase(); });
    return out;
  }

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  // libId: when given, search only that course's modules and lessons (the in-course search).
  function search(query, libId) {
    var terms = query.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 1; });
    if (!terms.length) return [];
    if (!index) index = buildIndex();
    var hits = [];
    index.forEach(function (e) {
      if (libId && (e.lib !== libId || !e.mod)) return;
      var score = 0;
      for (var i = 0; i < terms.length; i++) {
        var t = terms[i];
        var inTitle = e.titleLow.indexOf(t) !== -1, inMod = e.modLow.indexOf(t) !== -1, inBody = e.low.indexOf(t) !== -1;
        if (!inTitle && !inMod && !inBody) return;
        if (inTitle) score += 3;
        if (inMod) score += 2;
        if (inBody) score += 1;
      }
      hits.push({ e: e, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    return hits.slice(0, MAX_RESULTS).map(function (h) { return h.e; }).map(function (e) { e.terms = terms; return e; });
  }

  // Snippet of ~160 characters around the first matched term, with every matched term marked.
  function snippet(e) {
    var terms = e.terms, pos = -1;
    for (var i = 0; i < terms.length; i++) { var p = e.low.indexOf(terms[i]); if (p !== -1 && (pos === -1 || p < pos)) pos = p; }
    if (pos === -1) return "";
    var start = Math.max(0, pos - 70), end = Math.min(e.raw.length, pos + 90);
    var text = (start > 0 ? "…" : "") + e.raw.slice(start, end).replace(/\s+/g, " ") + (end < e.raw.length ? "…" : "");
    return text;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function highlight(parent, text, terms) {
    if (!terms.length) { parent.textContent = text; return; }
    var re = new RegExp("(" + terms.map(escapeRe).join("|") + ")", "gi");
    var last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) parent.appendChild(document.createTextNode(text.slice(last, m.index)));
      parent.appendChild(el("mark", "", m[0]));
      last = m.index + m[0].length;
      if (m[0].length === 0) re.lastIndex++;
    }
    if (last < text.length) parent.appendChild(document.createTextNode(text.slice(last)));
  }

  function open(e) {
    if (e.mod && window.LOA_openModule) window.LOA_openModule(e.mod);
    else if (window.LOA_openCourse) window.LOA_openCourse(e.lib);
  }

  function render(box, query, results, inCourse) {
    box.textContent = "";
    if (!query.trim()) return;
    if (!results.length) { box.appendChild(el("p", "lsearch-none", "Nothing matches “" + query.trim() + "”. Try fewer or different words.")); return; }
    box.appendChild(el("p", "lsearch-count", results.length + (results.length === MAX_RESULTS ? "+" : "") + " result" + (results.length === 1 ? "" : "s") + ". Press Enter to open the top one."));
    var list = el("div", "lsearch-list");
    results.forEach(function (e) {
      var btn = el("button", "lsearch-row");
      btn.type = "button";
      if (!inCourse) btn.appendChild(el("span", "lsearch-course", e.subj));
      var title = el("span", "lsearch-title");
      highlight(title, e.les ? e.les : e.modTitle, e.terms);
      btn.appendChild(title);
      if (e.les) btn.appendChild(el("span", "lsearch-mod", e.modTitle));
      var snip = snippet(e);
      if (snip) { var s = el("span", "lsearch-snip"); highlight(s, snip, e.terms); btn.appendChild(s); }
      btn.addEventListener("click", function () { open(e); });
      list.appendChild(btn);
    });
    box.appendChild(list);
  }

  // Wires one search box to its results panel. scopeFn returns a course id to limit results, or null for the whole library.
  function attach(inputId, boxId, scopeFn) {
    var input = document.getElementById(inputId);
    var box = document.getElementById(boxId);
    if (!input || !box) return;
    var inCourse = !!scopeFn;
    var timer = null, first = null;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var q = input.value;
        var res = search(q, scopeFn ? scopeFn() : null);
        first = res[0] || null;
        render(box, q, res, inCourse);
      }, 150);
    });
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" && first) { ev.preventDefault(); open(first); }
      if (ev.key === "Escape") { input.value = ""; box.textContent = ""; first = null; }
    });
  }

  function init() {
    attach("lsearch-q", "lsearch-out", null);
    attach("csearch-q", "csearch-out", function () { return window.LOA_currentCourse ? window.LOA_currentCourse() : null; });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
