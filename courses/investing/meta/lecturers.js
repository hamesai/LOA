/* Lecturers for investing: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Irving Fisher": {
  "years": "1867–1947",
  "known": "American economist who explained interest as the link between impatience to spend and the opportunity to invest, in The Theory of Interest (1930)",
  "src": "https://en.wikipedia.org/wiki/Irving_Fisher",
  "check": "1907 book read in part; 1930 title and years 1867–1947 from the Internet Archive catalogue; 1929 statement from Federal Reserve History"
 },
 "Louis Bachelier": {
  "years": "1870–1946",
  "known": "French mathematician whose 1900 thesis Théorie de la spéculation began by saying price movements cannot be forecast mathematically, and sought the probability law of price changes",
  "src": "https://en.wikipedia.org/wiki/Louis_Bachelier",
  "check": "thesis introduction read in French; years 1870–1946 from the Internet Archive catalogue"
 },
 "Harry Markowitz": {
  "years": "1927–2023",
  "known": "American economist whose 1952 paper Portfolio Selection founded modern portfolio theory",
  "src": "https://en.wikipedia.org/wiki/Harry_Markowitz",
  "check": "1952 paper read in part (free PDF copy); death in 2023 from the NYT obituary headline; birth year not checked this session"
 },
 "John Bogle": {
  "years": "1929–2019",
  "known": "Founder of The Vanguard Group (1974) who popularised the index fund",
  "src": "https://en.wikipedia.org/wiki/John_Bogle",
  "check": "Vanguard founding dates from his own 2016 speech; life dates from Wikipedia (8 May 1929 to 16 January 2019)"
 },
 "Benjamin Graham": {
  "years": "1894–1976",
  "known": "Value investor who separated investment from speculation and wrote The Intelligent Investor (1949)",
  "src": "https://en.wikipedia.org/wiki/Benjamin_Graham",
  "check": "investment-versus-speculation and margin-of-safety passages read in The Intelligent Investor; life dates from Wikipedia"
 }
};
  var ROWS = [
 ["investing-1","Irving Fisher","He explained why people accept less now to get more later, and that answer is the first decision in any plan.","Before you invest, ask what you will need and when. Money you will need soon belongs in a safe place; money you can leave can take a little risk."],
 ["investing-2","Irving Fisher","He compared sums across time as a matter of habit.","Put every sum on the same timeline. Ask what it will be worth later, after inflation, and after fees."],
 ["investing-3","Louis Bachelier","He began by saying price movements cannot be forecast mathematically, so a plan that depends on predicting them is fragile.","Plan for the bad end of the range before you invest. A plan that only works in the good years is not a plan."],
 ["investing-4","Harry Markowitz","He showed that risk depends on how holdings move together, not only on each one alone.","Look at what your holdings do together in a bad year. Two funds that fall at the same time give you less protection than they seem to."],
 ["investing-5","John Bogle","He argued that low costs are one of the few things an investor can control.","Find every charge, in percent and in pounds. Compare each with a plain tracker, and ask what the extra cost must buy."],
 ["investing-6","Benjamin Graham","He asked whether an operation rests on analysis or on hope, and bought with a margin for error.","Write the basis for your estimate before you buy. Then ask for a margin, and check the firm before you pay anyone."],
 ["investing-cap","Benjamin Graham","He tested whether a plan could survive being wrong.","Mark every forecast in your plan. Replace each with a range you can survive, or remove it."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
