/* Wasteland Kitchen: Food Safety When the Grid Goes Down (module 1). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["grid-down-food-1"] = {
 "intro": "Everything in this course rests on five simple keys and a handful of numbers. This module sets the keys, compares the temperature limits from four authorities and shows who needs the strictest rules. Business lens: This course now serves someone starting a catering business from a home kitchen that sells frozen meals. This module's lesson on registration and hazard control turns the five keys and key temperatures into the first page of your food safety management procedures. Lecturer lens: Louis Pasteur did not argue that germs were in the air. He collected them, counted what survived, and found the hidden source of error in other people's experiments. His 1864 address is a method for finding where contamination comes from.",
 "outcomes": [
  "State the WHO five keys and give a grid-down example for each.",
  "Compare UK, Irish, WHO and US temperature limits and convert between Celsius and Fahrenheit.",
  "Keep hands, surfaces and raw foods clean and separate without running water.",
  "Identify at-risk people in a household and the stricter rules for them.",
  "Business lens: Say what a home food business must do before trading, and write a first hazard-control table for one frozen menu item.",
  "Lecturer's method: Explain, from Pasteur's own experiments, why dust, hands and tools carry microbes to food and why heat, covers and clean handling work, and design a handling routine for a kitchen with no running water."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Why food makes people ill: the five keys",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "When the grid goes down, your fridge, tap and cooker may all fail at once."
    },
    {
     "t": "p",
     "x": "The rules that keep food safe do not change; they get harder to follow."
    },
    {
     "t": "p",
     "x": "The WHO has boiled those rules down to five keys: keep clean, separate raw and cooked, cook thoroughly, keep food at safe temperatures, and use safe water and raw materials. {{who5keys}}"
    },
    {
     "t": "p",
     "x": "The WHO says dangerous microorganisms are widely found in soil, water, animals and people. {{who5keys}}"
    },
    {
     "t": "p",
     "x": "Most microorganisms do not cause disease, but the ones that do can multiply in food left in the wrong conditions. {{who5keys}}"
    },
    {
     "t": "fig",
     "id": "grid-down-food-keys",
     "title": "WHO five keys",
     "cap": "Keep clean, separate raw and cooked, cook thoroughly, safe temperatures, safe water and raw materials."
    },
    {
     "t": "h",
     "x": "What each key asks of you"
    },
    {
     "t": "table",
     "title": "The five keys in practice",
     "head": [
      "Key",
      "What to do (from the WHO poster)"
     ],
     "rows": [
      [
       "Keep clean",
       "Wash hands before handling food and often during preparation; wash after the toilet; clean surfaces and equipment; protect kitchens from pests {{who5keys}}"
      ],
      [
       "Separate raw and cooked",
       "Keep raw meat, poultry and seafood apart from other food; use separate knives and boards; store in containers {{who5keys}}"
      ],
      [
       "Cook thoroughly",
       "Cook meat, poultry, eggs and seafood well; bring soups and stews to boiling to reach 70 C; reheat thoroughly {{who5keys}}"
      ],
      [
       "Safe temperatures",
       "No more than 2 hours at room temperature; chill promptly, ideally below 5 C; keep hot food above 60 C; do not thaw at room temperature {{who5keys}}"
      ],
      [
       "Safe water and raw materials",
       "Use safe or treated water; choose fresh food; wash produce eaten raw; do not use food past its date {{who5keys}}"
      ]
     ],
     "src": "{{who5keys}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "Every skill in this course is one of the five keys, applied when electricity, water or fuel is missing."
    },
    {
     "t": "terms",
     "i": [
      [
       "Foodborne illness",
       "Illness caused by eating food that carries harmful germs, toxins or chemicals."
      ],
      [
       "Cross-contamination",
       "Moving germs from one food, hand or surface to another."
      ],
      [
       "Cold chain",
       "Keeping perishable food continuously cold from shop to plate."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Write the five keys on a card and stick it where you cook. Add one grid-down example under each key."
    },
    {
     "t": "check",
     "q": "Which key tells you not to leave cooked food at room temperature for more than 2 hours?",
     "o": [
      "Keep clean",
      "Separate raw and cooked",
      "Keep food at safe temperatures",
      "Cook thoroughly"
     ],
     "a": 2,
     "w": "The WHO safe-temperatures key sets a 2-hour limit at room temperature. {{who5keys}}"
    },
    {
     "t": "check",
     "q": "To what temperature should soups and stews be brought to be sure they are cooked thoroughly?",
     "o": [
      "50 C",
      "60 C",
      "70 C",
      "100 F"
     ],
     "a": 2,
     "w": "The WHO says to bring soups and stews to boiling so they reach 70 C. {{who5keys}}"
    },
    {
     "t": "take",
     "i": [
      "Five keys: clean, separate, cook, temperature, safe water.",
      "Germs live in soil, water, animals and people.",
      "A blackout makes each key harder, not optional."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Temperature numbers and where sources differ",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Temperature is the main lever you control without power."
    },
    {
     "t": "p",
     "x": "Different authorities quote slightly different numbers, because their rules are built for different foods and settings."
    },
    {
     "t": "fig",
     "id": "grid-down-food-temps",
     "title": "Key temperatures in Celsius",
     "cap": "Freezer, fridge, power-cut, hot-holding and cooking thresholds on one scale."
    },
    {
     "t": "table",
     "title": "Key thresholds side by side",
     "head": [
      "Question",
      "WHO",
      "UK FSA",
      "Ireland FSAI",
      "USDA FSIS (US)"
     ],
     "rows": [
      [
       "Fridge normal",
       "Below 5 C {{who5keys}}",
       "5 C or below {{fsa}}",
       "0 to 5 C {{fsai}}",
       "40 F or below (4.4 C) {{fsis}}"
      ],
      [
       "Fridge in a power cut",
       "Not stated",
       "Under 8 C acceptable {{fsa}}",
       "Discard if above 5 C for a substantial time {{fsai}}",
       "40 F; discard perishables above it over 2 hours {{fsis}}"
      ],
      [
       "Freezer",
       "Not stated",
       "Not stated",
       "-18 C or less {{fsai}}",
       "0 F or lower (-17.8 C) {{fsis}}"
      ],
      [
       "Hot holding",
       "Above 60 C {{who5keys}}",
       "Not stated",
       "Not stated",
       "Not stated on this page"
      ],
      [
       "Cook-through",
       "70 C {{who5keys}}",
       "Steaming hot and cooked through {{fsa}}",
       "Over 75 C before refreezing {{fsai}}",
       "Not stated on this page"
      ]
     ],
     "src": "Sources as cited; how to choose: use your local authority's number, and the stricter one if unsure"
    },
    {
     "t": "p",
     "x": "The USDA page says foods held above 40 F for over 2 hours should be discarded if they are perishable, while the UK page allows fridge food to sit under 8 C in a power cut. {{fsis}} {{fsa}}"
    },
    {
     "t": "p",
     "x": "The gap is about the starting limit and the time allowed: the UK 4-hour guide runs from a fridge that was already cold. {{fsa}}"
    },
    {
     "t": "example",
     "title": "Worked example: converting Fahrenheit and checking the units",
     "steps": [
      "40 F to Celsius: (40 - 32) x 5 / 9 = 4.4 C. 140 F: (140 - 32) x 5 / 9 = 60 C. 0 F: (0 - 32) x 5 / 9 = -17.8 C.",
      "So the US fridge limit (4.4 C) is slightly tighter than the 5 C UK and Irish figure, and the US freezer limit (-17.8 C) is slightly warmer than the Irish -18 C.",
      "The differences are small; the point is that a thermometer reading of 8 C or more means act, whichever country you live in."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Put a cheap fridge thermometer in the fridge and the freezer before you need it. FSIS notes that an appliance thermometer shows the temperature however long the power has been out. {{fsis}}"
    },
    {
     "t": "activity",
     "x": "Check your fridge and freezer with a thermometer today and write the readings down."
    },
    {
     "t": "check",
     "q": "A fridge thermometer reads 7 C during a UK power cut. What does the FSA say?",
     "o": [
      "Throw everything out",
      "Food can be stored under 8 C in a power cut",
      "Switch the fridge off",
      "Eat everything now"
     ],
     "a": 1,
     "w": "The FSA says that in power cuts food can be stored in fridges at temperatures under 8 C. {{fsa}}"
    },
    {
     "t": "check",
     "q": "What is 140 F in Celsius?",
     "o": [
      "50 C",
      "60 C",
      "70 C",
      "100 C"
     ],
     "a": 1,
     "w": "(140 - 32) x 5 / 9 = 60 C."
    },
    {
     "t": "take",
     "i": [
      "Thresholds differ slightly by country; the pattern is the same.",
      "A thermometer turns a guess into a decision.",
      "Convert units before you compare numbers."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Cleaning and separating when the tap is dry",
   "min": 13,
   "blocks": [
    {
     "t": "p",
     "x": "Keeping clean is key one, and it is the first to fail without running water."
    },
    {
     "t": "p",
     "x": "The FSA says you can use alcohol-based hand sanitiser for hands and antibacterial sprays or wipes for surfaces and utensils if the water supply is also affected. {{fsa}}"
    },
    {
     "t": "p",
     "x": "It still tells you to wash hands before touching food and to keep raw and cooked foods separate. {{fsa}}"
    },
    {
     "t": "p",
     "x": "FSIS recommends washing hands with warm water and soap for at least 20 seconds, which shows what you are replacing when you cannot wash. {{fsis}}"
    },
    {
     "t": "h",
     "x": "Separating raw and cooked"
    },
    {
     "t": "p",
     "x": "Raw meat, fish and poultry are potential sources of food-poisoning bacteria and must be kept apart from cooked or ready-to-eat food. {{fsai}}"
    },
    {
     "t": "p",
     "x": "In a fridge, store raw meat on the bottom shelf so drips cannot fall on ready-to-eat food. {{fsai}}"
    },
    {
     "t": "p",
     "x": "In a cooler, use a separate sealed container for raw meat (our application of the same principle)."
    },
    {
     "t": "table",
     "title": "Cleaning options by water situation",
     "head": [
      "Situation",
      "Hands",
      "Surfaces and utensils"
     ],
     "rows": [
      [
       "Tap works and is safe",
       "Soap and warm water for 20 seconds {{fsis}}",
       "Hot soapy water"
      ],
      [
       "Tap off, bottled or boiled water available",
       "Soap and boiled-then-cooled water (our application of CDC advice) {{cdcwater}}",
       "Wash and rinse with safe water; sanitise as below"
      ],
      [
       "No water",
       "Alcohol-based sanitiser {{fsa}}",
       "Antibacterial wipes or sprays {{fsa}}"
      ]
     ],
     "src": "Sources as cited"
    },
    {
     "t": "p",
     "x": "After flooding, CDC gives 1 cup (240 mL) of unscented household bleach in 5 gallons of clean water for cans and non-food surfaces, and 1 tablespoon in 1 gallon for food-contact surfaces such as countertops and plates. Let items air dry. {{cdcfood}}"
    },
    {
     "t": "example",
     "title": "Worked example: scaling the CDC sanitiser",
     "steps": [
      "5 gallons is about 19 litres. 1 cup (240 mL) in 19 litres is about 12.6 mL per litre (240 / 19).",
      "For a 5-litre basin you would use about 63 mL (5 x 12.6) of unscented household bleach.",
      "Our arithmetic from the CDC ratio; check your bleach label, and never mix bleach with other cleaners."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Sanitiser and wipes do not remove grease and soil. Wipe off visible dirt first, then sanitise."
    },
    {
     "t": "activity",
     "x": "Make a grid-down clean kit: sanitiser, wipes, unscented bleach, a bottle of safe water, soap."
    },
    {
     "t": "check",
     "q": "The tap is off and you have no stored water. What does the FSA suggest for your hands?",
     "o": [
      "Do nothing",
      "Use alcohol-based hand sanitiser",
      "Rinse with floodwater",
      "Use bleach on skin"
     ],
     "a": 1,
     "w": "The FSA says alcohol-based hand sanitiser can be used if the water supply is affected. {{fsa}}"
    },
    {
     "t": "check",
     "q": "Where in the fridge should raw meat be stored?",
     "o": [
      "Top shelf",
      "Bottom shelf",
      "Door",
      "Beside salads"
     ],
     "a": 1,
     "w": "Raw meat goes on the bottom shelf so drips cannot contaminate cooked food. {{fsai}}"
    },
    {
     "t": "take",
     "i": [
      "Replace washing with sanitiser or wipes, not with nothing.",
      "Keep raw below cooked.",
      "Wipe dirt off before you sanitise."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Who is most at risk",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Food poisoning is more likely to be serious for some people."
    },
    {
     "t": "p",
     "x": "The FSA names young children, pregnant women, older people and people with an underlying health condition. {{fsa}}"
    },
    {
     "t": "p",
     "x": "The UK Chief Medical Officers add babies, breastfeeding women and those with weakened immune systems. {{cmo}}"
    },
    {
     "t": "p",
     "x": "For these groups the CMOs say not to eat chilled ready-to-eat food, such as pre-packed sandwiches or salads, pre-cooked food and leftovers, after 4 hours without power, even if it was in the fridge. {{cmo}}"
    },
    {
     "t": "table",
     "title": "Who needs extra care",
     "head": [
      "Group",
      "Extra caution (sources)"
     ],
     "rows": [
      [
       "Babies and young children",
       "Prepare infant formula by boiling water, or use ready-to-use formula {{fsa}}; keep a child under 2 who is not breastfed on at least 1 litre of fluid a day {{cmo}}"
      ],
      [
       "Pregnant and breastfeeding women",
       "Avoid chilled ready-to-eat food after 4 hours without power {{cmo}}; be cautious with deli meats and smoked fish {{fsa}}"
      ],
      [
       "Older people and people with weakened immunity",
       "Make sure food is steaming hot; do not eat expired or spoiled food {{fsa}}"
      ]
     ],
     "src": "{{fsa}} {{cmo}}"
    },
    {
     "t": "p",
     "x": "The CMOs add that people who are severely immunocompromised, and those on medically supervised diets, should not eat raw eggs. {{cmo}}"
    },
    {
     "t": "h",
     "x": "A household risk list"
    },
    {
     "t": "ol",
     "i": [
      "List every person who eats from your stock.",
      "Mark anyone in an at-risk group.",
      "Plan a safe food for them first (shelf-stable or freshly cooked).",
      "Do not share leftovers with them after the 4-hour mark."
     ]
    },
    {
     "t": "example",
     "title": "Worked example: a household risk list (illustrative)",
     "steps": [
      "Household: two adults, a 3-year-old, a grandparent aged 78. At-risk: the child and the grandparent.",
      "Power has been off for 5 hours. Chilled leftovers are past the 4-hour mark: not for the child or grandparent. {{cmo}}",
      "Feed them cooked-fresh or shelf-stable food instead, such as tinned beans heated outdoors or boiled-then-cooled water for drinks."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "If anyone in your home has a medical diet or a weakened immune system, ask their doctor or dietitian about emergency food in advance."
    },
    {
     "t": "activity",
     "x": "Write your own household risk list and one safe meal for each at-risk person."
    },
    {
     "t": "check",
     "q": "A power cut has lasted 6 hours. A packed sandwich in the fridge is for a pregnant woman. What do the CMOs advise?",
     "o": [
      "Eat it; the fridge was shut",
      "Do not eat chilled ready-to-eat food after 4 hours without power",
      "Warm it in the sun",
      "Freeze it"
     ],
     "a": 1,
     "w": "The CMOs advise at-risk groups not to eat ready-to-eat chilled food after 4 hours without power. {{cmo}}"
    },
    {
     "t": "check",
     "q": "Which groups are named as more likely to become seriously unwell?",
     "o": [
      "Only elderly people",
      "Babies, young children, pregnant and breastfeeding women, older people, weakened immunity",
      "Healthy adults",
      "Athletes"
     ],
     "a": 1,
     "w": "That is the CMO list. {{cmo}}"
    },
    {
     "t": "take",
     "i": [
      "At-risk groups need stricter limits.",
      "After 4 hours, chilled ready-to-eat food is not for them.",
      "Plan their safe food first."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Business lens: registering and controlling hazards in a home kitchen",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "If you supply food regularly to the public from home, you are a food business under food law, even if you do not think of yourself as one. {{gov-start}} You must register with your local authority at least 28 days before you start trading. {{gov-start}} Officers then arrange to visit your home to inspect whether your food areas and food safety procedures are suitable. {{gov-start}}"
    },
    {
     "t": "p",
     "x": "You also inform HMRC that you are self-employed. {{fsa-start-home}} You should check you have permission from your mortgage provider or landlord, your local planning authority and your insurer, and look into tax allowances and business rates. {{fsa-start-home}} Food businesses must have food safety management procedures in place. {{fsa-start-home}} In England and Wales the FSA publishes Safer food, better business packs for small businesses, and Northern Ireland has the Safe Catering pack. {{gov-start}}"
    },
    {
     "t": "p",
     "x": "Three numbers anchor the procedures. The standard cooking advice is a core temperature of 70 degrees Celsius for 2 minutes. {{gov-cook}} Chilled food must be kept at 8 degrees or below, which is a legal requirement in England, Wales and Northern Ireland, and a fridge set at 5 degrees or below is recommended. {{gov-chill}} A commercial freezer at minus 18 to minus 21 degrees delays deterioration and stops normal bacterial growth, but it does not kill bacteria. {{fsa-chill-biz}}"
    },
    {
     "t": "table",
     "title": "A first hazard-control table for one menu item (illustrative; Chicken curry from the Fallout menu)",
     "head": [
      "Step",
      "Hazard",
      "Control",
      "Limit or check",
      "If it fails"
     ],
     "rows": [
      [
       "Receive raw chicken",
       "Bacteria on raw meat",
       "Keep chilled and apart from ready-to-eat food {{gov-store}}",
       "8 degrees or below; fridge at 5 or below {{gov-chill}}",
       "Reject or discard"
      ],
      [
       "Cook",
       "Bacteria survive",
       "Probe the centre with a clean thermometer {{gov-cook}}",
       "70 degrees for 2 minutes {{gov-cook}}",
       "Keep cooking, re-check"
      ],
      [
       "Cool and portion",
       "Growth while warm",
       "Divide into portions, cool cooked dishes before freezing {{gov-chill}}",
       "Into the freezer promptly",
       "Discard if left out too long"
      ],
      [
       "Freeze and store",
       "Growth if freezer fails",
       "Label and store at freezer temperature {{fsa-chill-biz}}",
       "Minus 18 degrees (the owner's stated storage temperature) {{fallout}}",
       "Move stock, call for help"
      ],
      [
       "Pack and dispatch",
       "Thawing in transit",
       "Keep frozen food at the right temperature in transport {{gov-store}}",
       "Check the pack is hard frozen before it leaves",
       "Do not dispatch"
      ]
     ],
     "src": "Temperatures from FSA guidance; the menu item is from the owner's documents {{fallout}}; the table layout is our own illustration."
    },
    {
     "t": "callout",
     "k": "note",
     "x": "This is education, not legal advice. Rules differ in Scotland (Food Standards Scotland) and in Northern Ireland, and your local authority can tell you what applies to your premises."
    },
    {
     "t": "example",
     "title": "Worked example: who eats your food (illustrative, our reading)",
     "steps": [
      "The owner's plan names preppers, health-conscious people, busy professionals, outdoor enthusiasts and families as customers. {{fallout}}",
      "Families can include young children, and any customer may be pregnant, elderly or have a health condition. This module's lesson on who is most at risk applies to them, because you cook for people you cannot see.",
      "So your cooking limit is not negotiable, your cooling and freezing steps are written down, and your labels carry the allergen detail covered later in this module's business lessons."
     ]
    },
    {
     "t": "activity",
     "x": "Write the hazard-control table for a second menu item, such as Jollof rice or Bolognese. Use the same five steps, and put a source against each limit."
    },
    {
     "t": "check",
     "q": "How long before trading must a new food business register with its local authority?",
     "o": [
      "7 days",
      "14 days",
      "28 days",
      "3 months"
     ],
     "a": 2,
     "w": "You must register at least 28 days before you begin trading. {{gov-start}}"
    },
    {
     "t": "check",
     "q": "What does the FSA give as the standard cooking advice?",
     "o": [
      "60 degrees for 10 seconds",
      "A core temperature of 70 degrees for 2 minutes",
      "100 degrees for 1 minute",
      "Until the colour changes"
     ],
     "a": 1,
     "w": "Standard advice is 70 degrees at the core for 2 minutes. {{gov-cook}}"
    },
    {
     "t": "take",
     "i": [
      "A regular home food supplier must register, 28 days before trading. {{gov-start}}",
      "Write your procedures down: limits, checks and what to do when a limit fails.",
      "Freezing slows bacteria but does not kill them. {{fsa-chill-biz}}"
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "The lecturer's method: Louis Pasteur",
   "min": 26,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read his 1864 Sorbonne address in an English translation, in full. It is Pasteur's own account, delivered to a public audience, so the record is rich for these experiments. {{pasteur-1864}} The Institut Pasteur and Britannica pages are secondary summaries. {{inst-pasteur}} {{brit-pasteur}}"
    },
    {
     "t": "p",
     "x": "The translation uses the old phrase Arctic Sea for what the French calls the Mer de Glace glacier on Mont Blanc. We keep his figures and note this. {{pasteur-1864}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Treat it as a question of fact. He says the question of spontaneous generation is a matter of fact, to be addressed without prejudice, and that he would declare for spontaneous generation if experiment attested it. {{pasteur-1864}}",
      "Show that dust carries living things. He draws air through a glass tube with a wad of cotton in one end, which keeps nearly all the dust, washes the cotton in a little water, and puts the droplets on a slide. Under the microscope, among soot and fragments of cloth, are organised corpuscles that cannot be told apart from mould seeds. {{pasteur-1864}}",
      "Test that the dust, not the air, is the cause. He burns air-borne particles collected on an asbestos pad in a flame and seeds a vial with them. The infusion stays intact, as if never seeded. {{pasteur-1864}}",
      "Control the heat and the path. He boils an infusion in a flask with a long neck bent and stretched over a torch, left open to the air. It stays unaltered for months and, at the time of the address, years, while the same infusion in a straight-necked flask is altered in days. {{pasteur-1864}}",
      "Explain the difference. Everything in the air except dust enters the curved flask easily. The dust falls on the curved neck. If the flask is shaken, so that air enters fast and brings the liquid into contact with dust, the infusion is altered two or three days later. {{pasteur-1864}}",
      "Find the hidden source of error. He shows that a vat of mercury, used in an opponent's experiment, carries dust into the flask whenever anything is dipped through it. The experiment was beyond reproach for the factors the author had watched, but not for this one. {{pasteur-1864}}"
     ]
    },
    {
     "t": "p",
     "x": "He also notes that the dust in a room can carry sickness or death, in the form of typhus, cholera, yellow fever and other fluxes. {{pasteur-1864}}"
    },
    {
     "t": "p",
     "x": "The Institut Pasteur says his 1862 conclusions were that airborne dust contains microorganisms that develop and multiply, and that microbes are found in water, in air, on objects and on the skin. {{inst-pasteur}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Pasteur's experiments are about liquids held clear of dust. A real kitchen is not a laboratory, and a rule such as keep it covered does not make food safe by itself. Use his findings for where contamination comes from and how to block it, and use your course's tested temperatures and times for the rest. {{pasteur-1864}}"
    },
    {
     "t": "table",
     "title": "Pasteur's controls and your kitchen controls (the right column is our adaptation)",
     "head": [
      "Control in the experiment",
      "What it showed",
      "In a kitchen with no running water"
     ],
     "rows": [
      [
       "Cotton plug on the air tube",
       "Dust carries organised corpuscles",
       "A cloth or lid over food and water, and clean hands before touching either"
      ],
      [
       "Burning the collected dust",
       "Killing the corpuscles stopped the effect",
       "Heat to a safe temperature, not only warm"
      ],
      [
       "Boiling the infusion",
       "Heat destroys germs on the liquid and the flask walls",
       "Heat food through, using the temperatures in this course"
      ],
      [
       "Curved neck over open air",
       "Dust falls out before it reaches the liquid",
       "Keep food covered, do not stir up dust, do not shake out cloths near it"
      ],
      [
       "The mercury vat",
       "A hidden tool can carry dust in",
       "Clean tools, boards and cloths, not only the food"
      ]
     ],
     "src": "The first two columns follow the address. The last column is our adaptation. {{pasteur-1864}}"
    },
    {
     "t": "h",
     "x": "Worked example: reading his flask counts (his figures, our arithmetic)"
    },
    {
     "t": "example",
     "title": "How exposed air changes the odds",
     "steps": [
      "He opened sealed vials of a clear, perishable infusion in different places and reseal them. At the glacier, 19 of 20 stayed intact. In the Jura mountains, 15 of 20. At the foot of the Jura, 12 of 20. {{pasteur-1864}}",
      "Convert to the share altered: 1 of 20 is 5 percent, 5 of 20 is 25 percent, and 8 of 20 is 40 percent.",
      "The altered share at the lowest place is 8 times that at the glacier (40 ÷ 5). Where the air carries more dust, more flasks spoil. {{pasteur-1864}}",
      "One night in a room at the inn gave 10 altered of 30, which is 33 percent. {{pasteur-1864}}",
      "The lesson for a kitchen is not these numbers. It is that spoilage is a matter of how much dust, and so how many germs, reach the food, so the fewer routes in, the fewer losses."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a clean-handling routine for a dry tap"
    },
    {
     "t": "ol",
     "i": [
      "Assume everything you touch may carry microbes, including hands, boards and cloths.",
      "Set up a hand-cleaning step before food: sanitiser, or a small measured amount of safe water and soap, and dry on a clean cloth.",
      "Cover food and water between uses. Move cloths and bedding away from the food area.",
      "Use one clean board and knife for ready-to-eat food and another for raw food.",
      "Heat food to the temperature your course gives, and write it down."
     ]
    },
    {
     "t": "activity",
     "x": "Write a clean-handling routine for your kitchen. Mark each step with which of Pasteur's routes it blocks: dust, hands, tools or heat."
    },
    {
     "t": "check",
     "q": "What did Pasteur find in the cotton wad after dust was drawn through it?",
     "o": [
      "Only soot",
      "Organised corpuscles like mould seeds among the soot and fibres",
      "Water",
      "Nothing"
     ],
     "a": 1,
     "w": "Among the amorphous objects he found organised corpuscles that looked like mould seeds. {{pasteur-1864}}"
    },
    {
     "t": "check",
     "q": "Why did the long-necked open flask stay clear?",
     "o": [
      "It was sealed",
      "Dust fell on the curved neck before reaching the broth",
      "It had no air",
      "It was frozen"
     ],
     "a": 1,
     "w": "The dust falls on the curved neck before reaching the liquid. {{pasteur-1864}}"
    },
    {
     "t": "check",
     "q": "What was the hidden source of error in Pouchet's experiment?",
     "o": [
      "The hay",
      "The vat of mercury, which carried dust into the flask",
      "The water",
      "The oxygen"
     ],
     "a": 1,
     "w": "He showed that the mercury vat introduces dust. {{pasteur-1864}}"
    },
    {
     "t": "take",
     "i": [
      "Contamination arrives on dust, hands and tools. {{pasteur-1864}}",
      "Heat and a covered path block it. {{pasteur-1864}}",
      "Look for the hidden route, as he did with the mercury vat. {{pasteur-1864}}"
     ]
    }
   ]
  }
 ]
};
