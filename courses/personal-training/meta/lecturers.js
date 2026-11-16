/* Lecturers for personal-training: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Jerry Morris": {
  "years": "1910–2009",
  "known": "British epidemiologist whose 1953 Lancet studies of London bus drivers and conductors linked physical activity to heart disease",
  "src": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(12)61027-7/fulltext",
  "check": "checked"
 },
 "Carl Rogers": {
  "years": "1902–1987",
  "known": "American psychologist who originated the client-centred approach to psychotherapy",
  "src": "https://www.britannica.com/biography/Carl-Rogers",
  "check": "checked"
 },
 "Hans Selye": {
  "years": "1907–1982",
  "known": "Austrian-born endocrinologist who described the general adaptation syndrome to stress in 1936",
  "src": "https://www.britannica.com/biography/Hans-Selye",
  "check": "checked"
 },
 "Thomas DeLorme": {
  "years": "1902–1987",
  "known": "American physician whose 1945 protocol of progressive resistance exercise changed rehabilitation",
  "src": "https://en.wikipedia.org/wiki/Progressive_overload",
  "check": "1945 protocol NOT verified (no source found 17/10/2026); dates unverified; the lesson marks this"
 },
 "Albert Bandura": {
  "years": "1925–2021",
  "known": "Psychologist who described self-efficacy, a person's belief in their ability to act, in 1977",
  "src": "https://albertbandura.com/albert-bandura-self-efficacy.html",
  "check": "checked"
 }
};
  var ROWS = [
 ["personal-training-1","Jerry Morris","He produced early evidence that activity protects health.","Start from the evidence. Know what the guidelines say, who they are for and what they cannot tell you about the person in front of you."],
 ["personal-training-2","Jerry Morris","He worked on who benefits from activity and who faces risk.","Before you coach someone, find out who they are and what risks they carry. Screen carefully, stay within your scope and refer on when you should."],
 ["personal-training-3","Carl Rogers","His approach to listening underlies good coaching conversations.","People change when they feel heard. Ask, reflect back and let them find their own reasons, then help them turn those reasons into a plan."],
 ["personal-training-4","Hans Selye","His work on stress and adaptation helps explain training load and recovery.","Training is a stress the body adapts to, if it gets time to recover. Too little changes nothing and too much wears a person down. Look for the dose in between."],
 ["personal-training-5","Thomas DeLorme","He set out a way to increase resistance step by step.","A programme is a path with small steps. Start where the person is, raise the load a little, and let the results guide the next change."],
 ["personal-training-6","Hans Selye","His work links stress, adaptation and recovery.","Training only works if the body recovers. Food, sleep and rest are part of the programme. For clients with health conditions, work with their clinician and know your limits."],
 ["personal-training-cap","Albert Bandura","His work on belief in one's own ability supports building a client's confidence across a plan.","A client who believes they can will keep going. Build the plan in steps they can finish, and let each finished step build the next."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
