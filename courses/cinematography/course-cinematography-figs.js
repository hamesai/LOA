/* Diagrams for Cinematography: DSLR and analog film. Ids are prefixed with the course id. */
(function () {
  "use strict";
  var CE = window.CourseEngine, S = CE.S;
  var INK = "var(--ink)", MUTED = "var(--muted)", LINE = "var(--line)", ACC = "var(--accent)", WARN = "var(--warn)", BAD = "var(--bad)", OK = "var(--ok)", PANEL = "var(--panel)";
  function svg(w, h, label) { return S("svg", { viewBox: "0 0 " + w + " " + h, role: "img", "aria-label": label, width: "100%" }); }
  function T(x, y, s, o) { o = o || {}; var e = S("text", { x: x, y: y, "text-anchor": o.a || "start", style: "fill:" + (o.c || INK) + ";font:" + (o.w || 400) + " " + (o.s || 13) + "px var(--f-body)" + (o.halo ? ";paint-order:stroke;stroke:var(--panel);stroke-width:5px;stroke-linejoin:round" : "") }); e.textContent = s; return e; }
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
  function camera(s, x, y, rot, col) {
    var g = S("g", { transform: "translate(" + x + " " + y + ") rotate(" + rot + ")" });
    g.appendChild(R(-14, -10, 28, 20, { f: PANEL, c: col || INK, w: 2, r: 3 }));
    g.appendChild(P("M14 -6 L24 -11 L24 11 L14 6 Z", { f: PANEL, c: col || INK, w: 2 }));
    s.appendChild(g);
  }
  function lamp(s, x, y, rot, col) {
    var g = S("g", { transform: "translate(" + x + " " + y + ") rotate(" + rot + ")" });
    g.appendChild(P("M-12 -10 L10 -16 L10 16 L-12 10 Z", { f: PANEL, c: col || ACC, w: 2 }));
    g.appendChild(L(10, -10, 24, -18, col || ACC, 2)); g.appendChild(L(10, 0, 26, 0, col || ACC, 2)); g.appendChild(L(10, 10, 24, 18, col || ACC, 2));
    s.appendChild(g);
  }

  /* Module 1: the stop ladder */
  CE.figs["cinematography-stops"] = function () {
    var s = svg(700, 230, "Aperture openings from f/1.4 to f/16, each passing half the light of the one before");
    var N = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], frac = ["1", "1/2", "1/4", "1/8", "1/16", "1/32", "1/64", "1/128"];
    N.forEach(function (n, i) {
      var x = 55 + i * 84, r = 61.6 / n;
      s.appendChild(C(x, 96, 46, { c: LINE, w: 1.5 }));
      s.appendChild(C(x, 96, r, { f: ACC, c: ACC, w: 1 }));
      s.appendChild(T(x, 28, "f/" + n, { a: "middle", s: 15, c: INK, w: 700 }));
      s.appendChild(T(x, 176, frac[i], { a: "middle", s: 14, c: INK, w: 600 }));
      s.appendChild(T(x, 196, i + (i === 1 ? " stop" : " stops"), { a: "middle", s: 12 }));
      if (i < N.length - 1) s.appendChild(arrow(x + 40, 96, x + 44, 96, MUTED));
    });
    s.appendChild(T(350, 222, "Each step to a larger f-number halves the light (one stop darker)", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 1: shutter angle */
  CE.figs["cinematography-shutterangle"] = function () {
    var s = svg(700, 250, "A rotary shutter with a 180 degree opening and a timeline of one 24 fps frame");
    s.appendChild(C(150, 125, 90, { f: PANEL, c: INK, w: 2.5 }));
    s.appendChild(P("M150 125 L150 35 A90 90 0 0 1 150 215 Z", { f: ACC, c: ACC, w: 1 }));
    s.appendChild(C(150, 125, 5, { f: INK }));
    s.appendChild(T(150, 20, "180° open", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(T(108, 130, "closed", { a: "middle", s: 12, c: INK }));
    s.appendChild(T(195, 130, "open", { a: "middle", s: 12, c: PANEL, w: 700 }));
    s.appendChild(T(400, 70, "One frame interval = 1/24 s", { a: "middle", s: 14, c: INK, w: 700 }));
    s.appendChild(R(260, 90, 280, 36, { f: PANEL, c: INK, w: 2 }));
    s.appendChild(R(260, 90, 140, 36, { f: ACC, c: ACC, w: 1 }));
    s.appendChild(T(330, 113, "exposed 1/48 s", { a: "middle", s: 13, c: PANEL, w: 700 }));
    s.appendChild(T(470, 113, "film moves", { a: "middle", s: 13, c: INK }));
    s.appendChild(T(400, 160, "exposure time ÷ frame interval = angle ÷ 360°", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(T(400, 184, "1/48 ÷ 1/24 = 180 ÷ 360 = 1/2", { a: "middle", s: 13 }));
    s.appendChild(T(400, 212, "Smaller angle: less blur. Larger angle: more blur.", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 2: crop factor */
  CE.figs["cinematography-cropfov"] = function () {
    var s = svg(700, 260, "A full frame sensor and a smaller 1.6 crop sensor in the same image circle");
    s.appendChild(C(350, 130, 168, { c: LINE, w: 1.5 }));
    s.appendChild(T(350, 20, "Image circle from the lens", { a: "middle", s: 12 }));
    s.appendChild(R(206, 34, 288, 192, { c: INK, w: 2.5 }));
    s.appendChild(R(260, 70, 180, 120, { c: ACC, w: 3 }));
    s.appendChild(T(350, 56, "Full frame 36 × 24 mm", { a: "middle", s: 13, c: INK, w: 700 }));
    s.appendChild(T(350, 133, "Crop sensor ≈ 22.5 × 15 mm", { a: "middle", s: 13, c: ACC, w: 700 }));
    s.appendChild(T(350, 152, "(crop factor 1.6)", { a: "middle", s: 12 }));
    s.appendChild(T(350, 248, "Same lens, same image; the small sensor records only the middle", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 3: depth of field bars */
  CE.figs["cinematography-dof"] = function () {
    var s = svg(700, 250, "Depth of field zones at 3 metres for f/2, f/4 and f/8 with a 50 millimetre lens");
    var rows = [["f/2", 43], ["f/4", 86], ["f/8", 173]], k = 2.4, cx = 380;
    s.appendChild(L(cx, 24, cx, 190, INK, 2, "4 4"));
    s.appendChild(T(cx, 18, "subject, 3 m", { a: "middle", s: 12, c: INK }));
    rows.forEach(function (r, i) {
      var y = 40 + i * 52, w = r[1] * k;
      s.appendChild(T(40, y + 24, r[0], { s: 16, c: INK, w: 700 }));
      s.appendChild(R(cx - w / 2, y, w, 34, { f: ACC, c: ACC, w: 1, r: 4 }));
      s.appendChild(T(cx + w / 2 + 10, y + 24, "about " + r[1] + " cm sharp", { s: 13, c: INK }));
    });
    s.appendChild(T(350, 226, "Our worked example: DOF ≈ 2 u² N c ÷ f², with c = 0.03 mm (illustrative)", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 3: aspect ratios nested */
  CE.figs["cinematography-aspect"] = function () {
    var s = svg(700, 300, "Frame shapes of equal width: 4:3, 16:9 and 2.39:1");
    var W = 400, cx = 350, cy = 150, defs = [["1.33:1 (4:3)", 1.333, LINE], ["1.78:1 (16:9)", 1.778, WARN], ["2.39:1 (anamorphic)", 2.39, ACC]];
    defs.forEach(function (d) {
      var h = W / d[1];
      s.appendChild(R(cx - W / 2, cy - h / 2, W, h, { c: d[2], w: 3 }));
    });
    s.appendChild(T(350, 285, "Same width: wider shapes leave less height", { a: "middle", s: 12 }));
    s.appendChild(T(60, 26, "1.33:1 (4:3)", { s: 13, c: INK }));
    s.appendChild(T(60, 60, "1.78:1 (16:9)", { s: 13, c: WARN, w: 700 }));
    s.appendChild(T(60, 96, "2.39:1 (anamorphic)", { s: 13, c: ACC, w: 700 }));
    s.appendChild(T(350, 160, "2.39:1 keeps about 74% of the 16:9 height", { a: "middle", s: 12, c: INK, halo: true }));
    return s;
  };

  /* Module 4: kelvin scale */
  CE.figs["cinematography-kelvin"] = function () {
    var s = svg(700, 220, "A colour temperature scale from 1850 kelvin candle to 6500 kelvin overcast");
    var defs = S("defs"), g = S("linearGradient", { id: "cin-kgrad", x1: "0", y1: "0", x2: "1", y2: "0" });
    [["0", "#ff8a1f"], ["0.4", "#ffc680"], ["0.7", "#fff4e5"], ["1", "#9cc4ff"]].forEach(function (st) { g.appendChild(S("stop", { offset: st[0], "stop-color": st[1] })); });
    defs.appendChild(g); s.appendChild(defs);
    s.appendChild(R(40, 70, 620, 50, { f: "url(#cin-kgrad)", c: INK, w: 2, r: 6 }));
    var pts = [[1850, "Candle, sunset", 0], [3200, "Studio tungsten", 0], [5500, "Midday daylight", 0], [6500, "Overcast sky", 0]];
    pts.forEach(function (p, i) {
      var x = 40 + (p[0] - 1500) / (7000 - 1500) * 620;
      s.appendChild(L(x, 120, x, 140, INK, 2));
      s.appendChild(T(x, 158 + (i % 2) * 38, p[0] + " K", { a: "middle", s: 14, c: INK, w: 700 }));
      s.appendChild(T(x, 174 + (i % 2) * 38, p[1], { a: "middle", s: 12 }));
    });
    s.appendChild(T(40, 56, "Warmer, more orange", { s: 12, c: INK }));
    s.appendChild(T(660, 56, "Cooler, more blue", { a: "end", s: 12, c: INK }));
    return s;
  };

  /* Module 4: three-point lighting plan view */
  CE.figs["cinematography-threept"] = function () {
    var s = svg(700, 330, "Three-point lighting seen from above");
    var sx = 350, sy = 140;
    s.appendChild(C(sx, sy, 24, { f: PANEL, c: INK, w: 2.5 }));
    s.appendChild(T(sx, sy + 5, "subject", { a: "middle", s: 11, c: INK }));
    camera(s, sx, 290, -90, INK);
    s.appendChild(T(sx, 322, "camera", { a: "middle", s: 12 }));
    lamp(s, 175, 250, -45, ACC); s.appendChild(arrow(205, 232, 330, 160, ACC)); s.appendChild(T(175, 285, "KEY", { a: "middle", s: 14, c: ACC, w: 700 })); s.appendChild(T(175, 300, "main light, to one side", { a: "middle", s: 11 }));
    lamp(s, 535, 240, -135 + 180, OK); s.appendChild(arrow(505, 225, 375, 160, OK)); s.appendChild(T(540, 285, "FILL", { a: "middle", s: 14, c: OK, w: 700 })); s.appendChild(T(540, 300, "softer, up to half the key", { a: "middle", s: 11 }));
    lamp(s, 480, 38, 135, WARN); s.appendChild(arrow(462, 52, 370, 125, WARN)); s.appendChild(T(540, 40, "BACKLIGHT", { a: "middle", s: 14, c: WARN, w: 700 })); s.appendChild(T(540, 56, "rims the subject from behind", { a: "middle", s: 11 }));
    s.appendChild(T(130, 40, "Fourth light:", { s: 12, c: INK, w: 700 })); s.appendChild(T(130, 56, "background light on the wall", { s: 12 }));
    return s;
  };

  /* Module 5: the line of action */
  CE.figs["cinematography-rule180"] = function () {
    var s = svg(700, 300, "The 180 degree rule: cameras stay on one side of the line between two characters");
    var ax = 250, bx = 450, y = 150;
    s.appendChild(L(80, y, 620, y, INK, 2, "6 4"));
    s.appendChild(T(620, y - 8, "line of action", { a: "end", s: 12, c: INK }));
    s.appendChild(C(ax, y, 20, { f: PANEL, c: INK, w: 2.5 })); s.appendChild(T(ax, y + 5, "A", { a: "middle", s: 15, c: INK, w: 700 }));
    s.appendChild(C(bx, y, 20, { f: PANEL, c: INK, w: 2.5 })); s.appendChild(T(bx, y + 5, "B", { a: "middle", s: 15, c: INK, w: 700 }));
    s.appendChild(P("M150 150 A200 200 0 0 1 550 150", { c: OK, w: 2, d: "5 5" }));
    camera(s, 270, 62, 90, OK); camera(s, 430, 62, 90, OK); camera(s, 350, 34, 90, OK);
    s.appendChild(T(350, 20, "Allowed side: A stays left, B stays right", { a: "middle", s: 13, c: OK, w: 700 }));
    camera(s, 350, 250, -90, BAD);
    s.appendChild(T(350, 285, "Crossing the line: A and B swap sides on screen", { a: "middle", s: 13, c: BAD, w: 700 }));
    return s;
  };

  /* Module 6: film gauges to scale */
  CE.figs["cinematography-gauges"] = function () {
    var s = svg(700, 300, "Film strip widths drawn to scale: 8 millimetre, 16 millimetre and 35 millimetre");
    var gs = [["Super 8", 8, 180], ["16 mm", 16, 350], ["35 mm", 35, 520]], k = 4;
    gs.forEach(function (g) {
      var w = g[1] * k, x = g[2] - w / 2;
      s.appendChild(R(x, 30, w, 210, { f: PANEL, c: INK, w: 2.5 }));
      for (var i = 0; i < 7; i++) {
        var y = 44 + i * 29;
        s.appendChild(R(x + 3, y, Math.max(w * 0.08, 3), 11, { f: LINE, c: LINE, w: 1 }));
        if (g[1] > 8) s.appendChild(R(x + w - 3 - Math.max(w * 0.08, 3), y, Math.max(w * 0.08, 3), 11, { f: LINE, c: LINE, w: 1 }));
      }
      s.appendChild(R(x + w * 0.22, 60, w * 0.56, 70, { f: ACC, c: ACC, w: 1 }));
      s.appendChild(T(g[2], 262, g[0], { a: "middle", s: 15, c: INK, w: 700 }));
      s.appendChild(T(g[2], 282, g[1] + " mm wide", { a: "middle", s: 12 }));
    });
    s.appendChild(T(350, 18, "Not to scale in length; widths are to scale. Perforations and frames are schematic.", { a: "middle", s: 11 }));
    return s;
  };

  /* Module 7: 2:3 pulldown */
  CE.figs["cinematography-pulldown"] = function () {
    var s = svg(700, 280, "2:3 pulldown spreads four film frames A B C D over five video frames of two fields each");
    var cols = [ACC, OK, WARN, BAD], film = ["A", "B", "C", "D"];
    s.appendChild(T(20, 36, "Film, 24 fps (slowed to 23.976)", { s: 13, c: INK, w: 700 }));
    film.forEach(function (f, i) {
      var x = 70 + i * 150;
      box(s, x, 48, 100, 44, [f], { c: cols[i], bold: true, s: 18 });
    });
    s.appendChild(T(20, 140, "Video, about 29.97 fps: five frames, each of two fields", { s: 13, c: INK, w: 700 }));
    var fr = [["A", "A"], ["B", "B"], ["B", "C"], ["C", "D"], ["D", "D"]], idx = { A: 0, B: 1, C: 2, D: 3 };
    fr.forEach(function (p, i) {
      var x = 40 + i * 128;
      s.appendChild(R(x, 156, 116, 56, { c: INK, w: 2, r: 6 }));
      p.forEach(function (f, j) {
        s.appendChild(R(x + 6 + j * 52, 164, 48, 40, { f: cols[idx[f]], c: cols[idx[f]], w: 1, r: 4 }));
        s.appendChild(T(x + 30 + j * 52, 190, f, { a: "middle", s: 18, c: PANEL, w: 700 }));
      });
      s.appendChild(T(x + 58, 232, "frame " + (i + 1), { a: "middle", s: 12 }));
    });
    s.appendChild(T(350, 264, "Frames 3 and 4 mix fields from two film frames", { a: "middle", s: 12, c: INK }));
    return s;
  };

  /* Module 7: hybrid pipeline */
  CE.figs["cinematography-workflow"] = function () {
    var s = svg(700, 300, "Three capture lanes feeding a common ingest, timeline, grade and delivery");
    var lanes = [["DSLR", "card", "copy and back up"], ["Film", "process", "scan"], ["Tape", "play", "capture, deinterlace"]];
    lanes.forEach(function (ln, i) {
      var y = 24 + i * 88;
      box(s, 10, y, 110, 58, [ln[0], "capture"], { c: ACC, s: 13, bold: true, sub: true });
      s.appendChild(arrow(122, y + 29, 148, y + 29, MUTED));
      box(s, 150, y, 130, 58, [ln[1]], { c: ACC, s: 13 });
      s.appendChild(arrow(282, y + 29, 308, y + 29, MUTED));
      box(s, 310, y, 150, 58, [ln[2]], { c: ACC, s: 13 });
      s.appendChild(arrow(462, y + 29, 500, 145, MUTED));
    });
    box(s, 500, 100, 190, 90, ["Common timeline", "one frame rate", "grade, then deliver"], { c: OK, s: 13, bold: true, sub: true });
    s.appendChild(T(350, 292, "Name every clip with its source; keep the originals and two backups", { a: "middle", s: 12 }));
    return s;
  };
})();
