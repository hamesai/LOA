/* FAQ entries shown as dropdowns. COURSE_FAQ.library is the home page; it also shows at the bottom of every course, after the course's own
   questions, which live in courses/<id>/meta/faqs.js. Format: [question, answer]. */
window.COURSE_FAQ = window.COURSE_FAQ || {};
window.COURSE_FAQ.library = [
 [
  "What is the Library of Alexandria?",
  "The Library of Alexandria is a free, browser-based set of practical courses. Each course is a self-contained workspace with lesson slides, written notes, a Practice tab, a quiz, tools for calculations and a ledger where you record your own work. There are ten courses at the moment, from greenhouse growing and camping to investing and public speaking.\n\nEvery lesson is written from sources. The sources are numbered and listed at the end of each module, so you can check a claim before you rely on it. The lessons are meant to be worked rather than just read. Each module ends with challenges that have answer keys and self-checks, spaced review of earlier material, and a capstone that asks you to produce something real.\n\nYour progress is stored in this browser only. There is no account, and nothing you tick, write or measure is sent to a server. You can download your ledger as JSON or CSV at any time.\n\nThe library is not a qualification and does not replace professional advice. Where the law or a local rule matters, the course says what to check and where. The lecturers are simulated voices, not quotations, and each course's About section says what to have ready."
 ],
 [
  "Who is it for?",
  "Adults who want to learn a practical skill properly, starting from the basics, without a fee or an account. Most courses start at beginner level. A few assume some exposure, and each course's About section says what to have ready before you begin."
 ],
 [
  "How do I start a course?",
  "Open the course card, read its About section if you are unsure whether it suits you, then open the first module. Start on the Slides tab and work through the lessons. Use Notes to reread a lesson in full, Practice to test yourself, Quiz to check your first-try score, and Tools and Resources when you need them."
 ],
 [
  "What is in each module?",
  "Lesson slides built from the same text as the notes, a Practice tab in six steps, a quiz where the course has one, tools for the calculations, and a resources list. The module lists its sources, and each lesson cites them by number."
 ],
 [
  "How does the Practice tab work?",
  "It runs in six steps: warm up, practice the method, challenges, check your work, review, and apply and reflect. Attempt each challenge before you open its answer key and self-check. Tick a challenge when you pass its self-check. The top of the tab shows the pass condition, so you know what done looks like."
 ],
 [
  "Who are the lecturers?",
  "Each course has a lecturer who sets the standard and writes a short brief for the module. They are simulated voices, written for teaching and modelled on the documented method of a real figure. They are not quotations from those people, and the page labels them as simulated wherever they appear. Each lecturer's method lesson cites its own sources."
 ],
 [
  "How reliable are the sources?",
  "Lessons cite numbered sources, listed at the end of each module. Where a lesson rests on a secondary summary rather than the full text, a callout says so. Check any figure, date or legal point that matters to you against the source before you act on it, because these change."
 ],
 [
  "What is Source Discovery?",
  "Source Discovery is a search Claude runs for one course to find sources that would deepen it: open texts, manuals, official guidance and public-domain books. It lists each candidate with its licence, whether the full text can be opened, and the module it would add to. Nothing enters a course until you choose it.\n\nA chosen source is downloaded where its licence allows, ingested and read in full before any claim from it reaches a lesson. Each finding is then used in a lesson or closed with a reason. The Sources panel at the bottom of a course shows how each source was found: by Source Discovery, supplied by you, or not recorded for sources added before the course kept this. To run it, ask Claude to run Source Discovery for a course by name."
 ],
 [
  "Is this a qualification or professional advice?",
  "No. The courses teach method and sound habits. They do not certify you, and they are not personal advice. The investing course, for example, is general education and not a recommendation about what you should buy. Where the law or a local rule matters, such as wild camping or running a food business, the course tells you what to check and where."
 ],
 [
  "How useful and helpful is it?",
  "It is most useful if you want to learn a practical skill and then do it. The method follows well-established ideas about learning. You try to answer before you see the answer, so the pre-checks and challenges come first. You return to earlier material on a schedule, through the spaced review. Each module ends with something you make or do, not only something you read.\n\nTo get the most from it, attempt each challenge before you open its answer key, and tick a challenge only when you can show the result. Keep the ledger as well, so you can see your progress over weeks rather than within one sitting.\n\nIt has limits. It has not been tested with learners, so there are no outcome figures to quote. It cannot watch you work or correct your practical work, and it does not replace a teacher, a coach or a licensed professional. The lecturer reviews are simulated, and the review prompt works only when you paste your own work into Claude yourself.\n\nIt suits people who want to build a skill step by step. It suits less well anyone who wants a quick answer, or a subject where a person's feedback matters most, such as first aid, electrical work or speaking a language with a native speaker. Use it alongside those, not instead of them."
 ],
 [
  "Where is my progress stored?",
  "In this browser only, in local storage. It is not synced to other devices and is not kept in an account. Download the ledger as JSON or CSV from a course page to keep a copy or move it. Clearing site data for this page erases it, so download first if the work matters to you."
 ],
 [
  "What do the belts mean?",
  "Belts mark completed stages and adapt to the number of modules in a course. White comes first, Brown means every module is done, and Black means the capstone is complete."
 ],
 [
  "How do I undo a completion?",
  "Open the module and use the remove-completion option, or untick it in the module list. A ledger entry records the change."
 ],
 [
  "Do I need an account or to pay?",
  "No account and no payment. Use the same browser each time, because your work is kept there."
 ],
 [
  "Does it work on a phone?",
  "Yes. Pages are laid out for phone width, with no sideways scrolling on the module pages."
 ],
 [
  "Does it work offline?",
  "Once the files are on your device, the lessons, practice, quizzes and ledger work without a connection. Video and external links need one."
 ],
 [
  "Why is there no 'Get the review here' button?",
  "That button appears only when the archive is run through the local helper (_template/serve_archive.py) and a model is available. Without it, use Copy review prompt and paste the prompt into Claude."
 ],
 [
  "How do I add a course?",
  "Ask Claude to run Library of Alexandria on your subject. The course is scoped, written from primary sources, built from the template and added to this page. Nothing else on the page needs editing."
 ]
];
