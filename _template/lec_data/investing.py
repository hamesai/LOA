import json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from _detail import lesson_entry
from author import p, h, ul, ol, table, call, ex, act, chk, take

# Lecturer sources. Read as Wikipedia excerpts unless the note says otherwise. Keys start with lec- so they do not clash with course refs.
refs = {
 "lec-fisher-1907": ["The Rate of Interest (1907): chapter 1 and passages from chapters 6 and 7 on time-preference. Read in part.", "Irving Fisher, Internet Archive", "https://archive.org/details/rateofinterestit00fishuoft"],
 "lec-fisher-1930cat": ["The Theory of Interest as determined by impatience to spend income and opportunity to invest it (1930): the title only, from the Internet Archive catalogue record. The scan is access-restricted and was not read.", "Irving Fisher, Internet Archive", "https://archive.org/details/theoryofinterest0000fish"],
 "lec-bachelier-1900": ["Théorie de la spéculation, Annales scientifiques de l'École Normale Supérieure, 3e série, 17 (1900), pp. 21 to 86. Read in French: the introduction and sampled sections.", "Louis Bachelier, Numdam", "https://www.numdam.org/item/ASENS_1900_3_17__21_0"],
 "lec-markowitz-1952": ["Portfolio Selection, Journal of Finance 7(1), March 1952, pp. 77 to 91. Read through a fetched PDF copy: the argument and the diversification passages.", "Harry Markowitz, free PDF copy", "http://www.efalken.com/LowVolClassics/markowitz_JF1952.pdf"],
 "lec-bogle-2016": ["Saving a Company, Building a Colossus, Preserving a Culture, speech of 09/07/2016", "John C. Bogle, Bogle Financial Markets Research Center", "https://boglecenter.net/wp-content/uploads/65th-Anniversary-7-9-16.pdf"],
 "lec-bogle-1997": ["Who's in Charge Here: Asset Allocation or Cost? AIMR seminar remarks, 20/07/1997 (read in part)", "John C. Bogle, Bogle Financial Markets Research Center", "https://boglecenter.net/wp-content/uploads/AIMR-7-20-97.pdf"],
 "lec-wiki-bogle": ["John C. Bogle: dates the First Index Investment Trust to 1976. Secondary, read as excerpts.", "Wikipedia, read as excerpts", "https://en.wikipedia.org/wiki/John_Bogle"],
 "lec-graham-ii": ["The Intelligent Investor, fourth revised edition (1973) with Zweig's commentary: Chapter 1 and Chapter 20 passages read in a full-text copy", "Benjamin Graham, Internet Archive copy", "https://archive.org/details/BooksInvesting"],
 "lec-spiva": ["SPIVA U.S. scorecard, data as of 30 June 2026 (summary table read)", "S&P Dow Jones Indices", "https://www.spglobal.com/spdji/en/research-insights/spiva/"],
 "lec-fca-risk": ["Risk and returns (InvestSmart), last updated 19/01/2026", "Financial Conduct Authority", "https://www.fca.org.uk/investsmart/risk-returns"],
 "lec-fca-scams": ["Protect yourself from scams, last updated 19/01/2026", "Financial Conduct Authority", "https://www.fca.org.uk/consumers/protect-yourself-scams"],
 "lec-mh-scams": ["How to spot an investment scam (MoneyHelper)", "MoneyHelper, Money and Pensions Service", "https://www.moneyhelper.org.uk/en/money-troubles/scams/how-to-spot-an-investment-scam"],
 "lec-mh-beginners": ["A beginner's guide to investing (MoneyHelper)", "MoneyHelper, Money and Pensions Service", "https://www.moneyhelper.org.uk/en/savings/investing/investing-beginners-guide"],
}

M = []

M.append(lesson_entry(key="investing-1", name="Irving Fisher", min=22,
    outcome="Describe the trade-off between spending now and investing for later, and set the saving rule you will follow.",
    intro="Irving Fisher built his theory of interest on one question: why do people accept less now than they could get later? His answer, impatience to spend against the opportunity to invest, is the core of this module.",
    record=[
        "We read the opening chapter and passages from chapters 6 and 7 of Fisher's The Rate of Interest (1907). Its first chapter says the rate of interest in any community is an index of the preference, in that community, for a dollar of present over a dollar of future income. {{lec-fisher-1907}}",
        "He calls this time-preference and says it depends on income. People adjust the time-shape of their income, by borrowing or lending, until their own rate of preference matches the market rate of interest. {{lec-fisher-1907}}",
        "His 1930 book, The Theory of Interest, carries the subtitle 'as determined by impatience to spend income and opportunity to invest it'. {{lec-fisher-1930cat}} The scan is access-restricted, so we did not read the book itself."],
    steps=[
        "Ask how much you value spending now against spending later. {{lec-fisher-1907}}",
        "Compare that with the return you could earn by investing. {{lec-mh-beginners}}",
        "Keep your emergency fund first, because it removes the need to spend investments in a crisis. {{lec-mh-beginners}}",
        "Decide the time you can leave money untouched, and invest only what you will not need in that time."],
    table=("Your saving decision", ["Question", "If yes", "If no"], [
        ["Is the money needed within five years?", "Keep it in cash or a short-term account", "Consider investing part of it"],
        ["Is the emergency fund in place?", "Think about investing", "Build the fund first"],
    ], "Our application of {{lec-fisher-1907}} and {{lec-mh-beginners}}"),
    worked=[("A quick test (illustrative)", "Illustrative: you have £6,000 in cash, which covers three months of essentials.", "You also have £2,000 you do not need for seven years.", "Our inference: the £2,000 is a candidate for investing; the £6,000 stays as a safety net.")],
    apply=("Apply it to your own money", ["Write the amount you need within five years.", "Write the amount you can leave for at least five years.", "Compare the two with your emergency fund target."]),
    act="Write the three amounts above and the date you will review them.",
    checks=[("In Fisher's account, what sets the interest rate?", ["Only the government", "Impatience to spend and the opportunity to invest", "The price of gold", "The number of banks"], 1, "The 1930 title names impatience to spend income and opportunity to invest it, and the 1907 book ties the rate to the preference for present over future income. {{lec-fisher-1930cat}} {{lec-fisher-1907}}")],
    take=["Time-preference depends on income, so how much you need now should set how much you invest (our inference). {{lec-fisher-1907}}", "Build the emergency fund before investing. {{lec-mh-beginners}}", "We read part of the 1907 book, not the 1930 one."],
    quiz=("Which comes first, according to this module?", ["Investing everything", "A safety net of cash", "Buying property", "Borrowing to invest"], 1, "The safety net comes first. {{lec-mh-beginners}}"),
))

M.append(lesson_entry(key="investing-2", name="Irving Fisher", min=22,
    outcome="Compare the value of a sum over time, and separate the real return from the nominal one.",
    intro="Fisher thought in present and future values as a matter of course. This lesson uses his habit of comparing money across time.",
    record=[
        "In The Rate of Interest, Fisher shows that a change in the rate changes the income streams people choose: a high rate favours quickly returning incomes, and a low rate favours distant returns. {{lec-fisher-1907}}",
        "He also notes that the value of capital sinks as the rate of interest rises, if the income from the capital stays the same. {{lec-fisher-1907}}",
        "We use the compound-growth arithmetic from module 2, which is our own calculation, not a quotation."],
    steps=[
        "Write the present sum and the rate, and decide the number of years.",
        "Calculate the future value with the factor of one plus the rate, raised to the years. Our arithmetic.",
        "Adjust the rate for inflation, to see the real figure. {{lec-mh-beginners}}",
        "Compare the result with a different rate or time, and note what changed."],
    table=("Future value of £1,000 at 5% (illustrative)", ["Years", "Value", "Note"], [
        ["10", "£1,628.89", "Our arithmetic"],
        ["20", "£2,653.30", "Our arithmetic"],
    ], "Our arithmetic from the rate of 5% a year"),
    worked=[("Real return (illustrative)", "Illustrative: a return of 5% with inflation at 3%.", "The real return is about 5% minus 3%, which is about 2%.", "Our inference: this is the approximation, not an exact figure.")],
    apply=("Your own sum", ["Choose a sum you hold now.", "Choose a rate that is realistic for the investment, labelled as an assumption.", "Calculate the value in ten years and state the real figure."]),
    act="Calculate the ten-year value of one sum you hold, using a rate you label as an assumption.",
    checks=[("What does a 'real' return allow for?", ["Taxes only", "Inflation", "Fees only", "Nothing"], 1, "A real return is after inflation. {{lec-mh-beginners}}")],
    take=["Compare money across time, not only at one date.", "Real return equals the return less inflation, as an approximation. {{lec-mh-beginners}}", "Label every rate you use as an assumption."],
    quiz=("What should a learner call an assumed rate?", ["A guarantee", "An assumption", "A tax rate", "A fee"], 1, "An assumed rate must be labelled. Our practice rule."),
))

M.append(lesson_entry(key="investing-3", name="Louis Bachelier", min=22,
    outcome="Explain the random walk, and why a plan should cover a range of outcomes.",
    intro="Bachelier wrote in 1900 about the theory of speculation and modelled prices as a random walk. His idea still shapes how investors think about short-term moves.",
    record=[
        "Bachelier's 1900 thesis, Théorie de la spéculation, begins by saying that the influences on prices are countless, so a mathematical forecast of their movements is impossible, and that the calculus of probabilities will probably never apply to the movements of quoted prices. {{lec-bachelier-1900}}",
        "What he sets out to find is the probability law of price changes that the market allows at a given moment, since a market that does not predict movements still treats some as more probable than others. {{lec-bachelier-1900}}",
        "We read the introduction and sampled later sections in French. We did not work through the mathematics."],
    steps=[
        "Accept that price movements cannot be forecast mathematically, as he begins by saying. {{lec-bachelier-1900}}",
        "Do not judge a holding by one good or bad period.",
        "Plan for a range of outcomes, not a single forecast. {{lec-fca-risk}}",
        "Check that your plan still makes sense in a fall as well as in a rise."],
    table=("What the model does and does not say", ["Claim", "Status"], [
        ["Short-term prices are hard to predict", "The model's central idea"],
        ["Prices are pure chance", "Not what the model says; treat as a misreading"],
        ["Your plan will never make money", "Not implied; the point is fragility of forecasts"],
    ], "Our reading of {{lec-bachelier-1900}}"),
    worked=[("Range of outcomes (illustrative)", "Illustrative: a £10,000 holding could be £7,000 after a bad year or £13,000 after a good one.", "Plan for both, and check that the fall would not force a sale.", "Our inference: the plan must survive the bad end of the range.")],
    apply=("Your plan's bad year", ["Choose a fall you think is plausible for your holding.", "Calculate the recovery needed, using the module 3 table.", "Write what you would do, and whether you could afford to wait."]),
    act="Write the fall you would survive and the rise needed to recover from it.",
    checks=[("What does the random walk suggest about a plan that depends on forecasting next month?", ["It is reliable", "It is fragile", "It is guaranteed", "It is required"], 1, "Bachelier begins from the impossibility of forecasting price movements, so a plan built on forecasts is fragile (our inference). {{lec-bachelier-1900}}")],
    take=["Bachelier starts from the point that price movements cannot be forecast mathematically. {{lec-bachelier-1900}}", "Plan for a range of outcomes, including the bad end. {{lec-fca-risk}}", "The model is an idea to test, not a guarantee."],
    quiz=("What does a random walk describe?", ["A steady rise", "A path where each step is unpredictable from the last", "A fixed pattern", "A tax rule"], 1, "That is our definition of a random walk; Bachelier's thesis begins from the impossibility of forecasting. {{lec-bachelier-1900}}"),
))

M.append(lesson_entry(key="investing-4", name="Harry Markowitz", min=24,
    outcome="Explain how holdings that move apart reduce portfolio risk, and write a portfolio you can defend.",
    intro="Markowitz showed in 1952 that the risk of a portfolio depends on how its holdings move together, not only on each one alone. This lesson uses that point to check your own split.",
    record=[
        "Markowitz's 1952 paper 'Portfolio Selection' rejects the rule of maximising expected return because it never implies diversification, and proposes instead that investors treat expected return as desirable and variance of return as undesirable. {{lec-markowitz-1952}}",
        "He says diversification cannot eliminate all variance, because returns from securities are too intercorrelated, and that it is necessary to avoid securities with high covariances among themselves. {{lec-markowitz-1952}}",
        "We read the argument and the diversification passages through a fetched PDF copy, not every page. His geometric figures were not worked through."],
    steps=[
        "Name the holdings in your portfolio, and say what each one depends on. {{lec-markowitz-1952}}",
        "Ask whether two holdings are likely to fall together in a bad year.",
        "Check that no single holding has more risk than you can bear. {{lec-fca-risk}}",
        "Write one reason for each holding, and one trigger for changing the split."],
    table=("Holdings and how they move (illustrative)", ["Pair", "Likely behaviour", "Effect on risk"], [
        ["Two shares in the same sector", "Often fall together", "Little reduction"],
        ["Shares and government bonds", "Often move differently", "Potentially more reduction"],
    ], "Our illustration of the covariance point in {{lec-markowitz-1952}}"),
    worked=[("Check the efficient frontier idea (illustrative)", "Illustrative: two portfolios offer the same expected return.", "The one with the lower risk is nearer the frontier.", "Our inference: choose the lower-risk option for the same return.")],
    apply=("Review your split", ["List your holdings and their rough share of the pot.", "Mark any two that tend to move together.", "Note whether any single holding is too large to bear."]),
    act="Write your holdings, the pairs that move together, and one trigger for a review.",
    checks=[("In the paper, what is an efficient portfolio?", ["The one with the highest possible return", "One with the lowest variance for its expected return, or the highest return for its variance", "A tax allowance", "A type of bond"], 1, "Efficient portfolios have the lowest variance for a given expected return, or the highest expected return for a given variance. {{lec-markowitz-1952}}")],
    take=["Risk depends on how holdings move together. {{lec-markowitz-1952}}", "Avoid securities with high covariances among themselves. {{lec-markowitz-1952}}", "His first statement assumed fixed beliefs and left a general treatment for later."],
    quiz=("What did Markowitz's 1952 paper focus on?", ["Tax rates", "The risk of a portfolio depending on how holdings move together", "Bank interest", "Property prices"], 1, "The paper links portfolio risk to how holdings move together. {{lec-markowitz-1952}}"),
))

M.append(lesson_entry(key="investing-5", name="John Bogle", min=24,
    outcome="Compare the cost of a fund with its benefit, and use the SPIVA evidence with its limits.",
    intro="John Bogle founded Vanguard in 1974 and is credited with popularising the index fund. He argued that low costs are one of the few things an investor can control. This lesson applies that argument.",
    record=[
        "In his own speech, Bogle says Vanguard began operations on 19/09/1974 and was incorporated on 24/09/1974, and that it formed the first index mutual fund in 1975. {{lec-bogle-2016}} Wikipedia dates the First Index Investment Trust to 1976, so the sources differ by a year. {{lec-wiki-bogle}}",
        "In a 1997 speech he argues that costs matter. He compares a 0.2% annual cost on $10,000, which costs $280 over ten years, with 2.2%, which costs $2,810. {{lec-bogle-1997}}",
        "In a balanced-fund study he describes, average funds fell 1.2 percentage points a year short of the index composite, and expenses accounted for 83% of that shortfall. {{lec-bogle-1997}}",
        "The SPIVA table in module 5 gives the US evidence on active funds against an index. {{lec-spiva}}"],
    steps=[
        "Find the total annual charge of each fund you consider. {{lec-mh-beginners}}",
        "Compare it with the cost of an index tracker that covers the same market.",
        "Ask what the active fund must do to justify its extra cost, after fees. {{lec-bogle-1997}}",
        "Check the SPIVA evidence, remembering it is US data and not UK advice. {{lec-spiva}}"],
    table=("Cost of an extra 1% a year on £10,000 (illustrative)", ["Years", "Extra cost of 1% a year, approx."], [
        ["1", "£100 a year on the starting sum, before growth"],
        ["Over 30 years", "Much more, because the lost growth compounds"],
    ], "Our arithmetic; the compounding example is in module 2"),
    worked=[("Fee comparison (illustrative)", "Illustrative: a charge of 0.25% against 1.25% on £10,000 at 5% gross for 30 years.", "The net values are about £40,237 and £30,175, from our arithmetic.", "Our inference: the difference is large, and the active fund must beat the index by that margin, net of fees.")],
    apply=("Your own cost check", ["List each holding's total charge.", "Compare each with a tracker in the same market.", "Write what each costs in pounds over ten years, labelled illustrative."]),
    act="Write the total charge and the ten-year cost in pounds for one holding you own or plan to buy.",
    checks=[("Why does the SPIVA table count closed funds?", ["To make results worse", "To avoid survivorship bias", "Because the law says so", "To count fees"], 1, "Survivorship bias is avoided by counting closed funds. {{lec-spiva}}")],
    take=["Costs matter, so compare them every year. {{lec-bogle-1997}}", "Check the SPIVA evidence and its limits. {{lec-spiva}}", "Past data is not a forecast."],
    quiz=("What is an index tracker designed to do?", ["Beat the index", "Copy the index", "Avoid shares", "Guarantee returns"], 1, "In Bogle's words, the first index fund matched the returns of the S&P 500 Index net of minimal costs. {{lec-bogle-2016}}"),
))

M.append(lesson_entry(key="investing-6", name="Benjamin Graham", min=24,
    outcome="Apply Graham's test of investment against speculation, and use a margin of safety before you buy.",
    intro="Benjamin Graham is called the father of value investing. He insisted that investors separate analysis from hope, and that they buy with a margin of safety.",
    record=[
        "In The Intelligent Investor, Graham repeats his 1934 definition: an investment operation, upon thorough analysis, promises safety of principal and an adequate return, and operations that do not meet those requirements are speculative. {{lec-graham-ii}}",
        "In Chapter 20 he treats the margin of safety as the central concept: to have a true investment, a true margin of safety must be present, and the concept rests on simple arithmetical reasoning from statistical data. {{lec-graham-ii}}",
        "We read Chapter 1 and Chapter 20 passages, not the whole book."],
    steps=[
        "Ask whether the operation rests on analysis or on hope. {{lec-graham-ii}}",
        "Estimate what the asset is worth, and write the basis for your estimate.",
        "Buy only with a margin between your estimate and the price. {{lec-graham-ii}}",
        "Check the firm on the FCA Firm Checker and the Warning List before any payment. {{lec-mh-scams}} {{lec-fca-scams}}"],
    table=("Investment or speculation? (our application)", ["Test", "Investment", "Speculation"], [
        ["Basis", "Analysis of value", "Hope of a price rise"],
        ["Protection", "A margin of safety", "None beyond the story"],
        ["Pace", "Years, with a plan", "Days, on a tip"],
    ], "Our application of {{lec-graham-ii}}"),
    worked=[("Margin of safety (illustrative)", "Illustrative: you estimate a share is worth £100 and buy at £75.", "Your margin is 25%, and you still have room if your estimate is 20% too high.", "Our inference: the margin protects you from error, but guarantees nothing.")],
    apply=("Test one purchase", ["Write your estimate of value and its basis.", "Set the price at which you would buy, with a margin.", "Run the FCA checks before any payment. {{lec-fca-scams}}"]),
    act="Write one estimate, one margin and the three FCA checks, for a single investment you are considering.",
    checks=[("What makes an operation an investment, in Graham's test?", ["Popularity", "Analysis that promises safety of principal and an adequate return", "A catchy name", "A recent tip"], 1, "Analysis, safety of principal and an adequate return. {{lec-graham-ii}}")],
    take=["Analysis, not hope, separates investment from speculation. {{lec-graham-ii}}", "A margin of safety is a cushion, not a guarantee. {{lec-graham-ii}}", "Check the firm before any payment. {{lec-fca-scams}}"],
    quiz=("What is a margin of safety?", ["A guaranteed profit", "A gap between price and estimated value", "A tax allowance", "A fund type"], 1, "It is the gap between price and estimated value. {{lec-graham-ii}}"),
))

M.append(lesson_entry(key="investing-cap", name="Benjamin Graham", min=24,
    outcome="Review your written plan against Graham's tests, and mark the claims that rest on hope rather than analysis.",
    intro="Graham's last test for a plan is whether it could survive being wrong. This lesson asks you to check your capstone plan in that way.",
    record=[
        "Graham's distinction between investment and speculation, and the margin of safety, are the two tests for a plan. {{lec-graham-ii}}",
        "The FCA's checks on firms and the 10% rule of thumb are part of the same discipline. {{lec-fca-scams}} {{lec-fca-risk}}"],
    steps=[
        "Read your plan and mark each claim that rests on a forecast rather than a calculation.",
        "For each marked claim, write the analysis that would support it, or remove it.",
        "Check the risk section against the 10% rule of thumb. {{lec-fca-risk}}",
        "Confirm the scam checks are complete for every firm named. {{lec-fca-scams}}"],
    table=("Plan review", ["Mark", "Meaning", "Action"], [
        ["Forecast", "A claim about the future with no calculation", "Replace with a range, or remove"],
        ["Calculation", "A figure you can recompute", "Keep, and show the working"],
        ["Unchecked firm", "A provider you have not verified", "Run the FCA checks"],
    ], "Our review method, drawn from {{lec-graham-ii}} and {{lec-fca-scams}}"),
    worked=[("A marked claim (illustrative)", "Illustrative plan line: 'the fund will grow 8% a year'.", "Mark it a forecast, since no source supports it.", "Replace it with a range, and show a bad-year case from module 3.")],
    apply=("Your review", ["Mark each forecast in your plan.", "Replace each with a range or remove it.", "Write the date of your next review."]),
    act="Complete the review table for your own plan and submit the changes with your capstone.",
    checks=[("What should you do with a forecast you cannot support?", ["Keep it as fact", "Replace it with a range or remove it", "Raise the risk", "Hide it"], 1, "Mark it, then replace or remove it.")],
    take=["A plan should separate forecast from calculation.", "Check the risk limit and the firm checks before finishing.", "Graham's test is to ask whether the plan survives being wrong. {{lec-graham-ii}}"],
    quiz=("What is the first step in reviewing a plan?", ["Invest the money", "Mark each forecast", "Raise the risk", "Ask a friend to decide"], 1, "Mark each forecast so you can test it."),
))

# Second check per lecturer lesson (the course standard is two checks per lesson). Inserted before the takeaways block.
SECOND = {
 "investing-1": ("Fisher linked interest to two things. One is impatience to spend; what is the other?",
                 ["The price of gold", "The opportunity to invest", "The number of banks", "The tax year"], 1, "The 1930 title names impatience to spend income and opportunity to invest it. {{lec-fisher-1930cat}}"),
 "investing-2": ("£1,000 grows at 5% a year for 20 years. About what is it worth?",
                 ["£2,000", "£2,653", "£1,500", "£5,000"], 1, "£1,000 × 1.05^20 is £2,653.30. Our arithmetic."),
 "investing-3": ("Which statement misreads the random walk model?",
                 ["Short-term moves are hard to predict", "Prices are pure chance, so nobody can ever do well", "Plans should cover a range of outcomes", "Forecast-based plans are fragile"], 1, "His starting point is that forecasting is impossible, not that outcomes are pure chance or that nobody can do well. Our reading of {{lec-bachelier-1900}}"),
 "investing-4": ("Two holdings that tend to fall together give you...",
                 ["Large risk reduction", "Little risk reduction", "A guaranteed return", "No fees"], 1, "Holdings with high covariances among themselves do little to lower portfolio risk. {{lec-markowitz-1952}}"),
 "investing-5": ("An active fund charges 1% more a year than a tracker. What must it do to match the tracker's net result?",
                 ["Nothing", "Beat the index by about 1% a year before charges", "Hold more bonds", "Cut its fees to zero"], 1, "The extra charge has to be earned back by outperformance. Our inference from the arithmetic. {{lec-bogle-1997}}"),
 "investing-6": ("You estimate a share is worth £80 and want a 25% margin of safety. What is the maximum you would pay?",
                 ["£60", "£70", "£75", "£80"], 0, "£80 × 0.75 is £60. Our arithmetic. {{lec-graham-ii}}"),
 "investing-cap": ("Why replace a forecast in your plan with a range?",
                   ["Ranges look more professional", "A range lets you test whether the plan survives the bad end", "Forecasts are illegal", "Ranges raise returns"], 1, "A plan that survives the bad end of a range is not betting on a forecast. Our inference."),
}
for entry in M:
    q = SECOND.get(entry["key"])
    if q:
        entry["blocks"].insert(len(entry["blocks"]) - 1, chk(*q))

out = {"refs": refs, "modules": M}
Path(__file__).with_suffix(".json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print(len(M), "modules")
