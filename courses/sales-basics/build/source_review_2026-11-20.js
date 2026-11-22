/* Sales: findings from the source reviews of 19-20/11/2026
   (CMA207 unfair commercial practices cma207, ICO electronic mail ico-email-full,
   ICO live calls ico-live-full, ICO business-to-business ico-b2b-full). Findings are taught inside the topic lessons.
   node courses/sales-basics/build/source_review_2026-11-20.js */
const P = require("../../../_template/course_patch.js");
const C = "sales-basics";
const p = x => ({ t: "p", x });
const check = (q, o, a, w, kind) => Object.assign({ t: "check", q, o, a, w }, kind ? { kind } : {});
function setX(m, lid, needle, x, type) {
  const { L, i } = P.find(m, lid, needle);
  if (L.blocks[i].t !== (type || "p")) throw new Error("wrong block type: " + needle);
  L.blocks[i].x = x;
}

/* ---------- Module 2: prospecting ---------- */
let m = P.load(C, "sales-basics-2");
P.insertAfter(m, "l2", "The sources in this lesson are US books from around 2009", [
  p("Two UK rules change how you use these sources. Numbers from directories, websites or bought-in lists get no exemption: before any prospecting call, screen them against the TPS, the CTPS and your own do-not-call list, and treat a list supplier's TPS check older than 28 days as out of date. {{ico-live-full}}"),
  p("Details found on a company website, Companies House, social media or in the press still fall under the calling and email rules, and under UK GDPR if they name a person. People on professional networking sites are usually there in a personal professional capacity, so a direct message to them is not business-to-business marketing. {{ico-b2b-full}}")
]);
P.insertAfter(m, "l4", "Keep records current. People change jobs", [
  p("Your records also carry legal duties. Business cards typed into a contacts database bring UK GDPR into play, and if you collect someone's details from a public or third-party source you must tell them within one month. When anyone asks not to be contacted, add them to a suppression list instead of deleting them, so they are screened out of every future list. {{ico-b2b-full}}")
]);
P.save(m);

/* ---------- Module 5: closing ---------- */
m = P.load(C, "sales-basics-5");
setX(m, "l3", "Where persistence ends and pressure begins matters", "Where persistence ends and pressure begins matters. UK law bans aggressive practices that use harassment, coercion or undue influence, meaning exploiting a position of power to significantly limit someone's ability to make an informed decision. The factors include the timing and place of the practice, threatening language, exploiting a vulnerability and threatening action that cannot legally be taken. {{cma207-aggr}} Make it easy to say no, and accept no. Also note: the text's 'three to five or more attempts' means asking at natural points in a conversation, not repeating the same push.", "callout");
P.insertAfter(m, "l3", "Where persistence ends and pressure begins matters", [
  check("At the end of a home visit, a customer hesitates. Which move does UK law treat as a risk of an aggressive practice?",
    ["Summarising the benefits they said mattered, then asking for the order",
     "Offering to drive them to the bank now so they can pay in cash",
     "Leaving a written quote and agreeing a time to call back",
     "Asking a trial-close question about which colour they prefer",
     "Answering their objection about price with the actual running costs"],
    1, "Taking a consumer to the bank to pay immediately is one of the CMA's examples of pressure that can amount to an aggressive practice. {{cma207-aggr}}", "application")
]);
P.save(m);

/* ---------- Module 6: fair selling and contact rules ---------- */
m = P.load(C, "sales-basics-6");
setX(m, "l2", "Consumer law in Ireland and the EU protects people", "In the UK, unfair selling to consumers has been governed since 6 April 2025 by the Digital Markets, Competition and Consumers Act 2024, which replaced the 2008 unfair trading regulations. It works in two layers: 32 practices that are banned outright, and misleading actions, misleading omissions, aggressive practices and failures of professional diligence, which are unlawful if they are likely to change the average consumer's decision. {{cma207-overview}} Ireland and the EU have their own version: there, a practice is unfair if it misleads, pressures or is likely to distort the buying decision. {{ci-unfair}}");
P.insertAfter(m, "l2", "In the UK, unfair selling to consumers has been governed", [
  p("A salesperson is covered personally: anyone acting on a business's behalf counts as a trader, and a 'transactional decision' includes agreeing to a sales presentation, not only buying. Judge your pitch from the viewpoint of a vulnerable group you could foresee, for example older people, someone recently bereaved or someone who has just lost a job. {{cma207-core}}")
]);
setX(m, "l2", "Scope matters. Citizens Information says", "Scope matters. In both countries these consumer rules cover sales by businesses to consumers, not sales between businesses or private sales between consumers. {{ci-unfair}} In the UK, business-to-business marketing is covered instead by the Business Protection from Misleading Marketing Regulations 2008, and a supplier's claims that reach consumers through retailers must still be true. {{cma207-core}}", "callout");
P.insertAfter(m, "l2", "The Competition and Consumer Protection Commission (CCPC) enforces", [
  { t: "h", x: "The UK banned list, for a salesperson" },
  p("The banned practices that matter most in selling include: falsely saying an offer is only available for a limited time to force a quick decision; presenting legal rights, such as the 14-day cancellation right, as a special feature of your offer; exaggerating risks to the customer's safety if they do not buy; posing as a private seller; making someone feel they cannot leave until they sign; ignoring a request to leave or not return to their home; persistent and unwanted calls, emails or other approaches; and telling them your job is at risk if they do not buy. {{cma207-banned}}"),
  p("The stakes are high: enforcers can impose penalties up to £300,000 or 10% of worldwide turnover, whichever is higher, and most banned practices are also criminal offences. {{cma207-banned}} Those offences are strict liability, so intent does not have to be proved, and on indictment can carry up to two years' imprisonment. {{cma207-offences}}"),
  p("Truthful words can still mislead. Back every factual claim with evidence, and remember that the overall presentation counts: 'Be quick! We've sold 10 in the last 5 minutes' misleads if stock is plentiful. {{cma207-mislead}} You must also make the commercial intent clear at the start: a phone 'survey' that turns into a sales pitch is a misleading omission. {{cma207-omit}}"),
  p("Any message that gives a product and its price, from an email offer to a social media post, must show the main characteristics, the total price including compulsory charges, who you are and your business address, and any cancellation rights, clearly and in good time. Adding compulsory fees late in the process, known as drip pricing, is banned. {{cma207-itp}}")
]);
P.insertAfter(m, "l2", "Any message that gives a product and its price", [
  check("A phone script opens: 'We're doing a short survey about home security in your street.' Two minutes later it offers an alarm system. What does UK law say?",
    ["It is fine, because the customer can still say no to the alarm",
     "It is fine if the script is only used on business numbers",
     "It fails to make the commercial intent clear at the start",
     "It is only a problem if the alarm is priced above market",
     "It is allowed once the caller gives their name and company"],
    2, "The CMA uses exactly this example: a call presented as a survey that becomes a sales pitch fails to identify its commercial intent. {{cma207-omit}}", "application")
]);
P.insertAfter(m, "l3", "In the UK, direct marketing by phone or electronic mail is regulated", [
  p("The email rule covers more than email: texts, picture and video messages, voicemails and direct messages on social media all count as electronic mail. {{ico-email-types}} You must not hide who you are, and every message needs a valid address for opting out. {{ico-email-rules}} There is no email or text version of the TPS. {{ico-email-notps}} Asking customers to forward your offer to friends, or to hand over friends' details, still makes you responsible for those messages. {{ico-email-viral}}")
]);
P.insertAfter(m, "l3", "Business-to-business marketing still touches personal data", [
  p("For live calls, including business calls: say who is calling, display your number, give contact details if asked, and screen against both the TPS and the CTPS, because sole traders and some partnerships register on the TPS. If you cannot tell whether a contact is a company or a sole trader, treat it as an individual before you email. {{ico-b2b-full}}"),
  p("To call a TPS-registered number, the person must have specifically told you, by name, that they agree to your marketing calls, and you need a record of it; failing to tick an opt-out box is not enough. If someone you have called later registers with the TPS, stop calling unless they had already agreed. {{ico-live-full}}")
]);
P.save(m);
console.log("done");
