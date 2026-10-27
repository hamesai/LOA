/* Barrier aids for Wasteland Kitchen (grid-down food safety): word check, gradient check and a make-it-concrete task per module. */
(function (D) { var L = window.COURSE_LEARN = window.COURSE_LEARN || {}; Object.keys(D).forEach(function (k) { var e = L[k] = L[k] || {}, d = D[k]; if (d.w) e.words = d.w; if (d.b) e.base = d.b; if (d.m) e.mass = { title: d.m[0], task: d.m[1], limit: d.m[2] }; }); })({
"grid-down-food-1": {
 w: [["Hazard", "Something in food that can cause harm, such as bacteria, a chemical or a piece of glass."],
     ["Danger zone", "The temperature range between safe cold and safe hot where bacteria multiply fastest. The course gives the figures."],
     ["High-risk group", "People more likely to become seriously ill from food, such as babies, older adults, pregnant people and those with weak immune systems."],
     ["Core temperature", "The temperature at the thickest, slowest-heating part of the food."],
     ["Ready-to-eat food", "Food that will not be cooked again before it is eaten."]],
 m: ["Read a real temperature", "Use a probe thermometer in a cup of ice water and in a cup of hot tap water. Then put it in the thickest part of a piece of cooked food. Write all three readings.", "Check that the thermometer reads correctly in ice water first."]
},
"grid-down-food-2": {
 w: [["Cold chain", "Keeping food cold at every step from supplier to table."],
     ["Freezer failure clock", "How long freezer contents stay safe once the power fails."],
     ["Thaw", "To warm frozen food until it is no longer frozen."],
     ["Cold source", "Anything that holds cold, such as ice or frozen packs."],
     ["Appliance thermometer", "A thermometer kept inside a fridge or freezer to read its temperature."]],
 b: [["What are the five keys to safer food?", "Keep clean; separate raw and cooked; cook thoroughly; keep food at safe temperatures; use safe water and raw materials."],
     ["What is cross-contamination?", "Moving harmful bacteria from one food or surface to another."]],
 m: ["Watch the freezer", "Put an appliance thermometer in your freezer. Read it each day for a week without leaving the door open. Note the usual temperature.", "Do not open the freezer to test it during a power cut."]
},
"grid-down-food-3": {
 w: [["Potable water", "Water that is safe to drink."],
     ["Turbidity", "How cloudy water is."],
     ["Filtration", "Passing water through a material to remove particles."],
     ["Disinfection", "Killing or removing germs in water, for example by boiling or using tablets."],
     ["Contaminated", "Carrying harmful germs or chemicals."]],
 b: [["Name two ways to keep food cold without power.", "For example keeping the freezer door shut, and using ice or frozen packs as a cold source."],
     ["What does the freezer failure clock tell you?", "How long the contents stay safe once power fails."]],
 m: ["Filter muddy water", "Pour muddy water through a paper coffee filter into a clean jar. Compare the two jars. Then write why the clearer water may still be unsafe to drink.", "Clear water can still carry germs. Filtering alone is not disinfection. Do not drink the result."]
},
"grid-down-food-4": {
 w: [["Core temperature", "The temperature at the thickest part of the food."],
     ["Reheat", "Heat cooked food again until it is piping hot all the way through."],
     ["Fuel", "What burns in a stove: gas, solid fuel, wood or liquid."],
     ["Carbon monoxide", "A colourless, odourless gas from burning fuel, which can kill in an enclosed space."],
     ["Ventilation", "Moving fresh air through a space."]],
 b: [["Why is water that looks clear still unsafe?", "Germs and chemicals can be invisible."],
     ["Name one way to treat water.", "For example boiling, or using purification tablets."]],
 m: ["Practise the stove", "Outdoors, set up a camping stove, light it and heat a pan of water. Time it and write each step. Then check the water with your probe thermometer.", "Only use a stove outdoors or in a well-ventilated space, never in a sealed room."]
},
"grid-down-food-5": {
 w: [["Water activity", "A measure of how much water in food is available for bacteria to use. Lower is safer for storage."],
     ["Acidity", "How sour food is. Strongly acidic foods stop many bacteria growing."],
     ["Drying", "Removing water to make food safe to store."],
     ["Curing", "Preserving food with salt, sometimes with smoke or sugar."],
     ["Shelf-stable", "Safe to keep at room temperature."]],
 b: [["Why check core temperature, not surface?", "The inside of thick food heats slowest, so the surface can be hot while the middle is not."],
     ["What is a hazard?", "Something in food that can cause harm."]],
 m: ["Dry some apple", "Weigh a few apple slices. Dry them in a low oven or a warm place until firm. Weigh again. The loss is the water removed.", "Home drying must be done properly to be safe. Follow the course guidance."]
},
"grid-down-food-6": {
 w: [["Floodwater", "Water that can carry sewage and chemicals. Food touched by it should be discarded."],
     ["Discard", "Throw away. When in doubt, throw it out."],
     ["Continuity plan", "A written plan for how to keep operating, or to stop safely, when something fails."],
     ["72-hour plan", "A plan for the first three days of an outage, when most hazards arise."],
     ["Priority list", "A list of what to do first, second and last."]],
 b: [["Name one safe preservation method.", "For example drying, curing or freezing."],
     ["What is water activity?", "A measure of how much water is available for bacteria to use."]],
 m: ["Lay out a 72-hour kit", "Lay out on a table the water, food, thermometer, light, ice packs and list you would need for three days. Photograph it and tick what is missing.", "A table layout shows items, not whether they would work in an emergency."]
},
"grid-down-food-cap": {
 b: [["Which modules cover water, cooking and floods?", "Water is module 3, cooking module 4 and floods module 6."],
     ["What is the cold chain?", "Keeping food cold at every step."]],
 m: ["Walk the plan through", "Write the plan, then walk through it step by step in your kitchen as if the power just failed. Note every step that does not work.", "A rehearsal does not recreate the stress of a real outage."]
}
});
