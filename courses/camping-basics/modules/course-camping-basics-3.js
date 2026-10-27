/* Camping fundamentals (UK and Ireland) (module 3). Block types and rules: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["camping-basics-3"] = {
 "intro": "Cold nights are the usual reason a first trip goes wrong. Warmth comes from a system, not a single item: the bag, the pad under it, your clothing and the way you prepare for bed. This module explains how those parts work together, how ratings are measured, why wind and altitude matter, and how to spot hypothermia. Lecturer lens: Fridtjof Nansen planned his sledge journeys by experiment. He tried clothes, tents and cookers before he left. His method is a way to build and test a sleep system on a small scale first.",
 "outcomes": [
  "Read a sleeping bag label and say what comfort and lower-limit ratings mean.",
  "Pick a sleeping pad R-value for the conditions and add pads together.",
  "Explain how wind, altitude and the ground take heat from you.",
  "Recognise hypothermia and know what to do and not do while waiting for help.",
  "Lecturer's method: Test your sleep system before the trip, choose layers by trial, and build a night plan that deals with wet ground and condensation."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Sleeping bags and what the numbers mean",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "REI calls a sleeping bag's temperature rating the key factor in choosing one. {{rei-bag}} But ratings are estimates, not guarantees. {{rei-bag}} Real-world comfort probably will not match the lab figure because a lab cannot simulate every variable. {{rei-bag}}"
    },
    {
     "t": "h",
     "x": "How ratings are made"
    },
    {
     "t": "p",
     "x": "Brands once tested bags their own way, so one firm's 30-degree bag was not the same as another's. The industry agreed a common method, and independent labs now assign ratings. {{rei-bag}} EN (European Norm) came first, and ISO now oversees the near-identical test. {{rei-bag}} The test uses a pad under the bag and a dummy in base layers. {{rei-bag}}"
    },
    {
     "t": "table",
     "title": "The two numbers on a standard label",
     "head": [
      "Rating",
      "What it describes",
      "Who it fits"
     ],
     "rows": [
      [
       "Comfort",
       "The temperature at which a cold sleeper might feel comfortable. {{rei-bag}}",
       "Cold sleepers. Brands use it on women's bags. {{rei-bag}}"
      ],
      [
       "Lower limit",
       "Always lower than comfort. The temperature at which a warm sleeper might still be comfortable. {{rei-bag}}",
       "Warm sleepers. Brands use it on men's bags. {{rei-bag}}"
      ]
     ],
     "src": "{{rei-bag}}"
    },
    {
     "t": "fig",
     "id": "camping-basics-bagscale",
     "title": "Comfort and lower-limit on a thermometer",
     "cap": "An illustrative bag with a comfort rating of 7 and a lower limit of 2; a night at 4 sits between them."
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A number in a bag's name is not its rating. Brands round to a figure ending in 0 or 5, and rounding can go either way. Always read the tested figure. {{rei-bag}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Some bags carry only a loose 'temperature rating' not labelled comfort or lower limit. That is probably the brand's own estimate, not an ISO or EN test, so you cannot compare it fairly across brands. {{rei-bag}}"
    },
    {
     "t": "p",
     "x": "Style matters too. Car-camping bags are cut wider for comfort but hold heat less efficiently. Mummy bags fit closer and are warmer for their weight. {{rei-sleep}} For milder nights, a rectangular bag can unzip to act like a quilt. {{rei-sleep}}"
    },
    {
     "t": "example",
     "title": "Worked example: is this bag right for a 4 °C night? (illustrative numbers)",
     "steps": [
      "A bag is tested at comfort 7 °C and lower limit 2 °C. The forecast low at the pitch is 4 °C.",
      "4 °C is below the comfort rating, so a cold sleeper may not be comfortable. It is above the lower limit, so a warm sleeper might be. {{rei-bag}}",
      "Decision: if you sleep cold, choose a bag with a comfort rating of 4 °C or lower, or add a liner and a better pad. The rating also assumes a pad with R-value 4, covered in the next lesson. {{rei-pad}}"
     ]
    },
    {
     "t": "terms",
     "i": [
      [
       "Comfort rating",
       "Tested temperature for a cold sleeper to stay comfortable."
      ],
      [
       "Lower limit",
       "Tested temperature a warm sleeper might still tolerate."
      ],
      [
       "ISO / EN",
       "Standards for testing bag warmth in a lab."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Find the label or product page of any sleeping bag. Write its comfort and lower-limit ratings, or note that it has only a single unlabelled number."
    },
    {
     "t": "check",
     "q": "Why can the comfort rating be more useful for a cold sleeper?",
     "o": [
      "It is always higher than the lower limit, so it is a safer planning figure for cold sleepers",
      "It shows weight",
      "It is not tested",
      "It is the same as lower limit"
     ],
     "a": 0,
     "w": "The comfort rating describes a cold sleeper and sits above the lower limit. {{rei-bag}}"
    },
    {
     "t": "check",
     "q": "A bag is called '5'. What does that tell you?",
     "o": [
      "Its lower limit is 5 °C",
      "Its comfort is 5 °C",
      "Nothing exact: read the tested rating",
      "It is a four-season bag"
     ],
     "a": 2,
     "w": "The number in a name is rounded by the brand. {{rei-bag}}"
    },
    {
     "t": "take",
     "i": [
      "Use the tested comfort and lower-limit numbers, not the name.",
      "Ratings are estimates; leave a margin.",
      "Match bag shape to how you will camp."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "The pad under you: R-value and building a sleep system",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "The ground pulls heat out of you. A sleeping pad insulates you from it, and a good pad matters as much as the bag. {{rei-pad}} Big air mattresses look plush but have little insulation. {{rei-beg}}"
    },
    {
     "t": "p",
     "x": "R-value measures a pad's resistance to heat flow. A higher number means a warmer pad. A pad of R 2.0 is twice as warm as R 1.0. {{rei-pad}} R-values add up if you stack pads. {{rei-pad}}"
    },
    {
     "t": "table",
     "title": "R-value bands (REI guidance)",
     "head": [
      "R-value",
      "Suited to",
      "Typical pad"
     ],
     "rows": [
      [
       "Under 2.0",
       "Warm weather. {{rei-pad}}",
       "Light summer pads."
      ],
      [
       "2.0 to 3.9",
       "Cool weather. {{rei-pad}}",
       "Closed-cell foam pads are mostly around R 2. {{rei-pad}}"
      ],
      [
       "4.0 to 5.4",
       "Cold weather. {{rei-pad}}",
       "Insulated air or self-inflating pads."
      ],
      [
       "5.5 and above",
       "Extremely cold weather. {{rei-pad}}",
       "Winter pads."
      ]
     ],
     "src": "{{rei-pad}}"
    },
    {
     "t": "fig",
     "id": "camping-basics-rvalue",
     "title": "R-value bands and stacking",
     "cap": "Bands are shown with a stacked example: foam under an air pad adds R-values."
    },
    {
     "t": "p",
     "x": "Your sleep system has three parts: the bag, the pad and what you wear. Bag temperature ratings assume use with a pad of R 4. {{rei-pad}} Warm sleepers may get by with R 2 or 3 in most seasons, and cold sleepers may want more. {{rei-pad}} REI adds that most people do not need to overthink it: summer pads are fine for most three-season use, and winter camping is when R-value really matters. {{rei-pad}}"
    },
    {
     "t": "p",
     "x": "To add warmth, put a closed-cell foam pad under your regular pad. {{rei-sleep}} The foam also guards the air pad from punctures and moisture. {{rei-pad}}"
    },
    {
     "t": "example",
     "title": "Worked example: stacking pads (illustrative R-values)",
     "steps": [
      "Your air pad is R 2.5 and a foam pad is R 2.0. {{rei-pad}}",
      "Stacked, R = 2.5 + 2.0 = 4.5. {{rei-pad}}",
      "4.5 falls in the 4.0 to 5.4 cold-weather band and exceeds the R 4 assumed by bag ratings, so a bag tested at its comfort rating should perform as stated. {{rei-pad}}"
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The R-values in this example are illustrative. Check the real value on your pads' labels. Uniform testing now lets you compare R-values across brands. {{rei-pad}}"
    },
    {
     "t": "terms",
     "i": [
      [
       "R-value",
       "How well a material resists heat flow. Higher is warmer."
      ],
      [
       "Closed-cell foam pad",
       "A firm foam pad that does not rely on air and is hard to puncture."
      ],
      [
       "Sleep system",
       "The bag, the pad and the clothing worn together."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Look up the R-value of your pad, or the pad you might buy. Say which weather band it falls in."
    },
    {
     "t": "check",
     "q": "What R-value results from an R 1.8 pad plus an R 2.2 pad?",
     "o": [
      "2.0",
      "3.0",
      "4.0",
      "0.4"
     ],
     "a": 2,
     "w": "R-values add: 1.8 + 2.2 = 4.0. {{rei-pad}}"
    },
    {
     "t": "check",
     "q": "Why might a plush air mattress leave you cold?",
     "o": [
      "It is too soft",
      "It often lacks insulation, so the ground draws away your heat",
      "It is too light",
      "It leaks sound"
     ],
     "a": 1,
     "w": "REI notes that big air mattresses lack insulation. {{rei-beg}}"
    },
    {
     "t": "take",
     "i": [
      "Heat leaves through the ground, so the pad matters.",
      "R-values stack by addition.",
      "Bag ratings assume a pad of R 4."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "How you lose heat: wind, height and wet",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Air temperature on a forecast is only part of the story. The Met Office 'feels like' temperature adds wind speed and humidity at a person's height and an understanding of how the body loses heat. {{met-wc}} The UK method measures how much heat a bare face loses at a walking speed of 3 mph. {{met-wc}}"
    },
    {
     "t": "h",
     "x": "Wind"
    },
    {
     "t": "p",
     "x": "On calm days the body warms a boundary layer of air next to the skin. Wind strips that layer away, so skin cools and you feel colder. {{met-wc}} The Met Office notes that feels-like temperatures through the year can be 3 or 4 degrees colder than the actual maximum. {{met-wc}}"
    },
    {
     "t": "h",
     "x": "Height"
    },
    {
     "t": "p",
     "x": "Air usually gets colder as you climb. The Met Office gives an average of about 2 °C of cooling per 300 metres, though it varies a lot. {{met-mtn}} Wind also strengthens with height and speeds up over ridges. {{met-mtn}}"
    },
    {
     "t": "fig",
     "id": "camping-basics-heat",
     "title": "Four ways to lose heat at camp",
     "cap": "Wind, cold ground, wet and high ground: each has a countermeasure."
    },
    {
     "t": "table",
     "title": "Matching the risk to the fix",
     "head": [
      "Heat-loss route",
      "Why it happens",
      "Fix"
     ],
     "rows": [
      [
       "Wind",
       "Strips the warm air layer next to skin. {{met-wc}}",
       "Sheltered pitch (Module 2), wind-proof layer."
      ],
      [
       "Height",
       "Average cooling of about 2 °C per 300 m, varies. {{met-mtn}}",
       "Check the forecast for your pitch height; choose a lower bag rating."
      ],
      [
       "Cold ground",
       "Conduction into the pad. {{rei-pad}}",
       "Higher R-value or stacked pads."
      ],
      [
       "Wet",
       "Wet clothes and wet ground make you cold. {{nhs-hypo}}",
       "Dry layers for bed; keep wet kit out of the tent."
      ]
     ],
     "src": "{{met-wc}} {{met-mtn}} {{rei-pad}} {{nhs-hypo}}"
    },
    {
     "t": "example",
     "title": "Worked example: a valley forecast and a hill pitch (illustrative)",
     "steps": [
      "The forecast for the valley town says an overnight low of 8 °C. Your pitch is 450 m higher up.",
      "450 ÷ 300 = 1.5 steps of 300 m. 1.5 × 2 °C = 3 °C of average cooling. {{met-mtn}}",
      "Expected low at the pitch is about 8 − 3 = 5 °C before wind chill. With a moderate wind it will feel colder, so plan for a bag and pad suited to something nearer 2 °C (our inference)."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The lapse rate is an average, not a promise. Cloud, wind and local ground can make the real number very different. {{met-mtn}}"
    },
    {
     "t": "terms",
     "i": [
      [
       "Wind chill",
       "The 'feels like' effect of wind and humidity on how fast your body loses heat."
      ],
      [
       "Lapse rate",
       "The change of air temperature with height."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Check the Met Office forecast for a place you might camp. Write the overnight low, wind speed and the 'feels like' temperature."
    },
    {
     "t": "check",
     "q": "What does wind do to your skin's warm boundary layer?",
     "o": [
      "Thickens it",
      "Strips it away so you feel colder",
      "Warms it",
      "Nothing"
     ],
     "a": 1,
     "w": "Wind removes the boundary layer and skin temperature drops. {{met-wc}}"
    },
    {
     "t": "check",
     "q": "A hill pitch is 600 m above the valley. Using the average lapse rate, how much cooler is it?",
     "o": [
      "1 °C",
      "2 °C",
      "4 °C",
      "6 °C"
     ],
     "a": 2,
     "w": "600 ÷ 300 × 2 °C = 4 °C on average. {{met-mtn}}"
    },
    {
     "t": "take",
     "i": [
      "Wind, height, cold ground and wet all take your heat.",
      "Plan for the pitch, not the nearest town.",
      "The 2 °C per 300 m lapse rate is an average only."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "A warm night, and spotting hypothermia",
   "min": 14,
   "blocks": [
    {
     "t": "h",
     "x": "Getting ready for bed"
    },
    {
     "t": "ul",
     "i": [
      "Set up your tent, bag and pad before dark. {{rei-beg}}",
      "Change into clean, dry layers and socks. {{rei-sleep}}",
      "Do not overdress. Bulky clothing in a bag can reduce its ability to trap heat; drape a jacket over the bag instead. {{rei-sleep}}",
      "Eat a snack and drink a warm, non-alcoholic drink. Alcohol widens blood vessels and speeds heat loss. {{rei-sleep}}",
      "Wear a warm hat and cinch the bag hood. {{rei-sleep}}",
      "Fill empty space in the bag with dry clothes, and keep a warm water bottle near your core. {{rei-sleep}}"
     ]
    },
    {
     "t": "h",
     "x": "Recognising hypothermia"
    },
    {
     "t": "p",
     "x": "Hypothermia is a dangerous drop in body temperature below 35 °C, against a normal 37 °C. It is a medical emergency that needs hospital treatment. {{nhs-hypo}} Symptoms include shivering, pale, cold and dry skin, slurred speech, slow breathing, tiredness or confusion. {{nhs-hypo}} Causes include too few clothes in the cold, staying out too long, falling into cold water, and wet clothes. {{nhs-hypo}}"
    },
    {
     "t": "table",
     "title": "What the NHS says to do while waiting for help",
     "head": [
      "Do",
      "Do not"
     ],
     "rows": [
      [
       "Move the person somewhere sheltered as quickly as possible. {{nhs-hypo}}",
       "Use a hot bath, hot water bottle or heat lamp. {{nhs-hypo}}"
      ],
      [
       "Remove wet clothing and wrap them in a blanket, sleeping bag or dry towel, covering the head. {{nhs-hypo}}",
       "Rub their arms, legs, feet or hands. {{nhs-hypo}}"
      ],
      [
       "Give a warm non-alcoholic drink and sugary food if they are fully awake. {{nhs-hypo}}",
       "Give alcohol. {{nhs-hypo}}"
      ],
      [
       "Keep them awake by talking and stay with them until help arrives. {{nhs-hypo}}",
       "Leave them alone. {{nhs-hypo}}"
      ]
     ],
     "src": "{{nhs-hypo}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "If you think someone has hypothermia, go to A&E or call 999. Do not drive them to A&E yourself. {{nhs-hypo}} In the hills, call 999 or 112 and ask for Police, then Mountain Rescue. {{mrew}}"
    },
    {
     "t": "example",
     "title": "Worked example: a chilly camper in the morning (illustrative)",
     "steps": [
      "A teenager on a school camp is shivering, speaking slowly and says they feel sleepy. Their sleeping bag is damp.",
      "Shivering, slow speech and tiredness match the symptom list. {{nhs-hypo}}",
      "Action: move them to shelter, replace wet clothes, wrap them with the hood covered, give a warm sugary drink if they are alert, keep them awake and call 999. {{nhs-hypo}}"
     ]
    },
    {
     "t": "activity",
     "x": "Write a four-line night routine you will follow on a cold night."
    },
    {
     "t": "check",
     "q": "Which action should you NOT take for someone with hypothermia?",
     "o": [
      "Wrap them in a sleeping bag",
      "Give them a warm non-alcoholic drink",
      "Rub their limbs briskly",
      "Keep talking to them"
     ],
     "a": 2,
     "w": "The NHS says not to rub arms, legs, feet or hands. {{nhs-hypo}}"
    },
    {
     "t": "check",
     "q": "Why not wear bulky clothing inside the bag?",
     "o": [
      "It is heavy",
      "It can reduce the bag's ability to trap heat",
      "It makes noise",
      "It causes condensation"
     ],
     "a": 1,
     "w": "REI says bulky clothing can reduce efficient heat trapping. {{rei-sleep}}"
    },
    {
     "t": "take",
     "i": [
      "Prepare for bed before dark with dry layers and a warm drink.",
      "Hypothermia is below 35 °C and needs emergency help.",
      "Do not rub limbs or give alcohol; do wrap, shelter and talk."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Fridtjof Nansen",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "Fridtjof Nansen led the first crossing of Greenland in 1888, and in 1895 made a long sledge journey from the ship Fram. {{rsgs-nansen}} {{nansen-fn}}"
    },
    {
     "t": "p",
     "x": "We read his own account of the equipment for the 1895 journey in Farthest North, Volume II (read in the equipment and preparation chapter), and a Royal Scottish Geographical Society article and Wikipedia. His own text makes the record rich for this topic. {{nansen-fn}} {{rsgs-nansen}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Test the clothes in the real cold. On 29 November he walked in his thick wolfskin dress at -37.6 °C and sweated, and on 9 December at -41 °C the perspiration still poured down his back. He concluded the dress was too warm (the temperatures and sweating are unverified: not found in the sources checked). {{nansen-fn}}",
      "Choose layers over bulk. The Greenland crossing party used light woollen garments, and he is described as a pioneer of the layering system. {{rsgs-nansen}} Wikipedia credits him with the layer principle, in which heavy garments gave way to layers of lightweight material. {{wiki-nansen}}",
      "Try the sleeping bag and change the design. One-man bags of reindeer calf skin proved insufficiently warm, so he went back to a double bag of adult reindeer skin, in which the occupants warm each other. {{nansen-fn}}",
      "Count the weight. He says a bag for two men is not a little lighter than two single bags, and says the objection that a joint bag disturbs sleep was not true in his experience. {{nansen-fn}}",
      "Take a tent, even a thin one. He says a tent gives so much protection and comfort that its small extra weight is worth carrying. He tried a floored silk tent of about 7 pounds but dropped it, because snow carried in on the feet melted from body heat and the floor absorbed the water, making the tent heavier. {{nansen-fn}}",
      "Seal the pitch against the wind. His floorless tent was held down with pegs and banked round with snow to keep out wind and draughts. {{nansen-fn}}"
     ]
    },
    {
     "t": "p",
     "x": "In a storm on the Greenland crossing, his party lay in the tent in their sleeping bags for three days while the ice melted under them and rain poured above. {{rsgs-nansen}}"
    },
    {
     "t": "table",
     "title": "Nansen's sleep-system choices and your equivalent (the right column is our adaptation)",
     "head": [
      "Problem",
      "Nansen's answer",
      "Your equivalent"
     ],
     "rows": [
      [
       "Too warm while moving",
       "Lighter clothing; wolfskin saved for stops",
       "Remove a layer before you sweat; keep a dry warm layer for camp"
      ],
      [
       "Bag not warm enough",
       "A bigger, double bag",
       "A bag rated for the lowest night temperature, plus a liner"
      ],
      [
       "Floor soaks up melt-water",
       "A floorless tent banked with snow",
       "A groundsheet that sheds water and a pitch that drains"
      ],
      [
       "Wind and draughts",
       "Peg down and bank with snow",
       "Peg the skirt, face the low side into the wind"
      ],
      [
       "Wet ground below",
       "Three days on melting ice",
       "An insulating pad under you, and a spare dry set to sleep in"
      ]
     ],
     "src": "Nansen's column follows the sources. The right column is our adaptation. {{nansen-fn}} {{rsgs-nansen}}"
    },
    {
     "t": "h",
     "x": "Worked example: weighing the choice (illustrative numbers)"
    },
    {
     "t": "example",
     "title": "One double bag against two singles",
     "steps": [
      "Suppose a single sleeping bag weighs 1.3 kg and a double bag of the same warmth class weighs 1.9 kg. Two singles weigh 2.6 kg.",
      "The double saves 2.6 − 1.9 = 0.7 kg, which is 27 percent less. Nansen reports a joint bag is lighter than two single bags (unverified: not found in the sources checked). {{nansen-fn}}",
      "The warmth gain comes from the pair sharing heat, as he describes. {{nansen-fn}}",
      "The cost is flexibility: you cannot split up and you must agree on bedtime. Decide whether that suits your party.",
      "The numbers here are illustrative. Weigh your own bags before you decide."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a tested sleep system"
    },
    {
     "t": "ol",
     "i": [
      "List the lowest temperature you may meet and the bag, pad and layers rated for it.",
      "Test the system in your garden or a safe spot on a cold night. Note when you were cold, and from which side.",
      "Test the groundsheet and pitch in rain. Where did water collect?",
      "Change one thing and test again, as Nansen did with the bag and the tent.",
      "Write the night plan: which layers go on as it cools, and which dry set stays untouched."
     ]
    },
    {
     "t": "activity",
     "x": "Test your sleep system on a cold night near home. Write when and where you felt cold, change one thing and test again."
    },
    {
     "t": "check",
     "q": "Why did Nansen reject the thick wolfskin dress for walking?",
     "o": [
      "It was too light",
      "He sweated in it even at -41 °C",
      "It had no hood",
      "It was too short"
     ],
     "a": 1,
     "w": "He sweated in it at -37.6 and -41 degrees. {{nansen-fn}}"
    },
    {
     "t": "check",
     "q": "Why did he give up the floored silk tent?",
     "o": [
      "It was too cold",
      "Snow carried in melted and the floor absorbed the water",
      "It had too many pegs",
      "It was too small"
     ],
     "a": 1,
     "w": "Melted snow soaked the floor and made the tent heavier. {{nansen-fn}}"
    },
    {
     "t": "check",
     "q": "What did he find about a double bag?",
     "o": [
      "Warmer and lighter than two singles",
      "Colder than two singles",
      "Heavier and no warmer",
      "Impossible to use"
     ],
     "a": 0,
     "w": "A double bag kept occupants warmer and was lighter than two singles. {{nansen-fn}}"
    },
    {
     "t": "take",
     "i": [
      "Test the system before you rely on it. {{nansen-fn}}",
      "Layers beat bulk, and a spare dry set matters. {{rsgs-nansen}}",
      "What is under you matters as much as what is over you. {{rsgs-nansen}}"
     ]
    }
   ]
  }
 ]
};
