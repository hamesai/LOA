/* Diagrams for Pre-Colonial Africa. Each is a timeline drawn with SVG; open-ended spans fade out. */
(function () {
  var CE = window.CourseEngine, S = CE.S;
  function timeline(title, lo, hi, items) {
    var W = 640, rowH = 30, top = 38, left = 10, right = 10, H = top + items.length * rowH + 30;
    var svg = S("svg", { viewBox: "0 0 " + W + " " + H, width: "100%", role: "img", "aria-label": title + " timeline" });
    function x(y) { return left + (y - lo) / (hi - lo) * (W - left - right); }
    function fmt(y) { return y < 0 ? (-y) + " BCE" : y + " CE"; }
    var t = S("text", { x: left, y: 20, style: "fill:var(--ink);font:600 14px var(--f-body)" }); t.textContent = title; svg.appendChild(t);
    items.forEach(function (it, i) {
      var y0 = top + i * rowH, a = Math.max(x(it[1]), left), b = Math.max(x(it[2]), a + 6);
      svg.appendChild(S("rect", { x: a, y: y0, width: b - a, height: 12, rx: 3, style: "fill:var(--accent);opacity:" + (it[3] ? 0.55 : 0.95) }));
      var lab = it[0] + (it[3] ? " (end not firm)" : ""), est = lab.length * 6.3, lx, anchor, ly = y0 + 10;
      if (b + 4 + est <= W - right) { lx = b + 4; anchor = "start"; }
      else if (a - 4 - est >= left) { lx = a - 4; anchor = "end"; }
      else { lx = left; anchor = "start"; ly = y0 + 25; }
      var tx = S("text", { x: lx, y: ly, "text-anchor": anchor, style: "fill:var(--ink);font:12px var(--f-body)" });
      tx.textContent = lab; svg.appendChild(tx);
    });
    var ay = top + items.length * rowH + 4;
    svg.appendChild(S("line", { x1: left, y1: ay, x2: W - right, y2: ay, style: "stroke:var(--ink);opacity:.5" }));
    [lo, hi].forEach(function (y, i) { var tt = S("text", { x: i ? W - right : left, y: ay + 16, "text-anchor": i ? "end" : "start", style: "fill:var(--ink);font:11px var(--f-body)" }); tt.textContent = fmt(y); svg.appendChild(tt); });
    return svg;
  }
  CE.figs["africa-pre-colonial-tl2"] = function () { return timeline("Nile Valley and the Horn", -2600, 1900, [["Kerma", -2500, -1500, 0], ["25th Dynasty (Kush rules Egypt)", -744, -656, 0], ["Mero\u00eb royal burials", -300, 350, 0], ["Aksum", 100, 700, 0], ["Zagwe (traditional)", 1100, 1270, 0], ["Solomonic dynasty from 1270", 1270, 1855, 1]]); };
  CE.figs["africa-pre-colonial-tl3"] = function () { return timeline("North Africa", -900, 1500, [["Carthage", -814, -146, 0], ["Roman Africa", -146, 439, 0], ["Vandals", 439, 533, 0], ["Arab conquest", 639, 698, 0], ["Almoravids", 1070, 1147, 0], ["Almohads", 1147, 1269, 1]]); };
  CE.figs["africa-pre-colonial-tl4"] = function () { return timeline("Sahel and Sudan belt", 700, 1950, [["Ghana (first recorded late 8th c.)", 780, 1076, 1], ["Mali (Kirina c. 1235)", 1235, 1590, 1], ["Songhai (Sunni Ali, Askia)", 1464, 1591, 0], ["Kano Chronicle: Islam 14th c.", 1300, 1500, 1], ["Sokoto Caliphate", 1804, 1903, 0]]); };
  CE.figs["africa-pre-colonial-tl5"] = function () { return timeline("Guinea coast and forest", 800, 1950, [["Igbo-Ukwu bronzes", 900, 1000, 0], ["Ife heads", 1100, 1500, 0], ["Benin (Eweka c. 1180 to 1897)", 1180, 1897, 0], ["Oyo", 1600, 1835, 1], ["Asante (c. 1701)", 1701, 1900, 1], ["Dahomey", 1708, 1894, 1]]); };
  CE.figs["africa-pre-colonial-tl6"] = function () { return timeline("East and Central Africa", 700, 1750, [["Swahili towns (from c. 8th c.)", 750, 1500, 1], ["Kilwa at its peak", 1200, 1400, 0], ["Ntusi and Bigo", 1000, 1600, 0], ["Kongo (Lukeni c. late 14th c.)", 1390, 1665, 0], ["Fort Jesus, Portuguese", 1596, 1698, 0], ["Buganda (to Mutesa 1884)", 1600, 1884, 1]]); };
  CE.figs["africa-pre-colonial-tl7"] = function () { return timeline("Southern Africa", 900, 1900, [["Mapungubwe (K2 and hill)", 1000, 1290, 0], ["Great Zimbabwe (stone)", 1100, 1500, 0], ["Mutapa (15th c.)", 1430, 1629, 1], ["Rozvi (1680s to 1830s)", 1680, 1830, 0], ["Mfecane", 1815, 1840, 0], ["Zulu kingdom", 1816, 1879, 0]]); };
  CE.figs["africa-pre-colonial-tl8"] = function () { return timeline("The Atlantic world", 1400, 1900, [["Elmina built 1482", 1482, 1490, 0], ["Atlantic trade (Voyages 1501 to 1866)", 1501, 1866, 0], ["Peak 1751 to 1800", 1751, 1800, 0], ["British abolition 1807", 1807, 1814, 0], ["Berlin 1884 to 85", 1884, 1886, 0]]); };
})();
