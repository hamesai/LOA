/* Diagrams for Sales fundamentals for beginners. Ids are prefixed with the course id. */
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

  /* Module 1 */
  CE.figs["sales-basics-steps"] = function () {
    var s = svg(700, 330, "The seven steps of selling as an ascending staircase with a loop back to prospecting");
    var names = [["1", "Prospect", "and qualify"], ["2", "Pre-", "approach"], ["3", "Approach", ""], ["4", "Present-", "ation"], ["5", "Handle", "objections"], ["6", "Close", ""], ["7", "Follow", "up"]];
    names.forEach(function (n, i) {
      var x = 14 + i * 96, h = 70 + i * 22, y = 250 - h;
      s.appendChild(R(x, y, 88, h, { f: PANEL, c: i === 6 ? OK : ACC, w: 2.5, r: 6 }));
      s.appendChild(T(x + 44, y + 22, n[0], { a: "middle", s: 18, c: ACC, w: 700 }));
      s.appendChild(T(x + 44, y + 42, n[1], { a: "middle", s: 13, c: INK, w: 600 }));
      if (n[2]) s.appendChild(T(x + 44, y + 58, n[2], { a: "middle", s: 13, c: INK, w: 600 }));
    });
    s.appendChild(P("M640 262 Q640 310 350 310 Q60 310 58 266", { c: OK, w: 2.5, d: "7 5" }));
    s.appendChild(arrow(58, 272, 58, 258, OK));
    s.appendChild(T(350, 304, "Follow-up leads to repeat sales and referrals", { a: "middle", s: 12, c: INK, w: 600, halo: true }));
    return s;
  };
  CE.figs["sales-basics-maslow"] = function () {
    var s = svg(640, 320, "Maslow's hierarchy of needs as a five-level pyramid");
    var lv = [["Self-actualisation", "learn, grow, take on challenges"], ["Esteem", "respect and recognition"], ["Social", "belonging and attachment"], ["Safety", "security and well-being"], ["Physiological", "food, water, shelter, clothing"]];
    lv.forEach(function (l, i) {
      var y = 20 + i * 56, w = 140 + i * 90, x = 320 - w / 2;
      s.appendChild(R(x, y, w, 50, { f: PANEL, c: i === 4 ? OK : ACC, w: 2, r: 6 }));
      s.appendChild(T(320, y + 21, l[0], { a: "middle", s: 14, c: INK, w: 700 }));
      s.appendChild(T(320, y + 39, l[1], { a: "middle", s: 12 }));
    });
    return s;
  };
  CE.figs["sales-basics-buyers"] = function () {
    var s = svg(680, 320, "Roles in a business buying group with the power level at the top");
    box(s, 240, 14, 200, 56, ["Decision maker", "the power level"], { c: OK, s: 13, bold: true });
    box(s, 20, 120, 190, 56, ["Influencer", "shapes the choice"], { c: ACC, s: 13, bold: true });
    box(s, 245, 120, 190, 56, ["Initiator", "starts the purchase"], { c: ACC, s: 13, bold: true });
    box(s, 470, 120, 190, 56, ["User", "will use the product"], { c: ACC, s: 13, bold: true });
    [[115, 120], [340, 120], [565, 120]].forEach(function (p) { s.appendChild(arrow(p[0], p[1], 340 + (p[0] - 340) * 0.3, 72, MUTED)); });
    box(s, 140, 230, 400, 56, ["Gatekeeper", "controls access to the decision maker"], { c: WARN, s: 13, bold: true });
    s.appendChild(L(340, 230, 340, 178, WARN, 2, "5 4"));
    return s;
  };

  /* Module 2 */
  CE.figs["sales-basics-funnel"] = function () {
    var s = svg(680, 320, "A sales funnel from 200 leads to 8 customers (illustrative numbers)");
    var tiers = [["200", "Leads", 600], ["80", "Qualified prospects (40%)", 440], ["40", "Presentations", 300], ["8", "Customers (20%)", 170]];
    tiers.forEach(function (t, i) {
      var y = 14 + i * 74, w = t[2], x = 340 - w / 2;
      s.appendChild(R(x, y, w, 64, { f: PANEL, c: i === 3 ? OK : ACC, w: 2.5, r: 8 }));
      s.appendChild(T(340, y + 30, t[0], { a: "middle", s: 22, c: i === 3 ? OK : ACC, w: 700 }));
      s.appendChild(T(340, y + 52, t[1], { a: "middle", s: 12, c: INK, w: 600 }));
    });
    s.appendChild(T(340, 314, "Illustrative numbers only: use your own conversion rates", { a: "middle", s: 11 }));
    return s;
  };
  CE.figs["sales-basics-sources"] = function () {
    var s = svg(700, 320, "Prospecting sources arranged from warm to cold");
    var items = ["Existing customers", "Referrals", "Networking", "Expert content", "Trade shows and events", "Directories and databases", "Direct mail and email", "Cold calling"];
    items.forEach(function (n, i) {
      var y = 16 + i * 36, w = 560 - i * 55;
      var g = i < 3 ? OK : i < 6 ? ACC : WARN;
      s.appendChild(R(20, y, w, 30, { f: g, c: g, w: 1, r: 5 }));
      s.appendChild(T(32, y + 20, n, { s: 13, c: "#000", w: 700 }));
    });
    s.appendChild(arrow(600, 20, 600, 290, MUTED)); s.appendChild(T(612, 30, "warm", { s: 12, c: OK, w: 700 })); s.appendChild(T(612, 300, "cold", { s: 12, c: WARN, w: 700 }));
    s.appendChild(T(20, 312, "Check the rules before using the colder sources (Module 6)", { s: 11 }));
    return s;
  };
  CE.figs["sales-basics-qualify"] = function () {
    var s = svg(700, 260, "Five qualifying questions: need, authority, resources, willingness, access");
    var q = [["Need", "Is there a problem to solve?"], ["Authority", "Can they decide?"], ["Resources", "Can they pay?"], ["Willingness", "Do they want it?"], ["Access", "Can you reach the decider?"]];
    q.forEach(function (x, i) {
      var cx = 70 + i * 140;
      s.appendChild(C(cx, 80, 46, { f: PANEL, c: ACC, w: 2.5 }));
      s.appendChild(T(cx, 85, x[0], { a: "middle", s: 14, c: INK, w: 700 }));
      s.appendChild(T(cx, 150, x[1], { a: "middle", s: 12 }));
      s.appendChild(P("M" + (cx - 14) + " 190 l10 10 l20 -22", { c: OK, w: 3 }));
    });
    s.appendChild(T(350, 245, "All five yes: a hot prospect. Some no: warm or cold.", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };

  /* Module 3 */
  CE.figs["sales-basics-precall"] = function () {
    var s = svg(620, 330, "A one-page precall planning worksheet");
    s.appendChild(R(40, 14, 540, 302, { f: PANEL, c: INK, w: 3, r: 10 }));
    s.appendChild(T(310, 46, "PRECALL PLAN", { a: "middle", s: 18, c: ACC, w: 700 }));
    var rows = ["Company: size, locations, news, finances", "Customers: who buys from them, reviews", "Buying situation: new, rebuy, current supplier", "Contact: role, background, problem to solve", "Objective (SMART): ... by the end of the call", "Benefit statements: general and specific", "Questions to ask and likely objections"];
    rows.forEach(function (r, i) { s.appendChild(L(60, 80 + i * 32, 560, 80 + i * 32, LINE, 1)); s.appendChild(T(64, 72 + i * 32, r, { s: 13, c: INK, w: 500 })); });
    return s;
  };
  CE.figs["sales-basics-objections"] = function () {
    var s = svg(700, 300, "A loop for handling an objection");
    var steps = ["Listen", "Pause", "Restate", "Ask", "Evidence", "Check"];
    steps.forEach(function (n, i) {
      var a = -Math.PI / 2 + i * Math.PI * 2 / 6, cx = 350 + 150 * Math.cos(a), cy = 140 + 100 * Math.sin(a);
      s.appendChild(C(cx, cy, 36, { f: PANEL, c: i === 5 ? OK : ACC, w: 2.5 }));
      s.appendChild(T(cx, cy + 5, n, { a: "middle", s: 13, c: INK, w: 700 }));
    });
    s.appendChild(T(350, 135, "Trial close", { a: "middle", s: 15, c: OK, w: 700 }));
    s.appendChild(T(350, 155, "then proceed or repeat", { a: "middle", s: 12 }));
    s.appendChild(T(350, 288, "Respond, don't react: never argue, never lie", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };

  /* Module 4 */
  CE.figs["sales-basics-prep"] = function () {
    var s = svg(640, 300, "A pre-presentation checklist");
    var items = ["Objectives written (SMART)", "Agenda and slides ready (10 or fewer)", "Samples, handouts, contract packed", "Equipment tested, backup printed", "Route, parking, arrive early", "Attendees and roles researched (lawfully)"];
    items.forEach(function (t, i) {
      var y = 20 + i * 44;
      s.appendChild(R(40, y, 30, 30, { f: PANEL, c: OK, w: 2.5, r: 5 })); s.appendChild(P("M47 " + (y + 16) + " l7 8 l12 -16", { c: OK, w: 3 }));
      s.appendChild(T(86, y + 21, t, { s: 14, c: INK, w: 500 }));
    });
    return s;
  };
  CE.figs["sales-basics-spin"] = function () {
    var s = svg(680, 320, "The SPIN question sequence");
    var q = [["S", "Situation", "Where are you now?"], ["P", "Problem", "What is not working?"], ["I", "Implication", "What does that cost you?"], ["N", "Need-payoff", "How would a fix help?"]];
    q.forEach(function (x, i) {
      var y = 14 + i * 76;
      s.appendChild(R(30, y, 620, 66, { f: PANEL, c: ACC, w: 2.5, r: 10 }));
      s.appendChild(C(80, y + 33, 24, { f: ACC, c: ACC, w: 1 })); s.appendChild(T(80, y + 40, x[0], { a: "middle", s: 20, c: "#000", w: 700 }));
      s.appendChild(T(130, y + 28, x[1], { s: 16, c: INK, w: 700 }));
      s.appendChild(T(130, y + 50, x[2], { s: 13 }));
      if (i < 3) s.appendChild(arrow(620, y + 66, 620, y + 76, MUTED));
    });
    return s;
  };
  CE.figs["sales-basics-roi"] = function () {
    var s = svg(660, 320, "Cumulative savings versus a 3000 dollar cost over five years");
    var x0 = 80, y0 = 270, w = 520, mx = 5500;
    function Y(v) { return y0 - 220 * v / mx; }
    for (var g = 0; g <= 5000; g += 1000) { s.appendChild(L(x0, Y(g), x0 + w, Y(g), LINE, 1)); s.appendChild(T(x0 - 8, Y(g) + 4, "$" + g, { a: "end", s: 11 })); }
    for (var yr = 1; yr <= 5; yr++) {
      var bx = x0 + (yr - 1) * 100 + 20, v = yr * 1000;
      s.appendChild(R(bx, Y(v), 60, y0 - Y(v), { f: v >= 3000 ? OK : ACC, c: v >= 3000 ? OK : ACC, w: 1, r: 3 }));
      s.appendChild(T(bx + 30, y0 + 18, "Year " + yr, { a: "middle", s: 12, c: INK }));
      s.appendChild(T(bx + 30, Y(v) - 6, "$" + v, { a: "middle", s: 12, c: INK, w: 700 }));
    }
    s.appendChild(L(x0, Y(3000), x0 + w, Y(3000), BAD, 2.5, "6 4")); s.appendChild(T(x0 + 6, Y(3000) - 6, "Cost $3,000", { s: 12, c: BAD, w: 700, halo: true }));
    s.appendChild(T(330, 312, "Break-even at year 3; net benefit $2,000 and ROI about 67% by year 5 (text's example)", { a: "middle", s: 12 }));
    return s;
  };

  /* Module 5/6 */
  CE.figs["sales-basics-ethics"] = function () {
    var s = svg(660, 260, "A quick ethics check: honest, legal, within policy, front-page test");
    var q = [["Honest?", "Nothing hidden or false"], ["Legal?", "Rules for this customer"], ["Policy?", "Within company rules"], ["Paper test?", "Fine on the front page"]];
    q.forEach(function (x, i) {
      var cx = 85 + i * 163;
      s.appendChild(R(cx - 72, 30, 144, 110, { f: PANEL, c: ACC, w: 2.5, r: 10 }));
      s.appendChild(T(cx, 70, x[0], { a: "middle", s: 17, c: INK, w: 700 }));
      s.appendChild(T(cx, 98, x[1], { a: "middle", s: 12 }));
      s.appendChild(P("M" + (cx - 12) + " 124 l9 9 l17 -19", { c: OK, w: 3 }));
    });
    s.appendChild(T(330, 190, "Any no or not sure? Stop and ask a manager or take advice.", { a: "middle", s: 14, c: BAD, w: 700 }));
    return s;
  };
  CE.figs["sales-basics-contact"] = function () {
    var s = svg(700, 330, "Decision path for UK marketing calls and emails");
    box(s, 20, 14, 200, 56, ["Call or email?"], { s: 14, bold: true });
    s.appendChild(arrow(222, 42, 260, 42, INK));
    box(s, 262, 14, 190, 56, ["Is the recipient", "an individual or a company?"], { s: 12 });
    s.appendChild(arrow(357, 72, 357, 110, INK));
    box(s, 20, 112, 300, 70, ["Call: check TPS (individuals, sole traders)", "and CTPS (companies); your own do-not-call list"], { s: 12, c: ACC });
    box(s, 380, 112, 300, 70, ["Email to individual or sole trader:", "need consent, or soft opt-in for own customers"], { s: 12, c: ACC });
    box(s, 380, 200, 300, 60, ["Email to a company address: allowed;", "say who you are, give an opt-out"], { s: 12, c: OK });
    box(s, 20, 200, 300, 60, ["Named work email = personal data:", "UK GDPR also applies (consent or legitimate interests)"], { s: 12, c: WARN });
    s.appendChild(T(350, 296, "Always stop if someone objects. Check the current ICO pages.", { a: "middle", s: 13, c: INK, w: 700 }));
    return s;
  };
})();
