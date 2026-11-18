/* Second batch from the investing source reviews of 17/11/2026 (run after source_review_2026-11-17.js).
   node courses/investing/build/source_review_2026-11-17b.js */
const P = require("../../../_template/course_patch.js");
const C = "investing";
const p = x => ({ t: "p", x });

let m = P.load(C, "investing-1");
P.insertAfter(m, "l1", "Most people choose from four main types of investment", [
  p("The types differ in what you are promised. A bond is a loan: the issuer promises fixed interest and the return of the face value at maturity. {{os-ch10}} A share promises nothing: there is no maturity date or face value, dividends are paid only if the board declares them, and shareholders are paid last, which is why shares are riskier than bonds. {{os-ch11}}")
]);
P.insertAfter(m, "l3", "Inflation is the rise in the prices of goods and services", [
  p("Official inflation is measured with a price index: the cost of a fixed basket of goods and services, weighted by how much households spend on each category. Core inflation leaves out volatile food and energy prices, and the basket goes out of date as people change what they buy. {{os-ch3}}")
]);
P.insertAfter(m, "l4", "Rules are easier to hold once you have watched them", [
  p("Fisher noticed that life stage changes the pull of the present: someone who expects their income to rise soon is impatient and may borrow against it, while someone nearing retirement on a smaller income tends to save. {{fisher30-ch4}}")
]);
P.save(m);

m = P.load(C, "investing-5");
P.insertAfter(m, "l1", "An index tracker aims to copy a market index", [
  p("Many trackers are exchange-traded funds: a basket of securities that trades on a stock exchange like a single share, so one purchase buys a broad portfolio. {{os-ch12}}")
]);
P.save(m);

m = P.load(C, "investing-6");
P.insertAfter(m, "l1", "Mackay's account of the Dutch tulip mania", [
  p("A modern version is buying new share issues the moment they list. Burton Malkiel, cited in the OpenStax textbook, reports that new issues have underperformed the market by about 4% a year, and launching one costs the company 5% to 8% of the money raised. {{os-ch12}}")
]);
P.insertAfter(m, "l2", "Estimates are fragile", [
  p("Fisher explains where value comes from: an orchard is worth 100,000 because its net crop is worth 5,000 a year at 5 per cent interest, not the other way round. {{fisher30-ch3}} Our inference: value an investment by the income it can produce, and treat a price that the income cannot support as speculation.")
]);
{ const L = m.obj.lessons.find(l => l.id === "l4");
  const i = L.blocks.findIndex(b => JSON.stringify(b).includes("Urgency: a deadline"));
  L.blocks.splice(i + 1, 0, p("Fisher's list of what makes people spend now at the expense of later is still a good mirror: short-sightedness, a weak will, the habit of spending freely, following fashion, and giving in to high-powered salesmen of things that commit the buyer beyond their income. {{fisher30-ch4}}")); }
P.save(m);
console.log("applied b");
