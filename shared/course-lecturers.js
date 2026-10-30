/* Lecturers: one summoned historical figure per module, keyed by module key. Five per course.
   PEOPLE holds the checked biography facts and sources. ROWS: [module key, name, why this lecturer, welcome in their voice].
   The welcome is a simulated voice written for teaching. It is not a real quotation and adds no new facts. */
(function () {
  var PEOPLE = {
 "Joseph Paxton": {
  "years": "1803–1865",
  "known": "Gardener at Chatsworth who built glasshouses there, then designed the Crystal Palace for the 1851 Great Exhibition",
  "src": "https://www.britannica.com/biography/Joseph-Paxton",
  "check": "checked (Britannica gives birth year as 1801; Wikipedia gives 1803)"
 },
 "Gertrude Jekyll": {
  "years": "1843–1932",
  "known": "Garden designer who worked with the architect Edwin Lutyens and was known for her handling of colour",
  "src": "https://www.britannica.com/biography/Gertrude-Jekyll",
  "check": "checked"
 },
 "Gregor Mendel": {
  "years": "1822–1884",
  "known": "Augustinian friar and abbot whose pea-plant experiments (1856–1863) established the rules of heredity",
  "src": "https://www.britannica.com/biography/Gregor-Mendel",
  "check": "checked"
 },
 "Justus von Liebig": {
  "years": "1803–1873",
  "known": "Chemist who popularised the law of the minimum, that growth is limited by the scarcest resource",
  "src": "https://en.wikipedia.org/wiki/Liebig%27s_law_of_the_minimum",
  "check": "law checked; dates checked 17/10/2026 (Wikipedia and Britannica: 12 May 1803 to 18 April 1873)"
 },
 "Rachel Carson": {
  "years": "1907–1964",
  "known": "Marine biologist and writer whose book Silent Spring (1962) raised public concern about pesticides",
  "src": "https://www.britannica.com/biography/Rachel-Carson",
  "check": "checked (Britannica, 11/10/2026)"
 },
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
 "Florence Nightingale": {
  "years": "1820–1910",
  "known": "Nurse and statistician who pressed for sanitary reform and presented mortality data in her polar area (rose) diagram",
  "src": "https://www.history.com/topics/womens-history/florence-nightingale",
  "check": "checked"
 },
 "Ernest Shackleton": {
  "years": "1874–1922",
  "known": "Anglo-Irish polar explorer who led the Endurance expedition (1914–1916), after which none of the Endurance crew had died",
  "src": "https://www.britannica.com/biography/Ernest-Henry-Shackleton",
  "check": "checked"
 },
 "Louis Pasteur": {
  "years": "1822–1895",
  "known": "French chemist and microbiologist who developed the germ theory of disease and pasteurization",
  "src": "https://www.britannica.com/biography/Louis-Pasteur",
  "check": "checked"
 },
 "John Snow": {
  "years": "1813–1858",
  "known": "London physician who traced the 1854 Broad Street cholera outbreak to a contaminated water pump",
  "src": "https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak",
  "check": "outbreak checked; dates checked 17/10/2026 (BBC and Wikipedia: 15 March 1813 to 16 June 1858)"
 },
 "Count Rumford (Benjamin Thompson)": {
  "years": "1753–1814",
  "known": "American-born physicist who studied heat, designed fuel-saving stoves and fireplaces, and devised Rumford's Soup for the poor in Bavaria",
  "src": "https://www.britannica.com/biography/Sir-Benjamin-Thompson-Graf-von-Rumford",
  "check": "checked"
 },
 "Nicolas Appert": {
  "years": "c.1749–1841",
  "known": "French confectioner who invented preserving food in sealed, heated jars and won a 12,000-franc award in 1810",
  "src": "https://www.britannica.com/biography/Nicolas-Appert",
  "check": "checked"
 },
 "Benjamin Franklin": {
  "years": "1706–1790",
  "known": "Printer, scientist and statesman of colonial and revolutionary America",
  "src": "https://www.britannica.com/biography/Benjamin-Franklin",
  "check": "checked (Britannica, 11/10/2026)"
 },
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
 },
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
 },
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
 },
 "Konstantin Stanislavski": {
  "years": "1863–1938",
  "known": "Russian actor and director who co-founded the Moscow Art Theatre in 1898 and developed the Stanislavsky system of acting",
  "src": "https://www.britannica.com/biography/Konstantin-Stanislavsky",
  "check": "checked (Britannica spells the name Stanislavsky)"
 },
 "Harley Granville-Barker": {
  "years": "1877–1946",
  "known": "English actor, director and playwright who staged Shakespeare at the Savoy in 1912–14 and wrote the Prefaces to Shakespeare",
  "src": "https://www.britannica.com/biography/Harley-Granville-Barker",
  "check": "checked"
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
 },
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
 "Luca Pacioli": {
  "years": "born 1446–1448",
  "known": "Italian mathematician and Franciscan friar whose Summa de arithmetica (Venice, 1494) described the double-entry bookkeeping used by merchants",
  "src": "https://en.wikipedia.org/wiki/Luca_Pacioli",
  "check": "birth range checked (Wikipedia); death checked 17/10/2026 (19 June 1517, Wikipedia and MacTutor)"
 }
,
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
 },
 "Irving Fisher": {"years": "1867–1947", "known": "American economist who explained interest as the link between impatience to spend and the opportunity to invest, in The Theory of Interest (1930)", "src": "https://en.wikipedia.org/wiki/Irving_Fisher", "check": "1907 book read in part; 1930 title and years 1867–1947 from the Internet Archive catalogue; 1929 statement from Federal Reserve History"},
 "Louis Bachelier": {"years": "1870–1946", "known": "French mathematician whose 1900 thesis Théorie de la spéculation began by saying price movements cannot be forecast mathematically, and sought the probability law of price changes", "src": "https://en.wikipedia.org/wiki/Louis_Bachelier", "check": "thesis introduction read in French; years 1870–1946 from the Internet Archive catalogue"},
 "Harry Markowitz": {"years": "1927–2023", "known": "American economist whose 1952 paper Portfolio Selection founded modern portfolio theory", "src": "https://en.wikipedia.org/wiki/Harry_Markowitz", "check": "1952 paper read in part (free PDF copy); death in 2023 from the NYT obituary headline; birth year not checked this session"},
 "John Bogle": {"years": "1929–2019", "known": "Founder of The Vanguard Group (1974) who popularised the index fund", "src": "https://en.wikipedia.org/wiki/John_Bogle", "check": "Vanguard founding dates from his own 2016 speech; life dates from Wikipedia (8 May 1929 to 16 January 2019)"},
 "Benjamin Graham": {"years": "1894–1976", "known": "Value investor who separated investment from speculation and wrote The Intelligent Investor (1949)", "src": "https://en.wikipedia.org/wiki/Benjamin_Graham", "check": "investment-versus-speculation and margin-of-safety passages read in The Intelligent Investor; life dates from Wikipedia"}
 };
  var ROWS = [
 [
  "greenhouse-year-1",
  "Joseph Paxton",
  "He treated glass, heat and light as one designed system.",
  "Before you plant anything, look at the house itself: glass, frame, floor, vents, water. Each part changes the others. Learn to see the whole, and the rest of the year gets simpler."
 ],
 [
  "greenhouse-year-2",
  "Gertrude Jekyll",
  "She planned gardens as a sequence through the year, which is what succession planning is.",
  "A year is a series of handovers. One crop finishes as the next is ready. Draw the calendar first, then fill the beds, and you will not face an empty house or a glut."
 ],
 [
  "greenhouse-year-3",
  "Gregor Mendel",
  "He counted, recorded and repeated, the habits good seed starting needs.",
  "Seeds reward patience and careful counting. Sow a few, label them, write down what happens, and sow again. Your notes become your best teacher."
 ],
 [
  "greenhouse-year-4",
  "Justus von Liebig",
  "His work on plant nutrients underlies feeding and growing media.",
  "A plant takes what the root can reach. Ask what is in the medium, what is in the water, and which one is short. Feed the shortage, not the habit."
 ],
 [
  "greenhouse-year-5",
  "Joseph Paxton",
  "He designed glasshouses to manage heat, light and air.",
  "Glass traps heat fast, so air has to move. Open the vents early, shade when the sun is high and close up before the cold returns. Watch the house and it will tell you what it needs."
 ],
 [
  "greenhouse-year-6",
  "Rachel Carson",
  "She made the case for looking before spraying, the core of integrated pest management.",
  "Look closely and look often. Know what is a pest, what is a friend and what is only a leaf having a bad day. Act on what you find, in the gentlest way that works."
 ],
 [
  "greenhouse-year-7",
  "Gertrude Jekyll",
  "She planned in seasons and looked back to improve each year.",
  "At the end of the year, walk the beds and read your records. What worked, what ran late, what sat idle? Write it down and let it shape next year's plan."
 ],
 [
  "greenhouse-year-cap",
  "Joseph Paxton",
  "He treated the whole structure as one working system.",
  "Bring everything together: the house, the calendar, the plants and the records. A year in the greenhouse is one system. Plan it, run it and review it."
 ],
 [
  "camping-basics-1",
  "John Muir",
  "He spent long periods outdoors and argued for protecting the land you camp on.",
  "Walk gently and take only what you need. The best camp is the one the next person cannot tell you used."
 ],
 [
  "camping-basics-2",
  "Horace Kephart",
  "He wrote a practical manual on shelter and camp craft.",
  "A good shelter is chosen before it is pitched. Read the ground, the wind and the sky, then put up something that keeps you dry with the least fuss."
 ],
 [
  "camping-basics-3",
  "Fridtjof Nansen",
  "He was a polar traveller who took warmth and sleeping systems seriously.",
  "Cold gets in from below and through damp. Insulate the ground, keep your layers dry and go to bed warm. Warmth is easier to keep than to win back."
 ],
 [
  "camping-basics-4",
  "Fridtjof Nansen",
  "Polar travel made him careful about fuel, food and keeping a stove going.",
  "Hot food and drink keep a camp going. Shelter the stove from wind, measure your fuel and keep your water clean. Plan meals so little is wasted."
 ],
 [
  "camping-basics-5",
  "Ernest Shackleton",
  "He had to judge routes, timing and weather and turn back when needed.",
  "Set a route, a time and a limit before you leave. If the weather or the light turns against you, turn back. Getting everyone home is the aim."
 ],
 [
  "camping-basics-6",
  "Florence Nightingale",
  "She showed how basic hygiene and good records protect health.",
  "Most trouble in camp starts small: a blister, a chill, a dirty cup. Treat it early, keep things clean and know how to ask for help clearly."
 ],
 [
  "camping-basics-cap",
  "Ernest Shackleton",
  "He led through planning, adapting and keeping people together.",
  "Plan the trip, pack for the plan and review it afterwards. The point of a trip is to come home able to go again."
 ],
 [
  "grid-down-food-1",
  "Louis Pasteur",
  "His work explains why temperature and cleanliness matter.",
  "Invisible organisms do the harm. Keep them from reaching the food, from multiplying and from surviving. That is the whole of the five keys."
 ],
 [
  "grid-down-food-2",
  "Louis Pasteur",
  "His work shows why cold slows microbes and warmth lets them multiply.",
  "Cold slows the growth, it does not end it. Keep food cold as long as you can, and when it warms past safe limits, decide early what to cook, eat or discard."
 ],
 [
  "grid-down-food-3",
  "John Snow",
  "He tied illness to unsafe water by following the evidence.",
  "Water looks the same safe or unsafe. Treat it before you drink it, store it clean and ask where it came from."
 ],
 [
  "grid-down-food-4",
  "Count Rumford (Benjamin Thompson)",
  "He designed fuel-saving stoves and nourishing meals for the poor.",
  "Fuel is precious when the grid is down. Use a good pot, a lid and a steady flame, and cook food through to a safe temperature."
 ],
 [
  "grid-down-food-5",
  "Nicolas Appert",
  "He is credited with the first practical method of canning.",
  "To keep food, remove what spoils it: heat, seal and store it dry or cool. Do it carefully, because a mistake can hide until you eat."
 ],
 [
  "grid-down-food-6",
  "Benjamin Franklin",
  "He organised practical community preparation.",
  "When the water rises, you decide quickly. Know in advance what you will keep, what you will throw away and where you will go, and write it in your plan."
 ],
 [
  "grid-down-food-cap",
  "Benjamin Franklin",
  "He organised practical preparation, such as volunteer fire companies.",
  "A plan on paper is worth more than a good intention. Write the 72 hours down, share it with the household and test it before you need it."
 ],
 [
  "personal-training-1",
  "Jerry Morris",
  "He produced early evidence that activity protects health.",
  "Start from the evidence. Know what the guidelines say, who they are for and what they cannot tell you about the person in front of you."
 ],
 [
  "personal-training-2",
  "Jerry Morris",
  "He worked on who benefits from activity and who faces risk.",
  "Before you coach someone, find out who they are and what risks they carry. Screen carefully, stay within your scope and refer on when you should."
 ],
 [
  "personal-training-3",
  "Carl Rogers",
  "His approach to listening underlies good coaching conversations.",
  "People change when they feel heard. Ask, reflect back and let them find their own reasons, then help them turn those reasons into a plan."
 ],
 [
  "personal-training-4",
  "Hans Selye",
  "His work on stress and adaptation helps explain training load and recovery.",
  "Training is a stress the body adapts to, if it gets time to recover. Too little changes nothing and too much wears a person down. Look for the dose in between."
 ],
 [
  "personal-training-5",
  "Thomas DeLorme",
  "He set out a way to increase resistance step by step.",
  "A programme is a path with small steps. Start where the person is, raise the load a little, and let the results guide the next change."
 ],
 [
  "personal-training-6",
  "Hans Selye",
  "His work links stress, adaptation and recovery.",
  "Training only works if the body recovers. Food, sleep and rest are part of the programme. For clients with health conditions, work with their clinician and know your limits."
 ],
 [
  "personal-training-cap",
  "Albert Bandura",
  "His work on belief in one's own ability supports building a client's confidence across a plan.",
  "A client who believes they can will keep going. Build the plan in steps they can finish, and let each finished step build the next."
 ],
 [
  "public-speaking-1",
  "Aristotle",
  "He gave speaking its basic framework of character, reason and emotion.",
  "A speech is a promise to an audience. Be honest, be clear and be worth their time. Nerves are a sign that you care."
 ],
 [
  "public-speaking-2",
  "Aristotle",
  "He wrote about fitting a speech to its audience and purpose.",
  "Ask who is listening, what they believe and what they need from you. Then shape the speech for them, not for yourself."
 ],
 [
  "public-speaking-3",
  "Cicero",
  "He wrote about gathering and judging material before speaking.",
  "Gather more than you will use. Check it, weigh it, and keep what supports your point. Your audience will trust what you can back up."
 ],
 [
  "public-speaking-4",
  "Quintilian",
  "He taught orators how to arrange and train for speaking.",
  "An audience follows a road you have built. Open so they know where they are going, order the middle, and close so they remember it."
 ],
 [
  "public-speaking-5",
  "Winston Churchill",
  "He is remembered for plain, rhythmic, carefully prepared language.",
  "Short words are strong. Choose them with care, say them at a pace people can follow and leave a pause where the weight falls."
 ],
 [
  "public-speaking-6",
  "Frederick Douglass",
  "He is remembered as a persuasive speaker who used evidence and story.",
  "To move an audience, show them something they can see and give them a reason to act. Tell the truth as plainly as you can."
 ],
 [
  "public-speaking-cap",
  "Winston Churchill",
  "He is remembered for preparing speeches carefully and rehearsing them.",
  "Write it, say it aloud, cut what is weak and say it again. Then give the speech and review how it went, honestly."
 ],
 [
  "sales-basics-1",
  "John H. Patterson",
  "He set up structured methods and training for salespeople.",
  "Selling is a process you can learn. Know the steps, know your product and know that people buy for their own reasons."
 ],
 [
  "sales-basics-2",
  "John H. Patterson",
  "He taught salespeople to plan whom to see and why.",
  "Do not waste calls. Decide who is worth your time, check they have the need and the means, and keep a record so nobody slips through."
 ],
 [
  "sales-basics-3",
  "Dale Carnegie",
  "He taught the habit of taking real interest in the other person.",
  "Do your homework, then open by being interested in them. People talk to someone who listens."
 ],
 [
  "sales-basics-4",
  "Harry Gordon Selfridge",
  "He understood the shopper's experience and how to present goods.",
  "Show the customer what it does for them. Ask a good question, listen to the answer and put your offer in their terms."
 ],
 [
  "sales-basics-5",
  "Zig Ziglar",
  "He taught practical handling of objections and closing.",
  "An objection is a question in disguise. Hear it out, answer it plainly, then ask for the decision and follow up as you said you would."
 ],
 [
  "sales-basics-6",
  "George Cadbury",
  "He stands for fair dealing in business.",
  "Selling fairly is good business. Be truthful, be clear on price and terms, and know the rules that protect your customer."
 ],
 [
  "sales-basics-cap",
  "Dale Carnegie",
  "He taught the habit of taking real interest in the other person.",
  "Put it together in a real conversation: prepare, open well, listen, present, handle doubts and be fair. Then review how it went and improve."
 ],
 [
  "directing-1",
  "Harley Granville-Barker",
  "He read plays as a working director, asking how they play in time.",
  "Read the play as it will be heard. Mark where it runs and where it stops, cut only with a reason, and let nothing you add drown the words."
 ],
 [
  "directing-2",
  "Konstantin Stanislavski",
  "He gave actors a way in through honest questions and actions.",
  "Do not ask an actor to feel. Give them a world to believe in, an honest 'if' and something to do, and watch what they find."
 ],
 [
  "directing-3",
  "Konstantin Stanislavski",
  "He taught that the parts of a role must join into an unbroken line.",
  "A role is a line, not a pile of moments. Help each actor join their wants into one line that runs through the play."
 ],
 [
  "directing-4",
  "Vsevolod Meyerhold",
  "He trained actors from the body outward and staged ideas in movement.",
  "The body can say what a thought cannot. Set the actor a clear physical score, keep it in rhythm and see what it finds."
 ],
 [
  "directing-5",
  "Sergei Eisenstein",
  "He treated the cut as a collision that makes an idea.",
  "Two shots together can mean more than either alone. Choose what meets what, and be sure the meaning is true to the scene."
 ],
 [
  "directing-6",
  "Peter Brook",
  "He started from an empty space and a watching audience.",
  "Begin with a bare space and one strong idea. Add only what the story needs and what the audience cannot supply for themselves."
 ],
 [
  "directing-cap",
  "Konstantin Stanislavski",
  "He tested every moment by whether it could be believed.",
  "Watch your work and ask where you stopped believing. Fix those moments one at a time and try again."
 ],
 [
  "vintage-reselling-1",
  "Josiah Wedgwood",
  "He is remembered for knowing his costs and for selling methods that put the customer at ease.",
  "Know what each piece truly costs you before you praise its margin. Then promise buyers what you will honour, and honour it."
 ],
 [
  "vintage-reselling-2",
  "Josiah Wedgwood",
  "He improved his pottery by systematic experiment.",
  "Do not guess where to buy. Test two sources with small lots, write down what happens and change one thing at a time."
 ],
 [
  "vintage-reselling-3",
  "Thomas Chippendale",
  "His book of designs was copied so widely that his name outran his own workshop.",
  "A style is not a signature. Say what the piece is, say what you can show, and let a document, not a famous name, carry the attribution."
 ],
 [
  "vintage-reselling-4",
  "Arthur Hill Hassall",
  "He tested what the label claimed and published what he found.",
  "Do not trust the appearance of a thing. Test the claim, record the result and describe only what the test showed."
 ],
 [
  "vintage-reselling-5",
  "Harry Gordon Selfridge",
  "He made goods easy to see and shopping pleasant.",
  "Let the buyer walk round the item with their eyes: every side, every mark, every flaw, in good light."
 ],
 [
  "vintage-reselling-6",
  "Luca Pacioli",
  "He published an early description of merchants' bookkeeping.",
  "Keep your books so you can prove them. Close the count each week, and do not rest until what you hold agrees with what you recorded."
 ],
 [
  "vintage-reselling-cap",
  "Luca Pacioli",
  "He proposed a trial balance to prove that books agree.",
  "Before you call the pack finished, check that every number agrees with every other. A mismatch tells you where to look."
 ],
 [
   "cinematography-1",
   "Eadweard Muybridge",
   "He chased faster shutters and more sensitive emulsions to freeze motion.",
   "You want to know what a moving picture is made of? Separate pictures, one after another, each caught fast enough to see. Decide what each of your exposures should do with motion, and be ready to pay for it in light."
 ],
 [
   "cinematography-2",
   "Gregg Toland",
   "He worked with engineers to change his lenses and camera instead of accepting their limits.",
   "Do not take a camera as you find it. Write down what yours cannot do, change what can be changed, test the change before the day, and plan around what cannot."
 ],
 [
   "cinematography-3",
   "Gregg Toland",
   "He closed the aperture to f/8 to f/16 and found the light to do it.",
   "If you want near and far both sharp, close the aperture and find the light to do it. Count the stops first, because the light has to come from somewhere."
 ],
 [
   "cinematography-4",
   "Karl Freund",
   "He made light meters as well as films.",
   "Measure before you light. Put a number on the face, and light every place the actor will stand to the same number."
 ],
 [
   "cinematography-5",
   "Karl Freund",
   "He took the camera off the tripod, and later perfected a three-camera set-up.",
   "Take the camera off its stand when the story calls for it. If you set several cameras to work at once, know what you give up in the lighting."
 ],
 [
   "cinematography-6",
   "George Eastman",
   "He separated taking the picture from developing it, and saw that film was where the money was.",
   "Count the whole cost of the roll, not only the film. Processing is part of the price. Give the hard steps to a lab you trust."
 ],
 [
   "cinematography-7",
   "Robert W. Paul",
   "He built his own camera and projector, and his camera could expose the same film more than once.",
   "When the machine you need does not exist, make one from what you have. Each source you combine takes a share of the final picture, so decide the shares."
 ],
 [
   "cinematography-cap",
   "Eadweard Muybridge",
   "He convinced sceptics with a session in which an accident was captured on the negatives.",
   "Do not ask anyone to take your word. Show the frames and the numbers, so a doubter can check them."
 ],
 ["investing-1", "Irving Fisher", "He explained why people accept less now to get more later, and that answer is the first decision in any plan.", "Before you invest, ask what you will need and when. Money you will need soon belongs in a safe place; money you can leave can take a little risk."],
 ["investing-2", "Irving Fisher", "He compared sums across time as a matter of habit.", "Put every sum on the same timeline. Ask what it will be worth later, after inflation, and after fees."],
 ["investing-3", "Louis Bachelier", "He began by saying price movements cannot be forecast mathematically, so a plan that depends on predicting them is fragile.", "Plan for the bad end of the range before you invest. A plan that only works in the good years is not a plan."],
 ["investing-4", "Harry Markowitz", "He showed that risk depends on how holdings move together, not only on each one alone.", "Look at what your holdings do together in a bad year. Two funds that fall at the same time give you less protection than they seem to."],
 ["investing-5", "John Bogle", "He argued that low costs are one of the few things an investor can control.", "Find every charge, in percent and in pounds. Compare each with a plain tracker, and ask what the extra cost must buy."],
 ["investing-6", "Benjamin Graham", "He asked whether an operation rests on analysis or on hope, and bought with a margin for error.", "Write the basis for your estimate before you buy. Then ask for a margin, and check the firm before you pay anyone."],
 ["investing-cap", "Benjamin Graham", "He tested whether a plan could survive being wrong.", "Mark every forecast in your plan. Replace each with a range you can survive, or remove it."]
];
  var L = {};
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; L[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  window.COURSE_LECTURERS = L;
  window.COURSE_LECTURER_PEOPLE = PEOPLE;
})();

/* africa-pre-colonial entries */
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
["africa-pre-colonial-1", "Jan Vansina", "He turned oral tradition from an object of doubt into a source with rules.", "Before you trust a story, ask how it travelled: who carried it, for how long, and for whom. Then tag the date and look for a second kind of evidence."],
["africa-pre-colonial-2", "Ibn Khaldun", "He asked what holds a group together before believing its claims.", "When a ruler's text says he is chosen, ask who stood behind him and who wrote it later. Treat it as evidence of the winners' image."],
["africa-pre-colonial-3", "Ibn Khaldun", "His life among Maghribi dynasties gives a lens for the Almoravids and Almohads.", "Use a lens to ask questions, never to fill gaps. Where the sources are thin, say that they are thin."],
["africa-pre-colonial-4", "Ibn Battuta", "He is the best eyewitness we have for Mali in 1352 to 53, with known faults.", "Rate a witness by what they saw, what they were told and how long afterwards they spoke. Then cross-check."],
["africa-pre-colonial-5", "Samuel Johnson", "He wrote a Yoruba history from Yoruba informants, with an openly patriotic aim.", "Read an author's aim and informants first. A history written to preserve a nation selects as well as records."],
["africa-pre-colonial-6", "Ibn Battuta", "His few lines on Kilwa are among the earliest eyewitness words on a Swahili town.", "Pair a visitor's impression with what the ground shows. Where their dates differ, give a range."],
["africa-pre-colonial-7", "Jan Vansina", "His rules for oral sources apply to the Zulu testimonies and the Shaka stories alike.", "Count the years between event and telling, and ask who the speaker could have met. Differences between versions are clues."],
["africa-pre-colonial-8", "Olaudah Equiano", "His narrative is a key voice on the Atlantic trade, and his birthplace is disputed.", "Keep the records beside the story. A disputed detail does not cancel a witness, but it tells you how to cite him."],
["africa-pre-colonial-cap", "Jan Vansina", "His habit of asking who carried a source and why suits an atlas that tags every claim.", "Give each source a date, a carrier, a purpose and a second check, and tag the claim that rests on it."]
  ];
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; window.COURSE_LECTURERS[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE, PEOPLE);
})();

/* africa-post-colonial entries */
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
 [
  "africa-post-colonial-1",
  "Albert Adu Boahen",
  "He wrote African history from the African side and treated the colonial period as short.",
  "Before you accept a colonial-era account, ask who the African actors were and what lasted. Then check what the official source leaves out."
 ],
 [
  "africa-post-colonial-2",
  "Albert Adu Boahen",
  "His African-perspective habit applies to every case of resistance.",
  "Match each question to the record that can answer it, and keep African and colonial records apart."
 ],
 [
  "africa-post-colonial-3",
  "W. E. B. Du Bois",
  "He organised the Pan-African Congresses and built arguments from collected evidence.",
  "Ask for the data behind a claim, the references and the purpose, before you repeat it."
 ],
 [
  "africa-post-colonial-4",
  "Julius Nyerere",
  "He led Tanganyika to independence and built ujamaa, a project to judge by its aims and results.",
  "State the aim, test the results, and name your criterion before you give a verdict."
 ],
 [
  "africa-post-colonial-5",
  "Steve Biko",
  "He asked what a system did to people's sense of themselves, as well as what it did to their bodies.",
  "Define your terms, separate laws from events, and ask what a measure asked people to believe."
 ],
 [
  "africa-post-colonial-6",
  "Chinua Achebe",
  "He wrote of Biafra as a witness and an envoy, and critics have noted his limits too.",
  "Use a witness for experience and a historian for scale, and mark what each lacks."
 ],
 [
  "africa-post-colonial-7",
  "Julius Nyerere",
  "His preference for gradual steps to unity gives a lens on the African Union.",
  "Compare an institution's words with its practice, and ask what members gave up."
 ],
 [
  "africa-post-colonial-cap",
  "Chinua Achebe",
  "His writing from inside experience, and the critics' remarks, model the capstone's voice note.",
  "Name the voice, who produced it, what it shows and its limits, and pair it with a record."
 ]
];
  ROWS.forEach(function (r) { var p = PEOPLE[r[1]]; window.COURSE_LECTURERS[r[0]] = { name: r[1], years: p.years, known: p.known, src: p.src, why: r[2], welcome: r[3] }; });
  Object.assign(window.COURSE_LECTURER_PEOPLE, PEOPLE);
})();
