/* Generated questions for Investing fundamentals (UK). Each entry is called with a seeded random function and returns {q, o, a, w}.
   A quiz or review item written as {"gen": "<id>"} is built from here at render time, so the numbers change between attempts.
   All figures are illustrative. */
(function () {
  var G = window.QGEN = window.QGEN || {};
  function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }
  function money(n) { return "£" + Math.round(n).toLocaleString("en-GB"); }
  function pct(n) { return (Math.round(n * 10) / 10) + "%"; }
  /* Builds the question with the correct answer among three distinct wrong ones, in a seeded shuffle. */
  function mc(r, q, correct, wrongs, w) {
    var seen = {}, opts = [correct];
    seen[correct] = 1;
    wrongs.forEach(function (x) { if (!seen[x] && opts.length < 4) { seen[x] = 1; opts.push(x); } });
    for (var i = opts.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = opts[i]; opts[i] = opts[j]; opts[j] = t; }
    return { q: q, o: opts, a: opts.indexOf(correct), w: w };
  }

  G["inv-emergency-fund"] = function (r) {
    var s = pick(r, [1200, 1400, 1500, 1800, 2000, 2200, 2400]), m = pick(r, [3, 6]), ans = s * m;
    return mc(r, "Your essential spending is " + money(s) + " a month. What is a " + (m === 3 ? "three" : "six") + "-month emergency fund? (Illustrative figures.)",
      money(ans), [money(s * (m === 3 ? 6 : 3)), money(s * 12), money(ans + s)],
      money(s) + " × " + m + " = " + money(ans) + ". Count essential spending only, not everything you spend.");
  };

  G["inv-recovery-gain"] = function (r) {
    var f = pick(r, [20, 25, 40, 50, 60]), g = 100 * f / (100 - f);
    return mc(r, "A portfolio falls " + f + "%. What percentage gain is needed to get back to where it started?",
      pct(g), [pct(f), pct(100 - f), pct(f / 2), pct(f + 10), pct(g * 2)],
      "After a " + f + "% fall you hold " + (100 - f) + "% of the original. Recovering needs " + f + " ÷ " + (100 - f) + " = " + pct(g) + ", which is more than the fall because the gain applies to a smaller amount.");
  };

  G["inv-ten-percent"] = function (r) {
    var n = pick(r, [15000, 20000, 35000, 40000, 60000, 80000]), lim = n * 0.1;
    return mc(r, "Your net assets are " + money(n) + ". Using the FCA's 10% rule of thumb, what is the limit for high-risk investments?",
      money(lim), [money(n * 0.01), money(n * 0.25), money(n / 2), money(n)],
      "10% of " + money(n) + " is " + money(lim) + ". The rule is a rule of thumb, not a legal limit.");
  };

  G["inv-rule-72"] = function (r) {
    var rate = pick(r, [3, 4, 6, 8, 9, 12]), yrs = 72 / rate;
    function y(x) { return (Math.round(x * 10) / 10) + " years"; }
    return mc(r, "At a steady " + rate + "% a year, roughly how long does money take to double? (Rule of 72.)",
      y(yrs), [y(100 / rate), y(yrs * 2), y(yrs / 2), y(rate * 2)],
      "72 ÷ " + rate + " = " + y(yrs) + ". The rule of 72 is an estimate; the exact figure differs slightly.");
  };

  G["inv-cgt-exempt"] = function (r) {
    var gain = pick(r, [2500, 5000, 6500, 8000, 10000, 12500]), ex = 3000, tax = Math.max(0, gain - ex);
    return mc(r, "You sell shares outside an ISA for a total gain of " + money(gain) + " in the 2026 to 2027 tax year. The annual exempt amount is " + money(ex) + ". How much of the gain may be liable to Capital Gains Tax? (Illustrative.)",
      money(tax), [money(gain), money(gain + ex), money(ex), money(gain / 2)],
      gain > ex ? money(gain) + " − " + money(ex) + " = " + money(tax) + ". Allowances and the treatment of losses change, so check the current guidance." : "The gain of " + money(gain) + " is below the " + money(ex) + " exempt amount, so none of it is liable. Check the current allowance.");
  };

  G["inv-margin-of-safety"] = function (r) {
    var low = pick(r, [60, 80, 90, 120, 160]), mg = pick(r, [20, 25, 30]), pay = low * (1 - mg / 100);
    function p(x) { return "£" + (Math.round(x * 100) / 100).toFixed(2); }
    return mc(r, "Your low-end estimate of a share's value is " + money(low) + ". You apply a " + mg + "% margin of safety to it. What is the most you would pay? (Illustrative.)",
      p(pay), [p(low), p(low * (1 + mg / 100)), p(low - mg), p(low * mg / 100)],
      money(low) + " × " + (100 - mg) + "% = " + p(pay) + ". Using the low end builds an allowance for error into the price you pay (our inference).");
  };
})();
