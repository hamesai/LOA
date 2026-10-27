/* Diagrams for Personal Training Fundamentals. Ids are prefixed with the course id. */
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

  CE.figs["personal-training-scope"] = function () {
    var s = svg(700, 310, "Scope of practice as three zones: coach, adapt with advice, refer");
    box(s, 20, 20, 210, 240, ["COACH", "(inside scope)", "", "Screen and record", "Set goals with client", "Write and progress", "exercise programmes", "Teach technique", "General healthy-eating", "information"], { c: OK, s: 13, bold: true });
    box(s, 245, 20, 210, 240, ["ADAPT AND CHECK", "(clearance or specialist", "input first)", "", "Known cardiac,", "metabolic or renal", "disease", "Pregnancy, disability,", "frailty in older age"], { c: WARN, s: 13, bold: true });
    box(s, 470, 20, 210, 240, ["REFER OUT", "(outside scope)", "", "New symptoms: chest", "pain, dizziness,", "breathlessness", "Diagnosing injury", "or illness", "Diets for medical", "conditions"], { c: BAD, s: 13, bold: true });
    s.appendChild(arrow(235, 285, 465, 285, MUTED));
    s.appendChild(T(350, 303, "more risk, more need for a health professional (our framing)", { a: "middle", s: 12, c: MUTED }));
    return s;
  };

  CE.figs["personal-training-who"] = function () {
    var s = svg(700, 260, "WHO adult weekly aerobic activity range in minutes: moderate 150 to 300, vigorous 75 to 150");
    var x0 = 130, k = 1.7;
    s.appendChild(T(20, 70, "Moderate", { s: 14, c: INK, w: 600 })); s.appendChild(T(20, 88, "intensity", { s: 12 }));
    s.appendChild(R(x0, 50, 150 * k, 46, { f: PANEL, c: ACC, r: 4 })); s.appendChild(R(x0 + 150 * k, 50, 150 * k, 46, { f: "none", c: ACC, r: 4, w: 1.5 }));
    s.appendChild(T(x0 + 75 * k, 78, "150 min", { a: "middle", s: 13, c: INK, w: 600 })); s.appendChild(T(x0 + 225 * k, 78, "up to 300 min", { a: "middle", s: 13, c: INK }));
    s.appendChild(T(20, 150, "Vigorous", { s: 14, c: INK, w: 600 })); s.appendChild(T(20, 168, "intensity", { s: 12 }));
    s.appendChild(R(x0, 130, 75 * k * 2, 46, { f: PANEL, c: OK, r: 4 })); s.appendChild(R(x0 + 150 * k, 130, 75 * k * 2, 46, { f: "none", c: OK, r: 4, w: 1.5 }));
    s.appendChild(T(x0 + 75 * k, 158, "75 min", { a: "middle", s: 13, c: INK, w: 600 })); s.appendChild(T(x0 + 225 * k, 158, "up to 150 min", { a: "middle", s: 13, c: INK }));
    s.appendChild(T(350, 118, "one vigorous minute counts for about two moderate ones (our inference from 75 : 150)", { a: "middle", s: 11 }));
    s.appendChild(T(350, 225, "Plus muscle-strengthening at moderate or greater intensity on 2 or more days a week", { a: "middle", s: 13, c: INK, w: 600 }));
    return s;
  };

  CE.figs["personal-training-screen"] = function () {
    var s = svg(700, 360, "Screening flow from the 2015 ACSM algorithm: current exercise, disease or symptoms, then clearance or go ahead");
    box(s, 235, 10, 230, 44, ["Regularly exercising?", "30 min x 3 days x 3 months"], { s: 13, bold: true });
    box(s, 20, 90, 250, 56, ["NOT exercising now", "Known CV, metabolic or renal", "disease, or any symptoms?"], { s: 12 });
    box(s, 430, 90, 250, 56, ["EXERCISING now", "Known disease or any", "symptoms?"], { s: 12 });
    s.appendChild(arrow(300, 54, 170, 88, ACC)); s.appendChild(arrow(400, 54, 540, 88, ACC));
    box(s, 10, 200, 160, 70, ["No disease, no symptoms", "Start light to moderate,", "progress gradually"], { c: OK, s: 12 });
    box(s, 180, 200, 160, 70, ["Disease or symptoms", "Medical clearance", "before any exercise"], { c: BAD, s: 12 });
    box(s, 365, 200, 150, 70, ["No disease, no symptoms", "Continue moderate", "or vigorous"], { c: OK, s: 11 });
    box(s, 525, 200, 170, 70, ["Disease, no symptoms", "Light to moderate OK;", "clearance before vigorous"], { c: WARN, s: 11 });
    s.appendChild(arrow(100, 146, 90, 198, MUTED)); s.appendChild(arrow(200, 146, 250, 198, MUTED)); s.appendChild(arrow(500, 146, 440, 198, MUTED)); s.appendChild(arrow(610, 146, 610, 198, MUTED));
    s.appendChild(T(350, 305, "Symptoms while exercising: clearance before continuing. Paraphrased from the 2015 ACSM algorithm.", { a: "middle", s: 12, c: INK }));
    s.appendChild(T(350, 328, "Symptoms: chest or arm pain, dizziness or fainting, breathlessness on mild effort, ankle swelling, palpitations.", { a: "middle", s: 11 }));
    return s;
  };

  CE.figs["personal-training-sdt"] = function () {
    var s = svg(700, 300, "Autonomy support satisfies three needs, which builds autonomous motivation and better health behaviour");
    box(s, 20, 110, 150, 70, ["Coach supports", "client autonomy"], { s: 14, bold: true });
    box(s, 235, 20, 170, 56, ["Autonomy", "my choice"], { c: ACC, s: 13 });
    box(s, 235, 122, 170, 56, ["Competence", "I can do it"], { c: ACC, s: 13 });
    box(s, 235, 224, 170, 56, ["Relatedness", "someone is with me"], { c: ACC, s: 13 });
    box(s, 480, 110, 200, 70, ["Autonomous motivation,", "more activity,", "better health"], { c: OK, s: 13, bold: true });
    [48, 150, 252].forEach(function (y) { s.appendChild(arrow(172, 145, 233, y, MUTED)); s.appendChild(arrow(407, y, 478, 145, MUTED)); });
    return s;
  };

  CE.figs["personal-training-goals"] = function () {
    var s = svg(700, 290, "Three goal levels: outcome, performance, process");
    var rows = [["OUTCOME", "What you want to happen", "Lose 6 kg; look leaner", "Partly out of your control", BAD], ["PERFORMANCE", "A standard you can measure", "Squat 40 kg for 8 reps", "Mostly in your control", WARN], ["PROCESS", "What you do each week", "Train 3 days; 3 sets of each lift", "Fully in your control", OK]];
    rows.forEach(function (r, i) {
      var y = 14 + i * 84;
      s.appendChild(R(20, y, 660, 72, { f: PANEL, c: r[4], r: 8, w: 2.5 }));
      s.appendChild(T(36, y + 28, r[0], { s: 15, c: INK, w: 700 })); s.appendChild(T(36, y + 50, r[1], { s: 12 }));
      s.appendChild(T(290, y + 28, "Example: " + r[2], { s: 13, c: INK })); s.appendChild(T(290, y + 50, r[3], { s: 12, c: r[4], w: 600 }));
    });
    s.appendChild(T(350, 280, "Our framing: anchor weekly coaching on process goals.", { a: "middle", s: 12, c: INK }));
    return s;
  };

  CE.figs["personal-training-dose"] = function () {
    var s = svg(700, 310, "Schematic of how benefit changes with load for strength, power and jump outcomes; shape only, not data");
    s.appendChild(L(60, 250, 660, 250, MUTED, 1.5)); s.appendChild(L(60, 250, 60, 30, MUTED, 1.5));
    s.appendChild(T(360, 275, "Load: light (left) to heavy (right)", { a: "middle", s: 12 })); s.appendChild(T(14, 24, "Gain", { s: 12 }));
    s.appendChild(P("M60 215 Q300 100 420 80 Q560 66 650 62", { c: ACC, w: 3 })); s.appendChild(T(430, 52, "Strength: keeps rising, slows near 70%", { s: 12, c: ACC, w: 600 }));
    s.appendChild(P("M60 70 Q200 66 300 120 Q450 190 650 232", { c: WARN, w: 3 })); s.appendChild(T(70, 52, "Jump: best near 30% of max, falls with load", { s: 12, c: WARN, w: 600 }));
    s.appendChild(P("M60 232 Q200 120 300 112 Q430 112 650 232", { c: OK, w: 3, d: "6 4" })); s.appendChild(T(300, 142, "Power: peak around 40 to 70%", { s: 12, c: OK, w: 600, halo: true }));
    s.appendChild(T(350, 302, "Outline of the profiles described by Swinton et al. 2024; the curves are illustrative.", { a: "middle", s: 11 }));
    return s;
  };

  CE.figs["personal-training-rir"] = function () {
    var s = svg(700, 210, "Repetitions in reserve scale from 0 reps left (failure) to 5 or more left");
    var labs = [["0", "Failure", BAD], ["1", "1 left", BAD], ["2", "2 left", WARN], ["3", "3 left", WARN], ["4", "4 left", OK], ["5+", "5+ left", OK]];
    labs.forEach(function (l, i) {
      var x = 20 + i * 110;
      s.appendChild(R(x, 30, 100, 80, { f: PANEL, c: l[2], r: 8, w: 2.5 }));
      s.appendChild(T(x + 50, 70, l[0], { a: "middle", s: 26, c: INK, w: 700 })); s.appendChild(T(x + 50, 94, l[1], { a: "middle", s: 12, c: INK }));
    });
    s.appendChild(T(350, 145, "In the 2024 meta-regression, muscle growth rose as sets ended nearer failure; strength gains were similar across a wide range.", { a: "middle", s: 11, c: INK }));
    s.appendChild(T(350, 168, "Beginners tend to misjudge reps left (our inference), so check against bar speed and form.", { a: "middle", s: 11 }));
    return s;
  };

  CE.figs["personal-training-session"] = function () {
    var s = svg(700, 190, "A 60 minute session as five blocks");
    var b = [["Check-in", "5 min", 55], ["Warm-up", "10 min", 110], ["Main lifts", "25 min", 230], ["Accessory", "15 min", 150], ["Wrap-up", "5 min", 55]], x = 20;
    b.forEach(function (r, i) {
      var w = r[2] * 1.15 - 4;
      s.appendChild(R(x, 30, w, 90, { f: PANEL, c: i === 2 ? ACC : INK, r: 6, w: 2.5 }));
      s.appendChild(T(x + w / 2, 70, r[0], { a: "middle", s: 12, c: INK, w: 600 })); s.appendChild(T(x + w / 2, 94, r[1], { a: "middle", s: 12 }));
      x += r[2] * 1.15;
    });
    s.appendChild(T(350, 160, "Illustrative split of 60 minutes: our design choice, not a research finding.", { a: "middle", s: 12 }));
    return s;
  };

  CE.figs["personal-training-progress"] = function () {
    var s = svg(700, 250, "Double progression: when every set hits the top of the rep range, add load and restart at the bottom");
    box(s, 15, 70, 150, 60, ["3 x 8-12 at 20 kg", "week 1: 8, 8, 7"], { s: 12 });
    box(s, 205, 70, 150, 60, ["Add reps", "week 3: 11, 10, 10"], { s: 12 });
    box(s, 395, 70, 130, 60, ["Top of range", "12, 12, 12"], { c: OK, s: 12 });
    box(s, 560, 70, 125, 60, ["Add load", "22.5 kg x 8-9"], { c: ACC, s: 12 });
    [[167, 205], [357, 395], [527, 560]].forEach(function (p) { s.appendChild(arrow(p[0], 100, p[1] - 2, 100, MUTED)); });
    s.appendChild(P("M622 134 Q622 190 90 190 Q90 190 90 134", { c: OK, w: 2.5, d: "7 5" }));
    s.appendChild(T(350, 182, "restart: reps dip, then climb again (numbers illustrative)", { a: "middle", s: 12, c: INK, w: 600, halo: true }));
    return s;
  };

  CE.figs["personal-training-protein"] = function () {
    var s = svg(700, 220, "Daily protein intake scale in grams per kilogram: 0.8 allowance, 1.03 low CI, 1.62 break point, 2.2 high CI");
    var x0 = 60, k = 250;
    s.appendChild(L(x0, 110, x0 + 2.4 * k, 110, MUTED, 2));
    [[0.8, "0.8", "RDA (US/Canada)", BAD, 0], [1.03, "1.03", "CI low", MUTED, 1], [1.62, "1.62", "break point", OK, 0], [2.2, "2.2", "CI high", WARN, 1]].forEach(function (m) {
      var x = x0 + m[0] * k;
      s.appendChild(L(x, 90, x, 130, m[3], 3)); s.appendChild(T(x, 76, m[1] + " g/kg", { a: "middle", s: 13, c: INK, w: 700 })); s.appendChild(T(x, 152 + m[4] * 18, m[2], { a: "middle", s: 12, c: m[3], w: 600 }));
    });
    s.appendChild(T(350, 205, "Morton et al. 2018: gains plateaued near 1.62 g/kg/day (95% CI 1.03 to 2.20).", { a: "middle", s: 12, c: INK }));
    return s;
  };
})();
