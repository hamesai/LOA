/* Lecturers for public-speaking: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Aristotle": {
  "years": "384–322 BC",
  "known": "Greek philosopher whose Rhetoric names three means of persuasion: character, the hearer's emotion and argument",
  "src": "https://plato.stanford.edu/entries/aristotle-rhetoric",
  "check": "checked (dates standard, not checked)"
 },
 "Cicero": {
  "years": "106–43 BC",
  "known": "Roman statesman and orator who wrote On the Orator (De oratore, c.55 BC) on the education of the speaker",
  "src": "https://www.britannica.com/topic/De-oratore",
  "check": "checked (dates standard, not checked)"
 },
 "Quintilian": {
  "years": "c.35–c.100",
  "known": "Roman teacher of rhetoric who wrote the twelve-book Institutio Oratoria on training an orator",
  "src": "https://en.wikipedia.org/wiki/Institutio_Oratoria",
  "check": "book checked; dates checked 17/10/2026 (Wikipedia c.35 to c.100; Britannica gives death as after 96)"
 },
 "Winston Churchill": {
  "years": "1874–1965",
  "known": "British statesman awarded the 1953 Nobel Prize in Literature partly for his oratory",
  "src": "https://www.nobelprize.org/prizes/literature/1953/summary",
  "check": "checked"
 },
 "Frederick Douglass": {
  "years": "1818–1895",
  "known": "Abolitionist and writer, thought to have given more than 2,000 speeches, including the 1852 Rochester oration on the Fourth of July",
  "src": "https://www.gilderlehrman.org/history-resources/essays/frederick-douglass-orator",
  "check": "speeches checked; dates checked 17/10/2026 (Wikipedia and NPS: c.14 Feb 1818 to 20 Feb 1895)"
 }
};
  var ROWS = [
 ["public-speaking-1","Aristotle","He gave speaking its basic framework of character, reason and emotion.","A speech is a promise to an audience. Be honest, be clear and be worth their time. Nerves are a sign that you care."],
 ["public-speaking-2","Aristotle","He wrote about fitting a speech to its audience and purpose.","Ask who is listening, what they believe and what they need from you. Then shape the speech for them, not for yourself."],
 ["public-speaking-3","Cicero","He wrote about gathering and judging material before speaking.","Gather more than you will use. Check it, weigh it, and keep what supports your point. Your audience will trust what you can back up."],
 ["public-speaking-4","Quintilian","He taught orators how to arrange and train for speaking.","An audience follows a road you have built. Open so they know where they are going, order the middle, and close so they remember it."],
 ["public-speaking-5","Winston Churchill","He is remembered for plain, rhythmic, carefully prepared language.","Short words are strong. Choose them with care, say them at a pace people can follow and leave a pause where the weight falls."],
 ["public-speaking-6","Frederick Douglass","He is remembered as a persuasive speaker who used evidence and story.","To move an audience, show them something they can see and give them a reason to act. Tell the truth as plainly as you can."],
 ["public-speaking-cap","Winston Churchill","He is remembered for preparing speeches carefully and rehearsing them.","Write it, say it aloud, cut what is weak and say it again. Then give the speech and review how it went, honestly."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
