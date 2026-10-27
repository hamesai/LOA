/* Wasteland Kitchen: Food Safety When the Grid Goes Down (module 4). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["grid-down-food-4"] = {
 "intro": "Cooking turns risky food into safe food, but only if you can do it safely. This module covers outdoor heat sources, carbon monoxide, cooking through, thawing and the leftover rules. Business lens: A frozen-meal business cooks once and relies on the customer to reheat. This module's cooking lessons become two tests: your own cook to standard, and the customer's reheat. Lecturer lens: Count Rumford fed 1,200 people a day at the Munich House of Industry on one costed recipe and wrote down every price. His essay shows that for a well-run pot the fuel was the smallest line on the bill, and that a covered boiler can finish a soup on stored heat.",
 "outcomes": [
  "List the cooking options and where each can be used.",
  "Explain the carbon monoxide risk and what to do.",
  "Check that food is cooked through and thawed safely.",
  "Apply the two-hour rule and the sick-cook rule.",
  "Business lens: Test that your printed reheating instructions bring a frozen meal to steaming hot throughout, and write down the result.",
  "Lecturer's method: Cost a bulk meal in ingredients, fuel and labour, cook it with controlled heat, and use stored heat to cut fuel use when fuel is scarce."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "What you can cook on, and where",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Cooking is the key that turns risky food into safe food, if you can do it."
    },
    {
     "t": "p",
     "x": "Electric and induction cookers stop working in a power cut, but gas cookers may carry on. {{fsa}}"
    },
    {
     "t": "p",
     "x": "You can also heat water and cook with a camping stove, a barbecue or a bottled-gas stove. {{fsa}}"
    },
    {
     "t": "p",
     "x": "The UK CMOs add a campfire outdoors, if you can do it safely. {{cmo}}"
    },
    {
     "t": "p",
     "x": "The FSA warns that most of these appliances are designed for outdoor use only, so check the manufacturer's instructions. {{fsa}}"
    },
    {
     "t": "table",
     "title": "Cooking options in a power cut",
     "head": [
      "Option",
      "Works without mains power?",
      "Notes"
     ],
     "rows": [
      [
       "Electric or induction hob/oven",
       "No {{fsa}}",
       "Plan other methods"
      ],
      [
       "Gas hob (mains gas)",
       "May continue {{fsa}}",
       "In a national outage gas may also be lost {{cmo}}"
      ],
      [
       "Camping stove, barbecue, bottled gas stove",
       "Yes {{fsa}}",
       "Outdoors only unless the maker says otherwise {{fsa}}"
      ],
      [
       "Campfire",
       "Yes {{cmo}}",
       "Outdoors, if you can do it safely {{cmo}}"
      ]
     ],
     "src": "Sources as cited"
    },
    {
     "t": "p",
     "x": "These methods can take longer than usual, so check that food is steaming hot and cooked through. {{fsa}}"
    },
    {
     "t": "h",
     "x": "Foods that need no cooking"
    },
    {
     "t": "p",
     "x": "The CMOs list tinned vegetables, tinned fish, beans, pasta, dried cereals such as oats and pouched pre-cooked rice and grains as foods usually cooked that can be eaten uncooked and last beyond 7 days. {{cmo}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Eating uncooked pasta or dried beans is advice from the UK CMO script for the national outage scenario. Read the pack and follow your local authority."
    },
    {
     "t": "activity",
     "x": "Make a list of every heat source you own and where you could use it outdoors."
    },
    {
     "t": "check",
     "q": "Which cooker will certainly stop in a power cut?",
     "o": [
      "Gas camping stove",
      "Barbecue",
      "Induction hob",
      "Campfire"
     ],
     "a": 2,
     "w": "Electric and induction cookers will not work in a power cut. {{fsa}}"
    },
    {
     "t": "check",
     "q": "Why check that food is steaming hot when using a camping stove?",
     "o": [
      "It is faster",
      "Cooking can take longer than usual",
      "The stove adds flavour",
      "It uses less fuel"
     ],
     "a": 1,
     "w": "Camping stoves and barbecues can take longer, so you must check food is cooked through. {{fsa}}"
    },
    {
     "t": "take",
     "i": [
      "Electric cookers fail; gas may not.",
      "Stoves and barbecues are for outdoors.",
      "Some foods need no cooking at all."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Carbon monoxide: the silent hazard",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "The commonest deadly mistake in a blackout is cooking indoors on a stove meant for outside."
    },
    {
     "t": "p",
     "x": "The UK CMOs say never to use camping stoves or barbecues indoors, because there is a very high risk of carbon monoxide poisoning, which can kill. {{cmo}}"
    },
    {
     "t": "p",
     "x": "Carbon monoxide is a colourless, tasteless, odourless gas produced when fuel burns with too little oxygen. {{ukhsaco}}"
    },
    {
     "t": "p",
     "x": "Barbecues and portable generators used inside homes, caravans and tents are named as sources. {{ukhsaco}}"
    },
    {
     "t": "fig",
     "id": "grid-down-food-stove",
     "title": "Cook outdoors",
     "cap": "Stoves, barbecues and fires stay outside."
    },
    {
     "t": "h",
     "x": "Know the signs"
    },
    {
     "t": "p",
     "x": "Headaches, tiredness, difficulty thinking and feeling sick are common symptoms, and they look like food poisoning and flu. {{ukhsaco}}"
    },
    {
     "t": "p",
     "x": "That makes mistakes in a blackout easy: you may blame the food. {{ukhsaco}}"
    },
    {
     "t": "table",
     "title": "If carbon monoxide is suspected",
     "head": [
      "Step",
      "Action (UK Health Security Agency)"
     ],
     "rows": [
      [
       "1",
       "Stop using all appliances and leave the property immediately {{ukhsaco}}"
      ],
      [
       "2",
       "Call the National Gas Emergency Service on 0800 111 999 or the HSE gas line on 0800 300 363 {{ukhsaco}}"
      ],
      [
       "3",
       "Do not go back in; get immediate medical help {{ukhsaco}}"
      ],
      [
       "4",
       "Feel unwell? Call NHS 111, your GP, or 999 in an emergency {{ukhsaco}}"
      ]
     ],
     "src": "{{ukhsaco}}. Numbers are for the UK; check your own country's"
    },
    {
     "t": "p",
     "x": "Children, pregnant women, older people and people with heart disease, angina, asthma or anaemia are more at risk. {{ukhsaco}}"
    },
    {
     "t": "p",
     "x": "A carbon monoxide alarm meeting BS Kitemark or EN 50291 helps, but it is not a substitute for servicing appliances, and it may not sound at low levels. {{ukhsaco}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Do not rely on opening a window as a fix for cooking indoors on an outdoor stove. Cook outside, or in a shelter that the manufacturer says is safe (our caution, consistent with the sources)."
    },
    {
     "t": "activity",
     "x": "Test your carbon monoxide alarm, and if you have none, add one to your list."
    },
    {
     "t": "check",
     "q": "Camping stove cooking in a power cut should be done...",
     "o": [
      "In the kitchen",
      "In the garage with the door shut",
      "Outdoors",
      "In a tent"
     ],
     "a": 2,
     "w": "Never use camping stoves or barbecues indoors. {{cmo}} {{ukhsaco}}"
    },
    {
     "t": "check",
     "q": "Early carbon monoxide poisoning can be mistaken for...",
     "o": [
      "A cold only",
      "Food poisoning or flu",
      "Hay fever",
      "Nothing"
     ],
     "a": 1,
     "w": "UKHSA says symptoms can be similar to food poisoning and flu. {{ukhsaco}}"
    },
    {
     "t": "take",
     "i": [
      "Never cook indoors on stoves or barbecues.",
      "Carbon monoxide has no smell.",
      "Leave, call, get medical help."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Cooking food through",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Heat kills most food-poisoning bacteria, but only if it reaches the middle of the food."
    },
    {
     "t": "p",
     "x": "The WHO says to cook meat, poultry, eggs and seafood thoroughly, and to bring soups and stews to boiling so they reach 70 C. {{who5keys}}"
    },
    {
     "t": "p",
     "x": "It says meat and poultry juices should run clear, not pink, and to use a thermometer ideally. {{who5keys}}"
    },
    {
     "t": "p",
     "x": "The FSA says food should be steaming hot and cooked through. {{fsa}}"
    },
    {
     "t": "h",
     "x": "Thawing and cooking from frozen"
    },
    {
     "t": "ul",
     "i": [
      "Never thaw meat or poultry at room temperature or in an oven; thaw in the fridge, in cold water in a watertight bag, or in a microwave followed by immediate cooking. {{nchfp}}",
      "You can cook meat and fish from frozen if you allow more time; large frozen roasts can take about 1.5 times as long. {{nchfp}}",
      "In the fridge, defrost overnight; allow 24 hours for every 2 kg for a large item. {{fsai}}"
     ]
    },
    {
     "t": "h",
     "x": "Reheating"
    },
    {
     "t": "p",
     "x": "Reheat cooked food thoroughly, until steaming hot or boiling. {{who5keys}}"
    },
    {
     "t": "example",
     "title": "Worked example: a grid-down stew check (illustrative)",
     "steps": [
      "Frozen stew from a freezer that held its cold. You warm it outdoors on a camping stove.",
      "Bring the whole pot to a rolling boil so it reaches 70 C (WHO). Stir so the centre is not cold.",
      "Check steam rises all over and, if you have one, the thermometer reads 70 C or more in the centre. {{who5keys}}"
     ]
    },
    {
     "t": "table",
     "title": "Cooked-through checks",
     "head": [
      "Check",
      "Source"
     ],
     "rows": [
      [
       "Steaming hot all the way through",
       "{{fsa}}"
      ],
      [
       "Soups and stews boiled to 70 C",
       "{{who5keys}}"
      ],
      [
       "Meat and poultry juices clear, not pink",
       "{{who5keys}}"
      ],
      [
       "Reheat cooked food thoroughly",
       "{{who5keys}}"
      ]
     ],
     "src": "Sources as cited"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Do not try to cook rotting or spoiled food safe. Throw it away immediately in an outside bin. {{cmo}}"
    },
    {
     "t": "activity",
     "x": "Practise a power-cut cooking drill: heat a pot of water to a rolling boil outdoors and time it."
    },
    {
     "t": "check",
     "q": "A soup needs to reach what temperature according to the WHO?",
     "o": [
      "50 C",
      "60 C",
      "70 C",
      "90 C"
     ],
     "a": 2,
     "w": "The WHO says to bring stews and soups to boiling so they reach 70 C. {{who5keys}}"
    },
    {
     "t": "check",
     "q": "What is the safe way to thaw chicken?",
     "o": [
      "On the counter for the day",
      "In the fridge, cold water or microwave then cook at once",
      "Near the stove",
      "In a warm oven"
     ],
     "a": 1,
     "w": "Never thaw at room temperature or in an oven. {{nchfp}}"
    },
    {
     "t": "take",
     "i": [
      "Heat to 70 C or steaming hot all through.",
      "Thaw in cold conditions only.",
      "Cooking cannot rescue rotten food."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Leftovers, sickness and cooking for others",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Cooked food left out is a risk even after it has been cooked well."
    },
    {
     "t": "p",
     "x": "The WHO says not to leave cooked food at room temperature for more than 2 hours and to keep hot food above 60 C until served. {{who5keys}}"
    },
    {
     "t": "p",
     "x": "Without a fridge, the safest plan is to cook only what you will eat (our advice)."
    },
    {
     "t": "p",
     "x": "If you have a cooler with ice or cold weather, small leftovers can be kept cold, but treat them as 4-hour food for at-risk people. {{cmo}} {{fsa}}"
    },
    {
     "t": "h",
     "x": "When someone is ill"
    },
    {
     "t": "p",
     "x": "If you are vomiting or have diarrhoea, avoid preparing food for other people to reduce the risk of infecting them. {{cmo}}"
    },
    {
     "t": "p",
     "x": "Wash or sanitise hands before touching food, and use wipes on surfaces and utensils if you can. {{fsa}} {{cmo}}"
    },
    {
     "t": "example",
     "title": "Worked example: the 2-hour rule (illustrative)",
     "steps": [
      "You finish cooking dinner at 18:30 and leave it on the table.",
      "WHO limit at room temperature: 2 hours. 18:30 + 2 hours = 20:30.",
      "By 20:30 the food should be eaten or cooled and chilled, or discarded. For a child or older person, be stricter. {{who5keys}}"
     ]
    },
    {
     "t": "table",
     "title": "Leftover rules (summary)",
     "head": [
      "Rule",
      "Source"
     ],
     "rows": [
      [
       "No more than 2 hours at room temperature",
       "{{who5keys}}"
      ],
      [
       "Hot food above 60 C until served",
       "{{who5keys}}"
      ],
      [
       "At-risk groups: no chilled leftovers after 4 hours without power",
       "{{cmo}}"
      ],
      [
       "Do not prepare food for others while vomiting or with diarrhoea",
       "{{cmo}}"
      ]
     ],
     "src": "Sources as cited"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Cook in small batches. A grid-down kitchen has less margin for left-overs than a normal one (our advice)."
    },
    {
     "t": "activity",
     "x": "Write your own two-hour reminder: a timer on a phone or a kitchen clock note when cooked food goes on the table."
    },
    {
     "t": "check",
     "q": "Dinner is served at 19:10 and left on the table. By when should it be eaten or chilled under the WHO 2-hour rule?",
     "o": [
      "20:10",
      "21:10",
      "22:10",
      "19:40"
     ],
     "a": 1,
     "w": "19:10 + 2 hours = 21:10. {{who5keys}}"
    },
    {
     "t": "check",
     "q": "You have diarrhoea. What should you do about preparing the family meal?",
     "o": [
      "Cook as usual",
      "Avoid preparing food for others",
      "Cook but wear gloves only",
      "Cook outdoors"
     ],
     "a": 1,
     "w": "The CMOs advise avoiding preparing food for others when vomiting or with diarrhoea. {{cmo}}"
    },
    {
     "t": "take",
     "i": [
      "Two hours on the table, then eat or chill.",
      "Cook only what you will eat.",
      "Ill cooks hand over the pot."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Business lens: cooking to standard and testing customer reheating",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "The standard advice is to cook food to a core temperature of 70 degrees for 2 minutes. {{gov-cook}} Other safe time and temperature pairs include 75 degrees for 30 seconds and 80 degrees for 6 seconds. {{gov-cook}} Check with a clean thermometer probe in the centre. {{gov-cook}}"
    },
    {
     "t": "p",
     "x": "Hot food not served straight away must be kept at or above 63 degrees, and can be kept below 63 for up to 2 hours before it must be cooled quickly to 8 degrees or below, or thrown away. {{gov-cook}} Reheating means cooking again, not just warming up. Reheat until steaming hot all the way through, and only once. {{gov-cook}}"
    },
    {
     "t": "p",
     "x": "The owner's instructions for meals are microwave 3 to 5 minutes, stirring halfway, oven at 180 degrees for 15 to 20 minutes, or stovetop for sauced meals 8 to 10 minutes on medium heat. {{fallout}} For the cheese pizza they give oven at 180 degrees for 10 to 12 minutes, air fryer 6 to 8 minutes, and microwave 2 to 3 minutes with lower texture quality. {{fallout}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Microwaves and ovens vary, and a 350 to 400 gram frozen block can be hot at the edge and cold in the middle. Do not print an instruction until you have tested it. {{fallout}}"
    },
    {
     "t": "table",
     "title": "A reheating test record (illustrative readings, not real data)",
     "head": [
      "Meal and method",
      "Start",
      "Time",
      "Core reading",
      "Result"
     ],
     "rows": [
      [
       "Chicken curry, microwave, stir at half time",
       "Frozen",
       "4 min",
       "72 degrees",
       "Pass: above 70 in the centre"
      ],
      [
       "Chicken curry, microwave, no stir",
       "Frozen",
       "4 min",
       "58 degrees",
       "Fail: cold spot, add stir step"
      ],
      [
       "Mac and cheese, oven 180 degrees",
       "Frozen",
       "18 min",
       "74 degrees",
       "Pass"
      ]
     ],
     "src": "Readings are invented to show the layout. Use your own thermometer and keep the record."
    },
    {
     "t": "example",
     "title": "Worked example: how you would test (illustrative, our reading)",
     "steps": [
      "Take a meal straight from the freezer, as the customer will.",
      "Follow your printed method exactly, including stirring.",
      "Insert a clean probe in the centre and read it. Check more than one meal, because ovens and microwaves vary.",
      "If any reading is below your limit, lengthen the time or change the method, then test again.",
      "Add a line to the label: reheat until steaming hot throughout, and reheat only once. {{gov-cook}}"
     ]
    },
    {
     "t": "activity",
     "x": "Test one of your own meals three times by your printed method. Record start, time, core reading and result."
    },
    {
     "t": "check",
     "q": "What does the FSA say about reheating food?",
     "o": [
      "Warm it a little",
      "Reheat until steaming hot throughout, and only once",
      "Reheat as often as needed",
      "Reheat to 40 degrees"
     ],
     "a": 1,
     "w": "Reheat until steaming hot all the way through, and only once. {{gov-cook}}"
    },
    {
     "t": "check",
     "q": "Why test your printed reheating times?",
     "o": [
      "To make them longer",
      "Frozen blocks can have cold spots, and appliances vary",
      "Customers like testing",
      "It is a legal formality only"
     ],
     "a": 1,
     "w": "A thick frozen meal can be cold in the centre, so test before you print. This is our reasoning."
    },
    {
     "t": "take",
     "i": [
      "Cook to 70 degrees for 2 minutes at the core, or an equal time and temperature. {{gov-cook}}",
      "Reheat once, until steaming hot. {{gov-cook}}",
      "Test printed instructions and keep the records."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "The lecturer's method: Count Rumford (Benjamin Thompson)",
   "min": 26,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read Essay III of his Essays, Political, Economical, and Philosophical (Volume 1), including the soup recipe, the method and the costed table. This is Rumford's own account, so the record is rich for these claims. {{rumford-essays}}"
    },
    {
     "t": "p",
     "x": "The fuel-saving principles about covers and regulating the draught come from a Victorian summary of his work, which we read in an earlier pass. We did not read his fuel essay, which is in a later volume. {{rumford-psm}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Start from the need and the price. He writes that necessity is the mother of invention, and says the high price of corn had turned attention to the science of nutrition. {{rumford-essays}}",
      "Find the cheapest nourishing food by trial. After experiments he found the cheapest, most savoury and most nourishing food to be a soup of pearl barley, peas, potatoes, cuttings of fine wheaten bread, vinegar, salt and water in set proportions. {{rumford-essays}}",
      "Cook in a set order. The water and barley boil first, the peas are added and the boiling continued over a gentle fire for about two hours, the potatoes are added for about one hour more, the soup is stirred to a uniform mass, then vinegar and salt, and last the bread cuttings at the moment of serving. {{rumford-essays}}",
      "Do not overcook the late additions. The soup should never be suffered to boil, or even stand long, after the bread is put in, and the bread is best put into the serving tubs. {{rumford-essays}}",
      "Cost every line. He lists weights and costs of each ingredient, the fuel, the cooks' wages and food, the servants and the repairs, and gives a total daily expense for feeding 1,200 people. {{rumford-essays}}",
      "Use stored heat. He says the soup is improved if a small fire is made just enough to boil the barley and water once, the ash-hole register and the chimney damper are closed, and a thick blanket is thrown over the boiler cover so the contents stay hot until the next morning. {{rumford-essays}}"
     ]
    },
    {
     "t": "p",
     "x": "A Victorian summary of his principles says every boiler and stew-pan should have a cover to confine the heat, and each fireplace should let the cook regulate the air, so that the rate of burning can be controlled. {{rumford-psm}}"
    },
    {
     "t": "p",
     "x": "Wikipedia says the soup used pearl barley, dried peas, potatoes and sour beer, slowly boiled until thick, and was a cheap, filling ration cooked in bulk. {{wiki-rsoup}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Rumford's kitchen was a purpose-built set of boilers in a brick kitchen, fed with dry pine wood. A camp stove or a fire in a grate is different, and a boiler wrapped in a blanket is not a safe way to hold food at a warm temperature for many hours. For food safety, use your course's rules on keeping food hot or cooling it, and use his hot-hold idea only with the time and temperature checks this course gives. {{rumford-essays}}"
    },
    {
     "t": "table",
     "title": "Rumford's costed day for 1,200 portions (his table; the right column is our adaptation)",
     "head": [
      "Line",
      "Rumford's figure",
      "What it tells you"
     ],
     "rows": [
      [
       "Ingredients",
       "1,485 lb 10 oz in all, at £1 11s 8 13/22d",
       "Most of the cost is the food, including 1,077 lb of water"
      ],
      [
       "Fuel",
       "88 lb of dry pine wood at 2¼d",
       "Fuel was about half of one percent of the daily cost"
      ],
      [
       "Cooks and servants",
       "Three cook-maids and two men, with food and repairs",
       "Labour mattered more than fuel"
      ],
      [
       "Total",
       "£1 15s 2¼d a day for 1,200 portions",
       "A trifle over a third of a penny a portion"
      ],
      [
       "Portion",
       "About 20 ounces",
       "The ration weighed a good deal because it was mostly water"
      ]
     ],
     "src": "The middle column is Rumford's own table. The last column is our reading and arithmetic. {{rumford-essays}}"
    },
    {
     "t": "h",
     "x": "Worked example: checking his per-portion cost and fuel share (his figures, our arithmetic)"
    },
    {
     "t": "example",
     "title": "Is fuel the cost to worry about?",
     "steps": [
      "£1 15s 2¼d is 240 + 180 + 2.25 = 422.25 pence, as £1 is 240 pence and 1s is 12 pence. {{rumford-essays}}",
      "Divided by 1,200 portions, that is 422.25 ÷ 1,200 = 0.352 pence, a trifle more than a third of a penny, as he says. {{rumford-essays}}",
      "The fuel, 2¼d, is 2.25 ÷ 422.25 = 0.53 percent of the day's cost. In weight, 88 lb of wood to 1,485 lb 10 oz of soup is 5.9 percent. {{rumford-essays}}",
      "So in his kitchen the money went into food and labour, and a good pot made the fuel line small. In your kitchen the fuel is scarce, so it matters more, but his lesson is to measure it rather than assume.",
      "Do the same for one pot: write the cost or weight of ingredients, fuel and your time for one meal, and see which line is largest."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a one-pot, low-fuel plan"
    },
    {
     "t": "ol",
     "i": [
      "List what you must cook today and how many people you feed.",
      "Choose one lidded pot. Bring it to the boil, then lower the heat and keep it covered.",
      "Order the ingredients by cooking time, as he did: slow items first, quick items last, delicate items at the end.",
      "If your course allows it, test a stored-heat finish with a well-insulated pot and check the food temperature with a thermometer before you eat or hold it.",
      "Weigh the fuel before and after and cost the meal in ingredients, fuel and time."
     ]
    },
    {
     "t": "activity",
     "x": "Cost one meal as Rumford did: ingredients, fuel and labour. Say which line is largest and what you would change."
    },
    {
     "t": "check",
     "q": "What was Rumford's soup made of?",
     "o": [
      "Beef and wine",
      "Pearl barley, peas, potatoes, bread cuttings, vinegar, salt and water",
      "Rice only",
      "Fish and cream"
     ],
     "a": 1,
     "w": "He lists pearl barley, peas, potatoes, bread cuttings, vinegar, salt and water. {{rumford-essays}}"
    },
    {
     "t": "check",
     "q": "When did he add the bread?",
     "o": [
      "First",
      "At the moment of serving, or in the serving tubs",
      "After two hours",
      "Never"
     ],
     "a": 1,
     "w": "He adds the bread last, at the moment of serving. {{rumford-essays}}"
    },
    {
     "t": "check",
     "q": "What share of the daily cost was fuel, using his figures?",
     "o": [
      "About half",
      "About 10 percent",
      "About half of one percent",
      "More than labour"
     ],
     "a": 2,
     "w": "2¼d out of 422¼d is about 0.5 percent. {{rumford-essays}}"
    },
    {
     "t": "take",
     "i": [
      "Cost every line before you decide what to save. {{rumford-essays}}",
      "Cover the pot and control the heat. {{rumford-psm}}",
      "Use stored heat only with food-safety checks."
     ]
    }
   ]
  }
 ]
};
