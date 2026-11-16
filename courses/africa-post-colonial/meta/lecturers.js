/* Lecturers for africa-post-colonial: one summoned historical figure per module. PEOPLE holds the checked biography facts and sources.
   ROWS: [module key, name, why this lecturer, welcome in their voice]. The welcome is a simulated voice written for teaching; it adds no new facts.
   A person who lectures in more than one course appears in each course's file; keep the entries identical (kit.py meta warns if they differ). */
(function () {
  var PEOPLE = {
 "Albert Adu Boahen": {
  "years": "1932–2006",
  "known": "Ghanaian historian (University of Ghana, 1959 to 1990) and first African to chair its history department, who worked on the UNESCO General History of Africa",
  "src": "https://en.wikipedia.org/wiki/Albert_Adu_Boahen",
  "check": "dates, post and UNESCO role checked in Wikipedia excerpt 30/10/2026; the colonial-period argument comes from the working library"
 },
 "W. E. B. Du Bois": {
  "years": "1868–1963",
  "known": "American scholar and organiser of the Pan-African Congresses, co-founder of the NAACP (1909), who moved to Ghana in 1961 and died in Accra on 27/08/1963",
  "src": "https://en.wikipedia.org/wiki/W._E._B._Du_Bois",
  "check": "NAACP, fieldwork, Black Reconstruction and death checked in Wikipedia excerpt 30/10/2026; birth year 1868 is the standard date and was not shown in the excerpt"
 },
 "Julius Nyerere": {
  "years": "1922–1999",
  "known": "Tanzanian politician and theorist (born 13/04/1922) who helped form TANU in 1954, led Tanganyika to independence and developed ujamaa",
  "src": "https://en.wikipedia.org/wiki/Julius_Nyerere",
  "check": "dates, TANU and ujamaa checked in Wikipedia excerpt 30/10/2026"
 },
 "Steve Biko": {
  "years": "1946–1977",
  "known": "South African activist (born 18/12/1946) who founded the South African Students' Organisation in 1968 and developed Black Consciousness; died in police custody on 12/09/1977",
  "src": "https://en.wikipedia.org/wiki/Steve_Biko",
  "check": "dates, SASO and death checked in Wikipedia excerpt 30/10/2026"
 },
 "Chinua Achebe": {
  "years": "1930–2013",
  "known": "Nigerian novelist (born 16/11/1930) who published Things Fall Apart in 1958, served the Biafran cause and published There Was a Country in 2012",
  "src": "https://en.wikipedia.org/wiki/Chinua_Achebe",
  "check": "dates and works checked in Wikipedia excerpt 30/10/2026"
 }
};
  var ROWS = [
 ["africa-post-colonial-1","Albert Adu Boahen","He wrote African history from the African side and treated the colonial period as short.","Before you accept a colonial-era account, ask who the African actors were and what lasted. Then check what the official source leaves out."],
 ["africa-post-colonial-2","Albert Adu Boahen","His African-perspective habit applies to every case of resistance.","Match each question to the record that can answer it, and keep African and colonial records apart."],
 ["africa-post-colonial-3","W. E. B. Du Bois","He organised the Pan-African Congresses and built arguments from collected evidence.","Ask for the data behind a claim, the references and the purpose, before you repeat it."],
 ["africa-post-colonial-4","Julius Nyerere","He led Tanganyika to independence and built ujamaa, a project to judge by its aims and results.","State the aim, test the results, and name your criterion before you give a verdict."],
 ["africa-post-colonial-5","Steve Biko","He asked what a system did to people's sense of themselves, as well as what it did to their bodies.","Define your terms, separate laws from events, and ask what a measure asked people to believe."],
 ["africa-post-colonial-6","Chinua Achebe","He wrote of Biafra as a witness and an envoy, and critics have noted his limits too.","Use a witness for experience and a historian for scale, and mark what each lacks."],
 ["africa-post-colonial-7","Julius Nyerere","His preference for gradual steps to unity gives a lens on the African Union.","Compare an institution's words with its practice, and ask what members gave up."],
 ["africa-post-colonial-cap","Chinua Achebe","His writing from inside experience, and the critics' remarks, model the capstone's voice note.","Name the voice, who produced it, what it shows and its limits, and pair it with a record."]
];
  var L = (window.COURSE_LECTURERS = window.COURSE_LECTURERS || {});
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE = window.COURSE_LECTURER_PEOPLE || {}, PEOPLE);
})();
