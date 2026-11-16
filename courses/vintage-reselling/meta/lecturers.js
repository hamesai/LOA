/* Lecturers for vintage-reselling: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Josiah Wedgwood": {
  "years": "1730–1795",
  "known": "English potter who founded the Wedgwood company in 1759 and is credited with early sales methods such as illustrated catalogues and money-back guarantees",
  "src": "https://www.britannica.com/biography/Josiah-Wedgwood",
  "check": "checked (dates in Britannica and Wikipedia agree; sales methods from Wikipedia)"
 },
 "Thomas Chippendale": {
  "years": "1718–1779",
  "known": "English cabinetmaker who published The Gentleman and Cabinet-Maker's Director in 1754",
  "src": "https://www.britannica.com/biography/Thomas-Chippendale",
  "check": "checked (baptised 1718, buried 1779)"
 },
 "Arthur Hill Hassall": {
  "years": "1817–1894",
  "known": "British physician, chemist and microscopist whose Lancet reports on food adulteration led to the 1860 Food Adulteration Act",
  "src": "https://en.wikipedia.org/wiki/Arthur_Hill_Hassall",
  "check": "checked (Wikipedia only)"
 },
 "Harry Gordon Selfridge": {
  "years": "1858–1947",
  "known": "American-born retailer who opened Selfridges on Oxford Street on 15 March 1909",
  "src": "https://en.wikipedia.org/wiki/Harry_Gordon_Selfridge",
  "check": "checked"
 },
 "Luca Pacioli": {
  "years": "born 1446–1448",
  "known": "Italian mathematician and Franciscan friar whose Summa de arithmetica (Venice, 1494) described the double-entry bookkeeping used by merchants",
  "src": "https://en.wikipedia.org/wiki/Luca_Pacioli",
  "check": "birth range checked (Wikipedia); death checked 17/10/2026 (19 June 1517, Wikipedia and MacTutor)"
 }
};
  var ROWS = [
 ["vintage-reselling-1","Josiah Wedgwood","He is remembered for knowing his costs and for selling methods that put the customer at ease.","Know what each piece truly costs you before you praise its margin. Then promise buyers what you will honour, and honour it."],
 ["vintage-reselling-2","Josiah Wedgwood","He improved his pottery by systematic experiment.","Do not guess where to buy. Test two sources with small lots, write down what happens and change one thing at a time."],
 ["vintage-reselling-3","Thomas Chippendale","His book of designs was copied so widely that his name outran his own workshop.","A style is not a signature. Say what the piece is, say what you can show, and let a document, not a famous name, carry the attribution."],
 ["vintage-reselling-4","Arthur Hill Hassall","He tested what the label claimed and published what he found.","Do not trust the appearance of a thing. Test the claim, record the result and describe only what the test showed."],
 ["vintage-reselling-5","Harry Gordon Selfridge","He made goods easy to see and shopping pleasant.","Let the buyer walk round the item with their eyes: every side, every mark, every flaw, in good light."],
 ["vintage-reselling-6","Luca Pacioli","He published an early description of merchants' bookkeeping.","Keep your books so you can prove them. Close the count each week, and do not rest until what you hold agrees with what you recorded."],
 ["vintage-reselling-cap","Luca Pacioli","He proposed a trial balance to prove that books agree.","Before you call the pack finished, check that every number agrees with every other. A mismatch tells you where to look."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
