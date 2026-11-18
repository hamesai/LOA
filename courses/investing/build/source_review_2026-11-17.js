/* Applies the source reviews of 17/11/2026 to investing: OpenStax Principles of Finance (chapters 3, 7, 10, 11, 12, 15),
   Fisher's The Theory of Interest (1930: chapters I-IV, IX, XIX, XXI) and Mackay's Extraordinary Popular Delusions vol. 1
   (the three money manias). Findings are taught inside the topic lessons. Run once, then
   node _template/lec_sync_from_modules.js investing   (the Fisher lecturer lessons are edited here too)
   Reviews: docs/source-review-openstax-finance.md, docs/source-review-fisher-1930.md, docs/source-review-mackay-1841.md */
const P = require("../../../_template/course_patch.js");
const C = "investing";
const chk = (q, o, a, w) => ({ t: "check", q, o, a, w, kind: "application" });
const p = x => ({ t: "p", x });

/* ---------- Module 1: what investing is, safety net, inflation ---------- */
let m = P.load(C, "investing-1");
P.insertAfter(m, "l1", "Saving means keeping money where it is safe", [
  p("Irving Fisher, who lectures in this course, put the difference as one of degree: spending pays for enjoyments that come soon, investing pays for enjoyments deferred to a later time. {{fisher30-ch1}} He saw an eternal conflict between the impulse to spend, which comes from impatience, and the impulse to invest, which comes from the chance to get more by waiting. {{fisher30-ch1}}")
]);
P.insertAfter(m, "l2", "Money used to repay a debt earns a certain return", [
  p("The OpenStax finance textbook makes the same point with a card example: rather than investing, you should probably pay down 24% APR credit card debt first, and by the rule of 72 an unpaid balance at that rate doubles in about 3 years. {{os-ch7}}"),
  p("Fisher explains why the safety net comes first. Present income is the gateway to the future: someone with one loaf of bread would not set it aside for next year even at a thousand per cent interest. {{fisher30-ch4}} He also defends idle cash: a person who keeps money ready rather than earning interest in a savings bank does so because being able to pay at a moment's notice is worth at least that interest to them. {{fisher30-ch9}}")
]);
P.insertAfter(m, "l3", "Subtracting inflation from the interest rate gives a quick estimate", [
  p("The exact link is called the Fisher effect, after this course's lecturer: one plus the nominal rate equals one plus the real rate times one plus inflation, so a 6% real return with 2% inflation needs a nominal 8.12%. {{os-ch7}}")
]);
P.insertAfter(m, "l3", "A small gap between interest and inflation looks harmless", [
  p("Fisher named the trap: most people suffer from the money illusion, thinking of money as fixed in value, as if a pound were always a pound. {{fisher30-ch19}} His history shows what it costs. In London in 1852-1857 the market rate averaged 4.7 per cent, the highest of any period, yet lenders received less than nothing in real terms; in the 1914-1920 inflation, savers lost 9 to 10 per cent a year in real terms. {{fisher30-ch19}}"),
  p("Your own inflation rate depends on what you buy. In the US from 1980 to 2020 the consumer price index rose 2.90% a year on average, while tuition rose 6.49% and rent 3.67%. {{os-ch12}} Our inference: if most of your spending is rent, the official rate may understate your own."),
  chk("A savings account pays 4.7% while prices rise 6% a year. Fisher would say you are suffering from what, if you feel you are getting richer?",
    ["Compounding", "The money illusion: the pound figure rises while its buying power falls", "Diversification", "A margin of safety"], 1,
    "Fisher's money illusion is treating money as fixed in value; at 4.7% interest and 6% inflation your real return is negative. {{fisher30-ch19}}")
]);
// the Fisher lecturer lesson: the 1930 book has now been read
{ const L = m.obj.lessons.find(l => /lecturer's method: Irving Fisher/.test(l.title));
  const b = L.blocks.find(b => (b.x || "").includes("The scan is access-restricted"));
  b.x = b.x.replace("The scan is access-restricted, so we did not read the book itself.", "We have since read its core chapters in the Online Library of Liberty edition. Fisher sums up the rate of interest as the mouthpiece of impatience to spend income without delay and of opportunity to increase income by delay. {{fisher30-ch21}}");
  const i = L.blocks.indexOf(b);
  L.blocks.splice(i + 1, 0,
    p("In The Theory of Interest a person's impatience depends on four features of their expected income: its size, its time shape, its composition and its risk. {{fisher30-ch4}} He drew an illustrative grid (Table 1): someone with a small, rising, precarious income who is short-sighted and used to spending might have an impatience of 20%; someone with a large, falling, assured income who is far-sighted and used to saving might have 1%. {{fisher30-ch4}}"),
    { t: "table", title: "Fisher's illustrative impatience grid (1930, Table 1)", head: ["Income", "Short-sighted, weak-willed, used to spending", "Medium", "Far-sighted, self-controlled, used to saving"],
      rows: [["Small, increasing, precarious", "20%", "10%", "5%"], ["Medium", "10%", "5%", "2%"], ["Large, decreasing, assured", "5%", "2%", "1%"]],
      src: "Fisher's own illustrative figures {{fisher30-ch4}}" });
  const t = L.blocks.find(b => b.t === "take");
  t.i = t.i.map(s => s === "We read part of the 1907 book, not the 1930 one." ? "We read part of The Rate of Interest and the core chapters of The Theory of Interest. {{fisher30-ch21}}" : s);
}
P.save(m);

/* ---------- Module 2: returns, compounding, reading a return ---------- */
m = P.load(C, "investing-2");
P.insertAfter(m, "l1", "A capital loss is the same mechanism as a gain", [
  p("Fisher kept the two apart: a capital gain is not income but the market's new valuation of future income. British consols changed in price every day with the money market while the income they paid flowed on at the same rate. {{fisher30-ch1}}")
]);
P.insertAfter(m, "l2", "Compounding means earning a return on the return", [
  p("Fisher's picture of compounding is a tree planted with 5 of labour that is worth 15 after 25 years: the planter can have the 15, but only by waiting the 25 years. {{fisher30-ch3}}")
]);
P.replaceText(m, "l2", "This is our arithmetic and a rule of thumb", "This is our arithmetic and a rule of thumb, not a sourced standard.", "(our arithmetic). The OpenStax finance textbook gives the same rule, with 9% doubling money in 8 years and 6% in 12. {{os-ch7}}");
P.insertAfter(m, "l4", "An average hides the path", [
  p("The two figures have names. The geometric average is the compounded yearly return you actually earned; the arithmetic average is the plain mean of the yearly figures, and it is always higher unless every year is the same. Both are correct but answer different questions: growth over the whole period, or a typical single year. {{os-ch15}}"),
  p("A real example: Delta Air Lines shares went from 11.19 to 40.21 over ten years, a compounded 13.65% a year, yet the yearly returns ran from a loss of 35.79% to a gain of 132.61%, with four losing years. {{os-ch15}}")
]);
P.save(m);

/* ---------- Module 3: risk ---------- */
m = P.load(C, "investing-3");
P.insertAfter(m, "l1", "Risk is the chance that you lose some or all", [
  p("Finance usually measures the swings with the standard deviation of yearly returns. If returns followed a bell curve, about two years in three would fall within one standard deviation of the average: CVS shares averaged 11.11% with a standard deviation of 21.56%, so roughly a loss of 10.45% to a gain of 32.67% in two years of three. {{os-ch15}}"),
  p("Risk is also why shares are expected to pay more. From 1928 to 2020 the S&P 500 averaged 11.64% a year, with 25 losing years, against 3.36% for three-month Treasury bills, which never had a negative year; the gap is the reward for bearing risk. {{os-ch15}} These are US figures, and averages, not promises."),
  p("Fisher said the same in The Theory of Interest: the bondholder accepts a lower average return than the stockholder because he prefers a fixed, certain income to a variable one that is larger on average. {{fisher30-ch4}}")
]);
P.insertAfter(m, "l2", "Volatility is how much an investment's price moves up and down", [
  p("Safe from default is not safe from loss. US Treasury bonds returned 32.81% in 1982 and lost 8.25% in 1999 as interest rates moved, and shares have had negative years about 25% of the time. {{os-ch12}}")
]);
P.insertAfter(m, "l3", "Later writers describe his model as a random walk", [
  p("The modern descendant is the efficient market hypothesis. In its weak form, prices already reflect their own history, so charting past prices cannot reliably beat the market. {{os-ch11}}")
]);
P.insertAfter(m, "l4", "All of the falls below are invented for teaching", [
  p("Bad years are not rare events. US recessions have lasted about 17 months on average and expansions about 41 months, a typical cycle about 4.5 years, though the lengths vary widely. {{os-ch3}} Our inference: a plan of ten years or more should expect to meet at least one.")
]);
P.save(m);

/* ---------- Module 4: diversification ---------- */
m = P.load(C, "investing-4");
P.insertAfter(m, "l1", "Each step smooths out the ride", [
  p("Diversification removes the risk that belongs to one company, but not the risk that hits the whole market, such as interest rates or a pandemic. Risk falls fast from one holding to two or three and then by less with each addition; 15 closely related shares can diversify less than 10 unrelated ones. {{os-ch15}}"),
  p("Fisher described the same idea in The Theory of Interest as insurance: pooling risks reduces them, which is how the new investment trusts lowered risk for investors in shares. {{fisher30-ch9}}")
]);
P.insertAfter(m, "l2", "Holding many securities is not enough", [
  p("A worked example shows why. Delta Air Lines alone had a standard deviation of 51.90%. Paired half-and-half with another airline (correlation 0.87) the pair's figure only fell to 49.11%; paired with ExxonMobil (correlation 0.35) it fell to 30.43%. {{os-ch15}}"),
  chk("You hold one airline share and want to reduce risk by adding a second holding. Which choice should cut the swings more?",
    ["A second airline", "A company whose results tend to move differently, such as an oil producer", "More of the same airline", "It makes no difference"], 1,
    "Adding a holding with a low correlation cuts risk most: in the textbook example an airline plus an oil company fell to 30.43% against 49.11% for two airlines. {{os-ch15}}")
]);
P.insertAfter(m, "l3", "A portfolio is the collection of all the assets you own", [
  p("The long US record shows the trade-off between asset classes. From 1981 to 2020, large company shares averaged 12.64% a year (standard deviation 16.06%), mid-grade corporate bonds 10.34% (7.67%), ten-year government bonds 8.21% (9.92%) and Treasury bills 3.94% (3.39%), against inflation of 2.93%. {{os-ch12}} US history, nominal figures and one fortunate market, so use it for the pattern, not as a forecast."),
  p("Bond prices move opposite to interest rates, and the longer and lower the coupon, the bigger the swing; one way to spread that risk is a ladder of bonds maturing at regular intervals. {{os-ch10}} An overseas fund adds a second risk for a UK investor, the exchange rate, because foreign gains are worth more or less in pounds as the currency moves (our application of {{os-ch3}}).")
]);
P.save(m);

/* ---------- Module 5: active or passive ---------- */
m = P.load(C, "investing-5");
P.insertAfter(m, "l2", "An active fund manager picks investments", [
  p("An advertised average return means little without its risk. The Sharpe ratio divides the return above a risk-free rate by the standard deviation, so a manager with a higher return but much bigger swings can be the weaker one. {{os-ch15}}")
]);
P.save(m);

/* ---------- Module 6: speculation, 1929, scams, biases ---------- */
m = P.load(C, "investing-6");
P.insertAfter(m, "l1", "Speculation does not always look reckless", [
  p("Mackay's account of the Dutch tulip mania marks the turning point Graham describes: the rich stopped buying bulbs to keep in their gardens and bought them to sell again at a profit. Everyone imagined the passion would last for ever, people of every rank turned property into cash to buy, and when the prudent saw that somebody must lose, prices fell and never rose again. {{mackay-tulip}} Mackay wrote in 1841, two centuries later, so take his pattern rather than his prices as fact (our caution).")
]);
P.insertAfter(m, "l2", "Wikipedia adds that the crash", [
  p("Fisher's own book, published the following year, shows his reasoning. He reported studies showing that shares yield more than bonds in the long run, called the safety of bonds largely illusory because of inflation, and said diversification through investment trusts reduced the risk of shares. {{fisher30-ch9}} The long-run argument was sound; the mistake was ignoring the price paid. He also warned that during a boom, when business people are over-hopeful, prices can run out of line with what later events justify. {{fisher30-ch9}}"),
  p("John Law, author of the Mississippi scheme of 1719-1720, is the earlier case: he never doubted his plan, put all his gains into French land, and left France almost a beggar. {{mackay-mississippi}} Our inference: sincere conviction by a clever person is not a margin of safety.")
]);
P.insertAfter(m, "l2", "No one can know what an asset is worth to the penny", [
  p("Estimates are fragile. In a dividend valuation model, a single percentage point change in the assumed growth rate or required return can move the fair price by as much as 10 to 20%. {{os-ch11}} That is the practical case for buying well below your estimate.")
]);
P.insertAfter(m, "l3", "The FCA's three first questions are", [
  p("These warning signs are three centuries old. In 1720 one promoter advertised a company for carrying on an undertaking of great advantage, but nobody to know what it is, asking a 2 pound deposit per share and promising 100 pounds a year per share; he took 2,000 pounds in five hours and left for the Continent. {{mackay-southsea}}"),
  p("Respectable backing is not protection either. The South Sea scheme had an Act of Parliament and the Chancellor of the Exchequer behind it, its books were later found falsified, and he was sent to the Tower. {{mackay-southsea}} In modern times Enron's bonds were rated investment grade about two months before its bankruptcy in 2001. {{os-ch10}}")
]);
P.replaceText(m, "l4", "The sources we read describe the tactics, not the psychology",
  "The sources we read describe the tactics, not the psychology, so the labels below are our own, offered as a way to notice yourself.",
  "The FCA and MoneyHelper describe the tactics. Older writers describe the psychology: Mackay wrote that men think in herds and go mad in herds, recovering their senses slowly, one by one. {{mackay-preface}} The labels below are our own, offered as a way to notice yourself.");
P.insertAfter(m, "l4", "Overconfidence also deserves a place on this list", [
  p("Knowing about bubbles does not make you immune. In 1719 two Paris scholars, La Motte and the Abbé Terrasson, congratulated each other on being free of the Mississippi mania, then met days later at the share office, each going to buy. {{mackay-mississippi}} The same account describes holders who kept the falling paper in the hope of a favourable turn rather than take a safe annuity, until it became worthless. {{mackay-mississippi}}"),
  p("In 1720 the poet John Gay was urged by friends to sell enough South Sea stock to secure a hundred a year for life; he refused, dreaming of splendour, and lost profit and principal. {{mackay-southsea}}"),
  p("Jumping out after a fright has a cost too: 10,000 in an S&P 500 index fund from 1980 to mid-2020 grew to 697,421, but missing just the 5 best days cut it to 432,411 and missing the 10 best to 313,377. {{os-ch12}}"),
  chk("Shares you bought have doubled, and a friend says to sell some and lock in a secure income. Which historical case warns against refusing?",
    ["Fisher's rule of 72", "John Gay in 1720, who refused to sell enough for a secure income and lost it all", "The SPIVA scorecard", "Markowitz's railway example"], 1,
    "Gay was urged to take a secure gain and refused, then lost both profit and principal. {{mackay-southsea}}")
]);
P.save(m);

/* Fisher lecturer lesson in module 2 */
m = P.load(C, "investing-2");
{ const L = m.obj.lessons.find(l => /lecturer's method: Irving Fisher/.test(l.title));
  const i = L.blocks.findIndex(b => (b.x || "").includes("We use the compound-growth arithmetic from module 2"));
  L.blocks.splice(i + 1, 0,
    p("In The Theory of Interest he gives the case that matters most for savers: a money rate of 15 per cent might only mean prices are expected to rise 10 per cent, leaving a real rate of about 5 per cent. {{fisher30-ch2}}"),
    p("He warns that when prices rise, the rate of interest rises a little in name but falls greatly in reality, so the direction a rate seems to move is often the opposite of how it really moves. {{fisher30-ch21}}"));
}
P.save(m);
console.log("applied");
