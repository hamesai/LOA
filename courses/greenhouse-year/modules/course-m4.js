/* Module 4 course content. */
(window.COURSE = window.COURSE || {})["greenhouse-year-4"] = {
 "intro": "Plants can only use nutrients when the medium's chemistry allows it. Two measurements, pH and electrical conductivity, tell you most of what you need to know, and they can be taken with an inexpensive meter. This module explains what each measures, teaches the three standard test methods step by step, shows how to read the results against published ranges, and builds a monitoring routine that catches problems before leaves show them. Lecturer lens: Justus von Liebig's agricultural chemistry gives cases of a crop failing because one needed thing was missing, a diagnosis by analysis and a test with a remedy. The later 'law of the minimum' is a tidy summary of this habit, with limits.",
 "outcomes": [
  "Explain what pH and EC measure and why alkalinity in irrigation water matters.",
  "Carry out a PourThru test, and describe the saturated media extract and 1:2 dilution methods.",
  "Read an EC result against the range for the method you used.",
  "Calibrate a meter, sample consistently, average replicate samples and record the results.",
  "Interpret a trend and choose a first action, changing one thing at a time.",
  "Lecturer's method: Use the idea of the limiting factor to decide which factor to check first, test the fix, rule out the other causes, and state the limits of the idea."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Why pH and EC matter",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "Nutritional problems are one of the primary causes of poor crop quality and plant losses in greenhouses. Monitoring the pH and electrical conductivity (EC) of the growing medium lets you correct issues before they become problems that damage crops. {{purdue-ph}}"
    },
    {
     "t": "h",
     "x": "pH"
    },
    {
     "t": "p",
     "x": "The pH of the medium affects the availability of nutrients, especially micronutrients. In soilless substrates, all nutrients are readily available at a pH of 5.4 to 6.2, though each plant species has its own optimal range, which you should look up for each crop you grow. {{purdue-ph}} A pH that is too high can cause deficiencies even when the nutrient is present. Purdue shows iron deficiency in Calibrachoa and maple induced by high substrate pH. {{purdue-ph}}"
    },
    {
     "t": "fig",
     "id": "phband",
     "title": "The pH band for soilless media",
     "cap": "Schematic of the recommended band, not the source's figure. Between 5.4 and 6.2 all nutrients are readily available in soilless media."
    },
    {
     "t": "h",
     "x": "Alkalinity in the water"
    },
    {
     "t": "p",
     "x": "Alkalinity is a measure of the basic ions, bicarbonate and carbonate, dissolved in the water. High alkalinity can raise the pH of the medium over time. Purdue recommends having a professional laboratory test the irrigation water before you begin any monitoring programme. {{purdue-ph}} Greenhouse Grower adds that growers can either acidify the irrigation water or use an acidifying fertiliser to keep the medium in the suitable range of 5.4 to 6.2 for most floriculture crops. {{gg-ph}}"
    },
    {
     "t": "h",
     "x": "EC"
    },
    {
     "t": "p",
     "x": "EC measures the concentration of dissolved salts in the medium. It tells you either how much fertiliser is available for plant growth or whether salts are accumulating. {{purdue-ph}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Scope: these numbers come from guidance for soilless substrates, mostly for ornamental crops. Food crops, and soil in beds, have their own ranges. Use them to learn the method, then find the range for your crop from your local extension service. That caution is ours."
    },
    {
     "t": "h",
     "x": "The link to pests and disease"
    },
    {
     "t": "p",
     "x": "Feeding decisions affect Module 6. Overfertilisation, especially with nitrogen, encourages aphids, whiteflies, mealybugs and two-spotted spider mites, and the lush growth it produces is more susceptible to Botrytis blight and Rhizoctonia web blight. High soluble salt levels and overwatering both encourage Pythium root and stem rot. {{uconn}}"
    },
    {
     "t": "terms",
     "i": [
      [
       "pH",
       "A scale of acidity and alkalinity. In soilless media, 5.4 to 6.2 is the band where all nutrients are readily available."
      ],
      [
       "EC",
       "Electrical conductivity: a measure of dissolved salts, in millisiemens per centimetre (mS/cm)."
      ],
      [
       "Alkalinity",
       "Dissolved bicarbonate and carbonate in water. High alkalinity pushes medium pH upward over time."
      ],
      [
       "Substrate",
       "The soilless growing medium a plant is rooted in."
      ],
      [
       "Leachate",
       "The liquid that drains from a pot. Testing it shows the medium solution."
      ],
      [
       "Micronutrients",
       "Nutrients needed in small amounts, such as iron, whose availability depends strongly on pH."
      ]
     ]
    },
    {
     "t": "check",
     "q": "What pH band makes all nutrients readily available in soilless media?",
     "o": [
      "4.0 to 4.8",
      "5.4 to 6.2",
      "6.8 to 7.5",
      "7.5 to 8.5"
     ],
     "a": 1,
     "w": "Purdue: all nutrients are readily available at a pH of 5.4 to 6.2."
    },
    {
     "t": "check",
     "q": "Why test irrigation water before starting a monitoring programme?",
     "o": [
      "To check its colour",
      "High alkalinity can raise medium pH over time",
      "To measure its temperature",
      "To find out how hard it is to pump"
     ],
     "a": 1,
     "w": "Purdue: high alkalinity can increase substrate pH over time."
    },
    {
     "t": "take",
     "i": [
      "pH controls which nutrients plants can take up, especially micronutrients.",
      "EC shows dissolved salts: available fertiliser, or build-up.",
      "Alkalinity in the water drives pH upward, so test the water first.",
      "Overfeeding and high salts also raise pest and disease pressure."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "The three test methods",
   "min": 18,
   "blocks": [
    {
     "t": "p",
     "x": "Testing involves extracting a sample of the medium solution with distilled water, which has no mineral content, and measuring the pH and EC of the extract. Pushing a probe straight into the medium is not recommended unless the moisture content is very consistent and the same person tests on the same day of the week as part of a routine. {{purdue-ph}}"
    },
    {
     "t": "table",
     "head": [
      "Method",
      "Advantages",
      "Disadvantages"
     ],
     "rows": [
      [
       "PourThru",
       "Samples the whole root zone; does not damage the plant; works with slow-release fertiliser and with bark, coir or moss media",
       "Results are variable. Dry pots give higher EC; too much water dilutes the sample"
      ],
      [
       "Saturated media extract (SME)",
       "Accurate",
       "Requires removing medium from the pot, which disturbs roots, and care not to break fertiliser prills"
      ],
      [
       "1:2 dilution",
       "Similar to SME, and the amount of water is defined instead of left to judgment",
       "Similar to SME"
      ]
     ],
     "title": "Three accepted methods",
     "src": "{{purdue-ph}}"
    },
    {
     "t": "h",
     "x": "PourThru, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Irrigate or fertigate as usual. If you fertigate weekly, fix a testing day.",
      "Let the medium drain for 30 to 60 minutes.",
      "Place a saucer under the pot.",
      "Pour on distilled water, about 100 mL for a 6.5-inch pot, to collect close to 50 mL of leachate. More than 70 mL dilutes the salts; less than 50 mL may not cover the probe.",
      "Measure the pH and EC of the leachate."
     ]
    },
    {
     "t": "fig",
     "id": "pourthru",
     "title": "The PourThru test",
     "cap": "PourThru: irrigate as usual, drain, pour distilled water over the surface, and measure the leachate in the saucer."
    },
    {
     "t": "table",
     "head": [
      "Pot size",
      "Distilled water to apply (mL)",
      "Ounces"
     ],
     "rows": [
      [
       "4, 5 or 6 inch",
       "75",
       "2.5"
      ],
      [
       "6.5 inch azalea",
       "100",
       "3.5"
      ],
      [
       "1 quart",
       "75",
       "2.5"
      ],
      [
       "1 gallon",
       "150",
       "5.0"
      ],
      [
       "3 gallon",
       "350",
       "12.0"
      ],
      [
       "Flats (606, 1203, 1204)",
       "50",
       "2.0"
      ]
     ],
     "title": "How much water gets about 50 mL of leachate",
     "src": "{{purdue-ph}}"
    },
    {
     "t": "h",
     "x": "Saturated media extract"
    },
    {
     "t": "ol",
     "i": [
      "Take 200 to 300 mL of medium from the root zone, avoiding the top and bottom inch, where salt content can be higher.",
      "Put it in a 500 mL beaker or container.",
      "Add only enough distilled water to bring it to saturation, with no free water on the surface.",
      "Let it stand for 30 minutes.",
      "Pour it into a clean funnel lined with a filter, such as a coffee filter, and collect the extract. Squeezing the filter helps.",
      "Measure the pH and EC."
     ]
    },
    {
     "t": "h",
     "x": "1:2 dilution"
    },
    {
     "t": "ol",
     "i": [
      "Combine one part medium with two parts distilled water by volume, for example 1 cup of medium with 2 cups of water.",
      "Let it stand for 30 minutes.",
      "Pour through a filter into a clean container.",
      "Collect the extract and measure the pH and EC."
     ]
    },
    {
     "t": "h",
     "x": "Reading the EC result"
    },
    {
     "t": "table",
     "head": [
      "Indication",
      "PourThru EC",
      "1:2 EC",
      "SME EC",
      "What it means"
     ],
     "rows": [
      [
       "Very low",
       "0 to 0.9",
       "0 to 0.25",
       "0 to 0.75",
       "Nutrient levels may not sustain rapid growth"
      ],
      [
       "Low",
       "1.0 to 2.6",
       "0.26 to 0.75",
       "0.76 to 2.0",
       "Suitable for seedlings, bedding plants and salt-sensitive plants"
      ],
      [
       "Normal",
       "2.7 to 4.6",
       "0.76 to 1.25",
       "2.1 to 3.5",
       "Standard range for most established plants"
      ],
      [
       "High",
       "4.7 to 6.5",
       "1.26 to 1.75",
       "3.6 to 5.0",
       "Reduced vigour, particularly in hot weather"
      ],
      [
       "Very high",
       "6.6 to 7.8",
       "1.76 to 2.25",
       "5.1 to 6.0",
       "May cause salt injury; marginal leaf burn and wilting"
      ],
      [
       "Extreme",
       "above 7.8",
       "above 2.25",
       "above 6.0",
       "Most crops suffer salt injury; leach immediately"
      ]
     ],
     "title": "Target EC (mS/cm) by method",
     "src": "{{purdue-ph}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "The same plant gives different numbers by each method, because each dilutes the medium differently. Choose one method and use only it, and compare your results with that method's column. {{purdue-ph}}"
    },
    {
     "t": "table",
     "head": [
      "Salt tolerance group",
      "SME EC (mS/cm)",
      "PourThru EC (mS/cm)",
      "Examples listed"
     ],
     "rows": [
      [
       "Light feeders",
       "0.76 to 2.0",
       "1.0 to 2.6",
       "African violets, ageratum"
      ],
      [
       "Medium feeders",
       "1.5 to 3.0",
       "2.0 to 3.5",
       "Alstroemeria, alyssum"
      ],
      [
       "Heavy feeders",
       "2.0 to 3.5",
       "2.6 to 4.6",
       "Chrysanthemum, poinsettia"
      ]
     ],
     "title": "Crop groups by nutrient requirement",
     "src": "{{purdue-ph}}"
    },
    {
     "t": "p",
     "x": "The crops listed are ornamentals. Vegetables are not covered, so for tomatoes, lettuce or herbs you need the range for that crop from a local source."
    },
    {
     "t": "video",
     "id": "WyJ2fgkng-8",
     "title": "Properly Conducting a Pour-Thru Test for pH & EC",
     "by": "Ball Tech On Demand (YouTube)",
     "note": "A Ball Seed technical specialist performs the test in a working greenhouse. Compare his steps with the Purdue steps above."
    },
    {
     "t": "check",
     "q": "In a PourThru test, how much leachate do you aim for?",
     "o": [
      "About 5 mL",
      "About 50 mL",
      "About 500 mL",
      "As much as drains"
     ],
     "a": 1,
     "w": "Purdue: collect close to 50 mL. More than 70 mL dilutes the salts."
    },
    {
     "t": "check",
     "q": "Why choose one method and stick to it?",
     "o": [
      "It is cheaper",
      "Each method gives different EC numbers, so you must compare with that method's range",
      "Meters only work with one method",
      "It saves distilled water"
     ],
     "a": 1,
     "w": "The target EC range varies by sampling method."
    },
    {
     "t": "check",
     "q": "A PourThru reading of 3.5 mS/cm falls in which band?",
     "o": [
      "Very low",
      "Low",
      "Normal",
      "High"
     ],
     "a": 2,
     "w": "2.7 to 4.6 is Normal for PourThru."
    },
    {
     "t": "take",
     "i": [
      "Extract with distilled water; do not rely on a probe pushed into the medium.",
      "PourThru is non-destructive but variable; SME and 1:2 are more accurate but disturb the plant.",
      "Collect about 50 mL of leachate in PourThru.",
      "Read EC against the column for your method, and find the right range for your crop."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Running a monitoring programme",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "A single test tells you little. The value is in repeating it the same way and watching the trend. This lesson covers the equipment, the habits that make results comparable, and how to turn a column of numbers into a decision."
    },
    {
     "t": "h",
     "x": "Equipment"
    },
    {
     "t": "p",
     "x": "You need a meter that measures both pH and EC. Portable, affordable units are available and very accurate, and units with automatic calibration and temperature compensation are desirable. Standard solutions for both pH and conductivity are needed to calibrate them. Store the meter and the solutions in a room at room temperature with low humidity, never in the greenhouse or outside. {{purdue-ph}}"
    },
    {
     "t": "h",
     "x": "Habits that make data comparable"
    },
    {
     "t": "ul",
     "i": [
      "Calibrate the meter with standards in the pH range you are testing. Testing peat or bark may need calibration set at 4.0. {{purdue-ph}}",
      "Be consistent. It is better if the same person does the test each time, on the same day of the week. {{purdue-ph}}",
      "Take five to ten samples of each crop type, plus extra samples for each medium and fertiliser type. Measure them separately and base decisions on the average. {{purdue-ph}}",
      "Know the pH and EC ranges for your crop and your method. {{purdue-ph}}",
      "Track values over time on a graph. Purdue calls this the real value of testing. {{purdue-ph}}",
      "Make adjustments to fertilisation and water quality in good time, based on trends. {{purdue-ph}}",
      "Watch long-cycle crops especially closely. {{purdue-ph}}"
     ]
    },
    {
     "t": "p",
     "x": "Greenhouse Grower recommends monitoring on a weekly or biweekly basis. That lets you see an upward or downward trend and correct it before nutrient deficiencies or high soluble salts affect growth, which matters most for long-term crops. A laboratory test is an alternative with a turnaround of a few days; PourThru gives same-day results. {{gg-ph}}"
    },
    {
     "t": "fig",
     "id": "trend",
     "title": "Reading a pH trend",
     "cap": "Illustrative weekly pH average for one crop. The trend crosses the top of the band before leaves show any symptom, which is the point of regular testing."
    },
    {
     "t": "h",
     "x": "From numbers to decisions"
    },
    {
     "t": "table",
     "head": [
      "Situation",
      "What the numbers say",
      "A sensible first step"
     ],
     "rows": [
      [
       "pH average 5.2 from 3 samples",
       "Below the 5.4 to 6.2 band, but the sample is small",
       "Take at least five samples. Check fertiliser acidity and water alkalinity. Retest"
      ],
      [
       "pH rises from 5.8 to 6.4 over three weeks",
       "A trend heading above the band",
       "Test irrigation water alkalinity. Options include acidifying the water or using an acidifying fertiliser. Change one thing, then retest"
      ],
      [
       "PourThru EC 5.2 in a seedling tray",
       "High. Purdue lists 1.0 to 2.6 as suitable for seedlings",
       "Confirm the method and volume of water used. Check the fertiliser rate. Retest before changing the programme"
      ],
      [
       "PourThru EC 0.6 in an established crop",
       "Very low. May not sustain rapid growth",
       "Check the feeding schedule. Confirm the sample was not diluted by too much water"
      ]
     ],
     "title": "Four scenarios",
     "src": "{{purdue-ph}} {{gg-ph}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Change one thing at a time. If you change fertiliser, water treatment and watering together, you will not know which one worked. The data from your log is the evidence when you ask a lab or extension specialist for help. {{purdue-ph}}"
    },
    {
     "t": "table",
     "head": [
      "Date",
      "Crop",
      "Method",
      "Sample",
      "pH",
      "EC",
      "Action"
     ],
     "rows": [
      [
       "",
       "",
       "PourThru",
       "1",
       "",
       "",
       ""
      ],
      [
       "",
       "",
       "PourThru",
       "2",
       "",
       "",
       ""
      ],
      [
       "",
       "",
       "PourThru",
       "3–5",
       "",
       "",
       ""
      ],
      [
       "",
       "",
       "",
       "Average",
       "",
       "",
       ""
      ]
     ],
     "title": "A log layout to copy",
     "src": ""
    },
    {
     "t": "video",
     "id": "_ig75_y7o_k",
     "title": "PourThru Substrate Testing",
     "by": "YouTube (publisher not confirmed)",
     "note": "A step-by-step description of the PourThru technique for monitoring pH and EC. Use it with the Purdue steps."
    },
    {
     "t": "activity",
     "x": "Calibrate your meter against its standards and log the readings (Challenge C1). Then sample five pots of one crop weekly for four weeks with one method, record each reading, average them, and graph pH and EC against the week (Challenge C2). The Tools tab averages your readings and logs them to the ledger."
    },
    {
     "t": "check",
     "q": "How many samples per crop type does Purdue recommend?",
     "o": [
      "One",
      "Two",
      "Five to ten, averaged",
      "Twenty or more"
     ],
     "a": 2,
     "w": "Take five to ten samples, measure them separately, and use the average."
    },
    {
     "t": "check",
     "q": "What is the main value of testing, according to Purdue?",
     "o": [
      "One perfect reading",
      "Tracking values over time to reveal trends",
      "Meeting a regulation",
      "Replacing fertiliser"
     ],
     "a": 1,
     "w": "The data and graphs reveal trends and are critical to share when seeking advice."
    },
    {
     "t": "take",
     "i": [
      "Calibrate, be consistent, take five to ten samples, and average them.",
      "Record every test and graph pH and EC over time.",
      "Act on trends, one change at a time, then retest.",
      "Use the data when you review the season."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Water and watering routines",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "pH and EC describe the medium. How and when you water decides how much those numbers move. This lesson collects the watering guidance in the sources and turns it into a routine you can log."
    },
    {
     "t": "h",
     "x": "Water supply and delivery"
    },
    {
     "t": "p",
     "x": "A water supply is essential in a greenhouse. Hand watering is acceptable for most crops if someone is available when the task needs doing, but many hobbyists travel. Automatic systems exist, controlled by timers or mechanical evaporation sensors. {{ncsu}} Delays in watering, or a lack of timely heat, ventilation or pest control, lead to disappointing results. {{ncsu}}"
    },
    {
     "t": "h",
     "x": "How much water a crop uses"
    },
    {
     "t": "p",
     "x": "Plants lose a great deal of water by transpiration, which is also how they cool the house. In Purdue's trials, actively growing lettuce transpired roughly half to three quarters of a pound of water per square foot of greenhouse per day. {{purdue-temp}}"
    },
    {
     "t": "example",
     "title": "Worked example: daily water for a full bench",
     "steps": [
      "Purdue's figure: 0.5 to 0.75 pounds of water per square foot of floor per day for actively growing lettuce.",
      "One US gallon of water weighs about 8.34 pounds, so that is 0.5 ÷ 8.34 = 0.06 gallons up to 0.75 ÷ 8.34 = 0.09 gallons per square foot per day.",
      "For a 120 ft² greenhouse completely covered in growing lettuce: 120 × 0.06 = 7.2 up to 120 × 0.09 = 10.8 gallons per day, about 27 to 41 litres.",
      "That is an upper planning figure for a full canopy of one crop in bright conditions. A half-full house in winter uses much less. Log your own use and compare."
     ]
    },
    {
     "t": "h",
     "x": "Watering routines"
    },
    {
     "t": "table",
     "head": [
      "Situation",
      "Practice",
      "Source"
     ],
     "rows": [
      [
       "Seed trays",
       "Bottom water, then mist the surface with a fine spray",
       "{{usu}} {{uaf}}"
      ],
      [
       "Plug cells on a heat mat",
       "Check often. Heat dries plug cells quickly",
       "{{nrcs}}"
      ],
      [
       "Established plants",
       "Water early in the day so foliage dries before dark",
       "{{ncsu}}"
      ],
      [
       "Cold frames and other tight structures",
       "Watch for overwatering: a nearly airtight cold frame slows evaporation. A closed greenhouse deserves the same caution (our inference)",
       "{{ncsu}}"
      ],
      [
       "Winter",
       "Need water less often, but keep plants hydrated, because well-hydrated plants handle cold better",
       "{{ucanr}}"
      ],
      [
       "Anywhere",
       "Keep hose ends off the floor to reduce root and stem diseases",
       "{{uconn}}"
      ]
     ],
     "title": "Watering rules from the sources"
    },
    {
     "t": "p",
     "x": "Overwatering is the common thread: it encourages Pythium and other root rots. {{uconn}} High humidity from wet foliage and standing water also invites disease; Rutgers advises avoiding relative humidity above about 80 to 85 percent. {{rutgers}}"
    },
    {
     "t": "h",
     "x": "Media: a short recap"
    },
    {
     "t": "ul",
     "i": [
      "Fine, pre-wetted mix for seed; coarser mix for transplants. {{nrcs}} {{usu}}",
      "Compost is considered the best seed-starting medium by NRCS; UAF requires sterile material to prevent damping-off. {{nrcs}} {{uaf}}",
      "In a winter greenhouse, plants in the ground stay much warmer than pots on benches, and barrels of water hold daytime heat. {{ucanr}}"
     ]
    },
    {
     "t": "activity",
     "x": "Add a watering column to your log: date, crop, method, how much, and a one-line note on the weather. After two weeks, compare your water use per square foot with the planning figure above. This builds the evidence you need for the annual review in Module 7."
    },
    {
     "t": "check",
     "q": "When should established plants be watered, according to NC State?",
     "o": [
      "Late in the evening",
      "Early in the day so plants dry before dark",
      "Only after wilting",
      "At midnight"
     ],
     "a": 1,
     "w": "NC State: water early in the day so that plants dry before dark."
    },
    {
     "t": "check",
     "q": "A full canopy of growing lettuce in a 100 ft² house transpires 0.5 lb per ft² per day. How much water is that in gallons?",
     "o": [
      "About 3",
      "About 6",
      "About 12",
      "About 50"
     ],
     "a": 1,
     "w": "100 × 0.5 = 50 lb. 50 ÷ 8.34 is about 6 gallons."
    },
    {
     "t": "take",
     "i": [
      "A dependable water supply and a delivery method that does not rely on you being there.",
      "Water use depends on canopy, light and season; log your own figures.",
      "Water early in the day, keep hose ends off the floor, and avoid overwatering.",
      "Keep winter plants hydrated even though they need water less often."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Justus von Liebig",
   "min": 26,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read parts of the 1843 American edition of his Chemistry in its Application to Agriculture and Physiology: the chapter on the inorganic constituents of plants, the soil analyses and the chapter on the alternation of crops. {{liebig-1843}}"
    },
    {
     "t": "p",
     "x": "We did not find the phrase 'law of the minimum', or the barrel picture, in the passages we read. The law and its popularisation are covered by secondary sources, which say it was developed by Carl Sprengel and popularised by Liebig. {{wiki-liebig}} {{wisc-liebig}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "See that a missing constituent can stop a crop. He writes that we never find a luxuriant crop of grass on sandy and calcareous soils which contain little potash, evidently because one of the constituents indispensable to the growth of the plants is wanting. {{liebig-1843}}",
      "Watch what extra yield removes. When the grass crop of a meadow is increased with gypsum, more potash is taken away with the hay than can be restored, so after several years the crops diminish, owing to the deficiency of potash. {{liebig-1843}}",
      "Test the remedy. If the meadow is strewn from time to time with wood-ashes, even those used by soap-boilers, the grass thrives as luxuriantly as before, because the ashes are only a means of restoring the potash. {{liebig-1843}}",
      "Diagnose by analysis. For a very barren soil on which white clover would not grow, he gives an analysis and names the likely cause as a deficiency of lime, magnesia, potash and gypsum, and notes that marl increased its fertility. {{liebig-1843}}",
      "Rule out another cause. He says the dryness of that soil could not be the cause, because the stiff subsoil prevented a deficiency of moisture. {{liebig-1843}}",
      "Read the summary with care. Modern summaries say growth is limited by the scarcest resource and picture a barrel with a short stave. {{wiki-liebig}} A 2021 paper calls it a crude approximation and shows other models fit growth data better. {{pmc-liebig}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Liebig's cases concern field soils. The pH and EC readings in this module come from the module's own sources, and the worked example below is our reading, not his. {{liebig-1843}}"
    },
    {
     "t": "table",
     "title": "Liebig's cases and a greenhouse reading (the right column is our adaptation)",
     "head": [
      "Case in the book",
      "What was short",
      "Fix and check",
      "Greenhouse reading"
     ],
     "rows": [
      [
       "Meadow dressed with gypsum",
       "Potash, drawn off with larger hay crops",
       "Wood-ashes restore potash; grass recovers",
       "A heavy crop can use up one nutrient first"
      ],
      [
       "Barren soil, no white clover",
       "Lime, magnesia, potash, gypsum",
       "Marl; clover grows",
       "Name the likely missing thing, then test the fix"
      ],
      [
       "Dryness considered",
       "Not moisture; the subsoil held water",
       "Excluded as a cause",
       "Rule out water and light before blaming feed"
      ]
     ],
     "src": "The first three columns follow the 1843 text. The last column is our adaptation. {{liebig-1843}}"
    },
    {
     "t": "h",
     "x": "Worked example: reading a pH and EC pair (illustrative, our reading)"
    },
    {
     "t": "example",
     "title": "Finding the short stave",
     "steps": [
      "List the factors you can measure or see: pH, EC, water, light and temperature.",
      "Suppose pH is inside the range this module gives for your crop, but EC is low and the plants are pale. The short stave looks like feed strength.",
      "Suppose instead that EC is fine but pH is far outside the range. The short stave may be the availability of what is in the medium. See this module's lessons on why pH and EC matter.",
      "Change one thing, then re-test. Another factor may now be the limit. {{wisc-liebig}}",
      "Write the reading, the change and the result in your log, as Liebig's cases record the cause, the remedy and the result. {{liebig-1843}}"
     ]
    },
    {
     "t": "h",
     "x": "Worked example: did the fix work? (invented numbers)"
    },
    {
     "t": "example",
     "title": "A before-and-after check",
     "steps": [
      "Before: 12 pale plants of 40, which is 12 ÷ 40 = 30%. You raise the feed strength on one bench only.",
      "After two weeks: 3 pale plants of 40 on that bench, which is 7.5%, and 11 of 40 on the untouched bench, which is 27.5%.",
      "The fall on the changed bench is 22.5 points, and the control bench barely moved. The fix is supported, and the next check is whether another factor now limits growth."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a limiting-factor check"
    },
    {
     "t": "ol",
     "i": [
      "List every factor you can measure or see for the crop.",
      "Rule out water, light and temperature first, as he ruled out moisture.",
      "Name the likely short factor and the fix, and change one thing on one bench.",
      "Keep a control bench unchanged.",
      "Re-test and write down what limits growth next."
     ]
    },
    {
     "t": "activity",
     "x": "Take your latest pH and EC readings. Name the likely short stave, say what you would change, and note what you would check next."
    },
    {
     "t": "check",
     "q": "According to the law of the minimum as usually summarised, what limits growth?",
     "o": [
      "The total of all resources",
      "The scarcest resource",
      "The most abundant nutrient",
      "Temperature only"
     ],
     "a": 1,
     "w": "Growth is dictated by the scarcest resource, not by the total. {{wiki-liebig}}"
    },
    {
     "t": "check",
     "q": "In Liebig's meadow, why did hay crops fall after years of gypsum?",
     "o": [
      "Too much water",
      "More potash was removed than was restored",
      "Frost",
      "Too many weeds"
     ],
     "a": 1,
     "w": "The larger crops took away more potash than could be restored, so the crops diminished for deficiency of potash. {{liebig-1843}}"
    },
    {
     "t": "check",
     "q": "Why did he say dryness was not the cause of the barren soil?",
     "o": [
      "It rained a lot",
      "The stiff subsoil prevented a deficiency of moisture",
      "He did not test it",
      "The soil was sandy"
     ],
     "a": 1,
     "w": "He said the stiff subsoil prevented a deficiency of moisture. {{liebig-1843}}"
    },
    {
     "t": "take",
     "i": [
      "Find the missing thing, test the fix, rule out the other causes. {{liebig-1843}}",
      "When one is fixed, another may become the limit. {{wisc-liebig}}",
      "Treat the law as a rule of thumb, not an exact model. {{pmc-liebig}}"
     ]
    }
   ]
  }
 ]
};
