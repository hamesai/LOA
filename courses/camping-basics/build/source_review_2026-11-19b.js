/* Camping: findings from the second source review of 19/11/2026
   (Darwall v Dartmoor NPA [2025] UKSC 20 uksc-dartmoor, UKHSA Be Tick Aware toolkit ukhsa-ticks,
   Aerie Wilderness Medicine 15th edition aerie-wm, read in part). Findings are taught inside the topic lessons;
   one new topic lesson in Module 6 (minor injuries and heat), which the module did not teach.
   node courses/camping-basics/build/source_review_2026-11-19b.js */
const fs = require("fs"), path = require("path");
const P = require("../../../_template/course_patch.js");
const C = "camping-basics";
const p = x => ({ t: "p", x });
const h = x => ({ t: "h", x });
const app = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });

/* ---------- refs: one per chapter used ---------- */
const refsFile = path.join(__dirname, "..", "course-camping-basics-refs.js");
let R = fs.readFileSync(refsFile, "utf8");
R = R.replace('"Wilderness Medicine, 15th edition (Aerie Backcountry Medicine) (read in full)"',
              '"Wilderness Medicine, 15th edition (Aerie Backcountry Medicine) (read in part: 19 of 68 chapters; clinical, US-law and out-of-scope chapters skipped with reasons)"');
const UKSC = "Darwall and another v Dartmoor National Park Authority [2025] UKSC 20, judgment of 21/05/2025 (Crown copyright, free download); PDF ingested 19/11/2026";
const UKHSA = "UK Health Security Agency, Be Tick Aware toolkit, April 2023 (Open Government Licence); PDF ingested 19/11/2026";
const AERIE = "Dave McEvoy and Trenton Harper, Wilderness Medicine, 15th edition (Aerie Backcountry Medicine, free download from the publisher; US manual based on Wilderness Medical Society guidelines); PDF ingested 19/11/2026";
const UA = "https://supremecourt.uk/uploads/uksc_2023_0126_judgment_03167171c8.pdf";
const KA = "https://www.gov.uk/government/publications/tick-bite-risks-and-prevention-of-lyme-disease";
const AA = "https://www.aeriemedicine.com/textbook";
const newRefs = {
  "uksc-1": { t: "The right of access under section 10(1) and why it includes camping: read in full", s: UKSC, b: "uksc-dartmoor", p: "Pages 1 to 20 (ch-001.txt)", u: UA },
  "uksc-2": { t: "Byelaws, the public's interest and conclusion: read in full", s: UKSC, b: "uksc-dartmoor", p: "Pages 21 to 24 (ch-002.txt)", u: UA },
  "ukhsa-1": { t: "Ticks in the UK, tick checks, removal and Lyme disease: read in full", s: UKHSA, b: "ukhsa-ticks", p: "Pages 1 to 20 (ch-001.txt)", u: KA },
  "ukhsa-2": { t: "Key facts and messages on ticks and Lyme disease: read in full", s: UKHSA, b: "ukhsa-ticks", p: "Pages 21 to 26 (ch-002.txt)", u: KA },
  "aerie-blis": { t: "Specific wounds: hot spots and blisters: read in full", s: AERIE, b: "aerie-wm", p: "Specific Wounds (ch-029.txt)", u: AA },
  "aerie-burn": { t: "Burns: read in full", s: AERIE, b: "aerie-wm", p: "Burns (ch-031.txt)", u: AA },
  "aerie-sprain": { t: "Sprains and strains: read in full", s: AERIE, b: "aerie-wm", p: "Sprains and Strains (ch-033.txt)", u: AA },
  "aerie-allergy": { t: "Allergic reactions and anaphylaxis: read in full", s: AERIE, b: "aerie-wm", p: "Allergic Reactions and Anaphylaxis (ch-043.txt)", u: AA },
  "aerie-hypo": { t: "Hypothermia: read in full", s: AERIE, b: "aerie-wm", p: "Hypothermia (ch-047.txt)", u: AA },
  "aerie-cold": { t: "Cold injuries: frostnip, frostbite and trench foot: read in full", s: AERIE, b: "aerie-wm", p: "Cold Injuries (ch-048.txt)", u: AA },
  "aerie-light": { t: "Lightning: read in full", s: AERIE, b: "aerie-wm", p: "Lightning (ch-050.txt)", u: AA },
  "aerie-heat": { t: "Heat emergencies: read in full", s: AERIE, b: "aerie-wm", p: "Heat Emergencies (ch-052.txt)", u: AA },
  "aerie-co": { t: "Carbon monoxide poisoning: read in full", s: AERIE, b: "aerie-wm", p: "Carbon Monoxide (CO) Poisoning (ch-053.txt)", u: AA },
  "aerie-decide": { t: "Backcountry decision making: read in full", s: AERIE, b: "aerie-wm", p: "Backcountry Decision Making (ch-055.txt)", u: AA },
  "aerie-evac": { t: "Evacuation criteria: read in full", s: AERIE, b: "aerie-wm", p: "Evacuation Criteria (ch-056.txt)", u: AA },
  "aerie-water": { t: "Water purification and filtration: read in full", s: AERIE, b: "aerie-wm", p: "Water Purification and Filtration (ch-059.txt)", u: AA },
  "aerie-kit": { t: "First aid kits: read in full", s: AERIE, b: "aerie-wm", p: "First Aid Kits (ch-060.txt)", u: AA }
};
const add = Object.entries(newRefs).filter(([k]) => !R.includes('"' + k + '":'))
  .map(([k, v]) => "  " + JSON.stringify(k) + ": " + JSON.stringify(v)).join(",\n");
if (add) R = R.replace(/\n\}\);\s*$/, ",\n" + add + "\n});\n");
fs.writeFileSync(refsFile, R, "utf8");

/* ---------- Module 1: Dartmoor's legal basis ---------- */
let m = P.load(C, "camping-basics-1");
P.insertAfter(m, "l1", "Camping access at a glance", [
  p("Dartmoor's allowance is a legal right, not a favour. Section 10(1) of the Dartmoor Commons Act 1985 gives the public a right of access to the Commons on foot and on horseback for open-air recreation, and in [2025] UKSC 20 the UK's top court held unanimously that this includes wild camping. {{uksc-1}}"),
  p("The right holds only while you keep the byelaws: no vehicle, caravan or structure other than a tent, and no camping in the areas the byelaws list, which is why the map matters. Break them and the landowner can treat you as a trespasser. {{uksc-1}}"),
  p("The Commons are privately owned moorland where local commoners graze their animals, about 37% of the National Park and 75% of its moorland, so you camp as a guest on working land. {{uksc-1}} The case went one way in the High Court and the other on appeal before the final ruling, so check the date on any guidance you read. {{uksc-1}} {{uksc-2}}"),
  p("An access right does not always include camping. An older law giving the public access to metropolitan commons for air and exercise excluded any right to camp or light a fire, so read what each right actually covers. {{uksc-1}}")
]);
P.insertAfter(m, "l1", "An access right does not always include camping", [
  app("A friend shows you a blog post from early 2023 saying wild camping on the Dartmoor Commons needs the landowner's consent. What is the best response?",
    ["Agree, since a blog post that recent must be right",
     "Ignore the byelaws, because the right to camp overrides them",
     "Check current guidance: a later ruling upheld the right to camp",
     "Ask every farmer on the moor before each night out",
     "Camp in a van instead, since vehicles are not covered by the rule"],
    2, "The High Court ruled against a right to camp, but the Court of Appeal reversed that and the final appeal in [2025] UKSC 20 was dismissed, so camping on the Commons is a right while you keep the byelaws, which bar vehicles. {{uksc-1}} {{uksc-2}}")
]);
P.save(m);

/* ---------- Module 2: ticks and the pitch ---------- */
m = P.load(C, "camping-basics-2");
P.insertAfter(m, "l2", "What to look for, and what to avoid", [
  p("Ticks are part of pitch choice. They live in dense ground vegetation such as woodland, grassland, moorland and heath, and they are often thick along woodland edges and scrub used by wildlife. {{ukhsa-1}} They do not fly or jump: they wait on the tips of plants and climb on as you brush past, so a short-grass pitch away from bracken and long grass lowers the risk. {{ukhsa-2}} Module 6 covers the evening tick check.")
]);
P.save(m);

/* ---------- Module 3: hypothermia stages, the wrap, wet feet ---------- */
m = P.load(C, "camping-basics-3");
P.insertAfter(m, "l4", "Hypothermia is a dangerous drop in body temperature", [
  p("In the field you judge how serious it is by alertness, movement and shivering, because a thermometer is rarely to hand. Someone who is shivering but alert and moving normally is cold-stressed, not yet hypothermic. Mild hypothermia adds hard shivering, clumsiness, poor decisions and not caring. When shivering weakens or stops and the person turns drowsy, it is moderate or worse. {{aerie-hypo}}"),
  p("Most people who feel cold are not hypothermic, but the danger is that early signs get ignored while the group pushes on. Being dehydrated, exhausted, underfed or drinking alcohol all make it more likely. {{aerie-hypo}}")
]);
P.insertAfter(m, "l4", "What the NHS says to do while waiting for help", [
  h("Warming a cold camper"),
  p("For a cold-stressed camper: get out of the wind, put on dry layers, give high-calorie food and a warm drink, then let them move about. For mild hypothermia, handle them gently and have them sit or lie down for at least 30 minutes. Give food or drink only while they are fully alert, and get help if there is no improvement after 30 minutes. {{aerie-hypo}}"),
  p("Build a hypothermia wrap from camp kit: a sleeping pad underneath, a plastic or foil layer, a sleeping bag covering the head, and a windproof outer layer. Wrapped warm bottles on the upper chest, sides and back add heat, but never against bare skin, because cold skin burns easily. If shelter is more than 30 minutes away, take off wet clothing before wrapping; if it is closer, wrap straight away. {{aerie-hypo}}"),
  h("Wet feet: trench foot"),
  p("Days of cold, wet feet can cause trench foot, a non-freezing injury, though symptoms rarely appear in under 4 days. Dry your feet every night and keep one pair of dry socks only for sleeping. {{aerie-cold}}")
]);
P.insertAfter(m, "l4", "Days of cold, wet feet can cause trench foot", [
  app("A friend is shivering hard, fumbling with the tent zip and has stopped caring about getting dry, but is still talking sensibly. The car park is an hour away. What fits the guidance best?",
    ["Walk them briskly to the car park to warm them up",
     "Strip wet layers, wrap them, add wrapped heat",
     "Rub their hands and feet hard to restart circulation",
     "Put a hot bottle straight onto the bare skin of their chest",
     "Give them a whisky to warm them from the inside"],
    1, "Hard shivering, clumsiness and apathy suggest mild hypothermia. With shelter over 30 minutes away, take off wet clothing, wrap them and add wrapped heat to the upper body, then reassess after 30 minutes. {{aerie-hypo}} Do not rub limbs or give alcohol. {{nhs-hypo}}")
]);
P.save(m);

/* ---------- Module 4: stove burns, carbon monoxide, water ---------- */
m = P.load(C, "camping-basics-4");
P.insertAfter(m, "l1", "Place the stove on a stable, level, non-flammable surface", [
  p("Camp stove accidents are one of the most common causes of burns outdoors, so set the stove on ground as flat and secure as you can find and wear closed-toe shoes around it. Module 6 covers burn first aid. {{aerie-burn}}")
]);
P.insertAfter(m, "l2", "Any stove that burns fuel produces some", [
  p("It is so dangerous because blood takes up carbon monoxide over 200 times more readily than oxygen, and a healthy person can take more than four hours to clear it. Rescuers can be overcome within minutes, so protect yourself first: open the tent from outside and get everyone into fresh air. Suspect it when several people in a confined space become confused or unwell together. {{aerie-co}}")
]);
P.insertAfter(m, "l3", "Match the method to the source", [
  p("Two limits to remember: boiling kills germs but does not remove farm chemicals or pesticides washed into a stream, and chemical tablets work more slowly in cold water and in water carrying debris. {{aerie-water}} Choose a source above farmland where you can, and strain cloudy water first.")
]);
P.save(m);

/* ---------- Module 5: thunderstorms ---------- */
m = P.load(C, "camping-basics-5");
P.insertAfter(m, "l4", "Met Office mountain guidance", [
  h("Thunderstorms"),
  p("Count the seconds from a flash to its thunder: sound travels about 1.6 km every five seconds. If the gap is 30 seconds or less, move to safer ground and stay away from exposed places until 30 minutes after the last thunder. A building or a hard-top car is the safest place. {{aerie-light}}"),
  p("Get off summits and ridges, and keep away from lone trees, rock outcrops and water, staying at least twice a tree's height from it. Spread a group 6 to 12 m apart, then crouch on a sleeping pad with feet together. Moving to lower ground does more than changing posture. {{aerie-light}}")
]);
P.insertAfter(m, "l4", "Spread a group 6 to 12 m apart", [
  app("You are on an open ridge. You see a flash and count 12 seconds before the thunder. What should you do?",
    ["Keep going, since the storm is still far off",
     "Shelter under the one tall tree on the ridge",
     "Head down off the ridge now, away from lone trees",
     "Wait on the ridge for a single loud clap before moving",
     "Stand together in a tight group to stay warm"],
    2, "Sound travels about 1.6 km every five seconds, so 12 seconds is roughly 4 km away (our arithmetic). That is inside the 30-second warning, so get off exposed ground and away from lone trees, and spread the group out. {{aerie-light}}")
]);
P.save(m);

/* ---------- Module 6: ticks, first aid, decisions; new lesson on minor injuries and heat ---------- */
m = P.load(C, "camping-basics-6");
{ const L = P.lesson(m, "l3");
  const i = L.blocks.findIndex(b => b.t === "callout" && /Our sources do not cover ticks/.test(b.x));
  if (i < 0) throw new Error("tick callout not found");
  L.blocks.splice(i, 1,
    { t: "callout", k: "note", x: "Sun and insects: REI advises planning for sun and bugs with sunscreen and repellent. {{rei-beg}}" },
    h("Ticks and Lyme disease"),
    p("Lyme disease is the most common tick-borne infection in the UK, and the tick that bites people most is Ixodes ricinus, the sheep or deer tick. {{ukhsa-1}} About 1,500 laboratory-confirmed cases are reported a year in England and Wales. {{ukhsa-2}} Young ticks, called nymphs, matter most because they are hard to spot and stay on longer; their activity peaks from April to June, but bites happen in any month. {{ukhsa-1}}"),
    p("Cut the risk: keep to clear paths, wear long trousers, long sleeves and light colours so ticks show up, and use a repellent such as DEET as the maker directs. Each evening, look and feel for ticks in skin folds, armpits, groin, waistband, behind the knees, the back of the neck and the hairline; children are often bitten on the head and neck. {{ukhsa-1}}"),
    p("To remove a tick, use fine-tipped tweezers or a tick tool, grip it as close to the skin as you can and pull upwards slowly and firmly. Then apply antiseptic or wash with soap and water, and watch the spot for several weeks. {{ukhsa-2}} Do not burn a tick or smother it in Vaseline. {{ukhsa-1}}"),
    p("A spreading circular rash usually appears 1 to 4 weeks after a bite, but about 1 in 3 people with Lyme disease report no rash. Contact your GP or NHS 111 if you feel unwell after a bite, even without a rash, and say you have been outdoors. {{ukhsa-2}} The UK does not give preventive antibiotics after a tick bite. {{ukhsa-1}}"),
    app("Two weeks after a camping trip you feel tired and achy with a headache, but you see no rash. You removed a tick from your leg on the trip. What should you do?",
      ["Nothing, because Lyme disease always causes a bullseye rash",
       "Contact your GP or NHS 111 and mention the tick bite",
       "Ask a pharmacist for antibiotics to take just in case",
       "Wait for a rash to appear before telling anyone",
       "Burn the bite site to kill any bacteria left behind"],
      1, "About 1 in 3 people with Lyme disease report no rash, so seek advice from your GP or NHS 111 if you feel unwell after a bite and tell them about it. {{ukhsa-2}}")
  ); }
P.replaceText(m, "l3", "This course does not teach first aid",
  "This course does not teach first aid. Burns, blisters, cuts, bites and sprains need first-aid training and the NHS pages for each. The sources we read do not cover them.",
  "This course is not a first-aid course. The next lesson gives basic care for blisters, burns, sprains, stings and heat, but cuts, breaks and head injuries need hands-on training.");
P.insertAfter(m, "l4", "In the hills, dial 999 or 112", [
  p("Before you call, stop and think. Check that the scene is safe so you do not become another casualty, count everyone in the group, then look at the casualty, the weather, the light and what kit you have before deciding whether to stay or go. {{aerie-decide}} Get help out for anyone who cannot bear weight, has a change in alertness or breathing, or still has fever or vomiting after 24 hours. {{aerie-evac}}")
]);
P.addLessonBeforeLecturer(m, {
  id: "", title: "Minor injuries and heat: blisters, burns, sprains and stings", min: 15,
  blocks: [
    p("Most camp injuries are small, but a blister or a stove burn left untreated can end a trip. This lesson gives the basic care. It does not replace a first-aid course."),
    h("Blisters"),
    p("A blister starts as a hot spot, a warm, sore patch. Prevent it with well-fitting, broken-in boots laced properly, wool or synthetic socks rather than cotton, dry feet and trimmed toenails, and tape the hot spot as soon as you feel it. {{aerie-blis}}"),
    p("Protect a small blister, under about 5 mm, with a ring-shaped pad. A larger one can be drained at its lower edge with a sterile needle, leaving the skin in place, then cleaned and covered. People with diabetes should not drain blisters. {{aerie-blis}}"),
    h("Burns"),
    p("Stop the burning, take off smouldering clothing and jewellery, and cool the burn with clean water; for pain this can go on for up to about half an hour, but watch that the person does not get chilled. Cover it loosely with a moist, clean dressing and do not pop blisters. {{aerie-burn}}"),
    p("Get medical help for a blistered burn larger than the casualty's palm, which is about 1% of the body, or for any burn to the face, hands, feet or genitals, one that goes right round a limb, or one with signs in the airway such as singed nose hair or a hoarse voice. {{aerie-burn}}"),
    h("Sprains"),
    p("For a twisted ankle, rest it, apply cold for 10 minutes on and 10 off over the first 24 to 48 hours (never ice straight on the skin), wrap it snugly and raise it. {{aerie-sprain}} Someone who still cannot bear weight needs help to get out. {{aerie-evac}}"),
    h("Stings and allergic reactions"),
    p("Scrape out a bee sting quickly and use a cold compress for the pain. Before the trip, find out who in the group has a serious allergy and where they keep their adrenaline auto-injector. {{aerie-allergy}}"),
    p("Anaphylaxis is a sudden reaction affecting the skin together with breathing trouble or collapse. Help the person use their own auto-injector in the outer thigh. An antihistamine tablet is not a substitute, and anyone who needed adrenaline needs emergency care. {{aerie-allergy}} In the UK that means dialling 999 or 112. {{mrew}}"),
    h("Heat"),
    p("Heat exhaustion brings tiredness, nausea, dizziness, heavy sweating and thirst. Move the person into shade, lay them down, cool them with water and fanning, and have them sip water with salty food while resting for 1 to 2 hours. {{aerie-heat}}"),
    p("Heat stroke is an emergency: confusion, odd behaviour or collapse with a body temperature above 40 °C. Cool the whole body at once with cold water, wet cloths and fanning, and get emergency help. Drinking water alone does not prevent heat illness, and forcing down large amounts of plain water can make some people ill. {{aerie-heat}}"),
    { t: "callout", k: "tip", x: "Pack a kit you know how to use, and restock it after each trip. Add blister dressings, tape, tweezers, gloves, scissors and a pencil with waterproof paper for notes. {{aerie-kit}}" },
    { t: "example", title: "Worked example: a stove burn at breakfast (illustrative)", steps: [
      "A camper knocks a pan and splashes boiling water across the back of one hand. Blisters form over an area bigger than their palm.",
      "Cool the hand with clean water for pain and remove the ring before it swells. Then cover it loosely with a moist, clean dressing. {{aerie-burn}}",
      "The burn is on the hand and blistered over more than a palm's area, so it needs medical care: end the trip and get them seen. {{aerie-burn}}"
    ] },
    { t: "activity", x: "Open your first-aid kit. For each item, write what you would use it for in this lesson. Replace anything you could not explain." },
    app("On day two, a walker feels a sore, warm patch on their heel. What is the best move?",
      ["Keep walking and deal with it at camp tonight",
       "Stop now and tape or pad the hot spot",
       "Pop it with a pin straight away to relieve pressure",
       "Swap to cotton socks, which absorb more sweat",
       "Take boots off and walk the rest in sandals"],
      1, "A warm, sore patch is a hot spot, the start of a blister. Protecting it with tape or a pad straight away stops it getting worse; cotton socks make blisters more likely. {{aerie-blis}}"),
    app("On a hot day a hiker becomes confused and starts stumbling, though they are still sweating heavily. What should you do?",
      ["Give a large bottle of plain water and carry on",
       "Assume they are tired and let them sleep it off",
       "Wrap them in a sleeping bag to stop them shivering",
       "Cool their whole body at once and call 999",
       "Wait for their skin to go dry before acting"],
      3, "Confusion in the heat suggests heat stroke, an emergency, and sweating does not rule it out. Cool the whole body straight away and get help. {{aerie-heat}}"),
    { t: "take", i: ["Treat a hot spot before it becomes a blister.", "Cool burns with water; get help for big, blistered or hand and face burns.", "Confusion in the heat is an emergency: cool and call 999."] }
  ]
});
P.save(m);
console.log("done");
