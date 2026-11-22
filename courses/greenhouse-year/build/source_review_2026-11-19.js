/* Greenhouse year: findings from the source reviews of 19/11/2026
   (Purdue HO-327-W purdue-temp-full, Purdue HO-237-W purdue-ph-full, UConn IPM uconn-ipm-full,
   NC State Appendix E ncsu-appe, HSE garden pesticides hse-garden). Findings are taught inside the topic lessons.
   node courses/greenhouse-year/build/source_review_2026-11-19.js */
const P = require("../../../_template/course_patch.js");
const C = "greenhouse-year";
const p = x => ({ t: "p", x });
const check = (q, o, a, w, kind) => Object.assign({ t: "check", q, o, a, w }, kind ? { kind } : {});
function setX(m, lid, needle, x, type) {
  const { L, i } = P.find(m, lid, needle);
  if (L.blocks[i].t !== (type || "p")) throw new Error("wrong block type: " + needle);
  L.blocks[i].x = x;
}

/* ---------- Module 1: structures and air ---------- */
let m = P.load(C, "greenhouse-year-1");
{ const L = P.lesson(m, "l2");
  const t = L.blocks.find(b => b.t === "table" && JSON.stringify(b).includes("Row cover or low tunnel"));
  t.rows[0][1] = "Offers about 4–5°F (roughly 2–3°C, our conversion) of frost protection and screens out some insects and diseases, though pests already on the plants can be trapped underneath {{ncsu-rowcover}}";
  t.rows[0][2] = "Slit the top to vent before, not after, the temperature under the cover passes 90°F (32°C) for several hours {{ncsu-rowcover}}"; }
P.insertAfter(m, "l2", "Sources differ on film life", [
  p("NC State gives the spread: utility-grade polythene lasts about a year, greenhouse-grade film with UV inhibitors 12 to 18 months, and copolymer film two to three years. Tempered glass is two to three times stronger than ordinary glass. {{ncsu-gh}}"),
  p("Size matters too. Small greenhouses swing in temperature faster than large ones because their air volume is small, so an open door gains or loses a great deal of heat. {{ncsu-gh}}"),
  p("If you build a cold frame, face it south or south-east on a slight slope with a wall or hedge to the north, keep it no wider than 4 to 5 feet so you can reach across, and never use wood treated with CCA, creosote or pentachlorophenol, which harm plants; a decay-resistant wood such as cedar is the safer choice. {{ncsu-coldframe}}")
]);
P.insertAfter(m, "l3", "Purdue's guidance is a useful design check", [
  p("Three more design points from Purdue. Set side vents slightly above plant height so outside air mixes before it reaches the leaves. Open a ridge vent to about 60 degrees; wider openings can act like a sail in strong wind and break. And switch off horizontal airflow fans while you vent naturally, because they push the hot air at the roof back down onto the crop. {{purdue-temp-f}}")
]);
P.insertAfter(m, "l3", "Three more design points from Purdue", [
  check("It is a hot, still afternoon. Your roof and side vents are open, and the horizontal airflow fans are running. What does Purdue advise?",
    ["Turn the airflow fans off while venting naturally",
     "Run the fans faster to push hot air out through the side vents",
     "Close the side vents so the roof vent pulls harder on its own",
     "Open the ridge vent past 90 degrees to let the most air escape",
     "Add insect screens, which speed up airflow through the vents"],
    0, "Horizontal airflow fans redistribute the hot air gathered at the roof, so Purdue says not to run them during natural ventilation. {{purdue-temp-f}}", "application")
]);
P.save(m);

/* ---------- Module 4: pH and EC ---------- */
m = P.load(C, "greenhouse-year-4");
P.insertAfter(m, "l3", "Calibrate the meter with standards", [
  p("Store the meter and its calibration solutions indoors at room temperature and low humidity, never in the greenhouse or outside, where heat and damp spoil them. {{purdue-ph-f}}")
]);
P.save(m);

/* ---------- Module 5: climate ---------- */
m = P.load(C, "greenhouse-year-5");
P.insertAfter(m, "l1", "Solar radiation is the major source of heat energy", [
  p("Purdue gives the targets to steer by. Most species grow best between 68 and 78°F; cold-tolerant crops grow normally at 58 to 63°F. Below a base temperature of 36 to 53°F plants stop growing but survive. Between 78 and 85°F growth becomes soft and excessive, and above 90°F leaves can age early and flowers drop. {{purdue-temp-f}} In Celsius that is roughly 20 to 26°C for most crops, 14 to 17°C for hardy ones, a base of 2 to 12°C and damage above 32°C (our conversion).")
]);
P.insertAfter(m, "l2", "Shade cloth lowers the radiation entering the house", [
  p("The reason for the 30 to 50 percent figure is light. Purdue says plants need a daily light integral of about 10 to 12 moles per square metre for normal growth, and 15 to 18 for tomatoes and peppers, while an unshaded Indiana house can receive 20 to 25. {{purdue-temp-f}} A British summer is usually duller than Indiana's, so a lighter shade may be enough here (our inference); check with a light meter before you buy.")
]);
setX(m, "l3", "Safety first. Fuel-burning appliances", "Safety first. Unvented heaters are more fuel-efficient, but Purdue warns that their combustion products spread through the house and harm plants and people. {{purdue-temp-f}} NC State does not recommend unvented propane or kerosene heaters. {{ncsu-gh}} Vent fuel-burning heaters outdoors and fit a carbon monoxide alarm; the alarm is general safety advice, not from these sources.", "callout");
P.insertAfter(m, "l3", "Safety first. Unvented heaters", [
  p("Purdue's heater checklist: give the burner an adequate air supply for complete combustion; service it every year before the heating season, checking the blower, fuel lines, valves and exhaust vent; and drain the condensate from high-efficiency units completely, because it is acidic and must not be used for watering. {{purdue-temp-f}}"),
  p("Cutting losses is cheaper than adding heat: heat curtains, double glazing, infrared-blocking film on the inner layer and foam in gaps all help. {{purdue-temp-f}} Warming the roots instead of the air works too: in Purdue's trial, lettuce grew normally with its nutrient solution at 70°F while the air was held at 55°F. {{purdue-temp-f}}")
]);
P.save(m);

/* ---------- Module 6: IPM and UK pesticide law ---------- */
m = P.load(C, "greenhouse-year-6");
{ const L = P.lesson(m, "l3");
  const b = L.blocks.find(x => x.t === "p" && /EPA registration number/.test(x.x));
  b.x = b.x.replace(/UConn also lists the product's EPA registration number, which applies in the United States\./, "UConn also lists the product's EPA registration number, a United States identifier; for a UK product, record the details printed on its UK label instead (our note).");
}
P.insertAfter(m, "l3", "UConn also lists the product's EPA registration number", [
  p("When you inspect, look at roots as well as leaves and stems: healthy roots are white and actively growing, and root decay or fungus gnat feeding shows up there first. Check the middle of benches, which may get less spray coverage, and bench ends, which get less air, plus hanging baskets and anything on the floor. {{uconn-f}}")
]);
setX(m, "l4", "This lesson explains options and how to decide", "This lesson explains options and how to decide. It is not a recommendation to use any product. In the UK, every plant protection product, including insecticides, fungicides, slug pellets and rooting powders, must be authorised before it can be sold or used, and you are legally responsible for using it correctly. {{hse-auth}} Always read the label and follow it.", "callout");
P.insertAfter(m, "l4", "Read the label to confirm the pest, the crop and the site are all named", [
  { t: "h", x: "UK rules for a home grower" },
  p("Check HSE's garden database for products authorised for the crop or area, buy no more than a year's supply, and do not buy pesticides online or abroad until the database confirms they are legal in the UK; using or storing an unauthorised product can lead to prosecution. {{hse-buy}}"),
  p("Most garden products are authorised for amateur use and need no training. Professional products, such as those used on farms, may by law only be used by trained people, so an untrained gardener should never use them. {{hse-pro}}"),
  p("Physical barriers and own-use remedies such as beer traps sit outside the regulations, but home-made chemical sprays are not risk-free, and giving one to someone else may need an authorisation. {{hse-home}}"),
  p("Follow the label's conditions, which can include keeping children and pets out and waiting a set time before you eat a treated crop. Make up only what you need that day and never add extra to make it stronger. {{hse-use}}"),
  p("Storage is a greenhouse issue: keep products in their original containers, which is a legal requirement, out of reach of children and pets, and not in the greenhouse or shed, which get too hot and too cold. Never keep left-over diluted spray. {{hse-store}} Never pour any product down a drain, sink or toilet. {{hse-dispose}}")
]);
P.insertAfter(m, "l4", "Storage is a greenhouse issue", [
  check("A friend in France offers you a greenhouse insecticide that works well there. It is not on HSE's garden database. What should you do?",
    ["Use it at half strength, since a weaker mix is allowed anywhere",
     "Use it only on ornamental plants, not on the food crops",
     "Store it in the greenhouse for an emergency, unopened",
     "Do not use or store it; choose a UK-authorised option",
     "Decant it into a labelled bottle and use it as directed there"],
    3, "Products must be authorised for use in the UK; HSE warns that using or storing an unauthorised product can lead to prosecution, and products must stay in their original containers. {{hse-buy}}", "application")
]);
P.save(m);
console.log("done");
