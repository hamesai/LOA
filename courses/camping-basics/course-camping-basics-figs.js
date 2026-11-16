/* Diagrams for Camping fundamentals (UK and Ireland). Ids are prefixed with the course id. */
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
  /* a rounded box with centred, multi-line text */
  function box(s, x, y, w, h, lines, o) {
    o = o || {};
    s.appendChild(R(x, y, w, h, { f: o.f || PANEL, c: o.c || INK, w: o.w || 2, r: 8 }));
    var n = lines.length, lh = o.s ? o.s + 4 : 17, y0 = y + h / 2 - (n - 1) * lh / 2 + 4;
    lines.forEach(function (ln, i) { s.appendChild(T(x + w / 2, y0 + i * lh, ln, { a: "middle", s: o.s || 13, c: o.tc || INK, w: i === 0 && o.bold ? 700 : 500 })); });
  }

  /* Module 1 */
  CE.figs["camping-basics-access"] = function () {
    var s = svg(680, 300, "Decision path: can I camp here?");
    var xs = [20, 250, 480], q = [["Is there a rule", "for this exact place?", "(park map, byelaw, site)"], ["Does it allow your", "tent, group size and", "number of nights?"], ["Do you have the", "owner's or manager's", "OK in writing or by word?"]];
    xs.forEach(function (x, i) {
      box(s, x, 40, 180, 90, q[i], { s: 13 });
      s.appendChild(T(x + 90, 32, "Question " + (i + 1), { a: "middle", s: 12, c: ACC, w: 700 }));
      if (i < 2) s.appendChild(arrow(x + 182, 85, x + 228, 85, OK));
      s.appendChild(arrow(x + 90, 132, x + 90, 200, BAD));
      s.appendChild(T(x + 98, 170, "No or unknown", { s: 12, c: BAD, w: 600 }));
    });
    s.appendChild(arrow(662, 85, 662, 205, OK));
    s.appendChild(T(672, 150, "Yes", { a: "end", s: 12, c: OK, w: 700 }));
    box(s, 20, 200, 560, 60, ["Choose a booked campsite, or ask first", "Never assume. A missing sign is not permission."], { c: BAD, f: PANEL });
    box(s, 590, 205, 80, 55, ["Camp,", "Leave", "No Trace"], { c: OK, s: 12 });
    return s;
  };
  CE.figs["camping-basics-ladder"] = function () {
    var s = svg(640, 280, "Three steps from serviced campsite to wild pitch");
    var steps = [["1  Serviced campsite", "toilets, water, rules posted", 20, 140], ["2  Small or farm campsite", "quieter, basic facilities", 220, 100], ["3  Permitted wild pitch", "small tent, where rules allow", 420, 60]];
    steps.forEach(function (st, i) {
      s.appendChild(R(st[2], st[3], 190, 220 - st[3] + 20, { f: PANEL, c: i === 0 ? OK : i === 1 ? ACC : WARN, w: 2.5, r: 6 }));
      s.appendChild(T(st[2] + 95, st[3] + 28, st[0], { a: "middle", s: 14, c: INK, w: 700 }));
      s.appendChild(T(st[2] + 95, st[3] + 50, st[1], { a: "middle", s: 12 }));
    });
    s.appendChild(T(320, 268, "Add skill and kit before moving up a step", { a: "middle", s: 12, c: INK, w: 600 }));
    return s;
  };

  /* Module 2 */
  CE.figs["camping-basics-floor"] = function () {
    var s = svg(640, 300, "Bar chart of tent floor area needed by group, in square metres");
    var d = [["2 people", 2.9], ["2, restless", 3.95], ["2 + child or dog", 4.65], ["4 people", 5.4], ["4, lots of gear", 7.6], ["4 + dog + friends", 12.55]], x0 = 150, w = 440, mx = 14, y = 20;
    d.forEach(function (r, i) {
      var yy = y + i * 42;
      s.appendChild(T(x0 - 10, yy + 20, r[0], { a: "end", s: 13, c: INK }));
      s.appendChild(R(x0, yy, w * r[1] / mx, 28, { f: ACC, c: ACC, w: 1, r: 3 }));
      s.appendChild(T(x0 + w * r[1] / mx + 8, yy + 20, r[1].toFixed(1) + " m²", { s: 13, c: INK, w: 600 }));
    });
    s.appendChild(L(x0, y - 4, x0, y + 6 * 42 - 8, MUTED, 1.5));
    s.appendChild(T(320, 292, "Midpoint of each REI range, converted by us from square feet", { a: "middle", s: 11 }));
    return s;
  };
  CE.figs["camping-basics-pitch"] = function () {
    var s = svg(640, 320, "Top view of a pitch: trees upwind, strong side to the wind, door downwind, distance from water");
    s.appendChild(arrow(40, 150, 120, 150, INK)); s.appendChild(T(40, 135, "Wind", { s: 13, c: INK, w: 700 }));
    [[160, 80], [160, 140], [160, 200], [180, 260]].forEach(function (p) { s.appendChild(C(p[0], p[1], 20, { f: PANEL, c: OK, w: 2 })); });
    s.appendChild(T(160, 300, "windbreak trees", { a: "middle", s: 12 }));
    s.appendChild(R(300, 110, 150, 100, { f: PANEL, c: INK, w: 2.5, r: 6 }));
    s.appendChild(L(300, 110, 300, 210, ACC, 6));
    s.appendChild(T(375, 150, "Tent", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(T(375, 172, "strong pole side", { a: "middle", s: 12, c: ACC, w: 600 }));
    s.appendChild(T(375, 188, "faces the wind", { a: "middle", s: 12, c: ACC, w: 600 }));
    s.appendChild(R(442, 140, 8, 40, { f: WARN, c: WARN, w: 1 })); s.appendChild(T(462, 164, "door", { s: 12, c: INK, w: 600 }));
    s.appendChild(P("M520 20 Q600 90 560 180 Q540 250 610 310", { c: "#3b7bbf", w: 14 }));
    s.appendChild(T(570, 60, "stream", { a: "middle", s: 12, c: "#3b7bbf", w: 600, halo: true }));
    s.appendChild(L(340, 262, 520, 262, INK, 1.5, "4 4")); s.appendChild(T(430, 254, "keep clear of water", { a: "middle", s: 12, c: INK, w: 600, halo: true }));
    s.appendChild(T(430, 282, "REI: at least 200 ft (about 61 m)", { a: "middle", s: 11, halo: true }));
    return s;
  };
  CE.figs["camping-basics-guy"] = function () {
    var s = svg(640, 300, "Top view of a tent with guylines from guy-out points to stakes");
    s.appendChild(R(250, 100, 140, 100, { f: PANEL, c: INK, w: 2.5, r: 6 }));
    s.appendChild(T(320, 154, "Tent", { a: "middle", s: 14, c: INK, w: 700 }));
    var pts = [[250, 130, 110, 60], [250, 170, 110, 240], [390, 130, 530, 60], [390, 170, 530, 240], [320, 100, 320, 30], [320, 200, 320, 270]];
    pts.forEach(function (p) {
      s.appendChild(L(p[0], p[1], p[2], p[3], ACC, 2.5)); s.appendChild(C(p[0], p[1], 5, { f: ACC, c: ACC, w: 1 }));
      s.appendChild(S("polygon", { points: (p[2] - 6) + "," + (p[3] + 6) + " " + (p[2] + 6) + "," + (p[3] + 6) + " " + p[2] + "," + (p[3] - 8), style: "fill:" + INK }));
    });
    s.appendChild(T(320, 20, "Run lines away from the tent, over each pole's guy-out point", { a: "middle", s: 12, c: INK, w: 600 }));
    s.appendChild(T(320, 292, "Stakes sit well clear of the tent. At least rig the windward side.", { a: "middle", s: 12 }));
    return s;
  };
  CE.figs["camping-basics-cond"] = function () {
    var s = svg(680, 320, "Cross-section of a tent showing moisture sources and ventilation");
    s.appendChild(P("M140 240 L140 150 Q340 40 540 150 L540 240 Z", { f: PANEL, c: INK, w: 3 }));
    s.appendChild(P("M110 240 L110 150 Q340 10 570 150 L570 240", { c: ACC, w: 2.5, d: "7 5" }));
    s.appendChild(T(340, 36, "Fly (cold)", { a: "middle", s: 13, c: ACC, w: 700 }));
    s.appendChild(T(340, 120, "Warm, humid air rises", { a: "middle", s: 13, c: INK, w: 600 }));
    [260, 340, 420].forEach(function (x) { s.appendChild(arrow(x, 200, x, 138, WARN)); });
    [[250, 70], [340, 60], [430, 70]].forEach(function (p) { s.appendChild(C(p[0], p[1] + 30, 4, { f: "#3b7bbf", c: "#3b7bbf", w: 1 })); });
    s.appendChild(T(340, 224, "breath · wet kit · damp air", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(arrow(20, 190, 100, 190, OK)); s.appendChild(T(20, 175, "Dry air in", { s: 12, c: OK, w: 700 }));
    s.appendChild(arrow(580, 120, 660, 120, OK)); s.appendChild(T(660, 106, "Humid air out", { a: "end", s: 12, c: OK, w: 700 }));
    s.appendChild(L(60, 240, 620, 240, INK, 2));
    s.appendChild(T(340, 280, "Three moisture sources: humidity, breath, wet items", { a: "middle", s: 13, c: INK, w: 700 }));
    s.appendChild(T(340, 302, "Fix: pitch well, keep wet items out, ventilate", { a: "middle", s: 13 }));
    return s;
  };

  /* Module 3 */
  CE.figs["camping-basics-bagscale"] = function () {
    var s = svg(660, 230, "Temperature scale for an illustrative bag with comfort 7 C and lower limit 2 C and a 4 C night");
    var x0 = 40, x1 = 620, lo = -4, hi = 14;
    function X(t) { return x0 + (x1 - x0) * (t - lo) / (hi - lo); }
    s.appendChild(R(X(lo), 70, X(2) - X(lo), 40, { f: BAD, c: BAD, w: 1 })); s.appendChild(R(X(2), 70, X(7) - X(2), 40, { f: WARN, c: WARN, w: 1 })); s.appendChild(R(X(7), 70, X(hi) - X(7), 40, { f: OK, c: OK, w: 1 }));
    s.appendChild(T((X(lo) + X(2)) / 2, 95, "Too cold", { a: "middle", s: 13, c: "#fff", w: 700 }));
    s.appendChild(T((X(2) + X(7)) / 2, 95, "Warm sleepers only", { a: "middle", s: 13, c: "#000", w: 700 }));
    s.appendChild(T((X(7) + X(hi)) / 2, 95, "Comfortable", { a: "middle", s: 13, c: "#000", w: 700 }));
    for (var t = lo; t <= hi; t += 2) { s.appendChild(L(X(t), 110, X(t), 116, MUTED, 1)); s.appendChild(T(X(t), 132, t + "°C", { a: "middle", s: 11 })); }
    s.appendChild(L(X(2), 60, X(2), 118, INK, 2)); s.appendChild(T(X(2), 52, "Lower limit 2", { a: "middle", s: 12, c: INK, w: 700 }));
    s.appendChild(L(X(7), 60, X(7), 118, INK, 2)); s.appendChild(T(X(7), 52, "Comfort 7", { a: "middle", s: 12, c: INK, w: 700 }));
    s.appendChild(arrow(X(4), 190, X(4), 142, INK)); s.appendChild(T(X(4), 208, "Forecast low 4 °C", { a: "middle", s: 13, c: INK, w: 700 }));
    s.appendChild(T(330, 24, "Illustrative numbers, not a real bag", { a: "middle", s: 12 }));
    return s;
  };
  CE.figs["camping-basics-rvalue"] = function () {
    var s = svg(660, 280, "R-value bands and an example of stacking an air pad and a foam pad");
    var x0 = 40, x1 = 620, mx = 7;
    function X(v) { return x0 + (x1 - x0) * v / mx; }
    var bands = [[0, 2, "Warm weather", OK], [2, 4, "Cool", ACC], [4, 5.5, "Cold", WARN], [5.5, 7, "Extreme cold", BAD]];
    bands.forEach(function (b) { s.appendChild(R(X(b[0]), 40, X(b[1]) - X(b[0]), 40, { f: b[3], c: b[3], w: 1 })); s.appendChild(T((X(b[0]) + X(b[1])) / 2, 65, b[2], { a: "middle", s: 12, c: "#000", w: 700 })); });
    for (var v = 0; v <= 7; v++) { s.appendChild(L(X(v), 80, X(v), 86, MUTED, 1)); s.appendChild(T(X(v), 100, String(v), { a: "middle", s: 12 })); }
    s.appendChild(T(330, 28, "R-value band (REI guidance)", { a: "middle", s: 12, c: INK, w: 700 }));
    s.appendChild(R(X(0), 150, X(2.5) - X(0), 30, { f: ACC, c: ACC, w: 1 })); s.appendChild(T((X(0) + X(2.5)) / 2, 170, "Air pad R 2.5", { a: "middle", s: 12, c: "#000", w: 700 }));
    s.appendChild(R(X(2.5), 150, X(4.5) - X(2.5), 30, { f: WARN, c: WARN, w: 1 })); s.appendChild(T((X(2.5) + X(4.5)) / 2, 170, "Foam R 2.0", { a: "middle", s: 12, c: "#000", w: 700 }));
    s.appendChild(L(X(4.5), 144, X(4.5), 190, INK, 2)); s.appendChild(T(X(4.5), 210, "Total R 4.5", { a: "middle", s: 13, c: INK, w: 700 }));
    s.appendChild(L(X(4), 120, X(4), 190, MUTED, 1.5, "4 4")); s.appendChild(T(X(4) - 6, 134, "R 4 assumed by bag tests", { a: "end", s: 11 }));
    s.appendChild(T(330, 256, "Illustrative R-values. R-values add when pads are stacked.", { a: "middle", s: 12 }));
    return s;
  };
  CE.figs["camping-basics-heat"] = function () {
    var s = svg(660, 320, "Four ways a camper loses heat: wind, height, cold ground and wet");
    s.appendChild(C(330, 150, 34, { f: PANEL, c: INK, w: 2.5 })); s.appendChild(T(330, 155, "You", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(arrow(330, 58, 330, 112, BAD)); s.appendChild(T(330, 28, "Wind", { a: "middle", s: 14, c: INK, w: 700 })); s.appendChild(T(330, 46, "strips the warm layer", { a: "middle", s: 12 }));
    s.appendChild(arrow(330, 262, 330, 188, BAD)); s.appendChild(T(330, 284, "Cold ground", { a: "middle", s: 14, c: INK, w: 700 })); s.appendChild(T(330, 302, "fix: pad with higher R-value", { a: "middle", s: 12 }));
    s.appendChild(arrow(110, 150, 292, 150, BAD)); s.appendChild(T(110, 130, "Wet", { s: 14, c: INK, w: 700 })); s.appendChild(T(110, 176, "clothes, bag, ground", { s: 12 }));
    s.appendChild(arrow(550, 150, 368, 150, BAD)); s.appendChild(T(550, 130, "Height", { a: "end", s: 14, c: INK, w: 700 })); s.appendChild(T(550, 176, "about 2 °C cooler per 300 m", { a: "end", s: 12 }));
    return s;
  };

  /* Module 4 */
  CE.figs["camping-basics-flame"] = function () {
    var s = svg(640, 280, "Two stove flames: healthy blue flame and a warning orange flame");
    function flame(cx, base, tip, label, note, ok) {
      s.appendChild(R(cx - 40, 210, 80, 18, { f: PANEL, c: INK, w: 2, r: 3 }));
      s.appendChild(P("M" + (cx - 24) + " 210 Q" + (cx - 34) + " 150 " + cx + " 70 Q" + (cx + 34) + " 150 " + (cx + 24) + " 210 Z", { f: base, c: base, w: 1 }));
      if (tip) s.appendChild(P("M" + (cx - 10) + " 100 Q" + cx + " 70 " + (cx + 10) + " 100 Q" + cx + " 110 " + (cx - 10) + " 100 Z", { f: tip, c: tip, w: 1 }));
      s.appendChild(T(cx, 250, label, { a: "middle", s: 14, c: ok ? OK : BAD, w: 700 }));
      s.appendChild(T(cx, 270, note, { a: "middle", s: 12 }));
    }
    flame(170, "#3b7bbf", "#e8872a", "Healthy", "blue base, slight orange tip", true);
    flame(470, "#e8872a", null, "Warning", "mostly orange: stop and check", false);
    s.appendChild(T(320, 30, "Check the colour once the stove is lit", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["camping-basics-co"] = function () {
    var s = svg(660, 290, "A closed tent with a stove, barbecue and gas cloud building inside");
    s.appendChild(P("M80 250 L80 140 Q330 10 580 140 L580 250 Z", { f: PANEL, c: INK, w: 3 }));
    s.appendChild(R(250, 218, 70, 32, { f: PANEL, c: BAD, w: 2.5, r: 4 })); s.appendChild(T(285, 238, "stove", { a: "middle", s: 12, c: BAD, w: 700 }));
    s.appendChild(R(360, 218, 80, 32, { f: PANEL, c: BAD, w: 2.5, r: 4 })); s.appendChild(T(400, 238, "BBQ", { a: "middle", s: 12, c: BAD, w: 700 }));
    [[200, 140], [300, 120], [400, 140], [480, 170], [250, 180], [350, 170]].forEach(function (p) { s.appendChild(C(p[0], p[1], 14, { f: "none", c: MUTED, w: 2 })); });
    s.appendChild(T(330, 36, "CO builds up: colourless, odourless, tasteless", { a: "middle", s: 13, c: INK, w: 700 }));
    s.appendChild(T(330, 272, "Never use a stove, barbecue or heater inside to cook or warm up", { a: "middle", s: 13, c: BAD, w: 700 }));
    return s;
  };
  CE.figs["camping-basics-water"] = function () {
    var s = svg(680, 300, "Flowchart for making water safe");
    box(s, 20, 20, 150, 60, ["Water source", "(stream, tap)"], { s: 13 });
    s.appendChild(arrow(172, 50, 220, 50, INK));
    box(s, 222, 20, 170, 60, ["Treated tap water?", "Check the site"], { s: 13 });
    s.appendChild(arrow(392, 50, 450, 50, OK)); s.appendChild(T(420, 40, "Yes", { a: "middle", s: 12, c: OK, w: 700 }));
    box(s, 452, 20, 200, 60, ["Safe to drink"], { c: OK, s: 14 });
    s.appendChild(arrow(307, 82, 307, 130, BAD)); s.appendChild(T(317, 110, "No or unsure", { s: 12, c: BAD, w: 700 }));
    box(s, 20, 132, 300, 70, ["Best: boil", "rolling boil 1 minute", "(3 min above 6,500 ft)"], { c: OK, s: 13 });
    box(s, 350, 132, 300, 70, ["Next: filter, then disinfect", "filter removes parasites;", "chemicals kill viruses and bacteria"], { c: ACC, s: 12 });
    s.appendChild(T(340, 240, "Chemical contamination cannot be fixed by boiling or tablets", { a: "middle", s: 13, c: BAD, w: 700 }));
    s.appendChild(T(340, 262, "Source: CDC. Follow product instructions.", { a: "middle", s: 12 }));
    return s;
  };
  CE.figs["camping-basics-food"] = function () {
    var s = svg(640, 300, "A cool box with frozen items at the bottom and separate containers for raw and ready-to-eat food");
    s.appendChild(R(150, 60, 340, 190, { f: PANEL, c: INK, w: 3, r: 10 }));
    s.appendChild(T(320, 48, "Cool box: keep below 5 °C", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(R(165, 200, 310, 38, { f: "#9cc6ea", c: "#3b7bbf", w: 2, r: 4 })); s.appendChild(T(320, 224, "Frozen food and ice packs", { a: "middle", s: 13, c: "#000", w: 700 }));
    s.appendChild(R(165, 80, 145, 100, { f: PANEL, c: BAD, w: 2.5, r: 6 })); s.appendChild(T(237, 124, "RAW", { a: "middle", s: 14, c: BAD, w: 700 })); s.appendChild(T(237, 146, "sealed box", { a: "middle", s: 12 }));
    s.appendChild(R(330, 80, 145, 100, { f: PANEL, c: OK, w: 2.5, r: 6 })); s.appendChild(T(402, 124, "READY TO EAT", { a: "middle", s: 13, c: OK, w: 700 })); s.appendChild(T(402, 146, "sealed box", { a: "middle", s: 12 }));
    s.appendChild(T(320, 278, "Cook meat steaming hot, no pink, clear juices. Wash hands 20 s.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };

  /* Module 5 */
  CE.figs["camping-basics-scale"] = function () {
    var s = svg(640, 280, "A 4 cm square on the page equals a 1 km square on the ground at 1:25,000");
    s.appendChild(R(70, 40, 160, 160, { f: PANEL, c: ACC, w: 3 }));
    s.appendChild(T(150, 125, "1 km", { a: "middle", s: 20, c: ACC, w: 700 }));
    s.appendChild(L(70, 218, 230, 218, INK, 2)); s.appendChild(T(150, 240, "4 cm on the map", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(L(52, 40, 52, 200, INK, 2)); s.appendChild(T(44, 125, "4 cm", { a: "end", s: 13, c: INK, w: 600 }));
    s.appendChild(T(290, 80, "1 cm on the map = 250 m", { s: 16, c: INK, w: 700 }));
    s.appendChild(T(290, 112, "1 km square = 4 cm × 4 cm", { s: 15 }));
    s.appendChild(T(290, 142, "About 20 minutes to walk across", { s: 15 }));
    s.appendChild(T(290, 164, "at a typical 3 km an hour", { s: 15 }));
    s.appendChild(T(290, 198, "Scale 1:25,000", { s: 14, c: ACC, w: 700 }));
    return s;
  };
  CE.figs["camping-basics-grid"] = function () {
    var s = svg(660, 330, "A grid square 62 33 and a zoomed 10 by 10 view with the point 625 333");
    var gx = 30, gy = 30, cs = 50;
    for (var i = 0; i <= 4; i++) { s.appendChild(L(gx + i * cs, gy, gx + i * cs, gy + 4 * cs, "#3b7bbf", 1.5)); s.appendChild(L(gx, gy + i * cs, gx + 4 * cs, gy + i * cs, "#3b7bbf", 1.5)); }
    [61, 62, 63, 64].forEach(function (n, k) { s.appendChild(T(gx + k * cs, gy + 4 * cs + 18, String(n), { a: "middle", s: 12 })); });
    [32, 33, 34, 35].forEach(function (n, k) { s.appendChild(T(gx - 8, gy + (3 - k) * cs + 4, String(n), { a: "end", s: 12 })); });
    s.appendChild(R(gx + 1 * cs, gy + 2 * cs, cs, cs, { f: "rgba(180,105,31,.18)", c: ACC, w: 2.5 }));
    s.appendChild(T(gx + 100, gy + 4 * cs + 40, "Square 62 33 (along, then up)", { a: "middle", s: 12, c: INK, w: 600 }));
    s.appendChild(arrow(gx + 1.5 * cs, gy + 2 * cs, 330, 60, ACC));
    var zx = 340, zy = 40, zs = 20;
    for (var j = 0; j <= 10; j++) { s.appendChild(L(zx + j * zs, zy, zx + j * zs, zy + 10 * zs, LINE, 1)); s.appendChild(L(zx, zy + j * zs, zx + 10 * zs, zy + j * zs, LINE, 1)); }
    s.appendChild(R(zx, zy, 10 * zs, 10 * zs, { c: ACC, w: 2.5 }));
    s.appendChild(C(zx + 5 * zs, zy + (10 - 3) * zs, 6, { f: BAD, c: BAD, w: 1 }));
    s.appendChild(L(zx + 5 * zs, zy + 10 * zs, zx + 5 * zs, zy + 7 * zs, BAD, 1.5, "3 3")); s.appendChild(L(zx, zy + 7 * zs, zx + 5 * zs, zy + 7 * zs, BAD, 1.5, "3 3"));
    s.appendChild(T(zx + 5 * zs, zy + 10 * zs + 18, "5 tenths across", { a: "middle", s: 12 })); s.appendChild(T(zx - 8, zy + 7 * zs + 4, "3 up", { a: "end", s: 12 }));
    s.appendChild(T(zx + 5 * zs + 12, zy + 7 * zs - 10, "625 333", { s: 14, c: BAD, w: 700, halo: true }));
    s.appendChild(T(zx + 100, 305, "Six-figure reference: 625 333", { a: "middle", s: 13, c: INK, w: 700 }));
    return s;
  };
  CE.figs["camping-basics-compass"] = function () {
    var s = svg(800, 320, "Baseplate compass: bezel, orienting arrow, needle and direction-of-travel arrow");
    s.appendChild(R(150, 20, 220, 280, { f: PANEL, c: INK, w: 2.5, r: 12 }));
    s.appendChild(C(260, 150, 90, { f: "none", c: INK, w: 3 }));
    for (var a = 0; a < 360; a += 30) { var r = a * Math.PI / 180; s.appendChild(L(260 + 84 * Math.sin(r), 150 - 84 * Math.cos(r), 260 + 90 * Math.sin(r), 150 - 90 * Math.cos(r), INK, 2)); }
    s.appendChild(T(260, 70, "N", { a: "middle", s: 16, c: INK, w: 700 })); s.appendChild(T(260, 240, "S", { a: "middle", s: 14 })); s.appendChild(T(344, 155, "E", { a: "middle", s: 14 })); s.appendChild(T(176, 155, "W", { a: "middle", s: 14 }));
    s.appendChild(arrow(260, 190, 260, 90, ACC)); s.appendChild(T(260, 214, "orienting arrow", { a: "middle", s: 11, c: ACC, w: 700 }));
    s.appendChild(P("M260 150 L254 110 L260 82 L266 110 Z", { f: BAD, c: BAD, w: 1 }));
    s.appendChild(P("M260 150 L254 186 L260 214 L266 186 Z", { f: "#bbb", c: "#999", w: 1 }));
    s.appendChild(arrow(260, 296, 260, 252, INK)); s.appendChild(T(260, 316, "direction of travel", { a: "middle", s: 11, c: INK, w: 700 }));
    s.appendChild(L(400, 70, 480, 70, INK, 1)); s.appendChild(T(490, 74, "Bezel: set from the map", { s: 13, c: INK, w: 600 }));
    s.appendChild(L(400, 130, 480, 130, BAD, 1)); s.appendChild(T(490, 134, "Red needle: points to magnetic north", { s: 13, c: BAD, w: 600 }));
    s.appendChild(L(400, 190, 480, 190, ACC, 1)); s.appendChild(T(490, 194, "Orienting arrow: turn until the", { s: 13, c: ACC, w: 600 })); s.appendChild(T(490, 212, "needle sits inside it", { s: 13, c: ACC, w: 600 }));
    s.appendChild(L(400, 270, 480, 270, INK, 1)); s.appendChild(T(490, 274, "Walk the direction-of-travel arrow", { s: 13, c: INK, w: 600 }));
    return s;
  };
  CE.figs["camping-basics-naismith"] = function () {
    var s = svg(640, 220, "Stacked bar showing 120 minutes for distance, 45 minutes for ascent and a rest allowance");
    var x0 = 40, x1 = 600, mx = 200;
    function X(m) { return x0 + (x1 - x0) * m / mx; }
    s.appendChild(R(X(0), 70, X(120) - X(0), 50, { f: ACC, c: ACC, w: 1 })); s.appendChild(T((X(0) + X(120)) / 2, 100, "Distance: 10 km ÷ 5 = 120 min", { a: "middle", s: 13, c: "#000", w: 700 }));
    s.appendChild(R(X(120), 70, X(165) - X(120), 50, { f: WARN, c: WARN, w: 1 })); s.appendChild(T((X(120) + X(165)) / 2, 100, "Climb 45", { a: "middle", s: 12, c: "#000", w: 700 }));
    s.appendChild(R(X(165), 70, X(195) - X(165), 50, { f: PANEL, c: MUTED, w: 2 })); s.appendChild(T((X(165) + X(195)) / 2, 100, "Rests", { a: "middle", s: 12, c: INK, w: 700 }));
    s.appendChild(L(X(165), 56, X(165), 130, INK, 2)); s.appendChild(T(X(165), 48, "Naismith total: 165 min = 2 h 45", { a: "middle", s: 13, c: INK, w: 700 }));
    for (var m = 0; m <= 200; m += 40) { s.appendChild(L(X(m), 130, X(m), 136, MUTED, 1)); s.appendChild(T(X(m), 152, m + " min", { a: "middle", s: 11 })); }
    s.appendChild(T(320, 196, "Worked example: 10 km with 450 m ascent. Rest allowance is our own suggestion.", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 6 */
  CE.figs["camping-basics-tripcard"] = function () {
    var s = svg(600, 320, "A trip card with fields to leave with someone you trust");
    s.appendChild(R(70, 20, 460, 280, { f: PANEL, c: INK, w: 3, r: 10 }));
    s.appendChild(T(300, 52, "TRIP CARD", { a: "middle", s: 18, c: ACC, w: 700 }));
    var rows = ["Where: site name and postcode", "Plan: route, top grid reference", "Who: names and phone numbers", "Vehicle and tent: colour, registration", "Back by: time, and when I will call", "Action time: who rings whom, then 999"];
    rows.forEach(function (r, i) { s.appendChild(L(95, 86 + i * 36, 505, 86 + i * 36, LINE, 1)); s.appendChild(T(100, 78 + i * 36, r, { s: 13, c: INK, w: 500 })); });
    return s;
  };
  CE.figs["camping-basics-hazards"] = function () {
    var s = svg(680, 320, "Sketch of a camp with hazards marked: livestock, stream, tree, stove and dark");
    s.appendChild(R(20, 20, 640, 280, { f: PANEL, c: LINE, w: 2, r: 10 }));
    s.appendChild(R(40, 40, 180, 90, { f: "rgba(120,160,80,.2)", c: OK, w: 2, r: 4 })); s.appendChild(T(130, 78, "Field with cows", { a: "middle", s: 13, c: INK, w: 700 })); s.appendChild(T(130, 98, "Control: avoid, close gate", { a: "middle", s: 12 }));
    s.appendChild(P("M440 20 Q520 120 470 200 Q450 270 520 300", { c: "#3b7bbf", w: 14 })); s.appendChild(T(560, 150, "Stream: can rise", { a: "middle", s: 13, c: INK, w: 700, halo: true })); s.appendChild(T(560, 170, "Control: stay clear", { a: "middle", s: 12, halo: true }));
    s.appendChild(C(120, 220, 30, { f: "rgba(120,160,80,.25)", c: OK, w: 2 })); s.appendChild(T(120, 224, "Dead limb", { a: "middle", s: 12, c: BAD, w: 700 })); s.appendChild(T(120, 268, "Control: move the tent", { a: "middle", s: 12 }));
    s.appendChild(R(250, 180, 100, 60, { f: PANEL, c: INK, w: 2.5, r: 6 })); s.appendChild(T(300, 214, "Tent", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(R(370, 210, 40, 24, { f: PANEL, c: WARN, w: 2.5, r: 4 })); s.appendChild(T(390, 252, "Stove outside", { a: "middle", s: 12, c: INK, w: 700 }));
    s.appendChild(T(330, 290, "Dark: head torch by the door", { a: "middle", s: 13, c: INK, w: 700 }));
    return s;
  };
  CE.figs["camping-basics-signs"] = function () {
    var s = svg(660, 280, "Three rows linking symptoms to causes and first actions");
    var rows = [[["Shivering, slurred speech,", "confusion"], "Hypothermia", ["Shelter, wrap,", "call 999"]], [["Headache, dizzy, sick after", "cooking inside"], "Carbon monoxide", ["Fresh air, ventilate,", "get help"]], [["Vomiting, diarrhoea after", "untreated water"], "Waterborne germs", ["Treat water; seek help", "if serious"]]];
    rows.forEach(function (r, i) {
      var y = 20 + i * 86;
      box(s, 10, y, 230, 64, r[0], { s: 12 });
      s.appendChild(arrow(242, y + 32, 270, y + 32, INK));
      box(s, 272, y, 170, 64, [r[1]], { s: 14, bold: true, c: BAD });
      s.appendChild(arrow(444, y + 32, 472, y + 32, INK));
      box(s, 474, y, 176, 64, r[2], { s: 12, c: OK });
    });
    return s;
  };
  CE.figs["camping-basics-callcard"] = function () {
    var s = svg(560, 330, "Call card: five details to have ready before dialling 999");
    var items = ["1  Location, with a grid reference", "2  Casualty: name, gender, age", "3  Injuries or emergency", "4  Number in the party", "5  Your mobile number"];
    s.appendChild(T(280, 28, "Dial 999 or 112 → Police → Mountain Rescue", { a: "middle", s: 15, c: ACC, w: 700 }));
    items.forEach(function (t, i) { box(s, 60, 50 + i * 50, 440, 40, [t], { s: 14 }); });
    s.appendChild(T(280, 312, "Stay where you are until contacted", { a: "middle", s: 14, c: INK, w: 700 }));
    return s;
  };
})();
