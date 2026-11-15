/* Lecturers for directing: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Harley Granville-Barker": {
  "years": "1877–1946",
  "known": "English actor, director and playwright who staged Shakespeare at the Savoy in 1912–14 and wrote the Prefaces to Shakespeare",
  "src": "https://www.britannica.com/biography/Harley-Granville-Barker",
  "check": "checked"
 },
 "Konstantin Stanislavski": {
  "years": "1863–1938",
  "known": "Russian actor and director who co-founded the Moscow Art Theatre in 1898 and developed the Stanislavsky system of acting",
  "src": "https://www.britannica.com/biography/Konstantin-Stanislavsky",
  "check": "checked (Britannica spells the name Stanislavsky)"
 },
 "Vsevolod Meyerhold": {
  "years": "1874–1940",
  "known": "Russian director and actor whose non-realistic theatre, including biomechanics, made him a seminal force in modern theatre",
  "src": "https://www.britannica.com/biography/Vsevolod-Yemilyevich-Meyerhold",
  "check": "checked (Russian sources give the death year as 1940 or 1942)"
 },
 "Sergei Eisenstein": {
  "years": "1898–1948",
  "known": "Russian film director and theorist of montage, maker of Battleship Potemkin (1925)",
  "src": "https://www.britannica.com/biography/Sergey-Eisenstein",
  "check": "checked"
 },
 "Peter Brook": {
  "years": "1925–2022",
  "known": "English director of the 1970 RSC A Midsummer Night's Dream and author of The Empty Space (1968)",
  "src": "https://www.britannica.com/biography/Peter-Brook",
  "check": "checked"
 }
};
  var ROWS = [
 ["directing-1","Harley Granville-Barker","He read plays as a working director, asking how they play in time.","Read the play as it will be heard. Mark where it runs and where it stops, cut only with a reason, and let nothing you add drown the words."],
 ["directing-2","Konstantin Stanislavski","He gave actors a way in through honest questions and actions.","Do not ask an actor to feel. Give them a world to believe in, an honest 'if' and something to do, and watch what they find."],
 ["directing-3","Konstantin Stanislavski","He taught that the parts of a role must join into an unbroken line.","A role is a line, not a pile of moments. Help each actor join their wants into one line that runs through the play."],
 ["directing-4","Vsevolod Meyerhold","He trained actors from the body outward and staged ideas in movement.","The body can say what a thought cannot. Set the actor a clear physical score, keep it in rhythm and see what it finds."],
 ["directing-5","Sergei Eisenstein","He treated the cut as a collision that makes an idea.","Two shots together can mean more than either alone. Choose what meets what, and be sure the meaning is true to the scene."],
 ["directing-6","Peter Brook","He started from an empty space and a watching audience.","Begin with a bare space and one strong idea. Add only what the story needs and what the audience cannot supply for themselves."],
 ["directing-cap","Konstantin Stanislavski","He tested every moment by whether it could be believed.","Watch your work and ask where you stopped believing. Fix those moments one at a time and try again."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
