/* Calculators for Personal Training Fundamentals. Registered per module key. */
(function () {
  "use strict";
  var T = (window.COURSE_TOOLS = window.COURSE_TOOLS || {});
  function r1(x) { return Math.round(x * 10) / 10; }

  T["personal-training-1"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var mod = inp("number", 90, { min: "0", step: "5" }), vig = inp("number", 30, { min: "0", step: "5" }), days = inp("number", 2, { min: "0", max: "7", step: "1" });
    var out = h("div", { class: "tout" }), eq = 0;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add minutes to ledger", onclick: function () { U.logMetric(m, "Moderate-equivalent minutes", eq, "min/week", "Activity tool"); btn.textContent = "Added"; } });
    function calc() {
      out.textContent = ""; btn.textContent = "Add minutes to ledger";
      var M = Number(mod.value), V = Number(vig.value), D = Number(days.value);
      if (!(M >= 0) || !(V >= 0)) { out.appendChild(h("p", {}, "Enter minutes of zero or more.")); return; }
      eq = M + 2 * V;
      var status = eq >= 300 ? "above the 300-minute upper end of the range (more can help, but benefits are smaller)" : eq >= 150 ? "within the 150 to 300 range" : "below the 150-minute target by " + (150 - eq) + " minutes";
      out.appendChild(h("p", {}, h("strong", { text: "Moderate-equivalent minutes: " }), eq + " (" + M + " + 2 x " + V + ")"));
      out.appendChild(h("p", {}, h("strong", { text: "Aerobic: " }), status + "."));
      out.appendChild(h("p", {}, h("strong", { text: "Strength days: " }), D >= 2 ? D + " meets the 2 or more days target." : D + " is below the 2 days target."));
      out.appendChild(h("p", { style: "color:var(--muted)" }, "WHO 2020 ranges: 150 to 300 moderate or 75 to 150 vigorous minutes. The 2-to-1 trade is our inference, not a WHO rule."));
    }
    [mod, vig, days].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Weekly activity check", "Convert a week of activity into moderate-equivalent minutes and compare it with the WHO adult targets. Illustrative numbers shown.", [fld("Moderate minutes per week", mod), fld("Vigorous minutes per week", vig), fld("Strength days per week", days)], out, btn));
  };

  T["personal-training-5"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var rows = [["Quads", 3, 3, 3], ["Hamstrings and glutes", 2, 2, 2], ["Chest and front shoulder", 3, 3, 3], ["Back", 3, 3, 3], ["Trunk", 2, 2, 2]];
    var fields = [], ins = rows.map(function (rw) { var a = inp("number", rw[1], { min: "0", step: "1" }), b = inp("number", rw[2], { min: "0", step: "1" }), c = inp("number", rw[3], { min: "0", step: "1" }); fields.push(fld(rw[0] + ": Day A sets", a), fld(rw[0] + ": Day B sets", b)); return [a, b, c]; });
    var daysA = inp("number", 2, { min: "0", step: "1" }), daysB = inp("number", 1, { min: "0", step: "1" });
    fields.push(fld("Day A sessions per week", daysA), fld("Day B sessions per week", daysB));
    var out = h("div", { class: "tout" }), total = 0;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add sets to ledger", onclick: function () { U.logMetric(m, "Hard sets", total, "count", "Set counter"); btn.textContent = "Added"; } });
    function calc() {
      out.textContent = ""; btn.textContent = "Add sets to ledger"; total = 0;
      var A = Number(daysA.value), B = Number(daysB.value);
      rows.forEach(function (rw, i) {
        var a = Number(ins[i][0].value), b = Number(ins[i][1].value), wk = a * A + b * B; total += wk;
        out.appendChild(h("p", {}, h("strong", { text: rw[0] + ": " }), a + " x " + A + " + " + b + " x " + B + " = " + wk + " sets"));
      });
      out.appendChild(h("p", {}, h("strong", { text: "Total hard sets per week: " }), String(total)));
      out.appendChild(h("p", { style: "color:var(--muted)" }, "Sets per muscle group drive growth in the meta-regression (about 0.37% more size per extra weekly set, abstract only). Group averages, not promises."));
    }
    ins.forEach(function (t) { t.forEach(function (e) { e.addEventListener("input", calc); }); }); [daysA, daysB].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Weekly set counter", "Count hard sets per muscle group for a Day A and Day B plan. Defaults are the Module 5 template with two Day A sessions and one Day B.", fields, out, btn));
  };

  T["personal-training-6"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var kg = inp("number", 70, { min: "30", step: "1" }), meals = inp("number", 4, { min: "1", max: "8", step: "1" });
    var out = h("div", { class: "tout" }), perkg = 0;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add 1.6 g/kg to ledger", onclick: function () { U.logMetric(m, "Protein intake", 1.6, "g/kg/day", "Protein tool"); btn.textContent = "Added"; } });
    function calc() {
      out.textContent = ""; btn.textContent = "Add 1.6 g/kg to ledger";
      var K = Number(kg.value), N = Number(meals.value);
      if (!(K > 0) || !(N > 0)) { out.appendChild(h("p", {}, "Enter a body weight and a meal count.")); return; }
      [["Recommended allowance (0.8 g/kg)", 0.8 * K], ["Low end of interval (1.03 g/kg)", 1.03 * K], ["Break-point estimate (1.6 g/kg)", 1.6 * K], ["High end of interval (2.2 g/kg)", 2.2 * K]].forEach(function (rw) { out.appendChild(h("p", {}, h("strong", { text: rw[0] + ": " }), r1(rw[1]) + " g a day")); });
      out.appendChild(h("p", {}, h("strong", { text: "Per meal at 1.6 g/kg over " + N + " meals: " }), r1(1.6 * K / N) + " g"));
      out.appendChild(h("p", { style: "color:var(--muted)" }, "Morton et al. 2018: gains plateaued near 1.62 g/kg/day (95% CI 1.03 to 2.20). Healthy adults not cutting calories. Share as information; refer medical diets."));
    }
    [kg, meals].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Protein range", "Daily protein from body weight using the meta-analysis figures. For information only, not a diet prescription.", [fld("Body weight (kg)", kg), fld("Meals per day", meals)], out, btn));
  };
})();
