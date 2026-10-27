/* Module 1 course content. Block types: p, h, ul, ol, table, callout, fig, video, example, activity, check, terms, take. */
(window.COURSE = window.COURSE || {})["greenhouse-year-1"] = {
 "intro": "Every later module assumes you can read your greenhouse as a system: sunlight in, heat built up, air moving, and a structure that leaks. This module gives you the physics in plain terms, helps you choose and site a structure, teaches you how air is moved, and ends with a method for measuring your own climate. You will finish with a site plan and a two-week temperature log that the rest of the course builds on. Lecturer lens: Joseph Paxton's glasshouses at Chatsworth were drawn so that the pillars drained the roof, the vents opened from one place and the paths shed dust. A detailed description of one of his houses shows each part doing more than one job.",
 "outcomes": [
  "Explain why a small greenhouse swings in temperature faster than a large one, and what that means for how you manage it.",
  "Choose a structure and covering for a stated purpose, using the trade-offs in the extension literature.",
  "Orient and site a greenhouse for your hemisphere, and say what your own site changes.",
  "Size natural and mechanical ventilation from air volume, and place vents and fans so air crosses the house.",
  "Place a sensor correctly and keep a min/max log that you can interpret.",
  "Lecturer's method: Describe two jobs that each main part of your greenhouse does, find one part that does only one, and test one small change."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "What a greenhouse actually does",
   "min": 10,
   "blocks": [
    {
     "t": "p",
     "x": "A greenhouse is a device for managing sunlight. The covering lets light in so plants can grow, and the same light heats the air, the soil and every surface inside. A normal building is designed to keep outdoor conditions out. A greenhouse is designed to let as much light in as possible, which weakens its insulation and exposes the growing area to the weather. That is why it is harder to hold steady than a room. {{rutgers}}"
    },
    {
     "t": "h",
     "x": "Solar radiation is the main heat source"
    },
    {
     "t": "p",
     "x": "Solar radiation is the major source of heat energy in a greenhouse. {{purdue-temp}} Plants are part of the cooling system: they lose water from the leaf surface through small pores called stomata, and that evaporation cools the leaf. In Purdue's trials, actively growing lettuce transpired roughly half to three quarters of a pound of water per square foot of floor each day, so a greenhouse covered with healthy plants absorbs more of the incoming energy than one that is mostly empty. {{purdue-temp}}"
    },
    {
     "t": "fig",
     "id": "daytemp",
     "title": "How temperature swings through a day",
     "cap": "Illustrative sketch, not measured data. A sealed small greenhouse usually runs warmer than outdoors in the middle of a sunny day, and ventilation can only bring it down towards the outdoor temperature. Your own min/max log will show the real shape."
    },
    {
     "t": "h",
     "x": "Why small houses swing faster"
    },
    {
     "t": "p",
     "x": "NC State's guidance is blunt: large greenhouses are easier to manage because temperatures in small greenhouses fluctuate more rapidly. The air volume in a small house is relatively small, so when the door is open there can be a large gain or loss of heat. {{ncsu}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "Practical consequence: in a small house, act on temperature, not on the clock. A vent opener or thermostat that reacts at a set temperature protects your crop when you are not there to see the reading climb."
    },
    {
     "t": "p",
     "x": "Ventilation alone has a hard limit. With no other cooling, the inside temperature cannot be pulled below the outside temperature. {{rutgers}} Everything in Module 5 (shade, evaporative cooling, crop choice) exists because of that limit."
    },
    {
     "t": "terms",
     "i": [
      [
       "Glazing",
       "The transparent covering of a greenhouse: glass, rigid plastic panels or plastic film."
      ],
      [
       "Solar gain",
       "Heat added when sunlight passes through the glazing and is absorbed."
      ],
      [
       "Transpiration",
       "Water lost from leaf surfaces. It cools the leaf and adds moisture to the air."
      ],
      [
       "Air volume",
       "Length × width × average height of the growing space. Ventilation rates are written against it."
      ]
     ]
    },
    {
     "t": "check",
     "q": "Why does a small greenhouse swing in temperature faster than a large one?",
     "o": [
      "Its covering is thinner",
      "Its air volume is small, so a door opening changes the temperature quickly",
      "It holds fewer plants",
      "It is never vented"
     ],
     "a": 1,
     "w": "NC State: temperatures in small greenhouses fluctuate more rapidly because the air volume is small."
    },
    {
     "t": "check",
     "q": "With only ventilation and no other cooling, how cool can the greenhouse get?",
     "o": [
      "Below the outdoor temperature",
      "About the same as the outdoor temperature at best",
      "10°F below outdoor (unverified)",
      "As cool as you set the vents"
     ],
     "a": 1,
     "w": "Rutgers: with no other cooling capability the indoor temperature cannot be lowered below the outdoor temperature."
    },
    {
     "t": "take",
     "i": [
      "Sunlight is the main heat source, and a greenhouse is built to admit it.",
      "Healthy plants cool the house through transpiration.",
      "Small houses swing faster, so use temperature-triggered control.",
      "Ventilation can only bring the inside down towards the outside."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Choosing and siting a structure",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Before you decide on a greenhouse, it helps to see where it sits among season extenders. NC State describes a continuum from simplest to most complex: cloches, low tunnels and row covers, cold frames and hot beds, high tunnels, and greenhouses. {{ncsu}} Each step up holds more heat and shelters more plants, at higher cost. The more technology you invest in, the lower the level of daily care that may be required. {{ncsu}}"
    },
    {
     "t": "table",
     "head": [
      "Structure",
      "What it does",
      "What to watch"
     ],
     "rows": [
      [
       "Row cover or low tunnel",
       "Offers about 4–5°F of frost protection (unverified) and screens out some insects",
       "Remove or vent for heat-sensitive crops if the temperature under the cover will pass 90°F for several hours"
      ],
      [
       "Cold frame",
       "Relies on the sun as its only heat source; a cover slows heat loss at night",
       "Ventilation is most critical on clear, sunny days in late winter, early spring and early autumn"
      ],
      [
       "High tunnel (hoop house)",
       "Raises temperatures a few degrees each day over several weeks; gives some frost protection",
       "Sides are rolled up each morning and down in the evening"
      ],
      [
       "Greenhouse",
       "A permanent structure that can be heated and vented",
       "Delays in watering, heat, ventilation or pest control lead to disappointing results"
      ]
     ],
     "src": "{{ncsu}}"
    },
    {
     "t": "h",
     "x": "Where it goes"
    },
    {
     "t": "p",
     "x": "Placing a greenhouse where it has adequate sun exposure is extremely important. {{ncsu}} Arizona Extension lists a bright, sunny location, electricity and water as critical, and recommends the south side of a property with the long side of the greenhouse facing south. {{arizona}}"
    },
    {
     "t": "fig",
     "id": "orient",
     "title": "Siting: face the long side to the sun",
     "cap": "Top view for the northern hemisphere. The long side faces south and collects the most winter sun. Lean-to houses use a wall for the north side."
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Hemisphere check: the sources above are written for the northern hemisphere. In the southern hemisphere, reverse the rule and face the long side north. Close to the equator the sun passes nearly overhead, so orientation matters less than shading and ventilation. That last point is general solar geometry and does not come from the extension sources."
    },
    {
     "t": "h",
     "x": "Lean-to or free-standing"
    },
    {
     "t": "p",
     "x": "A lean-to is a half greenhouse split along the roof peak to lean against a house, shed or garage. It suits a width of about 7 to 12 feet and is the least expensive structure, with limits on space, sunlight, ventilation and temperature control. A free-standing house can be set apart for more sun and made any size. {{ncsu}}"
    },
    {
     "t": "h",
     "x": "Coverings and their trade-offs"
    },
    {
     "t": "table",
     "head": [
      "Covering",
      "Strengths",
      "Weaknesses"
     ],
     "rows": [
      [
       "Glass",
       "Weather-tight, minimises heat costs, retains humidity; tempered glass is two to three times stronger",
       "Breaks easily, expensive, needs a strong frame and good foundation"
      ],
      [
       "Fiberglass",
       "Lightweight and strong; light penetration at first as good as glass",
       "Poor grades discolour and reduce light over time"
      ],
      [
       "Double-wall acrylic or polycarbonate",
       "Durable, usually UV-coated; insulating",
       "The insulation costs some light transmission"
      ],
      [
       "Polyethylene film",
       "Very low structural cost; light frame",
       "Utility grade lasts about a year; greenhouse grade with UV inhibitors 12–18 months; copolymers two to three years"
      ]
     ],
     "src": "{{ncsu}} {{arizona}}"
    },
    {
     "t": "p",
     "x": "Sources differ on film life, with Arizona Extension quoting two to three years for polyethylene. Treat the figures as a range of roughly one to three years depending on grade and sun exposure, and note the date you fit a new cover. Plastic pipe frames generally do not meet snow and wind loads. {{ncsu}}"
    },
    {
     "t": "p",
     "x": "Plan for bench space, storage and room to expand before you build. {{ncsu}} The frame is cheap to extend only on paper; moving a built house is not."
    },
    {
     "t": "activity",
     "x": "Site audit. Stand where the greenhouse will go at morning, midday and late afternoon on a clear day. Photograph the sky each time, and note the nearest tree, wall or fence that casts shade. Mark the position of water, electricity and the prevailing wind on a sketch. This is the first half of Challenge C1."
    },
    {
     "t": "check",
     "q": "In the northern hemisphere, where should the long side of the greenhouse face?",
     "o": [
      "North",
      "East",
      "South",
      "West"
     ],
     "a": 2,
     "w": "Arizona Extension recommends the long side facing south to collect the most sun."
    },
    {
     "t": "check",
     "q": "Which statement about polyethylene film is supported by the sources?",
     "o": [
      "It lasts ten years",
      "Lifespan depends on grade, from about a year to two or three years",
      "UV inhibitors make no difference",
      "It needs a heavy glass-grade frame"
     ],
     "a": 1,
     "w": "NC State gives about one year for utility grade, 12–18 months for greenhouse grade and two to three years for copolymers."
    },
    {
     "t": "take",
     "i": [
      "Structures form a continuum; pick the least that meets your goal.",
      "Sun exposure is the most important siting factor; face the long side towards the sun for your hemisphere.",
      "Coverings trade cost, strength, light and insulation. Record the date you fit one.",
      "Plan bench space, storage and expansion early."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Air: ventilation and circulation",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Ventilation is the exchange of inside air for outside air to control temperature, remove moisture or replenish carbon dioxide. {{ncsu}} It is the first and cheapest tool in a greenhouse, and the most common cause of trouble when it is undersized."
    },
    {
     "t": "h",
     "x": "Natural ventilation"
    },
    {
     "t": "p",
     "x": "Natural ventilation works on two physical effects. Thermal buoyancy: warm air is less dense and rises. The wind effect: wind outside creates small pressure differences between the windward and leeward sides, drawing air towards the leeward side. {{rutgers}} In practice that means roof vents on the ridge with side inlet vents lower down, so warm air escapes at the top and draws cool air in at the sides. {{ncsu}}"
    },
    {
     "t": "fig",
     "id": "vent",
     "title": "Natural ventilation and air mixing",
     "cap": "Natural ventilation cross-section. Warm air rises and leaves through the ridge vent, drawing cooler air in through the low side inlets. A circulation fan keeps winter air mixed."
    },
    {
     "t": "p",
     "x": "Purdue's guidance is a useful design check, even for a small house. A ridge vent alone is more effective than a sidewall vent alone, but combining roof and sidewall vents gave a significant improvement. Sidewall and roof ventilation should be similar in area, each about 15–20% of the greenhouse ground area, and a ridge vent should open to about 60 degrees. Wider openings can act like a sail in severe wind and fail. {{purdue-temp}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Insect screens help with pests (Module 6) but resist airflow. In some studies, screens cut natural ventilation by more than half. {{purdue-temp}} Increase the screen area to compensate; Rutgers notes the screened area is often larger than the inlet area for this reason. {{rutgers}}"
    },
    {
     "t": "p",
     "x": "Natural ventilation also struggles on warm days with little wind, below about 200 feet per minute. {{rutgers}} That is the calm, hot afternoon, exactly when you most need it."
    },
    {
     "t": "h",
     "x": "Mechanical ventilation"
    },
    {
     "t": "p",
     "x": "Mechanical ventilation uses an exhaust fan at one end and motorised inlet louvers at the other. NC State says to size exhaust fans to exchange the whole air volume of the house each minute. {{ncsu}} For summer that means one to one and a half volume changes per minute, with small greenhouses needing the larger figure. In winter, 20% to 30% of one air volume exchange per minute is sufficient to mix in cool air without chilling plants. {{ncsu}}"
    },
    {
     "t": "example",
     "title": "Worked example: a 10 ft × 12 ft house",
     "steps": [
      "Floor area: 10 × 12 = 120 ft². Average height 8 ft, so volume = 120 × 8 = 960 ft³.",
      "Summer, NC State rule (1–1.5 changes per minute): 960 to 1,440 ft³/min of exhaust capacity.",
      "Cross-check with Purdue's forced-ventilation figure of 8–10 cfm per ft² of floor, which keeps the air within about 5°F of outdoors: 120 × 8 = 960 to 120 × 10 = 1,200 cfm. {{purdue-temp}}",
      "The two methods agree to within about a third, so a fan rated around 1,200–1,400 cfm is a sensible target.",
      "Winter mixing (20–30% of one change): 192 to 288 ft³/min."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Purdue also advises placing exhaust fans on the leeward side, keeping clear space of four to five fan diameters in front of them, and not spacing fans more than 25 feet apart. If fans cannot go on the leeward side, add at least 10% capacity. {{purdue-temp}}"
    },
    {
     "t": "h",
     "x": "Circulation fans and stratification"
    },
    {
     "t": "p",
     "x": "Without air-mixing fans, warm air rises to the top and cool air settles around the plants on the floor. NC State recommends small fans with a capacity equal to one quarter of the greenhouse air volume per minute, placed in diagonally opposite corners to create a circular pattern, and run continuously in winter. Turn them off in summer, when you want exhaust ventilation. {{ncsu}} Rutgers quotes about 3 cfm per ft² of growing area for horizontal airflow fans. {{rutgers}} For the 120 ft² house above, that is 240 cfm (NC State) to 360 cfm (Rutgers): the same order of magnitude, so either is reasonable."
    },
    {
     "t": "h",
     "x": "Moisture"
    },
    {
     "t": "p",
     "x": "Healthy plants release a lot of water, and relative humidity above about 80–85% should be avoided because it can increase disease and reduce transpiration. Venting, or alternately heating and venting, prevents condensation on crop surfaces and on the structure. {{rutgers}} This is why you still ventilate in winter."
    },
    {
     "t": "video",
     "id": "nGVyLwsspsw",
     "title": "How to Ventilate a Greenhouse: Fan Size (CFM)",
     "by": "YouTube (publisher not confirmed; may be a vendor video)",
     "note": "Supplementary. It covers airflow, humidity and fan sizing. Check any figure against the extension numbers above."
    },
    {
     "t": "terms",
     "i": [
      [
       "cfm",
       "Cubic feet per minute, the usual rating for a fan's airflow."
      ],
      [
       "Air exchange",
       "Replacing a volume of greenhouse air with outside air. “One exchange per minute” moves the whole house volume each minute."
      ],
      [
       "Thermal buoyancy",
       "Warm air rising because it is less dense."
      ],
      [
       "Wind effect",
       "Pressure differences created by wind that push air through openings."
      ],
      [
       "Stratification",
       "Layers of different temperature: warm air at the top, cool at the floor."
      ],
      [
       "Ridge vent",
       "A vent along the roof peak, where warm air collects."
      ]
     ]
    },
    {
     "t": "check",
     "q": "A house has a volume of 2,000 ft³. What exhaust capacity does the NC State summer rule suggest?",
     "o": [
      "200–300 ft³/min",
      "1,000 ft³/min",
      "2,000–3,000 ft³/min",
      "20,000 ft³/min"
     ],
     "a": 2,
     "w": "One to one and a half changes per minute times 2,000 ft³ is 2,000 to 3,000 ft³/min."
    },
    {
     "t": "check",
     "q": "What should circulation fans do in winter?",
     "o": [
      "Stay off",
      "Run continuously",
      "Run only at night",
      "Run only on sunny days"
     ],
     "a": 1,
     "w": "NC State: operate the fans continuously during the winter and turn them off in summer."
    },
    {
     "t": "check",
     "q": "Why might fitting insect screens cause overheating?",
     "o": [
      "Screens absorb heat",
      "Screens resist airflow and can cut natural ventilation by more than half",
      "Screens block light",
      "Screens close the vents"
     ],
     "a": 1,
     "w": "Purdue reports reductions of more than 50% in some studies. Increase screen area to compensate."
    },
    {
     "t": "take",
     "i": [
      "Natural ventilation uses buoyancy and wind: ridge vents high, inlets low, openings on opposite sides.",
      "Size summer exhaust at 1–1.5 changes per minute of your air volume; winter mixing is 20–30% of one change.",
      "Screens resist airflow, so add screen area.",
      "Run circulation fans in winter and switch them off in summer.",
      "Ventilate in winter too, to keep humidity below about 80–85%."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Measuring your climate",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "You cannot manage what you have not measured, and a single thermometer in the wrong place misleads you. This lesson covers where to put sensors, what to record, and how to read the pattern."
    },
    {
     "t": "h",
     "x": "Sensor placement"
    },
    {
     "t": "p",
     "x": "NC State's rule for sensors is specific: shade them from the sun, place them about plant height away from the walkway, and give them constant airflow. {{ncsu}} A sensor next to a vent, in direct sun or beside a heater describes the air at that spot, not the air around your plants."
    },
    {
     "t": "callout",
     "k": "key",
     "x": "A min/max thermometer is the single most useful tool at this stage. It records the highest and lowest temperature since you last reset it, so you see overnight lows and afternoon peaks without being there."
    },
    {
     "t": "h",
     "x": "What to record"
    },
    {
     "t": "table",
     "head": [
      "Reading",
      "When",
      "Why"
     ],
     "rows": [
      [
       "Minimum and maximum, then reset",
       "Once a day, same time",
       "Shows the daily swing and whether you are near a limit"
      ],
      [
       "Spot temperature",
       "Morning, midday, evening",
       "Shows when the peak and trough occur"
      ],
      [
       "Relative humidity",
       "Same times",
       "Spots condensation risk and disease conditions"
      ],
      [
       "Vents and fans",
       "Note any changes",
       "Links your actions to the temperature curve"
      ],
      [
       "Outdoor max and min",
       "Same time",
       "Gives you the baseline that ventilation cannot beat"
      ]
     ]
    },
    {
     "t": "example",
     "title": "Worked example: reading two days of log",
     "steps": [
      "Day 1 (sunny, vents closed): min 8°C, max 34°C, outdoor max 22°C. The house ran 12°C above outdoors at its peak.",
      "Day 2 (sunny, vents open from 10:00): min 9°C, max 27°C, outdoor max 23°C. Venting cut the peak by 7°C but left it 4°C above outdoors.",
      "Reading: ventilation worked but could not match outdoors, as Rutgers predicts. The 4°C gap is the amount shade or evaporative cooling would have to remove.",
      "Next step: write a vent trigger. Day 1 passed 25°C well before 12:00, so a trigger near 22–25°C would have started venting earlier."
     ]
    },
    {
     "t": "p",
     "x": "These numbers are illustrative. Your own log will differ, and that is the point. Optimum temperatures differ by crop, by growth stage, and between the roots and the shoots, so once you have the log you set targets for each crop. {{rutgers}} Module 5 turns the log into triggers."
    },
    {
     "t": "h",
     "x": "Humidity and VPD"
    },
    {
     "t": "p",
     "x": "Relative humidity alone does not describe how much water the air can hold, because that depends on temperature. Vapour pressure deficit, VPD, measures the gap between the moisture the air has and the moisture it could hold at that temperature. Higher values stimulate transpiration, though too high can cause wilting, and lower values inhibit transpiration and can lead to condensation. {{rutgers}} You do not need to calculate VPD yet, but it explains why a humid greenhouse at 15°C and a dry one at 30°C behave so differently. Module 6 returns to it when pests and disease depend on climate. {{fanourakis}}"
    },
    {
     "t": "activity",
     "x": "Start your log now. Place a min/max thermometer at plant height, shaded, away from vents. For 14 days, record the minimum, maximum and three spot readings, plus any vent change. This is Challenge C2. Keep the same sensor in the same place for the whole cycle so numbers stay comparable."
    },
    {
     "t": "check",
     "q": "Where should the thermometer sit?",
     "o": [
      "Beside a vent, so it reacts quickly",
      "At plant height, shaded, away from vents and heaters, with air moving over it",
      "On the roof ridge",
      "Next to the door"
     ],
     "a": 1,
     "w": "NC State's sensor rule: shaded, about plant height away from the walkway, with constant airflow."
    },
    {
     "t": "check",
     "q": "Your log shows the house 4°C above outdoors even with vents open. What does this tell you?",
     "o": [
      "The thermometer is broken",
      "Ventilation alone cannot fix it; more cooling is needed",
      "The vents are too small by half",
      "Nothing"
     ],
     "a": 1,
     "w": "Ventilation cannot bring the inside below the outside, so the remaining gap needs shade or evaporative cooling."
    },
    {
     "t": "take",
     "i": [
      "Place sensors at plant height, shaded and ventilated.",
      "Log min, max and three spot readings daily, with the vent actions you took.",
      "Compare against outdoor temperature: that gap is what extra cooling must remove.",
      "Set targets per crop from your log in Module 5."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Joseph Paxton",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read a published description of one of Paxton's ridge-and-furrow houses, taken from Loudon's Encyclopaedia of Gardening, which cites Paxton's own Magazine of Botany for the details, and Loudon's 1839 tour, which describes the paths at Chatsworth. These are secondary descriptions of Paxton's work, not his own text, and we did not read the Magazine of Botany itself. {{loudon-paxton}} {{loudon-paths}}"
    },
    {
     "t": "p",
     "x": "The outline of his career comes from Grace's Guide and the Web Gallery of Art biography. {{gg-paxton}} {{wga-paxton}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Start with the roof as a set of repeated spans. The description says the ridge-and-furrow roof appears to be a number of span roofs joined together, and that the house is 97.5 ft long and 26 ft wide. {{loudon-paxton}}",
      "Give the pillars two jobs. Cast-iron pillars support the roof, and the front pillars are hollow and carry a leaden pipe that takes water from the roof into a drain outside, so there is no visible spout. {{loudon-paxton}}",
      "Give the glazing two jobs. The sash-bars are grooved to hold the glass, so the putty does not shell off and let in wet, and the front lights slide in a double groove so people can enter at any point without a door. {{loudon-paxton}}",
      "Make the air adjustable from one place. Air enters by sliding the front sashes and by back-wall ventilators that swing on pivots and are opened with long iron rods fixed to pins in the wall, so the opening can be adjusted. {{loudon-paxton}}",
      "Give the path two jobs. At Chatsworth the paths over the heating pipes were covered with loose cross-boards about 4 inches wide. Heat rises through the gaps, dust falls through when the paths are swept, and watering the paths to raise steam leaves the boards dry underfoot. {{loudon-paths}}",
      "Note the roof's aim from other sources. Grace's Guide says the roof was set at right angles to the morning and evening sun to admit more light and drain rainwater. {{gg-paxton}}"
     ]
    },
    {
     "t": "p",
     "x": "Between 1836 and 1841 he built the Great Conservatory at Chatsworth, which became the test-bed for the techniques he later used on the Crystal Palace. {{wga-paxton}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The house in the description is a particular one, and the figures are for that house. A small greenhouse will differ. The lesson uses it to show the habit of asking what jobs each part does. {{loudon-paxton}}"
    },
    {
     "t": "table",
     "title": "Parts and jobs in the described house (the right column is our adaptation)",
     "head": [
      "Part",
      "Jobs in Paxton's house",
      "Your greenhouse"
     ],
     "rows": [
      [
       "Front pillar",
       "Holds the roof up; carries the roof water to the drain",
       "Does a post or gutter bracket also move water?"
      ],
      [
       "Sash-bar",
       "Holds the glass; keeps wet out",
       "Check that glazing bars hold and seal"
      ],
      [
       "Pivoting back vent",
       "Lets air in; adjustable by a rod from below",
       "Can you open it from where you stand?"
      ],
      [
       "Slatted path",
       "Lets heat rise; passes dust and water through",
       "Does your path trap dust or standing water?"
      ],
      [
       "Sliding front light",
       "Lets in light; serves as a door",
       "Could one opening do two jobs?"
      ]
     ],
     "src": "The first two columns follow the descriptions. The last column is our adaptation. {{loudon-paxton}} {{loudon-paths}}"
    },
    {
     "t": "h",
     "x": "Worked example: a jobs list for one greenhouse (illustrative)"
    },
    {
     "t": "example",
     "title": "Reading your own house the Paxton way",
     "steps": [
      "Sketch the house from above. Mark north and the direction of the ridge.",
      "Mark where the low morning and evening sun comes in. Grace's Guide says Paxton set his roof to catch it. {{gg-paxton}}",
      "List each main part with the jobs it does. For example: glazing admits light and sheds rain; the base holds the structure and keeps out draughts; a vent lets hot air out and lets air circulate.",
      "Circle any part with only one job. Ask whether it could do two, or whether it is needed at all.",
      "Write one change you would test this season. Keep it small, and write what you expect to see."
     ]
    },
    {
     "t": "h",
     "x": "Worked example: counting jobs (illustrative)"
    },
    {
     "t": "example",
     "title": "A score for the described house",
     "steps": [
      "Count the parts in the table above: five. Count their jobs as listed: two each for the pillar, the sash-bar, the vent, the path and the sliding light, which is 10 jobs.",
      "That is 10 jobs ÷ 5 parts = 2 jobs a part. A part with 1 job is below the average, and is the first one to ask about.",
      "Do the same for your own list. The number is only a prompt for a question, not a measure of quality."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a one-change test"
    },
    {
     "t": "ol",
     "i": [
      "Pick the part of your greenhouse with only one job.",
      "Write what a second job for it could be, or whether it can go.",
      "Write what you expect the change to do and how you will see it.",
      "Make the change on one bay or bench only.",
      "Record what happened after two weeks."
     ]
    },
    {
     "t": "activity",
     "x": "Do the jobs list for your own greenhouse or for the one you are planning. Name at least four parts and two jobs for each."
    },
    {
     "t": "check",
     "q": "What did the front pillars of the described house carry inside them?",
     "o": [
      "Wires",
      "A leaden pipe taking roof water to a drain",
      "Seeds",
      "Heaters"
     ],
     "a": 1,
     "w": "The front pillars are hollow and carry a leaden pipe that takes water from the roof into a drain. {{loudon-paxton}}"
    },
    {
     "t": "check",
     "q": "Why were the Chatsworth path boards laid loose with gaps?",
     "o": [
      "To save wood",
      "So heat and steam rise, dust falls through, and the boards stay dry",
      "To hide pipes",
      "To store tools"
     ],
     "a": 1,
     "w": "Heat rises through, dust falls through when swept, and watering leaves the boards dry. {{loudon-paths}}"
    },
    {
     "t": "check",
     "q": "What did Paxton aim to catch with his ridge-and-furrow roof, according to Grace's Guide?",
     "o": [
      "Only the midday sun",
      "The low morning and evening sun, and to drain rain",
      "Northern light",
      "Heat from the soil"
     ],
     "a": 1,
     "w": "The roof was set at right angles to the morning and evening sun to admit more light and drain rainwater. {{gg-paxton}}"
    },
    {
     "t": "take",
     "i": [
      "Ask what jobs each part does. {{loudon-paxton}}",
      "Look for the part that does only one job.",
      "Test one small change and write down what you expected."
     ]
    }
   ]
  }
 ]
};
