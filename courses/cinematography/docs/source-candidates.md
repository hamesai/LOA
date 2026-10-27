# Source candidates: Cinematography, DSLR and analog film

Searched 26/10/2026. Nothing here is in the course yet. Each row is for the user to choose; none is read in full until it has been ingested and read with `source_read.py`.

Status key: **full text available** (the link opens the whole text), **excerpt only** (search or abstract, not read in full), **not opened** (found in search, page not checked).

Cinematography modules: 1 exposure for motion; 2 DSLR; 3 lenses and frame; 4 light; 5 camera movement and coverage; 6 analog film; 7 analog video and telecine; 8 same-scene test shoot.

| Source | Author or publisher | Link | Licence or access | Module it would add to | Status |
|---|---|---|---|---|---|
| *Moving Pictures: How They Are Made and Worked* | Frederick A. Talbot | https://www.gutenberg.org/files/67972/67972-h/67972-h.htm | Project Gutenberg, listed as public domain in the USA. Check UK status from the author's death date. Its account of Robert W. Paul's work is a contemporary account, not a primary source from Paul. | 1 (frame rate and persistence of vision), 7 (history of Paul's equipment) | **full text available** |
| *The Science of Animal Locomotion (Zoopraxography)* | Eadweard Muybridge | https://www.gutenberg.org/ebooks/39998 | Project Gutenberg, public domain in the USA. Muybridge died in 1904, so UK copyright has expired. | 1 (how fast shutters and frame rates capture motion) | **full text available** |
| *A Condensed Course in Motion Picture Photography* (1920) | Charles Wilbur Hoffman and Carl Louis Gregory | https://ia800107.us.archive.org/18/items/condensedcoursei00newyuoft/condensedcoursei00newyuoft.pdf | Scanned by the Internet Archive. Copyright 1920; US renewal status not checked. Check US and UK status from Gregory's death date before use. | 1 (exposure), 4 (light), 6 (analog film workflow) | **full text available** |
| *Motion Picture Photography* (second edition) | Carl Louis Gregory, edited by Herbert C. McKay | https://dn760106.eu.archive.org/0/items/motionpicturepho00carl/motionpicturepho00carl.pdf | Scanned by the Media History Digital Library. First edition copyright 1920. Same rights check as above. Technology is dated, so use for workflow and history only. | 4 (light and metering), 6 (analog film) | **full text available** |
| KODAK VISION3 500T Technical Information (H-1-5219, March 2026) | Eastman Kodak Company | https://www.kodak.com/content/pdfs/motion/KODAK-VISION3-500T-5219-7219-technical-information.pdf | Free to read. Kodak's copyright. Quote and cite, do not reproduce tables. Figures are the manufacturer's own claims, so check any 2-stop highlight claim against the course's own test. | 4 (exposure and sensitometry), 6 (analog film stock) | **full text available** |
| Filming with drones in the UK: guidance for productions (March 2024) | Filming in England | https://www.filminginengland.co.uk/wp-content/uploads/2024/03/Production-Facing-Drone-Guidance.pdf | Free to read. No reuse licence stated. Covers permission from landowners and the local film office, and the 1:1 separation rule. Check the CAA rules themselves before any lesson states a limit. | 5 (camera movement with drones), production notes | **full text available** |

## Gaps the search did not fill

- **Muybridge's own 1887 plates and prospectus** are on archive.org. Found, not opened.
- **Freund's account of his own work** (lucyfan.com copy) was not found in any open copy.
- **Eastman's own writing** on Kodak's early film was not found.
- **Current DSLR and mirrorless specifications**: no open manufacturer source was found. Manufacturer manuals are still missing.
- **Open-access papers on film grain and halation**: the search returned none that could be opened.
- **Open textbooks with a Creative Commons licence on cinematography**: none found in this search.
- **UK film lab information** (rates, turnaround and permits for filming): not searched in this run.

## Brought in (26/10/2026)

All six were downloaded from the links above and ingested, and all six are now read in full. Reviews are in `docs/source-review-<key>.md`.

| Key | Source | Size | Notes |
|---|---|---|---|
| `talbot-moving-pictures` | Talbot, *Moving Pictures* | 119,069 words, 32 chapters | Contemporary account, includes Paul's work. |
| `muybridge-animal-locomotion` | Muybridge, *The Science of Animal Locomotion* | 6,623 words | Short text. |
| `hoffman-gregory-condensed` | Hoffman and Gregory, *A Condensed Course* (1920) | 133,259 words, 24 chapters | Overlaps heavily with the Gregory book below. |
| `gregory-motion-picture-photography` | Gregory, *Motion Picture Photography* (second edition) | 152,830 words, 27 chapters | Overlaps with the Hoffman and Gregory book. |
| `kodak-vision3-500t` | Kodak VISION3 500T technical information | 1,888 words | Warning: mostly tables and images, so little text was extracted. Check the curves against the PDF. |
| `filming-england-drones` | Filming in England, drone guidance (2024) | 2,431 words, 6 pages | Short. Check the rules against the CAA before quoting. |

## Gap search (26/10/2026)

New candidates, each opened before listing. Not ingested.

| Source | Author or publisher | Link | Licence or access | Module | Status |
|---|---|---|---|---|---|
| *Telecine: preparing 16mm film for television broadcast* | ADAPT project, Royal Holloway (ERC-funded) | https://www.adapttvhistory.org.uk/16mm/telecine | Creative Commons Attribution 4.0 | 7 (analog video and telecine) | **full text available** |
| *Location Filming in London: Code of Practice* (updated July 2025) | Film London | https://film-london.files.svdcdn.com/production/Film-London-Code-of-Practice_2025-updated-July.pdf | Free to read, no reuse licence stated. London only. | Production notes (permits, cranes, drones) | **full text available** |
| Cinelab short-form guide rates (January 2021) | Cinelab, Slough | https://www.cinelab.co.uk/_files/ugd/baa2e6_c037d81f24004626a7663fba569b2b44.pdf?index=true | Commercial rate card. Prices are from 2021, so check current prices before quoting. | 6 (UK lab services) | **full text available** (rate card) |
| EOS 5D Mark II Instruction Manual (September 2008 edition) | Canon, hosted by B&H | https://www.bhphotovideo.com/lit_files/101.pdf | Canon copyright. Quote and cite only. Dated: it covers the 5D Mark II, not current cameras. | 2 (DSLR as a cine camera) | **full text available** |
| Analogue Image (London motion picture lab, formerly On8mil) | Analogue Image | https://www.analogueimage.london/about | Commercial page. Lists ECN-2 processing and UHD scanning for 35mm, 16mm and Super 8. | 6 (UK lab services) | **excerpt only** (search result) |
| City of London film office | City of London Corporation | https://www.cityoflondon.gov.uk/about-us/filming | Free to read. Covers drone permissions and road closures in the City. | Production notes (permits) | **excerpt only** (search result) |
| "Synthesising and reducing film grain" (2006) | Antonio De Stefano, *Journal of Visual Communication and Image Representation* | https://www.sciencedirect.com/science/article/pii/S1047320305000532 | Paywalled. The page offers institutional access or purchase only. | 4 (grain, digital side) | **not open** (metadata only) |

Brought in from the gap search (26/10/2026), with keys:
- `film-london-filming-code` (London filming code of practice, 2025): 6,475 words.
- `canon-5d-mark-ii-manual` (EOS 5D Mark II manual, September 2008): 44,208 words, 12 chapters. Downloaded from the B&H copy after Canon's own file gave a 403 error.
- `adapt-telecine` (ADAPT telecine page, CC BY 4.0): 720 words. The text starts with the site's navigation ("Skip to content"), so check the start of the file before quoting.

Still open after this search:
- **Freund's own writing:** only biographies were found, not his own text on lighting or photography.
- **Eastman's own writing on motion-picture film:** not found.
- **Open-access papers on film grain or halation:** the only result was paywalled.
- **Open textbooks with a Creative Commons licence on cinematography:** none found.
- **Current DSLR and mirrorless specifications:** only the 2008 Canon manual was found.
- **Muybridge's 1887 plates:** found on archive.org in the first search but not opened.

## Next step

Choose the sources to bring in. For each one you choose:
- Ask Claude to download it, if its licence allows. Otherwise put your own copy in `source ingest/cinematography/`.
- Ingest it, then read it in full with `source_read.py`.
- Lessons can cite it only after that reading.
