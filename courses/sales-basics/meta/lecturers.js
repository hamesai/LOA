/* Lecturers for sales-basics: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "John H. Patterson": {
  "years": "1844–1922",
  "known": "Founder of National Cash Register, who gave each salesman an exclusive territory and opened a sales training school",
  "src": "https://www.britannica.com/money/John-Henry-Patterson",
  "check": "checked"
 },
 "Dale Carnegie": {
  "years": "1888–1955",
  "known": "American teacher of public speaking whose How to Win Friends and Influence People appeared in 1936",
  "src": "https://www.dalecarnegie.com/en/books/how-to-win-friends-influence-people",
  "check": "checked"
 },
 "Harry Gordon Selfridge": {
  "years": "1858–1947",
  "known": "American-born retailer who opened Selfridges on Oxford Street on 15 March 1909",
  "src": "https://en.wikipedia.org/wiki/Harry_Gordon_Selfridge",
  "check": "checked"
 },
 "Zig Ziglar": {
  "years": "1926–2012",
  "known": "American salesman, author and motivational speaker",
  "src": "https://en.wikipedia.org/wiki/Zig_Ziglar",
  "check": "checked"
 },
 "George Cadbury": {
  "years": "1839–1922",
  "known": "Quaker chocolate manufacturer who built the Bournville model village from 1893 and improved working conditions",
  "src": "https://www.britannica.com/money/George-Cadbury",
  "check": "checked"
 }
};
  var ROWS = [
 ["sales-basics-1","John H. Patterson","He set up structured methods and training for salespeople.","Selling is a process you can learn. Know the steps, know your product and know that people buy for their own reasons."],
 ["sales-basics-2","John H. Patterson","He taught salespeople to plan whom to see and why.","Do not waste calls. Decide who is worth your time, check they have the need and the means, and keep a record so nobody slips through."],
 ["sales-basics-3","Dale Carnegie","He taught the habit of taking real interest in the other person.","Do your homework, then open by being interested in them. People talk to someone who listens."],
 ["sales-basics-4","Harry Gordon Selfridge","He understood the shopper's experience and how to present goods.","Show the customer what it does for them. Ask a good question, listen to the answer and put your offer in their terms."],
 ["sales-basics-5","Zig Ziglar","He taught practical handling of objections and closing.","An objection is a question in disguise. Hear it out, answer it plainly, then ask for the decision and follow up as you said you would."],
 ["sales-basics-6","George Cadbury","He stands for fair dealing in business.","Selling fairly is good business. Be truthful, be clear on price and terms, and know the rules that protect your customer."],
 ["sales-basics-cap","Dale Carnegie","He taught the habit of taking real interest in the other person.","Put it together in a real conversation: prepare, open well, listen, present, handle doubts and be fair. Then review how it went and improve."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
