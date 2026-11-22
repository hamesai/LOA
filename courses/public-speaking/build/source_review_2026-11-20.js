/* Public Speaking: findings from the source reviews of 20/11/2026
   (IPO Exceptions to copyright ipo-copyright, Defamation Act 2013 defamation-2013).
   Findings are taught inside the topic lessons.
   node courses/public-speaking/build/source_review_2026-11-20.js */
const P = require("../../../_template/course_patch.js");
const C = "public-speaking";
const p = x => ({ t: "p", x });
const check = (q, o, a, w, kind) => Object.assign({ t: "check", q, o, a, w }, kind ? { kind } : {});
function beforeTake(m, lid, blocks) {
  const L = P.lesson(m, lid);
  const i = L.blocks.findIndex(b => b.t === "take");
  L.blocks.splice(i < 0 ? L.blocks.length : i, 0, ...blocks);
}

/* ---------- Module 1: ethics ---------- */
let m = P.load(C, "public-speaking-1");
P.insertAfter(m, "l2", "The ethics pyramid", [
  p("In England and Wales the law points the same way when you talk about a named person or business. A statement is defamatory only if it causes, or is likely to cause, serious harm to their reputation, and the main defences are that what you said was substantially true, or that it was an honest opinion whose basis you made clear. {{defam-act}} So the ethical habit of only claiming what you can support is also your legal protection.")
]);
P.save(m);

/* ---------- Module 6: aids and persuasion ---------- */
m = P.load(C, "public-speaking-6");
beforeTake(m, "l2", [
  { t: "h", x: "Using other people's images and words" },
  p("The textbook's examples assume US 'fair use'. UK law works differently: you may use someone else's work without permission only under specific exceptions, such as quotation, criticism and review, which allow fair dealing with any type of work as long as you give a sufficient acknowledgement. {{ipo-review}}"),
  p("There is no fixed amount that counts as fair. The test is how a fair-minded and honest person would have dealt with the work: did your use substitute for the original and cost the owner sales, and did you take only as much as you needed? Usually only part of a work may be used. {{ipo-fair}}"),
  p("Two traps. The exception for reporting current events does not cover photographs, so do not lift a news photo to decorate a slide. {{ipo-review}} And the teaching exception for showing films or playing music covers lessons for teachers and pupils, not a talk to a club or workplace. {{ipo-teach}} When in doubt, use your own images, openly licensed ones, or ask permission, and credit the source on the slide. {{ipo-ack}}"),
  check("You are giving a talk to a local business group and want a full-page photograph from this morning's newspaper on a slide. What does UK copyright guidance say?",
    ["It is fine if you credit the newspaper in small print under the image",
     "It is fine because the photo is about a current news event",
     "The current-events exception does not cover photographs",
     "It is fine as long as no one in the audience paid to attend",
     "It is fine because showing it in a talk counts as private study"],
    2, "Fair dealing for reporting current events covers any work except a photograph, and a business group is not covered by the teaching exceptions. {{ipo-review}}", "application")
]);
{ const L = P.lesson(m, "l4");
  const c = L.blocks.find(b => b.t === "callout" && /Persuasion in the UK and Ireland/.test(b.x));
  c.x = "Persuasion in the UK and Ireland also sits inside rules the textbook does not cover. Discrimination, election, charity and advertising rules apply to some speeches, and political or charitable fundraising can be regulated; we have not read those rules, so check before you campaign or collect money. Defamation is covered below for England and Wales only; Scotland and Northern Ireland have their own law."; }
P.insertAfter(m, "l4", "Persuasion in the UK and Ireland also sits inside rules", [
  p("If a persuasive speech names a person or a business, the Defamation Act 2013 applies in England and Wales. A 'statement' includes words, pictures and gestures, so slides count as well as speech. A statement is only defamatory if it causes or is likely to cause serious harm to reputation, which for a business means serious financial loss. {{defam-act}}"),
  p("The defences shape good persuasive practice. Truth: what you said is substantially true. Honest opinion: it was clearly an opinion, you indicated the facts it rests on, an honest person could have held it on those facts, and you actually held it. Public interest: you spoke on a matter of public interest and reasonably believed saying it was in the public interest. {{defam-act}}"),
  check("In a speech against a planning application you plan to say a named local builder 'is a cowboy'. Which version best fits the honest-opinion defence?",
    ["Say it louder, since strong feeling makes it clear it is only an opinion",
     "Put it on a slide instead of saying it, since slides are not statements",
     "Say 'in my view' and set out the inspection findings you rely on",
     "Say it without evidence, because opinions never need support",
     "Say it as a fact, because the builder is not a public figure"],
    2, "Honest opinion needs a statement of opinion, an indication of the basis, and facts an honest person could rely on; slides count as statements too. {{defam-act}}", "application")
]);
P.save(m);
console.log("done");
