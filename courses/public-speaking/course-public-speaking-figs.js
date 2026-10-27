/* Diagrams for Public speaking fundamentals. Ids are prefixed with the course id. */
(function () {
  "use strict";
  var CE = window.CourseEngine, S = CE.S;
  var INK = "var(--ink)", MUTED = "var(--muted)", LINE = "var(--line)", ACC = "var(--accent)", WARN = "var(--warn)", BAD = "var(--bad)", OK = "var(--ok)", PANEL = "var(--panel)";
  function svg(w, h, label) { return S("svg", { viewBox: "0 0 " + w + " " + h, role: "img", "aria-label": label, width: "100%" }); }
  function T(x, y, s, o) { o = o || {}; var e = S("text", { x: x, y: y, "text-anchor": o.a || "start", style: "fill:" + (o.c || MUTED) + ";font:" + (o.w || 400) + " " + (o.s || 13) + "px var(--f-body)" + (o.halo ? ";paint-order:stroke;stroke:var(--panel);stroke-width:5px;stroke-linejoin:round" : "") }); e.textContent = s; return e; }
  function L(x1, y1, x2, y2, c, w, dash) { return S("line", { x1: x1, y1: y1, x2: x2, y2: y2, style: "stroke:" + (c || LINE) + ";stroke-width:" + (w || 1) + (dash ? ";stroke-dasharray:" + dash : "") }); }
  function P(d, o) { o = o || {}; return S("path", { d: d, style: "fill:" + (o.f || "none") + ";stroke:" + (o.c || INK) + ";stroke-width:" + (o.w || 2) + ";stroke-linecap:round;stroke-linejoin:round" + (o.d ? ";stroke-dasharray:" + o.d : "") }); }
  function R(x, y, w, h, o) { o = o || {}; return S("rect", { x: x, y: y, width: w, height: h, rx: o.r || 0, style: "fill:" + (o.f || "none") + ";stroke:" + (o.c || INK) + ";stroke-width:" + (o.w || 2) }); }
  function C(x, y, r, o) { o = o || {}; return S("circle", { cx: x, cy: y, r: r, style: "fill:" + (o.f || "none") + ";stroke:" + (o.c || INK) + ";stroke-width:" + (o.w || 2) }); }
  function arrow(x1, y1, x2, y2, c) {
    var a = Math.atan2(y2 - y1, x2 - x1), hd = 8, g = S("g");
    g.appendChild(L(x1, y1, x2, y2, c, 2.5));
    g.appendChild(P("M" + x2 + " " + y2 + " L" + (x2 - hd * Math.cos(a - 0.45)) + " " + (y2 - hd * Math.sin(a - 0.45)) + " M" + x2 + " " + y2 + " L" + (x2 - hd * Math.cos(a + 0.45)) + " " + (y2 - hd * Math.sin(a + 0.45)), { c: c, w: 2.5 }));
    return g;
  }
  function box(s, x, y, w, h, lines, o) {
    o = o || {};
    s.appendChild(R(x, y, w, h, { f: o.f || PANEL, c: o.c || INK, w: o.w || 2, r: 8 }));
    var n = lines.length, lh = o.s ? o.s + 4 : 17, y0 = y + h / 2 - (n - 1) * lh / 2 + 4;
    lines.forEach(function (ln, i) { s.appendChild(T(x + w / 2, y0 + i * lh, ln, { a: "middle", s: o.s || 13, c: i === 0 || !o.sub ? (o.tc || INK) : MUTED, w: i === 0 && o.bold ? 700 : 500 })); });
  }
  /* A left-to-right row of boxes joined by arrows. items: [[line1, line2?], ...] */
  function chain(s, items, y, h, o) {
    o = o || {};
    var n = items.length, gap = o.gap || 22, w = (700 - 20 - gap * (n - 1)) / n;
    items.forEach(function (it, i) {
      var x = 10 + i * (w + gap);
      box(s, x, y, w, h, it, { c: (o.cols && o.cols[i]) || ACC, s: o.s || 13, bold: true, sub: true });
      if (i < n - 1) s.appendChild(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2, MUTED));
    });
  }

  /* Module 1 */
  CE.figs["public-speaking-process"] = function () {
    var s = svg(700, 300, "Three overlapping circles for message, skill and passion");
    [[260, 130, "Message", "what you say", ACC], [440, 130, "Skill", "how you say it", OK], [350, 215, "Passion", "why it matters to you", WARN]].forEach(function (c) {
      s.appendChild(S("circle", { cx: c[0], cy: c[1], r: 95, style: "fill:" + c[4] + ";fill-opacity:.14;stroke:" + c[4] + ";stroke-width:2.5" }));
    });
    s.appendChild(T(200, 105, "Message", { a: "middle", s: 15, c: INK, w: 700 })); s.appendChild(T(200, 124, "what you say", { a: "middle", s: 12 }));
    s.appendChild(T(500, 105, "Skill", { a: "middle", s: 15, c: INK, w: 700 })); s.appendChild(T(500, 124, "how you say it", { a: "middle", s: 12 }));
    s.appendChild(T(350, 262, "Passion", { a: "middle", s: 15, c: INK, w: 700 })); s.appendChild(T(350, 280, "why it matters to you", { a: "middle", s: 12 }));
    s.appendChild(T(350, 160, "A speech that", { a: "middle", s: 12, c: INK, w: 600 })); s.appendChild(T(350, 176, "works", { a: "middle", s: 12, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-pyramid"] = function () {
    var s = svg(640, 300, "Ethics pyramid with intent at the base, means in the middle and ends at the top");
    var lv = [["Ends", "the effect on the audience and others", OK], ["Means", "how you reach people: honesty, fair evidence", ACC], ["Intent", "why you are speaking at all", WARN]];
    lv.forEach(function (l, i) {
      var w = 220 + i * 160, x = 320 - w / 2, y = 20 + i * 86;
      s.appendChild(R(x, y, w, 76, { f: PANEL, c: l[2], w: 2.5, r: 8 }));
      s.appendChild(T(320, y + 32, l[0], { a: "middle", s: 17, c: INK, w: 700 }));
      s.appendChild(T(320, y + 54, l[1], { a: "middle", s: 12 }));
    });
    return s;
  };
  CE.figs["public-speaking-types"] = function () {
    var s = svg(700, 250, "Four sources of speaking anxiety");
    [["Trait", "you are anxious", "in many situations"], ["Context", "this kind of", "setting worries you"], ["Audience", "these particular", "people worry you"], ["Situation", "this occasion", "feels high stakes"]].forEach(function (a, i) {
      var x = 12 + i * 172;
      box(s, x, 30, 160, 110, [a[0], a[1], a[2]], { c: ACC, s: 13, bold: true, sub: true });
    });
    s.appendChild(T(350, 190, "Name which one is yours, because each calls for a different plan.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-curve"] = function () {
    var s = svg(700, 300, "Illustrative curve showing nerves peaking at anticipation then falling during the speech");
    s.appendChild(L(60, 250, 660, 250, MUTED, 2)); s.appendChild(L(60, 250, 60, 30, MUTED, 2));
    s.appendChild(P("M60 190 C140 150 190 60 270 55 C340 50 380 130 460 190 C530 225 600 232 660 236", { c: ACC, w: 3.5 }));
    s.appendChild(T(40, 40, "Nerves", { a: "end", s: 12 }));
    s.appendChild(T(270, 36, "peak: waiting to start", { a: "middle", s: 12, c: INK, w: 600 }));
    s.appendChild(T(130, 276, "days before", { a: "middle", s: 12 })); s.appendChild(T(270, 276, "just before", { a: "middle", s: 12 })); s.appendChild(T(460, 276, "speaking", { a: "middle", s: 12 })); s.appendChild(T(610, 276, "afterwards", { a: "middle", s: 12 }));
    s.appendChild(T(350, 20, "Shape is illustrative of the pattern, not measured data", { a: "middle", s: 11 }));
    return s;
  };

  /* Module 2 */
  CE.figs["public-speaking-listen"] = function () {
    var s = svg(700, 230, "Five stages of listening with noise able to interrupt any stage");
    chain(s, [["1 Receive", "hear it"], ["2 Understand", "make sense"], ["3 Remember", "store it"], ["4 Evaluate", "weigh it"], ["5 Respond", "react"]], 50, 70, { gap: 18, s: 13 });
    s.appendChild(P("M40 150 L660 150", { c: BAD, w: 2, d: "6 5" }));
    s.appendChild(T(350, 182, "Noise: distraction, phones, accent, fatigue, bias, interrupts any stage", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-layers"] = function () {
    var s = svg(640, 300, "Three nested layers of audience analysis");
    s.appendChild(R(10, 10, 620, 280, { f: PANEL, c: WARN, w: 2.5, r: 14 }));
    s.appendChild(T(320, 34, "Situational: size, room, time, mood", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(R(50, 50, 540, 220, { f: PANEL, c: OK, w: 2.5, r: 12 }));
    s.appendChild(T(320, 74, "Psychological: beliefs, attitudes, values", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(R(100, 90, 440, 160, { f: PANEL, c: ACC, w: 2.5, r: 10 }));
    s.appendChild(T(320, 164, "Demographic", { a: "middle", s: 15, c: INK, w: 700 })); s.appendChild(T(320, 186, "age, gender, culture, education", { a: "middle", s: 12 }));
    return s;
  };
  CE.figs["public-speaking-adapt"] = function () {
    var s = svg(700, 280, "Adapting to audience signals");
    [["Drowsy faces", "Add energy or a question", ACC], ["Puzzled looks", "Add an example or define a term", OK], ["Frowns and folded arms", "Add evidence or acknowledge disagreement", WARN]].forEach(function (a, i) {
      var y = 20 + i * 84;
      box(s, 20, y, 250, 64, [a[0]], { c: a[2], s: 14, bold: true });
      s.appendChild(arrow(274, y + 32, 330, y + 32, MUTED));
      box(s, 336, y, 340, 64, [a[1]], { c: a[2], s: 14, bold: true });
    });
    return s;
  };
  CE.figs["public-speaking-funnel"] = function () {
    var s = svg(700, 300, "A funnel narrowing a broad subject to a specific purpose");
    [["Subject", "Food", 600], ["Area", "Food waste", 440], ["Topic", "Waste in school kitchens", 300], ["Specific purpose", "Persuade the PTA to start a food-waste bin", 200]].forEach(function (t, i) {
      var y = 12 + i * 70, w = t[2], x = 350 - w / 2;
      s.appendChild(R(x, y, w, 60, { f: PANEL, c: i === 3 ? OK : ACC, w: 2.5, r: 8 }));
      s.appendChild(T(350, y + 26, t[0], { a: "middle", s: 14, c: INK, w: 700 }));
      s.appendChild(T(350, y + 45, i === 3 ? "Persuade the PTA to start a bin" : t[1], { a: "middle", s: 12 }));
    });
    return s;
  };

  /* Module 3 */
  CE.figs["public-speaking-timeline"] = function () {
    var s = svg(700, 200, "A preparation bar split into research, build and practice, and buffer");
    var seg = [["Research", 1 / 3, ACC], ["Structure, write, rehearse", 0.5, OK], ["Buffer", 1 / 6, WARN]], x = 20, W = 660;
    seg.forEach(function (g) {
      var w = W * g[1];
      s.appendChild(R(x, 50, w, 70, { f: PANEL, c: g[2], w: 2.5, r: 6 }));
      s.appendChild(T(x + w / 2, 90, g[0], { a: "middle", s: 13, c: INK, w: 700 }));
      x += w;
    });
    s.appendChild(T(20 + W / 6, 145, "no more than one-third", { a: "middle", s: 12 }));
    s.appendChild(T(350, 175, "Rule of thumb: about one day of preparation per minute of speech", { a: "middle", s: 12, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-criteria"] = function () {
    var s = svg(700, 240, "Four tests for a piece of support");
    [["Accuracy", "is it true and checkable?"], ["Authority", "does the author know?"], ["Currency", "is it recent enough?"], ["Objectivity", "any interest or bias?"]].forEach(function (a, i) {
      var x = 12 + i * 172;
      box(s, x, 40, 160, 100, [a[0], a[1]], { c: ACC, s: 13, bold: true, sub: true });
      s.appendChild(C(x + 80, 168, 12, { f: PANEL, c: OK, w: 2.5 }));
    });
    s.appendChild(T(350, 214, "Tick each box. A run of 'no' answers is a warning sign.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-six"] = function () {
    var s = svg(700, 260, "Six kinds of support as legs of a table");
    s.appendChild(R(40, 40, 620, 36, { f: PANEL, c: ACC, w: 3, r: 6 }));
    s.appendChild(T(350, 63, "Your central idea", { a: "middle", s: 15, c: INK, w: 700 }));
    ["Facts and statistics", "Definitions", "Examples", "Narratives", "Testimony", "Analogies"].forEach(function (n, i) {
      var x = 50 + i * 104;
      s.appendChild(R(x + 28, 80, 20, 100, { f: PANEL, c: OK, w: 2.5, r: 3 }));
      s.appendChild(T(x + 38, 205, n, { a: "middle", s: 11, c: INK, w: 600 }));
    });
    return s;
  };
  CE.figs["public-speaking-sea"] = function () {
    var s = svg(700, 220, "Setup, execution, analysis");
    chain(s, [["Setup", "who, where, when"], ["Execution", "quote, number, image"], ["Analysis", "so what for my point"]], 50, 90, { gap: 40, s: 14, cols: [ACC, OK, WARN] });
    s.appendChild(T(350, 180, "Never leave evidence unexplained.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };

  /* Module 4 */
  CE.figs["public-speaking-intro"] = function () {
    var s = svg(700, 300, "The five parts of an introduction");
    chain(s, [["Attention", "getter"], ["Link", "to topic"], ["Reasons", "to listen"], ["Thesis", "statement"], ["Preview", "of points"]], 40, 90, { gap: 16, s: 13 });
    s.appendChild(R(10, 160, 680, 56, { f: PANEL, c: OK, w: 2, r: 8 }));
    s.appendChild(T(350, 184, "Credibility runs through all of it", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(T(350, 204, "competence, trustworthiness, caring / goodwill", { a: "middle", s: 12 }));
    s.appendChild(T(350, 250, "About 10 to 15 percent of speaking time", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-patterns"] = function () {
    var s = svg(700, 300, "Eight organising patterns");
    [["Topical", "A  B  C"], ["Compare", "same / different"], ["Spatial", "north to south"], ["Chronological", "past to future"], ["Biographical", "a life in phases"], ["Causal", "cause to effect"], ["Problem-cause-solution", "fix it"], ["Psychological", "A leads to B to C"]].forEach(function (p, i) {
      var col = i % 4, row = Math.floor(i / 4), x = 12 + col * 172, y = 20 + row * 130;
      box(s, x, y, 160, 100, [p[0], p[1]], { c: i > 5 ? OK : ACC, s: 13, bold: true, sub: true });
    });
    s.appendChild(T(350, 285, "Green patterns suit persuasion best", { a: "middle", s: 12 }));
    return s;
  };
  CE.figs["public-speaking-flow"] = function () {
    var s = svg(700, 280, "Where transitions, previews and summaries sit");
    box(s, 10, 40, 150, 70, ["Main point 1"], { c: ACC, s: 14, bold: true });
    box(s, 275, 40, 150, 70, ["Main point 2"], { c: ACC, s: 14, bold: true });
    box(s, 540, 40, 150, 70, ["Main point 3"], { c: ACC, s: 14, bold: true });
    s.appendChild(arrow(164, 75, 270, 75, OK)); s.appendChild(arrow(429, 75, 535, 75, OK));
    s.appendChild(T(217, 66, "transition", { a: "middle", s: 12, c: INK, w: 600, halo: true })); s.appendChild(T(482, 66, "transition", { a: "middle", s: 12, c: INK, w: 600, halo: true }));
    s.appendChild(T(85, 140, "internal preview", { a: "middle", s: 12 })); s.appendChild(T(85, 158, "at the start", { a: "middle", s: 12 }));
    s.appendChild(T(350, 140, "internal summary", { a: "middle", s: 12 })); s.appendChild(T(350, 158, "after a complex point", { a: "middle", s: 12 }));
    s.appendChild(T(615, 140, "signposts", { a: "middle", s: 12 })); s.appendChild(T(615, 158, "first, second, finally", { a: "middle", s: 12 }));
    s.appendChild(T(350, 230, "Listeners cannot rewind, so say where you are.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-cards"] = function () {
    var s = svg(700, 280, "A full outline shrinking to five numbered cards");
    box(s, 10, 30, 190, 120, ["Full-sentence", "outline", "(everything you say)"], { c: ACC, s: 13, bold: true, sub: true });
    s.appendChild(arrow(204, 90, 262, 90, MUTED));
    ["Intro", "Point 1", "Point 2", "Point 3", "End"].forEach(function (n, i) {
      var x = 268 + i * 86;
      s.appendChild(R(x, 52, 76, 76, { f: PANEL, c: OK, w: 2.5, r: 6 }));
      s.appendChild(T(x + 38, 82, String(i + 1), { a: "middle", s: 18, c: OK, w: 700 })); s.appendChild(T(x + 38, 106, n, { a: "middle", s: 12, c: INK, w: 600 }));
    });
    s.appendChild(T(480, 160, "Five cards, key words only, one side", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(T(350, 230, "Practise from the cards, not the script.", { a: "middle", s: 13 }));
    return s;
  };

  /* Module 5 */
  CE.figs["public-speaking-lang"] = function () {
    var s = svg(700, 260, "Written and spoken style compared");
    box(s, 20, 20, 310, 150, ["On the page", "long sentences", "many syllables", "precise numbers"], { c: MUTED, s: 13, bold: true, sub: true });
    box(s, 370, 20, 310, 150, ["For the ear", "short sentences, contractions", "repetition, I and you", "concrete images"], { c: ACC, s: 13, bold: true, sub: true });
    s.appendChild(arrow(334, 95, 366, 95, OK));
    s.appendChild(T(350, 215, "Read your draft aloud. If it sounds like a textbook, rewrite it.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-power"] = function () {
    var s = svg(700, 300, "Powerful language on one side and seven powerless habits on the other");
    box(s, 20, 20, 250, 250, ["Powerful", "direct requests", "specific facts", "plain statements", "pauses"], { c: OK, s: 14, bold: true, sub: true });
    box(s, 290, 20, 390, 250, ["Powerless: cut these"], { c: BAD, s: 14, bold: true });
    ["hesitations", "intensifiers", "disqualifiers", "tag questions", "self-criticism", "hedges", "fillers: um, like"].forEach(function (h, i) { s.appendChild(T(310, 92 + i * 24, "• " + h, { s: 13, c: INK, w: 500 })); });
    return s;
  };
  CE.figs["public-speaking-methods"] = function () {
    var s = svg(700, 280, "Four delivery methods on a spectrum from least to most scripted");
    s.appendChild(L(40, 100, 660, 100, MUTED, 3));
    [["Impromptu", "no prep", 70], ["Extemporaneous", "rehearsed, brief notes", 250], ["Manuscript", "read word for word", 450], ["Memorised", "recited", 630]].forEach(function (m, i) {
      s.appendChild(C(m[2], 100, 14, { f: i === 1 ? OK : PANEL, c: i === 1 ? OK : ACC, w: 3 }));
      s.appendChild(T(m[2], 145, m[0], { a: "middle", s: 14, c: INK, w: 700 })); s.appendChild(T(m[2], 164, m[1], { a: "middle", s: 12 }));
    });
    s.appendChild(T(250, 210, "Best for most speeches", { a: "middle", s: 12, c: OK, w: 700 }));
    s.appendChild(T(350, 60, "less scripted", { a: "start", s: 12 })); s.appendChild(T(660, 60, "more scripted", { a: "end", s: 12 }));
    return s;
  };
  CE.figs["public-speaking-voice"] = function () {
    var s = svg(700, 260, "Four vocal dials");
    [["Volume", "soft to loud"], ["Rate", "slow to fast"], ["Pitch", "low to high"], ["Pauses", "short to long"]].forEach(function (d, i) {
      var cx = 90 + i * 173, cy = 110;
      s.appendChild(C(cx, cy, 52, { f: PANEL, c: ACC, w: 3 }));
      s.appendChild(L(cx, cy, cx + 28 * (i % 2 ? -1 : 1), cy - 30, INK, 3));
      s.appendChild(T(cx, cy + 82, d[0], { a: "middle", s: 14, c: INK, w: 700 })); s.appendChild(T(cx, cy + 100, d[1], { a: "middle", s: 12 }));
    });
    return s;
  };

  /* Module 6 */
  CE.figs["public-speaking-aids"] = function () {
    var s = svg(700, 240, "Four jobs of a presentation aid");
    [["Understand", "clarify or emphasise"], ["Remember", "pictures plus words"], ["Stay interested", "variety"], ["Credibility", "clean and credited"]].forEach(function (a, i) {
      box(s, 12 + i * 172, 40, 160, 100, a, { c: i === 3 ? OK : ACC, s: 13, bold: true, sub: true });
    });
    s.appendChild(T(350, 190, "An aid that does none of these should be cut.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-design"] = function () {
    var s = svg(700, 300, "A slide with one graphic about a third of the area and a short caption");
    s.appendChild(R(150, 20, 400, 240, { f: PANEL, c: INK, w: 2.5, r: 6 }));
    s.appendChild(R(170, 40, 150, 130, { f: "none", c: ACC, w: 2.5, r: 4 })); s.appendChild(T(245, 110, "graphic", { a: "middle", s: 14, c: INK, w: 600 }));
    s.appendChild(P("M345 150 L395 120 L440 135 L520 70", { c: ACC, w: 3 }));
    s.appendChild(T(350, 215, "Buses: 12 to 5", { a: "middle", s: 20, c: INK, w: 700 }));
    s.appendChild(T(350, 285, "Big text, few words, white space, readable from the back", { a: "middle", s: 12, c: INK, w: 600 }));
    return s;
  };
  CE.figs["public-speaking-rowan"] = function () {
    var s = svg(700, 280, "Three sources of confusion with matching explanations");
    [["Hard word or concept", "Elucidating", "example, definition, examples and non-examples, practice"], ["Hard to picture", "Quasi-scientific", "big picture, then how parts relate"], ["Hard to believe", "Transformative", "why their idea is plausible, its limits, the accepted view"]].forEach(function (r, i) {
      var y = 14 + i * 88;
      box(s, 14, y, 220, 70, [r[0]], { c: WARN, s: 13, bold: true });
      s.appendChild(arrow(238, y + 35, 270, y + 35, MUTED));
      box(s, 276, y, 410, 70, [r[1], r[2]], { c: OK, s: 13, bold: true, sub: true });
    });
    return s;
  };
  CE.figs["public-speaking-motive"] = function () {
    var s = svg(700, 230, "Monroe's motivated sequence");
    chain(s, [["1 Attention", "get it"], ["2 Need", "the problem"], ["3 Satisfaction", "the plan"], ["4 Visualise", "the result"], ["5 Action", "the ask"]], 50, 90, { gap: 14, s: 12 });
    s.appendChild(T(350, 175, "Keep the ask small, specific and immediate.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };

  /* Capstone */
  CE.figs["public-speaking-plan"] = function () {
    var s = svg(700, 280, "A five-step cycle of plan, build, rehearse, record and review");
    chain(s, [["Plan", "purpose, audience"], ["Build", "outline, cards"], ["Rehearse", "aloud, timed"], ["Record", "audio or video"], ["Review", "fix two things"]], 50, 90, { gap: 14, s: 12 });
    s.appendChild(P("M640 150 Q640 215 350 215 Q60 215 60 150", { c: OK, w: 2.5, d: "7 5" }));
    s.appendChild(arrow(60, 156, 60, 146, OK));
    s.appendChild(T(350, 208, "Repeat with each speech", { a: "middle", s: 13, c: INK, w: 600, halo: true }));
    return s;
  };
})();
