# Source candidates: Directing for stage and screen

Searched 25/10/2026. Nothing here is in the course yet. Each row is for the user to choose; none is read in full until it has been ingested and read with `source_read.py`.

Status key: **full text available** (the link opens the whole text), **excerpt only** (search or abstract, not read in full), **not opened** (found in search, page not checked).

| Source | Author or publisher | Link | Licence or access | Module it would add to | Status |
|---|---|---|---|---|---|
| *On the Art of the Theatre* (1912) | Edward Gordon Craig, Heinemann | https://archive.org/details/cu31924081270328 (PDF) | Public domain in the US (1912). UK copyright probably runs to 2036 (author died 1966), so check before using a UK copy. | 4 (staging), 6 (space and design) | **full text available** |
| "Cueing in Theatre: Timing and Temporal Variance in Rehearsals of Scene Transitions" (2023) | Stefan Norrthon, *Human Studies* | https://link.springer.com/article/10.1007/s10746-023-09672-8 | Open access, CC BY 4.0 | 3 (rehearsal), 4 (staging transitions) | **full text available** |
| "Defining the stage director and teaching theater directing" (2019) | Irina Niculescu, *Móin-Móin* | https://www.researchgate.net/publication/338168185_Defining_the_stage_director_and_teaching_theater_directing | CC BY 4.0 (stated on the page). Focus is puppet-theatre directing, so it is a teaching and craft piece, not a film one. | 1 (role of the director) | **full text available** |
| *Film Directing Shot by Shot* (1991) | Steven D. Katz | https://archive.org/details/steven-d.-katz-1991-film-directing-shot-by-shot | The archive.org page says CC BY-ND 4.0, but that is the uploader's claim. A 1991 commercial book is unlikely to be openly licensed, so the claim is unverified. | 4 (shot planning), 5 (coverage) | **full text available, licence unverified. Do not use until the rights are confirmed.** |
| "On Rhythm in Film Editing" (2019) | Karen Pearlman, in *The Palgrave Handbook of the Philosophy of Film and Motion Pictures* | https://link.springer.com/chapter/10.1007/978-3-030-19601-1_7 | No open-access statement on the page. Probably a paid chapter. | 5 (cutting and rhythm) | **excerpt only** (abstract) |
| "Director training: a mine field or brave new world?" (2023) | *Theatre, Dance and Performance Training* | https://www.tandfonline.com/doi/full/10.1080/19443927.2023.2243154 | Not checked whether it is open access | 1 (role), 2 (directing actors) | **not opened** |
| "Directing-as-training: embodied actor pedagogies in Nigerian theatre" (2026) | *Theatre, Dance and Performance Training* | https://www.tandfonline.com/doi/abs/10.1080/19443927.2026.2620084 | The link asks for access, so it is probably paywalled | 2 and 3 (actor direction) | **excerpt only** |
| "'Brecht in Practice': Critical Reflections on Staging Drama Dialectically" (2021) | Taylor & Francis journal (title not confirmed) | https://www.tandfonline.com/doi/full/10.1080/10486801.2021.1928653 | Not checked whether it is open access | 4 (staging) | **not opened** |

## Brought in (25/10/2026)

- **Craig, *On the Art of the Theatre* (1912)**: downloaded from archive.org and ingested as key `craig-1912`. 76,188 words in 20 blocks of pages, with no chapter headings found. Not read yet. Read it in full with `source_read.py` before writing from it. UK copyright still needs checking.
- **Norrthon, "Cueing in Theatre" (2023)**: saved by the user and ingested as key `norrthon-2023`. 9,453 words in 2 blocks. Not read yet.
- **Niculescu, "Defining the stage director" (2019)**: saved by the user and ingested as key `niculescu-2019`. 2,894 words, one block. The article is 13 pages, so this is probably the whole text, but check it. Not read yet.
- **Katz, *Film Directing Shot by Shot* (1991)**: not brought in. The only copy found is on archive.org, and its CC licence is the uploader's claim. If you own a copy, put it in `source ingest/directing/` and it can be ingested.

## Books on the reading list (not found open)

The reading list's books (Weston, Hagen, Hauser and Reich, Murch) did not come up in open sources. Use them only from copies the user owns.

## Next step

Choose the sources to bring in. For each one you choose:
- Put your own copy in `source ingest/directing/`, or ask Claude to download an open-licence copy.
- Ingest it, then read it in full with `source_read.py`.
- Lessons can cite it only after that reading.
