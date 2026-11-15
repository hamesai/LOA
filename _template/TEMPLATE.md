# Course template

Small Scale Greenhouse is the finished example. Every other course follows the same pattern, so a new course is mostly writing, not coding.

## Make a new course

```bash
python _template/new_course.py <id> "<Course title>" --modules 6 --level Beginner --summary "What the learner can do afterwards"
```

This creates, next to `index.html`:

| File | What it holds |
|---|---|
| `pack-<id>.js` | The library card details, the module list, per-module details, quizzes. Every `TODO` must be replaced. |
| `course-<id>-<n>.js` | The lessons for module *n*. `course-<id>-cap.js` is the capstone. |
| `course-<id>-refs.js` | The sources the lessons cite. |
| `course-<id>-figs.js` | The diagrams the lessons draw. |

The script also registers the files in `index.html` between the `COURSES` markers. Nothing else on the page needs editing. The course appears in the library at once.

Then check your work:

```bash
python _template/check_course.py <id>
```

It reports leftover `TODO`s, citations with no source, figures that are not drawn, missing quizzes, and thin lessons. Fix every PROBLEM. Treat every note as a question.

## The quality bar

The greenhouse course is the standard: about 4 lessons per module, 2,000 to 3,500 words of lesson text per module, a diagram or table in most lessons, a worked example, two checks and a takeaways block per lesson, and every claim traceable.

1. **Read each primary source in full before writing from it.** A search excerpt is not a reading. If you could only read part of a source, say so in the lesson or the hand-over.
2. **Cite.** Put `{{source-key}}` after each sourced sentence. Add the source to `course-<id>-refs.js` with the title, author or publisher, year and URL. For an ingested book, one ref per chapter with `b:` and `p: "Chapter N (ch-NNN.txt)"`; never cite a whole volume. Numbers appear in order of first use, and each deck ends with a sources slide.
3. **Label inference.** If you add something the sources do not say, write "our inference", "our estimate", "our arithmetic" or "our example" in that sentence.
4. **Mark invented numbers.** A worked example with made-up data must say "illustrative".
5. **Show disagreement.** When sources differ, put them side by side in a table and say how to choose.
6. **Check the arithmetic.** Work every example yourself, including dates.
7. **Say where advice stops applying.** Climate, hemisphere, country, law, safety and scale limits get a warning callout.
8. **Dates as DD/MM/YYYY** in anything the learner reads.
9. **Never reproduce third-party text.** Paraphrase, and keep any quotation under 15 words.

## Lesson blocks

Each lesson is `{ id, title, min, blocks: [...] }`. The slide deck and the Notes view are both built from the same blocks.

| Block | Fields | Becomes |
|---|---|---|
| `p` | `x` | Prose. Each sentence becomes a slide bullet, so write one idea per sentence. |
| `h` | `x` | A subheading, and the title of the slides that follow it. |
| `ul`, `ol` | `i: [..]` | Bullets or numbered steps. |
| `table` | `title`, `head`, `rows`, `src` | A table slide with a sources line. |
| `callout` | `k` (`key`, `tip`, `warn`, `note`), `x` | A highlighted note under the slide's bullets. |
| `fig` | `id`, `title`, `cap` | A diagram slide. The figure must be defined in the figs file. |
| `example` | `title`, `steps` | A worked-example slide (long ones split across slides). |
| `terms` | `i: [[term, meaning], ..]` | A key-terms slide, and the glossary in Notes. |
| `video` | `id` (YouTube) or `list`, `title`, `by`, `note`, `start` | A video slide with Play and Open buttons. Say who published it, or say it is unconfirmed. |
| `activity` | `x` | A task tied to a challenge. |
| `check` | `q`, `o`, `a`, `w` | An interactive question with feedback. |
| `take` | `i` | A key-takeaways slide. |

Slides are about 70 words at most. The page shrinks type on a dense slide so nothing scrolls, so aim for clear slides, not tiny type.

## Module package (in `pack-<id>.js`)

- `modules`: one row per module, plus an optional capstone (`kind: "capstone"`). `belt` labels are cosmetic; the real belts adapt to the number of modules.
- `details[key]`: `prereq`, `core`, `steps`, `worked`, three `challenges` (warm-up, core, stretch, each with `task`, `key` and a runnable `check`), `mistakes`, `review` questions drawn only from earlier modules, `pass`.
- `quiz[key]`: four questions with `o` options, `a` index of the right one, `w` why.
- `resources`: `{ id, library, type, title, source, modules: [n], difficulty, status, url, note }`. Types: Reference, Video, Scholarly, Book, Magazine, Images. Use a link only if you opened it. `status` is `Verified` for pages you located, `Search link` for a search.
- `libraries[0].metrics`: the measurements this course tracks, `{ "Name": "unit" }`. They fill the ledger form.

## Tools and figures

- **Figures**: define `CE.figs["<id>-name"] = function () { return svgElement; }` in the figs file. Use theme colours such as `var(--ink)` and `var(--accent)`. Prefix ids with the course id.
- **Tools** (calculators): in a course file, set `window.COURSE_TOOLS["<module key>"] = function (body, m) { ... }`. `window.CourseUI` provides `h`, `fld`, `inp`, `toolCard`, `logMetric` and more. See `TOOLS` in `index.html` for the greenhouse examples.

## Belts and the ledger

Belts come from the module count: White after module 1, Yellow after 2, then roughly 4/7 and 6/7 of the way, Brown for all modules, and Black for the capstone. Learners tick modules, challenges and quizzes. Each tick, measurement and harvest is a ledger entry kept in the browser. Nothing in a course file is learner data.

## Before you call a course finished

- [ ] `check_course.py` shows no PROBLEM lines.
- [ ] Every figure, table and video slide renders. Open each module and step through its slides.
- [ ] Every link was opened, and unconfirmed ones are marked.
- [ ] Worked examples were calculated by hand.
- [ ] Inference and illustrative numbers are labelled.
- [ ] The library card reads well, with a one-sentence summary.

## Fast workflow (use this)

1. `python _template/new_course.py <id> "<title>" --modules N ...` scaffolds the files.
2. Write content in Python, not JSON: `from author import *` (see `_template/author.py`). It has a helper per block type, `write_module`, `write_refs` and `write_pack`, and it prints word counts. Save the scripts in `courses/<id>/build/` with `build.py` as the entry point (`kit.py rebuild <id>` runs it), never in a session scratchpad, which a reboot can clear. They hold only lesson text and must never read or copy ingested source text.
3. Save a `courses/<id>/docs/course-<id>-notes.md` listing which sources you read in full, in part, or not at all. `kit.py md` puts it in the markdown library.
4. After each module, run `python _template/kit.py audit <id>` and fix every line before the next module: source flags (pointer, unread, number, names), author-talk, applied practice, open findings and reading coverage, each with the command that fixes it.
5. `python _template/kit.py figs <id>` writes a contact sheet of your figures. Serve the folder, open `/_figtest.html`, fix clipping, delete the file.
6. `python _template/kit.py ship <id>` re-injects lecturers, runs `meta`, the gate and the checker, writes the sources panel, READING-STATE.md and STALE-SOURCES.md, refreshes cache tags, writes the markdown library and opens the course. It stops on any PROBLEM. If the course has `build/build.py`, `kit.py rebuild <id>` runs it and then ships.
7. Checked dates: a ref's `d: "DD/MM/YYYY"` is the day someone reopened the source and checked what the course takes from it (never the publisher's "last updated"). `python _template/kit.py stale [<id>]` lists cited web sources never checked or checked over six months ago, time-sensitive ones (law, tax, prices, official guidance) first, and writes `docs/STALE-SOURCES.md`. `stale_sources.py <id> --backfill` sets `d:` only where a ref's own text records when it was read or opened.

Two traps: `window.CourseUI` is created after course files load, so read it inside a tool function, not at the top of the file. Quiz text is not citation-resolved, so `write_pack` strips `{{cites}}` from it.

## Folder layout

```
index.html
shared/                 engine, stylesheet, base data, the home FAQ list (course-faqs.js), common About wording,
                        course-meta.js (written by kit.py meta: which meta files each course has, and the loader)
courses/<id>/
  pack-<id>.js          library card, module list, details, quizzes, resources
  course-<id>-refs.js   sources     course-<id>-figs.js   diagrams     course-<id>-tools.js   calculators
  modules/              one lesson file per module (and the capstone)
  docs/                 markdown library, sources-read note, READING-STATE.md, STALE-SOURCES.md
  meta/                 about.js, faqs.js, lecturers.js, lecturer-intro.js, lecturer-notes.js, deepnotes.js,
                        dossiers.js, oversight.js: this course's entries only, each loaded as its own script
  build/                the course's own build scripts (build.py is run by kit.py rebuild); never a scratchpad
_template/              scaffold, checker, author helpers, kit.py
```

Course data that used to sit in shared files lives in `courses/<id>/meta/`: FAQ dropdowns in `faqs.js`, About in `about.js`, lecturers (PEOPLE and ROWS) in `lecturers.js`, Meet your lecturers in `lecturer-intro.js`, the Notes tab's "Behind this module" in `deepnotes.js`, lecture-mode dossiers in `dossiers.js`. `lecturer-notes.js` is rebuilt by `build_notes.py` and `oversight.js` by `gen_oversight.js`. After adding or removing a meta file, run `python _template/kit.py meta` (ship runs it): it registers the file, checks it parses, and checks that a lecturer shared by two courses has identical entries. A broken file in one course no longer stops other courses loading. `shared/course-lecturer-refs.js` stays shared: it is written by `lec_inject.js` from `_template/lec_data/_refs.json`, one namespace of ref keys. Every course page also shows the whole home-page list (the `library` key) at the bottom, after the course's own questions, so a general question such as what Source Discovery is needs writing only once.

## Learning aids and syllabus (version 2.0)

Every course also has `courses/<id>/learning-<id>.js`, registered in `index.html`. It sets `window.COURSE_LEARN[<module key>]` (pretest, myths, ladder, retrieve, reflect, transfer, checkpoint) and `window.COURSE_SYLLABUS[<course id>]` (aim, council, path, weeks, assess, habits). The Practice tab, the Syllabus and study plan section and the Review today section read it. Retrieval items must come from earlier modules only. Write it in Python with a helper like the one used for the vintage-reselling course, and keep the council note that its voices are simulated and not quotations.

## Sources the user supplies (19/10/2026)

A source is a book, paper, report or long article. Sources are the best way to add depth and accuracy. The user drops them in `source ingest/<course-id>/` (PDF, EPUB, DOCX, TXT, MD) or gives a path.

1. **Ingest:** `python _template/ingest_source.py <course-id>` (or pass file paths, with `--key` to name the source). It writes `courses/<id>/sources/<key>/` with `manifest.json`, one `ch-NNN.txt` per chapter and `full.txt`. It warns about scanned PDFs (OCR them first with the `pdf` skill), tiny files, PDFs with no chapter outline, and text that looks OCR-corrupted. Record where the source came from with `--found-by user|source-discovery|unknown`, `--url`, `--query` and `--note`. The manifest keeps a `provenance` block (first date added, how it was found, link), and re-ingesting keeps the first date. With `--url`, ingest also adds a citation key to `course-<id>-refs.js` if the source has none. A book added before provenance was kept is dated from its file in `source ingest/<course-id>/` (the date the file arrived there).
2. **Read in full:** `python _template/source_read.py <id> <key>` shows progress and the next section, and `--next` serves the next chunk of about 4,000 words, carrying on across turns: it finishes a chapter in progress before starting another, so `--chapter <file>` followed by `--next` stays in that chapter. Each chunk is written to `courses/<id>/sources/<key>/_served/<chapter>-c<n>.txt` and only its path is printed: open that file with the Read tool. Output cut short loses nothing, and a chunk can be reread from its file. `--print` also prints it (never pipe that through `head` or `tail`). A chapter is recorded as read only when its last chunk has been served; `--chapter <file> --restart` reads one again from the top. The tools run under `python -I` too. `courses/<id>/docs/READING-STATE.md` is rewritten after every chunk, skip and log: start a session by reading it, not a memory note. Covers, copyright pages and indexes can be skipped on purpose (`--suggest-skips`, then `--skip <files> --reason "..."`).
3. **Log findings while reading:** `source_read.py <id> <key> --log "module|verdict|location|text"` with verdict confirmed, refined, contradicted, extended, absent or note. `--findings` lists them. Dump a module's text first with `node _template/course_dump.js <id> <module-key>`.
4. **Search:** `python _template/source_search.py <id> "terms"` finds passages, `--list` shows every section's status, `--coverage` shows the shares read. A search hit is a pointer, not a reading.
5. **Cite:** add the source to `course-<id>-refs.js` with `b: "<key>"` (ties it to the ingested text) and `p: "Chapter 3, pp. 45 to 52"` (shown after the publisher in the sources list), and no `u` if there is no public link. Cite with `{{key}}` as usual.
6. **Report and check:** `source_read.py <id> <key> --report --write` builds `courses/<id>/docs/source-review-<key>.md`, whose Status line is complete only when every section is read or skipped with a reason. `check_course.py` notes unread sections and unfinished reviews, and fails a review that claims complete while sections are unread.

7. **Track every finding:** `python _template/source_apply.py <id> status` gives a per-module table of findings that are applied, confirmed, avoided, skipped or open. `list --open` shows the open ones with ids. `auto --write` marks a finding applied only when a lesson in its module has gained at least two of the finding's terms since it was logged (the terms the lessons already had are saved to `findings-baseline.json` at `--log` time), so a finding the course happened to cover already stays open for a hand decision (usually `mark` or `skip`). Findings logged before baselines existed get one on the first `auto --write`. `mark`, `avoid` and `skip` close the rest, each with a note or reason. A review is not finished while any finding is open: `source_read.py --report` says Status: partial and `check_course.py` fails on the open ones per module. To close many at once, write a JSON list of `{"book", "state": "mark" or "skip" or "avoid", "ids": [...], "note"}` and run `source_apply.py <id> batch decisions.json`.
8. **Verify the numbers:** `python _template/source_verify.py <id>` checks every number in a sentence that cites an ingested book against the cited chapter. It reads number words (eighty-five), half and quarter glyphs and the typographic fraction slash. Fix a wrong chapter or figure, or label the sentence "our arithmetic". Re-read the source passage before you write a lesson from a finding, because a finding is a note and notes drift.
9. **Show the reading honestly:** write `courses/<id>/docs/course-<id>-notes.md` in the standard format (see the header of `_template/source_map.py`), then `python _template/kit.py sources <id>`. The page panel "How far the sources were read" is built from the read records (books) and from the refs the lessons cite (everything else), with the modules that cite each source and the outcome of each finding. Run `python _template/kit.py sources <id>` after every ingest, or the panel stays out of date. Sources sit in dropdowns by how much was read, with a plain heading inside each for where the source came from: Added by you, then Source Discovery, then Foundational (found while the course was created, no route recorded). Within a heading the newest sources come first and undated ones last, and each card shows its added date. Every card and list row carries a filled tag in the same style: green You, yellow Source Discovery, red Foundational. The headings stay plain. The closed dropdown shows a short count such as `66 sources`, like the other dropdowns. The same grouping runs in the browse-one-by-one modal, where most source research is done. Never pipe `source_read.py` output through `head` or `tail`: the chapter is recorded as read even if you saw only part.

Rules: the text stays on this machine and is never uploaded, published or put on a page. Quote at most 15 words from a source and paraphrase the rest. A claim comes from the source only if you found it in the text. Where a source disagrees with a web source or another source, show both in a table.

To improve an existing course with a source, run a **source review pass** (see the library-of-alexandria skill): read the whole source with `source_read.py`, log findings for every module, fix what the source contradicts, and add depth where it extends the course, inside the lessons that teach each subject (see Integrating sources below). Never renumber modules. A pass on part of a source is allowed only when asked for, and its report says Status: partial.

## Integrating sources (set 15/11/2026)

Lessons teach subjects, not sources. A source's findings are written into the lessons on their period, place or idea, so a learner meets each fact where it belongs and never reads a tour of what one book says.

| Do | Do not |
|---|---|
| Put a correction in the sentence it corrects, citing both sources | Add a lesson "What the books add to X" or "What the UNESCO General History adds" |
| Add a new fact as a sentence, table row or subheading in the topic lesson | End a lesson with a section headed "... (volume VII)" or "Three books on X" |
| Name an author only for a contested claim, beside the rival view, with how to choose | Write "Haberland says ..." for an uncontested fact |
| Read a primary source inside the lesson about its event (a speech in the lesson on that independence) | Collect speeches and testimony into a separate "voices" lesson |
| Add a lesson named for a new topic when a source opens one (for example "North Africa, 1500 to 1830") | Leave a topic the course does not teach in a source-named section |
| Teach a subject shared by two modules or courses once, and bridge to it | Teach the same event twice with different figures |

How:
- **Small changes**: `course_patch.js` `insertAfter` and `replaceText`. `addLessonBeforeLecturer` refuses source-named titles.
- **Reshaping a module**: export its lessons with their citations, write the teaching sequence to `courses/<id>/build/lessons/<module-key>.json` as `{ "intro", "outcomes", "lessons": [...] }` (intro and outcomes without the lecturer parts, lessons without the lecturer lesson), and run `node _template/apply_lessons.js <id> <module-key>`. It keeps the lecturer lesson last and renumbers ids. The JSON is then the module's source; keep it in step if you later patch the module file.
- **Keep citations with their facts.** Split run-on paragraphs into one-claim sentences, each ending with its citation, so `source_verify.py` can check every figure. A reworded sentence can lose an old waiver's `match` text: add a new waiver with the same reason and today's date.
- **Provenance goes in the notes**, not the lesson: what each source added is recorded in `course-<id>-notes.md` and the sources panel.
- `check_course.py` fails any module with a source-organised lesson title or heading.

## Lecturer data and shipping

`kit.py ship` re-applies lecturer lessons from `_template/lec_data/<id>.json`. If a lecturer lesson was edited in the module file, ship stops rather than reverting it. Run `node _template/lec_sync_from_modules.js <id>` to copy the module text into `lec_data` (the usual fix), or `kit.py inject <id>` to apply `lec_data` on purpose. `--check` reports drift without writing.

## Finding sources to deepen a course

When asked to find sources for a course, Claude searches with its search and connector tools, chooses sites per course, and records each candidate in `courses/<id>/docs/source-candidates.md`. There is no fixed site list and no helper script. This is called **Source Discovery**: use that name in the candidates file, in the `--query` recorded at ingest and when you talk to the user. The user can start it for any course at any time by asking to run Source Discovery for that course; a first search and a later gap search both count as Source Discovery.

Use a table with these columns: source, author or publisher, link (only if opened), licence or access, module it would add to, and status (`not read`, `excerpt`, `metadata only`, or `full text available`). Each row says what the source would add, in our own words.

Rules:
1. Open a link before listing it. Mark anything unconfirmed.
2. Do not download or use any copy of a copyrighted book that is distributed without permission. Use only open-licence texts, public-domain texts, or copies the user owns.
3. A search excerpt or abstract is not a reading. Record it as `excerpt` or `metadata only`, and never call it read in full.
4. Nothing enters a course until the user chooses it. For each chosen source the user supplies the file (or Claude downloads an open-licence copy the user approved), then it goes through steps 1 to 9 above, ingested with `--found-by source-discovery --url <link> --query "Source Discovery, <DD/MM/YYYY>"` so the panel shows how it was found.
5. Once ingested, a source is read in full before any claim from it is written into a lesson.

## Completion gate

Marking a module complete is a soft gate (set 19/10/2026). If challenges or capstone criteria are unticked, or the best first-try quiz score is under 70% (or the quiz was never taken), the page lists the gaps and asks before logging. The learner can still go ahead. The pass mark is `QUIZ_PASS` in `index.html`.

## Generated questions (19/10/2026)

A quiz, pre-check or retrieval item can be written as `{"gen": "<id>"}` instead of `{q, o, a, w}`. The page builds it at render time from `window.QGEN["<id>"](rand)`, which returns `{q, o, a, w}` with new numbers each time. Review and pre-checks use the day as the seed (stable all day), quizzes use the attempt. See `courses/investing/course-investing-gen.js` for the pattern, including a helper that guarantees four distinct options. Use it for any calculation question so learners practise the method, not the answer. Put generator files in the course folder and register them in `index.html` after the figs file. If you rebuild a pack from a Python script, add the `gen` items there too, or the rebuild drops them.

## Backups

The Ledger section has Back up everything, which saves every `eda.` key in the browser (ledger, review schedule, notes, ticks, slide positions, all courses) to one JSON file, and Restore backup, which writes them back. Download JSON still saves the ledger alone.

## Lesson-length standard (set 15/10/2026, applies to every new course)

The investing course was first written at about 1,100 to 1,300 words per module. The standard below was set after that, and `check_course.py` now enforces it as a PROBLEM for any course whose pack `created` date is 2026-10-15 or later. Older courses get notes only, so the gate keeps passing.

| Rule | Standard |
|---|---|
| Lessons per module | 4 or more (the capstone is exempt), counting the lecturer's method lesson |
| Lesson text per module | 2,000 to 3,500 words, counted after injection of the lecturer lesson |
| Checks | At least 2 per lesson, including the lecturer's method lesson |
| Takeaways | One block per lesson |
| Worked example | At least one per module, with the arithmetic checked in code |

How to reach it without padding:
- Write one lesson per idea, then add a **practice lesson** per module: a walkthrough of invented cases, a worked comparison, or a stress test. These carry the numbers and decisions a learner needs to repeat.
- Compute every figure in Python before writing it, and label invented numbers "illustrative".
- Put sourced claims and our own inference in separate sentences, and say which is which.
- Build with a hook that merges extra lessons and second checks into the author script, then run `lec_inject.js` again, because rebuilding module files removes the injected lecturer lesson.
- Run `python _template/kit.py ship <id>` and fix every PROBLEM. Do not weaken the checker to pass.

## Accuracy and competence standard (set 15/11/2026, applies to every course)

`check_course.py` (and so `kit.py ship` and `kit.py gate`) fails a course on any of these. `kit.py audit <id>` shows them all in one report.

| Check | Rule | Fix |
|---|---|---|
| pointer | A ref's `p:` must match a chapter file. Name files explicitly when titles do not line up: `"p": "Chapter 23, which starts in the previous file (ch-023.txt, ch-024.txt)"`. | `source_repoint.py <id>`; `--split <key>` for whole-volume refs |
| unread | Every cited chapter file is in `read.json`. | read it with `source_read.py`, or waive after re-reading the passage |
| number | Every figure in a cited sentence is in the cited text (a run of citations after one sentence counts as one source). Short year ranges, MM/YYYY and DD/MM dates, words, ordinals, decimal millions and common OCR damage are matched. | correct it, cut precision the source lacks, label "our arithmetic", or waive OCR damage |
| names | Most proper names in a cited sentence appear in the cited text. | re-cite to the right chapter, or split the sentence |
| author-talk | No build narration in lessons ("the library says", "this lesson does not quote", "our wording", "the supplied books"). Injection markers (`Lecturer lens:`) are hidden by the engine. | rewrite as teaching; use "Source note:" for provenance |
| integration | No lesson title or heading organised by source ("What the books add", "What the UNESCO General History adds", "(volume VII)", "Three books on X", "(chapter 12)"). | teach the findings in the topic lessons; see Integrating sources |
| practice | Each module: at least half of checks plus quiz items applied, and one applied challenge. Items tagged `kind: "application"` and generated (`gen`) items count. | `case_chk` / `case_question` / `applied_challenge` in `author.py`; `practice_convert.py <id> file.json` for existing items |

Waivers live in `courses/<id>/docs/verify-waivers.json`: `{"key", "kind", "item", "match", "reason", "checked"}`, where `match` is a piece of the sentence (so a rewrite retires the waiver) and the reason says what you read (for example "OCR prints '1800024000' for 18,000 to 24,000"). Write one only after re-reading the passage. `pc_fixlib.py` has `waive()`, `replace()`, `recite()`, `add_ref()` and `set_ref_field()` for scripted hand fixes.
