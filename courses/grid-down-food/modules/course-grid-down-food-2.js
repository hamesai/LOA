/* Wasteland Kitchen: Food Safety When the Grid Goes Down (module 2). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["grid-down-food-2"] = {
 "intro": "The cold chain breaks first. This module teaches the power-cut clock, an eating order, the rules for thawed and refrozen food and a quick audit, with the places where UK, Irish and US advice differ. Business lens: When the product is frozen meals, the freezer is the business. This module's power-cut clock becomes a freezer-failure plan with a log and a decision at each time. Lecturer lens: Pasteur's address and his work on wine give three practical facts: warm perishable food spoils within a day, exposure to more dust spoils more, and heating helps but has limits.",
 "outcomes": [
  "Work out how long fridge and freezer food stays safe in an outage.",
  "Order a household's food from shortest to longest life.",
  "Decide refreeze or discard using three authorities' rules.",
  "Audit a fridge and make save-or-discard decisions.",
  "Business lens: Write a freezer-failure plan with times, a log and a value-at-risk figure for a frozen-meal business.",
  "Lecturer's method: Use Pasteur's observations on how fast and how often perishable liquids spoil to order food by risk in the first hours of a power cut, and say what heating does and does not do."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "The power-cut clock",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "The first question in a blackout is how long the cold lasts."
    },
    {
     "t": "p",
     "x": "A closed fridge keeps food safely cold for about 4 hours. {{fsa}} {{fsis}}"
    },
    {
     "t": "p",
     "x": "A full freezer holds its temperature for about 48 hours, and a half-full one for about 24 hours, if the door stays closed. {{fsa}} {{fsis}}"
    },
    {
     "t": "p",
     "x": "Both authorities call these estimates, and the real time depends on the make and model and on how warm the room is. {{fsa}}"
    },
    {
     "t": "fig",
     "id": "grid-down-food-clock",
     "title": "The power-cut clock",
     "cap": "Fridge 4 hours, half-full freezer 24 hours, full freezer 48 hours."
    },
    {
     "t": "p",
     "x": "Ireland's FSAI gives the same pattern: a full freezer for about 2 days and a half-full freezer for about 1 day with the door shut. (unverified: the FSAI power-cut page we read does not give these freezer times.) {{fsai}}"
    },
    {
     "t": "h",
     "x": "Stretch the clock"
    },
    {
     "t": "ul",
     "i": [
      "Keep fridge and freezer doors closed as much as possible. {{fsis}} {{fsa}}",
      "Keep the freezer full: fill gaps with containers of water or ice packs, and group items together. {{cdcfood}} {{fsis}}",
      "Use block or dry ice for a long outage; 50 lb of dry ice should hold an 18 cubic foot full freezer for 2 days. {{fsis}}",
      "In cold weather below 8 C, store food outside in a clean, dry, sealed box, away from sun and animals. {{fsa}}",
      "If the power is out for 4 hours and you have a cooler and ice, move perishables into the cooler with ice or frozen gel packs. {{cdcfood}}"
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Dry ice is very cold and releases carbon dioxide. Handle it with gloves and keep the room ventilated (our safety note, not from the sources read)."
    },
    {
     "t": "example",
     "title": "Worked example: when does the clock run out?",
     "steps": [
      "Illustrative: the power fails at 14:20 and the fridge door stays shut.",
      "Fridge limit: 14:20 + 4 hours = 18:20.",
      "Half-full freezer: 14:20 + 24 hours = 14:20 the next day. Full freezer: 14:20 + 48 hours = 14:20 two days later."
     ]
    },
    {
     "t": "terms",
     "i": [
      [
       "Appliance thermometer",
       "A thermometer kept in the fridge or freezer that shows the temperature even after the power has been off for hours. {{fsis}}"
      ],
      [
       "Perishable",
       "Food that needs chilling to stay safe, such as meat, fish, dairy and cooked leftovers."
      ],
      [
       "Cold source",
       "Ice, gel packs or dry ice used to keep a cooler cold."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Put a thermometer in your fridge and freezer. Fill empty freezer space with water bottles. Write down the three clock times for your home."
    },
    {
     "t": "check",
     "q": "A closed fridge loses power at 16:45. When should you decide about perishable food if you use the 4-hour guide?",
     "o": [
      "16:45 the next day",
      "20:45",
      "18:45",
      "22:45"
     ],
     "a": 1,
     "w": "16:45 + 4 hours = 20:45. {{fsa}}"
    },
    {
     "t": "check",
     "q": "What keeps a freezer colder for longer?",
     "o": [
      "Opening it to check",
      "Keeping it full and the door closed",
      "Emptying it",
      "Turning it off"
     ],
     "a": 1,
     "w": "A full freezer holds its temperature longer; keep the door closed. {{fsis}} {{fsa}}"
    },
    {
     "t": "take",
     "i": [
      "Fridge about 4 hours, full freezer about 48 hours, half-full about 24.",
      "Doors shut, freezer full, thermometer inside.",
      "These are estimates; check the thermometer."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "What to eat first",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Eating in the right order saves food and cuts risk."
    },
    {
     "t": "p",
     "x": "The FSA gives an order for a long cut: foods that need refrigeration, then defrosted food that needs no cooking, then room-temperature perishables, then room-temperature canned, bottled and dried food. {{fsa}}"
    },
    {
     "t": "fig",
     "id": "grid-down-food-order",
     "title": "The eating order",
     "cap": "Shortest shelf life first, longest last."
    },
    {
     "t": "p",
     "x": "The UK Chief Medical Officers give the same principle for a national outage. {{cmo}}"
    },
    {
     "t": "p",
     "x": "Most people will have no serious ill effects from eating less than normal for a few days; the priority is that the food they do eat is safe. {{cmo}}"
    },
    {
     "t": "h",
     "x": "How long do things last?"
    },
    {
     "t": "p",
     "x": "For a longer outage, the CMOs set out rough limits, all with the condition that the food looks and smells normal. {{cmo}}"
    },
    {
     "t": "table",
     "title": "CMO guide for a long outage (looks and smells normal)",
     "head": [
      "Food",
      "Roughly how long"
     ],
     "rows": [
      [
       "Packaged salads and sandwiches, cooked chilled meats",
       "1 to 2 days {{cmo}}"
      ],
      [
       "Meat and fish",
       "Safe if you can cook them {{cmo}}"
      ],
      [
       "Defrosted frozen fruit and vegetables",
       "A couple of days; cook after that {{cmo}}"
      ],
      [
       "Pre-cut fresh fruit and vegetables",
       "3 to 4 days; cook after that {{cmo}}"
      ],
      [
       "Whole fruit and vegetables, fruit juice, hard cheese, pasteurised milk, yoghurt, butter, tinned food or long-life milk",
       "Up to 7 days, even once opened {{cmo}}"
      ],
      [
       "Tinned vegetables and fish, beans, pasta, oats, pouched rice",
       "Well beyond 7 days {{cmo}}"
      ]
     ],
     "src": "{{cmo}}"
    },
    {
     "t": "h",
     "x": "Where the sources disagree"
    },
    {
     "t": "table",
     "title": "Milk and yoghurt after the fridge fails",
     "head": [
      "Source",
      "Advice"
     ],
     "rows": [
      [
       "USDA FSIS",
       "Milk, cream, yoghurt: discard if held above 40 F for over 2 hours {{fsis}}"
      ],
      [
       "UK CMOs (long national outage)",
       "Pasteurised milk and yoghurt up to 7 days if they look and smell normal {{cmo}}"
      ]
     ],
     "src": "How to choose: the CMO script is written for a long national power outage where food may be scarce, and it is a looser rule. If you have other safe food, use the stricter rule. For at-risk people always use the stricter rule. This is our reading."
    },
    {
     "t": "example",
     "title": "Worked example: ordering a fridge (illustrative)",
     "steps": [
      "The fridge holds cooked chicken, cut melon, hard cheese, milk, butter, jam and whole apples. Power has been off for 3 hours.",
      "Eat first: cooked chicken and cut melon (shortest life), then milk. Next: hard cheese and butter. Last: apples and jam.",
      "At 4 hours the first group should be eaten or discarded under the FSIS rule; under the CMO guide the chicken is a 1 to 2 day risk, not a safe store."
     ]
    },
    {
     "t": "activity",
     "x": "Write a three-day eating order for your own fridge, freezer and cupboard."
    },
    {
     "t": "check",
     "q": "According to the FSA order, what comes after foods that need refrigeration?",
     "o": [
      "Canned food",
      "Defrosted frozen food that doesn't need cooking",
      "Dried food",
      "Fresh meat"
     ],
     "a": 1,
     "w": "The FSA order is refrigerated, then defrosted without cooking, then room-temperature perishable, then canned, bottled and dried. {{fsa}}"
    },
    {
     "t": "check",
     "q": "Why do FSIS and the CMOs differ on milk?",
     "o": [
      "One is wrong",
      "They are written for different situations and risk levels",
      "Milk is different in each country",
      "They disagree about pasteurisation"
     ],
     "a": 1,
     "w": "The CMO script is for a long national outage; FSIS gives a stricter general rule. Use the stricter one where you can. {{cmo}} {{fsis}}"
    },
    {
     "t": "take",
     "i": [
      "Shortest shelf life first.",
      "Looks and smells normal is a condition, not a test of safety.",
      "Use the stricter rule when you have a choice."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Thawed, partly frozen and refreezing",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "When the power returns, decide food by its state, not by hope."
    },
    {
     "t": "p",
     "x": "FSIS says food in a freezer that still contains ice crystals and feels as cold as if refrigerated can be refrozen, while food that has thawed and been above 40 F for over 2 hours should be discarded. {{fsis}}"
    },
    {
     "t": "p",
     "x": "The FSAI says chilled food in the fridge that has been above 5 C for longer than 4 hours should be discarded. {{fsai}} The FSAI page we read does not cover refreezing partly frozen food, so that rule is unverified here."
    },
    {
     "t": "p",
     "x": "The CDC says thawed frozen food that still contains ice crystals or is at 40 F or below can be refrozen or cooked. {{cdcfood}}"
    },
    {
     "t": "table",
     "title": "Refreezing rules from three authorities",
     "head": [
      "State",
      "FSIS (US)",
      "FSAI (Ireland)",
      "CDC (US)"
     ],
     "rows": [
      [
       "Ice crystals, still cold",
       "Refreeze most foods {{fsis}}",
       "Safe to refreeze or use {{fsai}}",
       "Refreeze or cook {{cdcfood}}"
      ],
      [
       "Thawed, above 40 F / 5 C for over 2 hours",
       "Discard most foods {{fsis}}",
       "Discard {{fsai}}",
       "Throw out food above 40 F {{cdcfood}}"
      ],
      [
       "Fully defrosted, kept cold",
       "Not covered here",
       "Do not refreeze unless cooked to over 75 C first, and only once more {{fsai}}",
       "Not covered here"
      ]
     ],
     "src": "Sources as cited; how to choose: all agree on ice crystals and the 2-hour rule. Use the stricter home rule if unsure"
    },
    {
     "t": "p",
     "x": "FSIS gives exceptions: ice cream and frozen yoghurt are discarded when thawed; hard cheeses, juices, bread and flour can be refrozen when thawed; cooked vegetables and pre-cut greens are discarded after more than 2 hours above 40 F, while raw vegetables are listed as safe. {{fsis}}"
    },
    {
     "t": "example",
     "title": "Worked example: sorting a freezer (illustrative)",
     "steps": [
      "Power is back. Items: a chicken that is rock hard, ice cream that is soft, peas that are thawed but cold with ice crystals, steak that is thawed and warm to the touch.",
      "Chicken: still frozen, keep. Ice cream: discard (FSIS). Peas: ice crystals, cold, can be refrozen but texture will suffer. Steak: thawed and above 40 F, discard.",
      "Use a thermometer to confirm; do not trust touch alone."
     ]
    },
    {
     "t": "callout",
     "k": "key",
     "x": "Never taste food to decide if it is safe. When in doubt, throw it out. {{cdcfood}} {{cdcbot}}"
    },
    {
     "t": "activity",
     "x": "Check your freezer after your next outage or a test: label what is frozen, soft or thawed, and decide using the table."
    },
    {
     "t": "check",
     "q": "A bag of peas has thawed and been above 40 F for over 2 hours. What does FSIS say?",
     "o": [
      "Refreeze it",
      "Discard it",
      "Eat it raw",
      "Cook it and refreeze"
     ],
     "a": 1,
     "w": "FSIS says food that has thawed and been above 40 F for over 2 hours should be discarded, so the peas go. {{fsis}}"
    },
    {
     "t": "check",
     "q": "Which food does FSIS say to discard if it has thawed?",
     "o": [
      "Bread",
      "Ice cream",
      "Flour",
      "Hard cheese"
     ],
     "a": 1,
     "w": "Ice cream and frozen yoghurt are discarded when thawed. {{fsis}}"
    },
    {
     "t": "take",
     "i": [
      "Ice crystals and still cold: usually safe to refreeze.",
      "Above 5 C or 40 F for over 2 hours: discard perishables.",
      "Never taste to decide."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Save or throw away: the quick audit",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "A short audit after any outage saves you from guessing."
    },
    {
     "t": "p",
     "x": "CDC advice after a power cut: throw out perishable food in the fridge (meat, fish, cut fruit and vegetables, eggs, milk and leftovers) after 4 hours without power or a cold source. {{cdcfood}}"
    },
    {
     "t": "p",
     "x": "Check coolers and fridges with an added cold source with a thermometer, and throw out food that has thawed or is above 40 F. {{cdcfood}}"
    },
    {
     "t": "table",
     "title": "Common foods held above 40 F for over 2 hours (FSIS)",
     "head": [
      "Discard",
      "Safe to keep"
     ],
     "rows": [
      [
       "Raw or cooked meat, poultry, fish; deli meats; cooked pasta, rice, potatoes",
       "Hard and processed cheeses; butter and margarine {{fsis}}"
      ],
      [
       "Milk, cream, yoghurt; eggs and egg dishes; cut fruit",
       "Raw vegetables; fruit juices (opened); peanut butter {{fsis}}"
      ],
      [
       "Soups, stews, casseroles; creamy dressings; opened spaghetti sauce",
       "Jelly, mustard, ketchup, olives, pickles; vinegar dressings {{fsis}}"
      ],
      [
       "Cooked vegetables and tofu; potato salad",
       "Bread, rolls, cakes without custard; fruit pies {{fsis}}"
      ]
     ],
     "src": "{{fsis}}; regional lists vary, so use your local authority's list if it differs"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Eggs show the same split: FSIS lists fresh eggs to discard above 40 F for over 2 hours, while the UK CMOs say eggs do not need the fridge and are likely safe if they look and smell normal. {{fsis}} {{cmo}} Practices differ between countries, so follow your local authority."
    },
    {
     "t": "h",
     "x": "Packaging and date checks"
    },
    {
     "t": "ul",
     "i": [
      "Examine unopened products; do not use packaging that is damaged, especially cans and glass-jar seals. {{fsai}}",
      "Throw out containers that are bulging, leaking, open or spurt liquid or foam when opened. {{cdcfood}} {{cdcbot}}",
      "Pay attention to use-by dates; food stored at room temperature usually stays safe past a best-before date. {{fsai}} {{cmo}}"
     ]
    },
    {
     "t": "example",
     "title": "Worked example: a fifteen-item audit (illustrative)",
     "steps": [
      "Fridge after 6 hours with no cold source: milk, cheddar, butter, cooked rice, eggs, hot dogs, ketchup, olives, yoghurt, leftover stew, cut melon, apples, mustard, jam, cooked chicken.",
      "Discard (perishable, above 40 F over 2 hours): milk, cooked rice, eggs, hot dogs, yoghurt, stew, cut melon, cooked chicken = 8 items.",
      "Keep (shelf-stable or low-risk per FSIS): cheddar, butter, ketchup, olives, apples, mustard, jam = 7 items. Total 8 + 7 = 15."
     ]
    },
    {
     "t": "activity",
     "x": "Do a 10-minute audit of your own fridge. Count discards and keeps, and note your most common loss."
    },
    {
     "t": "check",
     "q": "After 6 hours without power or a cold source, which should be thrown out?",
     "o": [
      "Mustard",
      "Butter",
      "Cooked rice",
      "Jam"
     ],
     "a": 2,
     "w": "Cooked pasta, rice and potatoes are discarded; butter, mustard and jam are safe. {{fsis}}"
    },
    {
     "t": "check",
     "q": "What should you do with a can that spurts liquid when opened?",
     "o": [
      "Eat quickly",
      "Throw it out",
      "Boil it for a minute",
      "Taste a little"
     ],
     "a": 1,
     "w": "Containers that spurt liquid or foam are signs of contamination. {{cdcbot}}"
    },
    {
     "t": "take",
     "i": [
      "Audit fast: 4 hours, 40 F, cooked and creamy foods first.",
      "Check cans, jars and dates.",
      "Local lists can differ from FSIS."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Business lens: your freezer is your stock",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "The FSA's advice for households says a power cut of under 4 hours is unlikely to affect the safety of food in chilled or frozen storage. {{fsa}} Food in a full freezer should stay frozen for up to 48 hours, or 24 hours if half full, but these are estimates and vary with the make and model. {{fsa}} Keep doors closed as much as possible and use a thermometer. {{fsa}}"
    },
    {
     "t": "p",
     "x": "That page is written for consumers. It tells businesses to contact the food safety team at their local authority for advice. {{fsa}} Treat the household figures as a starting point, and agree your own rules with your local authority before you trade."
    },
    {
     "t": "p",
     "x": "The owner's documents say the meals are stable for up to 6 months at minus 18 degrees, in 350 to 400 gram portions, with weekly Friday dispatch. {{fallout}} So any stock in the freezer on a Thursday is stock that is about to be sold."
    },
    {
     "t": "table",
     "title": "A freezer-failure log (illustrative layout)",
     "head": [
      "Time since power went off",
      "What you do",
      "What you write down"
     ],
     "rows": [
      [
       "0 hours",
       "Close the lid. Do not open it to look.",
       "Time off, freezer reading, stock count"
      ],
      [
       "Under 4 hours",
       "Leave it shut, check the thermometer from outside if you have a remote one.",
       "Reading and time"
      ],
      [
       "4 hours",
       "Decide: is power back soon? If not, start the backup plan.",
       "Decision and who you called"
      ],
      [
       "24 hours (half-full freezer)",
       "Act on your own limit, and tell your local authority.",
       "Stock state, advice received"
      ],
      [
       "48 hours (full freezer)",
       "Treat as the limit of the estimate. Check every pack.",
       "Which packs stayed hard frozen"
      ]
     ],
     "src": "Times from the FSA household estimates {{fsa}}; the actions are our suggestions."
    },
    {
     "t": "example",
     "title": "Worked example: value at risk (illustrative numbers)",
     "steps": [
      "Suppose a chest freezer holds 120 meals of 380 grams. That is 120 times 0.38, or 45.6 kilograms of food.",
      "Suppose each meal costs 2.40 pounds in ingredients and packaging. The stock at cost is 120 times 2.40, or 288 pounds.",
      "A day lost to a failed freezer and a refused delivery is therefore at least 288 pounds of stock plus lost sales. Spending on a thermometer alarm or a backup plan is small beside that.",
      "Write your own figures for your own freezers."
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Backup options such as an alarm, a second freezer, a generator or a commercial cold store are suggestions for you to research, not FSA requirements. Ask your local authority what it expects of a frozen-food business."
    },
    {
     "t": "activity",
     "x": "Write a freezer-failure plan on one page: times, actions, who to call, and what you will not sell."
    },
    {
     "t": "check",
     "q": "In the FSA household estimate, how long does a full freezer keep food frozen?",
     "o": [
      "4 hours",
      "12 hours",
      "48 hours",
      "7 days"
     ],
     "a": 2,
     "w": "Up to 48 hours in a full freezer, 24 hours if half full, but these are estimates. {{fsa}}"
    },
    {
     "t": "check",
     "q": "Who should a food business ask about power cut advice?",
     "o": [
      "Its customers",
      "Its local authority food safety team",
      "A supplier only",
      "No one"
     ],
     "a": 1,
     "w": "The FSA page says businesses should contact the food safety team at their local authority. {{fsa}}"
    },
    {
     "t": "take",
     "i": [
      "A frozen-food business must plan for freezer failure. {{fsa}}",
      "The household figures are estimates; ask your local authority for yours. {{fsa}}",
      "Log times, readings and decisions."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "The lecturer's method: Louis Pasteur",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read his 1864 address in full, and Britannica and Institut Pasteur summaries. His address gives the observations on timing and exposure. The pasteurisation figures are from Britannica, not from the address. {{pasteur-1864}} {{brit-pasteurization}} {{inst-pasteur}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Use a perishable test liquid and watch it. He describes a clear infusion so sensitive that, at a temperature between 15 and 25 degrees, it would be completely clouded the next day. {{pasteur-1864}}",
      "Keep the conditions the same and vary one thing. He opened twenty sealed vials of the same infusion in each place and counted how many altered. {{pasteur-1864}}",
      "Count, do not guess. In one place 19 of 20 stayed clear, in another 15 of 20, in a third 12 of 20, and after a night in an inn room 10 of 30 altered. {{pasteur-1864}}",
      "Remove the cause without heat to see it is the cause. Blood and urine drawn by a special technique from living, healthy animals and exposed only to air from which the dust and germs were removed stayed unaltered, never having been heated, since March 1863. {{pasteur-1864}}",
      "Apply heat to keep, within limits. Britannica says Pasteur's heating of wine and beer used about 57 degrees Celsius for a few minutes to prevent abnormal fermentation. {{brit-pasteurization}}",
      "Know what heat does not do. Pasteurisation does not destroy all microbes or their spores, so heated food is not safe for ever. {{brit-pasteurization}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Pasteur worked in glass vials with a clear infusion. Food is lumpier and richer than an infusion, and some foods spoil more dangerously than they look. This lesson uses his observations to rank risks, and your course's tested times and temperatures decide what is safe to eat. {{pasteur-1864}}"
    },
    {
     "t": "table",
     "title": "What the observations say and how to use them (the right column is our adaptation)",
     "head": [
      "Observation",
      "Source",
      "Use in the first hours of a power cut"
     ],
     "rows": [
      [
       "A sensitive infusion cloudy by the next day at 15 to 25 °C",
       "Pasteur 1864",
       "Warm, moist, rich food gives microbes the most to work with: eat or cook it first"
      ],
      [
       "More dust, more spoilage",
       "Pasteur 1864",
       "Cover food; do not leave it exposed in a dusty or busy area"
      ],
      [
       "Unheated blood and urine stayed clear if kept from dust",
       "Pasteur 1864",
       "Keeping the dust and germs out matters as much as temperature in his tests"
      ],
      [
       "About 57 °C for a few minutes for wine",
       "Britannica",
       "A kind of heating for a product, not a rule for cooking food"
      ],
      [
       "Spores survive pasteurisation",
       "Britannica",
       "Cooked food is not safe indefinitely; recheck, chill or discard on schedule"
      ]
     ],
     "src": "The first two columns follow the sources. The last column is our adaptation. {{pasteur-1864}} {{brit-pasteurization}}"
    },
    {
     "t": "h",
     "x": "Worked example: sorting the fridge by what spoils fastest (illustrative)"
    },
    {
     "t": "example",
     "title": "A first-hours order of eating",
     "steps": [
      "List what is in the fridge and freezer. Mark each as perishable (cooked meat, dairy, cut fruit) or stable (hard cheese, whole fruit, vegetables with skins).",
      "Pasteur's sensitive infusion clouded within a day at room temperature (unverified: the timing was not confirmed in the 1864 text or secondary sources checked), so rank by how much a microbe has to feed on and how recently it was cooked or opened. {{pasteur-1864}}",
      "Put the cooked and opened items first. If the power is off for 4 hours, check the fridge thermometer reading against your course's limit and apply it. The limit comes from your food-safety source, not from Pasteur.",
      "Keep the freezer shut. Eat what you can from the fridge before opening the freezer.",
      "Write the order on a card on the fridge door, with the time the power went off."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a risk-and-time card"
    },
    {
     "t": "ol",
     "i": [
      "List every perishable item and when it was cooked or opened.",
      "Sort by what a microbe has most to feed on and how long it has been warm.",
      "Cover everything and keep the dust and hands away from it.",
      "Use your course's safe temperature limits to decide eat, cook or discard.",
      "Write the time the power went off, and the time each decision was made."
     ]
    },
    {
     "t": "activity",
     "x": "Make a first-hours card for your fridge: items in order to eat, with the time the power went off and the limit from your course."
    },
    {
     "t": "check",
     "q": "What happened to Pasteur's sensitive infusion at 15 to 25 °C?",
     "o": [
      "It stayed clear for a week",
      "It clouded by the next day",
      "It froze",
      "It vanished"
     ],
     "a": 1,
     "w": "He says it would be completely clouded the next day. {{pasteur-1864}}"
    },
    {
     "t": "check",
     "q": "Which is true of pasteurisation?",
     "o": [
      "It kills every microbe and spore",
      "It does not destroy all microbes or spores",
      "It works only on milk",
      "It is the same as freezing"
     ],
     "a": 1,
     "w": "Britannica says pasteurisation does not destroy all microbes or spores. {{brit-pasteurization}}"
    },
    {
     "t": "check",
     "q": "What did the vial counts show about exposure?",
     "o": [
      "Nothing",
      "More exposure to dust meant more spoiled vials",
      "Dust is harmless",
      "Glass is poisonous"
     ],
     "a": 1,
     "w": "The number of altered vials rose where there was more dust. {{pasteur-1864}}"
    },
    {
     "t": "take",
     "i": [
      "Warm, rich, exposed food spoils first. {{pasteur-1864}}",
      "Count and record. {{pasteur-1864}}",
      "Heating helps but is not forever. {{brit-pasteurization}}"
     ]
    }
   ]
  }
 ]
};
