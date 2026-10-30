/* FAQ entries shown as dropdowns. COURSE_FAQ.library is the home page; the whole library list is also shown at the bottom of every course, after its own questions; each other key is a library id. Format: [question, answer]. */
window.COURSE_FAQ = {
  library: [
    ["What is the Library of Alexandria?", "The Library of Alexandria is a free, browser-based set of practical courses. Each course is a self-contained workspace with lesson slides, written notes, a Practice tab, a quiz, tools for calculations and a ledger where you record your own work. There are ten courses at the moment, from greenhouse growing and camping to investing and public speaking.\n\nEvery lesson is written from sources. The sources are numbered and listed at the end of each module, so you can check a claim before you rely on it. The lessons are meant to be worked rather than just read. Each module ends with challenges that have answer keys and self-checks, spaced review of earlier material, and a capstone that asks you to produce something real.\n\nYour progress is stored in this browser only. There is no account, and nothing you tick, write or measure is sent to a server. You can download your ledger as JSON or CSV at any time.\n\nThe library is not a qualification and does not replace professional advice. Where the law or a local rule matters, the course says what to check and where. The lecturers are simulated voices, not quotations, and each course's About section says what to have ready."],
    ["Who is it for?", "Adults who want to learn a practical skill properly, starting from the basics, without a fee or an account. Most courses start at beginner level. A few assume some exposure, and each course's About section says what to have ready before you begin."],
    ["How do I start a course?", "Open the course card, read its About section if you are unsure whether it suits you, then open the first module. Start on the Slides tab and work through the lessons. Use Notes to reread a lesson in full, Practice to test yourself, Quiz to check your first-try score, and Tools and Resources when you need them."],
    ["What is in each module?", "Lesson slides built from the same text as the notes, a Practice tab in six steps, a quiz where the course has one, tools for the calculations, and a resources list. The module lists its sources, and each lesson cites them by number."],
    ["How does the Practice tab work?", "It runs in six steps: warm up, practice the method, challenges, check your work, review, and apply and reflect. Attempt each challenge before you open its answer key and self-check. Tick a challenge when you pass its self-check. The top of the tab shows the pass condition, so you know what done looks like."],
    ["Who are the lecturers?", "Each course has a lecturer who sets the standard and writes a short brief for the module. They are simulated voices, written for teaching and modelled on the documented method of a real figure. They are not quotations from those people, and the page labels them as simulated wherever they appear. Each lecturer's method lesson cites its own sources."],
    ["How reliable are the sources?", "Lessons cite numbered sources, listed at the end of each module. Where a lesson rests on a secondary summary rather than the full text, a callout says so. Check any figure, date or legal point that matters to you against the source before you act on it, because these change."],
    ["What is Source Discovery?", "Source Discovery is a search Claude runs for one course to find sources that would deepen it: open texts, manuals, official guidance and public-domain books. It lists each candidate with its licence, whether the full text can be opened, and the module it would add to. Nothing enters a course until you choose it.\n\nA chosen source is downloaded where its licence allows, ingested and read in full before any claim from it reaches a lesson. Each finding is then used in a lesson or closed with a reason. The Sources panel at the bottom of a course shows how each source was found: by Source Discovery, supplied by you, or not recorded for sources added before the course kept this. To run it, ask Claude to run Source Discovery for a course by name."],
    ["Is this a qualification or professional advice?", "No. The courses teach method and sound habits. They do not certify you, and they are not personal advice. The investing course, for example, is general education and not a recommendation about what you should buy. Where the law or a local rule matters, such as wild camping or running a food business, the course tells you what to check and where."],
    ["How useful and helpful is it?", "It is most useful if you want to learn a practical skill and then do it. The method follows well-established ideas about learning. You try to answer before you see the answer, so the pre-checks and challenges come first. You return to earlier material on a schedule, through the spaced review. Each module ends with something you make or do, not only something you read.\n\nTo get the most from it, attempt each challenge before you open its answer key, and tick a challenge only when you can show the result. Keep the ledger as well, so you can see your progress over weeks rather than within one sitting.\n\nIt has limits. It has not been tested with learners, so there are no outcome figures to quote. It cannot watch you work or correct your practical work, and it does not replace a teacher, a coach or a licensed professional. The lecturer reviews are simulated, and the review prompt works only when you paste your own work into Claude yourself.\n\nIt suits people who want to build a skill step by step. It suits less well anyone who wants a quick answer, or a subject where a person's feedback matters most, such as first aid, electrical work or speaking a language with a native speaker. Use it alongside those, not instead of them."],
    ["Where is my progress stored?", "In this browser only, in local storage. It is not synced to other devices and is not kept in an account. Download the ledger as JSON or CSV from a course page to keep a copy or move it. Clearing site data for this page erases it, so download first if the work matters to you."],
    ["What do the belts mean?", "Belts mark completed stages and adapt to the number of modules in a course. White comes first, Brown means every module is done, and Black means the capstone is complete."],
    ["How do I undo a completion?", "Open the module and use the remove-completion option, or untick it in the module list. A ledger entry records the change."],
    ["Do I need an account or to pay?", "No account and no payment. Use the same browser each time, because your work is kept there."],
    ["Does it work on a phone?", "Yes. Pages are laid out for phone width, with no sideways scrolling on the module pages."],
    ["Does it work offline?", "Once the files are on your device, the lessons, practice, quizzes and ledger work without a connection. Video and external links need one."],
    ["Why is there no 'Get the review here' button?", "That button appears only when the archive is run through the local helper (_template/serve_archive.py) and a model is available. Without it, use Copy review prompt and paste the prompt into Claude."],
    ["How do I add a course?", "Ask Claude to run Library of Alexandria on your subject. The course is scoped, written from primary sources, built from the template and added to this page. Nothing else on the page needs editing."]
  ],
  "greenhouse-year": [
    ["What does the year-long cycle cover?", "Site and climate, crop planning, seed starting, feeding, climate control, pest management, records and a yearly review."],
    ["Where do the numbers come from?", "Mostly university extension guides, cited in each lesson. Check temperatures and dates against your own climate and hemisphere."],
    ["Do I need a greenhouse to start?", "The early modules suit planning a new one. Record real readings in the ledger once you have a structure."]
  ],
  "camping-basics": [
    ["Is wild camping legal?", "It depends on where. Scotland allows lightweight camping on most land if you act responsibly, parts of Dartmoor allow backpack camping, and elsewhere in the UK and Ireland you generally need the landowner's permission or a campsite. Module 1 sets this out with sources."],
    ["Can I rely on the advice for UK weather?", "Several gear sources are from a US retailer. The lessons say where UK conditions differ. Check the Met Office forecast for your pitch."],
    ["What if something goes wrong?", "Call 999 or 112, ask for Police, then Mountain Rescue in the hills, and stay where you are until contacted. Module 6 has a call card."],
    ["Does the course teach first aid?", "No. It covers recognising hypothermia, carbon monoxide and unsafe water. Burns, blisters and ticks were not covered by the sources read, so take a first-aid course and check NHS guidance."],
    ["Do I need to carry a compass?", "A phone can fail. Module 5 teaches map and compass basics with an Ordnance Survey guide."]
  ],
  "sales-basics": [
    ["Is this legal advice?", "No. Module 6 summarises UK and Irish guidance for beginners. Check the current ICO and Irish Data Protection Commission pages and take advice for your situation."],
    ["How current is the core textbook?", "It was written around 2009 to 2012 from a US viewpoint. The process is stable, but its statistics and company examples are dated, and the lessons flag this."],
    ["Can I cold-call or email prospects?", "Often yes, with checks. In the UK, screen live calls against the TPS and CTPS, and marketing emails to individuals and sole traders generally need consent. Module 6 explains."],
    ["Do consumer protection rules apply to business sales?", "The Irish consumer rules cited cover sales to consumers, not business-to-business sales. Honesty and other laws still apply."],
    ["What is the quickest way to use the course?", "Learn the seven steps in Module 1, then complete the capstone plan and role-play to practise them."]
  ],
  "public-speaking": [
    ["Is this course for UK and Irish speakers?", "The structure and skills apply anywhere, but the core textbook is American (2013). Its news, political and legal examples are US ones, and the lessons say where to swap in local examples."],
    ["Does it cover free speech, defamation or campaigning law?", "No. The textbook's free-speech section is about the US First Amendment and was not used. Check UK or Irish rules before speaking about named people, running a campaign or raising money."],
    ["I get very nervous. Will this help?", "Module 1 gives a plan and uses NHS guidance on breathing and social anxiety. If anxiety stops you doing everyday things, speak to a GP; the course is not treatment."],
    ["Do I need an audience to do the capstone?", "You need at least one live listener, in person or on a call, plus a recording of yourself. A friend or a local club both work."],
    ["Are the percentages about visual learning reliable?", "Treat them with caution. The textbook quotes them without method, and the course says so where they appear."]
  ],
  "vintage-reselling": [
    ["Is this legal or tax advice?", "No. It summarises GOV.UK, HMRC and Trading Standards guidance for England, Scotland and Wales, read through excerpts. Check the current pages and speak to an accountant before you scale up."],
    ["Does it cover Ireland or Northern Ireland?", "No. The Irish Revenue pages could not be loaded, and Northern Ireland guidance is published separately by NI Business Info. Check both if you sell from there."],
    ["Are the fee percentages current?", "They are the eBay UK figures shown when the pages were read (October 2026). Fees change and may carry VAT, so check your own category and invoice. Etsy UK rates and Depop were not confirmed."],
    ["Can I use the free private-seller tier if I buy stock to resell?", "Probably not as a private seller. Trading Standards guidance treats regularly buying goods to resell as an indicator of being in business. Read each platform's rules for professional sellers."],
    ["How do I date items?", "Module 3 teaches an evidence ladder from receipts and hallmarks down to style and smell. This part is our summary of dealer practice, not a sourced standard."]
  ]
};

/* africa-pre-colonial entries */
window.COURSE_FAQ["africa-pre-colonial"] = [
 [
  "Why do claims carry tags like [CONTESTED]?",
  "Because the strength of evidence varies. FIRM means several independent kinds of evidence agree. PROBABLE means most specialists accept it. CONTESTED means historians disagree, TRADITIONAL DATE means the date comes from tradition, and THIN EVIDENCE means few sources survive. Untagged text is background that is not in dispute."
 ],
 [
  "Why is it called pre-colonial if colonisation had begun?",
  "The label is a convenience that measures Africa against a European event. Algeria was invaded in 1830, the Cape and Natal were already British, and Egypt was occupied in 1882. Module 8 tests the label."
 ],
 [
  "Did you read the books named in the lessons?",
  "No. They are pointers taken from the working library. What was opened (the Slave Voyages table and several encyclopaedic and biographical pages, in excerpt form) is listed in the sources note."
 ],
 [
  "Are the museum and restitution details current?",
  "Positions change as institutions decide. Lessons mark them check current, so look at the museum's own page before citing them."
 ],
 [
  "Is the second period covered?",
  "Africa from c. 1880 to the present is a separate course, Post-Colonial Africa."
 ]
];

/* africa-post-colonial entries */
window.COURSE_FAQ["africa-post-colonial"] = [
 [
  "Why do claims carry tags like [CONTESTED] and [check current]?",
  "Because the strength of evidence varies. FIRM means several independent sources agree. PROBABLE means most specialists accept it. CONTESTED means historians or parties disagree. ESTIMATE marks a number with a wide range, THIN EVIDENCE means few sources survive, and check current marks events that may have changed since the sources were read."
 ],
 [
  "Why is the Willie Lynch letter in a history course if it is fake?",
  "Because millions have met it, and learning to test it is a core skill. The course says plainly that it is a modern hoax, shows why, and points to real evidence of slaveholder tactics. It never presents the letter's claims as history."
 ],
 [
  "Is the Willie Lynch letter really a hoax?",
  "Yes. Historians including W. Jelani Cobb judge it a hoax, the Baltimore Sun found no source for it in 1998, and the language contains words not in use in 1712. Roy Rosenzweig is reported to agree, though we could not open his article."
 ],
 [
  "Why are death tolls given as ranges?",
  "Because the counts rest on different methods, categories and baselines, and many have no census behind them. A range with its method is more honest than a single figure."
 ],
 [
  "Did you read the books named in the lessons?",
  "No. They are pointers from the working library. Three articles on the Willie Lynch letter were read in full, and other sources were opened in excerpt form. The sources note lists what was and was not read."
 ],
 [
  "Are the recent events current?",
  "They are snapshots from the dates given. Sudan, South Sudan, the Sahel, Tunisia and Libya may have changed, so check a current source before citing them."
 ]
];
