/* Camping fundamentals (UK and Ireland) (module 5). Block types and rules: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["camping-basics-5"] = {
 "intro": "Even on a campsite you may walk to a shop, a viewpoint or a viewing spot, and on any wild pitch you must find your own way back in poor light. This module teaches the paper-map basics that still work when a phone dies: what a map shows, how to give a position, how to follow a bearing, and how long a route should take. Lecturer lens: Ernest Shackleton turned back 97 geographical miles from the South Pole in 1909. His account and the record of the expedition show the sums behind that decision and the habit of asking those who know the ground first.",
 "outcomes": [
  "Read scale and symbols on an Ordnance Survey map and measure a distance.",
  "Give a four-figure and a six-figure grid reference.",
  "Set a compass bearing from a map and follow it, with the magnetic variation.",
  "Estimate walking time with Naismith's rule and name the weather limits that change a plan.",
  "Lecturer's method: Set a turn-back rule from distance, food and time before you leave, and treat turning back as a decision made on the plan, not on the day."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Reading a map: scale, symbols and distance",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "A map is a drawing of an area, so you know what to expect and can tell whether you are going the right way. {{os-map}} Symbols and colours stand for roads, buildings and rivers, and the key explains each one. {{os-map}} OS maps are printed with north at the top. {{os-map}}"
    },
    {
     "t": "p",
     "x": "To remember the compass points, Ordnance Survey suggests a rhyme such as Naughty Elephants Squirt Water. {{os-map}} Between the main points are north-east, south-east, south-west and north-west. {{os-map}}"
    },
    {
     "t": "h",
     "x": "Scale"
    },
    {
     "t": "p",
     "x": "A map's scale tells you how much the ground has been shrunk. On a 1:25,000 map, 1 cm stands for 25,000 cm, which is 250 m. {{os-map}} OS describes it as 4 cm to 1 km, and the blue grid squares are 4 cm by 4 cm and so 1 km by 1 km. {{os-map}} A 1:250,000 map shows more land with much less detail. {{os-map}}"
    },
    {
     "t": "table",
     "title": "Two scales compared",
     "head": [
      "Scale",
      "1 cm on the map is",
      "Use"
     ],
     "rows": [
      [
       "1:25,000",
       "250 m on the ground. {{os-map}}",
       "Walking: shows paths and fine detail."
      ],
      [
       "1:250,000",
       "2.5 km on the ground (our calculation: 250,000 cm = 2,500 m)",
       "Planning or driving: wide area, little detail."
      ]
     ],
     "src": "{{os-map}}"
    },
    {
     "t": "fig",
     "id": "camping-basics-scale",
     "title": "How a 1 km square looks at 1:25,000",
     "cap": "A 4 cm square on the page is 1 km on the ground."
    },
    {
     "t": "h",
     "x": "Measuring distance"
    },
    {
     "t": "p",
     "x": "Lay a piece of thin string along your route, bending it with the track, then hold it against the scale bar or a ruler. {{os-map}} If 10 cm of string covers the route at 1:25,000, the distance is 10 ÷ 4 = 2.5 km. {{os-map}} OS says most people walk about 3 km an hour, so about 20 minutes per square crossed in a straight line. {{os-map}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "A quick estimate: count the 1 km squares you cross. Going diagonally is a little more than 1 km per square (our inference)."
    },
    {
     "t": "example",
     "title": "Worked example: from the tent to the pub (illustrative route)",
     "steps": [
      "Your string covers 6 cm along the lane on a 1:25,000 map.",
      "6 ÷ 4 = 1.5 km. {{os-map}}",
      "At about 3 km an hour, 1.5 ÷ 3 = 0.5 hours, so 30 minutes each way. {{os-map}}"
     ]
    },
    {
     "t": "terms",
     "i": [
      [
       "Scale",
       "The ratio between distance on the map and on the ground."
      ],
      [
       "Key",
       "The panel that explains the map symbols."
      ],
      [
       "Easting / northing",
       "Vertical and horizontal grid lines; they number east and north."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Take any OS map extract and measure a route using string. Write the map distance and the ground distance."
    },
    {
     "t": "check",
     "q": "On a 1:25,000 map, how many centimetres stand for 1 km?",
     "o": [
      "1",
      "2",
      "4",
      "25"
     ],
     "a": 2,
     "w": "OS describes the scale as 4 cm to 1 km. {{os-map}}"
    },
    {
     "t": "check",
     "q": "Which direction is at the top of an OS map?",
     "o": [
      "South",
      "East",
      "North",
      "It depends on the sheet"
     ],
     "a": 2,
     "w": "OS maps are always printed with north at the top. {{os-map}}"
    },
    {
     "t": "take",
     "i": [
      "Read the key before you start.",
      "At 1:25,000, 4 cm is 1 km.",
      "String measures a winding route; most walkers manage about 3 km an hour."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Grid references: saying exactly where you are",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "The blue lines on an OS map form the National Grid, which pinpoints a place anywhere on the map. {{os-map}} Vertical lines are eastings and horizontal lines are northings. {{os-map}} Great Britain is divided into 100 km squares, each named with two letters. {{os-map}}"
    },
    {
     "t": "p",
     "x": "Remember: along the corridor, then up the stairs. Read the eastings (across) first, then the northings (up). {{os-map}}"
    },
    {
     "t": "fig",
     "id": "camping-basics-grid",
     "title": "A four-figure and a six-figure reference",
     "cap": "Square 62 33 with the point 625 333 marked."
    },
    {
     "t": "table",
     "title": "Building a reference",
     "head": [
      "Step",
      "Four-figure",
      "Six-figure"
     ],
     "rows": [
      [
       "1",
       "Find the easting line on the left of the square, e.g. 62. {{os-map}}",
       "Start with the four-figure reference 62 and 33. {{os-map}}"
      ],
      [
       "2",
       "Find the northing line at the bottom of the square, e.g. 33. {{os-map}}",
       "Imagine the square cut into 10 by 10 tenths. {{os-map}}"
      ],
      [
       "3",
       "Write them together: 6233. {{os-map}}",
       "Add the tenths across and up: 625 333. {{os-map}}"
      ]
     ],
     "src": "{{os-map}}"
    },
    {
     "t": "example",
     "title": "Worked example: a point in the tenth-squares",
     "steps": [
      "The square is 62 across and 33 up. The tent is 5 tenths across and 3 tenths up from the bottom-left corner. {{os-map}}",
      "Eastings: 62 then 5 gives 625. Northings: 33 then 3 gives 333. {{os-map}}",
      "Six-figure reference: 625 333. Four-figure reference: 6233. Give a nearby landmark as well for clarity. {{os-map}}"
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "When you give a position to anyone, such as a rescue call, say 'along the corridor, then up the stairs' to yourself first: eastings, then northings. {{os-map}} {{mrew}}"
    },
    {
     "t": "terms",
     "i": [
      [
       "National Grid",
       "The reference system covering Great Britain."
      ],
      [
       "Grid reference",
       "A number code for a place on the grid."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "On an OS map extract, pick three places. Write four-figure and six-figure references for each."
    },
    {
     "t": "check",
     "q": "Which comes first in a grid reference?",
     "o": [
      "Northing",
      "Easting",
      "Whichever is bigger",
      "The letters"
     ],
     "a": 1,
     "w": "Eastings (along the corridor) come first. {{os-map}}"
    },
    {
     "t": "check",
     "q": "A point is in square 48 71, 2 tenths across and 9 up. What is the six-figure reference?",
     "o": [
      "482 719",
      "487 412",
      "428 791",
      "482 791"
     ],
     "a": 0,
     "w": "Eastings 48 and 2 give 482; northings 71 and 9 give 719. {{os-map}}"
    },
    {
     "t": "take",
     "i": [
      "Eastings first, northings second.",
      "Four figures name a square; six name a spot within 100 m.",
      "OS maps are covered by blue grid lines."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "The compass: taking and following a bearing",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Even with a phone, a compass matters if technology fails or visibility is poor. {{os-comp}} The OS guide assumes a baseplate (orienteering) compass. {{os-comp}}"
    },
    {
     "t": "h",
     "x": "Four steps"
    },
    {
     "t": "ol",
     "i": [
      "Line up the edge of the compass between where you are (A) and where you want to go (B), with the direction-of-travel arrow pointing toward B. {{os-comp}}",
      "Turn the bezel until the orienting arrow lies parallel to the grid lines, pointing to grid north (the top of the map). {{os-comp}}",
      "Allow for magnetic variation, printed in the map key: turn the bezel anticlockwise to add a positive variation. {{os-comp}}",
      "Put the map away. Hold the compass flat in front of you, turn your body until the red end of the needle lies in the orienting arrow, then pick a distant landmark in the line of the travel arrow. {{os-comp}}"
     ]
    },
    {
     "t": "fig",
     "id": "camping-basics-compass",
     "title": "A baseplate compass",
     "cap": "Direction-of-travel arrow, bezel, orienting arrow and needle. Set the bezel from the map, then match the needle to it."
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The two biggest beginner errors are moving the bezel after setting it, and holding the compass pointing sideways. Keep it away from phones, magnets and metal. {{os-comp}}"
    },
    {
     "t": "p",
     "x": "In Great Britain the variation at the time of that guide was between −1° and +4°. {{os-comp}} It was small enough to ignore for a rough bearing, but matters for accuracy or in featureless areas. {{os-comp}} The correction changes over time, so read the value from the key on your own map."
    },
    {
     "t": "example",
     "title": "Worked example from the OS guide: leg A to B",
     "steps": [
      "Grid squares SU 236 042 to SU 244 048. The measured bearing from north is 52°. {{os-comp}}",
      "Add 1° for magnetic variation: 52° + 1° = 53°. {{os-comp}}",
      "Heading 53°, distance 1.01 km. {{os-comp}} At a walking pace of 3 km an hour that is about 20 minutes (our calculation)."
     ]
    },
    {
     "t": "terms",
     "i": [
      [
       "Bearing",
       "An angle from north in degrees."
      ],
      [
       "Bezel",
       "The rotating ring marked with degrees."
      ],
      [
       "Magnetic variation",
       "The difference between grid north and magnetic north."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Practise on a local walk: choose a target 300 m away, take a bearing from a map or the compass alone, and walk to it."
    },
    {
     "t": "check",
     "q": "What is the most common beginner error?",
     "o": [
      "Using a map",
      "Moving the bezel after setting it",
      "Choosing a target",
      "Wearing gloves"
     ],
     "a": 1,
     "w": "OS lists moving the bezel and holding the compass wrongly as the two biggest. {{os-comp}}"
    },
    {
     "t": "check",
     "q": "A bearing from the map is 90° and the variation is +2°. What do you set?",
     "o": [
      "88°",
      "90°",
      "92°",
      "182°"
     ],
     "a": 2,
     "w": "Add a positive variation: 90° + 2° = 92°. {{os-comp}}"
    },
    {
     "t": "take",
     "i": [
      "Take the bearing from the map, then trust the compass and a distant target.",
      "Never move the bezel after setting it.",
      "Read the current variation from your own map."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "How long will it take? Naismith's rule and the weather limits",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Naismith's rule is a simple way to estimate walking time. In metric terms: allow one hour for every 5 km and add one hour for every 600 m of ascent. In imperial: one hour per 3 miles plus one hour per 2,000 ft of ascent. {{os-naismith}} It survives because it is simple and needs only a map and a piece of string. {{os-naismith}}"
    },
    {
     "t": "table",
     "title": "Naismith's rule",
     "head": [
      "Part",
      "Metric",
      "Imperial"
     ],
     "rows": [
      [
       "Distance",
       "1 hour per 5 km. {{os-naismith}}",
       "1 hour per 3 miles. {{os-naismith}}"
      ],
      [
       "Ascent",
       "1 hour per 600 m. {{os-naismith}}",
       "1 hour per 2,000 ft. {{os-naismith}}"
      ]
     ],
     "src": "{{os-naismith}}"
    },
    {
     "t": "example",
     "title": "Worked example: a 10 km walk with 450 m of climbing",
     "steps": [
      "Distance: 10 ÷ 5 = 2 hours. {{os-naismith}}",
      "Ascent: 450 ÷ 600 = 0.75 hours. {{os-naismith}}",
      "Total: 2 + 0.75 = 2.75 hours, which is 2 hours 45 minutes. Add time for rests and for the slowest member of your group (our advice)."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "OS says corrections have been proposed over the years, for example for fitness or slope, and is working on a more personalised model. The rule is a rule of thumb, not a guarantee. Being overdue or stuck out after dark still accounts for a sizeable number of mountain rescue incidents each year. {{os-naismith}}"
    },
    {
     "t": "h",
     "x": "Weather limits that change the plan"
    },
    {
     "t": "table",
     "title": "Met Office mountain guidance",
     "head": [
      "Element",
      "What to know"
     ],
     "rows": [
      [
       "Wind",
       "Gusts over 30 or 40 mph can affect balance; over 50 mph walking is difficult; over 70 mph forward progress is almost impossible. {{met-mtn}}"
      ],
      [
       "Cloud and visibility",
       "Low cloud often means visibility under 50 m, so it is easy to lose direction. Use a map and compass; GPS should not be relied on entirely. {{met-mtn}}"
      ],
      [
       "Temperature",
       "On average about 2 °C cooler per 300 m of climb. {{met-mtn}}"
      ],
      [
       "Rivers",
       "Streams can rise through the day; an easy crossing in the morning may be impassable on the return. {{met-mtn}}"
      ]
     ],
     "src": "{{met-mtn}}"
    },
    {
     "t": "fig",
     "id": "camping-basics-naismith",
     "title": "A time budget for a short walk",
     "cap": "Bars show distance time and ascent time for the worked example, plus a rest allowance."
    },
    {
     "t": "activity",
     "x": "Estimate the time for a walk you plan. Write the distance, ascent, Naismith time and when you must turn back to be home before dark."
    },
    {
     "t": "check",
     "q": "A route is 15 km with 600 m of ascent. What is the Naismith time?",
     "o": [
      "3 hours",
      "4 hours",
      "5 hours",
      "2 hours"
     ],
     "a": 1,
     "w": "15 ÷ 5 = 3 hours, plus 600 ÷ 600 = 1 hour, so 4 hours. {{os-naismith}}"
    },
    {
     "t": "check",
     "q": "At what wind speed does the Met Office say forward progress becomes almost impossible?",
     "o": [
      "30 mph",
      "50 mph",
      "70 mph",
      "20 mph"
     ],
     "a": 2,
     "w": "Above 70 mph. {{met-mtn}}"
    },
    {
     "t": "take",
     "i": [
      "Naismith: 1 h per 5 km plus 1 h per 600 m of climb.",
      "It is a guide: add rests and allow for the slowest walker.",
      "Strong wind, low cloud and rising rivers are reasons to change plan."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Ernest Shackleton",
   "min": 22,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read the preface and the opening of his own book South (1919), and Wikipedia and Britannica on the Nimrod expedition. The turn-back facts come from Wikipedia and his preface, so the record is partial. {{shack-south}} {{wiki-nimrod}} {{brit-shack}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Ask those who know the ground before you decide the route. In South he describes consulting the whaling captains at South Georgia about the ice, and he says their advice was worth attention and shaped his decision to steer for the South Sandwich group before pushing south. {{shack-south}}",
      "Depot supplies for the return and count what you carry. On the Nimrod march, by late December the party carried about a month of food, having stored the rest in depots for the return. {{wiki-nimrod}}",
      "Do the sum honestly. They could not cover the remaining distance and back on that amount. {{wiki-nimrod}}",
      "Decide on the plan, not the feeling. On 4 January 1909 Shackleton accepted that the Pole was beyond them and revised the goal. {{wiki-nimrod}}",
      "Turn back with margin. The march ended on 9 January, 97 geographical miles from the Pole. In South he writes that they were beaten by stress of circumstances within ninety-seven miles of their goal. {{wiki-nimrod}} {{shack-south}}",
      "Judge the result by the return. Britannica records that he turned back because supplies were running out, and that later, after the Endurance was lost, not one of the crew died. {{brit-shack}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Wikipedia's account of the Nimrod march is a secondary source. The preface to South is Shackleton's own statement of the 97-mile figure. We did not read the diary accounts of the march. {{wiki-nimrod}} {{shack-south}}"
    },
    {
     "t": "table",
     "title": "The turn-back sum and your day walk (the right column is our adaptation)",
     "head": [
      "Quantity",
      "Shackleton's case",
      "Your case"
     ],
     "rows": [
      [
       "Food in hand",
       "About a month, with the rest in depots",
       "Food and water for the day, plus a margin"
      ],
      [
       "Distance remaining",
       "97 geographical miles to the Pole",
       "Distance to the camp or summit and back"
      ],
      [
       "The decision",
       "Taken on 4 January, days before the turn",
       "Fixed before you leave: a clock time"
      ],
      [
       "Outcome",
       "Everyone returned",
       "You can try again another day"
      ]
     ],
     "src": "The Shackleton column follows the sources. The right column is our adaptation. {{wiki-nimrod}} {{shack-south}} {{brit-shack}}"
    },
    {
     "t": "h",
     "x": "Worked example: a turn-back time from a distance sum (illustrative)"
    },
    {
     "t": "example",
     "title": "A day walk to a camp in rough country",
     "steps": [
      "The camp is 8 km away and you need to be back by dark at 18:00. Your pace in rough country is 2.4 km per hour (Kephart's 1.5 miles). {{kephart-wc}}",
      "Out and back is 16 km. At 2.4 km per hour that is 16 ÷ 2.4 = 6.7 hours of walking, plus 1 hour of stops, so 7.7 hours.",
      "To be back at 18:00 you must start no later than 18:00 − 7.7 h = 10:18. A clock turn-back time, for example 14:00 at the latest, protects the return.",
      "If you reach a point where the time already used plus the time back passes your turn-back, you turn back, even if the camp is in sight. That is a decision made on the plan.",
      "The numbers are illustrative. Use your own pace and the daylight for the date."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: write the turn-back rule"
    },
    {
     "t": "ol",
     "i": [
      "Write the distance out and back, and your pace for the terrain from a tested trip.",
      "Add stops, then work out the latest start time and the turn-back time.",
      "Add a weather limit, such as a wind or visibility figure from the forecast, that also means turn back.",
      "Tell someone the plan and the turn-back time.",
      "On the day, apply the rule without bargaining. After the trip, check whether the limits were right."
     ]
    },
    {
     "t": "activity",
     "x": "Write a turn-back rule for a day trip, with a clock time and a weather limit, and give it to someone before you go."
    },
    {
     "t": "check",
     "q": "How close did Shackleton's party get to the South Pole before turning back in 1909?",
     "o": [
      "About 9 miles",
      "97 geographical miles",
      "500 miles",
      "They reached it"
     ],
     "a": 1,
     "w": "The march ended 97 geographical miles from the Pole. {{wiki-nimrod}} {{shack-south}}"
    },
    {
     "t": "check",
     "q": "Whom did Shackleton consult about the ice before choosing his route in South?",
     "o": [
      "Whaling captains at South Georgia",
      "Nobody",
      "The King",
      "Tourists"
     ],
     "a": 0,
     "w": "He took advice from the whaling captains. {{shack-south}}"
    },
    {
     "t": "check",
     "q": "Why set the turn-back time before you leave?",
     "o": [
      "To look careful",
      "A decision made on the plan is not changed by the pull of the goal",
      "It saves time",
      "It is legally required"
     ],
     "a": 1,
     "w": "The rule fixes the decision when your judgement is clearest (our reasoning)."
    },
    {
     "t": "take",
     "i": [
      "Ask those who know the ground first. {{shack-south}}",
      "Fix the turn-back time and the weather limit before you leave.",
      "A successful turn-back is a success, not a failure. {{brit-shack}}"
     ]
    }
   ]
  }
 ]
};
