/* Calculators for Sales fundamentals for beginners. Registered per module key. */
(function () {
  "use strict";
  var T = (window.COURSE_TOOLS = window.COURSE_TOOLS || {});
  function pct(a, b) { return b > 0 ? Math.round(a / b * 1000) / 10 : null; }
  function money(x) { return (Math.round(x * 100) / 100).toLocaleString("en-GB", { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }

  T["sales-basics-2"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var leads = inp("number", 150, { min: "0", step: "1" }), qual = inp("number", 45, { min: "0", step: "1" }), pres = inp("number", 30, { min: "0", step: "1" }), won = inp("number", 6, { min: "0", step: "1" }), target = inp("number", 12, { min: "1", step: "1" });
    var out = h("div", { class: "tout" }), logs = null;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add leads and prospects to ledger", onclick: function () { if (logs) { U.logMetric(m, "Leads found", logs.l, "count", "Funnel tool"); U.logMetric(m, "Qualified prospects", logs.q, "count", "Funnel tool"); btn.textContent = "Added"; } } });
    function calc() {
      out.textContent = ""; logs = null; btn.textContent = "Add leads and prospects to ledger";
      var L = Number(leads.value), Q = Number(qual.value), P = Number(pres.value), W = Number(won.value), N = Number(target.value);
      if (!(L > 0) || Q > L || P > Q || W > P) { out.appendChild(h("p", {}, "Check the numbers: each stage cannot exceed the one before it.")); return; }
      logs = { l: L, q: Q };
      [["Qualified", pct(Q, L) + "% of leads"], ["Presented", pct(P, Q) + "% of qualified"], ["Won", pct(W, P) + "% of presentations"], ["Overall", pct(W, L) + "% of leads"]].forEach(function (r) { out.appendChild(h("p", {}, h("strong", { text: r[0] + ": " }), r[1])); });
      if (W > 0) out.appendChild(h("p", {}, h("strong", { text: "To win " + N + " at these rates you need about " }), Math.ceil(N / (W / L)) + " leads."));
    }
    [leads, qual, pres, won, target].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Funnel calculator", "Conversion at each stage of your own funnel. Replace the illustrative numbers with yours.", [fld("Leads", leads), fld("Qualified prospects", qual), fld("Presentations", pres), fld("Sales won", won), fld("Target sales", target)], out, btn));
  };

  T["sales-basics-4"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var cost = inp("number", 3000, { min: "0", step: "100" }), save = inp("number", 1000, { min: "0", step: "50" }), yrs = inp("number", 5, { min: "1", step: "1" });
    var out = h("div", { class: "tout" });
    function calc() {
      out.textContent = "";
      var C = Number(cost.value), S = Number(save.value), Y = Number(yrs.value);
      if (!(C > 0) || !(S > 0) || !(Y > 0)) { out.appendChild(h("p", {}, "Enter a cost, an annual saving and a number of years.")); return; }
      var total = S * Y, net = total - C, roi = Math.round(net / C * 1000) / 10, be = C / S;
      [["Total savings", money(total)], ["Net benefit", money(net)], ["ROI", roi + "%"], ["Break-even", (Math.round(be * 10) / 10) + " years"]].forEach(function (r) { out.appendChild(h("p", {}, h("strong", { text: r[0] + ": " }), r[1])); });
      out.appendChild(h("p", { style: "color:var(--muted)" }, "ROI = (savings − cost) ÷ cost × 100. Show your inputs and assumptions to the buyer."));
    }
    [cost, save, yrs].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Cost-benefit and ROI", "The textbook's dishwasher example: cost 3,000, saving 1,000 a year, five years. Use your own figures and currency.", [fld("Cost", cost), fld("Saving per year", save), fld("Years", yrs)], out));
  };

  T["sales-basics-5"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var list = inp("number", 1200, { min: "0", step: "10" }), floor = inp("number", 1000, { min: "0", step: "10" }), ask = inp("number", 10, { min: "0", max: "100", step: "1" });
    var out = h("div", { class: "tout" });
    function calc() {
      out.textContent = "";
      var Lp = Number(list.value), F = Number(floor.value), A = Number(ask.value);
      if (!(Lp > 0) || F > Lp) { out.appendChild(h("p", {}, "The floor cannot be above the list price.")); return; }
      var price = Lp * (1 - A / 100), disc = Lp - price;
      out.appendChild(h("p", {}, h("strong", { text: "Price after " + A + "% off: " }), money(price) + " (discount " + money(disc) + ")."));
      out.appendChild(h("p", {}, price >= F ? "This is above your floor by " + money(price - F) + ". Offer it only in exchange for something: a longer term, a bigger order or faster payment." : "This is below your floor by " + money(F - price) + ". Do not accept it; offer value instead of price, or walk away."));
    }
    [list, floor, ask].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Concession check", "Check a discount request against your floor. Never concede without getting something back.", [fld("List price", list), fld("Your floor", floor), fld("Discount asked (%)", ask)], out));
    var calls = inp("number", 10, { min: "0", step: "1" }), booked = inp("number", 2, { min: "0", step: "1" }), o2 = h("p", { class: "tout" }), val = null;
    var b2 = h("button", { class: "btn ghost", type: "button", text: "Add to ledger", onclick: function () { if (val) { U.logMetric(m, "Calls made", val.c, "count", "Call log"); U.logMetric(m, "Meetings booked", val.b, "count", "Call log"); b2.textContent = "Added"; } } });
    function c2() { b2.textContent = "Add to ledger"; val = null; var c = Number(calls.value), b = Number(booked.value); if (!(c > 0) || b > c) { o2.textContent = "Booked meetings cannot exceed calls."; return; } val = { c: c, b: b }; o2.textContent = pct(b, c) + "% of calls led to a meeting. Count only people you were allowed to contact (Module 6)."; }
    [calls, booked].forEach(function (e) { e.addEventListener("input", c2); }); c2();
    body.appendChild(toolCard("Call log", "A simple call tally to build your own conversion data.", [fld("Calls made", calls), fld("Meetings booked", booked)], o2, b2));
  };
})();
