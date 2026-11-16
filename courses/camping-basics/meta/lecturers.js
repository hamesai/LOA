/* Lecturers for camping-basics: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "John Muir": {
  "years": "1838–1914",
  "known": "Scottish-born American naturalist who founded the Sierra Club in 1892 and campaigned for national parks",
  "src": "https://www.britannica.com/biography/John-Muir",
  "check": "checked"
 },
 "Horace Kephart": {
  "years": "1862–1931",
  "known": "American writer and librarian, author of the outdoors guide Camping and Woodcraft (1906)",
  "src": "https://en.wikipedia.org/wiki/Horace_Kephart",
  "check": "checked"
 },
 "Fridtjof Nansen": {
  "years": "1861–1930",
  "known": "Norwegian explorer who led the first crossing of Greenland on skis (1888) and the Fram expedition (1893–1896)",
  "src": "https://en.wikipedia.org/wiki/Fridtjof_Nansen",
  "check": "checked"
 },
 "Ernest Shackleton": {
  "years": "1874–1922",
  "known": "Anglo-Irish polar explorer who led the Endurance expedition (1914–1916), after which none of the Endurance crew had died",
  "src": "https://www.britannica.com/biography/Ernest-Henry-Shackleton",
  "check": "checked"
 },
 "Florence Nightingale": {
  "years": "1820–1910",
  "known": "Nurse and statistician who pressed for sanitary reform and presented mortality data in her polar area (rose) diagram",
  "src": "https://www.history.com/topics/womens-history/florence-nightingale",
  "check": "checked"
 }
};
  var ROWS = [
 ["camping-basics-1","John Muir","He spent long periods outdoors and argued for protecting the land you camp on.","Walk gently and take only what you need. The best camp is the one the next person cannot tell you used."],
 ["camping-basics-2","Horace Kephart","He wrote a practical manual on shelter and camp craft.","A good shelter is chosen before it is pitched. Read the ground, the wind and the sky, then put up something that keeps you dry with the least fuss."],
 ["camping-basics-3","Fridtjof Nansen","He was a polar traveller who took warmth and sleeping systems seriously.","Cold gets in from below and through damp. Insulate the ground, keep your layers dry and go to bed warm. Warmth is easier to keep than to win back."],
 ["camping-basics-4","Fridtjof Nansen","Polar travel made him careful about fuel, food and keeping a stove going.","Hot food and drink keep a camp going. Shelter the stove from wind, measure your fuel and keep your water clean. Plan meals so little is wasted."],
 ["camping-basics-5","Ernest Shackleton","He had to judge routes, timing and weather and turn back when needed.","Set a route, a time and a limit before you leave. If the weather or the light turns against you, turn back. Getting everyone home is the aim."],
 ["camping-basics-6","Florence Nightingale","She showed how basic hygiene and good records protect health.","Most trouble in camp starts small: a blister, a chill, a dirty cup. Treat it early, keep things clean and know how to ask for help clearly."],
 ["camping-basics-cap","Ernest Shackleton","He led through planning, adapting and keeping people together.","Plan the trip, pack for the plan and review it afterwards. The point of a trip is to come home able to go again."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
