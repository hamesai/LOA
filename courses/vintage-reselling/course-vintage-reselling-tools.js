/* Calculators for Vintage reselling business (UK). Registered per module key. Read window.CourseUI inside the tool functions. */
(function () {
  "use strict";
  var T = (window.COURSE_TOOLS = window.COURSE_TOOLS || {});
  function money(x) { return "£" + (Math.round((x + 1e-9) * 100) / 100).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function num(e) { var v = Number(e.value); return isFinite(v) ? v : 0; }
  /* Fees: percentage of (item + postage charged), a fixed per-order fee, and a second percentage (regulatory). */
  function fees(total, pct, order, reg) { return total * pct / 100 + order + total * reg / 100; }

  T["vintage-reselling-2"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var sale = inp("number", 40, { min: "0", step: "0.5" }), ship = inp("number", 6, { min: "0", step: "0.5" }), pct = inp("number", 10.9, { min: "0", step: "0.1" }), order = inp("number", 0.4, { min: "0", step: "0.05" }), reg = inp("number", 0.35, { min: "0", step: "0.05" }), pcost = inp("number", 6.5, { min: "0", step: "0.1" }), pack = inp("number", 1.2, { min: "0", step: "0.1" }), target = inp("number", 15, { min: "0", step: "0.5" });
    var out = h("div", { class: "tout" });
    function calc() {
      out.textContent = "";
      var total = num(sale) + num(ship), f = fees(total, num(pct), num(order), num(reg)), net = total - f - num(pcost) - num(pack), ceil = net - num(target);
      [["Total received from buyer", money(total)], ["Fees", money(f)], ["Net after fees, postage and packing", money(net)], ["Price ceiling", money(ceil)]].forEach(function (r) { out.appendChild(h("p", {}, h("strong", { text: r[0] + ": " }), r[1])); });
      out.appendChild(h("p", { style: "color:var(--muted)" }, ceil > 0 ? "Offer below this and walk away above it. Check the fee rates on the platform's page today." : "Your costs and target leave nothing to spend. Change the price, the postage or the target."));
    }
    [sale, ship, pct, order, reg, pcost, pack, target].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Max buy price", "Work back from the expected sale to the most you can pay. Start values are the Module 2 worked example (illustrative). The percentages are those eBay UK listed for the Antiques category when read, so use your own category's rates.", [fld("Expected item price (£)", sale), fld("Postage charged to buyer (£)", ship), fld("Final value fee (%)", pct), fld("Per-order fee (£)", order), fld("Regulatory fee (%)", reg), fld("Postage you pay (£)", pcost), fld("Packaging (£)", pack), fld("Target profit (£)", target)], out));
  };

  T["vintage-reselling-5"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var cost = inp("number", 22, { min: "0", step: "0.5" }), sale = inp("number", 60, { min: "0", step: "0.5" }), ship = inp("number", 7, { min: "0", step: "0.5" }), pct = inp("number", 10.9, { min: "0", step: "0.1" }), order = inp("number", 0.4, { min: "0", step: "0.05" }), reg = inp("number", 0.35, { min: "0", step: "0.05" }), pcost = inp("number", 7, { min: "0", step: "0.1" }), pack = inp("number", 1.5, { min: "0", step: "0.1" }), mins = inp("number", 45, { min: "1", step: "5" });
    var out = h("div", { class: "tout" }), val = null;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add this sale to ledger", onclick: function () { if (val) { U.logMetric(m, "Items sold", 1, "count", "Profit calculator"); U.logMetric(m, "Revenue", val.total, "£", "Profit calculator"); U.logMetric(m, "Cost of goods", val.cost, "£", "Profit calculator"); U.logMetric(m, "Profit", val.profit, "£", "Profit calculator"); btn.textContent = "Added"; } } });
    function calc() {
      out.textContent = ""; val = null; btn.textContent = "Add this sale to ledger";
      var total = num(sale) + num(ship), f = fees(total, num(pct), num(order), num(reg)), profit = total - f - num(pcost) - num(pack) - num(cost);
      val = { total: Math.round(total * 100) / 100, cost: num(cost), profit: Math.round(profit * 100) / 100 };
      [["Total received", money(total)], ["Fees", money(f)], ["Profit", money(profit)], ["Margin on revenue", total > 0 ? (Math.round(profit / total * 1000) / 10) + "%" : "n/a"], ["Profit per hour", num(mins) > 0 ? money(profit / (num(mins) / 60)) : "n/a"]].forEach(function (r) { out.appendChild(h("p", {}, h("strong", { text: r[0] + ": " }), r[1])); });
    }
    [cost, sale, ship, pct, order, reg, pcost, pack, mins].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Profit calculator", "Real profit for one sale. Start values are the Module 5 worked example (illustrative). Replace them with your own and today's fees from the platform.", [fld("What you paid (£)", cost), fld("Item price (£)", sale), fld("Postage charged to buyer (£)", ship), fld("Final value fee (%)", pct), fld("Per-order fee (£)", order), fld("Regulatory fee (%)", reg), fld("Postage you pay (£)", pcost), fld("Packaging (£)", pack), fld("Minutes of work", mins)], out, btn));
  };

  T["vintage-reselling-6"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var gross = inp("number", 2400, { min: "0", step: "50" }), stock = inp("number", 1350, { min: "0", step: "50" }), fee = inp("number", 550, { min: "0", step: "10" }), rate = inp("number", 20, { min: "0", max: "100", step: "1" });
    var out = h("div", { class: "tout" });
    function calc() {
      out.textContent = "";
      var G = num(gross), costs = num(stock) + num(fee), byCosts = Math.max(G - costs, 0), byAllow = Math.max(G - 1000, 0), r = num(rate) / 100;
      [["Taxable profit using real costs", money(byCosts)], ["Taxable profit using the £1,000 allowance", money(byAllow)], ["Better method", byCosts <= byAllow ? "Real costs" : "Allowance"], ["Difference in taxable profit", money(Math.abs(byCosts - byAllow))], ["Tax difference at " + num(rate) + "% (illustrative rate)", money(Math.abs(byCosts - byAllow) * r)]].forEach(function (x) { out.appendChild(h("p", {}, h("strong", { text: x[0] + ": " }), x[1])); });
      out.appendChild(h("p", { style: "color:var(--muted)" }, G > 1000 ? "Gross trading income is over £1,000, so you must register for Self Assessment (GOV.UK). You cannot claim the allowance and expenses together." : "Gross trading income is £1,000 or less. You may not need to tell HMRC, but check the exceptions on GOV.UK."));
    }
    [gross, stock, fee, rate].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Allowance versus real costs", "Compare the two ways of working out taxable profit. Start values are the Module 6 worked example (illustrative). This is not tax advice; the rate is an assumption you should replace.", [fld("Gross sales for the year (£)", gross), fld("Stock bought and sold (£)", stock), fld("Fees, postage and packaging (£)", fee), fld("Assumed tax rate (%)", rate)], out));
  };
})();
