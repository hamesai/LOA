/* Diagrams for Post-Colonial Africa. Each is a timeline drawn with SVG; open-ended spans fade out. */
(function () {
  var CE = window.CourseEngine, S = CE.S;
  function timeline(title, lo, hi, items) {
    var W = 640, rowH = 30, top = 38, left = 10, right = 10, H = top + items.length * rowH + 30;
    var svg = S("svg", { viewBox: "0 0 " + W + " " + H, width: "100%", role: "img", "aria-label": title + " timeline" });
    function x(y) { return left + (y - lo) / (hi - lo) * (W - left - right); }
    var t = S("text", { x: left, y: 20, style: "fill:var(--ink);font:600 14px var(--f-body)" }); t.textContent = title; svg.appendChild(t);
    items.forEach(function (it, i) {
      var y0 = top + i * rowH, a = Math.max(x(it[1]), left), b = Math.max(x(it[2]), a + 6);
      svg.appendChild(S("rect", { x: a, y: y0, width: b - a, height: 12, rx: 3, style: "fill:var(--accent);opacity:" + (it[3] ? 0.55 : 0.95) }));
      var lab = it[0] + (it[3] ? " (end not settled)" : ""), est = lab.length * 6.3, lx, anchor, ly = y0 + 10;
      if (b + 4 + est <= W - right) { lx = b + 4; anchor = "start"; }
      else if (a - 4 - est >= left) { lx = a - 4; anchor = "end"; }
      else { lx = left; anchor = "start"; ly = y0 + 25; }
      var tx = S("text", { x: lx, y: ly, "text-anchor": anchor, style: "fill:var(--ink);font:12px var(--f-body)" });
      tx.textContent = lab; svg.appendChild(tx);
    });
    var ay = top + items.length * rowH + 4;
    svg.appendChild(S("line", { x1: left, y1: ay, x2: W - right, y2: ay, style: "stroke:var(--ink);opacity:.5" }));
    [lo, hi].forEach(function (y, i) { var tt = S("text", { x: i ? W - right : left, y: ay + 16, "text-anchor": i ? "end" : "start", style: "fill:var(--ink);font:11px var(--f-body)" }); tt.textContent = String(y); svg.appendChild(tt); });
    return svg;
  }
  CE.figs["africa-post-colonial-tl1"] = function () { return timeline("Conquest and the colonial state", 1880, 1912, [["Mahdist state (Sudan)", 1881, 1898, 0], ["Congo Free State", 1885, 1908, 0], ["Dahomey falls to France", 1892, 1894, 0], ["Adwa: Ethiopia defeats Italy (1896)", 1895, 1897, 0], ["Samori Toure resists France", 1882, 1898, 0], ["South African War", 1899, 1902, 0]]); };
  CE.figs["africa-post-colonial-tl2"] = function () { return timeline("Resistance under colonial rule", 1895, 1962, [["Maji Maji rising", 1905, 1907, 0], ["Herero and Nama war and genocide", 1904, 1908, 0], ["War of the Golden Stool (Asante)", 1900, 1901, 0], ["Kenya State of Emergency (Mau Mau)", 1952, 1960, 0], ["Kenya bans Mau Mau until 2003", 1960, 1962, 1]]); };
  CE.figs["africa-post-colonial-tl3"] = function () { return timeline("Pan-Africanism, 1900 to 1964", 1895, 1965, [["First Pan-African Conference, London", 1899, 1901, 0], ["Garvey's UNIA", 1914, 1927, 0], ["Pan-African Congresses (Du Bois)", 1919, 1927, 0], ["Negritude in Paris (1930s)", 1930, 1939, 0], ["Manchester Congress (1945)", 1944, 1946, 0], ["Accra conferences (1958)", 1957, 1959, 0], ["OAU Charter, 25/05/1963", 1962, 1964, 0]]); };
  CE.figs["africa-post-colonial-tl4"] = function () { return timeline("Independence dates", 1950, 2012, [["Libya (1951)", 1951, 1952, 0], ["Ghana (1957)", 1957, 1958, 0], ["Year of Africa: 17 states (1960)", 1960, 1961, 0], ["Algeria (1962)", 1962, 1963, 0], ["Kenya (1963)", 1963, 1964, 0], ["Portuguese colonies (1974 to 1975)", 1974, 1976, 0], ["Zimbabwe (1980)", 1980, 1981, 0], ["Namibia (1990)", 1990, 1991, 0], ["South Sudan (2011)", 2011, 2012, 0]]); };
  CE.figs["africa-post-colonial-tl5"] = function () { return timeline("Apartheid and its end", 1910, 1995, [["Union of South Africa (1910); Natives Land Act (1913)", 1910, 1914, 0], ["National Party rule: apartheid", 1948, 1994, 0], ["Defiance Campaign to Treason Trial", 1952, 1961, 0], ["Sharpeville (1960); ANC banned", 1960, 1961, 0], ["Mandela in prison (1964 to 1990)", 1964, 1990, 0], ["Soweto (1976)", 1976, 1977, 0], ["CODESA talks (1991 to 1993)", 1991, 1994, 0], ["First all-race election (1994)", 1994, 1995, 0]]); };
  CE.figs["africa-post-colonial-tl6"] = function () { return timeline("States under strain", 1960, 2006, [["Nigeria: coups (1966) and Biafran War (1967 to 1970)", 1966, 1970, 0], ["Haile Selassie deposed (1974); the Derg", 1974, 1991, 0], ["Red Terror (1977 to 1978)", 1977, 1978, 0], ["Ethiopian famine (1983 to 1985)", 1983, 1985, 0], ["Oil shocks to the Berg Report (1973 to 1981)", 1973, 1981, 0], ["Structural adjustment era", 1981, 1996, 1], ["Debt relief: HIPC (1996), MDRI (2005)", 1996, 2005, 0]]); };
  CE.figs["africa-post-colonial-tl7"] = function () { return timeline("Genocide, institutions and transitions", 1990, 2027, [["Rwandan genocide (1994)", 1994, 1995, 0], ["Congo wars (1996 to 2003)", 1996, 2003, 0], ["African Union launched (2002)", 2002, 2003, 0], ["Arab Spring (2010 to 2011)", 2010, 2012, 0], ["South Sudan independent (2011); civil war from 2013", 2011, 2027, 1], ["Sudan war (from 04/2023)", 2023, 2027, 1]]); };
})();
