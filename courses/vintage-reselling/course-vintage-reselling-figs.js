/* Diagrams for Vintage reselling business (UK). Ids are prefixed with the course id. */
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
    lines.forEach(function (ln, i) { s.appendChild(T(x + w / 2, y0 + i * lh, ln, { a: "middle", s: o.s || 13, c: o.tc || INK, w: i === 0 && o.bold ? 700 : 500 })); });
  }

  /* Module 1: the resale loop as a ring of eight steps */
  CE.figs["vintage-reselling-loop"] = function () {
    var s = svg(640, 330, "The resale loop: source, check, clean, photograph, list, sell, pack and post, record, then back to sourcing");
    var steps = ["Source", "Check and date", "Clean", "Photograph", "List", "Sell", "Pack and post", "Record"];
    var cx = 320, cy = 165, rx = 250, ry = 120;
    steps.forEach(function (n, i) {
      var a = -Math.PI / 2 + i * 2 * Math.PI / steps.length;
      var x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
      var last = i === 5;
      s.appendChild(R(x - 52, y - 17, 104, 34, { f: PANEL, c: last ? OK : ACC, w: 2.5, r: 8 }));
      s.appendChild(T(x, y + 5, n, { a: "middle", s: 13, c: INK, w: 600 }));
      var b = a + 2 * Math.PI / steps.length;
      var x2 = cx + rx * Math.cos(b), y2 = cy + ry * Math.sin(b);
      var mx1 = x + (x2 - x) * 0.34, my1 = y + (y2 - y) * 0.34, mx2 = x + (x2 - x) * 0.62, my2 = y + (y2 - y) * 0.62;
      s.appendChild(arrow(mx1, my1, mx2, my2, MUTED));
    });
    s.appendChild(T(cx, cy - 4, "Money comes in at one step", { a: "middle", s: 13, c: INK, w: 700 }));
    s.appendChild(T(cx, cy + 16, "and goes out at all the others", { a: "middle", s: 13, c: MUTED }));
    return s;
  };

  /* Module 1: spectrum from clear-out to business */
  CE.figs["vintage-reselling-spectrum"] = function () {
    var s = svg(680, 250, "A line from clearing out your own things on the left to running a business on the right, with indicators in between");
    s.appendChild(R(40, 90, 600, 26, { f: PANEL, c: LINE, w: 2, r: 13 }));
    s.appendChild(P("M40 103 L640 103", { c: ACC, w: 4 }));
    s.appendChild(T(40, 70, "Clearing out your own things", { s: 13, c: OK, w: 700 }));
    s.appendChild(T(640, 70, "In business", { a: "end", s: 13, c: BAD, w: 700 }));
    var ind = ["Buy to resell", "Make or repair", "Frequent or large", "Several channels", "Rely on the income", "Present as a business"];
    ind.forEach(function (n, i) {
      var x = 70 + i * 110;
      s.appendChild(C(x, 103, 9, { f: PANEL, c: ACC, w: 2.5 }));
      s.appendChild(L(x, 112, x, 142 + (i % 2) * 34, LINE, 1.5));
      s.appendChild(T(x, 158 + (i % 2) * 34, n, { a: "middle", s: 12, c: INK, w: 600 }));
    });
    s.appendChild(T(340, 236, "No single indicator is decisive. A reseller buys to sell, so most apply from day one.", { a: "middle", s: 12, c: MUTED }));
    return s;
  };

  /* Module 2: effort against price by channel */
  CE.figs["vintage-reselling-channels"] = function () {
    var s = svg(640, 330, "A chart of sourcing channels by effort and typical price, positions are a judgement");
    s.appendChild(L(70, 20, 70, 280, INK, 2)); s.appendChild(L(70, 280, 620, 280, INK, 2));
    s.appendChild(T(345, 316, "Effort and time needed", { a: "middle", s: 13, c: MUTED }));
    var yl = T(18, 150, "Typical price paid", { s: 13, c: MUTED }); yl.setAttribute("transform", "rotate(-90 18 150)"); s.appendChild(yl);
    var pts = [["Car boot", 270, 205], ["Charity shop", 190, 150], ["House clearance", 500, 235], ["Auction", 400, 125], ["Online market", 150, 85], ["Wholesale bundle", 330, 190]];
    pts.forEach(function (p) {
      s.appendChild(C(p[1], p[2], 8, { f: ACC, c: ACC, w: 2 }));
      s.appendChild(T(p[1] + 13, p[2] + 4, p[0], { s: 12, c: INK, w: 600, halo: true }));
    });
    s.appendChild(T(345, 40, "A sketch of our judgement, not measured data", { a: "middle", s: 12, c: MUTED }));
    return s;
  };

  /* Module 2: price ceiling waterfall */
  CE.figs["vintage-reselling-ceiling"] = function () {
    var s = svg(680, 330, "A waterfall from the expected total sale of 46 pounds down through fees, postage and packaging and target profit to a ceiling of 17.73 pounds");
    var rows = [["Expected total sale", 46, INK], ["Fees (£5.58)", 5.575, WARN], ["Postage you pay (£6.50)", 6.5, WARN], ["Packing (£1.20)", 1.2, WARN], ["Target profit (£15)", 15, OK], ["Price ceiling", 17.725, ACC]];
    var k = 9, x0 = 190, y = 20, cur = 0;
    rows.forEach(function (r, i) {
      var w = r[1] * k;
      var x = x0;
      if (i === 0) cur = r[1];
      else if (i < 5) { cur -= r[1]; x = x0 + cur * k; }
      s.appendChild(R(x, y, w, 30, { f: r[2], c: r[2], w: 1, r: 4 }));
      s.appendChild(T(x0 - 8, y + 20, r[0], { a: "end", s: 12, c: INK, w: 600 }));
      s.appendChild(T(x + w + 6, y + 20, "£" + r[1].toFixed(2), { s: 12, c: MUTED }));
      y += 48;
    });
    return s;
  };

  /* Module 3: the evidence ladder */
  CE.figs["vintage-reselling-ladder"] = function () {
    var s = svg(640, 300, "A three-rung ladder of dating evidence: strong, medium and weak");
    var rungs = [["Strong", "Dated receipt, catalogue, patent date, hallmark, matched maker's mark", OK], ["Medium", "Label design, materials and fastenings, construction", WARN], ["Weak", "Style, smell, wear, 'it feels old', a story with no document", BAD]];
    rungs.forEach(function (r, i) {
      var y = 20 + i * 88;
      s.appendChild(R(30, y, 580, 74, { f: PANEL, c: r[2], w: 3, r: 10 }));
      s.appendChild(T(52, y + 30, r[0], { s: 18, c: r[2], w: 700 }));
      s.appendChild(T(52, y + 54, r[1], { s: 13, c: INK, w: 500 }));
    });
    s.appendChild(arrow(618, 270, 618, 40, MUTED));
    return s;
  };

  /* Module 4: five gates before listing */
  CE.figs["vintage-reselling-gates"] = function () {
    var s = svg(700, 220, "Five gates before you list: right to sell, restricted material, safety, honest description, returns text");
    var g = ["Right to sell", "Restricted material", "Safety", "Honest description", "Returns text"];
    var sub = ["Source noted", "Ivory, metals", "Furniture, electrics", "Flaws, age claims", "14-day right"];
    g.forEach(function (n, i) {
      var x = 14 + i * 136;
      box(s, x, 40, 120, 80, [n, sub[i]], { c: ACC, s: 12, bold: true });
      if (i < 4) s.appendChild(arrow(x + 122, 80, x + 134, 80, MUTED));
    });
    s.appendChild(T(350, 160, "Stop at the first gate you cannot pass.", { a: "middle", s: 13, c: BAD, w: 700 }));
    s.appendChild(T(350, 184, "List only when all five are clear.", { a: "middle", s: 13, c: OK, w: 700 }));
    return s;
  };
})();
