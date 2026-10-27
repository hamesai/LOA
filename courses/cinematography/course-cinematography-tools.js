/* Calculators for Cinematography: DSLR and analog film. Registered per module key. Read window.CourseUI inside the tool functions. */
(function () {
  "use strict";
  var T = (window.COURSE_TOOLS = window.COURSE_TOOLS || {});
  function num(e) { var v = Number(e.value); return isFinite(v) ? v : 0; }
  function r(x, d) { var p = Math.pow(10, d == null ? 2 : d); return Math.round((x + 1e-9) * p) / p; }
  function rows(out, list) { out.textContent = ""; var U = window.CourseUI; list.forEach(function (x) { out.appendChild(U.h("p", {}, U.h("strong", { text: x[0] + ": " }), x[1])); }); }
  function money(x) { return "£" + (Math.round((x + 1e-9) * 100) / 100).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  /* Module 1: shutter angle, and stops with ND */
  T["cinematography-1"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var fps = inp("number", 24, { min: "1", step: "1" }), angle = inp("number", 180, { min: "1", max: "360", step: "1" }), speed = inp("number", 50, { min: "1", step: "1" });
    var out = h("div", { class: "tout" });
    function calc() {
      var F = num(fps), A = num(angle), S = num(speed);
      rows(out, [["Shutter speed for the angle", F > 0 && A > 0 ? "1/" + r(F * 360 / A, 1) + " s" : "n/a"], ["Angle for 1/" + S + " s", F > 0 && S > 0 ? r(360 * F / S, 1) + "°" : "n/a"], ["Frame interval", F > 0 ? "1/" + F + " s" : "n/a"]]);
    }
    [fps, angle, speed].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Shutter angle", "Angle ÷ 360 = exposure time ÷ frame interval. Start values are the Module 1 example (24 fps, 180°, 1/50 s).", [fld("Frame rate (fps)", fps), fld("Shutter angle (°)", angle), fld("Camera shutter speed (1/x s)", speed)], out));

    var from = inp("number", 11, { min: "1", step: "0.1" }), to = inp("number", 2.8, { min: "0.5", step: "0.1" });
    var out2 = h("div", { class: "tout" });
    function calc2() {
      var a = num(from), b = num(to);
      if (a <= 0 || b <= 0) { rows(out2, [["Stops", "n/a"]]); return; }
      var stops = 2 * Math.log(a / b) / Math.log(2), dens = stops * 0.3;
      rows(out2, [["Stops of light gained moving from f/" + a + " to f/" + b, r(stops, 2)], ["ND density to cancel it", r(dens, 2)], ["Light to remove", "1/" + r(Math.pow(2, Math.abs(stops)), 1)]]);
    }
    [from, to].forEach(function (e) { e.addEventListener("input", calc2); }); calc2();
    body.appendChild(toolCard("Stops and ND", "How many stops between two f-numbers, and the ND density that removes them (0.3 is one stop). Start values are the Module 1 bright-day example (illustrative).", [fld("Metered f-number", from), fld("Wanted f-number", to)], out2));
  };

  /* Module 3: depth of field and angle of view */
  T["cinematography-3"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var f = inp("number", 50, { min: "4", step: "1" }), N = inp("number", 2, { min: "0.7", step: "0.1" }), u = inp("number", 3, { min: "0.2", step: "0.1" }), c = inp("number", 0.03, { min: "0.003", step: "0.005" }), w = inp("number", 36, { min: "4", step: "0.5" });
    var out = h("div", { class: "tout" });
    function calc() {
      var F = num(f), n = num(N), U_ = num(u) * 1000, C_ = num(c), W = num(w);
      if (F <= 0 || n <= 0 || U_ <= 0 || C_ <= 0 || W <= 0) { rows(out, [["Result", "Check the inputs"]]); return; }
      var dof = 2 * U_ * U_ * n * C_ / (F * F), aov = 2 * Math.atan(W / 2 / F) * 180 / Math.PI;
      rows(out, [["Approximate depth of field", r(dof / 10, 1) + " cm"], ["Horizontal angle of view", r(aov, 1) + "°"], ["Full-frame equivalent focal length", r(F * 36 / W, 1) + " mm"]]);
    }
    [f, N, u, c, w].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Depth of field and angle of view", "DOF ≈ 2 u² N c ÷ f² and angle = 2 × arctan(w ÷ 2f). The circle of confusion c = 0.03 mm is an illustrative full-frame value; use a smaller number for a smaller sensor. Start values are the Module 3 example.", [fld("Focal length (mm)", f), fld("f-number", N), fld("Subject distance (m)", u), fld("Circle of confusion (mm)", c), fld("Sensor width (mm)", w)], out));
  };

  /* Module 4: light level and Kodak exposure table */
  T["cinematography-4"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var l1 = inp("number", 160, { min: "0", step: "5" }), d1 = inp("number", 2, { min: "0.1", step: "0.1" }), d2 = inp("number", 4, { min: "0.1", step: "0.1" });
    var out = h("div", { class: "tout" });
    function calc() {
      var L1 = num(l1), D1 = num(d1), D2 = num(d2);
      if (D1 <= 0 || D2 <= 0) { rows(out, [["Result", "Check the distances"]]); return; }
      var L2 = L1 * (D1 / D2) * (D1 / D2);
      rows(out, [["Light at the new distance", r(L2, 1) + " fc"], ["Stops change", r(2 * Math.log(D2 / D1) / Math.log(2), 2) + " darker (positive) or brighter (negative)"]]);
    }
    [l1, d1, d2].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Inverse-square light", "Illumination falls with the square of the distance. Start values are the Module 4 example (160 fc at 2 m).", [fld("Reading at first distance (fc)", l1), fld("First distance (m)", d1), fld("New distance (m)", d2)], out));

    var ei = inp("number", 500, { min: "6", step: "10" }), ap = inp("number", 2.8, { min: "0.7", step: "0.1" });
    var out2 = h("div", { class: "tout" });
    function calc2() {
      var E = num(ei), A = num(ap);
      if (E <= 0 || A <= 0) { rows(out2, [["Result", "Check the inputs"]]); return; }
      rows(out2, [["Footcandles needed at f/" + A, r(10 * Math.pow(A / 2, 2) * 500 / E, 1) + " fc"]]);
    }
    [ei, ap].forEach(function (e) { e.addEventListener("input", calc2); }); calc2();
    body.appendChild(toolCard("Footcandles for an exposure", "Estimate from Kodak's table for EI 500 at 24 fps and a 180° shutter (10 fc at f/2, doubling each stop), scaled for other exposure indexes. It is an estimate for average subjects.", [fld("Exposure index (EI or ISO)", ei), fld("Aperture (f-number)", ap)], out2));
  };

  /* Module 6: roll length and cost per finished minute */
  T["cinematography-6"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var frames = inp("number", 3600, { min: "1", step: "100" }), fps = inp("number", 18, { min: "1", step: "1" }), cost = inp("number", 60, { min: "0", step: "1" }), ratio = inp("number", 3, { min: "1", step: "0.5" });
    var out = h("div", { class: "tout" }), val = null;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add to ledger", onclick: function () { if (val != null) { U.logMetric(m, "Cost per finished minute", val, "£", "Roll calculator"); btn.textContent = "Added"; } } });
    function calc() {
      btn.textContent = "Add to ledger"; val = null;
      var Fr = num(frames), F = num(fps), C = num(cost), R = num(ratio);
      if (Fr <= 0 || F <= 0) { rows(out, [["Result", "Check the inputs"]]); return; }
      var sec = Fr / F, min = sec / 60;
      val = r(C / min * R, 2);
      rows(out, [["Run time of the roll", r(sec, 1) + " s (" + Math.floor(sec / 60) + " min " + Math.round(sec % 60) + " s)"], ["Cost per minute shot", money(C / min)], ["Cost per finished minute at " + R + ":1", money(val)]]);
    }
    [frames, fps, cost, ratio].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Roll length and cost", "Run time is frames ÷ fps. Super 8's 50 ft cartridge holds about 3,600 frames; 35 mm runs 16 frames per foot. The cost is an illustrative £60 for stock, processing and scan together: replace it with real quotes.", [fld("Frames on the roll", frames), fld("Frame rate (fps)", fps), fld("Stock + processing + scan (£)", cost), fld("Shooting ratio (shot : used)", ratio)], out, btn));
  };
})();
