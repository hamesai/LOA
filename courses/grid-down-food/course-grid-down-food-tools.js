/* Calculators for Wasteland Kitchen: Food Safety When the Grid Goes Down. Registered per module key. */
(function () {
  "use strict";
  var T = (window.COURSE_TOOLS = window.COURSE_TOOLS || {});

  T["grid-down-food-2"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var hrs = inp("number", 3, { min: "0", step: "0.5" }), full = h("select", {}, h("option", { value: "full", text: "Freezer full" }), h("option", { value: "half", text: "Freezer half full" })), risk = h("select", {}, h("option", { value: "no", text: "Healthy adults only" }), h("option", { value: "yes", text: "Includes an at-risk person" }));
    var out = h("div", { class: "tout" }), hv = 0;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add hours to ledger", onclick: function () { U.logMetric(m, "Hours without power", hv, "h", "Power-cut clock"); btn.textContent = "Added"; } });
    function calc() {
      out.textContent = ""; btn.textContent = "Add hours to ledger";
      hv = Number(hrs.value);
      if (!(hv >= 0)) { out.appendChild(h("p", {}, "Enter hours of zero or more.")); return; }
      var fz = full.value === "full" ? 48 : 24;
      out.appendChild(h("p", {}, h("strong", { text: "Fridge (about 4 hours, door shut): " }), hv < 4 ? "within the window; " + (4 - hv) + " hours left. Keep the door closed." : "past the 4-hour mark. Discard perishables unless a thermometer shows under 8 C (UK) or 40 F (US) or a cold source has kept them cold."));
      out.appendChild(h("p", {}, h("strong", { text: "Freezer (about " + fz + " hours, door shut): " }), hv < fz ? "within the window; " + (fz - hv) + " hours left." : "past the guide; check for ice crystals and temperature."));
      if (risk.value === "yes" && hv >= 4) out.appendChild(h("p", { style: "color:var(--bad)" }, "At-risk person: no chilled ready-to-eat food, pre-cooked food or leftovers after 4 hours without power (UK CMOs)."));
      out.appendChild(h("p", { style: "color:var(--muted)" }, "Estimates from FSA, FSIS and UK CMO advice; real times vary by appliance. Never taste to decide."));
    }
    [hrs, full, risk].forEach(function (e) { e.addEventListener("input", calc); e.addEventListener("change", calc); }); calc();
    body.appendChild(toolCard("Power-cut clock", "Enter hours since the power failed to see where fridge and freezer stand against the 4, 24 and 48 hour guides.", [fld("Hours without power", hrs), fld("Freezer", full), fld("Household", risk)], out, btn));
  };

  T["grid-down-food-3"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var litres = inp("number", 10, { min: "0.5", step: "0.5" }), strength = h("select", {}, h("option", { value: "high", text: "5 to 9% sodium hypochlorite" }), h("option", { value: "low", text: "1% sodium hypochlorite" })), cloudy = h("select", {}, h("option", { value: "no", text: "Clear water" }), h("option", { value: "yes", text: "Cloudy, murky, coloured or very cold" })), pot = inp("number", 2, { min: "0.5", step: "0.5" });
    var out = h("div", { class: "tout" }), L = 0;
    var btn = h("button", { class: "btn ghost", type: "button", text: "Add litres to ledger", onclick: function () { U.logMetric(m, "Water treated", L, "litres", "Water tool"); btn.textContent = "Added"; } });
    function calc() {
      out.textContent = ""; btn.textContent = "Add litres to ledger";
      L = Number(litres.value); var P = Number(pot.value);
      if (!(L > 0) || !(P > 0)) { out.appendChild(h("p", {}, "Enter litres and pot size above zero.")); return; }
      var per = strength.value === "high" ? 2 : 10, mult = cloudy.value === "yes" ? 2 : 1, drops = per * mult * L, ml = Math.round(drops * 0.05 * 10) / 10;
      out.appendChild(h("p", {}, h("strong", { text: "Bleach: " }), drops + " drops (about " + ml + " mL), then stir and wait at least 30 minutes."));
      out.appendChild(h("p", {}, h("strong", { text: "Boiling instead: " }), Math.ceil(L / P) + " batches in a " + P + "-litre pot, each at a rolling boil for 1 minute (3 minutes above 2,000 m)."));
      out.appendChild(h("p", { style: "color:var(--muted)" }, "CDC: 2 drops per litre for 5 to 9% bleach, 10 drops for 1%; double if cloudy. Use unscented household bleach. Bleach is less reliable than boiling against Giardia and Cryptosporidium. Cannot treat chemical, fuel or radioactive contamination."));
    }
    [litres, strength, cloudy, pot].forEach(function (e) { e.addEventListener("input", calc); e.addEventListener("change", calc); }); calc();
    body.appendChild(toolCard("Water treatment planner", "Bleach drops for a volume of water, plus the number of boiling batches. Defaults are illustrative.", [fld("Litres to treat", litres), fld("Bleach strength", strength), fld("Water clarity", cloudy), fld("Pot size (litres)", pot)], out, btn));
  };

  T["grid-down-food-5"] = function (body, m) {
    var U = window.CourseUI, h = U.h, fld = U.fld, inp = U.inp, toolCard = U.toolCard;
    var ft = inp("number", 3200, { min: "0", step: "100" });
    var out = h("div", { class: "tout" });
    function calc() {
      out.textContent = "";
      var E = Number(ft.value);
      if (!(E >= 0)) { out.appendChild(h("p", {}, "Enter an elevation of zero or more.")); return; }
      var min = 10 + (E >= 1000 ? Math.floor(E / 1000) : 0), metres = Math.round(E * 0.3048);
      out.appendChild(h("p", {}, h("strong", { text: "Boil home-canned low-acid food for: " }), min + " minutes at " + E + " ft (about " + metres + " m)."));
      out.appendChild(h("p", { style: "color:var(--muted)" }, "CDC and NCHFP: 10 minutes below 1,000 ft, plus 1 minute per additional 1,000 ft. Our reading uses whole thousands. This is a safeguard for unknown jars, not a substitute for safe canning. If you cannot confirm the method, discard."));
    }
    ft.addEventListener("input", calc); calc();
    body.appendChild(toolCard("Boil time for home-canned food", "How long to boil home-canned low-acid food or tomatoes before eating, by elevation.", [fld("Elevation (feet)", ft)], out));
  };
})();
