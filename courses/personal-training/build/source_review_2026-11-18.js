/* Personal Training: findings from the source reviews of 18/11/2026
   (UK CMO guidelines ukcmo-2026, WHO 2020 full guideline who-2020, US Physical Activity Guidelines pag-2018).
   Findings are taught inside the topic lessons; no add-on lessons.
   node courses/personal-training/build/source_review_2026-11-18.js */
const P = require("../../../_template/course_patch.js");
const C = "personal-training";
const p = x => ({ t: "p", x });
const check = (q, o, a, w) => ({ t: "check", q, o, a, w });
function setP(m, lid, needle, x) {
  const { L, i } = P.find(m, lid, needle);
  if (L.blocks[i].t !== "p") throw new Error("not a paragraph: " + needle);
  L.blocks[i].x = x;
}
function setW(m, lid, needle, w) {
  const { L, i } = P.find(m, lid, needle);
  if (L.blocks[i].t !== "check") throw new Error("not a check: " + needle);
  L.blocks[i].w = w;
}

/* ---------- Module 1 ---------- */
let m = P.load(C, "personal-training-1");

// l2 weekly targets: dose-response, UK wording, the 2-to-1 rule, intensity
P.insertAfter(m, "l2", "The rating was a strong recommendation based on moderate-certainty evidence", [
  p("In the device-measured studies the WHO reviewed, the biggest drop in risk came by about 24 minutes a day of moderate-to-vigorous activity (about 168 minutes a week), and the drop in mortality levelled off beyond 300 minutes a week with no rise in harm. {{who20-adults}}"),
  p("The US guidelines prefer spreading aerobic activity over at least 3 days a week, which may also lower the risk of injury and excessive fatigue. {{pag-aerobic}}")
]);
setP(m, "l2", "The UK Chief Medical Officers publish their own adult guidelines",
  "The UK Chief Medical Officers set the same core target for adults aged 19 to 64: at least 150 minutes of moderate activity, or 75 minutes of vigorous activity, or even shorter durations of very vigorous activity such as sprinting or stair climbing, or a mix. {{ukcmo-adults}}");
P.insertAfter(m, "l2", "set the same core target for adults aged 19 to 64", [
  p("The UK report stresses that there are no absolute thresholds: benefits come both below and above the targets, and the gain per extra minute is largest for people doing fewer than 30 minutes a week. {{ukcmo-intro}}"),
  { t: "h", x: "How hard is moderate?" },
  p("The UK talk test: being able to talk but not sing means moderate; having difficulty talking without pausing means vigorous. {{ukcmo-intro}}"),
  p("Intensity is relative to fitness, so a walk that is light for a fit young person can be moderate or vigorous for an inactive older adult. {{ukcmo-intro}}"),
  p("The US guidelines also use a 0 to 10 effort scale, where sitting is 0: moderate is 5 or 6, and vigorous starts at 7 or 8. {{pag-aerobic}}")
]);
setP(m, "l2", "The WHO does not give a conversion rate",
  "The WHO does not state a conversion rate between moderate and vigorous minutes, but the US guidelines give a rule of thumb: 2 minutes of moderate activity counts the same as 1 minute of vigorous activity. {{pag-aerobic}}");
setP(m, "l2", "a 2-to-1 trade is a sensible working rule",
  "That fits the WHO ranges of 150 moderate and 75 vigorous minutes, so this course uses 2-to-1 as its working rule.");
P.replaceText(m, "l2", "Convert vigorous to moderate-equivalent", "(our 2-to-1 rule)", "(the 2-to-1 rule)");
setW(m, "l2", "A client does 40 minutes of vigorous activity",
  "40 x 2 = 80, plus 60 = 140 moderate-equivalent minutes. That is just under 150. The 2-to-1 rule of thumb comes from the US guidelines. {{pag-aerobic}}");
P.replaceText(m, "l2", "A 2-to-1 trade between intensities", "A 2-to-1 trade between intensities is our working rule, not a WHO rule.", "A 2-to-1 trade between intensities is the US rule of thumb; the WHO does not state one.");
P.insertAfter(m, "l2", "A client says 'I only have 8 minutes at a time", [
  check("According to the UK Chief Medical Officers, which client gains the most health benefit for each extra minute of activity?",
    ["Someone doing fewer than 30 minutes a week",
     "Someone already doing about 300 minutes a week of running",
     "Someone doing about 150 minutes a week of brisk walking",
     "Someone training for a marathon at more than 600 minutes a week",
     "Everyone gains the same per minute, whatever they already do"],
    0, "The UK report says gains per extra minute are largest for people doing the least, fewer than 30 minutes a week. {{ukcmo-intro}}")
]);

// l3 strength, sitting, clearance
setP(m, "l3", "the reviewers found no dose-response evidence",
  "This was a strong recommendation. In pooled cohorts the WHO reviewed, meeting the strength guideline alone was linked to lower all-cause mortality (hazard ratio 0.80 against not meeting it), independently of aerobic activity, but the evidence was too thin to set an ideal session length. {{who20-adults}}");
P.insertAfter(m, "l3", "In pooled cohorts the WHO reviewed", [
  p("The UK report says regular strength work should count as just as important as the 150 minutes, and found measurable health benefit from over 30 and up to 120 minutes of strengthening a week. {{ukcmo-adults}}")
]);
P.insertAfter(m, "l3", "All adults should limit sedentary time", [
  p("UK pooled data link more than 6 to 8 hours of total sitting a day, and 3 to 4 hours of TV, with a higher risk of death from all causes and from heart disease. {{ukcmo-adults}}"),
  p("In an analysis of over a million adults reviewed by the WHO, about 60 to 75 minutes a day of moderate-to-vigorous activity removed the excess risk of sitting more than 8 hours a day. {{who20-adults}}")
]);
setP(m, "l3", "Pre-exercise medical clearance is generally unnecessary",
  "Pre-exercise medical clearance is generally unnecessary for people without contraindications before they start light or moderate activity no harder than brisk walking or everyday living. {{who20-recs}}");
P.insertAfter(m, "l3", "no harder than brisk walking or everyday living", [
  p("The WHO adds that inactive people who build up gradually to moderate activity have no known risk of sudden cardiac events, and that someone already doing moderate activity can step up gradually to vigorous without seeing a health-care provider. {{who20-conds}} Harder starts and known disease are where screening matters (Module 2).")
]);
P.replaceText(m, "l3", "Worked example: a first two-week ramp", "Keep later jumps smaller (our inference)", "Keep later jumps smaller, as the US guidelines advise");
P.insertAfter(m, "l3", "Worked example: a first two-week ramp", [
  p("The US guidelines judge each weekly rise by its relative size: 20 extra minutes is a 10% step for someone already doing 200 minutes, but a 50% step for someone doing 40. For inactive people they suggest raising minutes and days first, and intensity later. {{pag-safe}}")
]);
setW(m, "l3", "A client with no known disease is inactive",
  "The WHO says to start small and build, and that clearance is generally unnecessary before light or moderate activity for people without contraindications. {{who20-recs}}");

// l4 evidence
P.insertAfter(m, "l4", "It used the GRADE framework", [
  p("The labels have plain meanings. Low certainty means the true effect may be substantially different from the estimate. Good practice statements are not graded recommendations at all, but practical advice from the guideline group. {{who20-methods}}"),
  p("Self-reported activity is prone to reporting bias, and many wrist or waist devices cannot tell sitting from standing still. {{who20-methods}} So treat a client's tracker figures as estimates (our inference).")
]);
{ const L = P.lesson(m, "l4");
  const t = L.blocks.find(b => b.t === "table" && b.title === "Evidence you will meet in this course");
  t.rows.splice(1, 0,
    ["UK Chief Medical Officers' guidelines", "Government guideline from evidence reviews", "UK wording of the targets; older adults; pregnancy", "Full text"],
    ["US Physical Activity Guidelines, 2nd edition", "Government guideline from an advisory committee review", "Intensity, progression and safety", "Full text"]); }
P.save(m);

/* ---------- Module 2 ---------- */
m = P.load(C, "personal-training-2");
P.insertAfter(m, "l1", "Musculoskeletal injuries are the most common problem", [
  p("The US guidelines put the rate at about one injury per 1,000 hours of walking for exercise and fewer than four per 1,000 hours of running. Fitter people are injured less, and more total activity raises the risk. {{pag-safe}}")
]);
P.insertAfter(m, "l1", "These events most often happen in habitually inactive people", [
  p("The US guidelines give the classic case: a usually inactive adult shovelling heavy snow. Regularly active people have the lowest risk of cardiac events, both while active and overall. {{pag-cardiac}}")
]);
setP(m, "l1", "The WHO agrees that clearance is generally unnecessary",
  "The WHO says clearance is generally unnecessary for people without contraindications before light or moderate activity up to the demands of brisk walking. {{who20-recs}}");
P.insertAfter(m, "l1", "before light or moderate activity up to the demands of brisk walking", [
  p("The US guidelines go further: no evidence shows that seeing a health-care provider first brings more benefit or fewer adverse events. People with no diagnosed condition and no symptoms such as chest pain, dizziness or joint pain most likely do not need to; advice is most worth seeking before vigorous activity or when new symptoms appear. {{pag-provider}}"),
  p("Population guidelines do not cover everyone. The WHO sends people in acute treatment, such as chemotherapy, or not yet stable on their medication to condition-specific clinical guidance. Treat that as a refer-first case. {{who20-conds}}"),
  check("A client has walked briskly for 30 minutes most days for a year, has no diagnosed condition and no symptoms, and now wants to start running. What do the WHO and US guidelines say?",
    ["They must get written medical clearance before any vigorous session, whatever their history",
     "They should stay at moderate intensity until a doctor has run an exercise stress test",
     "They can build up to vigorous gradually without seeing a provider",
     "They can start vigorous training at full volume at once, because they are already active",
     "They need clearance only if they are over 40, even with no symptoms"],
    2, "Both say a person who is habitually active at moderate intensity can increase gradually to vigorous without consulting a health-care provider; new symptoms change that. {{pag-provider}}")
]);
P.save(m);

/* ---------- Module 3 ---------- */
m = P.load(C, "personal-training-3");
P.insertAfter(m, "l1", "It found that practitioner support for autonomy", [
  p("The US guidelines make the same point from another side: health is not the only reason to be active, and people should move for any reasons that matter to them, such as fun, friends, family, the outdoors or feeling more energetic. {{pag-ch1-progress}}"),
  p("Some rewards arrive the same day. Anxiety, blood pressure, sleep and some aspects of thinking improve right after activity, while fitness, strength and lower depressive symptoms take a few weeks or months. {{pag-health}} Naming the early wins gives a new client quick evidence of competence (our coaching inference)."),
  p("Strength work helps mood too: trials in the WHO review found moderately large falls in depressive symptoms and small falls in anxiety symptoms against control groups. {{who20-adults}}")
]);
P.insertAfter(m, "l4", "Relatedness is one of the three needs", [
  p("Cost and access are real barriers. Walking needs no equipment or fees, while classes and sport can cost money, and disabled people also face barriers of access, choice of activities and other people's attitudes. {{who20-conds}}"),
  p("After an illness such as flu, the US guidelines advise restarting at a lower level and working back up gradually. {{pag-frail}}")
]);
P.save(m);

/* ---------- Module 4 ---------- */
m = P.load(C, "personal-training-4");
P.insertAfter(m, "l1", "Progressive overload: long-term adaptation", [
  p("The US guidelines state the same principles for health: overload makes the body adapt, small progressive increases limit injury risk, and benefits are specific to the systems doing the work, so walking mainly trains the lower body and heart while push-ups mainly train the chest, shoulders and upper arms. {{pag-principles}}")
]);
P.insertAfter(m, "l2", "The authors describe intensity as a mix of effort", [
  p("For older adults, a review in the WHO guideline found that lifting with fast intended velocity (moving the load as quickly as control allows) may improve general functional capacity more than moderate-velocity lifting. {{who20-adults}}")
]);
P.insertAfter(m, "l3", "Higher weekly volume gave about 3.9% greater gains", [
  p("For health rather than maximum growth, the US guidelines set a modest floor: one set of 8 to 12 repetitions per exercise is effective for strength, though 2 or 3 sets may be more effective. {{pag-strength}}")
]);
P.insertAfter(m, "l4", "The authors warn that RIR was estimated", [
  p("The US guidelines ask for sets taken to the point where another repetition would be difficult. {{pag-strength}} In RIR terms that is a low number of reps in reserve, not true failure (our reading).")
]);
P.save(m);

/* ---------- Module 5 ---------- */
m = P.load(C, "personal-training-5");
P.insertAfter(m, "l1", "A simple way to pick exercises is by movement pattern", [
  p("Warm-ups and cool-downs are standard in effective programmes. The US guidelines say a strength warm-up usually means lighter weights. Stretching improves range of motion, but its health benefits are unknown and it is unclear whether it prevents injury. {{pag-strength}}")
]);
P.insertAfter(m, "l3", "Progression means raising the demand a little at a time", [
  p("For a new lifter the US guidelines suggest starting strength work on 1 day a week at light or moderate effort, then 2 days, raising intensity slightly each week. {{pag-strength-start}}"),
  p("Older adults may need 2 to 4 weeks to adapt to each new level. Less fit clients, including many with obesity, should progress more slowly, and after a past overuse injury the next build-up should be slower. {{pag-safe}}")
]);
setP(m, "l4", "The talk test is a common rule of thumb",
  "The UK Chief Medical Officers and the US guidelines both use the talk test. {{ukcmo-intro}}");
P.insertAfter(m, "l4", "The UK Chief Medical Officers and the US guidelines both use the talk test", [
  p("On the US 0 to 10 effort scale, moderate is 5 or 6 and vigorous begins at 7 or 8. Relative effort suits older clients better than pace, because older adults use more energy for the same task. {{pag-older-int}}"),
  p("For an inactive client the US guidelines sketch a walking start: 5 minutes of walking several times a day, 5 to 6 days a week, building to 10 minutes three times a day before raising the pace. {{pag-strength}}"),
  p("High-intensity interval training may give reductions in cardiovascular risk factors similar to continuous moderate work, and adults with overweight or obesity tend to gain more from it. {{pag-weight}}")
]);
P.save(m);

/* ---------- Module 6 ---------- */
m = P.load(C, "personal-training-6");
P.insertAfter(m, "l3", "Protein advice has extra cautions", [
  p("Diet is the main factor in weight management; activity plays a supporting role and improves health at any weight. {{ukcmo-intro}}"),
  p("The US guidelines add that many people need more than 150 minutes a week to hold their weight, that losing more than 5% of body weight may take over 300, and that strength work helps keep lean mass during weight loss. {{pag-weight}}"),
  p("Clients on GLP-1 weight-loss drugs lose muscle as well as fat. The UK report says strength work is likely to be especially important for keeping muscle, though the evidence is still emerging. {{ukcmo-intro}}")
]);
P.insertAfter(m, "l4", "The recommendation now applies to all older adults", [
  p("Muscle mass and bone density decline naturally from around 50 years of age, which is why strength work matters before old age. {{ukcmo-intro}}"),
  p("The UK report asks adults aged 65 and over to work on strength, balance and flexibility on at least 2 days a week, and suggests a trained professional supervises new exercises at first for people with frailty, moderate-to-severe dementia, vertebral fractures or regular falls. {{ukcmo-older}}"),
  p("Its practical ideas include sit-to-stands, stair climbing and 'walk and rest for a minute' for people whose function is slipping. {{ukcmo-older}}"),
  p("In the WHO evidence review, exercise cut the rate of falls by about 23% (rate ratio 0.77), and most falls trials used about 3 sessions a week. {{who20-adults}}"),
  p("For frail older adults, the US guidelines report that multicomponent activity of at least moderate intensity, 3 or more times a week for 30 to 45 minutes a session over at least 3 to 5 months, works best. {{pag-frail}}")
]);
P.insertAfter(m, "l4", "Regular strength training is recommended for pregnant and postpartum women", [
  p("The WHO asks for at least 150 minutes of moderate activity a week through pregnancy and after birth, and says women who were vigorously active before pregnancy can continue. {{who20-recs}}"),
  p("The UK report adds that vigorous activity is not recommended for women who were inactive before, and that after the 6 to 8 week postnatal check intensity can build from moderate to vigorous over at least 3 months. {{ukcmo-adults}}"),
  p("WHO safety points: avoid excessive heat, contact sports, activities with a high risk of falling, high altitude when not acclimatised, and lying on the back after the first trimester; daily pelvic floor training may reduce incontinence; return gradually after a Caesarean section, with a health-care provider. {{who20-recs}}"),
  p("In pregnancy, perceived effort (5 to 6 out of 10) or the talk test is a better guide to intensity than heart rate. {{pag-preg}}")
]);
P.insertAfter(m, "l4", "Physical activity is considered safe and beneficial for adults with the chronic conditions", [
  p("Condition notes from the US guidelines: in hypertension the benefits are larger than in people with normal blood pressure and medication may need adjusting as activity rises, so the doctor should know; in type 2 diabetes watch blood glucose, footwear and foot injuries; in osteoarthritis, low-impact activities that are not painful, such as swimming, walking and tai chi, do not worsen the disease when done safely. {{pag-conds}}"),
  p("The UK review found no evidence that appropriate activity is a risk for disabled adults, and says myths that it is inherently harmful should be dispelled. {{ukcmo-adults}}")
]);
P.insertAfter(m, "l4", "Wheelchair users and people with low mobility", [
  check("A client is 20 weeks pregnant, her pregnancy is uncomplicated, and she has trained regularly for years. Which change do the WHO and US guidelines advise?",
    ["Stop all strength training until after the baby is born",
     "Keep her heart rate under one fixed number in every session",
     "Cut activity to under 60 minutes a week to be safe",
     "Move exercises done lying on her back into other positions",
     "Add high-altitude hikes to build stamina for labour"],
    3, "Both advise avoiding exercise lying on the back after the first trimester; previously active women can usually continue, and effort or the talk test guides intensity better than heart rate. {{pag-preg}}")
]);
P.save(m);
console.log("done");
