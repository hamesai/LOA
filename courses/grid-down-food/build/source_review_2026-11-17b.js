/* Second batch from the source reviews of 17/11/2026 (run after source_review_2026-11-17.js).
   node courses/grid-down-food/build/source_review_2026-11-17b.js */
const P = require("../../../_template/course_patch.js");
const C = "grid-down-food";

let m = P.load(C, "grid-down-food-1");
P.insertAfter(m, "l3", "Raw meat, fish and poultry are potential sources", [
  { t: "p", x: "The FSA business pack sets the shelf order: raw meat, poultry, fish and eggs below ready-to-eat food, and unwashed fruit and vegetables kept apart from ready-to-eat food and above raw meat. Prepare ready-to-eat food before raw food where you can, and do not wash raw meat or poultry, because washing kills nothing and splashes bacteria around the sink. {{sfbb-cross}}" }
]);
P.save(m);

m = P.load(C, "grid-down-food-2");
P.insertAfter(m, "l5", "If you cannot move the food somewhere cold", [
  { t: "p", x: "Chilled stock follows a stricter business rule: food may be out of chilled storage for up to four hours, once only. Under four hours it can go back at 8 C or below; over four hours it must be thrown away, so label the time it came out. {{sfbb-cross}}" }
]);
P.save(m);

m = P.load(C, "grid-down-food-4");
P.insertAfter(m, "l3", "The FSA says food should be steaming hot and cooked through", [
  { t: "p", x: "Where to check matters as much as the number. The FSA says to probe whole birds in the thickest part, between leg and breast; in stews and curries, the largest piece of meat; and in a large dish or batch, several places, because cold spots hide. {{sfbb-cook}}" }
]);
P.save(m);

m = P.load(C, "grid-down-food-5");
P.insertAfter(m, "l3", "Can only the amount you will use in a year", [
  { t: "p", x: "There is a quality reason for the one-year rule too: canning heat destroys a third to a half of vitamins A and C, thiamin and riboflavin, and storage takes another 5 to 20 percent of them each year. {{usda-front}}" },
  { t: "p", x: "Pickles and ferments rely on acid and salt for safety, so never change the vinegar, food or water in a tested recipe, use vinegar of 5 percent acidity, and never cut the salt in sauerkraut or brined pickles. {{usda-principles}}" },
  { t: "p", x: "A grid-down warning follows from the USDA steps: if the boil or the pressure drops at any point, the timing starts again from the beginning. {{usda-principles}} So canning on a stove you cannot hold steady, or without enough fuel for the whole run, is unsafe rather than just slow (our inference)." },
  { t: "p", x: "One line ties the preserving methods together: heat processing destroys the botulism bacterium in canned food, freezer temperatures stop its growth, low moisture controls it in dried food, and air controls it in fresh food. {{usda-glossary}}" }
]);
P.insertAfter(m, "l4", "Throwing a suspect jar away needs care", [
  { t: "p", x: "Check every stored jar as you take it down: the lid should be concave and tight, with no streaks of dried food down the outside, no rising bubbles and no odd colour; when you open it, watch for spurting, an off smell or cotton-like mould. Storing jars without their screw bands makes a lifted lid easier to see. {{usda-principles}}" }
]);
P.replaceText(m, "l4", "Refrigerate canned or pickled foods after you open them", "Refrigerate canned or pickled foods after you open them.", "Refrigerate canned or pickled foods after you open them, moved into a covered food container: the FSA says not to store food in opened tins or re-use foil, cling film or freezer bags. {{sfbb-cross}}");
P.insertAfter(m, "l5", "Cooking does not remove allergens", [
  { t: "p", x: "Read the allergen list closely. Tree nuts means almonds, hazelnuts, walnuts, pecans, Brazil nuts, pistachios, cashews and macadamias; cereals containing gluten include oats; sulphur dioxide counts when added above 10 mg per kg. If a bought ingredient says it may contain an allergen, tell the customer and let them decide, and pack an allergy customer's order separately, labelled and covered. {{sfbb-cross}}" },
  { t: "callout", k: "warn", x: "If someone may be having a severe allergic reaction, do not move them, ring 999 for an ambulance, say they may have anaphylaxis, send someone to meet it, and help them use their adrenaline pen. {{sfbb-cross}}" }
]);
P.insertAfter(m, "l5", "Freezing pauses the clock", [
  { t: "p", x: "Cool cooked food fast before it goes in the freezer: avoid cooking big batches ahead, divide food into small portions, stand covered pans in cold water or use ice, stir, and spread rice on a tray. If food has not chilled down safely, re-cook it or throw it away. {{sfbb-cross}} {{sfbb-cook}}" }
]);
P.save(m);

m = P.load(C, "grid-down-food-cap");
P.insertAfter(m, "l4", "Add a recall step", [
  { t: "p", x: "Add a complaints step. Take every report of illness, an allergic reaction or something in the food seriously: check your diary, temperature records and any staff illness, consider taking the same batch off sale, and tell the supplier if the fault may be theirs. {{sfbb-manage}}" }
]);
P.save(m);
console.log("applied b");
