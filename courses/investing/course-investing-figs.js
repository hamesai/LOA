/* Diagrams for Investing fundamentals (UK). Prefix every figure id with the course id so ids never clash. Use theme tokens such as var(--ink) and var(--accent). */
(function () {
  var CE = window.CourseEngine, S = CE.S;

  // Bars for £1,000 at a steady 5% a year. Values are computed here, so the picture cannot drift from the arithmetic in lesson 2.
  CE.figs["investing-compound"] = function () {
    var years = [0, 10, 20, 30], rate = 0.05, start = 1000;
    var W = 640, H = 300, base = 260, top = 40, max = start * Math.pow(1 + rate, 30);
    var svg = S("svg", { viewBox: "0 0 " + W + " " + H, width: "100%", role: "img", "aria-label": "Bar chart: £1,000 at 5% a year after 0, 10, 20 and 30 years" });
    var slot = W / years.length, bw = slot * 0.5;
    years.forEach(function (y, i) {
      var v = start * Math.pow(1 + rate, y), bh = (v / max) * (base - top), x = i * slot + (slot - bw) / 2;
      var r = S("rect", { x: x, y: base - bh, width: bw, height: bh, rx: 4, style: "fill:var(--accent)" });
      svg.appendChild(r);
      var lv = S("text", { x: x + bw / 2, y: base - bh - 8, "text-anchor": "middle", style: "fill:var(--ink);font:600 14px var(--f-body)" });
      lv.textContent = "£" + Math.round(v).toLocaleString("en-GB");
      svg.appendChild(lv);
      var ly = S("text", { x: x + bw / 2, y: base + 22, "text-anchor": "middle", style: "fill:var(--ink);font:500 14px var(--f-body)" });
      ly.textContent = y === 0 ? "Start" : y + " years";
      svg.appendChild(ly);
    });
    var axis = S("line", { x1: 0, y1: base, x2: W, y2: base, style: "stroke:var(--ink);stroke-width:1" });
    svg.appendChild(axis);
    var cap = S("text", { x: W / 2, y: H - 6, "text-anchor": "middle", style: "fill:var(--ink);font:400 12px var(--f-body)" });
    cap.textContent = "Illustrative: steady 5% a year, no fees or tax";
    svg.appendChild(cap);
    return svg;
  };
})();
