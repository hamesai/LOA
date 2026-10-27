/* Investing fundamentals (UK) (module 2). Block types: _template/TEMPLATE.md. */
/* __EXPANDED__ 17/10/2026: core lessons deepened and a practice lesson added to reach the 3 hour module standard. */
(window.COURSE = window.COURSE || {})["investing-2"] = {
 "intro": "Returns come from income and from price change. Time and fees decide how much of them you keep. Lecturer lens: Fisher thought in present and future values as a matter of course. This lesson uses his habit of comparing money across time.",
 "outcomes": [
  "List the four sources of investment return.",
  "Calculate compound growth over several years.",
  "Estimate how an annual fee reduces a final sum.",
  "Lecturer's method: Compare the value of a sum over time, and separate the real return from the nominal one."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Where returns come from",
   "min": 22,
   "blocks": [
    {
     "t": "p",
     "x": "A return is the profit you earn from an investment. {{mh-beginners}}"
    },
    {
     "t": "p",
     "x": "Depending on the investment, it can be paid in several ways. {{mh-beginners}}"
    },
    {
     "t": "table",
     "title": "The four sources of return",
     "head": [
      "Source",
      "Where it comes from",
      "Example"
     ],
     "rows": [
      [
       "Dividends",
       "Shares",
       "A company pays part of its profit to shareholders"
      ],
      [
       "Rent",
       "Property",
       "A tenant pays you each month"
      ],
      [
       "Interest",
       "Cash deposits and bonds",
       "A bank or borrower pays you for the use of the money"
      ],
      [
       "Capital gain or loss",
       "Any asset",
       "You sell for more or less than you paid"
      ]
     ],
     "src": "{{mh-beginners}}"
    },
    {
     "t": "p",
     "x": "A capital loss is the same mechanism as a gain, running the other way."
    },
    {
     "t": "callout",
     "k": "key",
     "x": "When you add up a return, include all four sources, and take off the fees. A share that pays no dividend can still grow in value, and a fund that pays dividends can still fall."
    },
    {
     "t": "h",
     "x": "Total return in one line"
    },
    {
     "t": "p",
     "x": "The total return adds the price change and the income, then divides by what you paid. It captures everything the investment did for you in one number."
    },
    {
     "t": "example",
     "title": "Worked example: a share bought at £50 (illustrative)",
     "steps": [
      "Illustrative: you buy a share for £50. A year later it is worth £53, and it paid £1.20 in dividends.",
      "Price change: £53 − £50 = £3.",
      "Income: £1.20.",
      "Total return: (£3 + £1.20) ÷ £50 = 8.4%.",
      "Our arithmetic: looking at the price alone gives 6.0%, and looking at the dividend alone gives 2.4%. Neither is the whole story."
     ]
    },
    {
     "t": "h",
     "x": "Taking income, or reinvesting it"
    },
    {
     "t": "p",
     "x": "Income can be spent or reinvested. Reinvested income buys more of the investment, and that is how compounding gets started. {{mh-beginners}}"
    },
    {
     "t": "p",
     "x": "Our inference: a long-term investor who does not need the income now usually lets it reinvest, while a retiree may choose to take it as spending money."
    },
    {
     "t": "h",
     "x": "Three holdings, three mixes of return"
    },
    {
     "t": "table",
     "title": "How the four sources show up in different holdings (illustrative figures for one year)",
     "head": [
      "Holding",
      "Income",
      "Price change",
      "Total",
      "Where the risk sits"
     ],
     "rows": [
      [
       "Savings account",
       "1.0% interest",
       "0%",
       "1.0%",
       "Mostly inflation, which module 1 covered"
      ],
      [
       "Rented property fund",
       "3.5% rent",
       "+2.0%",
       "5.5%",
       "Price can fall, and rent can stop"
      ],
      [
       "Share fund",
       "2.0% dividends",
       "+6.0%",
       "8.0%",
       "Price swings are large in both directions"
      ]
     ],
     "src": "Our illustrative figures. They are not forecasts and not current market data. Sources of return: {{mh-beginners}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A high income figure is not the same as a high return. A holding can pay 6% in income and lose 10% in price in the same year, leaving a negative total."
    },
    {
     "t": "terms",
     "i": [
      [
       "Dividend",
       "A payment made to shareholders from a company's profit."
      ],
      [
       "Capital gain",
       "The profit when you sell an investment for more than you paid."
      ],
      [
       "Total return",
       "Income plus price change, divided by the amount invested."
      ],
      [
       "Reinvest",
       "Use income to buy more of the same investment instead of spending it."
      ]
     ]
    },
    {
     "t": "check",
     "q": "A fund pays you £40 in dividends, and its price falls by £100 over the year. What is the total return before fees?",
     "o": [
      "£40 profit",
      "£60 loss",
      "£140 loss",
      "£100 profit"
     ],
     "a": 1,
     "w": "The total is £40 income minus £100 price fall, a loss of £60. Returns include income and price change together."
    },
    {
     "t": "check",
     "q": "Which of these is rent a source of return for?",
     "o": [
      "Shares",
      "Property",
      "Cash",
      "Bonds"
     ],
     "a": 1,
     "w": "Rent comes from property. {{mh-beginners}}"
    },
    {
     "t": "check",
     "q": "You pay £200, receive £5 in income and the price rises to £208. What is the total return?",
     "o": [
      "2.5%",
      "4.0%",
      "6.5%",
      "8.0%"
     ],
     "a": 2,
     "w": "Price change £8 plus income £5 is £13, and £13 ÷ £200 is 6.5%. Our arithmetic."
    },
    {
     "t": "take",
     "i": [
      "A return is income plus price change, less costs.",
      "Interest, dividends, rent and capital gains are the four sources. {{mh-beginners}}",
      "A loss in price is part of the return, not a footnote."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Compounding: growth on growth",
   "min": 26,
   "blocks": [
    {
     "t": "p",
     "x": "Compounding means earning a return on the return you have already earned."
    },
    {
     "t": "p",
     "x": "Each year's growth is added to the sum, so the next year grows from a larger base."
    },
    {
     "t": "fig",
     "id": "investing-compound",
     "title": "£1,000 growing at 5% a year",
     "cap": "Illustrative figures at a constant 5% a year, before fees and tax. Our arithmetic."
    },
    {
     "t": "h",
     "x": "The formula"
    },
    {
     "t": "p",
     "x": "The value after a number of years equals the starting sum times (1 + rate) to the power of the years."
    },
    {
     "t": "p",
     "x": "With a 5% rate, the factor is 1.05 for one year, and 1.05 to the power of 10 for ten years."
    },
    {
     "t": "example",
     "title": "Worked example: £1,000 at 5% (illustrative)",
     "steps": [
      "Illustrative: £1,000 invested at a steady 5% a year, with no fees or tax.",
      "After 10 years: £1,000 × 1.05^10 = £1,628.89.",
      "After 20 years: £1,000 × 1.05^20 = £2,653.30.",
      "After 30 years: £1,000 × 1.05^30 = £4,321.94.",
      "Our inference: the sum grows fastest in the later years, because each year's growth is larger than the year before."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A steady 5% a year is not a forecast. Returns vary from year to year, and some years are negative."
    },
    {
     "t": "h",
     "x": "A rule of thumb"
    },
    {
     "t": "p",
     "x": "The rule of 72 divides 72 by the rate to estimate the years needed to double the money."
    },
    {
     "t": "p",
     "x": "At 5%, it gives about 14 years; the exact figure is about 14.2 years. This is our arithmetic and a rule of thumb, not a sourced standard."
    },
    {
     "t": "h",
     "x": "Time beats rate: three savers"
    },
    {
     "t": "p",
     "x": "The most useful thing compounding teaches is that the starting date matters more than the exact rate. A saver who starts early can contribute less each month and still finish ahead."
    },
    {
     "t": "example",
     "title": "Worked example: £100 a month from three different ages (illustrative)",
     "steps": [
      "Illustrative: three savers each pay in £100 a month at a steady 5% a year, with no fees or tax, until age 65.",
      "Saver A starts at 25 and pays for 40 years: £100 × 480 payments = £48,000 paid in. The pot reaches about £148,252.",
      "Saver B starts at 35 and pays for 30 years: £36,000 paid in. The pot reaches about £81,538.",
      "Saver C starts at 45 and pays for 20 years: £24,000 paid in. The pot reaches about £40,580.",
      "Our arithmetic: Saver A paid in only £12,000 more than B, but ends with £66,715 more. The extra ten years do most of the work."
     ]
    },
    {
     "t": "table",
     "title": "Three savers compared (illustrative, steady 5%)",
     "head": [
      "Saver",
      "Years paying in",
      "Total paid in",
      "Pot at 65",
      "Growth share of the pot"
     ],
     "rows": [
      [
       "A",
       "40",
       "£48,000",
       "£148,252",
       "68%"
      ],
      [
       "B",
       "30",
       "£36,000",
       "£81,538",
       "56%"
      ],
      [
       "C",
       "20",
       "£24,000",
       "£40,580",
       "41%"
      ]
     ],
     "src": "Our arithmetic. The equivalent monthly rate is used, so 12 months at that rate gives exactly 5%."
    },
    {
     "t": "h",
     "x": "Working the formula backwards"
    },
    {
     "t": "p",
     "x": "You can also ask what rate a goal needs. Divide the target by the starting sum, take the root for the number of years, and subtract one."
    },
    {
     "t": "example",
     "title": "Worked example: the rate a goal needs (illustrative)",
     "steps": [
      "Illustrative: you hold £12,000 and want £20,000 in ten years, with no further payments.",
      "The growth factor needed is £20,000 ÷ £12,000 = 1.6667.",
      "The yearly factor is 1.6667 raised to the power of one tenth, which is 1.0524.",
      "So you need about 5.24% a year, after fees, every year for ten years.",
      "Our inference: if that rate is higher than you can reasonably expect, the sensible fixes are more time, more saving, or a smaller goal, not a riskier investment."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A needed rate is not an expected rate. Wanting 5.2% a year does not make it likely, and chasing it with riskier assets can turn the plan into a gamble."
    },
    {
     "t": "terms",
     "i": [
      [
       "Compounding",
       "Growth in which each period's return is added to the sum that earns the next period's return."
      ],
      [
       "Contribution",
       "A payment you add to your investment, such as a monthly amount."
      ]
     ]
    },
    {
     "t": "check",
     "q": "At a steady 5% a year, roughly how long does money take to double?",
     "o": [
      "5 years",
      "About 14 years",
      "About 50 years",
      "It never doubles"
     ],
     "a": 1,
     "w": "The rule of 72 gives about 14 years at 5%, and the exact figure is about 14.2 years."
    },
    {
     "t": "check",
     "q": "What is £1,000 worth after 10 years at a steady 5% a year, to the nearest pound?",
     "o": [
      "£1,500",
      "£1,629",
      "£1,050",
      "£2,000"
     ],
     "a": 1,
     "w": "£1,000 × 1.05^10 is £1,628.89. This is our arithmetic."
    },
    {
     "t": "check",
     "q": "Why does Saver A, who starts at 25, end far ahead of Saver B, who starts at 35, although A paid in only £12,000 more?",
     "o": [
      "A chose better investments",
      "The extra ten years let growth compound on a bigger base",
      "B paid fees and A did not",
      "Inflation helps early savers"
     ],
     "a": 1,
     "w": "Both used the same rate, so the difference is time. The extra ten years of compounding add about £66,715. Our arithmetic."
    },
    {
     "t": "take",
     "i": [
      "Compounding rewards time more than it rewards a single good year.",
      "Work out the factor, 1 + rate, raised to the number of years.",
      "Treat any steady-return example as illustrative."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Fees and the drag they cause",
   "min": 25,
   "blocks": [
    {
     "t": "p",
     "x": "Managing investments costs money, and providers charge a fee for it. {{mh-beginners}}"
    },
    {
     "t": "p",
     "x": "The cost reduces the return you actually receive. {{mh-beginners}}"
    },
    {
     "t": "h",
     "x": "Which fees to look for"
    },
    {
     "t": "ul",
     "i": [
      "The annual management charge, which is the published fee.",
      "The Ongoing Charges Figure, which covers additional running costs of the fund.",
      "Any upfront or adviser charges you agree to pay."
     ]
    },
    {
     "t": "p",
     "x": "MoneyHelper advises that you ask about these before you invest. {{mh-beginners}}"
    },
    {
     "t": "example",
     "title": "Worked example: a 1.5% fee over 30 years (illustrative)",
     "steps": [
      "Illustrative: £10,000 invested for 30 years, with a gross return of 5% a year before fees, and no tax.",
      "With a 0.25% annual charge, the net return is 4.75%: £10,000 × 1.0475^30 = £40,237.",
      "With a 1.5% annual charge, the net return is 3.5%: £10,000 × 1.035^30 = £28,068.",
      "Our arithmetic: the 1.5% charge costs £43,219 − £28,068 = £15,151 more than no charge at all, against £2,982 for the smaller charge.",
      "Our inference: a small percentage, compounded over decades, can outweigh a large part of the growth."
     ]
    },
    {
     "t": "table",
     "title": "The same investment at three charge levels (illustrative)",
     "head": [
      "Annual charge",
      "Net return",
      "Value after 30 years"
     ],
     "rows": [
      [
       "0%",
       "5.00%",
       "£43,219"
      ],
      [
       "0.25%",
       "4.75%",
       "£40,237"
      ],
      [
       "1.5%",
       "3.50%",
       "£28,068"
      ]
     ],
     "src": "Our arithmetic from the stated gross return of 5%, with no tax."
    },
    {
     "t": "callout",
     "k": "note",
     "x": "These figures are illustrative. They assume the gross return is achieved each year, which is not guaranteed."
    },
    {
     "t": "h",
     "x": "Fees are not the only cost"
    },
    {
     "t": "p",
     "x": "The published annual charge is the one most people see. MoneyHelper tells you to ask about every charge before you invest. {{mh-beginners}}"
    },
    {
     "t": "ul",
     "i": [
      "The fund's own running costs, shown as the Ongoing Charges Figure. {{mh-beginners}}",
      "A platform or account fee for holding the investment, if there is one. Our inference: check whether it is a flat amount or a percentage.",
      "Charges for buying and selling.",
      "Any advice fee you agreed to pay."
     ]
    },
    {
     "t": "p",
     "x": "Our inference: add every one of these before comparing two products, because a low fund charge can sit beside a high platform charge."
    },
    {
     "t": "h",
     "x": "The same drag on regular saving"
    },
    {
     "t": "example",
     "title": "Worked example: £200 a month for 20 years at two charge levels (illustrative)",
     "steps": [
      "Illustrative: £200 paid in each month for 20 years, a gross return of 5% a year, and no tax.",
      "With no charge, the pot reaches about £81,161.",
      "With a 0.25% charge (net 4.75%), it reaches about £78,962.",
      "With a 1.5% charge (net 3.50%), it reaches about £68,953.",
      "Our arithmetic: the higher charge costs £10,009 more than the lower one, on contributions of only £48,000."
     ]
    },
    {
     "t": "table",
     "title": "What a charge takes in pounds each year (illustrative)",
     "head": [
      "Pot size",
      "At 0.25%",
      "At 1.5%",
      "Difference a year"
     ],
     "rows": [
      [
       "£10,000",
       "£25",
       "£150",
       "£125"
      ],
      [
       "£50,000",
       "£125",
       "£750",
       "£625"
      ],
      [
       "£100,000",
       "£250",
       "£1,500",
       "£1,250"
      ]
     ],
     "src": "Our arithmetic: pot size multiplied by the charge. Charges are applied to the whole pot, so they grow as the pot grows."
    },
    {
     "t": "p",
     "x": "Our inference: a charge that feels small on a small pot becomes a large yearly sum as the pot grows. A 1.5% charge on £100,000 is £1,500 a year, taken whether the market rose or fell."
    },
    {
     "t": "callout",
     "k": "key",
     "x": "You cannot control the return, but you can usually see the charge in advance. Cost is the part of the result you can choose."
    },
    {
     "t": "terms",
     "i": [
      [
       "Ongoing Charges Figure",
       "The annual cost of running a fund, shown as a percentage of its value."
      ],
      [
       "Platform fee",
       "A charge for holding your investments in an account, either flat or a percentage."
      ]
     ]
    },
    {
     "t": "check",
     "q": "Why does a 1.5% annual charge hurt more than the same charge in year one would suggest?",
     "o": [
      "Because it is paid only once",
      "Because it is taken every year and compounds",
      "Because it is refunded later",
      "Because it applies only to gains"
     ],
     "a": 1,
     "w": "Fees are taken every year, so the lost growth compounds too. This is our inference from the arithmetic."
    },
    {
     "t": "check",
     "q": "Which charge covers the additional running costs of a fund beyond the annual management charge?",
     "o": [
      "Ongoing Charges Figure",
      "Dividend",
      "Capital gain",
      "Annual exempt amount"
     ],
     "a": 0,
     "w": "The Ongoing Charges Figure covers additional costs. {{mh-beginners}}"
    },
    {
     "t": "check",
     "q": "A 1.5% charge is applied to a £100,000 pot. How much is taken in the year?",
     "o": [
      "£150",
      "£1,500",
      "£15,000",
      "£15"
     ],
     "a": 1,
     "w": "£100,000 × 1.5% is £1,500, taken whatever the market did. Our arithmetic."
    },
    {
     "t": "take",
     "i": [
      "Fees are paid every year, not once.",
      "Compare the net return, after all charges, not the headline return. {{mh-beginners}}",
      "A small charge over a long time can cost a lot of growth."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Reading a return figure honestly",
   "min": 18,
   "blocks": [
    {
     "t": "p",
     "x": "A quoted return can be true and still mislead you. The same fund can be described in several correct ways, and the way you choose changes how good it sounds."
    },
    {
     "t": "p",
     "x": "This lesson gives you five questions to ask of any return figure, and works each one with numbers."
    },
    {
     "t": "h",
     "x": "Question 1: is it before or after fees?"
    },
    {
     "t": "p",
     "x": "A gross return is the figure before the fund's costs are taken out, and a net return is what remains. MoneyHelper points out that charges eat into returns and are worth asking about before you invest. {{mh-beginners}}"
    },
    {
     "t": "p",
     "x": "When you compare two products, put both on the same basis. A gross figure for one and a net figure for another is not a comparison."
    },
    {
     "t": "h",
     "x": "Question 2: is it a total or a yearly figure?"
    },
    {
     "t": "p",
     "x": "A statement that a fund grew 30% over five years is a total. The yearly equivalent is lower, because the growth is spread over several years."
    },
    {
     "t": "example",
     "title": "Worked example: from a total to a yearly rate (illustrative)",
     "steps": [
      "Illustrative: a fund is up 30% over five years.",
      "The growth factor is 1.30, and the yearly factor is 1.30 raised to the power of one fifth, which is about 1.0539.",
      "That is about 5.39% a year, not 6% a year, which is what you would get by dividing 30% by 5.",
      "Our arithmetic: dividing a total by the number of years overstates the yearly rate, because it ignores compounding."
     ]
    },
    {
     "t": "h",
     "x": "Question 3: what is the period?"
    },
    {
     "t": "p",
     "x": "The start and end dates change the story. A fund can look strong measured from a low point and weak measured from a high point."
    },
    {
     "t": "p",
     "x": "Ask for the period, and ask what the figure would have been with a different start date."
    },
    {
     "t": "h",
     "x": "Question 4: is it nominal or real?"
    },
    {
     "t": "p",
     "x": "A nominal return ignores inflation, and a real return removes it. MoneyHelper notes that inflation reduces the spending power of money. {{mh-beginners}}"
    },
    {
     "t": "p",
     "x": "With a nominal return of 5% and inflation of 3%, the real return is about 2%, as the earlier module showed."
    },
    {
     "t": "h",
     "x": "Question 5: does the order of gains and losses matter?"
    },
    {
     "t": "p",
     "x": "An average hides the path. A gain of 50% followed by a loss of 50% does not return you to where you began."
    },
    {
     "t": "example",
     "title": "Worked example: up 50%, then down 50% (illustrative)",
     "steps": [
      "Illustrative: £100 rises 50% to £150.",
      "A fall of 50% takes £150 down to £75.",
      "The simple average of +50% and −50% is zero, yet you are £25 worse off.",
      "Our arithmetic: gains and losses multiply, so a plain average of yearly returns overstates what you end up with."
     ]
    },
    {
     "t": "table",
     "title": "Five questions for any return figure",
     "head": [
      "Question",
      "What a careless answer hides",
      "What to ask for"
     ],
     "rows": [
      [
       "Before or after fees?",
       "Costs that reduce what you keep",
       "The net figure and the ongoing charge"
      ],
      [
       "Total or yearly?",
       "A long period made to look like one year",
       "The yearly equivalent"
      ],
      [
       "Which period?",
       "A flattering start or end date",
       "More than one period"
      ],
      [
       "Nominal or real?",
       "Inflation eroding the gain",
       "The figure after inflation"
      ],
      [
       "Average or path?",
       "Big losses cancelled by big gains on paper",
       "The year-by-year figures"
      ]
     ],
     "src": "Our checklist, drawing on {{mh-beginners}} for fees and inflation"
    },
    {
     "t": "h",
     "x": "Regular saving changes the arithmetic"
    },
    {
     "t": "p",
     "x": "Most people do not invest a lump sum once. They add a fixed amount each month, and each payment compounds for a different length of time."
    },
    {
     "t": "example",
     "title": "Worked example: £200 a month (illustrative)",
     "steps": [
      "Illustrative: £200 is paid in at the end of each month for 20 years, at a steady 5% a year, with no fees or tax.",
      "You pay in £200 × 240 = £48,000 in total.",
      "Our arithmetic gives a final value of about £81,161, so growth contributes about £33,161.",
      "At a steady 3% a year, the same payments reach about £65,371, so two percentage points of yearly return are worth about £15,790 here.",
      "Our inference: the contribution rate and the time you stay invested matter at least as much as picking the best product."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A steady yearly return is an assumption for teaching. Real returns vary, and some years are negative, as the risk module explained. {{fca-risk}}"
    },
    {
     "t": "terms",
     "i": [
      [
       "Gross return",
       "The return before charges are taken out."
      ],
      [
       "Net return",
       "The return after charges."
      ],
      [
       "Annualised return",
       "The steady yearly rate that would produce the same total growth over the period."
      ]
     ]
    },
    {
     "t": "check",
     "q": "A fund is up 30% over five years. Which statement is closest to the yearly rate?",
     "o": [
      "6.0%, because 30 ÷ 5 = 6",
      "About 5.4%, allowing for compounding",
      "30%",
      "About 3%"
     ],
     "a": 1,
     "w": "1.30 to the power of one fifth is about 1.0539, so about 5.4% a year. This is our arithmetic."
    },
    {
     "t": "check",
     "q": "An investment rises 50% in one year and falls 50% the next. What is the result on £100?",
     "o": [
      "£100",
      "£75",
      "£125",
      "£150"
     ],
     "a": 1,
     "w": "£100 × 1.5 × 0.5 = £75, so a plain average of the two figures would mislead."
    },
    {
     "t": "take",
     "i": [
      "Ask whether a figure is gross or net, total or yearly, nominal or real.",
      "Gains and losses multiply, so averages can mislead. Our arithmetic.",
      "Regular saving and time in the market often matter more than finding the perfect product."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "Practice: judging two offers and a headline",
   "min": 26,
   "blocks": [
    {
     "t": "p",
     "x": "This lesson uses the five questions from the earlier lesson on two realistic comparisons. Work every figure yourself before reading the answers."
    },
    {
     "t": "h",
     "x": "Case 1: a high headline return and a high charge"
    },
    {
     "t": "example",
     "title": "Worked case: two funds over 25 years (illustrative)",
     "steps": [
      "Illustrative: you have £15,000 and 25 years. Fund 1 advertises a gross return of 6% and charges 1.8% a year. Fund 2 returns a gross 5% and charges 0.2% a year.",
      "Fund 1 net return: 6% − 1.8% = 4.2%. £15,000 × 1.042^25 = £41,955.",
      "Fund 2 net return: 5% − 0.2% = 4.8%. £15,000 × 1.048^25 = £48,431.",
      "Our arithmetic: Fund 2 ends £6,476 ahead despite the lower headline return.",
      "Our inference: the headline gross figure told you the wrong story. Only the net figure compares like with like."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "This assumes both funds really deliver their gross returns every year, which nothing guarantees. The comparison shows why you look at charges, not that either fund will perform that way."
    },
    {
     "t": "h",
     "x": "Case 2: \"average return of 13% a year\""
    },
    {
     "t": "example",
     "title": "Worked case: an average that hides the path (illustrative)",
     "steps": [
      "Illustrative: a fund returns +50% in year one, −30% in year two and +20% in year three.",
      "The simple average is (50 − 30 + 20) ÷ 3 = 13.3% a year.",
      "The growth factor is 1.50 × 0.70 × 1.20 = 1.26, so £1,000 becomes £1,260.",
      "The steady rate that gives the same result is 1.26 to the power of one third, minus one, which is 8.0% a year.",
      "Our arithmetic: the advertised \"average\" of 13.3% overstates what you got by about 5.3 percentage points a year."
     ]
    },
    {
     "t": "table",
     "title": "Applying the five questions to Case 2",
     "head": [
      "Question",
      "Answer for the fund in Case 2"
     ],
     "rows": [
      [
       "Before or after fees?",
       "Not stated, so ask"
      ],
      [
       "Total or yearly?",
       "Stated as a yearly average, which is the misleading kind"
      ],
      [
       "Which period?",
       "Three years only"
      ],
      [
       "Nominal or real?",
       "Not stated, so ask"
      ],
      [
       "Average or path?",
       "The path matters: one big loss, then partial recovery"
      ]
     ],
     "src": "Our application of the checklist from the previous lesson"
    },
    {
     "t": "activity",
     "x": "Find one advertised return figure for a fund or savings product. Write down the answers to all five questions, and mark which answers the advertisement does not give."
    },
    {
     "t": "check",
     "q": "In Case 1, which fund ends ahead after 25 years in the worked example?",
     "o": [
      "Fund 1, because its gross return is higher",
      "Fund 2, because its lower charge outweighs the lower gross return",
      "They end equal",
      "It cannot be told"
     ],
     "a": 1,
     "w": "Fund 2 nets 4.8% against 4.2% and ends ahead in the example. Our arithmetic."
    },
    {
     "t": "check",
     "q": "In Case 2, the simple average of +50%, −30% and +20% is 13.3%. What is the steady yearly rate that gives the same final result?",
     "o": [
      "13.3%",
      "About 8.0%",
      "About 20%",
      "0%"
     ],
     "a": 1,
     "w": "The factor 1.26 to the power of one third is about 1.080. Our arithmetic."
    },
    {
     "t": "check",
     "q": "Why is comparing a gross figure for one fund with a net figure for another a mistake?",
     "o": [
      "It is not a mistake",
      "The two are not on the same basis",
      "Net figures are always higher",
      "Gross figures are illegal"
     ],
     "a": 1,
     "w": "A fair comparison puts both on the same basis. {{mh-beginners}}"
    },
    {
     "t": "take",
     "i": [
      "Compare net figures, never gross against net.",
      "A simple average of yearly returns overstates growth when returns vary. Our arithmetic.",
      "A lower headline return with lower charges can win over a long time."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The lecturer's method: Irving Fisher",
   "min": 22,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "In The Rate of Interest, Fisher shows that a change in the rate changes the income streams people choose: a high rate favours quickly returning incomes, and a low rate favours distant returns. {{lec-fisher-1907}}"
    },
    {
     "t": "p",
     "x": "He also notes that the value of capital sinks as the rate of interest rises, if the income from the capital stays the same. {{lec-fisher-1907}}"
    },
    {
     "t": "p",
     "x": "We use the compound-growth arithmetic from module 2, which is our own calculation, not a quotation."
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Write the present sum and the rate, and decide the number of years.",
      "Calculate the future value with the factor of one plus the rate, raised to the years. Our arithmetic.",
      "Adjust the rate for inflation, to see the real figure. {{lec-mh-beginners}}",
      "Compare the result with a different rate or time, and note what changed."
     ]
    },
    {
     "t": "table",
     "title": "Future value of £1,000 at 5% (illustrative)",
     "head": [
      "Years",
      "Value",
      "Note"
     ],
     "rows": [
      [
       "10",
       "£1,628.89",
       "Our arithmetic"
      ],
      [
       "20",
       "£2,653.30",
       "Our arithmetic"
      ]
     ],
     "src": "Our arithmetic from the rate of 5% a year"
    },
    {
     "t": "h",
     "x": "Real return (illustrative)"
    },
    {
     "t": "example",
     "title": "Illustrative: a return of 5% with inflation at 3%.",
     "steps": [
      "The real return is about 5% minus 3%, which is about 2%.",
      "Our inference: this is the approximation, not an exact figure."
     ]
    },
    {
     "t": "h",
     "x": "Your own sum"
    },
    {
     "t": "ol",
     "i": [
      "Choose a sum you hold now.",
      "Choose a rate that is realistic for the investment, labelled as an assumption.",
      "Calculate the value in ten years and state the real figure."
     ]
    },
    {
     "t": "activity",
     "x": "Calculate the ten-year value of one sum you hold, using a rate you label as an assumption."
    },
    {
     "t": "check",
     "q": "What does a 'real' return allow for?",
     "o": [
      "Taxes only",
      "Inflation",
      "Fees only",
      "Nothing"
     ],
     "a": 1,
     "w": "A real return is after inflation. {{lec-mh-beginners}}"
    },
    {
     "t": "check",
     "q": "£1,000 grows at 5% a year for 20 years. About what is it worth?",
     "o": [
      "£2,000",
      "£2,653",
      "£1,500",
      "£5,000"
     ],
     "a": 1,
     "w": "£1,000 × 1.05^20 is £2,653.30. Our arithmetic."
    },
    {
     "t": "take",
     "i": [
      "Compare money across time, not only at one date.",
      "Real return equals the return less inflation, as an approximation. {{lec-mh-beginners}}",
      "Label every rate you use as an assumption."
     ]
    }
   ]
  }
 ]
};
