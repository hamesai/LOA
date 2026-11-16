/* Lecturers for cinematography: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Eadweard Muybridge": {
  "years": "1830–1904",
  "known": "English photographer who made pioneering photographic studies of motion, including The Horse in Motion (1878) with a battery of 12 cameras",
  "src": "https://en.wikipedia.org/wiki/Eadweard_Muybridge",
  "check": "checked (Wikipedia only)"
 },
 "Gregg Toland": {
  "years": "1904–1948",
  "known": "American cinematographer known for deep focus on Citizen Kane (1941) and for working with engineers on lenses and a modified Mitchell camera",
  "src": "https://en.wikipedia.org/wiki/Gregg_Toland",
  "check": "checked (Wikipedia only; credit for Kane's look is disputed)"
 },
 "Karl Freund": {
  "years": "1890–1969",
  "known": "Cinematographer and director who pioneered the unchained camera, designed flat lighting for multi-camera sitcoms and founded Photo Research Corporation, which made light meters",
  "src": "https://en.wikipedia.org/wiki/Karl_Freund",
  "check": "checked (Wikipedia only; it gives two founding dates for Photo Research, 1941 and 1944)"
 },
 "George Eastman": {
  "years": "1854–1932",
  "known": "American founder of Eastman Kodak who helped bring roll film into the mainstream and released the first Kodak camera in 1888",
  "src": "https://en.wikipedia.org/wiki/George_Eastman",
  "check": "checked (Wikipedia only)"
 },
 "Robert W. Paul": {
  "years": "1869–1943",
  "known": "English film pioneer and instrument maker who built his own cameras and projector; his 1896 camera was the first with reverse-cranking",
  "src": "https://en.wikipedia.org/wiki/Robert_W._Paul",
  "check": "checked (Wikipedia only)"
 }
};
  var ROWS = [
 ["cinematography-1","Eadweard Muybridge","He chased faster shutters and more sensitive emulsions to freeze motion.","You want to know what a moving picture is made of? Separate pictures, one after another, each caught fast enough to see. Decide what each of your exposures should do with motion, and be ready to pay for it in light."],
 ["cinematography-2","Gregg Toland","He worked with engineers to change his lenses and camera instead of accepting their limits.","Do not take a camera as you find it. Write down what yours cannot do, change what can be changed, test the change before the day, and plan around what cannot."],
 ["cinematography-3","Gregg Toland","He closed the aperture to f/8 to f/16 and found the light to do it.","If you want near and far both sharp, close the aperture and find the light to do it. Count the stops first, because the light has to come from somewhere."],
 ["cinematography-4","Karl Freund","He made light meters as well as films.","Measure before you light. Put a number on the face, and light every place the actor will stand to the same number."],
 ["cinematography-5","Karl Freund","He took the camera off the tripod, and later perfected a three-camera set-up.","Take the camera off its stand when the story calls for it. If you set several cameras to work at once, know what you give up in the lighting."],
 ["cinematography-6","George Eastman","He separated taking the picture from developing it, and saw that film was where the money was.","Count the whole cost of the roll, not only the film. Processing is part of the price. Give the hard steps to a lab you trust."],
 ["cinematography-7","Robert W. Paul","He built his own camera and projector, and his camera could expose the same film more than once.","When the machine you need does not exist, make one from what you have. Each source you combine takes a share of the final picture, so decide the shares."],
 ["cinematography-cap","Eadweard Muybridge","He convinced sceptics with a session in which an accident was captured on the negatives.","Do not ask anyone to take your word. Show the frames and the numbers, so a doubter can check them."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
