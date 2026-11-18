/* Applies the source reviews of 17/11/2026 (FSA Safer food, better business for caterers; USDA Complete Guide
   to Home Canning) to grid-down-food. Findings are taught inside the topic lessons they belong to.
   Run once:  node courses/grid-down-food/build/source_review_2026-11-17.js
   Reviews: docs/source-review-fsa-sfbb-caterers.md, docs/source-review-usda-canning.md */
const P = require("../../../_template/course_patch.js");
const C = "grid-down-food";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });

/* ---------- Module 1: keys, temperatures, cleaning, business registration ---------- */
let m = P.load(C, "grid-down-food-1");
{ const { L, i } = P.find(m, "l2", "Key thresholds side by side"); const rows = L.blocks[i].rows;
  const row = name => rows.find(r => r[0] === name);
  if (row("Freezer")[2] !== "Not stated" || row("Hot holding")[2] !== "Not stated") throw new Error("table already changed");
  row("Freezer")[2] = "-18 C or below (business pack) {{sfbb-manage}}";
  row("Hot holding")[2] = "63 C or above, a legal requirement (business pack) {{sfbb-manage}}";
  row("Cook-through")[2] = "Steaming hot and cooked through {{fsa}}; 70 C for 2 minutes or an equal time and temperature (business pack) {{sfbb-cook}}"; }
P.insertAfter(m, "l2", "The gap is about the starting limit", [
  { t: "p", x: "The FSA's household power-cut page and its business pack answer different questions, so the business pack gives numbers the household page leaves out. Hot food must be kept at 63 C or above, and frozen food at -18 C or below. {{sfbb-manage}}" },
  { t: "p", x: "Cooking is a trade between time and temperature: the FSA lists 60 C for 45 minutes, 65 C for 10 minutes, 70 C for 2 minutes, 75 C for 30 seconds and 80 C for 6 seconds as safe combinations. {{sfbb-cook}}" },
  chk("Your probe shows the centre of a stew has held 75 C for a full minute. Using the FSA combinations, is it cooked safely?",
    ["No, it must reach 70 C for 2 minutes exactly", "Yes, 75 C needs only 30 seconds", "No, only 80 C counts", "Yes, any temperature over 60 C is enough at once"], 1,
    "The FSA lists 75 C for at least 30 seconds as a safe combination, so a minute at 75 C is more than enough. 60 C would need 45 minutes. {{sfbb-cook}}")
]);
P.insertAfter(m, "l3", "1 tablespoon in 1 gallon", [
  { t: "p", x: "Cloths need their own rule. The FSA business pack prefers disposable cloths, one per task; re-usable cloths go on a hot 90 C wash, or are washed and then disinfected with boiling water or a suitable disinfectant, and it says bleach is not a suitable disinfectant for cloths. {{sfbb-cross}}" },
  { t: "p", x: "So the CDC bleach ratios are for surfaces after a flood, not for your cloths. Without a hot wash, boil cloths or use disposable ones (our application of the FSA rule)." }
]);
P.replaceText(m, "l3", "Sanitiser and wipes do not remove grease", "Sanitiser and wipes do not remove grease and soil. Wipe off visible dirt first, then sanitise.", "Sanitiser and wipes do not remove grease and soil. The FSA calls this the two-stage clean: disinfectants only work on a surface already cleaned of grease and dirt, and need the contact time on the label. {{sfbb-cross}}");
P.insertAfter(m, "l5", "Three numbers anchor the procedures", [
  { t: "p", x: "Writing the procedures down is the law, not a nicety: the FSA says it is an offence not to have food safety procedures based on HACCP, and its pack must be completed before you start, with a diary filled in every day. {{sfbb-start}}" },
  { t: "p", x: "People are a hazard too. Anyone with diarrhoea or vomiting reports it and stays away from food until they have had no symptoms for 48 hours, because they can still carry harmful bacteria for 48 hours afterwards. {{sfbb-cross}}" },
  { t: "p", x: "A limit is only as good as the thermometer. Check your probe about once a month: in iced water it should read between -1 C and 1 C, and in boiling water between 99 C and 101 C; outside that range, replace or recalibrate it. {{sfbb-manage}}" },
  chk("Your helper was sick on Monday night and felt fine by Tuesday lunchtime. When can they cook for sale again?",
    ["Tuesday afternoon, once they feel well", "Not until they have had no symptoms for 48 hours", "Straight away if they wear gloves", "After one full day off"], 1,
    "The FSA says food handlers stay away until they have had no symptoms for 48 hours, because they can still carry harmful bacteria. Gloves do not replace this. {{sfbb-cross}}")
]);
P.save(m);

/* ---------- Module 2: power-cut clock, eating order, refreezing, business freezer failure ---------- */
m = P.load(C, "grid-down-food-2");
P.insertAfter(m, "l1", "Both authorities call these estimates", [
  { t: "p", x: "Why the clock counts in hours: in warm, moist food, bacteria can divide every 10 to 30 minutes, so their numbers climb very quickly. {{usda-glossary}}" }
]);
P.insertAfter(m, "l5", "That page is written for consumers", [
  { t: "p", x: "The FSA business pack gives the decisions a business makes when a freezer fails. Food still hard and icy goes to another freezer straight away. Food that has started to soften or leak liquid carries on defrosting by a safe method. Fully defrosted food that is soft and warm is cooked, if it suits cooking, until piping hot, then used or chilled or frozen at once; if not, it is thrown away. Food that must stay frozen, such as ice cream, cannot be refrozen once it starts to defrost. {{sfbb-cross}}" },
  { t: "p", x: "If you cannot move the food somewhere cold, or do not know how long the equipment was off, the pack tells you to contact the Environmental Health Team at your local council. {{sfbb-cross}}" },
  chk("A freezer of frozen meals failed overnight. Some packs are still hard and icy, some are soft and warm. What does the FSA business pack say?",
    ["Refreeze everything once the power is back", "Move the hard, icy packs to another freezer; the soft, warm packs cannot be refrozen as they are", "Throw everything away", "Sell the soft packs first as chilled meals"], 1,
    "Still-frozen food goes to another freezer; fully defrosted food must be cooked piping hot and then used, chilled or frozen, or thrown away. {{sfbb-cross}}")
]);
P.save(m);

/* ---------- Module 3: business water ---------- */
m = P.load(C, "grid-down-food-3");
P.replaceText(m, "l5", "do not set out a rule for trading during a water outage",
  "The FSA documents we read do not set out a rule for trading during a water outage. Treat what follows as our reasoning, and ask your local authority.",
  "The FSA documents we read name no rule for trading during a water outage as such, but the business pack comes close: hands must be washed with warm running water and liquid soap, hand gels never replace handwashing, and hot running water at every sink and hand basin is a daily opening check. {{sfbb-cross}} {{sfbb-manage}} So a kitchen without safe running water fails its own opening check (our inference); ask your local authority what applies to you.");
P.save(m);

/* ---------- Module 4: cooking, foods that need extra care ---------- */
m = P.load(C, "grid-down-food-4");
P.replaceText(m, "l1", "Eating uncooked pasta or dried beans",
  "Eating uncooked pasta or dried beans is advice from the UK CMO script for the national outage scenario. Read the pack and follow your local authority.",
  "The beans in the CMO list are tinned beans, which are already cooked. Dried pulses such as kidney beans contain natural toxins that only proper soaking and cooking destroy, so cook them as the packet says or leave them in the store until you can. {{sfbb-cook}}");
P.insertAfter(m, "l4", "cook only what you will eat", [
  { t: "p", x: "Rice needs extra care: it can carry spores that survive cooking and reheating, and if cooked rice sits at room temperature they multiply and make toxins that reheating will not remove. Keep cooked rice hot until you eat it, or cool it fast by spreading it on a clean tray, and keep it no more than 1 day. {{sfbb-cook}}" },
  { t: "p", x: "Reheating means cooking again, not warming up: bring food back to a safe temperature in the centre, and reheat it only once. {{sfbb-cook}}" }
]);
P.save(m);

/* ---------- Module 5: storing, canning, spoilage, business labels ---------- */
m = P.load(C, "grid-down-food-5");
P.insertAfter(m, "l3", "Home-canned vegetables are the most common cause", [
  { t: "p", x: "The USDA guide adds milk to the low-acid list, and warns that mixtures of low-acid and acid foods are usually low-acid unless a tested recipe adds enough lemon juice, citric acid or vinegar. {{usda-front}}" },
  { t: "p", x: "Why boiling is not enough: botulinum spores survive boiling water. Low-acid foods need 240 to 250 F inside the jar, which a pressure canner reaches at 10 to 15 PSI in 20 to 100 minutes; the same result in a boiling-water canner would take 7 to 11 hours. {{usda-front}} That is about 116 to 121 C (our arithmetic)." }
]);
P.insertAfter(m, "l3", "Do not use an electric multi-cooker", [
  { t: "p", x: "The USDA guide also rules out open-kettle canning, processing jars in an oven, microwave or dishwasher, canning powders, which it calls useless as preservatives, and small pressure saucepans. A pressure canner must be vented for 10 minutes before pressurising, and a dial gauge checked every year. {{usda-principles}}" }
]);
P.insertAfter(m, "l3", "The NCHFP notes that CDC", [
  { t: "p", x: "USDA says low-acid food you canned yourself can be eaten without that boil only when you are sure of every point: a pressure canner with an accurate gauge, current tested times and pressures for your jar, food and altitude, a firmly sealed concave lid, no leaks, no spurting on opening and no off smell. {{usda-front}}" }
]);
P.insertAfter(m, "l4", "Never taste food to see if it is safe", [
  { t: "p", x: "Throwing a suspect jar away needs care, because botulinum toxin can be fatal through the skin as well as by mouth. USDA says a still-sealed suspect jar goes in a heavy bin bag in the rubbish; an unsealed, open or leaking one is first boiled, fully covered, for 30 minutes, wearing gloves. Spills are treated with 1 part unscented household bleach to 5 parts water, left 30 minutes, wiped up, and treated again. {{usda-principles}}" },
  { t: "p", x: "Mould on jam is not safe to scrape off: USDA reports mycotoxins in jars of jelly with surface mould, and no longer recommends wax seals on any sweet spread. {{usda-glossary}}" }
]);
P.replaceText(m, "l4", "Quick decision for jars and tins", "Examine; do not use damaged or broken packaging", "Examine; do not use damaged or broken packaging. A food business throws away badly dented cans and swollen or punctured packs {{sfbb-manage}}");
P.insertAfter(m, "l4", "Bulging, leaking and spurting means", [
  chk("A home-canned jar of beans has a bulging lid and liquid has leaked down the side. How do you get rid of it?",
    ["Open it and pour it down the sink", "Boil it, fully covered, for 30 minutes wearing gloves, then bin it, and treat any spills with bleach", "Put it in the compost", "Taste a little to check"], 1,
    "An unsealed or leaking suspect jar is detoxified by boiling for 30 minutes before disposal; toxin can harm through the skin, so wear gloves. {{usda-principles}}")
]);
P.insertAfter(m, "l5", "Freezing is not a kill step", [
  { t: "p", x: "Freezing pauses the clock rather than resetting it: once defrosted, a food's shelf life depends on the days it had left when it was frozen. High-risk ready-to-eat food is kept at most 3 days in total, the day of cooking plus 2, unless you have evidence for longer. {{sfbb-cross}}" }
]);
P.insertAfter(m, "l5", "Allergens come next", [
  { t: "p", x: "Cooking does not remove allergens, so a mistake cannot be cooked out: start the dish again with fresh ingredients rather than picking out the allergen. Use a may-contain label only if a full risk assessment shows a high risk of cross-contamination, and food sold as free-from needs an allergen-free environment as well as recipe. {{sfbb-manage}} {{sfbb-cross}}" },
  { t: "p", x: "Processes such as vacuum packing, sous vide and low-temperature cooking are outside the standard pack, and a business that uses them must be able to show they are safe, with advice from its local council. {{sfbb-cook}}" }
]);
P.save(m);

/* ---------- Capstone: business continuity plan ---------- */
m = P.load(C, "grid-down-food-cap");
P.replaceText(m, "l4", "Registration and permissions: say what you must register",
  "Registration and permissions: say what you must register and who you must ask.",
  "Registration and permissions: say what you must register and who you must ask, and keep supplier records of what you bought, from whom, how much and when, which the law requires. {{sfbb-manage}}");
P.insertAfter(m, "l4", "Registration and permissions: say what you must register", [
  { t: "p", x: "Add a recall step. If a product or ingredient is withdrawn, stop using and selling it at once, check whether it went into meals already in your freezer, and tell customers who may not eat it straight away; if your own product is unsafe, tell your local authority and the Food Standards Agency. {{sfbb-manage}}" },
  { t: "p", x: "Frozen meals keep the cold chain only if dispatch does: the FSA says delivered food is kept hot or cold until collected and all the way to the customer's home, covered, ideally in an insulated bag or box. {{sfbb-cook}}" }
]);
P.save(m);
console.log("applied");
