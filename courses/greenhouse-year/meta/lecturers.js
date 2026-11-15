/* Lecturers for greenhouse-year: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Joseph Paxton": {
  "years": "1803–1865",
  "known": "Gardener at Chatsworth who built glasshouses there, then designed the Crystal Palace for the 1851 Great Exhibition",
  "src": "https://www.britannica.com/biography/Joseph-Paxton",
  "check": "checked (Britannica gives birth year as 1801; Wikipedia gives 1803)"
 },
 "Gertrude Jekyll": {
  "years": "1843–1932",
  "known": "Garden designer who worked with the architect Edwin Lutyens and was known for her handling of colour",
  "src": "https://www.britannica.com/biography/Gertrude-Jekyll",
  "check": "checked"
 },
 "Gregor Mendel": {
  "years": "1822–1884",
  "known": "Augustinian friar and abbot whose pea-plant experiments (1856–1863) established the rules of heredity",
  "src": "https://www.britannica.com/biography/Gregor-Mendel",
  "check": "checked"
 },
 "Justus von Liebig": {
  "years": "1803–1873",
  "known": "Chemist who popularised the law of the minimum, that growth is limited by the scarcest resource",
  "src": "https://en.wikipedia.org/wiki/Liebig%27s_law_of_the_minimum",
  "check": "law checked; dates checked 17/10/2026 (Wikipedia and Britannica: 12 May 1803 to 18 April 1873)"
 },
 "Rachel Carson": {
  "years": "1907–1964",
  "known": "Marine biologist and writer whose book Silent Spring (1962) raised public concern about pesticides",
  "src": "https://www.britannica.com/biography/Rachel-Carson",
  "check": "checked (Britannica, 11/10/2026)"
 }
};
  var ROWS = [
 ["greenhouse-year-1","Joseph Paxton","He treated glass, heat and light as one designed system.","Before you plant anything, look at the house itself: glass, frame, floor, vents, water. Each part changes the others. Learn to see the whole, and the rest of the year gets simpler."],
 ["greenhouse-year-2","Gertrude Jekyll","She planned gardens as a sequence through the year, which is what succession planning is.","A year is a series of handovers. One crop finishes as the next is ready. Draw the calendar first, then fill the beds, and you will not face an empty house or a glut."],
 ["greenhouse-year-3","Gregor Mendel","He counted, recorded and repeated, the habits good seed starting needs.","Seeds reward patience and careful counting. Sow a few, label them, write down what happens, and sow again. Your notes become your best teacher."],
 ["greenhouse-year-4","Justus von Liebig","His work on plant nutrients underlies feeding and growing media.","A plant takes what the root can reach. Ask what is in the medium, what is in the water, and which one is short. Feed the shortage, not the habit."],
 ["greenhouse-year-5","Joseph Paxton","He designed glasshouses to manage heat, light and air.","Glass traps heat fast, so air has to move. Open the vents early, shade when the sun is high and close up before the cold returns. Watch the house and it will tell you what it needs."],
 ["greenhouse-year-6","Rachel Carson","She made the case for looking before spraying, the core of integrated pest management.","Look closely and look often. Know what is a pest, what is a friend and what is only a leaf having a bad day. Act on what you find, in the gentlest way that works."],
 ["greenhouse-year-7","Gertrude Jekyll","She planned in seasons and looked back to improve each year.","At the end of the year, walk the beds and read your records. What worked, what ran late, what sat idle? Write it down and let it shape next year's plan."],
 ["greenhouse-year-cap","Joseph Paxton","He treated the whole structure as one working system.","Bring everything together: the house, the calendar, the plants and the records. A year in the greenhouse is one system. Plan it, run it and review it."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
