/* Calculators for Camping fundamentals (UK and Ireland). Registered per module key. */
(function () {
  "use strict";
  var T = (window.COURSE_TOOLS = window.COURSE_TOOLS || {});
  /* CourseUI is defined after the course files load, so read it when a tool runs. */

  function hm(mins) { var m = Math.round(mins), a = Math.floor(m / 60), b = m % 60; return a + " h " + (b < 10 ? "0" : "") + b + " min"; }

  T["camping-basics-3"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    /* Pitch temperature estimate */
    var low = inp("number", 8, { step: "any" }), up = inp("number", 450, { min: "0", step: "10" }), out = h("p", { class: "tout" }), est = null;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add estimate to ledger", onclick: function () { if (est != null) { U.logMetric(m, "Overnight low at pitch", est, "°C", "Estimate: valley " + low.value + " °C, " + up.value + " m higher"); btn.textContent = "Added"; } } });
    function calc() {
      est = null; btn.textContent = "Add estimate to ledger";
      if (low.value === "" || up.value === "") { out.textContent = "Enter the valley low and the height above it."; return; }
      var d = Number(up.value) / 300 * 2; est = Math.round((Number(low.value) - d) * 10) / 10;
      out.textContent = "Average cooling " + (Math.round(d * 10) / 10) + " °C, so about " + est + " °C at the pitch before wind chill. The lapse rate varies, so treat this as a rough guide and leave a margin.";
    }
    [low, up].forEach(function (e) { e.addEventListener("input", calc); }); calc();
    body.appendChild(toolCard("Pitch temperature estimate", "Uses the Met Office average of about 2 °C cooling per 300 m of climb. A forecast for the actual pitch is always better.", [fld("Forecast low in the valley (°C)", low), fld("Pitch height above the valley (m)", up)], out, btn));

    /* Pad stacking */
    var a = inp("number", 2.5, { min: "0", step: "0.1" }), b = inp("number", 2, { min: "0", step: "0.1" }), o2 = h("p", { class: "tout" });
    function stack() {
      var v = Number(a.value || 0) + Number(b.value || 0), band = v < 2 ? "warm weather" : v < 4 ? "cool weather" : v < 5.5 ? "cold weather" : "extremely cold weather";
      o2.textContent = "Total R " + (Math.round(v * 10) / 10) + ", suited to " + band + " (REI bands). Bag ratings assume R 4" + (v >= 4 ? ", which this meets." : ", which this does not reach.");
    }
    [a, b].forEach(function (e) { e.addEventListener("input", stack); }); stack();
    body.appendChild(toolCard("Pad stacking", "R-values add when you stack pads.", [fld("Pad 1 R-value", a), fld("Pad 2 R-value (0 if none)", b)], o2));
  };

  T["camping-basics-5"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    /* String to ground distance */
    var cm = inp("number", 10, { min: "0", step: "0.1" }), sc = inp("number", 25000, { min: "1", step: "1000" }), o1 = h("p", { class: "tout" });
    function dist() { var km = Number(cm.value) * Number(sc.value) / 100000; o1.textContent = isFinite(km) && km >= 0 ? cm.value + " cm on a 1:" + sc.value + " map is " + (Math.round(km * 100) / 100) + " km on the ground." : "Enter a length and a scale."; }
    [cm, sc].forEach(function (e) { e.addEventListener("input", dist); }); dist();
    body.appendChild(toolCard("String to ground distance", "At 1:25,000, 4 cm is 1 km. Enter the string length in centimetres.", [fld("String length (cm)", cm), fld("Scale (1 : …)", sc)], o1));

    /* Naismith */
    var d = inp("number", 10, { min: "0", step: "0.1" }), asc = inp("number", 450, { min: "0", step: "10" }), rest = inp("number", 15, { min: "0", step: "5" }), out = h("p", { class: "tout" }), tot = null, dk = null;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add walk to ledger", onclick: function () { if (tot != null) { U.logMetric(m, "Walk distance", dk, "km", "Naismith plan"); U.logMetric(m, "Walk time", tot, "min", "Naismith plus rests"); btn.textContent = "Added"; } } });
    function nai() {
      tot = null; btn.textContent = "Add walk to ledger";
      var D = Number(d.value), A = Number(asc.value), R = Number(rest.value || 0);
      if (!(D >= 0) || !(A >= 0)) { out.textContent = "Enter distance and ascent."; return; }
      var base = D / 5 * 60 + A / 600 * 60, withRest = base * (1 + R / 100); tot = Math.round(withRest); dk = D;
      out.textContent = "Naismith: " + hm(base) + ". With a " + R + "% rest allowance (our suggestion): " + hm(withRest) + ". Plan to finish before dark with a margin.";
    }
    [d, asc, rest].forEach(function (e) { e.addEventListener("input", nai); }); nai();
    body.appendChild(toolCard("Naismith's rule", "One hour per 5 km plus one hour per 600 m of ascent. A rule of thumb that ignores fitness and slope.", [fld("Distance (km)", d), fld("Ascent (m)", asc), fld("Rest allowance (%)", rest)], out, btn));
  };

  T["camping-basics-4"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var temp = inp("number", 4, { step: "0.5" }), out = h("p", { class: "tout" });
    function t() { var v = Number(temp.value); out.textContent = temp.value === "" ? "Enter the cool box temperature." : v < 5 ? v + " °C is below 5 °C: inside the FSA limit." : v + " °C is not below 5 °C. The FSA says to keep food below 5 °C, so eat the most perishable food first and add ice packs (our suggestion)."; }
    temp.addEventListener("input", t); t();
    body.appendChild(toolCard("Cool box check", "Read a thermometer placed in the cool box.", [fld("Cool box temperature (°C)", temp)], out));
    var alt = inp("number", 0, { min: "0", step: "100" }), o2 = h("p", { class: "tout" });
    function boil() { var ft = Number(alt.value) * 3.28084; o2.textContent = "Rolling boil for " + (ft > 6500 ? 3 : 1) + " minute" + (ft > 6500 ? "s" : "") + " (CDC: 1 minute, 3 minutes above 6,500 ft, about 1,980 m)."; }
    alt.addEventListener("input", boil); boil();
    body.appendChild(toolCard("Boiling time for water", "Enter your elevation in metres.", [fld("Elevation (m)", alt)], o2));
  };
})();
