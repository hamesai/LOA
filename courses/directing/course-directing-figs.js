/* Diagrams for Directing for stage and screen. Ids are prefixed with the course id. */
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

  /* Module 1: the production in four stages */
  CE.figs["directing-process"] = function () {
    var s = svg(700, 250, "Four stages of a production: prepare, design, rehearse, open");
    chain(s, [["1 Prepare", "script, theme,", "audience, space"], ["2 Design", "ground plan,", "designers, casting"], ["3 Rehearse", "read, block,", "run, tech"], ["4 Open", "hand over to", "the stage manager"]], 40, 110, { s: 13, cols: [ACC, OK, WARN, BAD] });
    s.appendChild(T(350, 190, "On screen the third stage becomes prep, shoot and edit", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(T(350, 212, "but stages 1, 2 and 4 keep the same questions", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 2: the objective ladder */
  CE.figs["directing-ladder"] = function () {
    var s = svg(700, 330, "A ladder from small unit objectives up to the super-objective");
    var rows = [["Super-objective", "the aim of the whole part", WARN], ["Through-line", "the path that joins every unit to it", OK], ["Scene objective", "what the character needs to leave the scene", ACC], ["Unit objective", "a verb, aimed at a partner, playable now", INK]];
    rows.forEach(function (r, i) {
      var y = 14 + i * 78, w = 240 + i * 120, x = 350 - w / 2;
      s.appendChild(R(x, y, w, 66, { f: PANEL, c: r[2], w: 2.5, r: 8 }));
      s.appendChild(T(350, y + 28, r[0], { a: "middle", s: 16, c: INK, w: 700 }));
      s.appendChild(T(350, y + 49, r[1], { a: "middle", s: 12 }));
    });
    return s;
  };

  /* Module 4: stage focus map, strongest to weakest (Garcia's order for a frontal Western audience) */
  CE.figs["directing-stagefocus"] = function () {
    var s = svg(700, 330, "Stage areas ranked from strongest to weakest for focus");
    var rank = [[8, 5, 9], [6, 2, 7], [3, 1, 4]]; /* rows: upstage, centre, downstage; columns: audience left to right = stage right to stage left */
    s.appendChild(T(350, 18, "Upstage (away from the audience)", { a: "middle", s: 12 }));
    var labels = [["Upstage", "right", "centre", "left"]];
    var colw = 150, rowh = 78, x0 = 125, y0 = 30;
    var names = [["upstage right", "upstage centre", "upstage left"], ["stage right", "centre stage", "stage left"], ["downstage right", "downstage centre", "downstage left"]];
    rank.forEach(function (row, r) {
      row.forEach(function (n, c) {
        var shade = (10 - n) / 9;
        s.appendChild(S("rect", { x: x0 + c * colw, y: y0 + r * rowh, width: colw - 6, height: rowh - 6, rx: 8, style: "fill:" + ACC + ";fill-opacity:" + (0.08 + 0.5 * shade) + ";stroke:" + ACC + ";stroke-width:1.5" }));
        s.appendChild(T(x0 + c * colw + (colw - 6) / 2, y0 + r * rowh + 34, String(n), { a: "middle", s: 22, c: INK, w: 700 }));
        s.appendChild(T(x0 + c * colw + (colw - 6) / 2, y0 + r * rowh + 54, names[r][c], { a: "middle", s: 12 }));
      });
    });
    s.appendChild(T(350, y0 + 3 * rowh + 18, "Downstage (toward the audience). Audience looks from here.", { a: "middle", s: 12 }));
    s.appendChild(T(350, y0 + 3 * rowh + 38, "1 = strongest, 9 = weakest. A strong posture can override the order.", { a: "middle", s: 12, c: INK, w: 600 }));
    return s;
  };

  /* Module 5: the 180 degree line */
  CE.figs["directing-axis"] = function () {
    var s = svg(700, 320, "Two characters, the line between them, and the camera positions on one side");
    s.appendChild(L(110, 160, 590, 160, MUTED, 2, "6 5"));
    s.appendChild(T(350, 148, "the line (axis of action)", { a: "middle", s: 12 }));
    s.appendChild(C(220, 160, 18, { f: PANEL, c: ACC, w: 3 })); s.appendChild(T(220, 165, "A", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(C(480, 160, 18, { f: PANEL, c: OK, w: 3 })); s.appendChild(T(480, 165, "B", { a: "middle", s: 14, c: INK, w: 700 }));
    [[350, 262, "master"], [165, 238, "over B, on A"], [535, 238, "over A, on B"]].forEach(function (c) {
      s.appendChild(R(c[0] - 17, c[1] - 11, 34, 22, { f: PANEL, c: INK, w: 2, r: 4 }));
      s.appendChild(T(c[0], c[1] + 30, c[2], { a: "middle", s: 12 }));
    });
    s.appendChild(P("M300 60 L400 60 L400 100 L300 100 Z", { c: BAD, w: 2, d: "4 4" }));
    s.appendChild(T(350, 84, "no cameras here", { a: "middle", s: 12, c: BAD, w: 600 }));
    s.appendChild(T(350, 30, "Cross the line and A and B seem to swap sides", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };

  /* Module 6: three layouts, plan view */
  CE.figs["directing-spaces"] = function () {
    var s = svg(700, 250, "Plan views of proscenium, thrust and round stages with the audience marked");
    function seats(x, y, w, h) { s.appendChild(R(x, y, w, h, { f: ACC, c: ACC, w: 1 })); s.lastChild.setAttribute("style", s.lastChild.getAttribute("style") + ";fill-opacity:.2"); }
    /* proscenium */
    s.appendChild(R(30, 40, 170, 60, { f: PANEL, c: INK, w: 2.5, r: 4 })); seats(30, 110, 170, 60);
    s.appendChild(T(115, 74, "stage", { a: "middle", s: 13, c: INK, w: 600 })); s.appendChild(T(115, 144, "audience", { a: "middle", s: 12 }));
    s.appendChild(T(115, 200, "Proscenium", { a: "middle", s: 15, c: INK, w: 700 })); s.appendChild(T(115, 220, "one side, picture frame", { a: "middle", s: 12 }));
    /* thrust */
    s.appendChild(R(290, 80, 120, 50, { f: PANEL, c: INK, w: 2.5, r: 4 })); s.appendChild(R(310, 130, 80, 40, { f: PANEL, c: INK, w: 2.5, r: 4 }));
    seats(250, 130, 55, 50); seats(395, 130, 55, 50); seats(290, 180, 120, 28);
    s.appendChild(T(350, 62, "back wall", { a: "middle", s: 12 })); s.appendChild(T(350, 232, "Thrust", { a: "middle", s: 15, c: INK, w: 700 }));
    /* round */
    s.appendChild(C(585, 110, 42, { f: PANEL, c: INK, w: 2.5 })); s.appendChild(C(585, 110, 78, { f: "none", c: ACC, w: 14 })); s.lastChild.setAttribute("style", s.lastChild.getAttribute("style") + ";stroke-opacity:.25");
    s.appendChild(T(585, 114, "stage", { a: "middle", s: 12, c: INK, w: 600 }));
    s.appendChild(T(585, 218, "Round", { a: "middle", s: 15, c: INK, w: 700 })); s.appendChild(T(585, 238, "all around", { a: "middle", s: 12 }));
    return s;
  };
})();
