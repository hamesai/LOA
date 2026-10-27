/* Investing fundamentals (UK) (module 4). Block types: _template/TEMPLATE.md. */
/* __EXPANDED__ 17/10/2026: core lessons deepened and a practice lesson added to reach the 3 hour module standard. */
(window.COURSE = window.COURSE || {})["investing-4"] = {
 "intro": "Diversification spreads your money across things that do not all fall at the same time. Markowitz gave the idea a mathematical form, and you can use the plain version today. Lecturer lens: Markowitz showed in 1952 that the risk of a portfolio depends on how its holdings move together, not only on each one alone. This lesson uses that point to check your own split.",
 "outcomes": [
  "Explain diversification and what it can and cannot do.",
  "Describe Markowitz's trade-off between risk and return in plain terms.",
  "Write a simple portfolio description you can explain and review.",
  "Lecturer's method: Explain how holdings that move apart reduce portfolio risk, and write a portfolio you can defend."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Diversification in plain terms",
   "min": 23,
   "blocks": [
    {
     "t": "p",
     "x": "Diversification means choosing different kinds of investment that do not rely on the same things to do well at the same time. {{fca-diversification}}"
    },
    {
     "t": "p",
     "x": "The FCA's version of the old saying is that you should not put all your eggs in one basket. {{fca-diversification}}"
    },
    {
     "t": "h",
     "x": "Three levels of spreading"
    },
    {
     "t": "ol",
     "i": [
      "One company: a single share holds all your risk.",
      "A basket of shares: a fund or index tracker spreads the risk across many companies.",
      "Full diversification: shares, bonds and other assets, across several countries. {{fca-diversification}}"
     ]
    },
    {
     "t": "p",
     "x": "Each step smooths out the ride, though none removes risk. {{fca-diversification}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Diversification does not stop losses in a market-wide fall. In a broad fall, many assets can drop together."
    },
    {
     "t": "p",
     "x": "Diversification can work well and help you sleep more easily, even if it does not win every year. {{fca-diversification}}"
    },
    {
     "t": "h",
     "x": "Spreading in more than one direction"
    },
    {
     "t": "p",
     "x": "The FCA describes spreading your money across different investments, markets and types of asset. {{fca-diversification}} Each is a separate way to avoid one failure hurting everything."
    },
    {
     "t": "table",
     "title": "Four ways to spread (our grouping)",
     "head": [
      "Dimension",
      "Concentrated example",
      "Spread example"
     ],
     "rows": [
      [
       "Company",
       "One employer's shares",
       "A fund holding hundreds of companies"
      ],
      [
       "Asset type",
       "All shares",
       "Shares, bonds and cash {{fca-diversification}}"
      ],
      [
       "Place",
       "Only one country's market",
       "Several countries {{fca-diversification}}"
      ],
      [
       "Your own life",
       "Salary and savings both tied to one employer",
       "Savings in holdings unrelated to your job"
      ]
     ],
     "src": "Our grouping, using the spread of investments, markets and asset types described in {{fca-diversification}}"
    },
    {
     "t": "h",
     "x": "Your job counts too"
    },
    {
     "t": "p",
     "x": "Our inference: if you work for a company and also hold a large amount of its shares, a bad year for the firm could cut your income and your savings together. The two risks share a cause, so they do not offset each other."
    },
    {
     "t": "h",
     "x": "Seeing diversification in numbers"
    },
    {
     "t": "example",
     "title": "Worked example: two holdings that move apart (illustrative)",
     "steps": [
      "Illustrative: over four years, Holding X returns +20%, −10%, +15% and −5%. Holding Y returns −5%, +12%, −8% and +10%.",
      "Holding X on its own ranges from -10% to +20%. Holding Y ranges from -8% to +12%.",
      "A 50/50 mix returns +7.5%, +1.0%, +3.5%, +2.5% in the four years.",
      "The mix ranges from 1.0% to +7.5%, a much narrower band than either holding alone.",
      "Average returns: X 5.00%, Y 2.25%, mix 3.63%.",
      "Our arithmetic: the mix earns the average of the two but with a steadier path. That is the benefit the next lesson explains."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The figures are invented, and holdings that moved apart in the past may move together in a future crisis. Diversification reduces risk; it does not remove it. {{fca-diversification}}"
    },
    {
     "t": "terms",
     "i": [
      [
       "Diversification",
       "Spreading investments so that one holding does not decide the outcome."
      ],
      [
       "Index tracker",
       "A fund that aims to copy the performance of a market index."
      ],
      [
       "Sector",
       "A group of companies in the same line of business, such as banks or energy."
      ]
     ]
    },
    {
     "t": "check",
     "q": "Which of these best describes diversification?",
     "o": [
      "Putting all your savings in your best idea",
      "Spreading money across investments that do not rely on the same things",
      "Choosing only shares from one country",
      "Avoiding all risk"
     ],
     "a": 1,
     "w": "The FCA describes it as spreading across different investments that do not all rely on the same things. {{fca-diversification}}"
    },
    {
     "t": "check",
     "q": "Which of these is a higher level of diversification than holding one company?",
     "o": [
      "A second share in the same sector",
      "A fund spreading money across many companies and markets",
      "More money in the same share",
      "Borrowing to buy more"
     ],
     "a": 1,
     "w": "The FCA describes funds as a way to spread across many holdings and markets. {{fca-diversification}}"
    },
    {
     "t": "check",
     "q": "You own shares in your employer, and your job is also at risk if the firm struggles. What is the problem?",
     "o": [
      "None",
      "Your income and savings are exposed to the same risk",
      "The shares pay no dividend",
      "Bonds are safer than jobs"
     ],
     "a": 1,
     "w": "Both depend on the same company, so they tend to fall together. Our inference, based on the idea of spreading risk. {{fca-diversification}}"
    },
    {
     "t": "take",
     "i": [
      "Spreading reduces the damage from any single holding.",
      "It cannot remove the risk of a broad market fall. {{fca-diversification}}",
      "The first step is a basket, not a single company. {{fca-diversification}}"
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Markowitz: risk, return and correlation",
   "min": 25,
   "blocks": [
    {
     "t": "p",
     "x": "Harry Markowitz's 1952 paper 'Portfolio Selection' divides choosing a portfolio into two stages: forming beliefs about how securities will perform, and choosing a portfolio from those beliefs. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "The paper is about the second stage only. {{markowitz-1952}}"
    },
    {
     "t": "h",
     "x": "Why maximising expected return fails"
    },
    {
     "t": "p",
     "x": "Markowitz first rejects the rule that an investor should maximise expected return, because that rule never implies that a diversified portfolio is better than every undiversified one. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "Diversification is both observed and sensible, he argues, so a rule that cannot explain it must be rejected. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "He also rejects the idea that the law of large numbers removes risk, because the returns from securities are too intercorrelated, and diversification cannot eliminate all variance. {{markowitz-1952}}"
    },
    {
     "t": "h",
     "x": "The expected return and variance rule"
    },
    {
     "t": "p",
     "x": "His alternative treats expected return as desirable and variance of return as undesirable. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "An efficient portfolio has the lowest variance for a given expected return, or the highest expected return for a given variance. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "There is a rate at which an investor can gain expected return by taking on variance, or reduce variance by giving up expected return. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "The paper speaks of efficient portfolios; the label 'efficient frontier' came later. {{wikip-markowitz}}"
    },
    {
     "t": "h",
     "x": "What counts as diversification"
    },
    {
     "t": "p",
     "x": "Holding many securities is not enough. Markowitz says it is necessary to avoid securities with high covariances among themselves. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "His example is that sixty railway securities would be less well diversified than a portfolio with some railways, some utilities, some mining and various manufacturing, because firms in different industries tend to have lower covariances than firms within one industry. {{markowitz-1952}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "We read the paper through a fetched PDF copy, working from the passages on the argument and on diversification. Markowitz says he presents the three and four security cases geometrically, assumes fixed probability beliefs, and plans a fuller mathematical treatment later, so treat his results as a first statement. {{markowitz-1952}}"
    },
    {
     "t": "table",
     "title": "Two holdings, moving together or apart (illustrative)",
     "head": [
      "Case",
      "What happens when one falls",
      "What it does to the portfolio"
     ],
     "rows": [
      [
       "Holdings move together",
       "The other usually falls too",
       "Little reduction in risk"
      ],
      [
       "Holdings move apart",
       "The other may hold steady or rise",
       "Greater reduction in risk for the same return"
      ]
     ],
     "src": "Our illustration of the covariance point in {{markowitz-1952}}"
    },
    {
     "t": "h",
     "x": "The effect of correlation, in numbers"
    },
    {
     "t": "p",
     "x": "Correlation measures how closely two holdings move together, from +1 (in step) to −1 (opposite). Markowitz's point was that the risk of the mix depends on how the holdings move together, not only on how risky each is. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "The standard formula for the spread of a two-holding mix is our own arithmetic here, built on that covariance idea. We did not work through the paper's mathematics."
    },
    {
     "t": "example",
     "title": "Worked example: a 50/50 mix of two holdings (illustrative)",
     "steps": [
      "Illustrative: Holding 1 has a spread of 20 points a year, Holding 2 has 10 points, and each is half the portfolio.",
      "If they move perfectly together (correlation +1), the mix has a spread of 15.0 points, the simple average. No benefit.",
      "At correlation +0.5, the spread is 13.2 points.",
      "At correlation 0, it is 11.2 points.",
      "At correlation −0.5, it is 8.7 points.",
      "Our arithmetic: the lower the correlation, the more the mix's spread falls below the simple average of 15 points."
     ]
    },
    {
     "t": "table",
     "title": "Spread of a 50/50 mix at different correlations (illustrative)",
     "head": [
      "Correlation",
      "Spread of the mix (points)",
      "Reduction against the simple average of 15"
     ],
     "rows": [
      [
       "1.0",
       "15.0",
       "0.0"
      ],
      [
       "0.5",
       "13.2",
       "1.8"
      ],
      [
       "0.0",
       "11.2",
       "3.8"
      ],
      [
       "-0.5",
       "8.7",
       "6.3"
      ]
     ],
     "src": "Our arithmetic from the stated spreads of 20 and 10 points. Variance of a two-holding mix = w1²s1² + w2²s2² + 2·w1·w2·ρ·s1·s2."
    },
    {
     "t": "h",
     "x": "What Markowitz asked of an investor"
    },
    {
     "t": "p",
     "x": "He asks the investor to choose among efficient portfolios, those with the lowest variance for a given expected return, or the highest expected return for a given variance. {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "Our inference: for a beginner this becomes two plain questions. Given the return I want, am I taking more swings than I need? Given the swings I can stand, am I leaving return behind?"
    },
    {
     "t": "terms",
     "i": [
      [
       "Efficient frontier",
       "The later name for the set of efficient portfolios, which have the lowest variance for their expected return."
      ],
      [
       "Correlation",
       "How closely two investments move together, from −1 to +1."
      ],
      [
       "Correlation",
       "A measure of how closely two holdings move together, from −1 to +1."
      ]
     ]
    },
    {
     "t": "check",
     "q": "Markowitz's central point is that portfolio risk depends on:",
     "o": [
      "Only the riskiest holding",
      "How the holdings move together",
      "The number of pages in the report",
      "The fee of the broker alone"
     ],
     "a": 1,
     "w": "The principle is that how holdings move together drives portfolio risk. Our summary of the paper's diversification argument. {{markowitz-1952}}"
    },
    {
     "t": "check",
     "q": "What does a low correlation between two holdings suggest?",
     "o": [
      "They often move together",
      "They tend to move differently",
      "They have the same fee",
      "They are the same fund"
     ],
     "a": 1,
     "w": "Low correlation means they do not move closely together, which can lower portfolio risk. {{markowitz-1952}}"
    },
    {
     "t": "check",
     "q": "In the worked example, which correlation gives the biggest reduction in the mix's spread?",
     "o": [
      "+1",
      "+0.5",
      "0",
      "−0.5"
     ],
     "a": 3,
     "w": "The lower the correlation, the smaller the spread of the mix. At −0.5 it is about 8.7 points against 15 at +1. Our arithmetic."
    },
    {
     "t": "take",
     "i": [
      "Holdings that do not move together reduce risk.",
      "Efficient portfolios have the lowest variance for their expected return. {{markowitz-1952}}",
      "His first statement assumed fixed beliefs and left a general treatment for later. {{markowitz-1952}}"
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Building a simple portfolio you can explain",
   "min": 25,
   "blocks": [
    {
     "t": "p",
     "x": "A portfolio is the collection of all the assets you own. {{mh-beginners}}"
    },
    {
     "t": "p",
     "x": "A simple portfolio should be one you can describe in a sentence, and one you could keep through a bad year."
    },
    {
     "t": "h",
     "x": "Steps to build one"
    },
    {
     "t": "ol",
     "i": [
      "Write your goal, your time horizon and your risk limit.",
      "Set your emergency fund aside first. {{mh-beginners}}",
      "Limit high-risk holdings to about 10% of net assets. {{fca-risk}}",
      "Split the rest across asset classes, with a broad fund for each main slice. {{fca-diversification}}",
      "Check the total fee, and write down what would make you change the plan."
     ]
    },
    {
     "t": "example",
     "title": "Worked example: a split for a £5,000 pot (illustrative, not advice)",
     "steps": [
      "Illustrative: you have £5,000 to invest for at least five years, after your emergency fund is in place.",
      "Suppose you choose 60% global shares funds, 30% bond funds and 10% cash: £3,000, £1,500 and £500.",
      "Our inference: the bond and cash slices steady the ride; the share slice carries most of the growth and most of the risk.",
      "This split is an example to study, not a recommendation for you."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "This is not personal financial advice. The FCA says to get regulated advice before any big decision. Check your own position first."
    },
    {
     "t": "activity",
     "x": "Write one sentence that describes your portfolio, and one sentence that says when you would review it."
    },
    {
     "t": "h",
     "x": "Three temperaments, three splits"
    },
    {
     "t": "p",
     "x": "There is no single right split. The split should match your goal, horizon and tolerance. The table shows three illustrative splits and what a bad year could do to each."
    },
    {
     "t": "table",
     "title": "Three illustrative splits and a stressed year",
     "head": [
      "Style",
      "Shares",
      "Bonds",
      "Cash",
      "Fall in a year when shares drop 40% and bonds drop 10%"
     ],
     "rows": [
      [
       "Cautious",
       "20%",
       "60%",
       "20%",
       "14.0%"
      ],
      [
       "Balanced",
       "60%",
       "30%",
       "10%",
       "27.0%"
      ],
      [
       "Growth",
       "80%",
       "15%",
       "5%",
       "33.5%"
      ]
     ],
     "src": "Our arithmetic from assumed falls of 40% in shares and 10% in bonds, with cash unchanged. Illustrative only, not a forecast."
    },
    {
     "t": "example",
     "title": "Worked example: the Balanced split on £5,000 in a bad year (illustrative)",
     "steps": [
      "Illustrative: £5,000 split 60% shares, 30% bonds, 10% cash is £3,000, £1,500 and £500.",
      "A 40% share fall takes £3,000 to £1,800, a loss of £1,200.",
      "A 10% bond fall takes £1,500 to £1,350, a loss of £150.",
      "Cash stays at £500. The total is £1,800 + £1,350 + £500 = £3,650, a fall of 27.0%.",
      "Our inference: if a fall of that size would make you sell, choose a split with less in shares, not a split you will abandon."
     ]
    },
    {
     "t": "h",
     "x": "Keeping it simple"
    },
    {
     "t": "ul",
     "i": [
      "Fewer, broader funds are easier to understand and review than many narrow ones.",
      "Write the split down with the date and your reason for it.",
      "If you cannot explain a holding in one sentence, ask whether you need it."
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "These splits are teaching examples, not recommendations. The FCA's advice is to consider regulated advice before big decisions. {{fca-risk}}"
    },
    {
     "t": "check",
     "q": "Why is a split across asset classes a useful start?",
     "o": [
      "It removes all risk",
      "It spreads risk across holdings that behave differently",
      "It guarantees a return",
      "It avoids the need for a goal"
     ],
     "a": 1,
     "w": "A split spreads risk across different holdings. It does not guarantee a return. {{fca-diversification}}"
    },
    {
     "t": "check",
     "q": "Apply a 60/30/10 split to £5,000. What is the bond slice if bonds are 30%?",
     "o": [
      "£500",
      "£1,500",
      "£3,000",
      "£750"
     ],
     "a": 1,
     "w": "30% of £5,000 is £1,500."
    },
    {
     "t": "check",
     "q": "The Balanced split above falls about 27% when shares drop 40% and bonds drop 10%. What is the main lesson?",
     "o": [
      "Bonds cannot fall",
      "A split with less in shares falls less in a bad year",
      "Cash is risky",
      "Balanced splits never lose money"
     ],
     "a": 1,
     "w": "Each slice falls by a different amount, so the total depends on the split. Our arithmetic."
    },
    {
     "t": "take",
     "i": [
      "Write the plan before you invest.",
      "Keep the emergency fund separate from investments. {{mh-beginners}}",
      "A plan you can explain is a plan you are more likely to keep."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Rebalancing and reviewing: keeping a plan on course",
   "min": 18,
   "blocks": [
    {
     "t": "p",
     "x": "A portfolio you set up once will not stay as you set it. Holdings rise and fall at different rates, so the mix drifts away from your plan."
    },
    {
     "t": "p",
     "x": "This lesson explains drift, shows one way to correct it, and sets out how to review a plan without reacting to every headline."
    },
    {
     "t": "h",
     "x": "What drift looks like"
    },
    {
     "t": "p",
     "x": "Suppose you begin with £5,000 split 60% shares, 30% bonds and 10% cash, which is £3,000, £1,500 and £500."
    },
    {
     "t": "example",
     "title": "Worked example: a year of drift (illustrative)",
     "steps": [
      "Illustrative: shares rise 20% in a year while bonds and cash are unchanged.",
      "Shares become £3,000 × 1.20 = £3,600. Bonds stay at £1,500 and cash at £500, so the total is £5,600.",
      "Shares are now £3,600 ÷ £5,600, about 64.3% of the portfolio, against a target of 60%.",
      "Our inference: you now hold more risk than you chose, without making any decision."
     ]
    },
    {
     "t": "h",
     "x": "Rebalancing back to the plan"
    },
    {
     "t": "p",
     "x": "Rebalancing means moving money so that the mix returns to its target. It is a general practice, and the sources we read for this course do not prescribe it, so treat the method here as our own illustration."
    },
    {
     "t": "example",
     "title": "Worked example: moving back to 60/30/10 (illustrative)",
     "steps": [
      "The new total is £5,600, so the targets are 60% = £3,360, 30% = £1,680 and 10% = £560.",
      "Shares are £3,600, so £240 is moved out of shares.",
      "Bonds need £180 more and cash needs £60 more, which uses the £240.",
      "Our arithmetic: no new money is needed, and the portfolio returns to the chosen split."
     ]
    },
    {
     "t": "p",
     "x": "One alternative is to direct new payments toward the holdings that have fallen behind, so that you rebalance without selling. This can avoid charges and tax, but it works only if you are adding money regularly."
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Selling holdings outside an ISA can create a taxable gain once your gains exceed the annual exempt amount, so check the tax effect before you rebalance. {{gov-cgt}}"
    },
    {
     "t": "h",
     "x": "How often to review"
    },
    {
     "t": "p",
     "x": "There is no sourced rule for the right frequency, so choose a schedule you will keep and write it into the plan. Many people review once or twice a year, and after a big change in their own life."
    },
    {
     "t": "table",
     "title": "Two kinds of review trigger (our suggestion)",
     "head": [
      "Trigger type",
      "Example",
      "Why it works"
     ],
     "rows": [
      [
       "Calendar",
       "Every 6 or 12 months",
       "It stops you reacting to every news story"
      ],
      [
       "Threshold",
       "A holding drifts more than 5 percentage points from its target",
       "It reacts to size, not to time"
      ],
      [
       "Life event",
       "New job, a child, a purchase, loss of income",
       "Your goal or capacity has changed"
      ]
     ],
     "src": "Our suggestion, labelled as such"
    },
    {
     "t": "h",
     "x": "What a review should ask"
    },
    {
     "t": "ol",
     "i": [
      "Has my goal, timing or income changed?",
      "Is my emergency fund still large enough for my spending?",
      "Has any holding drifted far from its target?",
      "Have the charges changed? {{mh-beginners}}",
      "Do I still understand and trust every holding, and has any firm raised a warning on the FCA Warning List? {{fca-scams}}"
     ]
    },
    {
     "t": "p",
     "x": "Notice what is not on the list: whether last year's winner will win again. Markowitz's argument concerns how holdings move together, and Bachelier began from the impossibility of forecasting, so neither points toward chasing recent performance (our inference). {{markowitz-1952}} {{bachelier-1900}}"
    },
    {
     "t": "p",
     "x": "Our inference is that the aim of a review is to check the plan against your life, not the market against your hopes."
    },
    {
     "t": "h",
     "x": "A short note on overlap"
    },
    {
     "t": "p",
     "x": "Two funds with different names can hold many of the same companies. If you own both, your real spread is narrower than the number of funds suggests."
    },
    {
     "t": "p",
     "x": "The check is simple: open each fund's document, read the list of its largest holdings, and compare. Markowitz's point was that what matters is how holdings behave together, since many securities with high covariances among themselves do not diversify well, so overlapping funds add cost and complexity without adding much protection (our inference). {{markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "Our inference is that a plan with three funds that each cover different things is often easier to understand and review than a plan with eight funds that overlap."
    },
    {
     "t": "terms",
     "i": [
      [
       "Drift",
       "The slow change in a portfolio's mix as holdings rise and fall at different rates."
      ],
      [
       "Rebalancing",
       "Moving money so the mix returns to its target."
      ]
     ]
    },
    {
     "t": "check",
     "q": "Shares rise 20% in a portfolio that started 60% shares, 30% bonds and 10% cash at £5,000. About what share are they now?",
     "o": [
      "60%",
      "About 64.3%",
      "About 70%",
      "50%"
     ],
     "a": 1,
     "w": "£3,600 ÷ £5,600 is about 64.3%. This is our arithmetic."
    },
    {
     "t": "check",
     "q": "Which of these is a good reason for an unscheduled review?",
     "o": [
      "A friend says a fund is hot",
      "A change in your income or goal",
      "A headline about the market",
      "The weather"
     ],
     "a": 1,
     "w": "A change in your own circumstances changes the goal or capacity the plan was built on. This is our inference."
    },
    {
     "t": "take",
     "i": [
      "Portfolios drift, so write down how and when you will check.",
      "Rebalancing can use new money or sales, and sales outside an ISA can have tax effects. {{gov-cgt}}",
      "Review against your life, not against recent winners."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "Practice: audit a portfolio",
   "min": 26,
   "blocks": [
    {
     "t": "p",
     "x": "An audit asks what you really own, and whether it matches your plan. You will audit an invented portfolio, then your own."
    },
    {
     "t": "h",
     "x": "The audit steps"
    },
    {
     "t": "ol",
     "i": [
      "List every holding with its value.",
      "Group them by asset type, country and industry.",
      "Look for overlap: two funds that hold the same companies are one bet, not two.",
      "Check the share of the total in the largest holding.",
      "Compare the result with your written split and risk limit. {{fca-risk}}"
     ]
    },
    {
     "t": "example",
     "title": "Worked case: Maya's £20,000 (illustrative)",
     "steps": [
      "Illustrative: Maya holds £6,000 in her employer's shares, £4,000 in a UK share fund, £4,000 in a global share fund that includes her employer, £3,000 in a bond fund and £3,000 in cash.",
      "Shares are £6,000 + £4,000 + £4,000 = £14,000, which is 70% of the total.",
      "Her employer is the largest holding at £6,000, which is 30% of the portfolio before counting the global fund's small share of it.",
      "The FCA's 10% rule of thumb is for high-risk investments. {{fca-diversification}} Our inference: one company's shares can count as high risk, and her employer holding is 30%, three times that figure on a portfolio basis.",
      "Our inference: Maya's portfolio is less spread than its five holdings suggest, because 70% sits in shares and the largest holding is her employer."
     ]
    },
    {
     "t": "table",
     "title": "Maya's holdings grouped (illustrative)",
     "head": [
      "Holding",
      "Value",
      "Share of total",
      "Type"
     ],
     "rows": [
      [
       "Employer shares",
       "£6,000",
       "30%",
       "Single company"
      ],
      [
       "UK share fund",
       "£4,000",
       "20%",
       "Shares, UK"
      ],
      [
       "Global share fund",
       "£4,000",
       "20%",
       "Shares, global"
      ],
      [
       "Bond fund",
       "£3,000",
       "15%",
       "Bonds"
      ],
      [
       "Cash",
       "£3,000",
       "15%",
       "Cash"
      ]
     ],
     "src": "Our illustrative case. Percentages are of £20,000."
    },
    {
     "t": "h",
     "x": "Fixing it"
    },
    {
     "t": "ul",
     "i": [
      "Reduce the employer holding step by step, remembering that selling outside an ISA can create a gain, as module 5 explains.",
      "Choose one global share fund rather than two overlapping ones.",
      "Match the final split to her goal, horizon and tolerance."
     ]
    },
    {
     "t": "activity",
     "x": "Audit a real or invented portfolio of at least five holdings. Produce the grouped table and write three sentences on what you would change."
    },
    {
     "t": "check",
     "q": "Maya has £6,000 in her employer's shares out of £20,000. What share of her portfolio is that?",
     "o": [
      "6%",
      "20%",
      "30%",
      "60%"
     ],
     "a": 2,
     "w": "£6,000 ÷ £20,000 is 30%. Our arithmetic."
    },
    {
     "t": "check",
     "q": "Why might two share funds be one bet rather than two?",
     "o": [
      "They always have the same name",
      "They can hold many of the same companies",
      "Funds cannot overlap",
      "Fees make them identical"
     ],
     "a": 1,
     "w": "If the funds hold the same companies, they move together and the spread is less than it looks. Our inference. {{fca-diversification}}"
    },
    {
     "t": "check",
     "q": "What is the first step of an audit?",
     "o": [
      "Sell everything",
      "List every holding with its value",
      "Pick new funds",
      "Check the news"
     ],
     "a": 1,
     "w": "You cannot assess what you have not listed. Our method."
    },
    {
     "t": "take",
     "i": [
      "Count what you own by company, type, place and your own job.",
      "Overlap makes a portfolio less spread than it looks. Our inference.",
      "Compare the result with a written plan and a risk limit. {{fca-risk}}"
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Harry Markowitz",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "Markowitz's 1952 paper 'Portfolio Selection' rejects the rule of maximising expected return because it never implies diversification, and proposes instead that investors treat expected return as desirable and variance of return as undesirable. {{lec-markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "He says diversification cannot eliminate all variance, because returns from securities are too intercorrelated, and that it is necessary to avoid securities with high covariances among themselves. {{lec-markowitz-1952}}"
    },
    {
     "t": "p",
     "x": "We read the argument and the diversification passages through a fetched PDF copy, not every page. His geometric figures were not worked through."
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Name the holdings in your portfolio, and say what each one depends on. {{lec-markowitz-1952}}",
      "Ask whether two holdings are likely to fall together in a bad year.",
      "Check that no single holding has more risk than you can bear. {{lec-fca-risk}}",
      "Write one reason for each holding, and one trigger for changing the split."
     ]
    },
    {
     "t": "table",
     "title": "Holdings and how they move (illustrative)",
     "head": [
      "Pair",
      "Likely behaviour",
      "Effect on risk"
     ],
     "rows": [
      [
       "Two shares in the same sector",
       "Often fall together",
       "Little reduction"
      ],
      [
       "Shares and government bonds",
       "Often move differently",
       "Potentially more reduction"
      ]
     ],
     "src": "Our illustration of the covariance point in {{lec-markowitz-1952}}"
    },
    {
     "t": "h",
     "x": "Check the efficient frontier idea (illustrative)"
    },
    {
     "t": "example",
     "title": "Illustrative: two portfolios offer the same expected return.",
     "steps": [
      "The one with the lower risk is nearer the frontier.",
      "Our inference: choose the lower-risk option for the same return."
     ]
    },
    {
     "t": "h",
     "x": "Review your split"
    },
    {
     "t": "ol",
     "i": [
      "List your holdings and their rough share of the pot.",
      "Mark any two that tend to move together.",
      "Note whether any single holding is too large to bear."
     ]
    },
    {
     "t": "activity",
     "x": "Write your holdings, the pairs that move together, and one trigger for a review."
    },
    {
     "t": "check",
     "q": "In the paper, what is an efficient portfolio?",
     "o": [
      "The one with the highest possible return",
      "One with the lowest variance for its expected return, or the highest return for its variance",
      "A tax allowance",
      "A type of bond"
     ],
     "a": 1,
     "w": "Efficient portfolios have the lowest variance for a given expected return, or the highest expected return for a given variance. {{lec-markowitz-1952}}"
    },
    {
     "t": "check",
     "q": "Two holdings that tend to fall together give you...",
     "o": [
      "Large risk reduction",
      "Little risk reduction",
      "A guaranteed return",
      "No fees"
     ],
     "a": 1,
     "w": "Holdings with high covariances among themselves do little to lower portfolio risk. {{lec-markowitz-1952}}"
    },
    {
     "t": "take",
     "i": [
      "Risk depends on how holdings move together. {{lec-markowitz-1952}}",
      "Avoid securities with high covariances among themselves. {{lec-markowitz-1952}}",
      "His first statement assumed fixed beliefs and left a general treatment for later."
     ]
    }
   ]
  }
 ]
};
