/* Diagrams for Wasteland Kitchen: Food Safety When the Grid Goes Down. Ids are prefixed with the course id. */
(function () {
  "use strict";
  var CE = window.CourseEngine, S = CE.S;
  var INK = "var(--ink)", MUTED = "var(--muted)", LINE = "var(--line)", ACC = "var(--accent)", WARN = "var(--warn)", BAD = "var(--bad)", OK = "var(--ok)", PANEL = "var(--panel)";
  function svg(w, h, label) { return S("svg", { viewBox: "0 0 " + w + " " + h, role: "img", "aria-label": label, width: "100%" }); }
  function T(x, y, s, o) { o = o || {}; var e = S("text", { x: x, y: y, "text-anchor": o.a || "start", style: "fill:" + (o.c || MUTED) + ";font:" + (o.w || 400) + " " + (o.s || 13) + "px var(--f-body)" + (o.halo ? ";paint-order:stroke;stroke:var(--panel);stroke-width:5px;stroke-linejoin:round" : "") }); e.textContent = s; return e; }
  function L(x1, y1, x2, y2, c, w, dash) { return S("line", { x1: x1, y1: y1, x2: x2, y2: y2, style: "stroke:" + (c || LINE) + ";stroke-width:" + (w || 1) + (dash ? ";stroke-dasharray:" + dash : "") }); }
  function P(d, o) { o = o || {}; return S("path", { d: d, style: "fill:" + (o.f || "none") + ";stroke:" + (o.c || INK) + ";stroke-width:" + (o.w || 2) + ";stroke-linecap:round;stroke-linejoin:round" + (o.d ? ";stroke-dasharray:" + o.d : "") }); }
  function R(x, y, w, h, o) { o = o || {}; return S("rect", { x: x, y: y, width: w, height: h, rx: o.r || 0, style: "fill:" + (o.f || "none") + ";stroke:" + (o.c || INK) + ";stroke-width:" + (o.w || 2) }); }
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

  CE.figs["grid-down-food-keys"] = function () {
    var s = svg(700, 200, "WHO five keys to safer food");
    var k = [["1", "Keep clean"], ["2", "Separate", "raw and cooked"], ["3", "Cook", "thoroughly"], ["4", "Safe", "temperatures"], ["5", "Safe water", "and raw materials"]];
    k.forEach(function (r, i) {
      var x = 12 + i * 138;
      s.appendChild(R(x, 30, 128, 120, { f: PANEL, c: ACC, r: 10, w: 2.5 }));
      s.appendChild(T(x + 64, 66, r[0], { a: "middle", s: 26, c: ACC, w: 700 }));
      s.appendChild(T(x + 64, 100, r[1], { a: "middle", s: 14, c: INK, w: 600 }));
      if (r[2]) s.appendChild(T(x + 64, 120, r[2], { a: "middle", s: 13, c: INK, w: 500 }));
    });
    s.appendChild(T(350, 184, "Every power-cut rule in this course is one of these five keys under pressure.", { a: "middle", s: 12, c: INK }));
    return s;
  };

  CE.figs["grid-down-food-temps"] = function () {
    var s = svg(700, 300, "Temperature scale in degrees Celsius with freezer, fridge, power-cut and cooking thresholds");
    var y0 = 270, k = 3.2; /* px per degree, from -20 */
    function Y(t) { return y0 - (t + 20) * k; }
    s.appendChild(L(110, Y(-20), 110, Y(75), MUTED, 2));
    [[-18, "-18 C", "Freezer target (FSAI)", OK], [5, "5 C", "Fridge normal limit (FSA, FSAI, WHO)", OK], [8, "8 C", "Power-cut fridge limit (FSA)", WARN], [60, "60 C", "Keep hot food above (WHO)", OK], [70, "70 C", "Cooked thoroughly (WHO)", OK], [75, "75 C", "Cook before refreezing (FSAI)", MUTED]].forEach(function (m) {
      var y = Y(m[0]);
      s.appendChild(L(100, y, 120, y, m[3], 3)); s.appendChild(T(90, y + 4, m[1], { a: "end", s: 13, c: INK, w: 700 })); s.appendChild(T(130, y + 4, m[2], { s: 13, c: m[3], w: 600 }));
    });
    s.appendChild(R(104, Y(60), 12, Y(5) - Y(60), { f: "none", c: BAD, w: 2 }));
    s.appendChild(T(400, Y(32), "Between fridge and hot-holding temperatures bacteria multiply", { s: 12, c: BAD, w: 600 }));
    s.appendChild(T(400, Y(32) + 16, "fastest (our shorthand for the zone from 5 C to 60 C).", { s: 12, c: BAD, w: 600 }));
    return s;
  };

  CE.figs["grid-down-food-clock"] = function () {
    var s = svg(700, 250, "Power-cut clock: fridge safe about 4 hours, half-full freezer 24 hours, full freezer 48 hours if doors stay shut");
    var x0 = 150, k = 10; /* px per hour, 0..52h => 520 */
    s.appendChild(L(x0, 190, x0 + 52 * k, 190, MUTED, 2));
    [0, 4, 24, 48].forEach(function (h) { s.appendChild(L(x0 + h * k, 184, x0 + h * k, 196, MUTED, 2)); s.appendChild(T(x0 + h * k, 214, h + " h", { a: "middle", s: 13, c: INK, w: 700 })); });
    var rows = [["Fridge", 4, WARN, 40], ["Half-full freezer", 24, ACC, 85], ["Full freezer", 48, OK, 130]];
    rows.forEach(function (r) {
      s.appendChild(T(20, r[3] + 22, r[0], { s: 14, c: INK, w: 600 }));
      s.appendChild(R(x0, r[3], r[1] * k, 32, { f: PANEL, c: r[2], r: 6, w: 2.5 }));
      s.appendChild(T(x0 + r[1] * k + 8, r[3] + 21, "about " + r[1] + " hours", { s: 12, c: INK, w: 600 }));
    });
    s.appendChild(T(350, 240, "Estimates with the door kept shut (FSA, FSIS, UK CMOs); models vary.", { a: "middle", s: 12 }));
    return s;
  };

  CE.figs["grid-down-food-order"] = function () {
    var s = svg(700, 260, "Order to eat food in a long power cut: chilled first, then defrosted, then room-temperature perishable, then cupboard");
    var st = [["1", "Chilled food", "use-by, keep refrigerated"], ["2", "Defrosted food", "that needs no cooking"], ["3", "Room-temperature", "perishables"], ["4", "Cupboard stock", "canned, bottled, dried"]];
    st.forEach(function (r, i) {
      var x = 16 + i * 172, h = 150 - i * 22, y = 40 + i * 22;
      s.appendChild(R(x, y, 160, h, { f: PANEL, c: i === 0 ? BAD : i === 3 ? OK : WARN, r: 8, w: 2.5 }));
      s.appendChild(T(x + 80, y + 34, r[0], { a: "middle", s: 26, c: ACC, w: 700 }));
      s.appendChild(T(x + 80, y + 62, r[1], { a: "middle", s: 14, c: INK, w: 600 }));
      s.appendChild(T(x + 80, y + 82, r[2], { a: "middle", s: 12, c: INK }));
    });
    s.appendChild(arrow(60, 230, 640, 230, MUTED));
    s.appendChild(T(350, 250, "shortest shelf life first, longest last (FSA order)", { a: "middle", s: 12 }));
    return s;
  };

  CE.figs["grid-down-food-water"] = function () {
    var s = svg(700, 330, "Water decision flow: suspect water, chemical or fuel contamination, cloudy, then boil, disinfect or filter");
    box(s, 250, 8, 200, 44, ["Is the water", "safe or suspect?"], { s: 13, bold: true });
    box(s, 20, 100, 200, 56, ["Chemical, fuel or", "radioactive?", "Boiling will NOT help"], { c: BAD, s: 12 });
    box(s, 250, 100, 200, 56, ["Germs only", "(storm, main break)"], { c: ACC, s: 13 });
    s.appendChild(arrow(300, 52, 150, 98, MUTED)); s.appendChild(arrow(350, 52, 350, 98, MUTED));
    box(s, 10, 210, 220, 56, ["Use bottled or another", "source; ask your health", "department"], { c: BAD, s: 12 });
    s.appendChild(arrow(120, 156, 120, 208, BAD));
    box(s, 260, 190, 170, 44, ["Cloudy? Strain through", "cloth first"], { s: 12 });
    s.appendChild(arrow(350, 156, 350, 188, MUTED));
    box(s, 255, 262, 100, 48, ["BOIL", "1 min rolling"], { c: OK, s: 12, bold: true });
    box(s, 365, 262, 150, 48, ["DISINFECT", "bleach, 30 min wait"], { c: WARN, s: 12, bold: true });
    box(s, 525, 262, 165, 48, ["FILTER", "then disinfect"], { c: WARN, s: 12, bold: true });
    s.appendChild(arrow(320, 234, 305, 260, MUTED)); s.appendChild(arrow(350, 234, 440, 260, MUTED)); s.appendChild(arrow(380, 234, 600, 260, MUTED));
    s.appendChild(T(580, 190, "Boiling is best (CDC)", { s: 12, c: OK, w: 600 }));
    return s;
  };

  CE.figs["grid-down-food-stove"] = function () {
    var s = svg(700, 250, "Cook outdoors: stoves and barbecues belong outside because of carbon monoxide");
    s.appendChild(R(40, 40, 260, 170, { f: PANEL, c: BAD, r: 10, w: 3 }));
    s.appendChild(T(170, 70, "INDOORS", { a: "middle", s: 15, c: BAD, w: 700 }));
    s.appendChild(T(170, 110, "Camping stove or barbecue", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(T(170, 132, "Carbon monoxide builds up:", { a: "middle", s: 13, c: INK }));
    s.appendChild(T(170, 152, "colourless, odourless, deadly", { a: "middle", s: 13, c: BAD, w: 600 }));
    s.appendChild(P("M110 190 L230 190", { c: BAD, w: 3 }));
    s.appendChild(R(400, 40, 260, 170, { f: PANEL, c: OK, r: 10, w: 3 }));
    s.appendChild(T(530, 70, "OUTDOORS", { a: "middle", s: 15, c: OK, w: 700 }));
    s.appendChild(T(530, 110, "Stove, barbecue, fire", { a: "middle", s: 13, c: INK, w: 600 }));
    s.appendChild(T(530, 132, "Cook until steaming hot", { a: "middle", s: 13, c: INK }));
    s.appendChild(T(530, 152, "and cooked right through", { a: "middle", s: 13, c: OK, w: 600 }));
    s.appendChild(P("M470 190 L590 190", { c: OK, w: 3 }));
    return s;
  };

  CE.figs["grid-down-food-canning"] = function () {
    var s = svg(700, 280, "Home canning decision: low-acid foods need a pressure canner; boiling-water canner is unsafe for them");
    box(s, 250, 10, 200, 44, ["What are you canning?"], { s: 14, bold: true });
    box(s, 30, 100, 270, 70, ["LOW-ACID (pH above 4.6)", "vegetables, meat, poultry, fish,", "seafood, some tomatoes"], { c: BAD, s: 12 });
    box(s, 400, 100, 270, 70, ["High-acid foods", "(follow a USDA-tested recipe)"], { c: OK, s: 12 });
    s.appendChild(arrow(300, 54, 180, 98, MUTED)); s.appendChild(arrow(400, 54, 530, 98, MUTED));
    box(s, 30, 210, 270, 56, ["PRESSURE CANNER ONLY", "tested process time and pressure"], { c: OK, s: 12, bold: true });
    box(s, 400, 210, 270, 56, ["Tested recipe only", "no improvising"], { c: WARN, s: 12, bold: true });
    s.appendChild(arrow(165, 170, 165, 208, BAD)); s.appendChild(arrow(535, 170, 535, 208, MUTED));
    return s;
  };

  CE.figs["grid-down-food-doubt"] = function () {
    var s = svg(700, 280, "Decision flow for questionable food: rules that decide before you taste");
    box(s, 250, 8, 200, 40, ["Food in question"], { s: 14, bold: true });
    box(s, 20, 90, 200, 56, ["Contact with flood", "or storm water?"], { c: BAD, s: 12 });
    box(s, 250, 90, 200, 56, ["Perishable, above 8 C", "(or 5 C) too long?"], { c: WARN, s: 12 });
    box(s, 480, 90, 200, 56, ["Swollen, leaking or", "spurting container?"], { c: BAD, s: 12 });
    [[310, 120], [350, 350], [390, 580]].forEach(function (p) { s.appendChild(arrow(p[0], 48, p[1], 88, MUTED)); });
    box(s, 20, 190, 200, 50, ["THROW IT OUT"], { c: BAD, s: 14, bold: true });
    box(s, 250, 190, 200, 50, ["THROW IT OUT", "(or eat within limits)"], { c: WARN, s: 12, bold: true });
    box(s, 480, 190, 200, 50, ["THROW IT OUT"], { c: BAD, s: 14, bold: true });
    s.appendChild(arrow(120, 146, 120, 188, BAD)); s.appendChild(arrow(350, 146, 350, 188, WARN)); s.appendChild(arrow(580, 146, 580, 188, BAD));
    s.appendChild(T(350, 268, "Never taste food to decide. When in doubt, throw it out.", { a: "middle", s: 13, c: INK, w: 700 }));
    return s;
  };
})();
