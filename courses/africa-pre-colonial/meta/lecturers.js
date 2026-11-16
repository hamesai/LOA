/* Lecturers for africa-pre-colonial: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Jan Vansina": {
  "years": "1929–2017",
  "known": "Belgian historian of Central Africa who developed the historical method for oral tradition (Oral Tradition as History, 1985)",
  "src": "https://en.wikipedia.org/wiki/Jan_Vansina",
  "check": "dates and role checked in Wikipedia excerpt 30/10/2026"
 },
 "Ibn Khaldun": {
  "years": "1332–1406",
  "known": "Maghribi-born scholar and judge who wrote the Muqaddimah, an introduction to history that introduced the idea of asabiya, or group solidarity",
  "src": "https://en.wikipedia.org/wiki/Ibn_Khaldun",
  "check": "death (808 AH, 1406) and works checked in Wikipedia excerpt 30/10/2026; birth year 1332 is the standard date and was not shown in the excerpt"
 },
 "Ibn Battuta": {
  "years": "1304–1369",
  "known": "Moroccan traveller (born Tangier 24/02/1304) who dictated the Rihla in 1354 to 55 after journeys that took him to Kilwa and to Mali",
  "src": "https://en.wikipedia.org/wiki/Ibn_Battuta",
  "check": "birth date, journeys and the Rihla checked in Wikipedia excerpt 30/10/2026; the death year is given as 1368 or 1369"
 },
 "Samuel Johnson": {
  "years": "1846–1901",
  "known": "Yoruba Anglican minister born in Sierra Leone who finished The History of the Yorubas in 1897; his brother Obadiah reconstructed it for publication in 1921",
  "src": "https://www.bu.edu/missiology/missionary-biography/i-k/johnson-samuel-1846-1901",
  "check": "checked against Boston University biography and the Cambridge University Press description 30/10/2026"
 },
 "Olaudah Equiano": {
  "years": "c. 1745–1797",
  "known": "Writer and abolitionist whose Interesting Narrative (1789) was a best seller; his birthplace is disputed",
  "src": "https://en.wikipedia.org/wiki/Olaudah_Equiano",
  "check": "death date 31/03/1797 and the birthplace dispute checked in Wikipedia excerpt 30/10/2026; birth year is approximate"
 }
};
  var ROWS = [
 ["africa-pre-colonial-1","Jan Vansina","He turned oral tradition from an object of doubt into a source with rules.","Before you trust a story, ask how it travelled: who carried it, for how long, and for whom. Then tag the date and look for a second kind of evidence."],
 ["africa-pre-colonial-2","Ibn Khaldun","He asked what holds a group together before believing its claims.","When a ruler's text says he is chosen, ask who stood behind him and who wrote it later. Treat it as evidence of the winners' image."],
 ["africa-pre-colonial-3","Ibn Khaldun","His life among Maghribi dynasties gives a lens for the Almoravids and Almohads.","Use a lens to ask questions, never to fill gaps. Where the sources are thin, say that they are thin."],
 ["africa-pre-colonial-4","Ibn Battuta","He is the best eyewitness we have for Mali in 1352 to 53, with known faults.","Rate a witness by what they saw, what they were told and how long afterwards they spoke. Then cross-check."],
 ["africa-pre-colonial-5","Samuel Johnson","He wrote a Yoruba history from Yoruba informants, with an openly patriotic aim.","Read an author's aim and informants first. A history written to preserve a nation selects as well as records."],
 ["africa-pre-colonial-6","Ibn Battuta","His few lines on Kilwa are among the earliest eyewitness words on a Swahili town.","Pair a visitor's impression with what the ground shows. Where their dates differ, give a range."],
 ["africa-pre-colonial-7","Jan Vansina","His rules for oral sources apply to the Zulu testimonies and the Shaka stories alike.","Count the years between event and telling, and ask who the speaker could have met. Differences between versions are clues."],
 ["africa-pre-colonial-8","Olaudah Equiano","His narrative is a key voice on the Atlantic trade, and his birthplace is disputed.","Keep the records beside the story. A disputed detail does not cancel a witness, but it tells you how to cite him."],
 ["africa-pre-colonial-cap","Jan Vansina","His habit of asking who carried a source and why suits an atlas that tags every claim.","Give each source a date, a carrier, a purpose and a second check, and tag the claim that rests on it."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
