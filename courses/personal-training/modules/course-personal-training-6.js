/* Personal Training Fundamentals (module 6). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["personal-training-6"] = {
 "intro": "A good trainer helps clients with the whole week, not just the hour in the gym. This module covers protein and the evidence on supplements, nutrition within scope, and the WHO guidance for older adults, pregnancy, long-term conditions and disability. Lecturer lens: Hans Selye counted any demand on the body as stress. That makes a training session one demand among many, and it is why some clients need a lighter plan or a doctor's input.",
 "outcomes": [
  "Quote the protein evidence and calculate a daily target with its range.",
  "Explain which subgroup results are strong and which are weak.",
  "Decide whether a nutrition question is within scope or must be referred.",
  "Adapt a programme for an older adult, pregnant client, or client with a long-term condition.",
  "Lecturer's method: Treat recovery, nutrition and health conditions as part of total load, and know when to refer."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Protein and training: what the evidence shows",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Clients ask about protein more than almost anything else."
    },
    {
     "t": "p",
     "x": "A 2018 meta-analysis pooled 49 randomised trials with 1,863 participants who trained for at least 6 weeks. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "Adding protein supplements increased strength (one-repetition-maximum) by 2.49 kg on average. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "It also increased fat-free mass by 0.30 kg and muscle fibre size. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "Training alone produced the larger share of change, so training is the main driver. {{morton2018}}"
    },
    {
     "t": "fig",
     "id": "personal-training-protein",
     "title": "Protein scale",
     "cap": "0.8 is the recommended allowance; gains levelled off near 1.6 g/kg a day."
    },
    {
     "t": "h",
     "x": "How much per day"
    },
    {
     "t": "p",
     "x": "The break point, beyond which extra protein gave no further gains in fat-free mass, was 1.62 g/kg/day with a 95% interval of 1.03 to 2.20. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "The authors said it may be prudent to aim for up to about 2.2 g/kg/day if maximising gains. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "The break-point model itself was not statistically significant (p = 0.079), so treat it as a pragmatic estimate, not a law. {{morton2018}}"
    },
    {
     "t": "table",
     "title": "What the pooled results showed",
     "head": [
      "Outcome",
      "Effect of protein supplementation",
      "Context"
     ],
     "rows": [
      [
       "1RM strength",
       "+2.49 kg {{morton2018}}",
       "Training alone gave about +27 kg, so protein was about 9% on top"
      ],
      [
       "Fat-free mass",
       "+0.30 kg {{morton2018}}",
       "Training alone gave about +1.1 kg, so about 27% on top"
      ],
      [
       "Total body mass",
       "No clear change {{morton2018}}",
       ""
      ],
      [
       "Fat mass",
       "-0.41 kg {{morton2018}}",
       ""
      ]
     ],
     "src": "{{morton2018}}; percentages are the paper's own"
    },
    {
     "t": "example",
     "title": "Worked example: a 70 kg client",
     "steps": [
      "Allowance level: 0.8 x 70 = 56 g a day.",
      "Break-point estimate: 1.62 x 70 = 113.4 g; we use the rounded 1.6 x 70 = 112 g.",
      "Interval ends: 1.03 x 70 = 72.1 g and 2.2 x 70 = 154 g. So 112 g is the best single target, and 72 to 154 g is the plausible range."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Trials excluded people who were cutting calories, and had fewer women than men. Results may not carry over to dieting clients or to everyone. {{morton2018}}"
    },
    {
     "t": "activity",
     "x": "Calculate your own daily protein at 0.8, 1.6 and 2.2 g/kg. Compare with a food diary for two days."
    },
    {
     "t": "check",
     "q": "What was the estimated break point for total daily protein in the analysis?",
     "o": [
      "0.8 g/kg",
      "About 1.6 g/kg",
      "About 3 g/kg",
      "No limit"
     ],
     "a": 1,
     "w": "Gains in fat-free mass plateaued near 1.62 g/kg/day. {{morton2018}}"
    },
    {
     "t": "check",
     "q": "A client weighs 80 kg. Using 1.6 g/kg, what daily protein target is that?",
     "o": [
      "64 g",
      "104 g",
      "128 g",
      "176 g"
     ],
     "a": 2,
     "w": "1.6 x 80 = 128 g a day. {{morton2018}}"
    },
    {
     "t": "take",
     "i": [
      "Protein helps, but training does most of the work.",
      "Aim near 1.6 g/kg a day; up to 2.2 is plausible.",
      "Evidence is weaker for dieters and for women."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Who benefits, and what does not matter much",
   "min": 13,
   "blocks": [
    {
     "t": "p",
     "x": "Protein supplements helped trained people more than novices for fat-free mass. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "Trained participants gained about 1.05 kg more fat-free mass; untrained gained 0.15 kg, which was not significant. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "The authors speculate that trained people have less room to grow and so need more support. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "The benefit shrank with age in these trials. {{morton2018}}"
    },
    {
     "t": "h",
     "x": "Details that mattered little"
    },
    {
     "t": "p",
     "x": "Post-exercise dose, source and timing played a minor role over weeks of training. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "A daily total near 1.6 g/kg split into doses of about 0.25 g/kg was more influential. {{morton2018}}"
    },
    {
     "t": "table",
     "title": "Subgroup results for fat-free mass",
     "head": [
      "Group",
      "Supplement effect"
     ],
     "rows": [
      [
       "Untrained",
       "+0.15 kg (not significant) {{morton2018}}"
      ],
      [
       "Resistance-trained",
       "+1.05 kg {{morton2018}}"
      ],
      [
       "Under 45 years",
       "+0.55 kg {{morton2018}}"
      ],
      [
       "Over 45 years",
       "+0.06 kg (not significant) {{morton2018}}"
      ]
     ],
     "src": "{{morton2018}}"
    },
    {
     "t": "p",
     "x": "Older adults needed higher per-meal doses in the cited work: a break point of 0.40 g/kg versus 0.24 g/kg for younger adults. {{morton2018}}"
    },
    {
     "t": "example",
     "title": "Worked example: per-meal protein for a 70 kg client",
     "steps": [
      "Younger adult dose: 0.25 x 70 = 17.5 g per meal at minimum.",
      "Older adult dose: 0.40 x 70 = 28 g per meal.",
      "Check the day: four meals at 28 g = 112 g, which also reaches the 1.6 g/kg target."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The older-adult trials gave low supplement doses (about 20 g a day on average), which may explain the weak result. {{morton2018}}"
    },
    {
     "t": "activity",
     "x": "Plan a day of four meals that reaches 112 g of protein using foods the client already likes."
    },
    {
     "t": "check",
     "q": "What did the analysis say about protein timing and source?",
     "o": [
      "They were the biggest factors",
      "They played a minor role over weeks of training",
      "Only whey works",
      "Only evening matters"
     ],
     "a": 1,
     "w": "The authors concluded that timing, post-exercise dose and source play a minor role in gains over weeks. {{morton2018}}"
    },
    {
     "t": "check",
     "q": "Why might older adults appear not to benefit in the trials?",
     "o": [
      "They cannot digest",
      "Supplement doses were low and older adults need higher per-meal doses",
      "They train less",
      "No reason"
     ],
     "a": 1,
     "w": "Older adults are anabolically resistant, need higher doses, and the average supplement dose in older groups was low. {{morton2018}}"
    },
    {
     "t": "take",
     "i": [
      "Trained people gained more from supplements.",
      "Daily total matters more than timing or source.",
      "Older adults need higher per-meal doses."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Nutrition within your scope",
   "min": 12,
   "blocks": [
    {
     "t": "p",
     "x": "A personal trainer is not a dietitian."
    },
    {
     "t": "p",
     "x": "General healthy-eating information is usually within scope; individual diet prescriptions for medical conditions are not. The exact boundary is set by your insurer, awarding body and national register, so check theirs."
    },
    {
     "t": "table",
     "title": "Nutrition tasks by zone (our framing)",
     "head": [
      "Task",
      "Zone"
     ],
     "rows": [
      [
       "Share general guidance such as a protein range from published research",
       "Coach"
      ],
      [
       "Help a healthy client plan meals around their preferences",
       "Coach"
      ],
      [
       "Advise a client with diabetes on carbohydrate timing and medication",
       "Adapt and check"
      ],
      [
       "Prescribe a diet for kidney disease or an eating disorder",
       "Refer out"
      ]
     ],
     "src": "Our framing, consistent with the scope model in Module 1"
    },
    {
     "t": "p",
     "x": "Protein advice has extra cautions: the trials excluded people who were cutting calories and people who were not healthy. {{morton2018}}"
    },
    {
     "t": "p",
     "x": "Do not guess about kidney disease, pregnancy or eating disorders; refer to a dietitian or doctor. This is our professional rule."
    },
    {
     "t": "h",
     "x": "Good practice"
    },
    {
     "t": "ul",
     "i": [
      "Cite the research and its limits ('studies suggest about 1.6 g/kg a day').",
      "Ask what the client already eats before suggesting changes.",
      "Ask permission before giving advice (autonomy support). {{ng2012}}"
     ]
    },
    {
     "t": "callout",
     "k": "key",
     "x": "Share information, not prescriptions; refer when health conditions are involved."
    },
    {
     "t": "example",
     "title": "Worked example: a scope decision (illustrative)",
     "steps": [
      "Client A: healthy, 65 kg, vegetarian, wants to build muscle. You can share the research range: 1.6 x 65 = 104 g a day, and help pick vegetarian sources.",
      "Client B: reports a kidney condition and asks you to set their protein. This is outside scope.",
      "You thank them, explain why you cannot advise, and ask their doctor or dietitian for the limit, then train around it."
     ]
    },
    {
     "t": "activity",
     "x": "Draft a two-sentence script you would say to a client who asks for a diet plan for a medical condition."
    },
    {
     "t": "check",
     "q": "A client with a kidney condition asks how much protein to eat. What is the right response?",
     "o": [
      "Give them 2 g/kg",
      "Refer them to their doctor or dietitian",
      "Tell them to ignore it",
      "Cut calories"
     ],
     "a": 1,
     "w": "Medical diet prescription is outside a trainer's scope; the protein research excluded unwell participants. {{morton2018}}"
    },
    {
     "t": "check",
     "q": "Which is within the typical trainer scope?",
     "o": [
      "Writing a clinical diet",
      "Sharing a published protein range and its limits",
      "Diagnosing an eating disorder",
      "Adjusting medication"
     ],
     "a": 1,
     "w": "General, evidence-based information is typically in scope; check your own register's rules."
    },
    {
     "t": "take",
     "i": [
      "Share information; do not prescribe medical diets.",
      "State limits of the research.",
      "Refer when health conditions are involved."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Older adults, pregnancy, disability and long-term conditions",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "The WHO gives specific advice for groups that need adapting. {{who2020}}"
    },
    {
     "t": "h",
     "x": "Older adults (65+)"
    },
    {
     "t": "p",
     "x": "Older adults should do varied multicomponent activity at moderate or greater intensity on 3 or more days a week. {{who2020}}"
    },
    {
     "t": "p",
     "x": "This means balance, strength, endurance, gait and function training, to improve capacity and prevent falls. {{who2020}}"
    },
    {
     "t": "p",
     "x": "The recommendation now applies to all older adults, not only those with poor mobility. {{who2020}}"
    },
    {
     "t": "h",
     "x": "Pregnant and postpartum women"
    },
    {
     "t": "p",
     "x": "Regular strength training is recommended for pregnant and postpartum women. {{who2020}}"
    },
    {
     "t": "p",
     "x": "Evidence showed reduced gestational weight gain and a lower risk of gestational diabetes in women with overweight or obesity. {{who2020}}"
    },
    {
     "t": "h",
     "x": "Chronic conditions and disability"
    },
    {
     "t": "p",
     "x": "Physical activity is considered safe and beneficial for adults with the chronic conditions reviewed, if there are no contraindications. {{who2020}}"
    },
    {
     "t": "p",
     "x": "Adults with disability may need to consult a healthcare professional or specialist to choose the type and amount. {{who2020}}"
    },
    {
     "t": "p",
     "x": "Wheelchair users and people with low mobility can reduce sedentary time with seated activity. {{who2020}}"
    },
    {
     "t": "table",
     "title": "Quick reference",
     "head": [
      "Group",
      "Key advice",
      "Coach move"
     ],
     "rows": [
      [
       "Older adults",
       "Multicomponent, 3+ days {{who2020}}",
       "Add balance and function to strength work"
      ],
      [
       "Pregnant or postpartum",
       "Include strength training {{who2020}}",
       "Get clearance from the midwife or doctor; keep intensity guided by comfort (our note)"
      ],
      [
       "Chronic condition",
       "Safe if no contraindications {{who2020}}",
       "Ask for medical clearance (Module 2)"
      ],
      [
       "Disability",
       "Specialist input may be needed {{who2020}}",
       "Adapt exercises; use seated options"
      ]
     ],
     "src": "{{who2020}}; coach moves partly our framing"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "These WHO statements are population guidance. They are not a substitute for an individual clearance from the client's own clinician."
    },
    {
     "t": "example",
     "title": "Worked example: older client, week 1 (illustrative)",
     "steps": [
      "Client 72, no disease, no symptoms, inactive. Algorithm: begin light to moderate. {{whitfield2017}}",
      "Three 40-minute sessions: 10 minutes balance, 20 minutes strength with chair squats and wall presses, 10 minutes walking.",
      "Three days meets the WHO multicomponent target. {{who2020}}"
     ]
    },
    {
     "t": "activity",
     "x": "Choose one group above. Write three adaptations you would make to the Day A template from Module 5."
    },
    {
     "t": "check",
     "q": "What does the WHO recommend for older adults?",
     "o": [
      "No strength work",
      "Varied multicomponent activity on 3 or more days a week",
      "Vigorous running daily",
      "Rest"
     ],
     "a": 1,
     "w": "Multicomponent activity at moderate or greater intensity on 3 or more days a week. {{who2020}}"
    },
    {
     "t": "check",
     "q": "A client with a long-term condition and no symptoms wants to start. What is the best step?",
     "o": [
      "Start vigorous exercise",
      "Check the screening algorithm and obtain clearance as indicated",
      "Skip screening",
      "Refuse"
     ],
     "a": 1,
     "w": "Known disease in an inactive client requires clearance before exercise of any intensity under the algorithm. {{whitfield2017}}"
    },
    {
     "t": "take",
     "i": [
      "Older adults: multicomponent work on 3+ days.",
      "Pregnant and postpartum clients should include strength training.",
      "Clearance and adaptation are the rule for conditions."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Hans Selye",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "The sources are the biography and encyclopaedia entries used in module 4 and the 2024 review of physical activity research. None of them is about training special populations, so this lesson stays at the level of the idea and leaves the rules to the module's own guidance. {{pmc-selye}} {{brit-gas}} {{ding24}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Use his definition. Stress is the nonspecific response of the body to any demand, so work, caring, illness and sleep loss count alongside training. {{pmc-selye}}",
      "Keep acute and chronic apart. He distinguished acute stress from the total response to chronically applied stressors. {{pmc-selye}}",
      "Remember the end of the sequence. If a demand persists, alarm gives way to resistance and then exhaustion. {{brit-gas}}",
      "Note a modern caution. The 2024 review says activity can be done out of necessity in demanding work with too little recovery, and that more activity may be unobtainable for people fighting fatigue from a major or debilitating condition. {{ding24}}",
      "List the demands, not just the session. Illness, poor sleep, heat, pregnancy, older age or a long-term condition add others. That link to Selye's idea is our reading.",
      "Stay inside your scope. Follow this module's guidance, work with the client's clinician where needed, and refer on."
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "This is not medical advice. Selye's work does not tell you what a pregnant client or a client with a condition can do. Follow this module's guidance and refer on. {{pmc-selye}}"
    },
    {
     "t": "table",
     "title": "Demands that add to a training session (the right column is our adaptation)",
     "head": [
      "Demand",
      "Why it counts",
      "Coach's step"
     ],
     "rows": [
      [
       "Heavy work or caring",
       "Activity and effort at work without enough recovery",
       "Ask about the week, not just the session"
      ],
      [
       "Poor sleep or illness",
       "Any demand on the body counts",
       "Hold or lighten the session"
      ],
      [
       "A long-term condition",
       "Fatigue may limit what is possible",
       "Work with the clinician; refer on"
      ],
      [
       "Nutrition",
       "Fuel for recovery",
       "Stay in scope; refer to a dietitian or doctor"
      ],
      [
       "The session itself",
       "One more demand",
       "Size it to the rest of the week"
      ]
     ],
     "src": "The first two columns follow the sources where cited; the last column is our adaptation. {{ding24}} {{pmc-selye}}"
    },
    {
     "t": "h",
     "x": "Worked example: a total-demand check (illustrative, our reading)"
    },
    {
     "t": "example",
     "title": "Rating the week",
     "steps": [
      "List all demands on the client this week: sessions, work, caring, sleep, illness and any condition.",
      "Rate each as light, moderate or heavy, in the client's own view.",
      "If several are heavy, plan a lighter session or an extra rest day, and say why.",
      "Check nutrition within your scope and refer to a dietitian or doctor for anything beyond it.",
      "Review with the client at the next session."
     ]
    },
    {
     "t": "h",
     "x": "Worked example: scoring the week (invented scale)"
    },
    {
     "t": "example",
     "title": "A simple tally",
     "steps": [
      "Score light = 1, moderate = 2, heavy = 3. A client rates work 3, caring 2, sleep 3, training 2 and no illness 0.",
      "The total is 3 + 2 + 3 + 2 + 0 = 10 out of a possible 15 for five items, or 67%.",
      "Set your own rule before you use it, such as a lighter session when the total passes 60% with two heavy items. The rule is ours, not Selye's.",
      "Re-score after the lighter session and note whether the client felt better."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a total-demand check"
    },
    {
     "t": "ol",
     "i": [
      "List the demands in the client's week.",
      "Rate each in the client's own words.",
      "Decide: go as planned, lighten, or hold.",
      "Note anything that needs a clinician, and refer.",
      "Record the decision and review next session."
     ]
    },
    {
     "t": "activity",
     "x": "Run a total-demand check with a real or imagined client and write the decision and the reason."
    },
    {
     "t": "check",
     "q": "Why does a session count as one demand among many?",
     "o": [
      "Selye counted any demand on the body as stress",
      "Sessions are always light",
      "It does not",
      "Only illness counts"
     ],
     "a": 0,
     "w": "Selye defined stress as the response to any demand. {{pmc-selye}}"
    },
    {
     "t": "check",
     "q": "What does the 2024 review say about people fighting fatigue from a condition?",
     "o": [
      "They should do more",
      "More activity may be unobtainable for them",
      "They should stop all activity",
      "Nothing"
     ],
     "a": 1,
     "w": "It says more activity may be unobtainable when battling fatigue from a debilitating condition. {{ding24}}"
    },
    {
     "t": "check",
     "q": "A client has two heavy demands this week and poor sleep. What is a sensible step?",
     "o": [
      "Raise the load",
      "Lighten the session and say why",
      "Cancel without a word",
      "Ignore it"
     ],
     "a": 1,
     "w": "Total demand is high, so a lighter session fits the idea."
    },
    {
     "t": "take",
     "i": [
      "Count every demand, not just the session. {{pmc-selye}}",
      "Lighten when total demand is high.",
      "Refer when a condition is beyond your scope."
     ]
    }
   ]
  }
 ]
};
