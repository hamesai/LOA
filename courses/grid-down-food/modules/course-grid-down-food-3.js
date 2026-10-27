/* Wasteland Kitchen: Food Safety When the Grid Goes Down (module 3). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["grid-down-food-3"] = {
 "intro": "No safe water means no safe food. This module covers when tap water cannot be trusted, boiling, chemical and filter methods, and how to use treated water in the kitchen. Business lens: A food business uses water for washing hands, food, equipment and drinks. This module's water lessons become a plan for what to pause and what to tell your local authority. Lecturer lens: John Snow found cholera's link to a water supply by comparing two groups of houses that differed only in who supplied the water. His account also shows him correcting his own ratio when better data came in.",
 "outcomes": [
  "Decide whether water can be made safe by treatment.",
  "Boil water correctly for your elevation.",
  "Calculate a bleach dose and understand its limits.",
  "Use safe water for dishes, produce and infant formula.",
  "Business lens: Say what water-dependent steps a home food business must stop when the water is not safe, and plan for them.",
  "Lecturer's method: Design a comparison of two groups that differ in one thing, check your data the way Snow did, report the result with its numbers, and say when new data changes the answer."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "When water cannot be trusted",
   "min": 13,
   "blocks": [
    {
     "t": "p",
     "x": "Water is the fifth key, and it often fails together with the power."
    },
    {
     "t": "p",
     "x": "After an emergency such as a water main break or flood, tap water may not be available or safe. {{cdcwater}}"
    },
    {
     "t": "p",
     "x": "If you know or suspect your water is unsafe, do not use it to drink, wash dishes, brush teeth, wash or prepare food, wash hands, make ice or make baby formula. {{cdcwater}}"
    },
    {
     "t": "p",
     "x": "Use bottled, boiled or treated water instead, and follow your health department's advice. {{cdcwater}}"
    },
    {
     "t": "h",
     "x": "Three kinds of advisory"
    },
    {
     "t": "table",
     "title": "Drinking water advisories (CDC)",
     "head": [
      "Advisory",
      "What it means",
      "What to do"
     ],
     "rows": [
      [
       "Boil water",
       "Germs may be in the tap water",
       "Use bottled water or boil tap water for 1 minute {{cdcadv}}"
      ],
      [
       "Do not drink",
       "Chemicals or toxins may be in the water; boiling will not help",
       "Use commercially bottled water for drinking, cooking and food preparation {{cdcadv}}"
      ],
      [
       "Do not use",
       "Any contact could be dangerous; rare",
       "Use bottled water for all purposes {{cdcadv}}"
      ]
     ],
     "src": "{{cdcadv}}"
    },
    {
     "t": "h",
     "x": "Water you must never use"
    },
    {
     "t": "ul",
     "i": [
      "Water from radiators or boilers that are part of the home heating system. {{cdcwater}}",
      "Water and ice from fridge dispensers connected to the water line during an advisory. {{cdcadv}}",
      "Water containing fuel, toxic chemicals or radioactive materials: boiling and disinfecting do not make it safe. {{cdcwater}}"
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "If you suspect fuel, chemicals or radioactive material, use bottled or another source of water and contact your health department. Boiling does not remove them. {{cdcwater}}"
    },
    {
     "t": "fig",
     "id": "grid-down-food-water",
     "title": "Water decision flow",
     "cap": "Chemical contamination cannot be boiled away; germs can be."
    },
    {
     "t": "activity",
     "x": "List every safe water source you could reach in a blackout: bottled stock, a neighbour's stored supply, a safe well. Mark any that need treatment."
    },
    {
     "t": "check",
     "q": "Which water can boiling make safe to drink?",
     "o": [
      "Water with fuel in it",
      "Water with toxic chemicals",
      "Clear water that may carry germs",
      "Water from a heating radiator"
     ],
     "a": 2,
     "w": "Boiling kills germs but cannot remove fuel, chemicals or radioactive materials, and radiator water must not be used. {{cdcwater}}"
    },
    {
     "t": "check",
     "q": "During a 'do not drink' advisory, what should you use for cooking?",
     "o": [
      "Boiled tap water",
      "Commercially bottled water",
      "Filtered tap water",
      "Rain water"
     ],
     "a": 1,
     "w": "For chemical or toxin advisories, bottled water is used because boiling does not help. {{cdcadv}}"
    },
    {
     "t": "take",
     "i": [
      "Unsafe water is unsafe for drinking, washing food and brushing teeth.",
      "Boiling treats germs, not chemicals.",
      "Never use heating-system water."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Boiling: the surest method",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Boiling is the best way to kill germs in water. {{cdcwater}}"
    },
    {
     "t": "p",
     "x": "CDC says it kills bacteria, viruses and parasites, including Giardia and Cryptosporidium. {{cdcwater}}"
    },
    {
     "t": "ol",
     "i": [
      "If the water is cloudy, strain it through a clean cloth, paper towel or coffee filter, or let it settle and pour off the clear water. {{cdcwater}}",
      "Bring clear water to a rolling boil for 1 minute. At elevations above 6,500 feet (about 2,000 m), boil for 3 minutes. {{cdcwater}}",
      "Let the water cool. {{cdcwater}}",
      "Store it in clean, sanitised containers with tight covers. {{cdcwater}}"
     ]
    },
    {
     "t": "p",
     "x": "Boil tap water even if it has been through a home filter or a filtering jug. {{cdcadv}}"
    },
    {
     "t": "p",
     "x": "To improve the flat taste, pour it between containers and let it stand, or add a pinch of salt per litre. {{cdcwater}}"
    },
    {
     "t": "table",
     "title": "Boil times",
     "head": [
      "Place",
      "Boil time"
     ],
     "rows": [
      [
       "Below 6,500 ft (about 2,000 m)",
       "1 minute at a rolling boil {{cdcwater}}"
      ],
      [
       "Above 6,500 ft (about 2,000 m)",
       "3 minutes {{cdcwater}}"
      ]
     ],
     "src": "{{cdcwater}}. 6,500 ft x 0.3048 = 1,981 m, rounded to about 2,000 m."
    },
    {
     "t": "example",
     "title": "Worked example: fuel for boiling",
     "steps": [
      "Illustrative: you need 4 litres of boiled water. A pot holds 2 litres, so you boil twice.",
      "Each batch needs a rolling boil for 1 minute after it reaches boiling, plus heat-up time you must measure on your own stove.",
      "Plan fuel for the heating time as well as the 1 minute. Our advice: test it once now and record the minutes per batch."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "A rolling boil means large bubbles breaking all over the surface, not a few bubbles at the edge of the pot (our description of the CDC term)."
    },
    {
     "t": "activity",
     "x": "Time how long it takes your stove to bring 2 litres of water to a rolling boil, and write it down."
    },
    {
     "t": "check",
     "q": "You are at 3,000 m. How long should you boil clear water?",
     "o": [
      "1 minute",
      "3 minutes",
      "30 seconds",
      "10 minutes"
     ],
     "a": 1,
     "w": "Above about 2,000 m (6,500 ft) CDC says boil for 3 minutes. {{cdcwater}}"
    },
    {
     "t": "check",
     "q": "Cloudy water is ready to boil. What should you do first?",
     "o": [
      "Add bleach",
      "Strain or let it settle",
      "Freeze it",
      "Add salt"
     ],
     "a": 1,
     "w": "Filter through a clean cloth or let it settle before treating. {{cdcwater}}"
    },
    {
     "t": "take",
     "i": [
      "Boil for 1 minute, 3 above 2,000 m.",
      "Strain cloudy water first.",
      "Boil even if you have a filter jug."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "When you cannot boil: bleach, tablets, filters and sunlight",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "If you cannot boil, you can disinfect small quantities with household bleach, iodine or chlorine dioxide tablets. {{cdcwater}}"
    },
    {
     "t": "p",
     "x": "These work well against most viruses and bacteria, but not as well as boiling against the parasites Cryptosporidium and Giardia. {{cdcwater}}"
    },
    {
     "t": "h",
     "x": "Bleach"
    },
    {
     "t": "ol",
     "i": [
      "Check the label for the strength of sodium hypochlorite; plain unscented household bleach is typically 5% to 9% in the US. {{cdcwater}}",
      "Add the right amount, stir well, and let the water stand for at least 30 minutes. {{cdcwater}}",
      "If the water is cloudy, murky, coloured or very cold, add double the amount. {{cdcwater}}",
      "Store it in clean, sanitised containers with tight covers. {{cdcwater}}"
     ]
    },
    {
     "t": "table",
     "title": "Bleach dose (CDC)",
     "head": [
      "Water",
      "5 to 9% bleach",
      "1% bleach"
     ],
     "rows": [
      [
       "1 quart or litre",
       "2 drops (0.1 mL)",
       "10 drops (0.5 mL)"
      ],
      [
       "1 gallon",
       "8 drops (0.5 mL)",
       "40 drops (2.5 mL)"
      ],
      [
       "5 gallons",
       "40 drops (2.5 mL)",
       "200 drops (12.5 mL)"
      ]
     ],
     "src": "{{cdcwater}}"
    },
    {
     "t": "example",
     "title": "Worked example: 10 litres of clear water",
     "steps": [
      "5 to 9% bleach: 2 drops per litre x 10 litres = 20 drops. If cloudy, double it to 40 drops.",
      "1% bleach: 10 drops per litre x 10 litres = 100 drops, or 200 if cloudy.",
      "Wait at least 30 minutes before drinking. Check the label first; do not use scented or colour-safe bleach, only unscented household bleach."
     ]
    },
    {
     "t": "h",
     "x": "Tablets, filters and light"
    },
    {
     "t": "ul",
     "i": [
      "Tablets or drops: follow the label. Iodine and chlorine tablets will not kill Cryptosporidium; chlorine dioxide tablets will if used correctly. {{cdcwater}}",
      "Portable filters: do not remove viruses; need an absolute pore of 0.3 micron or smaller for bacteria and 1 micron or smaller for parasites. {{cdcwater}}",
      "After filtering, add a disinfectant to kill viruses and bacteria. {{cdcwater}}",
      "UV units and sunlight work only on clear water. For sunlight, lay clear plastic bottles on their side for about 6 hours in sun or 2 days if cloudy. {{cdcwater}}"
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "People who are pregnant, have thyroid problems or are sensitive to iodine should avoid iodine-treated water, and no one should drink it for more than a few weeks at a time. {{cdcwater}}"
    },
    {
     "t": "activity",
     "x": "Practise measuring bleach drops into a litre bottle of safe water and label it for a demonstration. Do not drink water from the practice unless you have waited 30 minutes."
    },
    {
     "t": "check",
     "q": "You have clear water and 5% bleach. How many drops for 4 litres?",
     "o": [
      "4",
      "8",
      "16",
      "40"
     ],
     "a": 1,
     "w": "2 drops per litre x 4 = 8 drops. {{cdcwater}}"
    },
    {
     "t": "check",
     "q": "Which treatment kills Cryptosporidium?",
     "o": [
      "Iodine tablets",
      "Chlorine tablets",
      "Boiling",
      "A basic filter jug"
     ],
     "a": 2,
     "w": "Boiling kills it; chlorine dioxide tablets do too if used properly; iodine and chlorine tablets do not. {{cdcwater}}"
    },
    {
     "t": "take",
     "i": [
      "Bleach works but needs a 30-minute wait and double if cloudy.",
      "Filters do not stop viruses.",
      "Sunlight and UV need clear water."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Using safe water in the kitchen",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Safe water has to reach every job in the kitchen, not just the cup."
    },
    {
     "t": "p",
     "x": "During a boil advisory, use bottled or boiled water for drinking and to prepare and cook food. {{cdcadv}}"
    },
    {
     "t": "p",
     "x": "Use boiled or bottled water to wash fruit and vegetables eaten raw, and to brush teeth. {{cdcadv}}"
    },
    {
     "t": "p",
     "x": "The UK CMOs add that where fruit cannot be washed because there is no fresh water, you should peel it where possible. {{cmo}}"
    },
    {
     "t": "h",
     "x": "Dishes"
    },
    {
     "t": "ul",
     "i": [
      "Use disposable plates, cups and cutlery if possible. {{cdcadv}}",
      "Dishwashers are generally safe if they have a sanitising cycle or reach a final rinse of at least 150 F (66 C). {{cdcadv}}",
      "By hand: wash and rinse, then soak in a separate basin with 1 teaspoon of unscented bleach per gallon of warm water for at least 1 minute, and air dry. {{cdcadv}}"
     ]
    },
    {
     "t": "h",
     "x": "Babies"
    },
    {
     "t": "p",
     "x": "Making up infant formula safely needs boiled water; if you cannot boil water, use ready-to-use formula. {{fsa}}"
    },
    {
     "t": "p",
     "x": "Breastfeeding is the best option for feeding an infant; if you feed formula, ready-to-use is best. {{cdcadv}}"
    },
    {
     "t": "example",
     "title": "Worked example: scaling the dish sanitiser",
     "steps": [
      "1 teaspoon of bleach per gallon of water. 1 gallon is about 3.8 litres, so 1 teaspoon (about 5 mL) per 3.8 litres is about 1.3 mL per litre.",
      "A 5-litre basin needs about 6.5 mL (5 x 1.3), roughly 1 and a third teaspoons.",
      "Our arithmetic from the CDC ratio; use unscented bleach and measure carefully."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Fill clean bottles and pans with safe water as soon as you hear a warning, before pressure drops (our practical advice)."
    },
    {
     "t": "activity",
     "x": "Write a one-page water plan for your household: what you drink, wash with, cook with, and where each comes from."
    },
    {
     "t": "check",
     "q": "What does CDC say about washing dishes in a boil advisory?",
     "o": [
      "Use cold tap water",
      "Use disposables or sanitise with a bleach soak",
      "Skip washing",
      "Use hot water only"
     ],
     "a": 1,
     "w": "Use disposables if possible, or wash and then soak in a bleach solution for at least 1 minute. {{cdcadv}}"
    },
    {
     "t": "check",
     "q": "You cannot boil water for formula. What does the FSA suggest?",
     "o": [
      "Use cold tap water",
      "Use ready-to-use formula",
      "Give diluted juice",
      "Skip a feed"
     ],
     "a": 1,
     "w": "If you cannot boil water, ready-to-use infant formula is an option. {{fsa}}"
    },
    {
     "t": "take",
     "i": [
      "Every kitchen job needs safe water.",
      "Disposables beat washing in a crisis.",
      "Infants need boiled water or ready-to-use formula."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Business lens: water, sinks and what a business must pause",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "The FSA's printable guide for new businesses says separate sinks must be provided for washing food and for cleaning equipment in food preparation areas. {{fsa-start-print}} All equipment that food touches must be kept in good order and cleaned effectively. {{fsa-start-print}}"
    },
    {
     "t": "p",
     "x": "A water outage or a boil notice therefore affects handwashing, washing of ingredients, equipment cleaning and any recipe that uses water or ice. The owner's range includes nut milks, an electrolyte drink powder and a piña colada blend, all of which are mixed with water, juice or ice. {{fallout}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The FSA documents we read do not set out a rule for trading during a water outage. Treat what follows as our reasoning, and ask your local authority."
    },
    {
     "t": "example",
     "title": "Worked example: a water-risk checklist (illustrative, our reading)",
     "steps": [
      "List every step where water touches food or food contact surfaces: handwashing, washing vegetables, rinsing equipment, mixing drinks, making ice.",
      "If the supply is unsafe or cut, mark each step as stop, or continue with treated water. This module's lessons give the boiling and treatment methods.",
      "Do not make drinks or ice with untreated water.",
      "Write the stop rule: if you cannot wash hands and equipment properly, you do not cook for sale.",
      "Write who you will tell: your local authority, then your customers if an order is delayed."
     ]
    },
    {
     "t": "activity",
     "x": "Write your water-risk checklist for your kitchen, with a stop or continue decision for each step."
    },
    {
     "t": "check",
     "q": "What does the FSA guide say about sinks in a food preparation area?",
     "o": [
      "One sink is enough",
      "Separate sinks must be provided for washing food and cleaning equipment",
      "No sink is needed",
      "Only a bowl is needed"
     ],
     "a": 1,
     "w": "Separate sinks must be provided for washing food and for cleaning equipment. {{fsa-start-print}}"
    },
    {
     "t": "check",
     "q": "Why should you not make ice or drinks with untreated water in an outage?",
     "o": [
      "It tastes bad",
      "Water may be contaminated and ice does not remove it",
      "It is more expensive",
      "It freezes slower"
     ],
     "a": 1,
     "w": "Freezing does not make unsafe water safe. See this module's lessons and {{fsa-chill-biz}}."
    },
    {
     "t": "take",
     "i": [
      "A food business needs safe water for hands, food and equipment.",
      "If you cannot wash properly, pause cooking for sale. This is our reasoning; confirm with your local authority.",
      "Never make drinks or ice with untreated water."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "The lecturer's method: John Snow",
   "min": 26,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read Snow's own paper Cholera and the Water Supply in the South Districts of London in 1854 in full. It is the primary source, so the record is rich. The 315 and 37 per 10,000 figures come from a secondary table read in an earlier pass. {{snow-water}} {{snow-ije}}"
    },
    {
     "t": "p",
     "x": "The Broad Street pump story is a different Snow study and is not in this paper. We did not read it in this pass. {{wiki-broad}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Notice a difference in outcome. When cholera returned in 1854, he saw the same advantage for districts partly supplied from Thames Ditton as in the earlier epidemic. {{snow-water}}",
      "Look for a natural experiment. The pipes of the two water companies went down the same streets and into nearly all the courts and alleys, so a single house often had a different supply from its neighbours. {{snow-water}}",
      "Check that the groups are comparable. Each company supplied rich and poor alike, so a population of about 300,000 people of various conditions and occupations was divided into two groups by no other circumstance than the water. {{snow-water}}",
      "Collect the data house by house. He made the supply of each fatal case a matter of personal inquiry, and did not rely on the resident's reply or the look of the water, but asked for the receipt for the water rate. {{snow-water}}",
      "Add a second check. A chemical test of the water helped, since a mixture of sea water extended further up the Thames than usual in the dry weather. {{snow-water}}",
      "Report the numbers and what they mean. In the first four weeks, 9 July to 5 August, there were 334 deaths, of which 286 were in houses supplied by the Southwark and Vauxhall Company and 14 in houses supplied by the Lambeth Company. {{snow-water}}"
     ]
    },
    {
     "t": "p",
     "x": "Of the remaining deaths, 4 were from a pump well, 26 from water drawn directly from the river, a canal or a tidal ditch, and 4 had no supply ascertained. {{snow-water}}"
    },
    {
     "t": "p",
     "x": "He gives the rates: the Southwark and Vauxhall Company supplied 40,046 houses with an estimated 266,516 people, and the Lambeth Company 26,107 houses with 173,748 people, so the mortality was 107 per 100,000 for the first and 8 per 100,000 for the second. {{snow-water}}"
    },
    {
     "t": "p",
     "x": "He also shows that more data changed his figure. A supplemental inquiry showed 125 and 37 per 10,000 for the two companies, a difference of 3½ to 1, instead of 160 and 27, a difference of 6 to 1. He argues even the smaller difference does not explain the variation across districts. {{snow-water}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Snow's early ratio is not the same across his reports, because the data changed as he collected more. A good comparison states which figure it is quoting and from which weeks. The 315 and 37 per 10,000 houses figure in some secondary tables is for a different measure and period. {{snow-water}} {{snow-ije}}"
    },
    {
     "t": "table",
     "title": "Snow's comparison, first four weeks of the 1854 epidemic (from his paper)",
     "head": [
      "Supply",
      "Houses",
      "Estimated people",
      "Deaths",
      "Rate per 100,000 people"
     ],
     "rows": [
      [
       "Southwark and Vauxhall Co.",
       "40,046",
       "266,516",
       "286",
       "107"
      ],
      [
       "Lambeth Co.",
       "26,107",
       "173,748",
       "14",
       "8"
      ]
     ],
     "src": "From {{snow-water}}. The rates follow his paper and we checked them by division."
    },
    {
     "t": "h",
     "x": "Worked example: reproducing his rate (his figures, our arithmetic)"
    },
    {
     "t": "example",
     "title": "Checking Snow's numbers",
     "steps": [
      "The Southwark and Vauxhall rate is 286 deaths ÷ 266,516 people = 0.001073, which is 107 per 100,000. {{snow-water}}",
      "The Lambeth rate is 14 ÷ 173,748 = 0.0000806, which is 8 per 100,000. {{snow-water}}",
      "The ratio of the rates is 107 ÷ 8, about 13 to 1.",
      "Compare with his later supplemental figure of 3½ to 1 for a longer period and larger area. The ratio depends on the weeks and the data, so quote the figure with its period. {{snow-water}}",
      "Now do your own: if 4 of 20 people who ate dish A fell ill and 1 of 20 who did not eat it fell ill, the rates are 20 percent and 5 percent, a ratio of 4 to 1. Ask what else the two groups differ in before you blame the dish."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a two-group comparison for a household"
    },
    {
     "t": "ol",
     "i": [
      "Write where each person gets water or food: tap, stored container, shop-bought, river or well.",
      "If two people fall ill, ask what they ate and drank, and whether the source differs from those who stayed well.",
      "Check that the groups are alike in other ways (age, who prepared the food).",
      "Verify the source with evidence, such as a receipt or a test, not just a reply.",
      "Write rates with the numerator and denominator, not just 'most'."
     ]
    },
    {
     "t": "activity",
     "x": "Write a water or food log for one week. If anyone falls ill, work out the rates for the people who did and did not share each source."
    },
    {
     "t": "check",
     "q": "What made Snow's comparison a natural experiment?",
     "o": [
      "He gave people different water",
      "The two companies' pipes ran side by side, so neighbours differed only in supply",
      "He ran a laboratory trial",
      "He chose the sickest houses"
     ],
     "a": 1,
     "w": "A single house often had a different supply from either neighbour. {{snow-water}}"
    },
    {
     "t": "check",
     "q": "How did he check each house's supply?",
     "o": [
      "He believed the resident",
      "He asked for the water-rate receipt and used a chemical test",
      "He guessed",
      "He tasted the water"
     ],
     "a": 1,
     "w": "He did not rest content with the reply and asked for the receipt, helped by a chemical test. {{snow-water}}"
    },
    {
     "t": "check",
     "q": "Why quote the weeks with a ratio?",
     "o": [
      "To look careful",
      "The ratio changed as he gathered more data",
      "It is a rule of grammar",
      "It shortens the report"
     ],
     "a": 1,
     "w": "His ratio changed from 6 to 1 to 3½ to 1 with more data. {{snow-water}}"
    },
    {
     "t": "take",
     "i": [
      "Compare groups that differ in one thing. {{snow-water}}",
      "Verify each case with evidence, not the reply. {{snow-water}}",
      "State the figures with their weeks, and revise when data changes."
     ]
    }
   ]
  }
 ]
};
