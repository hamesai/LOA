/* Figures for the course. Each builder returns an SVG element and uses theme tokens so it works in light and dark. */
(function () {
  "use strict";
  var CE = window.CourseEngine, S = CE.S;
  var INK = "var(--ink)", MUTED = "var(--muted)", LINE = "var(--line)", ACC = "var(--accent)", WARN = "var(--warn)", BAD = "var(--bad)", OK = "var(--ok)", PANEL = "var(--panel)";

  function svg(w, h, label) { return S("svg", { viewBox: "0 0 " + w + " " + h, role: "img", "aria-label": label, width: "100%" }); }
  function T(x, y, s, o) { o = o || {}; var e = S("text", { x: x, y: y, "text-anchor": o.a || "start", style: "fill:" + (o.c || MUTED) + ";font:" + (o.w || 400) + " " + (o.s || 12) + "px var(--f-body)" + (o.halo ? ";paint-order:stroke;stroke:var(--panel);stroke-width:5px;stroke-linejoin:round" : "") }); e.textContent = s; return e; }
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

  /* Module 1 */
  CE.figs.daytemp = function () {
    var W = 640, H = 306, x0 = 56, x1 = 620, y0 = 24, y1 = 232, s = svg(W, H, "Illustrative daily temperature curves for outdoors, a vented greenhouse and a sealed greenhouse");
    function X(t) { return x0 + (x1 - x0) * t / 24; }
    function Y(v) { return y1 - (y1 - y0) * v; }
    function curve(base, amp) { var d = ""; for (var t = 0; t <= 24; t += 0.5) { var v = base + amp * Math.cos((t - 15) / 24 * 2 * Math.PI); d += (t ? "L" : "M") + X(t).toFixed(1) + " " + Y(v).toFixed(1) + " "; } return d; }
    for (var g = 0; g <= 4; g++) s.appendChild(L(x0, y0 + g * (y1 - y0) / 4, x1, y0 + g * (y1 - y0) / 4, LINE, 1));
    [0, 6, 12, 18, 24].forEach(function (t) { s.appendChild(L(X(t), y1, X(t), y1 + 5, MUTED, 1)); s.appendChild(T(X(t), y1 + 20, (t < 10 ? "0" : "") + t + ":00", { a: "middle", s: 11 })); });
    s.appendChild(L(x0, y0, x0, y1, MUTED, 1.5)); s.appendChild(L(x0, y1, x1, y1, MUTED, 1.5));
    s.appendChild(T(14, 130, "Temperature", { s: 11 })); s.lastChild.setAttribute("transform", "rotate(-90 14 130)");
    s.appendChild(P(curve(0.40, 0.17), { c: MUTED, w: 2.5 }));
    s.appendChild(P(curve(0.40, 0.25), { c: ACC, w: 2.5 }));
    s.appendChild(P(curve(0.44, 0.40), { c: WARN, w: 2.5 }));
    s.appendChild(L(X(15), Y(0.65), X(15), Y(0.57), INK, 1.5, "3 3"));
    s.appendChild(T(X(15) + 12, Y(0.5), "Gap that ventilation cannot close", { s: 11, c: INK, w: 600, halo: true }));
    s.appendChild(L(X(15) + 10, Y(0.52), X(15) + 2, Y(0.585), INK, 1));
    s.appendChild(T(x1, y1 + 40, "Time of day (illustrative)", { a: "end", s: 11 }));
    s.appendChild(C(78, 288, 5, { f: WARN, c: WARN })); s.appendChild(T(88, 292, "Sealed house", { s: 11 }));
    s.appendChild(C(190, 288, 5, { f: ACC, c: ACC })); s.appendChild(T(200, 292, "Vented house", { s: 11 }));
    s.appendChild(C(300, 288, 5, { f: MUTED, c: MUTED })); s.appendChild(T(310, 292, "Outdoors", { s: 11 }));
    return s;
  };

  CE.figs.orient = function () {
    var s = svg(640, 320, "Top view of a greenhouse with its long side facing south and the sun's path across the south");
    s.appendChild(R(200, 120, 240, 90, { f: PANEL, c: INK, w: 2.5 }));
    s.appendChild(T(320, 170, "Greenhouse (long axis east to west)", { a: "middle", s: 12, c: INK }));
    s.appendChild(L(200, 210, 440, 210, ACC, 6));
    s.appendChild(T(320, 232, "Long side faces south: most winter sun", { a: "middle", s: 12, c: ACC, w: 600 }));
    s.appendChild(P("M110 270 Q320 190 530 270", { c: WARN, w: 2, d: "6 5" }));
    [[110, 270], [215, 232], [320, 222], [425, 232], [530, 270]].forEach(function (p, i) { s.appendChild(C(p[0], p[1], i === 2 ? 9 : 6, { f: WARN, c: WARN })); });
    s.appendChild(T(530, 296, "Sun path (northern hemisphere)", { a: "end", s: 11 }));
    s.appendChild(arrow(60, 90, 60, 36, INK)); s.appendChild(T(60, 26, "N", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(T(580, 160, "E", { a: "middle", s: 14, c: INK, w: 700 })); s.appendChild(T(40, 160, "W", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(T(320, 306, "S", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(C(520, 70, 22, { f: PANEL, c: MUTED, w: 1.5 })); s.appendChild(T(520, 74, "tree", { a: "middle", s: 11 }));
    s.appendChild(T(520, 104, "keep trees and walls off the south side", { a: "middle", s: 11 }));
    return s;
  };

  /* Module 2 */
  CE.figs.seasons = function () {
    var s = svg(640, 348, "Four seasonal blocks with the job the greenhouse does in each");
    var cards = [
      ["Winter", WARN, "Protect hardy crops", "Slow growth. Keep plants hydrated,", "out of wind, and do not force heat-lovers."],
      ["Spring", OK, "Raise transplants", "Nursery for outdoor beds and early cool", "crops. Ventilate early on sunny days."],
      ["Summer", BAD, "Heat crops, cool the rest", "Use the warmth for tomatoes and peppers.", "Shade cool crops. Sow autumn crops."],
      ["Autumn", ACC, "Establish winter crops", "Hardy crops go in from mid to late summer", "in space freed by summer crops."]
    ];
    cards.forEach(function (c, i) {
      var x = 10 + (i % 2) * 316, y = 10 + Math.floor(i / 2) * 160;
      s.appendChild(R(x, y, 304, 148, { f: PANEL, c: LINE, w: 1.5, r: 8 }));
      s.appendChild(R(x, y, 8, 148, { f: c[1], c: c[1], w: 0, r: 0 }));
      s.appendChild(T(x + 24, y + 34, c[0], { s: 22, c: INK, w: 700 }));
      s.appendChild(T(x + 24, y + 64, c[2], { s: 14, c: c[1], w: 700 }));
      s.appendChild(T(x + 24, y + 92, c[3], { s: 12.5 }));
      s.appendChild(T(x + 24, y + 112, c[4], { s: 12.5 }));
    });
    s.appendChild(T(320, 340, "Northern hemisphere shown. Swap the seasons for your hemisphere.", { a: "middle", s: 11 }));
    return s;
  };

  CE.figs.backplan = function () {
    var s = svg(640, 210, "Timeline: sow, then weeks in the tray, then transplant, then days to harvest");
    s.appendChild(L(40, 100, 600, 100, MUTED, 3));
    var pts = [[70, "Sow", "date to find"], [330, "Transplant", "date you choose"], [570, "Harvest", "date you want"]];
    pts.forEach(function (p) {
      s.appendChild(C(p[0], 100, 11, { f: ACC, c: ACC }));
      s.appendChild(T(p[0], 76, p[1], { a: "middle", s: 16, c: INK, w: 700 }));
      s.appendChild(T(p[0], 134, p[2], { a: "middle", s: 12 }));
    });
    s.appendChild(P("M70 150 L70 160 L330 160 L330 150", { c: WARN, w: 2 }));
    s.appendChild(T(200, 182, "weeks in the tray (subtract)", { a: "middle", s: 12, c: WARN, w: 600 }));
    s.appendChild(P("M330 150 L330 160 L570 160 L570 150", { c: OK, w: 2 }));
    s.appendChild(T(450, 182, "days from transplant to harvest", { a: "middle", s: 12, c: OK, w: 600 }));
    s.appendChild(arrow(300, 36, 100, 36, MUTED));
    s.appendChild(T(200, 24, "work backwards from the right", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 3 */
  CE.figs.seedling = function () {
    var s = svg(640, 250, "Four stages: sown seed, emerged seedling, first true leaves, potted on");
    var labels = [["1  Sow", "2 to 3 times the seed width"], ["2  Emerge", "remove the cover"], ["3  First true leaves", "pot on now"], ["4  Potted on", "coarser mix, same depth"]];
    labels.forEach(function (lb, i) {
      var cx = 85 + i * 157, base = 168;
      s.appendChild(R(cx - 62, 18, 124, 214, { f: PANEL, c: LINE, w: 1.5, r: 8 }));
      s.appendChild(T(cx, 40, lb[0], { a: "middle", s: 13, c: INK, w: 700 }));
      s.appendChild(T(cx, 222, lb[1], { a: "middle", s: 11 }));
      var cell = i === 3 ? 44 : 28;
      s.appendChild(P("M" + (cx - cell) + " " + base + " L" + (cx - cell + 6) + " " + (base + 40) + " L" + (cx + cell - 6) + " " + (base + 40) + " L" + (cx + cell) + " " + base + " Z", { c: INK, w: 2, f: "color-mix(in srgb, var(--warn) 18%, transparent)" }));
      if (i === 0) { s.appendChild(S("ellipse", { cx: cx, cy: base + 14, rx: 6, ry: 4, style: "fill:" + INK })); s.appendChild(L(cx - 28, base + 6, cx + 28, base + 6, MUTED, 1, "3 3")); }
      if (i >= 1) {
        var h2 = i === 1 ? 36 : i === 2 ? 62 : 92;
        s.appendChild(L(cx, base, cx, base - h2, OK, 3));
        if (i >= 1) { s.appendChild(P("M" + cx + " " + (base - h2) + " q-24 -10 -28 6 q16 10 28 -6", { c: OK, w: 2, f: "color-mix(in srgb, var(--ok) 30%, transparent)" })); s.appendChild(P("M" + cx + " " + (base - h2) + " q24 -10 28 6 q-16 10 -28 -6", { c: OK, w: 2, f: "color-mix(in srgb, var(--ok) 30%, transparent)" })); }
        if (i >= 2) { var y2 = base - h2 + 22; s.appendChild(P("M" + cx + " " + y2 + " q-30 -16 -36 8 q20 12 36 -8", { c: OK, w: 2, f: "color-mix(in srgb, var(--ok) 50%, transparent)" })); s.appendChild(P("M" + cx + " " + y2 + " q30 -16 36 8 q-20 12 -36 -8", { c: OK, w: 2, f: "color-mix(in srgb, var(--ok) 50%, transparent)" })); }
      }
    });
    [0, 1, 2].forEach(function (i) { s.appendChild(arrow(150 + i * 157, 120, 170 + i * 157, 120, MUTED)); });
    return s;
  };

  /* Module 4 */
  CE.figs.phband = function () {
    var s = svg(640, 190, "pH scale from 4.0 to 8.0 with the 5.4 to 6.2 band highlighted");
    var x0 = 50, x1 = 600;
    function X(v) { return x0 + (x1 - x0) * (v - 4) / 4; }
    s.appendChild(R(x0, 70, x1 - x0, 34, { f: "color-mix(in srgb, var(--bad) 10%, transparent)", c: LINE, w: 1 }));
    s.appendChild(R(X(5.4), 70, X(6.2) - X(5.4), 34, { f: "color-mix(in srgb, var(--ok) 38%, transparent)", c: OK, w: 2 }));
    for (var v = 4; v <= 8.01; v += 0.5) { s.appendChild(L(X(v), 104, X(v), 112, MUTED, 1)); s.appendChild(T(X(v), 128, v.toFixed(1), { a: "middle", s: 11 })); }
    s.appendChild(T((X(5.4) + X(6.2)) / 2, 92, "5.4 to 6.2", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(T((X(5.4) + X(6.2)) / 2, 54, "all nutrients readily available", { a: "middle", s: 12, c: OK, w: 600 }));
    s.appendChild(L((X(5.4) + X(6.2)) / 2, 58, (X(5.4) + X(6.2)) / 2, 68, OK, 1.5));
    s.appendChild(T(x0, 28, "More acidic", { s: 11 })); s.appendChild(T(x1, 28, "More alkaline", { a: "end", s: 11 }));
    s.appendChild(T(X(7.1), 92, "high pH can lock out iron", { a: "middle", s: 12, c: BAD, w: 600 }));
    s.appendChild(T(X(4.7), 92, "low pH", { a: "middle", s: 12, c: MUTED }));
    s.appendChild(T(320, 168, "Each species also has its own optimum within or near this band.", { a: "middle", s: 12 }));
    return s;
  };

  CE.figs.pourthru = function () {
    var s = svg(640, 270, "PourThru: distilled water poured on a drained pot, leachate collected in a saucer");
    s.appendChild(P("M250 120 L262 200 L378 200 L390 120 Z", { c: INK, w: 3, f: "color-mix(in srgb, var(--warn) 22%, transparent)" }));
    s.appendChild(L(320, 120, 320, 70, OK, 4)); s.appendChild(P("M320 90 q-30 -14 -40 6 q22 14 40 -6", { c: OK, w: 2, f: "color-mix(in srgb, var(--ok) 35%, transparent)" })); s.appendChild(P("M320 78 q30 -14 40 6 q-22 14 -40 -6", { c: OK, w: 2, f: "color-mix(in srgb, var(--ok) 35%, transparent)" }));
    s.appendChild(P("M232 214 L408 214 L396 232 L244 232 Z", { c: INK, w: 3, f: "color-mix(in srgb, var(--accent) 22%, transparent)" }));
    s.appendChild(L(320, 200, 320, 212, ACC, 3));
    s.appendChild(P("M70 40 L110 40 L106 86 L74 86 Z", { c: INK, w: 2, f: PANEL }));
    s.appendChild(arrow(120, 64, 232, 112, ACC));
    s.appendChild(T(90, 26, "Distilled water", { a: "middle", s: 12, c: INK, w: 600 })); s.appendChild(T(90, 104, "about 100 mL for a 6.5-inch pot", { a: "middle", s: 11 }));
    s.appendChild(T(420, 150, "1  Irrigate as usual", { s: 12, c: INK })); s.appendChild(T(420, 168, "2  Drain 30 to 60 minutes", { s: 12, c: INK })); s.appendChild(T(420, 186, "3  Saucer underneath", { s: 12, c: INK }));
    s.appendChild(T(420, 204, "4  Pour water on the surface", { s: 12, c: INK })); s.appendChild(T(420, 222, "5  Measure the leachate", { s: 12, c: ACC, w: 700 }));
    s.appendChild(T(320, 256, "aim for about 50 mL of leachate", { a: "middle", s: 12, c: ACC, w: 600 }));
    return s;
  };

  CE.figs.trend = function () {
    var s = svg(640, 270, "Illustrative weekly pH average rising above the 5.4 to 6.2 band");
    var x0 = 56, x1 = 610, y0 = 20, y1 = 218, lo = 5.2, hi = 6.8;
    function X(w) { return x0 + (x1 - x0) * (w - 1) / 7; }
    function Y(v) { return y1 - (y1 - y0) * (v - lo) / (hi - lo); }
    s.appendChild(R(x0, Y(6.2), x1 - x0, Y(5.4) - Y(6.2), { f: "color-mix(in srgb, var(--ok) 16%, transparent)", c: "none", w: 0 }));
    [5.4, 6.2].forEach(function (v) { s.appendChild(L(x0, Y(v), x1, Y(v), OK, 1.5, "5 4")); s.appendChild(T(x0 - 6, Y(v) + 4, v.toFixed(1), { a: "end", s: 11 })); });
    s.appendChild(L(x0, y0, x0, y1, MUTED, 1.5)); s.appendChild(L(x0, y1, x1, y1, MUTED, 1.5));
    var data = [5.7, 5.8, 5.9, 6.0, 6.1, 6.3, 6.4, 6.5], d = "";
    data.forEach(function (v, i) { d += (i ? "L" : "M") + X(i + 1) + " " + Y(v) + " "; });
    s.appendChild(P(d, { c: ACC, w: 2.5 }));
    data.forEach(function (v, i) { s.appendChild(C(X(i + 1), Y(v), 4.5, { f: v > 6.2 ? BAD : ACC, c: v > 6.2 ? BAD : ACC })); s.appendChild(T(X(i + 1), y1 + 18, "wk " + (i + 1), { a: "middle", s: 11 })); });
    s.appendChild(T(X(5.6), Y(6.62), "above the band: act", { a: "middle", s: 12, c: BAD, w: 700 }));
    s.appendChild(T(X(3), Y(5.9) + 24, "inside the band", { a: "middle", s: 12, c: OK, w: 600 }));
    s.appendChild(T(x1, 258, "Illustrative values, not measured data", { a: "end", s: 11 }));
    return s;
  };

  /* Module 5 */
  CE.figs.heatbal = function () {
    var s = svg(640, 290, "A greenhouse with heat gains arriving on the left and heat losses leaving on the right");
    s.appendChild(P("M200 230 L200 130 L320 70 L440 130 L440 230 Z", { c: INK, w: 3, f: PANEL }));
    s.appendChild(L(160, 230, 480, 230, MUTED, 3));
    s.appendChild(arrow(70, 60, 190, 110, BAD)); s.appendChild(T(70, 44, "Sunlight (main gain)", { s: 12, c: BAD, w: 700 }));
    s.appendChild(arrow(80, 190, 190, 190, BAD)); s.appendChild(T(40, 178, "Heater", { s: 12, c: BAD, w: 700 }));
    s.appendChild(T(40, 214, "Plants cool by", { s: 11 })); s.appendChild(T(40, 228, "transpiring", { s: 11 }));
    s.appendChild(arrow(450, 120, 560, 80, ACC)); s.appendChild(T(568, 76, "Conduction", { s: 12, c: ACC, w: 700 })); s.appendChild(T(568, 91, "through glazing", { s: 11 }));
    s.appendChild(arrow(450, 175, 560, 175, ACC)); s.appendChild(T(568, 172, "Convection", { s: 12, c: ACC, w: 700 })); s.appendChild(T(568, 187, "through gaps, vents", { s: 11 }));
    s.appendChild(arrow(320, 70, 320, 20, ACC)); s.appendChild(T(330, 32, "Radiation to the night sky", { s: 12, c: ACC, w: 700 }));
    s.appendChild(T(320, 160, "Temperature is the", { a: "middle", s: 13, c: INK, w: 600 })); s.appendChild(T(320, 178, "balance of these", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(T(320, 272, "Cut losses first: curtains, double layers, sealed gaps, thermal mass", { a: "middle", s: 12 }));
    return s;
  };

  CE.figs.ladder = function () {
    var s = svg(640, 330, "A cooling ladder from canopy and natural ventilation up to shade");
    var rungs = [
      ["1", "Healthy canopy", "Transpiration cools the house", OK],
      ["2", "Natural ventilation", "Roof and side vents together; weak in calm air", OK],
      ["3", "Forced ventilation", "Exhaust fans; cannot beat the outside temperature", ACC],
      ["4", "Evaporative cooling", "Pads or fog; strong in dry air, adds humidity", WARN],
      ["5", "Shade", "Last resort; it cuts the light crops need", BAD]
    ];
    rungs.forEach(function (r, i) {
      var y = 270 - i * 56, w = 300 + i * 52;
      s.appendChild(R(40, y, w, 46, { f: "color-mix(in srgb, " + r[3] + " 14%, transparent)", c: r[3], w: 2, r: 6 }));
      s.appendChild(T(58, y + 29, r[0], { s: 20, c: r[3], w: 700 }));
      s.appendChild(T(88, y + 20, r[1], { s: 14, c: INK, w: 700 }));
      s.appendChild(T(88, y + 37, r[2], { s: 11.5 }));
    });
    s.appendChild(arrow(560, 300, 560, 40, MUTED)); s.appendChild(T(572, 170, "climb only if", { s: 11 })); s.appendChild(T(572, 184, "the rung below", { s: 11 })); s.appendChild(T(572, 198, "is not enough", { s: 11 }));
    return s;
  };

  CE.figs.stratify = function () {
    var s = svg(640, 270, "Two cross-sections: without circulation fans warm air sits at the top; with a fan the temperature is even");
    [[40, "Without a fan"], [350, "With a fan"]].forEach(function (c, k) {
      var x = c[0];
      s.appendChild(P("M" + x + " 220 L" + x + " 110 L" + (x + 125) + " 50 L" + (x + 250) + " 110 L" + (x + 250) + " 220 Z", { c: INK, w: 3, f: PANEL }));
      s.appendChild(T(x + 125, 250, c[1], { a: "middle", s: 13, c: INK, w: 700 }));
      if (k === 0) {
        s.appendChild(R(x + 10, 112, 230, 40, { f: "color-mix(in srgb, var(--bad) 28%, transparent)", c: "none", w: 0 })); s.appendChild(T(x + 125, 138, "warm", { a: "middle", s: 12, c: BAD, w: 700 }));
        s.appendChild(R(x + 10, 152, 230, 34, { f: "color-mix(in srgb, var(--warn) 20%, transparent)", c: "none", w: 0 }));
        s.appendChild(R(x + 10, 186, 230, 32, { f: "color-mix(in srgb, var(--accent) 28%, transparent)", c: "none", w: 0 })); s.appendChild(T(x + 125, 208, "cool air around the plants", { a: "middle", s: 12, c: ACC, w: 700 }));
      } else {
        s.appendChild(R(x + 10, 112, 230, 106, { f: "color-mix(in srgb, var(--ok) 20%, transparent)", c: "none", w: 0 })); s.appendChild(T(x + 125, 172, "even temperature", { a: "middle", s: 12, c: OK, w: 700 }));
        s.appendChild(C(x + 215, 190, 11, { f: PANEL, c: INK, w: 2 })); s.appendChild(L(x + 215, 179, x + 215, 201, INK, 2)); s.appendChild(L(x + 204, 190, x + 226, 190, INK, 2));
        s.appendChild(P("M" + (x + 205) + " 182 Q" + (x + 120) + " 110 " + (x + 30) + " 150 Q" + (x + 40) + " 200 " + (x + 120) + " 205 Q" + (x + 170) + " 208 " + (x + 200) + " 198", { c: MUTED, w: 1.5, d: "4 4" }));
      }
    });
    return s;
  };

  CE.figs.stages = function () {
    var s = svg(640, 300, "A staged control plan with temperature rising from vents closed to an alarm");
    var rows = [["Alarm", "notify you", BAD, 28], ["Stage 3", "shade or evaporative cooling", WARN, 82], ["Stage 2", "exhaust fan on", ACC, 136], ["Stage 1", "vents open", OK, 190], ["Stage 0", "vents closed, circulation fans on", MUTED, 244]];
    rows.forEach(function (r) {
      s.appendChild(R(90, r[3], 450, 40, { f: "color-mix(in srgb, " + r[2] + " 14%, transparent)", c: r[2], w: 2, r: 6 }));
      s.appendChild(T(106, r[3] + 25, r[0], { s: 14, c: r[2], w: 700 })); s.appendChild(T(190, r[3] + 25, r[1], { s: 13, c: INK }));
    });
    s.appendChild(arrow(50, 280, 50, 20, MUTED)); s.appendChild(T(50, 296, "hotter", { a: "middle", s: 11 }));
    s.appendChild(T(570, 262, "temperature", { s: 11 })); s.appendChild(T(570, 276, "rises up the", { s: 11 })); s.appendChild(T(570, 290, "ladder", { s: 11 }));
    return s;
  };

  /* Module 6 */
  CE.figs.tactics = function () {
    var s = svg(640, 330, "Monitoring at the centre with four control tactics around it: cultural, biological, physical or mechanical, and chemical");
    var cx = 320, cy = 165;
    var boxes = [
      [20, 20, "Cultural", "light, water, temperature, feeding, spacing, sanitation", OK],
      [340, 20, "Biological", "predators and parasitoids; inoculation or inundation", ACC],
      [20, 236, "Physical or mechanical", "screens, sticky cards, removing plants, isolation", WARN],
      [340, 236, "Chemical", "only when warranted; least harmful product first", BAD]
    ];
    boxes.forEach(function (b) {
      s.appendChild(R(b[0], b[1], 280, 74, { f: "color-mix(in srgb, " + b[4] + " 12%, transparent)", c: b[4], w: 2, r: 8 }));
      s.appendChild(T(b[0] + 14, b[1] + 28, b[2], { s: 15, c: INK, w: 700 }));
      s.appendChild(T(b[0] + 14, b[1] + 50, b[3], { s: 11.5 }));
      s.appendChild(L(b[0] + 140, b[1] + (b[1] < 100 ? 74 : 0), cx, cy + (b[1] < 100 ? -34 : 34), b[4], 1.5, "4 4"));
    });
    s.appendChild(C(cx, cy, 58, { f: PANEL, c: INK, w: 3 }));
    s.appendChild(T(cx, cy - 2, "Monitoring", { a: "middle", s: 15, c: INK, w: 700 })); s.appendChild(T(cx, cy + 16, "weekly", { a: "middle", s: 12 }));
    return s;
  };

  CE.figs.scout = function () {
    var s = svg(640, 300, "Plan view of a small greenhouse with sticky card positions and an M-shaped scouting route");
    s.appendChild(R(70, 30, 500, 220, { f: PANEL, c: INK, w: 3 }));
    s.appendChild(R(70, 100, 500, 12, { f: "none", c: MUTED, w: 0 }));
    [[110, 60, 440, 54], [110, 190, 440, 54]].forEach(function (b) { s.appendChild(R(b[0], b[1], b[2], b[3], { f: "color-mix(in srgb, var(--ok) 12%, transparent)", c: OK, w: 1.5, r: 4 })); });
    s.appendChild(T(330, 92, "Bench 1", { a: "middle", s: 12, c: OK, w: 600 })); s.appendChild(T(330, 222, "Bench 2", { a: "middle", s: 12, c: OK, w: 600 }));
    s.appendChild(R(70, 205, 6, 40, { f: ACC, c: ACC, w: 0 })); s.appendChild(T(60, 235, "Door", { a: "end", s: 11, c: ACC, w: 600 }));
    s.appendChild(R(520, 30, 50, 6, { f: WARN, c: WARN, w: 0 })); s.appendChild(T(545, 24, "Vent", { a: "middle", s: 11, c: WARN, w: 600 }));
    [[96, 190], [310, 150], [520, 58]].forEach(function (p, i) { s.appendChild(R(p[0] - 9, p[1] - 9, 18, 18, { f: "#e9c31a", c: INK, w: 1.5 })); s.appendChild(T(p[0] + 14, p[1] + 4, "card " + (i + 1), { s: 11, c: INK })); });
    s.appendChild(P("M120 232 L190 70 L260 232 L330 70 L400 232 L470 70 L540 232", { c: ACC, w: 2.5, d: "7 5" }));
    s.appendChild(T(330, 276, "M-shaped route: check bench ends and middles, where air moves least", { a: "middle", s: 12, c: ACC, w: 600 }));
    return s;
  };

  /* Module 7 */
  CE.figs.loop = function () {
    var s = svg(640, 300, "A yearly loop: plan, do, check, act");
    var nodes = [[320, 44, "Plan", "frost dates, calendar, triggers", ACC], [530, 150, "Do", "sow, grow, control, log", OK], [320, 256, "Check", "logs against the plan", WARN], [110, 150, "Act", "two changes for next year", BAD]];
    nodes.forEach(function (n) {
      s.appendChild(R(n[0] - 100, n[1] - 30, 200, 60, { f: "color-mix(in srgb, " + n[4] + " 14%, transparent)", c: n[4], w: 2, r: 10 }));
      s.appendChild(T(n[0], n[1] - 4, n[2], { a: "middle", s: 17, c: INK, w: 700 })); s.appendChild(T(n[0], n[1] + 16, n[3], { a: "middle", s: 11.5 }));
    });
    s.appendChild(arrow(420, 58, 500, 118, MUTED)); s.appendChild(arrow(500, 182, 420, 242, MUTED)); s.appendChild(arrow(220, 242, 140, 182, MUTED)); s.appendChild(arrow(140, 118, 220, 58, MUTED));
    return s;
  };

  CE.figs.vent = function () {
    var s = svg(640, 330, "Cross-section of a greenhouse with a ridge vent, side inlets and a circulation fan");
    s.appendChild(L(60, 290, 580, 290, MUTED, 3));
    s.appendChild(P("M110 290 L110 170 L320 70 L530 170 L530 290", { c: INK, w: 3, f: PANEL }));
    s.appendChild(R(300, 56, 40, 14, { f: BAD, c: BAD, w: 1 })); s.lastChild.setAttribute("transform", "rotate(-14 320 63)");
    s.appendChild(T(320, 42, "Ridge vent (outlet)", { a: "middle", s: 12, c: INK, w: 600 }));
    s.appendChild(R(98, 226, 12, 40, { f: ACC, c: ACC, w: 1 })); s.appendChild(R(530, 226, 12, 40, { f: ACC, c: ACC, w: 1 }));
    s.appendChild(T(86, 220, "Side inlet", { a: "end", s: 12, c: ACC, w: 600 })); s.appendChild(T(556, 220, "Side inlet", { s: 12, c: ACC, w: 600 }));
    s.appendChild(arrow(40, 252, 100, 252, ACC)); s.appendChild(arrow(600, 252, 540, 252, ACC));
    s.appendChild(P("M130 250 Q190 190 270 120", { c: ACC, w: 2.5, d: "7 5" })); s.appendChild(P("M510 250 Q450 190 370 120", { c: ACC, w: 2.5, d: "7 5" }));
    s.appendChild(arrow(320, 130, 320, 74, WARN));
    s.appendChild(T(332, 112, "Warm air rises", { s: 12, c: WARN, w: 600 }));
    s.appendChild(T(40, 276, "Cool air in", { s: 11 })); s.appendChild(T(600, 276, "Cool air in", { a: "end", s: 11 }));
    s.appendChild(C(420, 234, 16, { f: PANEL, c: INK, w: 2 })); s.appendChild(L(420, 218, 420, 250, INK, 2)); s.appendChild(L(404, 234, 436, 234, INK, 2));
    s.appendChild(T(420, 276, "Circulation fan", { a: "middle", s: 11, c: INK }));
    s.appendChild(P("M390 190 Q330 160 250 190 Q220 215 250 250 Q330 270 392 244", { c: MUTED, w: 1.5, d: "4 4" }));
    s.appendChild(T(250, 176, "winter air mixing", { a: "middle", s: 11 }));
    return s;
  };
})();
