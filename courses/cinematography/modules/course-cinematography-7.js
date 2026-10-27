/* Cinematography: DSLR and analog film (module 7). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["cinematography-7"] = {
 "intro": "Analog also means tape: VHS, Hi8 and Betacam. This module explains scan lines, fields and the formats, how film is converted to video, and how to bring analog footage into a digital edit without wrecking it. It ends with a workflow that mixes both worlds. Lecturer lens: Robert W. Paul built his own camera and projector when only copies of others' films existed, and his camera could expose the same film more than once. His method is to build what is missing and to treat each layer as a share of the result.",
 "outcomes": [
  "Explain interlaced scanning, NTSC and PAL, and what a field is.",
  "Compare VHS, Hi8 and Betacam by era, quality and use, and describe the quality limits of each tape generation.",
  "Convert film frame rates to video with pulldown and speed-up, and set up an ingest, grade and delivery path for mixed material.",
  "Pick a film-to-digital route and correct the audio speed for 23.976p or 25 fps.",
  "Lecturer's method: Build a hybrid timeline by deciding each source's share of the final picture, and keep the exposure right when sources are layered."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "How analog video draws a picture",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Analog television builds a frame from lines. An interlaced signal contains two fields of a video frame captured one after the other, and each field has half the lines. {{wiki-interlace}}"
    },
    {
     "t": "p",
     "x": "One field holds the odd-numbered lines and the other the even-numbered lines. {{wiki-interlace}}"
    },
    {
     "t": "p",
     "x": "A PAL television scans 50 fields every second, and two fields make a frame every 1/25 s. {{wiki-interlace}}"
    },
    {
     "t": "p",
     "x": "Interlace doubles the perceived frame rate without using extra bandwidth, which is why analog broadcast systems all used it. {{wiki-interlace}}"
    },
    {
     "t": "p",
     "x": "Format names such as 576i50 give the field rate for interlaced formats, so 50 means fields and the frame rate is half. {{wiki-interlace}}"
    },
    {
     "t": "table",
     "title": "Analog television standards",
     "head": [
      "Standard",
      "Lines",
      "Frame rate",
      "Note"
     ],
     "rows": [
      [
       "NTSC",
       "525",
       "about 29.97",
       "First American analog standard, published 1941; colour added in 1953"
      ],
      [
       "PAL",
       "625",
       "25 (50 fields)",
       "625-line system; 50 fields a second"
      ]
     ],
     "src": "NTSC dates from the NTSC Wikipedia page; the PAL row from the interlace page. The line counts are in the VHS page. {{wiki-vhs}} {{wiki-ntsc}} {{wiki-interlace}}"
    },
    {
     "t": "h",
     "x": "Why this matters to a filmmaker"
    },
    {
     "t": "p",
     "x": "Footage shot on interlaced tape has a motion pattern that is different from film at 24 frames per second: it gives 50 or 60 moving samples per second, not 24, so movement looks smoother and 'video-like'. Our reading."
    },
    {
     "t": "p",
     "x": "Shown on a modern progressive screen, interlaced footage can show comb-like edges unless it is deinterlaced. {{wiki-interlace}}"
    },
    {
     "t": "example",
     "title": "Worked example: fields and frames",
     "steps": [
      "PAL: 50 fields per second, so 25 frames per second. In one second there are 50 half-pictures.",
      "NTSC: about 59.94 fields per second, so about 29.97 frames per second.",
      "A PAL clip of 10 seconds has 500 fields and 250 frames.",
      "A moving object is captured 50 times in a second, once per field, in different positions, which is what the deinterlacer has to weave together."
     ]
    },
    {
     "t": "h",
     "x": "Field order and deinterlacing"
    },
    {
     "t": "p",
     "x": "Because the two fields are captured at different instants, an editor has to know which comes first. The upper field holds the odd-numbered lines and the lower field the even-numbered lines, and the field order setting in your editing software must match the footage, especially when you mix interlaced formats in one timeline. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "Going from progressive to interlaced is easy, because one frame is simply split into two fields. Going the other way is harder. A moving subject shows edge tear when both fields are combined, so a deinterlacer must repair it. Some methods throw away one field and double the other, which lowers the resolution and can make motion less smooth. Some blend the two fields, which also lowers resolution. Smart deinterlacers blend only where there is movement and leave still areas alone. {{fh-ch5b}}"
    },
    {
     "t": "p",
     "x": "In exchange for those problems, interlace has less judder than 24p, because scanning takes place at 50 or 60 fields a second. {{fh-ch2}}"
    },
    {
     "t": "activity",
     "x": "Look up whether your region used PAL or NTSC. Record a fast sideways pan on an interlaced setting if your camera has one, and play it on a computer to see combing."
    },
    {
     "t": "check",
     "q": "How many fields make one interlaced frame?",
     "o": [
      "One",
      "Two",
      "Three",
      "Four"
     ],
     "a": 1,
     "w": "An interlaced frame is made from two fields. {{wiki-interlace}}"
    },
    {
     "t": "check",
     "q": "A PAL system shows 50 fields a second. What is its frame rate?",
     "o": [
      "25",
      "50",
      "100",
      "24"
     ],
     "a": 0,
     "w": "Two fields make a frame, so 50 ÷ 2 = 25. {{wiki-interlace}}"
    },
    {
     "t": "check",
     "q": "A deinterlacer throws away one field and doubles the other. What is the main cost?",
     "o": [
      "Lower resolution and less smooth motion",
      "Colour shifts",
      "A longer running time",
      "Louder sound"
     ],
     "a": 0,
     "w": "Line doubling discards half the lines and can make motion less smooth. {{fh-ch5b}}"
    },
    {
     "t": "take",
     "i": [
      "Interlace splits a frame into two fields to double the refresh without extra bandwidth. {{wiki-interlace}}",
      "PAL is 25 frames (50 fields) and NTSC is about 29.97 frames.",
      "Deinterlace before you put tape footage on a progressive timeline."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "The tape formats: VHS, Hi8 and Betacam",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "JVC introduced VHS in Japan on 09/09/1976 as a consumer analog video cassette using half-inch magnetic tape. {{wiki-vhs}}"
    },
    {
     "t": "p",
     "x": "VHS horizontal resolution is about 240 TV lines, roughly 320 pixels across a scan line in digital terms. {{wiki-vhs}}"
    },
    {
     "t": "p",
     "x": "S-VHS, introduced in 1987, widened the bandwidth to give 420 TV lines, equivalent to 560 pixels across. {{wiki-vhs}}"
    },
    {
     "t": "p",
     "x": "Sony introduced Hi8 in 1989 as an upgrade of Video8, and both Hi8 and S-VHS were officially rated at 400 lines of luminance resolution. {{wiki-hi8}}"
    },
    {
     "t": "p",
     "x": "Betacam is a family of professional half-inch tape formats developed by Sony from 1982, which stored picture as component video, with luminance and chrominance on separate tracks. {{wiki-betacam}}"
    },
    {
     "t": "table",
     "title": "Three tape families",
     "head": [
      "Format",
      "Year",
      "Class",
      "Detail"
     ],
     "rows": [
      [
       "VHS",
       "1976",
       "Consumer",
       "About 240 TV lines; S-VHS 420"
      ],
      [
       "Hi8",
       "1989",
       "Consumer camcorder",
       "Rated about 400 lines luminance"
      ],
      [
       "Betacam / Betacam SP",
       "1982",
       "Professional news and production",
       "Component recording"
      ]
     ],
     "src": "From the three format pages. {{wiki-vhs}} {{wiki-hi8}} {{wiki-betacam}}"
    },
    {
     "t": "h",
     "x": "What a pixel count tells you"
    },
    {
     "t": "example",
     "title": "Worked example: VHS against HD (our arithmetic)",
     "steps": [
      "VHS is about 320 pixels across in digital terms. {{wiki-vhs}}",
      "A full HD frame is 1920 pixels across. The share is 320 ÷ 1920 = 16.7%, so VHS has about one sixth of the horizontal detail.",
      "S-VHS at 560 pixels is 560 ÷ 1920 = 29%.",
      "Detail is only one quality. Colour smear, tracking noise, dropouts and generation loss when copying also mark tape. These come from our general knowledge of the format, not from the pages we read."
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Tape looks the way it looks because of its limits. If you want that texture, shoot it on tape or on a camcorder, and do not try to fix it. If you want a clean picture, do not use tape."
    },
    {
     "t": "h",
     "x": "Shooting on a camcorder"
    },
    {
     "t": "ul",
     "i": [
      "Use manual white balance and exposure if the camera allows; auto-gain makes brightness drift.",
      "Keep the tape clean and store it away from heat and magnets.",
      "Play back on the same machine that recorded it for the first transfer if you can.",
      "Make a digital copy as soon as possible; analog tape degrades."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "We have not researched current sources for working camcorders, tape or players, or their reliability. Test any old camera and deck before you plan a shoot around it."
    },
    {
     "t": "h",
     "x": "Getting the tape into the computer"
    },
    {
     "t": "p",
     "x": "To bring tape into an editing system you capture it, which for analog tape is called digitising. You normally need a video deck to play the cassettes. If you do not own one, you can rent one for the time you need or ask a post facility to make files from the tapes. {{fh-ch14}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "If the tape is archival NTSC video, the black level may have been raised to 7.5 IRE units, called setup. It has to be removed to bring black back to 0 when you digitise, and professional decks have a menu option for it. This applies to NTSC only, not to PAL. {{fh-ch5}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Do not confuse formats with similar names. Video8 matched VHS in image quality, Hi8 added resolution, and Digital8 cameras could play analog Hi8 tapes but recorded digitally. {{fh-ch1}} Digital Betacam is a different, digital format, with 4:2:2 colour and about 2:1 lossless compression at around 90 Mbps. {{fh-ch1}} Check which one a label means."
    },
    {
     "t": "activity",
     "x": "Find one analog camcorder or tape you can borrow, or watch a digitised sample of VHS and Hi8 footage online. List the visible differences from your DSLR footage."
    },
    {
     "t": "check",
     "q": "Which was a professional format?",
     "o": [
      "VHS",
      "Hi8",
      "Betacam",
      "Video8"
     ],
     "a": 2,
     "w": "Betacam was a professional family. {{wiki-betacam}}"
    },
    {
     "t": "check",
     "q": "About how many pixels across does standard VHS give, in digital terms?",
     "o": [
      "About 320",
      "About 560",
      "About 1280",
      "About 1920"
     ],
     "a": 0,
     "w": "VHS is about 240 TV lines, roughly 320 pixels. {{wiki-vhs}}"
    },
    {
     "t": "check",
     "q": "What is the first thing you need to digitise analog tape?",
     "o": [
      "A video deck or camera that can play it",
      "A faster memory card",
      "A new lens",
      "A light meter"
     ],
     "a": 0,
     "w": "You normally need a video deck to play the tapes. You can rent one or have a facility make files. {{fh-ch14}}"
    },
    {
     "t": "take",
     "i": [
      "VHS, Hi8 and Betacam differ in class and resolution. {{wiki-vhs}} {{wiki-hi8}} {{wiki-betacam}}",
      "Tape is a look as well as a limit.",
      "Digitise tape early."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "From film to video: telecine and pulldown",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "Telecine is the process of transferring film to video, so that film can be seen on television sets, VCRs, DVDs and computers. {{wiki-telecine}}"
    },
    {
     "t": "p",
     "x": "The ADAPT project at Royal Holloway describes the telecine process for 16 mm film, and its page is licensed CC BY 4.0, so it can be quoted with attribution. {{adapt-telecine}}"
    },
    {
     "t": "p",
     "x": "The problem is the frame rate. Film runs at 24 frames per second and video at about 29.97 or 25. {{wiki-telecine}}"
    },
    {
     "t": "fig",
     "id": "cinematography-pulldown",
     "title": "2:3 pulldown: four film frames fill five video frames",
     "cap": "Frames A to D are spread across ten fields. A, B, C, D become AA, BBB, CC, DDD fields."
    },
    {
     "t": "h",
     "x": "2:3 pulldown for NTSC"
    },
    {
     "t": "p",
     "x": "In countries with 59.94 Hz video, a telecine uses 2:3 pulldown to convert from 24 to about 29.97 frames per second. {{wiki-telecine}}"
    },
    {
     "t": "p",
     "x": "First the film is slowed by the 1000 ⁄ 1001 ratio to about 23.976 frames per second, so a two-hour film runs 7.2 seconds longer. {{wiki-telecine}}"
    },
    {
     "t": "p",
     "x": "Then the frames are distributed across fields: four film frames fill five video frames. {{wiki-telecine}}"
    },
    {
     "t": "h",
     "x": "PAL speed-up"
    },
    {
     "t": "p",
     "x": "In PAL and SECAM countries, film is shot at 25 frames per second for television. Features shot at 24 are shown at 25. {{wiki-telecine}}"
    },
    {
     "t": "p",
     "x": "The 4 percent faster playback also raises the audio pitch by about 0.707 semitones. {{wiki-telecine}}"
    },
    {
     "t": "example",
     "title": "Worked example: runtimes (our arithmetic)",
     "steps": [
      "A 100-minute feature at 24 fps has 100 × 60 × 24 = 144,000 frames.",
      "Played at 25 fps, it takes 144,000 ÷ 25 = 5,760 seconds, or 96 minutes. It is 4 minutes shorter.",
      "For NTSC, slowed to 23.976 fps (24 × 1000 ÷ 1001), the same film takes 144,000 ÷ 23.976 ≈ 6006 seconds, or 100 minutes 6 seconds. That is 6 seconds longer. For a two-hour film the figure is 7.2 seconds. {{wiki-telecine}}",
      "Four film frames A B C D become fields AA BBB CC DDD, giving ten fields, which is five video frames."
     ]
    },
    {
     "t": "h",
     "x": "More ways to carry 24 fps"
    },
    {
     "t": "table",
     "title": "Film to video: the main choices (as the handbook describes them)",
     "head": [
      "Place",
      "Method",
      "What changes"
     ],
     "rows": [
      [
       "NTSC countries",
       "Transfer to 23.976p",
       "Picture runs 0.1 per cent slow, so audio must be slowed 0.1 per cent to match"
      ],
      [
       "NTSC countries",
       "Transfer to 60i with 2:3 pulldown",
       "Also 0.1 per cent slow. Reverse pulldown can restore the 24p frames in the editor"
      ],
      [
       "PAL countries",
       "Shoot 25 fps, transfer to 25p",
       "Frame-to-frame, no speed change"
      ],
      [
       "PAL countries",
       "24@25: speed film to 25 fps",
       "4.1 per cent faster, audio rises about a half tone"
      ],
      [
       "PAL countries",
       "24+1 (PAL+1) pulldown",
       "An extra field every 12 frames, no speed change and audio stays at normal speed"
      ]
     ],
     "src": "{{fh-ch16}}"
    },
    {
     "t": "example",
     "title": "Worked example: how fast does 0.1 per cent drift? (our arithmetic)",
     "steps": [
      "If picture runs 0.1 per cent slow against sound, the two drift apart by one thousandth of the elapsed time.",
      "One frame at 24 fps is 1/24 s, which is about 0.0417 s. The drift reaches that after 0.0417 ÷ 0.001 = about 42 s.",
      "After 10 minutes (600 s) the drift is 0.6 s, which is about 14 frames, and after an hour it is 3.6 s.",
      "The handbook gives three fixes: record the audio at 48.048 kHz and play it at 48 kHz, set the audio clip to 99.9 per cent speed in the editor, or speed the picture up 0.1 per cent to true 24. {{fh-ch16}}"
     ]
    },
    {
     "t": "p",
     "x": "Speeding a feature up by 3 per cent shortens a two-hour film by about three and a half minutes with no cuts (our check: 3 per cent of 120 minutes is 3.6 minutes), but it can add judder in fast movement. {{fh-ch16}} When you work in an NTSC country, be clear whether you mean true 24p or 23.976p. {{fh-ch16}}"
    },
    {
     "t": "h",
     "x": "Which machine does the transfer"
    },
    {
     "t": "table",
     "title": "Film-to-video devices",
     "head": [
      "Device",
      "What it does",
      "For Super 8 and 16 mm"
     ],
     "rows": [
      [
       "Telecine",
       "Converts film to video continuously and can output HD or SD, and higher resolutions in non-real time. Handles many formats, positive or negative",
       "The usual route for good work"
      ],
      [
       "Film scanner",
       "Captures every frame as a high-resolution file, often 2K or 4K DPX. Slower and dearer",
       "For finished, high-quality masters"
      ],
      [
       "Film chain",
       "A 16 mm projector throwing the image into a video camera. Cheap, little control, not gentle enough for negative",
       "Super 8 and 8 mm are often transferred this way"
      ],
      [
       "Slop transfer",
       "A video camera filming a projected image or an editing table",
       "Low quality and imprecise speed"
      ]
     ],
     "src": "{{fh-ch16}}"
    },
    {
     "t": "ul",
     "i": [
      "Ask for the kind of grade you need. A one-light transfer applies one correction to a whole roll, a best-light transfer corrects each roll a little, and a timed transfer corrects scene by scene. A flat transfer keeps the extremes of exposure for later grading and is often used when the film is only transferred once. {{fh-ch16}}",
      "Wet gates and ultrasonic cleaning reduce scratches and dirt but can weaken tape splices, so tell the lab about any splices. {{fh-ch16}}",
      "Film can weave slightly in a telecine gate, which shows up when titles are laid over it. Pin registration helps. {{fh-ch16}}",
      "Telecine timecode is separate from any timecode recorded in the camera or recorder. {{fh-ch16}}"
     ]
    },
    {
     "t": "callout",
     "k": "key",
     "x": "The handbook's strongest advice is to agree your whole route with the lab, the editor and the sound people before shooting, because many routes exist but you only get to use one. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "A 1976 UNESCO report on 8 mm film names two ways of making a television signal from it: a telecine film chain or a flying-spot scanner. {{unesco-super8}} That fits the handbook's description of the film chain as the older, lower-end route for 8 mm."
    },
    {
     "t": "p",
     "x": "Home-movie speeds need other patterns. Super 8 was usually shot at 18 frames per second, and standard 8 at 16. {{wiki-telecine}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "If you shoot film for a screen at 25 fps, shoot it at 25 fps. If you shoot 24, plan how it will be transferred. Matching rates at the start saves audio and picture problems later."
    },
    {
     "t": "activity",
     "x": "Calculate the runtime change if your 12-minute short, shot at 24 fps, is shown at 25 fps. Check the length of your own sound against it."
    },
    {
     "t": "check",
     "q": "In 2:3 pulldown, four film frames become how many video frames?",
     "o": [
      "Four",
      "Five",
      "Six",
      "Eight"
     ],
     "a": 1,
     "w": "Four film frames fill five video frames. {{wiki-telecine}}"
    },
    {
     "t": "check",
     "q": "A 90-minute film shot at 24 fps is shown at 25 fps. How long does it take?",
     "o": [
      "90 min",
      "86.4 min",
      "93.75 min",
      "100 min"
     ],
     "a": 1,
     "w": "90 × 24 ÷ 25 = 86.4 minutes. This follows from the 4 percent speed-up. {{wiki-telecine}}"
    },
    {
     "t": "check",
     "q": "Which PAL transfer method keeps the film at its real speed and leaves the audio unchanged?",
     "o": [
      "24+1 pulldown, which adds an extra field every 12 frames",
      "24@25 speed-up",
      "Slowing the audio by 4 per cent",
      "Doubling the frame rate"
     ],
     "a": 0,
     "w": "The 24+1 or PAL+1 method adds one video frame a second without speeding up the picture. {{fh-ch16}}"
    },
    {
     "t": "check",
     "q": "Picture runs 0.1 per cent slow against sound at 24 fps. About how long until they are one frame apart?",
     "o": [
      "About 42 seconds",
      "About 10 seconds",
      "About 10 minutes",
      "About an hour"
     ],
     "a": 0,
     "w": "A frame is about 0.0417 s, and 0.0417 ÷ 0.001 is about 42 s. {{fh-ch16}}"
    },
    {
     "t": "take",
     "i": [
      "Film at 24 fps needs pulldown for 29.97 fps video. {{wiki-telecine}}",
      "PAL plays film 4 percent fast. {{wiki-telecine}}",
      "Pick the shooting frame rate for the delivery you expect."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "The hybrid workflow: ingest, grade and deliver",
   "min": 17,
   "blocks": [
    {
     "t": "p",
     "x": "Most film today is scanned and finished digitally. The 16 mm page describes digital intermediate: shoot, scan at high resolution, edit and grade digitally, then output. {{wiki-16mm}}"
    },
    {
     "t": "p",
     "x": "Super 8 remains popular partly because high-quality digital scanning to standard motion-picture formats such as 2K and 4K is available. {{wiki-super8}}"
    },
    {
     "t": "fig",
     "id": "cinematography-workflow",
     "title": "A hybrid pipeline",
     "cap": "DSLR files, scanned film and digitised tape pass through ingest, a common timeline, a grade and delivery."
    },
    {
     "t": "table",
     "title": "The stages (our summary)",
     "head": [
      "Stage",
      "Digital",
      "Film",
      "Tape"
     ],
     "rows": [
      [
       "Capture",
       "Card in camera",
       "Cartridge or roll",
       "Cassette"
      ],
      [
       "Convert",
       "Copy to two drives",
       "Process, then scan",
       "Capture with a deck or converter"
      ],
      [
       "Prepare",
       "Check, name, back up",
       "Check scan, name, back up",
       "Deinterlace, name, back up"
      ],
      [
       "Edit",
       "Common timeline at one frame rate",
       "Same",
       "Same"
      ],
      [
       "Grade",
       "Log to a look",
       "Scan to a look",
       "Gentle corrections"
      ],
      [
       "Deliver",
       "File for web or screen",
       "Same",
       "Same"
      ]
     ],
     "src": "Summary is ours."
    },
    {
     "t": "h",
     "x": "Storage reality"
    },
    {
     "t": "example",
     "title": "Worked example: a Super 8 scan (our estimate)",
     "steps": [
      "A 2K scan frame of 2048 × 1080 pixels stored as 10-bit DPX uses 4 bytes per pixel in our estimate, which is 2048 × 1080 × 4 = 8,847,360 bytes, about 8.85 MB.",
      "One cartridge has 3600 frames. {{wiki-super8}} That is 3600 × 8.85 MB ≈ 31.9 GB.",
      "At 18 fps the cartridge plays for 200 seconds, so the data rate is about 159 MB per second of picture.",
      "A compressed ProRes or similar file would be much smaller, but you should keep the original scan as well. Back it up twice."
     ]
    },
    {
     "t": "p",
     "x": "The handbook gives typical sizes for scans. A 2K frame is about 2048 × 1556 pixels at around 12 MB a frame, and a 4K frame is about 4096 × 3112 at around 50 MB. Four times the data means longer scan times, four times the storage and at least double the cost. {{fh-ch16}} The taller 2K frame suits the near-4:3 shape of 16 mm and Super 8, so the estimate above, which used a 16:9 crop of 2048 × 1080, is on the low side for those gauges."
    },
    {
     "t": "example",
     "title": "Worked example: the same cartridge at the handbook's frame size (our arithmetic)",
     "steps": [
      "3,600 frames × 12 MB = 43,200 MB, about 43 GB for one Super 8 cartridge at 2K.",
      "At 18 fps that is 18 × 12 = 216 MB for each second of picture.",
      "At 4K the same cartridge is 3,600 × 50 MB = 180,000 MB, about 180 GB. {{fh-ch16}}",
      "For television or independent work the handbook says 1920 × 1080 HD is virtually a match for 2K and cheaper, and for Super 16 it calls 2K more than adequate. {{fh-ch16}} Ask the lab what it would charge for HD and for 2K."
     ]
    },
    {
     "t": "table",
     "title": "Three film-to-digital routes (as the handbook describes them)",
     "head": [
      "Route",
      "Transfers",
      "When it fits"
     ],
     "rows": [
      [
       "Shoot film, transfer once, finish digital",
       "One careful transfer to HD or 2K",
       "Quick television or cinema work; film-out from the digital master if prints are needed"
      ],
      [
       "Shoot film, transfer twice, finish via digital intermediate",
       "Cheap digital dailies for the offline edit, then scan only the selected shots at 2K or 4K",
       "Higher budgets; a shot log of keycode and timecode finds the negative"
      ],
      [
       "Shoot film, transfer twice, finish on film",
       "Dailies for the edit, then a conformed negative and film prints",
       "Now uncommon, but sometimes cheaper"
      ]
     ],
     "src": "{{fh-ch16}}"
    },
    {
     "t": "h",
     "x": "Matching the sources"
    },
    {
     "t": "ul",
     "i": [
      "Pick one frame rate for the project and conform everything to it.",
      "Match the shutter angle of digital clips to the film or tape clips that will cut with them.",
      "Grade shots in groups, scene by scene. Apply a common look last.",
      "Add grain only if the clips do not have it, and add it after grading."
     ]
    },
    {
     "t": "p",
     "x": "Digital cameras can imitate film's depth of field, shutter angle and frame rate, and grading can imitate its colour and grain. Our view: some parts of the film look come from the process and the scan, and they are not fully copyable."
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Label every clip with its source: DSLR, Super 8, Hi8. A one-letter prefix in the filename saves hours in the edit."
    },
    {
     "t": "activity",
     "x": "Make a folder structure and naming rule for a hybrid project. Include a place for originals, a place for the working copies, and two backups."
    },
    {
     "t": "check",
     "q": "What do you do first with tape footage before the edit?",
     "o": [
      "Colour grade",
      "Deinterlace and convert it into a digital file",
      "Add grain",
      "Delete it"
     ],
     "a": 1,
     "w": "Tape footage is interlaced and must be captured and deinterlaced before a progressive edit. {{wiki-interlace}}"
    },
    {
     "t": "check",
     "q": "About how big is one 2K DPX scan of a 3600-frame cartridge?",
     "o": [
      "About 3 GB",
      "About 30 GB",
      "About 300 GB",
      "About 3 TB"
     ],
     "a": 1,
     "w": "3600 frames at about 8.85 MB each is around 31.9 GB."
    },
    {
     "t": "check",
     "q": "Using the handbook's figures, about how much more data does a 4K frame need than a 2K frame?",
     "o": [
      "About four times",
      "About twice",
      "The same",
      "Half as much"
     ],
     "a": 0,
     "w": "A 2K frame is about 12 MB and a 4K frame about 50 MB, roughly four times as much. {{fh-ch16}}"
    },
    {
     "t": "take",
     "i": [
      "Convert everything to a common frame rate and format early.",
      "Grade the shots first, then the look.",
      "Keep the original scans and back them up."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Keycode, shot logs, pulldown phase and matchback",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "If you edit a digital copy of film and mean to return to the negative, you must be able to find every frame again. This is called matchback. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "Key numbers are printed on the edge of the negative by the manufacturer. They never change, run unbroken along each camera roll and are the most reliable reference across several transfers. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "In-camera timecode, audio timecode, telecine video timecode and ink edge code are different things. The telecine's shot log ties them together, in formats such as FLEx, ALE or ATN. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "When ordering dailies, ask for a punch mark at a key number ending in 00 at the head of each roll, an A-frame transfer starting at an even hour, nondrop timecode and any burned-in numbers you want. {{fh-ch16}}"
    },
    {
     "t": "h",
     "x": "Pulldown phase"
    },
    {
     "t": "p",
     "x": "In normal 2:3 pulldown, four film frames A, B, C and D become five video frames. A uses two fields, B three, C two and D three. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "The A frame is the only one that sits on exactly one video frame, so it marks where the pattern starts when you remove the pulldown. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "Advanced pulldown (2:3:3:2) is cleaner to reverse because one whole video frame is dropped, and it needs about 20 per cent less storage than normal pulldown recording. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "Camera modes called Cineframe 24 or 24F are not true 24p, and they should not be used for a film-out. {{fh-ch14}}"
    },
    {
     "t": "table",
     "title": "Pulldown patterns",
     "head": [
      "Name",
      "Cadence",
      "Use"
     ],
     "rows": [
      [
       "Normal 2:3",
       "2:3:2:3",
       "Smooth 60i; film transfers"
      ],
      [
       "Advanced 24pA",
       "2:3:3:2",
       "Easier reverse when editing at 24p"
      ],
      [
       "24p over 60p",
       "Frames repeated two and three times",
       "720p cameras"
      ],
      [
       "24+1 (PAL+1)",
       "Extra field every 12 frames",
       "Film to 25 fps with no speed change"
      ]
     ],
     "src": "Summary of {{fh-ch14}} and {{fh-ch16}}."
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The handbook rounds the PAL speed-up of 24 to 25 fps to 4.1 per cent. The arithmetic is 25 ÷ 24 = 1.0417, or 4.17 per cent. The earlier lesson uses the arithmetic. {{fh-ch16}}"
    },
    {
     "t": "h",
     "x": "Why a 30 fps offline can mislead"
    },
    {
     "t": "p",
     "x": "Five video frames equal four film frames, so a shot of three video frames is 3 × 4 ÷ 5 = 2.4 film frames. Matchback software adds or drops a frame to keep the length, by at most one frame. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "So leave at least two video frames of cutting frame between pieces of the same shot, because a negative cutter needs one. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "The lab lists you will meet are the pull list, assemble list, dupe list, optical list and change list. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "Drop-frame timecode skips the numbers :00 and :01 at the start of each minute except every tenth minute. It exists because 29.97 fps nondrop runs 3.6 seconds long over an hour. No frames are dropped. {{fh-ch5}}"
    },
    {
     "t": "example",
     "title": "Worked example: how many numbers drop (our arithmetic)",
     "steps": [
      "An hour has 60 minutes. Two numbers are skipped in 54 of them (all but the ten tens), so 2 × 54 = 108 frame numbers are skipped.",
      "At 30 numbered frames a second, an hour is 108,000 numbers, and 108 skipped numbers is 0.1 per cent, which is the 29.97 slowdown.",
      "That is why drop-frame timecode matches the wall clock and nondrop does not."
     ]
    },
    {
     "t": "check",
     "q": "In normal 2:3 pulldown, which film frame sits on exactly one video frame?",
     "o": [
      "A",
      "B",
      "C",
      "D"
     ],
     "a": 0,
     "w": "Frame A is the only one transferred to both fields of a single video frame. {{fh-ch16}}"
    },
    {
     "t": "check",
     "q": "A three-frame shot at 30 fps corresponds to how many film frames?",
     "o": [
      "2",
      "2.4",
      "3",
      "3.75"
     ],
     "a": 1,
     "w": "Four film frames fill five video frames, so 3 × 4 ÷ 5 = 2.4 (our arithmetic). {{fh-ch16}}"
    },
    {
     "t": "take",
     "i": [
      "Keycode is the permanent frame reference. {{fh-ch16}}",
      "The A frame marks the pulldown pattern. {{fh-ch16}}",
      "Leave cutting frames and expect a one-frame matchback error from a 30 fps offline. {{fh-ch16}}"
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "Grading, legal levels and delivery",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Colour correction shapes the look, matches shots, repairs errors and keeps the picture legal. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "For broadcast HD, luma must stay at or below 100 per cent, which is code 16 to 235 in 8-bit, black no lower than 0 per cent, and chroma below 110 per cent. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "Computer graphics made in RGB can look too bright or oversaturated in component video, so choose broadcast-safe colours. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "Use a waveform monitor for brightness, a vectorscope for hue and saturation, and an RGB parade to spot a colour cast. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "A sensible order is black, white, midtones, then colour; secondary correction then changes one colour or area without touching the rest. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "A LUT maps one master to the look needed for a film-out, a Digital Cinema Package or HD television. {{fh-ch14}}"
    },
    {
     "t": "h",
     "x": "Delivery checks"
    },
    {
     "t": "p",
     "x": "A broadcast master starts at 58:30 with black, one minute of bars and tone, a slate and a countdown, and the programme begins at 1:00:00:00. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "Master from long-GOP sources in a lighter codec such as ProRes 422, so later recompression holds up. For the web, H.264 video with AAC audio in an MP4 wrapper is the broadly compatible choice, deinterlaced and in square pixels. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "A Digital Cinema Package uses JPEG 2000 at 12 bits, an MXF wrapper, true integer frame rates and 24-bit PCM sound at 48 or 96 kHz. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "Film prints need reels of about twenty minutes, leaders with a sync beep at the 2, and sound placed 20 frames ahead of the picture in 35 mm (26 in 16 mm). {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "Keep a textless version for foreign sales, and clear music, locations and appearances before showing work in public. {{fh-ch14}} {{fh-ch17}}"
    },
    {
     "t": "example",
     "title": "Worked example: a delivery plan for a short (illustrative)",
     "steps": [
      "Shoot Super 8, scan at 2K, and record a clean DSLR clip for titles.",
      "Edit at 24p, grade shot by shot, then add one look and grain last.",
      "Export a ProRes master with bars, slate and countdown, and a separate H.264 MP4 with AAC for the web.",
      "Keep the scans and a textless copy, and log the licence for every piece of music."
     ]
    },
    {
     "t": "check",
     "q": "Which luma range is legal for 8-bit broadcast HD?",
     "o": [
      "0 to 255",
      "16 to 235",
      "10 to 245",
      "32 to 224"
     ],
     "a": 1,
     "w": "Code 16 is black (0 per cent) and 235 is white (100 per cent). {{fh-ch14}}"
    },
    {
     "t": "check",
     "q": "Where does the programme begin on a standard broadcast master?",
     "o": [
      "00:00:00:00",
      "00:58:30:00",
      "01:00:00:00",
      "01:30:00:00"
     ],
     "a": 2,
     "w": "After the bars, slate and countdown, the programme begins at one hour. {{fh-ch14}}"
    },
    {
     "t": "take",
     "i": [
      "Keep levels legal and graphics broadcast-safe. {{fh-ch14}}",
      "Master in a light codec; make web files separately. {{fh-ch14}}",
      "Clear rights before any public showing. {{fh-ch17}}"
     ]
    }
   ]
  },
  {
   "id": "l7",
   "title": "Transfer day: grey card, slates and silver retention",
   "min": 16,
   "blocks": [
    {
     "t": "h",
     "x": "The grey-card reference"
    },
    {
     "t": "p",
     "x": "Brown describes Kodak's Gray Card Plus: a large 18 per cent grey area bordered by 3 per cent and 90 per cent patches, to give the colourist more reference for grading. {{brown-hd}}"
    },
    {
     "t": "p",
     "x": "Shoot the card, then a few seconds of the scene. The card sets neutral, and the scene shows the intent. {{brown-hd}}"
    },
    {
     "t": "h",
     "x": "Slate habits for transfer"
    },
    {
     "t": "p",
     "x": "Avoid tail slates. The slate comes at the end of the take, held upside down, and the telecine operator or editor must roll to the end, sync and roll back. It is also easy to cut the camera before the slate. {{brown-production}}"
    },
    {
     "t": "p",
     "x": "Pre-roll audio for five seconds and re-jam timecode slates often. {{brown-hd}}"
    },
    {
     "t": "h",
     "x": "Check colour on a light box"
    },
    {
     "t": "p",
     "x": "Murch suggests putting the workprint and the first answer print in sync over a light box of the correct colour temperature. Low light through film shows tonalities that a bright projected screen hides, such as a slight green cast. {{murch-decisive}}"
    },
    {
     "t": "h",
     "x": "Silver retention"
    },
    {
     "t": "p",
     "x": "Brown describes Skip-Bleach as FotoKem's silver-retention process. Bleach bypass is essentially incomplete processing, and the advantage is that it is reversible. {{brown-transfer}}"
    },
    {
     "t": "p",
     "x": "Leaving silver in the negative raises its density, as if it had more exposure, so FotoKem recommends slight underexposure for negative intended for bypass. Blacks get blacker and whites whiter. {{brown-transfer}}"
    },
    {
     "t": "p",
     "x": "The look is more radical than ENR or a bypass on the intermediates. Test it on the exact lab and stock. {{brown-transfer}}"
    },
    {
     "t": "check",
     "q": "Why avoid tail slates?",
     "o": [
      "The editor or operator must roll to the end, sync, and roll back",
      "They are too bright",
      "They cost more film",
      "They cannot be read"
     ],
     "a": 0,
     "w": "It is slow and expensive, and the camera may stop before the slate. {{brown-production}}"
    },
    {
     "t": "check",
     "q": "What does leaving silver in the negative do?",
     "o": [
      "Raises its density",
      "Lowers its density",
      "Removes colour only",
      "Has no effect"
     ],
     "a": 0,
     "w": "More silver means more density. {{brown-transfer}}"
    },
    {
     "t": "take",
     "i": [
      "The grey card is the neutral reference. {{brown-hd}}",
      "Avoid tail slates. {{brown-production}}",
      "Underexpose slightly for bleach bypass. {{brown-transfer}}"
     ]
    }
   ]
  },
  {
   "id": "l8",
   "title": "Offline, online and conform",
   "min": 16,
   "blocks": [
    {
     "t": "h",
     "x": "Two stages of editing"
    },
    {
     "t": "p",
     "x": "The Handbook says offline editing means draft-quality shaping and online means finishing. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "An edit decision list records the timecode of every shot, so it carries the cut between systems. Proxies such as ProRes Proxy or DNxHD 36 relink to the full-resolution originals. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "A clip in an editor is a pointer to media, so editing is non-destructive. Keep media off the system drive. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "The Handbook warns that compressed 8-bit 4:2:0 hurts titles, keys and recompression. Finish in 4:2:2 10-bit. {{fh-ch14}}"
    },
    {
     "t": "example",
     "title": "Storage cost, our arithmetic",
     "steps": [
      "One minute of DV is about 217 MB, as the Handbook gives it.",
      "One minute of uncompressed 2K is more than 17 GB.",
      "17,000 ÷ 217 = about 78, which the book rounds to eighty times."
     ]
    },
    {
     "t": "h",
     "x": "Film transfer and sync"
    },
    {
     "t": "p",
     "x": "In film transfer you can sync sound in the telecine with timecode, which scanners cannot do, in a cheaper layback suite, or in the editor with subframe accuracy. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "A 24 fps timebase in the editor gives a one-to-one match with film frames. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "A 2K or 4K scan is a universal master but costly to store, so many productions scan only the selected shots. {{fh-ch16}}"
    },
    {
     "t": "check",
     "q": "What does an edit decision list carry?",
     "o": [
      "The timecode of every shot",
      "The grade only",
      "The sound mix",
      "The lens data"
     ],
     "a": 0,
     "w": "It carries the cut between systems. {{fh-ch14}}"
    },
    {
     "t": "check",
     "q": "Why finish in 4:2:2 10-bit rather than compressed 8-bit 4:2:0?",
     "o": [
      "Titles, keys and recompression suffer in 4:2:0",
      "It is smaller",
      "It is faster to shoot",
      "It is analogue"
     ],
     "a": 0,
     "w": "The Handbook warns about 8-bit 4:2:0. {{fh-ch14}}"
    },
    {
     "t": "take",
     "i": [
      "Cut cheap, finish properly. {{fh-ch14}}",
      "A clip is a pointer, so editing is non-destructive. {{fh-ch14}}",
      "Scanners cannot sync with timecode. {{fh-ch16}}"
     ]
    }
   ]
  },
  {
   "id": "l9",
   "title": "Signal levels, pixels and monitors",
   "min": 16,
   "blocks": [
    {
     "t": "h",
     "x": "Legal levels and codes"
    },
    {
     "t": "p",
     "x": "In 8-bit component video, legal black is code 16 and white is 235. RGB runs from 0 to 255, so translating between them can look dull or too bright. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "S-video is better than composite. Prefer digital connections such as HDMI and SDI over composite. {{fh-ch5}}"
    },
    {
     "t": "h",
     "x": "Monitors"
    },
    {
     "t": "p",
     "x": "Computer monitors are RGB and show component video flat and dark unless it is remapped. Judge television work on a Rec. 709 reference or a calibrated monitor. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Never stretch 4:3 to 16:9. Ambient light affects how black looks, and 120 or 240 Hz interpolation changes the look of motion. {{fh-ch5}}"
    },
    {
     "t": "h",
     "x": "Pixel shape"
    },
    {
     "t": "p",
     "x": "HD and computer pixels are square. Standard-definition NTSC pixels are 0.9 wide, or 1.2 for widescreen. PAL pixels are 1.066, or 1.42 for widescreen. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Titles and stills can distort if they are not converted. DPI and PPI are irrelevant to video. Only pixel dimensions matter. {{fh-ch5}}"
    },
    {
     "t": "h",
     "x": "Plumbing"
    },
    {
     "t": "ul",
     "i": [
      "USB 2.0 runs at 480 Mbps, which is too slow for editing. SDI runs at 270 Mbps and HD-SDI at 1.485 Gbps. {{fh-ch5}}",
      "RAID 5 stripes with parity: four 1 TB drives give 3 TB. {{fh-ch5}}",
      "A drive sold as 1 TB holds about 930 GB, and should be left 10 to 25 per cent empty. {{fh-ch5}}"
     ]
    },
    {
     "t": "example",
     "title": "Drive size, our arithmetic",
     "steps": [
      "A 1 TB drive holds 1,000,000,000,000 bytes.",
      "The computer counts in 1,073,741,824-byte gigabytes (2³⁰).",
      "1,000,000,000,000 ÷ 1,073,741,824 = about 931 GB, which matches the Handbook's about 930 GB."
     ]
    },
    {
     "t": "p",
     "x": "A container such as QuickTime or MXF holds media plus metadata. You need the codec as well as the container. {{fh-ch5}}"
    },
    {
     "t": "h",
     "x": "Mixing formats"
    },
    {
     "t": "p",
     "x": "When you mix formats, handle frame size, pixel shape, aspect ratio, frame rate and field order. Downconversion beats upconversion. {{fh-ch14}}"
    },
    {
     "t": "p",
     "x": "Prepare stills at twice the project size if you will move in 200 per cent. {{fh-ch14}}"
    },
    {
     "t": "check",
     "q": "What are legal black and white codes in 8-bit component video?",
     "o": [
      "16 and 235",
      "0 and 255",
      "1 and 254",
      "64 and 940"
     ],
     "a": 0,
     "w": "RGB runs 0 to 255, component legal range is 16 to 235. {{fh-ch5}}"
    },
    {
     "t": "check",
     "q": "A 1 TB drive shows roughly how much space?",
     "o": [
      "About 930 GB",
      "About 1,100 GB",
      "Exactly 1,000 GB",
      "About 500 GB"
     ],
     "a": 0,
     "w": "The computer counts gigabytes of 2³⁰ bytes. {{fh-ch5}}"
    },
    {
     "t": "take",
     "i": [
      "Legal component range is 16 to 235. {{fh-ch5}}",
      "Never stretch 4:3 to 16:9. {{fh-ch5}}",
      "Handle pixel shape and field order when mixing formats. {{fh-ch14}}"
     ]
    }
   ]
  },
  {
   "id": "l10",
   "title": "The lecturer's method: Robert W. Paul",
   "min": 22,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "Robert W. Paul (1869 to 1943) was an English pioneer of film and a maker of scientific instruments. {{wiki-paul}}"
    },
    {
     "t": "p",
     "x": "We read only one Wikipedia page, as excerpts. The record is faint, no primary source was found, and the page notes that the credit for some firsts is claimed for others. His voice is not documented. {{wiki-paul}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Start from the tool you can copy. In 1894 he reverse-engineered an Edison Kinetoscope that had not been patented in Britain. {{wiki-paul}}",
      "Find the bottleneck. The only films available were bootleg copies made for Edison's machines, so he resolved to make his own camera. {{wiki-paul}}",
      "Work with others, and split when needed. He and Birt Acres shared the credit for Britain's first 35 mm camera, then dissolved the partnership and competed. {{wiki-paul}}",
      "Build the next tool. In April 1896 he built the Cinematograph Camera No. 1, the first with reverse-cranking, so the same film could be exposed several times. {{wiki-paul}}",
      "Use the tool for new work. Superpositions and multiple exposures appear in his 1901 film Scrooge, or, Marley's Ghost. {{wiki-paul}}",
      "Build the place for the work. In 1898 he designed and built Britain's first film studio. {{wiki-paul}}"
     ]
    },
    {
     "t": "p",
     "x": "The page also says Georges Méliès began using cameras built by Paul, that The British Film Catalogue credits his 1898 film Our New General Servant with the first use of intertitles, and that his films pioneered close-up framing and cut transitions. {{wiki-paul}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The page notes that others claim some of these firsts, for example Louis Le Prince. We treat the claims as Wikipedia's, not as settled. {{wiki-paul}}"
    },
    {
     "t": "table",
     "title": "Paul's moves and your hybrid parallel (the right column is our adaptation)",
     "head": [
      "Paul",
      "Hybrid project"
     ],
     "rows": [
      [
       "Reverse-engineered a machine that existed",
       "Learn the camera or deck you were given before you replace it"
      ],
      [
       "Built a camera when none was available",
       "Build the missing step: a capture route for tape, a scan route for film"
      ],
      [
       "Superposed exposures on one film",
       "Layer clips on one timeline and decide each layer's share"
      ],
      [
       "Built a studio",
       "Set up a folder, naming and backup system before the edit"
      ]
     ],
     "src": "The left column follows {{wiki-paul}}. The right column is our adaptation."
    },
    {
     "t": "h",
     "x": "Worked example: layering and exposure (our arithmetic, illustrative)"
    },
    {
     "t": "example",
     "title": "How much light does each layer get?",
     "steps": [
      "Expose a frame twice on the same film at full exposure each time and the film gets twice the light, one stop too much. Reverse-cranking is what made multiple exposures possible. {{wiki-paul}}",
      "To keep the total correct, each pass must give 1 ÷ n of the exposure. Two passes: each at half, one stop under. Three passes: each at a third, log base 2 of 3 is about 1.6 stops under. Four passes: each at a quarter, 2 stops under.",
      "A digital edit shows the same idea as opacity: two layers at 50 percent add to one full-strength picture, and three layers at about 33 percent each.",
      "Our caution: film and digital blend differently, because digital layers are usually mixed in a non-linear colour space, so equal opacity may not look like equal light. Check by eye."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a hybrid share table"
    },
    {
     "t": "ol",
     "i": [
      "List each source: DSLR, film scan, tape capture. Note frame rate and shutter angle for each.",
      "Choose one project frame rate, and a conversion for any source that differs.",
      "For each shot, say which sources appear and the share of the picture each takes.",
      "If you layer, divide the exposure among the layers as above, then check by eye.",
      "Keep every original, as Paul's machines kept every negative, and back them up twice."
     ]
    },
    {
     "t": "activity",
     "x": "Make a two-layer composite from a digital and an analog clip. State the share each takes and what could not be matched."
    },
    {
     "t": "check",
     "q": "What was special about Cinematograph Camera No. 1?",
     "o": [
      "First colour camera",
      "First with reverse-cranking, so film could be exposed several times",
      "It used no film",
      "It recorded sound"
     ],
     "a": 1,
     "w": "It was the first camera to feature reverse-cranking. {{wiki-paul}}"
    },
    {
     "t": "check",
     "q": "Three layers must add to one correct exposure. About how many stops under is each?",
     "o": [
      "1",
      "1.6",
      "2",
      "3"
     ],
     "a": 1,
     "w": "Each gets a third of the light, which is log base 2 of 3, about 1.6 stops."
    },
    {
     "t": "check",
     "q": "Why did Paul build his own camera?",
     "o": [
      "He disliked Edison",
      "Only bootleg copies of Edison films were available",
      "He wanted colour",
      "The law required it"
     ],
     "a": 1,
     "w": "The only films available were copies made for Edison machines. {{wiki-paul}}"
    },
    {
     "t": "take",
     "i": [
      "Build the missing step instead of waiting for it. {{wiki-paul}}",
      "Each layer gets a share of the final picture.",
      "Keep every original."
     ]
    }
   ]
  }
 ]
};
