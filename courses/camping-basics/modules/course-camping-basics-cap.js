/* Camping fundamentals (UK and Ireland) (module cap). Block types and rules: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["camping-basics-cap"] = {
 "intro": "The capstone joins every module in one deliverable: a written plan for a real first overnight camp, a packed kit, and a short review after you return. The plan must show that you know where you may camp, how you will stay warm and dry, how you will cook and drink safely, how you will find your way, and what you will do if something goes wrong. Lecturer lens: Ernest Shackleton planned a great expedition in months, took local advice, and then led his crew home when the plan failed. His record is a model for a plan with margins and a review.",
 "outcomes": [
  "Produce a one-night camping plan that passes the rubric.",
  "Pack and test a kit from a checklist you built.",
  "Run the trip, log what happened and write a review.",
  "Lecturer's method: Plan a first camp with margins, roles and a turn-back rule, then review what went to plan and what did not."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "The brief and the kit",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Brief: plan and, if you can, run a one-night camp on a serviced site in the UK or Ireland. The deliverable is a plan of two to three pages, a kit checklist, a trip card and, after the trip, a one-page review. Use your own words and cite the rules you apply."
    },
    {
     "t": "table",
     "title": "Kit starting point (from the sources; add your own)",
     "head": [
      "Group",
      "Items",
      "Source"
     ],
     "rows": [
      [
       "Shelter",
       "Tent with fly, footprint, pegs, spare cord and pegs, instructions. {{rei-setup}}",
       "{{rei-setup}}"
      ],
      [
       "Sleep",
       "Bag with a suitable rating, pad with a suitable R-value, warm hat, dry sleep clothes. {{rei-bag}} {{rei-pad}} {{rei-sleep}}",
       "{{rei-bag}} {{rei-pad}} {{rei-sleep}}"
      ],
      [
       "Light",
       "Head torch (a lantern is a bonus). {{rei-beg}} {{rei-sleep}}",
       "{{rei-beg}}"
      ],
      [
       "Cook and drink",
       "Stove, fuel, lighter, pots, plates, scrubber, soap, towel, tubs; water treatment. {{rei-beg}} {{cdc}}",
       "{{rei-beg}} {{cdc}}"
      ],
      [
       "Food",
       "Cool box with ice packs, separate containers for raw and ready-to-eat. {{fsa}}",
       "{{fsa}}"
      ],
      [
       "Clothes",
       "Avoid cotton; warm coat, hat and gloves, sturdy shoes, waterproofs. {{rei-beg}}",
       "{{rei-beg}}"
      ],
      [
       "Safety",
       "Map, compass, whistle, first aid kit, torch. {{met-mtn}} {{rei-beg}}",
       "{{met-mtn}}"
      ],
      [
       "Toilet and waste",
       "Trowel, toilet paper, sanitiser, sealable bags, rubbish bag. {{soac}} {{cc-ew}}",
       "{{soac}}"
      ]
     ],
     "src": "{{rei-setup}} {{rei-bag}} {{rei-pad}} {{rei-sleep}} {{rei-beg}} {{cdc}} {{fsa}} {{met-mtn}} {{soac}} {{cc-ew}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Pack kitchen kit in one lidded box so it is ready for next time. {{rei-beg}} Replenish your first-aid kit after every trip. {{rei-beg}}"
    },
    {
     "t": "example",
     "title": "Worked example: a plan skeleton (illustrative)",
     "steps": [
      "Place: serviced campsite near a hill, Friday night in September; two adults.",
      "Rules: campsite booked; tent and fire rules read from the site; stove only. {{lnt}} {{soac}} Forecast low 6 °C at 200 m; bag comfort 3 °C; pad R 4.5. {{rei-bag}} {{rei-pad}}",
      "Food: first-night sausages cooked until steaming, below 5 °C until cooked. {{fsa}} Water: tap, treated by site; boil as backup. {{cdc}}"
     ]
    },
    {
     "t": "activity",
     "x": "Draft the plan skeleton: place, rules, forecast, sleep system, cooking, water, navigation, hazards, emergency card."
    },
    {
     "t": "check",
     "q": "What should stay out of the tent?",
     "o": [
      "A pad",
      "A lit stove or barbecue",
      "A torch",
      "Spare socks"
     ],
     "a": 1,
     "w": "A lit stove or barbecue creates carbon monoxide and fire risk. {{nid-co}} {{bmc}}"
    },
    {
     "t": "check",
     "q": "Which two items does the pad rating and the bag rating together define?",
     "o": [
      "The tent and the fly",
      "The warmth of the sleep system",
      "The cooking time",
      "The walking route"
     ],
     "a": 1,
     "w": "Bag ratings assume a pad with R 4, so the two are a system. {{rei-pad}}"
    },
    {
     "t": "take",
     "i": [
      "The kit list supports the plan, not the other way round.",
      "Cite the rule for each choice.",
      "Test the stove and pitch at home first."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Rubric, run and review",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Your capstone passes when each row of the rubric meets its passing result. After the trip, review what went well and what you would change, and log it in the ledger."
    },
    {
     "t": "table",
     "title": "Rubric",
     "head": [
      "Criterion",
      "Passing result"
     ],
     "rows": [
      [
       "Access and impact (Module 1)",
       "States the site, whose land it is, the camping rule, and the Leave No Trace actions. {{lnt}} {{lnt-ie}}"
      ],
      [
       "Shelter and warmth (Modules 2 and 3)",
       "Tent size and pitch reasoned; bag and pad ratings matched to the forecast for the pitch. {{rei-tent}} {{rei-bag}}"
      ],
      [
       "Kitchen and water (Module 4)",
       "Stove, carbon monoxide rule, water treatment and food-temperature plan all present. {{bmc}} {{cdc}} {{fsa}}"
      ],
      [
       "Navigation and time (Module 5)",
       "A six-figure reference for the pitch and a Naismith estimate for any walk. {{os-map}} {{os-naismith}}"
      ],
      [
       "Safety (Module 6)",
       "A trip card, hazard list and call card. {{met-mtn}} {{mrew}}"
      ]
     ],
     "src": "{{lnt}} {{lnt-ie}} {{rei-tent}} {{rei-bag}} {{bmc}} {{cdc}} {{fsa}} {{os-map}} {{os-naismith}} {{met-mtn}} {{mrew}}"
    },
    {
     "t": "example",
     "title": "Worked example: a review note (illustrative)",
     "steps": [
      "What went well: pitched in 12 minutes after a home trial; stove flame was blue.",
      "What to change: the fly dripped by morning, so next time pitch under trees and open the vents earlier. {{rei-cond}}",
      "Measured: low 5 °C at the pitch; slept well with bag comfort 3 °C and pad R 4.5. Log the numbers in the ledger."
     ]
    },
    {
     "t": "activity",
     "x": "Run the trip if you can. Whether or not you do, write the review and tick the capstone."
    },
    {
     "t": "check",
     "q": "What is the main goal of the review?",
     "o": [
      "To brag",
      "To record what to keep and what to change",
      "To replace the plan",
      "To skip the ledger"
     ],
     "a": 1,
     "w": "A review turns one trip into a better next trip."
    },
    {
     "t": "check",
     "q": "Which rubric row checks that you can give your position to a rescue team?",
     "o": [
      "Access and impact",
      "Shelter and warmth",
      "Navigation and time (six-figure reference)",
      "Kitchen and water"
     ],
     "a": 2,
     "w": "The navigation row asks for a six-figure reference, and the call card uses it. {{os-map}} {{mrew}}"
    },
    {
     "t": "take",
     "i": [
      "Pass the rubric row by row.",
      "Review within a day of getting home.",
      "Log numbers so your next trip starts better informed."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "The lecturer's method: Ernest Shackleton",
   "min": 22,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read his preface and opening chapter in South and secondary pages from Britannica and Wikipedia. The record is partial. {{shack-south}} {{brit-shack}} {{wiki-nimrod}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Present the plan and get it challenged. Shackleton presented his plans for the Nimrod expedition to the Royal Geographical Society in February 1907. {{wiki-nimrod}}",
      "Budget the time to prepare. He then had about six months to raise money, equip a ship and recruit the party. {{wiki-nimrod}}",
      "Take local knowledge. For the Endurance voyage he consulted the whaling captains about the ice and weighed their advice in choosing the route. {{shack-south}}",
      "Fix the goal and revise it when the sums say so. On the Nimrod march he accepted on 4 January that the Pole was beyond them. {{wiki-nimrod}}",
      "When the plan fails, protect the people. The Endurance was trapped in the ice and crushed, the crew camped on the ice and reached Elephant Island by boat, and Shackleton and five others sailed to South Georgia to bring help. Not one of the crew died. {{brit-shack}}",
      "Take the leadership seriously. In South he writes that a leader is helped greatly if there is no uncertainty in the minds of those who follow. {{shack-south}}"
     ]
    },
    {
     "t": "table",
     "title": "A camp plan with margins (the right column is our adaptation)",
     "head": [
      "Part of the plan",
      "Shackleton's habit",
      "Your plan"
     ],
     "rows": [
      [
       "Review by others",
       "Presented to the Royal Geographical Society",
       "Share the plan with someone experienced"
      ],
      [
       "Preparation time",
       "About six months",
       "Start weeks ahead, not the night before"
      ],
      [
       "Local knowledge",
       "Whaling captains",
       "Ask the landowner, warden or local walkers"
      ],
      [
       "Margins",
       "Depots for the return",
       "Spare food, a spare layer, time before dark"
      ],
      [
       "Roles",
       "Clear lines of leadership",
       "Navigator, cook and time-keeper"
      ],
      [
       "Review",
       "The record in South",
       "A written review within a day"
      ]
     ],
     "src": "The Shackleton column follows the sources. The right column is our adaptation. {{wiki-nimrod}} {{shack-south}}"
    },
    {
     "t": "h",
     "x": "Worked example: margins in numbers (illustrative)"
    },
    {
     "t": "example",
     "title": "Planning margins for a first camp",
     "steps": [
      "Plan the meals for 2 days and 1 night: 6 meals. Add one spare day's food, which is 3 meals, so you carry 9. That is a 50 percent margin on food.",
      "Plan the walk at 2.4 km per hour for 12 km, which is 5 hours. Add 30 percent for rough ground and mistakes: 6.5 hours. {{kephart-wc}}",
      "Daylight ends at 18:00, so you must start by 11:00 and turn back at 14:00 at the latest.",
      "Add one spare layer and one more hot drink. Write the numbers on the plan sheet and leave a copy with someone.",
      "After the trip write three things to keep and three to change."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: the plan and the review"
    },
    {
     "t": "ol",
     "i": [
      "Write the plan: route, pitch, meals, turn-back rule, contacts.",
      "Add margins for food, clothing and time, and write them as numbers.",
      "Assign roles. If you are alone, you hold all three roles, so write the checks for each.",
      "Run the trip. Note what went to plan and what did not.",
      "Write the review within a day: three things to keep, three to change."
     ]
    },
    {
     "t": "activity",
     "x": "Write the plan with margins and a turn-back rule, run a short trip, and write your review."
    },
    {
     "t": "check",
     "q": "Which habit does the capstone borrow from Shackleton?",
     "o": [
      "Skipping the review",
      "Planning with margins and clear roles",
      "Camping alone only",
      "Leaving without a plan"
     ],
     "a": 1,
     "w": "He planned with depots, advice and clear leadership. {{wiki-nimrod}} {{shack-south}}"
    },
    {
     "t": "check",
     "q": "What did Shackleton do before choosing his Weddell Sea route?",
     "o": [
      "Ignored advice",
      "Consulted the whaling captains",
      "Asked tourists",
      "Flipped a coin"
     ],
     "a": 1,
     "w": "He took advice from the whaling captains. {{shack-south}}"
    },
    {
     "t": "check",
     "q": "Why write a review within a day?",
     "o": [
      "To impress others",
      "The details are fresh and you can change the next plan",
      "It is required",
      "It saves money"
     ],
     "a": 1,
     "w": "A review is how the next plan improves (our reasoning)."
    },
    {
     "t": "take",
     "i": [
      "Plan with margins in numbers, and share the plan.",
      "Ask local people. {{shack-south}}",
      "When a plan fails, protect people first, then learn. {{brit-shack}}"
     ]
    }
   ]
  }
 ]
};
