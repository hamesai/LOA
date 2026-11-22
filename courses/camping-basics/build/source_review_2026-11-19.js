/* Camping: findings from the source reviews of 19/11/2026
   (Scottish Outdoor Access Code soac-2005, Countryside Code cc-gov, OS Map reading made easy os-mapbook,
   CDC Yellow Book water chapter cdc-yb-water). Findings are taught inside the topic lessons.
   node courses/camping-basics/build/source_review_2026-11-19.js */
const P = require("../../../_template/course_patch.js");
const C = "camping-basics";
const p = x => ({ t: "p", x });
const check = (q, o, a, w) => ({ t: "check", q, o, a, w });
function setP(m, lid, needle, x) {
  const { L, i } = P.find(m, lid, needle);
  if (L.blocks[i].t !== "p") throw new Error("not a paragraph: " + needle);
  L.blocks[i].x = x;
}
function table(m, lid, title) {
  const t = P.lesson(m, lid).blocks.find(b => b.t === "table" && b.title === title);
  if (!t) throw new Error("no table " + title);
  return t;
}

/* ---------- Module 1: access and leave no trace ---------- */
let m = P.load(C, "camping-basics-1");
P.insertAfter(m, "l1", "Scotland is the exception inside the UK", [
  p("Those rights come from the Land Reform (Scotland) Act 2003 and exist only while you act responsibly. They apply by day or night, and the Scottish Code names wild camping as one of the recreational purposes they cover. {{soac-p12}}"),
  p("Some ground is always off limits: land around a house, caravan or tent with enough space for the occupants' privacy, farm buildings and yards, fields where crops are sown or growing, sports pitches in use, school grounds, places that charge for entry, and building sites, railways and quarries. Motorised recreation is not covered, so a car or van stay is outside the rights. {{soac-p12}}"),
  p("Because a tent counts as a private place, the same privacy rule protects other campers: do not pitch on top of someone else's camp. {{soac-p3a}}")
]);
{ const t = table(m, "l1", "Camping access at a glance (check the local rule before you go)");
  const r = t.rows.find(r => /Rest of England/.test(r[0]));
  r[1] = "The Countryside Code asks you to follow local signs and keep to marked paths unless wider access exists, such as open access land. It lists camping among the activities that may need the landowner's permission. {{cc-gov-enjoy}}";
  r[2] = "Ask the landowner or use a campsite, unless a specific local scheme (such as Dartmoor's mapped areas) allows it."; }
P.insertAfter(m, "l3", "The England and Wales Countryside Code adds that you should only have barbecues", [
  p("The Scottish Code is the most detailed on fire. Use a stove rather than an open fire wherever possible. If you do light one, keep it small, under control and supervised, because you might be liable for any damage if it escapes. Never light one in prolonged dry periods, or in forests, woods, farmland, on peaty ground, near buildings or on historic sites, and remove every trace before you leave. {{soac-p5b}}"),
  p("Scots law backs this up: lighting a fire on enclosed or cultivated land, near a private road or in or near a plantation without the owner's consent is an offence. {{soac-annex}}"),
  p("In England and Wales, some land managers burn heath and moor on purpose between 1 October and 15 April. If you see a fire with nobody tending it, call 999. {{cc-gov-env}}")
]);
P.insertAfter(m, "l4", "The Scottish guidance agrees in spirit", [
  p("The Code's own wild-camping rules for Scotland: keep it lightweight, in small numbers, for two or three nights in one place; do not camp in enclosed fields of crops or farm animals; keep well away from buildings, roads and historic structures; and ask permission to camp near a house. {{soac-p5b}}"),
  p("Some ground is easily damaged: riverbanks, loch shores, marshes, bogs, mountain tops, steep slopes and coastal dunes. Never camp or light a fire on a historic site, which may look like nothing more than a grassy mound, a line of stones or a ruined wall. {{soac-p3b}}"),
  p("Cow and sheep droppings can carry E. coli. The risk is small, but it is highest when people camp or picnic where farm animals graze, so a grazed field is a poor pitch. {{soac-p3a}}")
]);
P.insertAfter(m, "l4", "Some ground is easily damaged", [
  check("You plan a wild camp in Scotland. Which pitch fits the Scottish Outdoor Access Code?",
    ["A flat corner of a field where sheep and lambs are grazing",
     "Open hillside well away from roads and houses",
     "A grassy mound beside standing stones, out of the wind",
     "A lay-by verge so the car is close by for the night",
     "The lawn of a holiday cottage, since nobody is staying there"],
    1, "The Code says to avoid enclosed fields of animals, keep well away from buildings, roads and historic structures, and it does not cover car stays or gardens. {{soac-p5b}}")
]);
P.save(m);

/* ---------- Module 4: water and food ---------- */
m = P.load(C, "camping-basics-4");
setP(m, "l3", "6,500 feet is about 1,980 m",
  "Boiling is the best way to kill germs, and the next best option is to filter and then disinfect. {{cdc}} The CDC Yellow Book explains why a minute is plenty: every organism that causes illness from water dies within seconds at boiling, and even at about 4,900 m water still boils at about 83°C, well above what kills gut germs. If fuel is short, bring the water to the first simmer, take it off the heat and keep it covered for 30 minutes. {{cdc-yb-heat}}");
P.insertAfter(m, "l3", "The CDC Yellow Book explains why a minute is plenty", [
  { t: "h", x: "Filters and chemicals: what the labels hide" },
  p("Most pocket filters are microfilters, with holes under 1 micron. They catch bacteria and the parasites Giardia and Cryptosporidium, but not viruses such as norovirus. Only an ultrafilter, around 0.01 micron, also stops viruses. Makers test their own 'purifier' claims; nobody checks them independently. {{cdc-yb-heat}}"),
  p("Chlorine and iodine kill bacteria and viruses, and Giardia with a longer wait, but barely touch Cryptosporidium. Chlorine dioxide does kill it, though it can take several hours. Cloudy water weakens every chemical, so let it settle or strain it first. Avoid iodine for more than a few weeks, in pregnancy, or with thyroid problems. {{cdc-yb-heat}}"),
  p("Match the method to the source. Water with little human or animal activity above it can be treated with any one method. Clear water below grazing cattle or a village needs boiling, UV, a microfilter plus chlorine, or an ultrafilter. Cloudy water needs settling first, then a second step. Practise with your kit before the trip. {{cdc-yb-choose}}")
]);
P.insertAfter(m, "l3", "Match the method to the source", [
  check("You fill up from a clear stream below fields of grazing cattle and carry only a microfilter and chlorine tablets. What does the CDC Yellow Book advise?",
    ["Filter it once and drink it straight away",
     "Use chlorine alone, since it kills every germ in a few minutes",
     "Filter it, then treat it with chlorine as well",
     "Drink it untreated, because running water cleans itself",
     "Strain it through a cloth, which is enough for clear water"],
    2, "Water near human or animal activity needs a microfilter plus a chemical, or heat, UV or an ultrafilter; chlorine alone misses Cryptosporidium and a microfilter alone misses viruses. {{cdc-yb-choose}}")
]);
P.insertAfter(m, "l4", "Camp food needs planning because your fridge is a cool box", [
  p("The Scottish Code adds a site rule: avoid eating in fields where farm animals are, or have recently been, or that have just been spread with lime or slurry, and take every food scrap and wrapper away, because animals may eat them and spread disease. {{soac-p5b}}")
]);
P.save(m);

/* ---------- Module 5: maps ---------- */
m = P.load(C, "camping-basics-5");
{ const L = P.lesson(m, "l1");
  const c = L.blocks.find(b => b.t === "callout" && /count the 1 km squares/.test(b.x));
  c.x = "A quick estimate: count the 1 km squares you cross. Ordnance Survey puts a diagonal crossing at about 1½ km, and a straight crossing at about 20 minutes at 3 km an hour. {{os-mapbook}}"; }
P.insertAfter(m, "l1", "A quick estimate: count the 1 km squares you cross", [
  { t: "h", x: "Reading height: contour lines" },
  p("Brown contour lines join points at the same height above sea level. On a 1:25,000 map they are usually 5 metres apart in height, or 10 metres in mountains. Lines bunched close together mean a steep slope; lines spread apart mean gentle ground, which is what you want for a pitch. {{os-mapbook}}"),
  p("Waymarks on the ground tell you who may use a route in England and Wales: a yellow arrow is a footpath, blue a bridleway, purple a restricted byway and red a byway open to all traffic. An acorn marks a National Trail, and a brown circle with a walker over hills marks open access land, where you may leave the path. {{cc-gov-signs}}")
]);
P.insertAfter(m, "l1", "Lines bunched close together mean a steep slope", [
  check("On a 1:25,000 OS map, the contour lines around your planned pitch are bunched tightly together. What does that tell you?",
    ["The ground is steep there",
     "The ground is flat and ideal for a tent",
     "There is a footpath along the contour",
     "The area is boggy and should be avoided",
     "The land is open access, so camping is allowed"],
    0, "Contours close together mean a steep slope; spread out, a gentle one. {{os-mapbook}}")
]);
P.save(m);

/* ---------- Module 6: safety ---------- */
m = P.load(C, "camping-basics-6");
P.insertAfter(m, "l1", "Let someone know where you plan to go", [
  p("The Countryside Code gives the reason: in rural areas you may not see anyone for hours, and phone signal is unreliable in many places. You are responsible for your own safety and for anyone in your care. {{cc-gov-enjoy}}"),
  p("In Scotland, check the season. Stag stalking usually runs from 1 July to 20 October, mostly from August, and not normally on Sundays; grouse shooting runs from 12 August to 10 December. Estates post signs and, in some areas, phone lines with the day's routes, so check and follow the suggested alternative. {{soac-p5a}}")
]);
{ const t = table(m, "l2", "Hazard and control");
  t.rows.splice(1, 0,
    ["Cattle, bulls and pigs (Scottish Code)", "Cows can react aggressively, especially with calves or a dog; bulls guard the herd; pigs can turn aggressive at any time. {{soac-p3a}}", "Use a neighbouring field if a bull or pigs are present; with cattle, keep a dog on a short lead and let it go if the cows come at you. {{soac-p3a}}"],
    ["Live firing ranges", "Red flags by day and red lamps at night mark live firing areas, which may not be fenced. {{soac-p5b}}", "Do not enter when they show, never pick up objects, and turn back if in doubt. {{soac-p5b}}"]); }
P.insertAfter(m, "l2", "Dog owners: in England and Wales", [
  p("In Scotland the Code adds: never take a dog into a field with lambs, calves or other young animals, and keep it on a short lead (two metres) or at heel in ground-nesting areas such as moorland, forest, grassland and loch shores, usually from April to July. {{soac-p3b}}")
]);
P.save(m);
console.log("done");
