/* Lecturers for grid-down-food: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Louis Pasteur": {
  "years": "1822–1895",
  "known": "French chemist and microbiologist who developed the germ theory of disease and pasteurization",
  "src": "https://www.britannica.com/biography/Louis-Pasteur",
  "check": "checked"
 },
 "John Snow": {
  "years": "1813–1858",
  "known": "London physician who traced the 1854 Broad Street cholera outbreak to a contaminated water pump",
  "src": "https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak",
  "check": "outbreak checked; dates checked 17/10/2026 (BBC and Wikipedia: 15 March 1813 to 16 June 1858)"
 },
 "Count Rumford (Benjamin Thompson)": {
  "years": "1753–1814",
  "known": "American-born physicist who studied heat, designed fuel-saving stoves and fireplaces, and devised Rumford's Soup for the poor in Bavaria",
  "src": "https://www.britannica.com/biography/Sir-Benjamin-Thompson-Graf-von-Rumford",
  "check": "checked"
 },
 "Nicolas Appert": {
  "years": "c.1749–1841",
  "known": "French confectioner who invented preserving food in sealed, heated jars and won a 12,000-franc award in 1810",
  "src": "https://www.britannica.com/biography/Nicolas-Appert",
  "check": "checked"
 },
 "Benjamin Franklin": {
  "years": "1706–1790",
  "known": "Printer, scientist and statesman of colonial and revolutionary America",
  "src": "https://www.britannica.com/biography/Benjamin-Franklin",
  "check": "checked (Britannica, 11/10/2026)"
 }
};
  var ROWS = [
 ["grid-down-food-1","Louis Pasteur","His work explains why temperature and cleanliness matter.","Invisible organisms do the harm. Keep them from reaching the food, from multiplying and from surviving. That is the whole of the five keys."],
 ["grid-down-food-2","Louis Pasteur","His work shows why cold slows microbes and warmth lets them multiply.","Cold slows the growth, it does not end it. Keep food cold as long as you can, and when it warms past safe limits, decide early what to cook, eat or discard."],
 ["grid-down-food-3","John Snow","He tied illness to unsafe water by following the evidence.","Water looks the same safe or unsafe. Treat it before you drink it, store it clean and ask where it came from."],
 ["grid-down-food-4","Count Rumford (Benjamin Thompson)","He designed fuel-saving stoves and nourishing meals for the poor.","Fuel is precious when the grid is down. Use a good pot, a lid and a steady flame, and cook food through to a safe temperature."],
 ["grid-down-food-5","Nicolas Appert","He is credited with the first practical method of canning.","To keep food, remove what spoils it: heat, seal and store it dry or cool. Do it carefully, because a mistake can hide until you eat."],
 ["grid-down-food-6","Benjamin Franklin","He organised practical community preparation.","When the water rises, you decide quickly. Know in advance what you will keep, what you will throw away and where you will go, and write it in your plan."],
 ["grid-down-food-cap","Benjamin Franklin","He organised practical preparation, such as volunteer fire companies.","A plan on paper is worth more than a good intention. Write the 72 hours down, share it with the household and test it before you need it."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
