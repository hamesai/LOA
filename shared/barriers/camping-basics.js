/* Barrier aids for Camping fundamentals: word check, gradient check and a make-it-concrete task per module.
   Merged into window.COURSE_LEARN; must load after the learning-*.js files. */
(function (D) { var L = window.COURSE_LEARN = window.COURSE_LEARN || {}; Object.keys(D).forEach(function (k) { var e = L[k] = L[k] || {}, d = D[k]; if (d.w) e.words = d.w; if (d.b) e.base = d.b; if (d.m) e.mass = { title: d.m[0], task: d.m[1], limit: d.m[2] }; }); })({
"camping-basics-1": {
 w: [["Wild camping", "Camping outside a campsite, usually with no facilities. Whether it is lawful depends on the country, the landowner and any local rules."],
     ["Access rights", "In Scotland, a legal right to be on most land for recreation, including camping, as long as you act responsibly. It is not the same as a right to camp anywhere in England or Wales."],
     ["Byelaw", "A local rule made under law, for example by a national park authority, that can restrict camping in a named area."],
     ["Durable surface", "Ground that survives use without lasting damage, such as rock, gravel or dry, well-worn ground, as opposed to fragile plants or wet soil."],
     ["Pack it out", "Carry all your rubbish and waste away with you, including food scraps."]],
 m: ["Test a patch of ground", "Pick a patch of outdoor ground near you. Stand on it and check four things: the slope, where water would run, what shelter it has, and whether it is a durable surface. Write down whether you would pitch there and why.", "A park is not a campsite. Rules and permission differ in the place you actually plan to camp."]
},
"camping-basics-2": {
 w: [["Fly", "The waterproof outer layer of a tent."],
     ["Vestibule", "The covered space between the inner tent and the fly door, used for boots and packs. It is for storage, not for cooking."],
     ["Footprint", "A groundsheet that protects the tent floor from wear and moisture."],
     ["Guy line", "A cord from the tent to the ground that holds it steady in wind."],
     ["Condensation", "Water vapour from your breath turning into droplets on a cold surface, such as the inside of the fly."]],
 b: [["Name two things to check about a place before you camp there.", "Whether camping is lawful there (permission, rights, byelaws) and whether the ground is a durable surface."],
     ["What does pack it out mean?", "Carry all your rubbish and waste away with you."]],
 m: ["Pitch it once at home", "Before the trip, unpack the tent and pitch it once in a garden or park in daylight. Time how long it takes and list anything missing or confusing.", "A calm daylight pitch does not test wind, rain or the dark. It only shows whether you know the steps."]
},
"camping-basics-3": {
 w: [["Comfort rating", "The temperature at which a sleeper who feels the cold should stay comfortable in the bag."],
     ["Lower limit", "The temperature at which a typical sleeper curled up should still manage, but will not be comfortable."],
     ["R-value", "A measure of how well a sleeping pad resists heat loss to the ground. A higher number means more insulation."],
     ["Sleep system", "The bag, the pad, your clothing and your shelter, working together."],
     ["Wind chill", "The extra cooling effect of wind on exposed skin, which makes it feel colder than the air temperature."]],
 b: [["What does the fly do?", "It is the waterproof outer layer that keeps rain off the inner tent."],
     ["Why use a footprint?", "It protects the tent floor from wear and moisture."]],
 m: ["Feel the ground", "Sit on a bare floor for two minutes, then sit on a foam pad for two minutes. Write down how each felt. This is why the pad matters as much as the bag.", "An indoor test shows the idea, not how cold a real night is."]
},
"camping-basics-4": {
 w: [["Incomplete combustion", "Burning with too little oxygen, which produces carbon monoxide."],
     ["Carbon monoxide", "A colourless, odourless gas from burning fuel. It can kill in an enclosed space such as a tent."],
     ["O-ring", "The small rubber seal at a gas connection. If it is damaged, the stove can leak."],
     ["Water treatment", "Filtering, boiling or chemically treating water so it is safe to drink."],
     ["Boil", "Heat water until it bubbles hard. Cloudy water may need filtering first."]],
 b: [["What does R-value measure?", "How well a pad resists heat loss to the ground."],
     ["Name the parts of a sleep system.", "The bag, the pad, your clothing and your shelter."]],
 m: ["Run the stove outdoors", "Outdoors, in open air and away from any tent, attach the stove, light it and boil 500 ml of water. Time it, and note every step in order.", "Never run a stove inside a tent or vestibule. The test teaches the steps, not how a stove behaves in wind."]
},
"camping-basics-5": {
 w: [["Grid reference", "A string of digits that names one square on a map, written eastings first, then northings."],
     ["Bearing", "An angle measured clockwise from north to a target."],
     ["Contour line", "A line on a map joining points at the same height. Lines close together mean steep ground."],
     ["Scale", "The ratio of a distance on the map to the same distance on the ground."],
     ["Magnetic variation", "The difference between map north and magnetic north, which a compass needs you to allow for."]],
 b: [["Why must you never cook inside a tent?", "Fire risk and carbon monoxide."],
     ["What gas can build up from a stove in an enclosed space?", "Carbon monoxide."]],
 m: ["Build a hill", "Trace the contour lines of a hill from a map onto card, cut each layer and stack them. Hold it up and compare the steep side with the gentle side.", "A stacked model exaggerates height. Use the map for real distances."]
},
"camping-basics-6": {
 w: [["Hypothermia", "A dangerous fall in core body temperature."],
     ["Heat exhaustion", "Illness from overheating, with heavy sweating, headache and weakness."],
     ["Casualty", "The person who is hurt or ill."],
     ["Navigate", "Work out where you are and which way to go, using a map and compass."],
     ["Location description", "Your grid reference and nearest landmark, which a rescuer needs from you."]],
 b: [["What are the two parts of a grid reference, and in what order?", "Eastings first, then northings."],
     ["What does a bearing measure?", "An angle from north."]],
 m: ["Rehearse a call for help", "Using a real map of your planned area, write what you would say in an emergency call: who, what happened, where (with a grid reference), how many people. Read it aloud twice.", "Do not make a real call. Rehearse the words only."]
},
"camping-basics-cap": {
 b: [["Which module covers shelter, sleep, kitchen, navigation and safety?", "Shelter is module 2, sleep module 3, kitchen module 4, navigation module 5 and safety module 6."],
     ["What is the first thing to check about any place you plan to camp?", "Whether camping there is lawful, from module 1."]],
 m: ["Lay out the whole kit", "Lay out every item for the trip on the floor in rows: shelter, sleep, kitchen, navigation, safety. Photograph it. Cross off anything you cannot explain a use for.", "A floor layout shows what you have, not how it feels to carry."]
}
});
