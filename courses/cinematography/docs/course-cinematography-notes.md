# Cinematography: DSLR and analog film. How far the sources were read

Updated 19/10/2026. The table on the page is built from two things: the reading records for each book, and the sources the lessons cite. The lists below hold what a table cannot.

## Sources
- none | Lens maker and camera maker manuals | | Not read.
- none | Film lab pages (UK and Irish labs, filming permits, insurance, drone rules, airport X-ray rules) | | Not researched.
- none | Videos (Brady Bessette, Steve Ramsden) | 1 | Confirmed by title and channel only. Not watched.
- part | Kodak Super 8 page | 6 | Loaded but had little text, so it is not quoted.
- none | The lucyfan.com copy of Freund's article | 4 | Could not be reached. Freund's account was read from a third-party reproduction instead.
- none | A primary source for Robert W. Paul | 7 | None found. His lesson rests on Wikipedia excerpts.

## Book notes
- filmmakers-handbook | Dates from 2012, so camera and stock models, airport scanners and DSLR behaviour may have changed. Two figures were not used because they disagree with arithmetic: the 4 ft depth-of-field example in chapter 4, and 96 ft a minute for 35 mm film in chapter 6.
- film-art | Used for composition, depth cues, light direction, framing, the cut and tinting. Its glossary gives Academy ratio as 1.85 while its text gives 1.37, so the text is trusted. It supports 90 ft a minute over the Handbook's 96.
- super-8 | An OCR conversion with many errors, so only clearly stated features are used. Its date of 1964 for Super 8 disagrees with the 1965 in the gauge table, and the lesson says so.
- cinematography | The text is OCR-noisy. Its printer-light arithmetic, foot-candle to lux factor and film-base thickness disagree with standard figures, so none is used. Its claim that digital video has no black-level setup appears only with a caution.
- closely-watched-films | Fabe's dates for the Sneeze, Intolerance, the sound manifesto and the zoetrope disagree with standard dates, so none is used.
- film-as-art | Essays from 1933 onwards, so the technology is dated. The points on light, montage and visible action still apply.
- in-the-blink-of-an-eye | The figures are Murch's own and are labelled so in the lessons.
- story | The index and filmography were skipped. Used for mood, point of view, pace, the insert and cheap surprise.
- visual-story-creating-the-visual-structu | Block's claim that sunlight is mostly blue is not used. His definition of magic hour is given as his own, with a note that crews use the term differently.

## Not read, or not verified
- No video was watched. The video and image resources are search links.
- Current DSLR and mirrorless specifications were not researched. The 5D Mark II is used as a historical example.
- Hot-light safety, filter, lens test, schedule, shot list, coverage and ND-filter density marking are our own practice or standard physics, and are labelled in the lessons.
- The Art of Alfred Hitchcock (Spoto) was moved to the directing course on 19/10/2026 and is not used here.

## What we added ourselves
- All arithmetic: shutter speeds and angles, stop counts, ND density, angle of view, depth of field, inverse-square light, data rates, pulldown runtimes, cost per finished minute, drop-frame counts, high-speed and time-lapse maths. Every example was worked by hand and checked in Python.
- Illustrative numbers are marked "illustrative". The £60 roll cost is a placeholder for a real quote.
- Printables: plan-sheet.html and test-chart.html. Not tested on paper, and the chart's grey steps are printed greys, not a calibrated target.

## Known weak spots
- Many sources are tertiary (Wikipedia). Claims about film look, grain and halation are our reading, not sourced.
- Kodak's claim of two stops of extended highlight latitude is quoted as a manufacturer's claim and was not tested.
- Lecturers rest on Wikipedia excerpts, plus two primary sources (Toland's own essay, Freund's own account). They do not rest on the lecturers' own works for Muybridge, Eastman or Paul.
- Wikipedia remains the source for many gauge, history and format figures that the books do not cover.

## Where sources disagree (shown in the lessons)
- Super XX speed: Wikipedia says ASA 100, a Weston 64 note appears on Toland's essay.
- Wikipedia says flat lighting eliminates shadows, while Freund's own account says lower contrast.
- Photo Research Corporation has two founding dates on the Freund page.
- The Handbook gives 96 ft a minute for 35 mm and Film Art supports 90, which matches the arithmetic.
- Anamorphic projection: Brown gives about 2.35:1, earlier lessons give 2.39:1 from another source.

## Corrections to the books, kept out of the lessons
- Brown's printer-light arithmetic, foot-candle to lux factor, and film-base thickness.
- Block's sunlight-is-blue claim.
- Fabe's dates.
- One of our own findings said two f/5.6 lights read as f/4. That was a mistake in our note; the book says f/8, and the lesson uses f/8.

## Added to the lessons from the six new books (19/10/2026)
- Module 1: light arithmetic and the pre-shot routine; why motion looks smooth and what speed says.
- Module 2: video levels, timecode and HD habits; colour sampling, compression and DSLR files; viewfinder, white balance and camera choice; sound for a one-person shoot.
- Module 3: angle and lens as meaning, depth cues and depth-of-field myths, and a composition checklist.
- Module 4: light as form and tone, filters and flicker, big lamps and greenscreen, colour as a control.
- Module 5: cuts and pace; montage; point of view and the insert; planning the look with two graphs; movement and parallax; Griffith's editing grammar; coverage rules, the line and six kinds of cut; cutting for the story (McKee); case studies in cutting and framing.
- Module 6: high speed, time-lapse and format arithmetic; formats, finishing and the mechanics of speed.
- Module 7: transfer day (grey card, slates, silver retention); offline, online and conform; signal levels, pixels and monitors.
- Capstone: a planning checklist from the books.
- Each passage was checked against the source text before use. A number checker (`source_verify.py`) now tests every sourced sentence against the cited chapter, and each worked example was recalculated.
- Every finding the six books produced now has a recorded outcome: used in a lesson, confirmed, checked against the lessons (for the books' mistakes), or skipped with a reason. Nothing is left open. The panel above shows the count for each book.

## Lecturers
- Dossiers are in `_template/lec_data/cinematography-dossiers.md`. Confidence is faint for Muybridge, Toland, Freund, Eastman and Paul.
- The welcomes, per-lesson notes and method lessons are simulated voices written for teaching. They are not quotations and add no facts beyond the dossiers and lessons.

## Checks
- Link check: `python _template/check_links.py cinematography`. 38 links answered on 12/10/2026, and the StudioBinder page failed a certificate check.
