/* Vintage reselling business (UK) (module 2). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["vintage-reselling-2"] = {
 "intro": "This module is about buying. You will compare sourcing channels, learn the price-ceiling method that protects your margin, and build the buying discipline that stops stock from turning into dead capital. Lecturer lens: Wedgwood improved his ware by trial after trial, at first scattered and then concentrated on one aim. His letters show him trying one earth, then glazes, then gold, and reporting the results.",
 "outcomes": [
  "Compare sourcing channels by price, effort and risk.",
  "Calculate a maximum purchase price from expected net proceeds and a profit target.",
  "Explain why auction buying is mostly at your own risk.",
  "Keep a buying log and measure sell-through and days to sell.",
  "Lecturer's method: Test two sourcing channels with small matched lots, record the results and change one thing at a time."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Where vintage stock comes from",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Every channel trades price against effort, risk and volume."
    },
    {
     "t": "p",
     "x": "The cheapest stock usually takes the most time to find and carries the most risk of being wrong."
    },
    {
     "t": "p",
     "x": "Most beginners start with two or three channels and learn one category well before widening."
    },
    {
     "t": "table",
     "title": "Common sourcing channels",
     "head": [
      "Channel",
      "Typical strength",
      "Typical risk",
      "Notes"
     ],
     "rows": [
      [
       "Charity shops",
       "Low prices, steady supply",
       "Competition from other resellers; prices rising",
       "Check condition; no returns"
      ],
      [
       "Car boot and jumble sales",
       "Negotiable prices, early-morning bargains",
       "Weather, time, stock of mixed quality",
       "Cash; carry small change"
      ],
      [
       "House clearances and estate sales",
       "Whole lots, older stock",
       "Large volume, storage, much low-value filler",
       "Ask who is selling and why"
      ],
      [
       "Auctions (live and online)",
       "Genuine older goods, many lots",
       "Buyer's premium and fees, limited recourse",
       "Read the terms before bidding"
      ],
      [
       "Other online marketplaces",
       "Search from home",
       "Everyone sees the same listing",
       "Often mis-described; check photos"
      ],
      [
       "Wholesale and clearance bundles",
       "Volume in one purchase",
       "Unknown quality until opened",
       "Test with a small first order"
      ]
     ],
     "src": "Our summary of common practice; the figures that matter are your own prices. Nothing in this table is a quoted statistic."
    },
    {
     "t": "h",
     "x": "What the law says about your rights as a buyer"
    },
    {
     "t": "p",
     "x": "Second-hand goods sold at a public auction that people can attend in person are treated differently under the Consumer Rights Act 2015, because the buyer is not a consumer for most of the quality rules. {{cra-s2}}"
    },
    {
     "t": "p",
     "x": "The practical lesson is that auction buying is mostly at your own risk, so inspect before you bid and assume there are no returns."
    },
    {
     "t": "p",
     "x": "If you are buying as a business, you are not a consumer in any case, so the consumer-style protections may not protect you as a buyer. This is our reading of the Act's definitions, so check the terms of each seller."
    },
    {
     "t": "h",
     "x": "Where the goods come from matters"
    },
    {
     "t": "p",
     "x": "A seller must have the legal right to sell what they sell. {{bc-business}}"
    },
    {
     "t": "p",
     "x": "Ask clearly how the seller came to own an item, and walk away from stock that has no believable history, such as new-looking branded items sold from a bag at a bargain price."
    },
    {
     "t": "p",
     "x": "Keep a receipt or a note for every purchase, with the date, seller, price and place."
    },
    {
     "t": "fig",
     "id": "vintage-reselling-channels",
     "title": "Effort versus price by channel",
     "cap": "A sketch of how the channels trade effort against price. The positions are our judgement, not measured data."
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Your first sourcing goal is not volume. It is to prove that at least one channel gives you stock you can sell at a profit after fees."
    },
    {
     "t": "terms",
     "i": [
      [
       "Lot",
       "A group of items sold together at auction or clearance."
      ],
      [
       "Buyer's premium",
       "A percentage the auction house adds to the winning bid."
      ],
      [
       "Provenance",
       "The known history of an item: where it came from and who owned it."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Choose two channels and visit each once. Record five items per visit with price asked, what you think it would sell for, and why you did or did not buy. This feeds Challenge 1."
    },
    {
     "t": "check",
     "q": "At a live public auction you can attend, how does the Consumer Rights Act treat you as a buyer of second-hand goods?",
     "o": [
      "As a full consumer for every rule",
      "Not as a consumer for most of the quality rules",
      "As a trader with extra rights",
      "The Act does not mention auctions"
     ],
     "a": 1,
     "w": "Section 2(5) says a person is not a consumer for Chapter 2 where the goods are second-hand goods sold at a public auction people can attend in person. {{cra-s2}}"
    },
    {
     "t": "check",
     "q": "What should you record for every purchase?",
     "o": [
      "Only the price",
      "Date, seller, price and place",
      "Nothing, until you sell",
      "Only the photographs"
     ],
     "a": 1,
     "w": "You must be able to show the source of each item and, later, the cost for your accounts. {{bc-business}}"
    },
    {
     "t": "take",
     "i": [
      "Each channel trades price against time and risk.",
      "Auction buying is mostly at your own risk.",
      "Record where every item came from, and walk away from stock with no believable history."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Working out the most you can pay",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "The only price that matters is the price you can sell for after costs, less the profit you need."
    },
    {
     "t": "p",
     "x": "Work backwards from the expected selling price to a ceiling on what you will pay."
    },
    {
     "t": "fig",
     "id": "vintage-reselling-ceiling",
     "title": "From sale price down to your price ceiling",
     "cap": "Start with the expected sale price and take off every cost and your target profit. What remains is the most you should pay."
    },
    {
     "t": "h",
     "x": "Step 1: estimate the sale price from sold items"
    },
    {
     "t": "p",
     "x": "An asking price is a wish; a sold price is evidence."
    },
    {
     "t": "p",
     "x": "Search for the same or very similar item and compare only sold prices, not listings that are still waiting for a buyer."
    },
    {
     "t": "p",
     "x": "Match condition, size, colour and maker as closely as you can, and ignore outliers at both ends."
    },
    {
     "t": "p",
     "x": "Take a cautious figure, such as the lower middle of the sold range, because you will only get the high end if your photographs and timing are good. This rule of thumb is our own practice advice rather than a sourced method."
    },
    {
     "t": "h",
     "x": "Step 2: take off the costs"
    },
    {
     "t": "p",
     "x": "Platform fees come first, and they depend on your seller type."
    },
    {
     "t": "p",
     "x": "UK private sellers on eBay pay no final value fee, and there are 300 free listings a month; this applies to private sellers, and the page was last updated on 30/09/2026. {{ebay-private}}"
    },
    {
     "t": "p",
     "x": "A business seller on eBay pays a final value fee that is a percentage of the total sale including postage, plus a per-order fee of £0.30 for orders up to £10 and £0.40 above that (unverified: check eBay's business fees page), and a regulatory operating fee of 0.35%. {{ebay-business}}"
    },
    {
     "t": "p",
     "x": "The listed percentage for the Antiques category was 10.9% when we read the page, but categories differ, so check your own category's rate. {{ebay-business}}"
    },
    {
     "t": "p",
     "x": "Then take off the postage you pay and the packaging you use."
    },
    {
     "t": "example",
     "title": "Worked example (illustrative): a price ceiling on a vintage vase",
     "steps": [
      "You expect to sell at £40 and charge the buyer £6 postage, so the total sale is £46.",
      "Business seller fees (Antiques 10.9% as read, check your category): 10.9% of £46 = £5.014; per-order fee £0.40; regulatory fee 0.35% of £46 = £0.161. Total fees = £5.575, about £5.58. {{ebay-business}}",
      "Postage you pay is £6.50 and packaging is £1.20.",
      "Net after costs = 46 − 5.575 − 6.50 − 1.20 = £32.725, about £32.73.",
      "You want £15 profit, so the ceiling is 32.725 − 15 = £17.725. Pay no more than £17.70, and start negotiating below it."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "These fees are those shown on eBay's pages when read. They may carry VAT or change, so recalculate with your own invoice before relying on them."
    },
    {
     "t": "h",
     "x": "Step 3: set a walk-away rule"
    },
    {
     "t": "p",
     "x": "Write the ceiling before you handle the item, because holding something makes it feel worth more."
    },
    {
     "t": "p",
     "x": "If the price asked is above the ceiling, offer less once, then leave."
    },
    {
     "t": "p",
     "x": "Unusual and rare finds are where beginners overpay; the rare item that nobody has sold recently is a research problem, not a bargain."
    },
    {
     "t": "terms",
     "i": [
      [
       "Price ceiling",
       "The most you will pay, found by working back from expected net proceeds."
      ],
      [
       "Net proceeds",
       "What is left of the sale after fees, postage and packaging."
      ],
      [
       "Sold price",
       "What an item actually sold for."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Use the Max buy price calculator on this module's tool card. Enter three items you have seen and write the ceiling for each."
    },
    {
     "t": "check",
     "q": "In the worked example, what happens if the seller will not go below £20?",
     "o": [
      "Buy; £20 is close enough",
      "Pay £20 and cut the postage",
      "Walk away; £20 exceeds the £17.70 ceiling",
      "Buy it and hope the price rises"
     ],
     "a": 2,
     "w": "The ceiling already includes your target profit. Paying £20 leaves £12.73 profit, which misses the target of £15."
    },
    {
     "t": "check",
     "q": "Which price is better evidence of what an item is worth?",
     "o": [
      "The highest asking price",
      "The average asking price",
      "Recent sold prices for the same item",
      "The price you paid"
     ],
     "a": 2,
     "w": "Sold prices show what buyers actually paid. Asking prices are only offers."
    },
    {
     "t": "take",
     "i": [
      "Work backwards from a sold price to a ceiling.",
      "Fees, postage and packaging come off before your profit.",
      "Write the ceiling before you handle the item."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Buying with discipline",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Stock that does not sell is money you cannot spend."
    },
    {
     "t": "p",
     "x": "The fastest way for a reseller to run out of cash is to buy interesting things at fair prices."
    },
    {
     "t": "h",
     "x": "Set a budget and a category"
    },
    {
     "t": "p",
     "x": "Pick a stock budget you can lose without hardship and treat it as working capital."
    },
    {
     "t": "p",
     "x": "Spread it across more items rather than a few expensive ones, so one mistake does not wipe out a month."
    },
    {
     "t": "p",
     "x": "Learn one or two categories deeply before moving on, because knowledge compounds in a narrow field."
    },
    {
     "t": "h",
     "x": "Check before you buy"
    },
    {
     "t": "p",
     "x": "Inspect the whole item: seams, stains, cracks, chips, smells, missing parts, repairs, and makers' marks."
    },
    {
     "t": "p",
     "x": "For electrical items, remember that the buyer's safety is your responsibility once you sell, so factor the cost of a safety check or reject the item. {{bc-electrical}}"
    },
    {
     "t": "p",
     "x": "For upholstered furniture, look for the permanent safety label before you pay, because without it you may not be able to sell the piece. {{bc-upholstered}}"
    },
    {
     "t": "p",
     "x": "For anything with ivory, silver, or gold, check Module 4 before you hand over cash."
    },
    {
     "t": "h",
     "x": "Track what you buy and how fast it sells"
    },
    {
     "t": "p",
     "x": "Sell-through is the share of items that sell within a period, such as 60 days."
    },
    {
     "t": "p",
     "x": "Days to sell is how long each item sat before it sold."
    },
    {
     "t": "p",
     "x": "A category that sells quickly at a lower margin can beat a slow category at a high one, because the cash returns sooner to buy again."
    },
    {
     "t": "example",
     "title": "Worked example (illustrative): two categories with the same £300 budget",
     "steps": [
      "Category A: ten items bought at £30 each (£300). Eight sell within 60 days at £65 each, net of fees and postage £50 each. Two stay unsold.",
      "Cash back in 60 days = 8 × £50 = £400. Cost of the eight sold = £240. Profit on sold items = £160, and two items worth £60 of cost are still on the shelf.",
      "Category B: three items bought at £100 each (£300). One sells in 60 days at net £190, two remain.",
      "Cash back = £190, which is less than the £300 spent. Profit on the sold item = £90, with £200 of stock unsold.",
      "Category A returned more cash and more profit in the same time. The numbers are invented, but the pattern is why spreading risk usually helps."
     ]
    },
    {
     "t": "table",
     "title": "Buying log: the columns you need",
     "head": [
      "Column",
      "Why"
     ],
     "rows": [
      [
       "Date, seller, place",
       "Proves where it came from"
      ],
      [
       "Price paid and any fees",
       "Your cost for tax and margin"
      ],
      [
       "Condition notes and photos",
       "Evidence for the description"
      ],
      [
       "Expected sale price and ceiling",
       "Tests your research"
      ],
      [
       "Date listed and sold; net proceeds",
       "Gives sell-through and days to sell"
      ]
     ],
     "src": "Our suggested layout. HMRC says to keep records of trading income {{gov-allowance}}."
    },
    {
     "t": "activity",
     "x": "Create your buying log with the five columns above and enter every purchase from now on."
    },
    {
     "t": "check",
     "q": "Why can a slower-selling, higher-margin category return less cash in a period?",
     "o": [
      "Margin is always misleading",
      "Cash comes back sooner from faster sales",
      "Higher margins are illegal",
      "Fees are lower on slow items"
     ],
     "a": 1,
     "w": "Cash that returns sooner can be reinvested. Unsold stock ties up capital."
    },
    {
     "t": "check",
     "q": "You find an upholstered armchair with no safety label. What should you do?",
     "o": [
      "Buy it and add your own label",
      "Check it is exempt (pre-1950) or verified safe before buying",
      "Ignore it; the rules only cover new items",
      "Sell it cheaply to avoid the rules"
     ],
     "a": 1,
     "w": "Furniture made before 1 January 1950 is excluded, but items without the label that cannot be verified may not comply and should not be sold. {{bc-upholstered}} {{leg-ffr}}"
    },
    {
     "t": "take",
     "i": [
      "Treat the stock budget as working capital.",
      "Inspect fully, and check safety and restricted-goods rules before paying.",
      "Track sell-through and days to sell, not just margin."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "The lecturer's method: Josiah Wedgwood",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read the chapters of Meteyard's biography on his apprenticeship, his experiments with agate and cream ware, and his letters to Bentley and his brother. Meteyard quotes his letters but writes as a Victorian biographer, so her general claims are secondary. {{meteyard-1}} Wikipedia says he developed improved bodies by systematic experimentation. {{wiki-wedgwood}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Start from a standard others use and vary it. Meteyard says that while the clays and oxides for imitation agate and marble were known in all the best potworks, he did not rest in following other men's discoveries, and by repeated trials varied agate ware into a good imitation of porphyry. {{meteyard-1}}",
      "Insist on accuracy in the details. She says that in mixing materials, preparing glaze, weighing clay and the thickness of plate bats more accuracy was enforced. She credits this with more certainty in the parts of similar bodies. {{meteyard-1}}",
      "Move from scattered trials to focus. His experiments on cream-coloured ware had been desultory and aimed at future purposes. He then concentrated on this one direction, with every essential of body, glaze, form and ornament the object of his care. {{meteyard-1}}",
      "Accept that most trials fail and learn from them. Kilns were pulled down to correct defects, and experiments in body and glaze would sometimes turn out entire failures. {{meteyard-1}}",
      "Change one thing and report. In a letter of July 1767 he tells Bentley he is going on with experiments upon various earths and clays for different bodies and will next go upon glazes, and that many turn out to his wishes. {{meteyard-1}}",
      "Do not rush the sample. Writing about the tea service, he tells his brother that from experience the sooner he makes the pieces, the more imperfect they will be, and he reports a cup with green and gold sprigs that did not look as well as he expected. {{meteyard-1}}"
     ]
    },
    {
     "t": "p",
     "x": "Meteyard also says that his brother Thomas repeatedly reproved him for an idle and unprofitable curiosity in making experiments. She writes as an admirer of Josiah, so weigh that story as one side. {{meteyard-1}}"
    },
    {
     "t": "p",
     "x": "Wikipedia says he opened showrooms and warehouses in several cities, timed openings carefully and limited the number of jaspers on display to give a feeling of rarity (unverified: the rarity detail was not found in the page we checked). {{wiki-wedgwood}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Limiting what a buyer sees to create a feeling of rarity is a sales technique, not a model for a reseller. Never imply that an item is scarcer than it is. The habit we borrow is the experiment. {{wiki-wedgwood}}"
    },
    {
     "t": "table",
     "title": "From the pottery to a sourcing test (the right column is our adaptation)",
     "head": [
      "What Wedgwood did",
      "Source",
      "Sourcing version"
     ],
     "rows": [
      [
       "Varied a known recipe by repeated trials",
       "Meteyard",
       "Try a known channel with a small matched lot"
      ],
      [
       "Enforced accuracy in weights and thickness",
       "Meteyard",
       "Record cost, date and condition the same way for every item"
      ],
      [
       "Concentrated on one aim",
       "Meteyard",
       "Test one category or one channel at a time"
      ],
      [
       "Went from bodies to glazes in turn",
       "Letter, 1767",
       "Change one variable between tests"
      ],
      [
       "Reported trial results to a partner",
       "Letters",
       "Write the results in the same table each month"
      ]
     ],
     "src": "The first two columns follow Meteyard's account. The last column is our adaptation. {{meteyard-1}}"
    },
    {
     "t": "h",
     "x": "Worked example: two channels, five items each (illustrative numbers)"
    },
    {
     "t": "example",
     "title": "A small matched test",
     "steps": [
      "Channel A (charity shop): five items bought at £8 each, £40 in total. Channel B (car boot): five items at £5 each, £25 in total.",
      "After 30 days, four of A's items sold for £160 in total, and two of B's items sold for £70 in total.",
      "Sell-through: A is 4 ÷ 5 = 80%. B is 2 ÷ 5 = 40%.",
      "Cost of sold items: A 4 × 8 = £32. B 2 × 5 = £10. Profit before fees, postage and packaging: A 160 − 32 = £128. B 70 − 10 = £60.",
      "Unsold stock at cost: A £8. B 3 × 5 = £15. On this test A is better, but five items is a small sample, so repeat it before you change your plan."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a one-variable test plan"
    },
    {
     "t": "ol",
     "i": [
      "Choose one question, such as which channel gives the better sell-through.",
      "Buy five items from each channel in the same category and price range.",
      "Write cost, date bought and condition for every item in one table.",
      "Check at 30 days and record sell-through, profit and unsold stock at cost.",
      "Change one thing and run it again."
     ]
    },
    {
     "t": "activity",
     "x": "Run a two-channel test with five items each. Write the results in the format of the worked example."
    },
    {
     "t": "check",
     "q": "In the worked example, what is channel B's sell-through?",
     "o": [
      "20%",
      "40%",
      "60%",
      "80%"
     ],
     "a": 1,
     "w": "Two of five items sold, which is 40%."
    },
    {
     "t": "check",
     "q": "In his 1767 letter, what did Wedgwood say he would do after the earths and clays?",
     "o": [
      "Stop",
      "Go upon glazes",
      "Sell the works",
      "Retire"
     ],
     "a": 1,
     "w": "He said he would next go upon glazes. {{meteyard-1}}"
    },
    {
     "t": "check",
     "q": "Why change only one thing between tests?",
     "o": [
      "It is cheaper",
      "You can tell what caused the change in results",
      "Platforms require it",
      "It lowers tax"
     ],
     "a": 1,
     "w": "If two things change you cannot tell which one mattered."
    },
    {
     "t": "take",
     "i": [
      "Vary a known thing by repeated small trials. {{meteyard-1}}",
      "Record every trial the same way.",
      "Change one thing at a time, and repeat before you decide."
     ]
    }
   ]
  }
 ]
};
