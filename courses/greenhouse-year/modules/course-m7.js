/* Module 7 course content. */
(window.COURSE = window.COURSE || {})["greenhouse-year-7"] = {
 "intro": "By now your greenhouse generates a steady stream of numbers: temperatures, germination counts, pH and EC, sticky card counts, harvests. Records are what turn a year of work into knowledge, because they are the only way to tell whether a crop was late, why it was late, and what to change. This module shows how to design your logs, how to close out a crop and reset the house, and how to run an annual review that ends in two changes you can defend with data. Lecturer lens: Gertrude Jekyll's Wood and Garden is a year of working notes set out month by month. It also records her mistakes and her rule never to say 'I know', which suit a ledger of one particular greenhouse.",
 "outcomes": [
  "Explain how records answer three questions: what did I plan, what happened, and why.",
  "Design logs with consistent fields, units and dates, and decide how often each is filled in.",
  "Run a clean-out between crops and a reset before each season.",
  "Compare planned and actual dates and yields, and calculate the variance.",
  "Write an annual review that proposes two changes, each backed by evidence from your logs.",
  "Lecturer's method: Write a month-by-month note, say what is true only 'in my experience in this place', and use the notes with earlier years to review the greenhouse year."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Why records are the curriculum",
   "min": 10,
   "blocks": [
    {
     "t": "p",
     "x": "Every extension source you have read in this course ends the same way: keep records. Purdue says the real value of pH and EC testing is tracking values over time on a graph, because the data and graphs reveal trends and are a critical piece of information to share when you ask a diagnostic lab or expert for help. {{purdue-ph}} UConn's pest programme depends on a record-keeping system that supports decision-making, with graphs of population trends. {{uconn}}"
    },
    {
     "t": "h",
     "x": "Three questions"
    },
    {
     "t": "p",
     "x": "Records answer three questions. What did I plan? What happened? Why did it differ? The first needs your Module 2 calendar. The second needs dated logs. The third needs logs from several different subjects, so you can see, for example, that a late harvest followed nine cold nights. That three-question framing is ours."
    },
    {
     "t": "fig",
     "id": "loop",
     "title": "The yearly review loop",
     "cap": "The yearly loop. Plan from your frost dates, do the work, check against your logs, then act on what you found for next year."
    },
    {
     "t": "p",
     "x": "Purdue's last piece of advice in its monitoring guidance says to use the data when reviewing the growing season to make adjustments for the following year. {{purdue-ph}} That is the whole purpose of this module."
    },
    {
     "t": "h",
     "x": "What you have already been recording"
    },
    {
     "t": "table",
     "head": [
      "Log",
      "Module",
      "What it tells you"
     ],
     "rows": [
      [
       "Climate: min, max, spot readings, vent actions",
       "1 and 5",
       "How your house responds to weather and to your controls"
      ],
      [
       "Propagation: sow date, emergence, germination, potting on",
       "3",
       "Your own days-to-emerge and germination rate by crop"
      ],
      [
       "Media: pH and EC, with method and sample numbers",
       "4",
       "Trends in feeding and water quality"
      ],
      [
       "Watering: date, amount, weather",
       "4",
       "Water use per square foot over the year"
      ],
      [
       "Scouting: sticky cards, plant inspections, actions",
       "6",
       "Pest pressure and your tolerance levels"
      ],
      [
       "Harvest: date, crop, bench, amount, quality",
       "7",
       "Actual yields and timing against plan"
      ],
      [
       "Changes: what you altered, when, and why",
       "5 and 7",
       "The cause-and-effect trail for the review"
      ]
     ],
     "title": "Seven logs that feed the review"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "A record you cannot compare is only a memory. Use the same sensor, the same method and the same units every time, and write the date on every entry."
    },
    {
     "t": "check",
     "q": "What does Purdue call the real value of pH and EC testing?",
     "o": [
      "A single perfect reading",
      "Tracking values over time on a graph",
      "Passing an audit",
      "Replacing fertiliser"
     ],
     "a": 1,
     "w": "The data and graphs reveal trends."
    },
    {
     "t": "check",
     "q": "Which question needs several different logs to answer?",
     "o": [
      "What did I plan?",
      "What happened?",
      "Why did it differ?",
      "What day is it?"
     ],
     "a": 2,
     "w": "Finding causes means comparing climate, media, pest and harvest logs."
    },
    {
     "t": "take",
     "i": [
      "Records are what turn a year of work into knowledge.",
      "They answer: what did I plan, what happened, and why did it differ.",
      "Keep seven logs, and use the same method and units each time.",
      "Use the data in the annual review to change next year's plan."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Designing your ledger",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "A good log is boring. It has the same columns every time, one row per event, a date on every row, and units written down. This lesson gives you five log layouts and the habits that keep the data usable. The dashboard's ledger follows the same pattern: each entry has a date, a kind, a metric, a value and a unit, so you can export it and open it in a spreadsheet."
    },
    {
     "t": "h",
     "x": "Rules for readable records"
    },
    {
     "t": "ul",
     "i": [
      "One row per event, and a date on every row. Dates in one format.",
      "Write units with the numbers, for example °C, mS/cm or kg.",
      "Use the same method, instrument and position every time. Purdue says it is better if the same person does the test each time. {{purdue-ph}}",
      "Record an average from replicate samples, not a single reading. Purdue recommends five to ten samples per crop type. {{purdue-ph}}",
      "Add a notes column for anything unusual: a door left open, a fan failure, a new batch of mix.",
      "Never delete a bad reading. Mark it as suspect and say why."
     ]
    },
    {
     "t": "p",
     "x": "The first four come from the extension sources or follow directly from them. The notes and deletion rules are our practice."
    },
    {
     "t": "h",
     "x": "Five log layouts"
    },
    {
     "t": "table",
     "head": [
      "Log",
      "Fields",
      "How often"
     ],
     "rows": [
      [
       "Climate",
       "Date, time, min, max, spot reading, humidity, outdoor max and min, vent or fan action, note",
       "Daily"
      ],
      [
       "Propagation",
       "Sow date, crop, variety, seeds sown, medium temperature, emergence dates, germination %, potting-on date, plant height",
       "Per sowing"
      ],
      [
       "Media and water",
       "Date, crop, method, sample number, pH, EC, water applied, action taken",
       "Weekly or biweekly"
      ],
      [
       "Scouting",
       "Date, location, card count by pest, plants inspected, damage seen, action",
       "Weekly"
      ],
      [
       "Harvest",
       "Date, crop, bench, count or weight, quality, area, note",
       "Per harvest"
      ]
     ],
     "title": "The five core logs"
    },
    {
     "t": "example",
     "title": "Worked example: harvest log rows",
     "steps": [
      "Row 1: 22 October 2026, radish Cherry Belle, bench 2, 18 roots, 0.45 kg, good, 0.5 m². Note: sown 1 October.",
      "Row 2: 29 October 2026, radish French Breakfast, bench 2, 22 roots, 0.50 kg, good, 0.5 m². Note: sown 1 October.",
      "Yield per square metre: 0.45 kg ÷ 0.5 m² = 0.9 kg/m², and 0.50 kg ÷ 0.5 m² = 1.0 kg/m².",
      "Days from sowing to harvest: 21 for the first and 28 for the second, matching the packet. These numbers are invented for illustration."
     ]
    },
    {
     "t": "h",
     "x": "Spreadsheet functions you need"
    },
    {
     "t": "table",
     "head": [
      "Question",
      "Function",
      "Example"
     ],
     "rows": [
      [
       "Average of replicates",
       "AVERAGE",
       "=AVERAGE(E2:E6)"
      ],
      [
       "Highest and lowest reading",
       "MAX, MIN",
       "=MAX(D2:D15), =MIN(D2:D15)"
      ],
      [
       "Number of readings",
       "COUNT",
       "=COUNT(E2:E6)"
      ],
      [
       "Days between two dates",
       "Subtract the dates",
       "=B2-A2"
      ],
      [
       "Yield per area",
       "Divide",
       "=F2/G2"
      ]
     ],
     "title": "Five formulas cover most of the review"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "The ledger above the History dropdown on the dashboard can be downloaded as CSV. Open the file in a spreadsheet, and the functions above give you the averages and ranges directly."
    },
    {
     "t": "activity",
     "x": "Challenge C1: design a harvest log template with at least eight fields. Include date and crop, plus fields for bench, count or weight, quality, notes and at least two more, such as a pest note or a pH or EC reading."
    },
    {
     "t": "check",
     "q": "How many samples per crop type does Purdue recommend for pH and EC?",
     "o": [
      "One",
      "Three",
      "Five to ten",
      "A hundred"
     ],
     "a": 2,
     "w": "Take five to ten samples of each crop type and base decisions on the average."
    },
    {
     "t": "check",
     "q": "A bench of 0.5 m² yields 0.6 kg. What is the yield per m²?",
     "o": [
      "0.3 kg/m²",
      "1.2 kg/m²",
      "0.6 kg/m²",
      "6 kg/m²"
     ],
     "a": 1,
     "w": "0.6 ÷ 0.5 = 1.2 kg/m²."
    },
    {
     "t": "take",
     "i": [
      "One row per event, dated, with units, and the same method every time.",
      "Five core logs: climate, propagation, media and water, scouting, harvest.",
      "Average replicates and record notes for unusual events.",
      "A few spreadsheet functions turn the logs into answers."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Harvest, clean-out and reset",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "The end of a crop is the start of the next one. What you do in the gap decides how clean the next start is. This lesson covers recording harvests, closing out a crop, and the seasonal reset that keeps the structure and equipment ready."
    },
    {
     "t": "h",
     "x": "Recording the harvest"
    },
    {
     "t": "p",
     "x": "Coleman reminds us that the harvest is what you eat, and a year-round harvest spreads work out instead of crowding it into one season. {{coleman}} Record each harvest as soon as it happens, with the date, crop, bench, count or weight, and quality, so your actual dates can be compared with the calendar from Module 2. Record the first and last harvest date for each sowing, because those two dates give you the real days to maturity and the real length of the harvest window."
    },
    {
     "t": "h",
     "x": "Clean-out between crops"
    },
    {
     "t": "table",
     "head": [
      "Task",
      "Detail",
      "Source"
     ],
     "rows": [
      [
       "Remove debris, weeds, algae and spilled mix",
       "Especially under benches, where pests shelter",
       "{{uconn}} {{mizzou}}"
      ],
      [
       "Disinfect benches and walkways",
       "Reduces disease spread to the next crop",
       "{{uconn}}"
      ],
      [
       "Sanitise reused trays and cells",
       "About a 10 percent bleach solution, soaked 1 to 2 hours (NRCS) or 30 minutes after cleaning (UAF), then rinsed or dried",
       "{{nrcs}} {{uaf}}"
      ],
      [
       "Dispose of infested plants",
       "In bins with tight lids, and keep the cull pile far from the house",
       "{{uconn}}"
      ],
      [
       "Check hose ends",
       "Keep them off the floor",
       "{{uconn}}"
      ],
      [
       "Inspect for pests before the new crop",
       "Look for leftover plants and problems before introducing the next crop",
       "{{uconn}}"
      ]
     ],
     "title": "A clean-out checklist"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Use disinfectants in a ventilated space with gloves and eye protection, and never mix bleach with other cleaners. That is general safety guidance, not drawn from the sources."
    },
    {
     "t": "h",
     "x": "Seasonal reset"
    },
    {
     "t": "table",
     "head": [
      "When",
      "Check",
      "Why"
     ],
     "rows": [
      [
       "Before the heating season",
       "Service heaters: blower, fuel lines, valves, exhaust vent. Test circulation fans and any thermostat",
       "Purdue advises annual maintenance before the heating season. {{purdue-temp}}"
      ],
      [
       "Before summer",
       "Test vents, fans, shade and louvers. Clean insect screens so airflow is not reduced",
       "Screens resist airflow and can cut natural ventilation, so keep them clean. {{purdue-temp}} (the cleaning advice is ours)"
      ],
      [
       "Before autumn sowings",
       "Replace or inspect the cover if due; sanitise trays; calibrate the pH and EC meter",
       "Film covers last about one to three years. {{ncsu}} Purdue advises calibrating to the pH range tested. {{purdue-ph}}"
      ],
      [
       "At year end",
       "Review records and update the plan",
       "This is the next lesson"
      ]
     ],
     "title": "A reset calendar"
    },
    {
     "t": "activity",
     "x": "Challenge C2: log one full crop cycle from sowing to the end of harvest, with an entry for every planned event: sowing, potting on, feeding, scouting, first harvest and last harvest. Every planned date should have an actual date beside it."
    },
    {
     "t": "check",
     "q": "Why record the first and last harvest date of each sowing?",
     "o": [
      "For tax",
      "They give real days to maturity and the length of the harvest window",
      "To count the plants",
      "To order seed"
     ],
     "a": 1,
     "w": "Two dates give both the time to first harvest and the span of the harvest."
    },
    {
     "t": "check",
     "q": "When does Purdue advise servicing unit heaters?",
     "o": [
      "After they break",
      "Before the heating season",
      "Every ten years",
      "Only in summer"
     ],
     "a": 1,
     "w": "The best time for maintenance is before the start of the heating season."
    },
    {
     "t": "take",
     "i": [
      "Record each harvest promptly, with first and last dates.",
      "Clean out between crops: debris, benches, trays, infested plants.",
      "Reset equipment before heating season and summer.",
      "Calibrate meters and note the date of any new cover."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "The annual review",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "The annual review is where a year of records becomes a better plan. It is a short, structured piece of analysis, not a diary. Follow five steps."
    },
    {
     "t": "ol",
     "i": [
      "Gather: your planned calendar, harvest log, climate extremes, pH and EC trends, and scouting counts.",
      "Compare: planned against actual dates, and yield per area, crop by crop.",
      "Explain: look in the other logs for causes of each large difference.",
      "Decide: choose two changes, each tied to a number you recorded.",
      "Update: write the changes into next year's plan and calendar."
     ]
    },
    {
     "t": "p",
     "x": "Purdue's advice to use data when reviewing the growing season to make adjustments for the following year is the principle behind the whole exercise. {{purdue-ph}} The five steps are our method."
    },
    {
     "t": "h",
     "x": "Compare and calculate"
    },
    {
     "t": "table",
     "head": [
      "Crop",
      "Planned first harvest",
      "Actual first harvest",
      "Variance (days)",
      "Yield (kg/m²)"
     ],
     "rows": [
      [
       "Tomato",
       "25 June",
       "2 July",
       "+7",
       "9.5"
      ],
      [
       "Lettuce, autumn sowing",
       "20 November",
       "19 November",
       "-1",
       "2.1"
      ],
      [
       "Radish, 1 October sowing",
       "22 October",
       "22 October",
       "0",
       "0.9"
      ]
     ],
     "title": "A comparison table (illustrative numbers)"
    },
    {
     "t": "p",
     "x": "Variance is actual minus planned, in days. A positive number means late. Look first at the largest variance: the tomato crop ran a week late."
    },
    {
     "t": "example",
     "title": "Worked example: explaining a late crop",
     "steps": [
      "The tomato crop was 7 days late. Open the logs for the weeks before first harvest.",
      "Climate log: the minimum fell below the crop's target on 9 nights in May, with the heater off.",
      "Propagation log: the seedlings were small at transplanting, with 3 true leaves instead of 5.",
      "Media log: pH rose from 5.8 to 6.4 over three weeks in April and nothing changed.",
      "Rank the causes by evidence. Cold nights and small seedlings are both measured. The pH drift is a smaller effect.",
      "Choose changes: sow 7 days earlier, and add a second layer inside the house on cold nights. Write down how you will test each. These numbers are invented for illustration."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Correlation is not proof. Several things change at once in a greenhouse. State your explanation as the best-supported one, name what else could have caused the delay, and test the change next year."
    },
    {
     "t": "h",
     "x": "The written review"
    },
    {
     "t": "table",
     "head": [
      "Section",
      "What to write"
     ],
     "rows": [
      [
       "Summary",
       "Two or three sentences on how the year went and the headline numbers"
      ],
      [
       "What went to plan",
       "Crops and controls that worked, with evidence"
      ],
      [
       "What did not, and why",
       "Variance table, then explanations ranked by evidence"
      ],
      [
       "Two changes",
       "Each with a number from your logs, the action, and how you will test it"
      ],
      [
       "Data gaps",
       "What you did not record that you wish you had"
      ],
      [
       "Next year's plan",
       "The updated calendar and log changes"
      ]
     ],
     "title": "Structure for 800 to 1,000 words"
    },
    {
     "t": "h",
     "x": "Check your own review"
    },
    {
     "t": "table",
     "head": [
      "Criterion",
      "A passing review"
     ],
     "rows": [
      [
       "Planned against actual",
       "Dates and yields compared for every crop, with variance calculated"
      ],
      [
       "Evidence",
       "Each explanation names a number from a log"
      ],
      [
       "Two changes",
       "Specific, testable, and each backed by evidence"
      ],
      [
       "Honesty",
       "Names data gaps and alternative explanations"
      ],
      [
       "Usability",
       "The updated plan is clear enough to follow next season"
      ]
     ],
     "title": "Self-assessment rubric"
    },
    {
     "t": "activity",
     "x": "Challenge C3: write your annual review, 800 to 1,000 words, using the structure above. Log it in the ledger as a note and mark Module 7 complete when it meets the rubric."
    },
    {
     "t": "check",
     "q": "A crop was planned for 25 June and harvested on 2 July. What is the variance?",
     "o": [
      "-7 days",
      "+7 days",
      "0",
      "+14 days"
     ],
     "a": 1,
     "w": "Actual minus planned: +7 days, which is late."
    },
    {
     "t": "check",
     "q": "What must each proposed change be backed by?",
     "o": [
      "A hunch",
      "A number recorded in your logs",
      "A neighbour's advice",
      "A shop recommendation"
     ],
     "a": 1,
     "w": "Each change should name the logged evidence that supports it."
    },
    {
     "t": "take",
     "i": [
      "Gather, compare, explain, decide, update.",
      "Variance is actual minus planned, in days.",
      "Choose two changes, each tied to a recorded number, and say how you will test them.",
      "Name data gaps and alternative explanations."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Gertrude Jekyll",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read the introduction, the opening of the January chapter, her account of the winter iris and the chapter Beginning and Learning in Wood and Garden (1899). It is her own book, so the record is rich for these points, but we did not read it all. {{jekyll-wood}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Arrange the year by month. The main chapters run from January to December, and about a third of the book first appeared in 1896 and 1897 as Notes from Garden and Woodland in a newspaper. {{jekyll-wood}}",
      "Begin each month with the work in hand. The January chapter opens with a hard frost, the thermometer at eighteen degrees, and the job of preparing protection for tender shrubs and cutting out crowded fir. {{jekyll-wood}}",
      "Say what is true only in this place. She says the lesson she has learned most thoroughly is never to say 'I know', and that two able gardeners who disagree should each have said 'In my experience in this place' such a plant can only be done in such a way. {{jekyll-wood}}",
      "Record the mistake and the fix. She planted a winter iris in a well-prepared border, got thick leaves and no flowers, concluded it wanted to be less well fed, moved it to poor soil at the foot of a sunny wall, and was rewarded with a good crop of flowers. {{jekyll-wood}}",
      "Learn from trying. She advises that the real way is to learn a little from everybody and from every place, that there is no royal road, and that the learner should try, and go on trying, since there are all sorts of ways of learning, not only from people and books, but from sheer trying. {{jekyll-wood}}",
      "Give new plantings time. Irises give a few blooms the first season but are not in strength till their second and third years. {{jekyll-colour}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Her notes cover an outdoor garden and woodland. Using her month-by-month structure for a greenhouse ledger is our adaptation. {{jekyll-wood}}"
    },
    {
     "t": "table",
     "title": "Jekyll's habits and a greenhouse ledger (the right column is our adaptation)",
     "head": [
      "Habit in the book",
      "Source",
      "Ledger version"
     ],
     "rows": [
      [
       "Month-by-month chapters",
       "Wood and Garden",
       "One note per month, written that month"
      ],
      [
       "'In my experience in this place'",
       "Wood and Garden",
       "Mark results as true of your house, not of all houses"
      ],
      [
       "Record the mistake and the change",
       "Wood and Garden, iris",
       "Write what you tried, what happened, what you changed"
      ],
      [
       "Learn from sheer trying",
       "Beginning and Learning",
       "Try one thing at a time on a small scale"
      ],
      [
       "Wait for the second and third year",
       "Colour in the Flower Garden",
       "Compare each month with the same month last year"
      ]
     ],
     "src": "The first two columns follow the books. The last column is our adaptation. {{jekyll-wood}} {{jekyll-colour}}"
    },
    {
     "t": "h",
     "x": "Worked example: one month's note (illustrative)"
    },
    {
     "t": "example",
     "title": "Did, saw, next year",
     "steps": [
      "Pick a month. Write what you did, in a line or two. Jekyll's January chapter opens with the work in hand. {{jekyll-wood}}",
      "Write what you saw: crops at harvest, problems, readings that surprised you.",
      "Write one line for next year: earlier, later, more, less or stop.",
      "Mark any claim that is only true of your house with 'in my experience in this place'. {{jekyll-wood}}"
     ]
    },
    {
     "t": "h",
     "x": "Worked example: reading three years of March notes (invented numbers)"
    },
    {
     "t": "example",
     "title": "A cross-year review",
     "steps": [
      "March sowings: year 1, 40 sown and 30 germinated, 75%. Year 2, 40 and 34, 85%. Year 3, 40 and 32, 80%.",
      "Average germination: (75 + 85 + 80) ÷ 3 = 80%.",
      "Year 1 was 5 points below the average and year 2 was 5 above. Look at the notes for those years for a cause, such as the heater being off in year 1 or a new compost in year 2.",
      "One year's gap is not a pattern. Wait for the second and third year before you change the plan. {{jekyll-colour}}"
     ]
    },
    {
     "t": "h",
     "x": "Apply it: the year-end review"
    },
    {
     "t": "ol",
     "i": [
      "Read all twelve month notes in order.",
      "List three things that worked and three to change.",
      "Compare each month with the same month in earlier years.",
      "Mark which results are only true of your house.",
      "Write the plan for next year's first month."
     ]
    },
    {
     "t": "activity",
     "x": "Write your note for the current month using the three parts: did, saw, next year."
    },
    {
     "t": "check",
     "q": "How is the main part of Wood and Garden arranged?",
     "o": [
      "By plant family",
      "Month by month, January to December",
      "By soil type",
      "Alphabetically"
     ],
     "a": 1,
     "w": "Its chapters run from January to December. {{jekyll-wood}}"
    },
    {
     "t": "check",
     "q": "What did Jekyll say two disagreeing gardeners should have said?",
     "o": [
      "Nothing",
      "'In my experience in this place' it can only be done this way",
      "That the other is wrong",
      "That it depends on the weather"
     ],
     "a": 1,
     "w": "She said they should have said 'In my experience in this place'. {{jekyll-wood}}"
    },
    {
     "t": "check",
     "q": "Why does she say not to judge new plantings after one year?",
     "o": [
      "They die",
      "Some are not in strength until their second or third year",
      "They flower in winter",
      "They need no care"
     ],
     "a": 1,
     "w": "Irises, for example, are not in strength till their second and third years. {{jekyll-colour}}"
    },
    {
     "t": "take",
     "i": [
      "Keep short notes every month. {{jekyll-wood}}",
      "Mark what is true only in your house. {{jekyll-wood}}",
      "Review across years, because some results need time. {{jekyll-colour}}"
     ]
    }
   ]
  }
 ]
};
