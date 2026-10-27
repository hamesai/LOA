/* Cinematography: DSLR and analog film (module 2). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["cinematography-2"] = {
 "intro": "DSLR and mirrorless cameras were built for stills, and filmmakers adopted them because the sensors are large and the price is low. This module explains what that design gives you and what it takes away, so you can work around the limits with a plan instead of finding them on the day. Lecturer lens: Gregg Toland started from what the picture needed, found where conventional equipment fell short, changed what he could with engineers, tested it, and then solved the new problems the changes created. A DSLR audit follows the same order.",
 "outcomes": [
  "Convert focal lengths between sensor sizes with the crop factor and say what a bigger sensor changes.",
  "Choose between a standard and a flat or log picture profile, and read the camera's exposure aids to protect highlights.",
  "Plan sound, card space and clip length for a DSLR shoot, and name the limits of the camera you actually own.",
  "Spot and reduce moiré, and set a zebra or histogram to protect highlights without exposing every face to one number.",
  "Lecturer's method: Audit the limits of your kit against what the story needs, choose which to change, test each change, and plan around the rest."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "How a stills camera became a cine camera",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Canon announced the EOS 5D Mark II on 17/09/2008, and it was the first Canon EOS camera to record video. {{wiki-5d2}}"
    },
    {
     "t": "p",
     "x": "It was a 21-megapixel full-frame CMOS DSLR with a 36 × 24 mm sensor, and it recorded full HD at 1920 × 1080. {{wiki-5d2}}"
    },
    {
     "t": "p",
     "x": "Other cameras had video first: the Nikon D90 shot 720p, and the Panasonic GH1 could record 1080p/24 before the 5D Mark II officially could. {{wiki-5d2}}"
    },
    {
     "t": "p",
     "x": "The 5D Mark II was the first full-frame DSLR to record 1080p video, and the large sensor produced very shallow depth of field for what its users called a film look. {{wiki-5d2}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The 5D Mark II is a historical example, not a recommendation. Today's cameras differ, but the same trade-offs recur, so use its specification as a checklist for the limits of your own camera."
    },
    {
     "t": "h",
     "x": "Limits that came with the first generation"
    },
    {
     "t": "p",
     "x": "Clips were capped at 4 GB, about 12 minutes of 1080p footage. The Canon manual states the cap but does not say why. {{canon-5d2-manual}}"
    },
    {
     "t": "p",
     "x": "The camera also set a hard maximum clip length of 29 minutes 59 seconds. {{canon-5d2-manual}}"
    },
    {
     "t": "p",
     "x": "In movie mode the camera sets ISO automatically (ISO 100 standard, up to 6400, expandable to H1 12800). Metering is centre-weighted average. The manual advises against autofocus during recording, because it can shift focus or exposure. {{canon-5d2-manual}}"
    },
    {
     "t": "p",
     "x": "Audio came from a monaural built-in microphone, with a jack for an external stereo microphone. {{wiki-5d2}}"
    },
    {
     "t": "p",
     "x": "At first the camera had no manual control of exposure in video; version 1.1.0 of the firmware, released on 02/06/2009, added control over aperture, shutter speed and ISO. {{wiki-5d2}}"
    },
    {
     "t": "p",
     "x": "For its first eighteen months it shot only at 30 frames per second, and a firmware update in March 2010 added 25p and 24p modes. {{wiki-5d2}}"
    },
    {
     "t": "table",
     "title": "The first-generation limits and how to plan around each (limits from; plans are our advice)",
     "head": [
      "Limit",
      "What it meant",
      "Plan"
     ],
     "rows": [
      [
       "4 GB / about 12 min file size",
       "Long takes were split",
       "Stop and restart between takes; never plan a 30-minute single take"
      ],
      [
       "Mono built-in mic",
       "Poor on-camera sound",
       "Record sound separately and sync it in the edit"
      ],
      [
       "Fixed frame rates at launch",
       "No 24p for film-style work",
       "Check your camera's frame-rate options before you buy lenses or lights"
      ],
      [
       "No manual video exposure at launch",
       "Auto exposure shifted during takes",
       "Use manual exposure so the picture stays consistent"
      ]
     ],
     "src": "Limits from the Wikipedia page on the camera; the plans are ours. {{wiki-5d2}}"
    },
    {
     "t": "h",
     "x": "Moiré: a picture limit, not just a file limit"
    },
    {
     "t": "p",
     "x": "Moiré is a rippling or fan-shaped pattern, or a fringe of false colour, that appears on fine repeating detail such as checked or herringbone cloth, brick walls and shop shutters. {{fh-ch5b}} It is a form of aliasing, which appears when high-resolution detail is squeezed into a lower-resolution picture. {{fh-ch5b}}"
    },
    {
     "t": "p",
     "x": "The handbook reports that DSLRs show moiré even on hair and plain-looking clothing, because the sensor is built for high-resolution stills and many DSLRs make the video image by skipping rows of pixels instead of filtering and scaling down properly. {{fh-ch5b}} Dedicated video cameras use an optical low-pass filter that softens very fine detail on purpose. {{fh-ch5b}}"
    },
    {
     "t": "ul",
     "i": [
      "Turn the camera's sharpness setting down, or choose a softer picture profile. {{fh-ch5b}}",
      "Change the camera angle, keep the camera still, or change the wardrobe or set item causing it. {{fh-ch5b}}",
      "Check whether it is in the picture or only in the viewfinder by looking on a second monitor. {{fh-ch5b}}",
      "Do not count on fixing it in post: the handbook calls that cumbersome, with mixed results. {{fh-ch5b}}"
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The handbook was written in 2012, so its account of how DSLRs read the sensor describes cameras of that period. Newer cameras may read the sensor differently. Test your own camera on a brick wall and on fine cloth before you rely on it."
    },
    {
     "t": "example",
     "title": "Worked example: what the 4 GB limit implies (our arithmetic)",
     "steps": [
      "4 GB in about 12 minutes (720 s). Using 4 GiB (4,294,967,296 bytes) the data rate is 4,294,967,296 × 8 ÷ 720 ≈ 47.7 Mb/s. With 4 × 10^9 bytes it is about 44.4 Mb/s.",
      "So the camera was recording at roughly 44 to 48 megabits per second. This is an estimate, not a figure the source gives.",
      "At 45 Mb/s you record 5.6 MB each second, or about 337 MB each minute.",
      "A 64 GB card (taken as 64,000 MB) then holds about 64,000 ÷ 337 ≈ 190 minutes."
     ]
    },
    {
     "t": "activity",
     "x": "Look up your own camera's maximum clip length, frame rates, video bit rate and microphone input. Fill in a row of the table above for each limit you find."
    },
    {
     "t": "check",
     "q": "What limited the 5D Mark II's clips to about 12 minutes of 1080p?",
     "o": [
      "The battery died",
      "The 4 GB file size limit per clip",
      "Heat only",
      "Law"
     ],
     "a": 1,
     "w": "The manual states the 4 GB limit and does not give a cause. {{canon-5d2-manual}}"
    },
    {
     "t": "check",
     "q": "What made the 5D Mark II's video notable when it launched?",
     "o": [
      "It was the first camera to shoot HD",
      "It was the first full-frame DSLR with 1080p",
      "It had no sensor",
      "It recorded film"
     ],
     "a": 1,
     "w": "Other cameras shot HD first, but this was the first full-frame DSLR with 1080p. {{wiki-5d2}}"
    },
    {
     "t": "check",
     "q": "Which change does the handbook suggest for reducing moiré on a DSLR?",
     "o": [
      "Turn the sharpness setting down",
      "Raise the ISO",
      "Shoot at a higher frame rate",
      "Open the aperture"
     ],
     "a": 0,
     "w": "Lowering the picture's resolution at the sensor, including turning sharpness down, helps reduce the pattern. {{fh-ch5b}}"
    },
    {
     "t": "take",
     "i": [
      "Read your camera's limits before you plan a shoot. {{wiki-5d2}}",
      "Clip length, sound and frame rates were the first-generation constraints.",
      "Plan a workaround for each limit in advance."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Sensor size and crop factor",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "The crop factor compares the size of a sensor with a reference format, which is almost always the 35 mm film still frame of 36 × 24 mm. {{wiki-crop}}"
    },
    {
     "t": "p",
     "x": "The usual definition divides the 43.3 mm diagonal of that frame by the diagonal of the sensor. {{wiki-crop}}"
    },
    {
     "t": "p",
     "x": "Multiplying a lens's focal length by the crop factor gives the focal length that would produce the same field of view on the reference format. {{wiki-crop}}"
    },
    {
     "t": "p",
     "x": "The lens itself does not change, because a given lens casts the same image whatever camera it is on, and the smaller sensor simply records a smaller part of it. {{wiki-crop}}"
    },
    {
     "t": "fig",
     "id": "cinematography-cropfov",
     "title": "One lens, two sensors",
     "cap": "A smaller sensor records only the middle of the image the lens projects, so the picture looks more zoomed in."
    },
    {
     "t": "h",
     "x": "Worked numbers from the source"
    },
    {
     "t": "p",
     "x": "For most DSLRs the crop factor is 1.3 to 2.0. {{wiki-crop}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Sensor sizes quoted as fractions of an inch (such as 1/3 inch or 2/3 inch) are a legacy diagonal measure from the days of glass tubes, so the real sensor is smaller than the label suggests. A larger sensor also gives bigger photosites, which are more sensitive, handle a wider range of brightness and make less noise. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "A 28 mm lens on a camera with a 1.6 crop factor gives the same field of view as about a 45 mm lens on full frame (28 × 1.6 = 44.8). {{wiki-crop}}"
    },
    {
     "t": "p",
     "x": "A 300 mm lens at 1.6 behaves like a 480 mm lens. {{wiki-crop}}"
    },
    {
     "t": "p",
     "x": "This narrowing is a disadvantage for wide shots, since ultra-wide designs become merely wide and wide lenses become normal. {{wiki-crop}}"
    },
    {
     "t": "table",
     "title": "Equivalent field of view at a crop factor of 1.6 (our arithmetic from the formula)",
     "head": [
      "Lens on the camera",
      "Behaves like on full frame",
      "Use"
     ],
     "rows": [
      [
       "18 mm",
       "28.8 mm",
       "Wide"
      ],
      [
       "24 mm",
       "38.4 mm",
       "Moderate wide"
      ],
      [
       "31 mm",
       "49.6 mm",
       "Normal"
      ],
      [
       "50 mm",
       "80 mm",
       "Short telephoto"
      ],
      [
       "85 mm",
       "136 mm",
       "Telephoto"
      ]
     ],
     "src": "Each row multiplies the focal length by 1.6, following {{wiki-crop}}."
    },
    {
     "t": "h",
     "x": "Noise, depth of field and lenses"
    },
    {
     "t": "p",
     "x": "Larger sensors collect more photons, so with the same exposure they give less noise and greater dynamic range. {{wiki-crop}}"
    },
    {
     "t": "p",
     "x": "With the same aperture and the same framing, a larger sensor gives shallower depth of field. If you keep the framing and aperture and use a smaller sensor, the depth of field increases in proportion to the crop. {{wiki-dof}}"
    },
    {
     "t": "p",
     "x": "Many manufacturers make lenses for the smaller sensors, such as Canon EF-S, Nikon DX, Fujifilm XF and Sony E, that project a smaller image circle. {{wiki-crop}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A lens made for a smaller sensor may vignette or show dark corners on a larger one. Check the lens's coverage before you mix systems."
    },
    {
     "t": "p",
     "x": "Be ready for the factor being written the other way round. The handbook takes the full-frame 5D as its reference and gives the smaller-sensor 7D a crop factor of about 0.6, so you multiply a full-frame focal length by 0.6 to find the lens that gives the same view: 50 mm × 0.6 is about 32 mm. {{fh-ch4}} This course divides the other way, with factors of 1.3 or more that you multiply the lens by. Both describe the same geometry, so check which way a chart or app is written before trusting its numbers."
    },
    {
     "t": "p",
     "x": "Some cameras use only part of the sensor for video, which is called windowing. If the window is narrower than the sensor, the angle of view shrinks. A camera with a 16:9 sensor switched to 4:3 shows a view about 25 per cent narrower, as if you had zoomed in slightly. {{fh-ch4}} Changing the recording resolution can do the same on some cameras and not on others, so check the view at each setting you plan to use. {{fh-ch4}}"
    },
    {
     "t": "example",
     "title": "Worked example: choosing a lens for a framing (illustrative)",
     "steps": [
      "You like the framing of a 50 mm lens on a full-frame camera, but your camera has a crop factor of 1.6.",
      "To match the field of view, divide: 50 ÷ 1.6 = 31.25 mm. A 30 or 32 mm lens is the nearest.",
      "A Nikon DX body has a crop factor of about 1.5, so 50 ÷ 1.5 = 33.3 mm would do.",
      "The framing will match, but at the same f-number the depth of field will be deeper than on full frame."
     ]
    },
    {
     "t": "activity",
     "x": "Look up your camera's crop factor. Make a card of the lenses you own, with the full-frame equivalent beside each."
    },
    {
     "t": "check",
     "q": "A 35 mm lens is on a camera with a crop factor of 1.5. What full-frame focal length does it frame like?",
     "o": [
      "23.3 mm",
      "35 mm",
      "52.5 mm",
      "70 mm"
     ],
     "a": 2,
     "w": "Multiply: 35 × 1.5 = 52.5 mm. {{wiki-crop}}"
    },
    {
     "t": "check",
     "q": "What stays the same when you move a lens from a full-frame camera to a smaller sensor?",
     "o": [
      "The field of view",
      "The image the lens projects",
      "The depth of field",
      "The crop"
     ],
     "a": 1,
     "w": "A given lens casts the same image whatever camera it is on. {{wiki-crop}}"
    },
    {
     "t": "take",
     "i": [
      "Crop factor = 43.3 mm ÷ sensor diagonal. {{wiki-crop}}",
      "Focal length × crop factor gives the full-frame equivalent field of view. {{wiki-crop}}",
      "A bigger sensor gives shallower depth of field and less noise at the same exposure."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Picture profiles, log and the exposure aids",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "A picture profile is a set of tone, colour and sharpness settings the camera bakes into the file. The standard profiles look good straight from the camera, but they clip shadows and highlights early."
    },
    {
     "t": "p",
     "x": "A log profile is a shooting gamma that gives a wide tonal range and more room to choose colour and style later. {{wiki-log}}"
    },
    {
     "t": "p",
     "x": "The image looks washed out and needs colour grading, but it retains shadow and highlight detail that a regular linear profile would lose by clipping. {{wiki-log}}"
    },
    {
     "t": "p",
     "x": "Log encoding came from the Cineon film scanner that Kodak developed in the early 1990s, which used logarithmic encoding to reproduce the character of negative film. {{wiki-log}}"
    },
    {
     "t": "p",
     "x": "Each maker has its own: C-Log on Canon, S-Log on Sony, V-Log on Panasonic, N-Log on Nikon and F-Log on Fujifilm, and they are not interchangeable. {{wiki-log}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A log profile is only worth shooting if you will grade the footage. Delivered straight to a screen it looks flat. Also, do not mix camera makers' log curves in one grade without the right conversion."
    },
    {
     "t": "h",
     "x": "Bit depth and why log wants more"
    },
    {
     "t": "p",
     "x": "An 8-bit channel has 256 levels and a 10-bit channel has 1024. This is arithmetic, not from the sources. When a flat log image is stretched in grading, 8-bit footage has fewer levels to stretch, and banding in skies and gradients is the likely sign."
    },
    {
     "t": "p",
     "x": "Our inference: if your camera records only 8-bit, a gentler flat profile is usually safer than full log."
    },
    {
     "t": "h",
     "x": "Reading the exposure"
    },
    {
     "t": "p",
     "x": "The Magic Lantern add-on for the 5D Mark II added zebra stripes, false colour and other exposure meters that the camera did not have. {{wiki-5d2}}"
    },
    {
     "t": "p",
     "x": "Modern cameras often include histograms, zebras and waveform views, and some include false colour. The 5D Mark II firmware of 2010 added a histogram for movie shooting in manual exposure. {{wiki-5d2}}"
    },
    {
     "t": "table",
     "title": "Exposure aids and what each tells you (our summary of common tools)",
     "head": [
      "Aid",
      "Shows",
      "Best for"
     ],
     "rows": [
      [
       "Histogram",
       "How many pixels sit at each brightness",
       "Spotting clipped highlights or crushed shadows quickly"
      ],
      [
       "Zebra stripes",
       "A pattern over areas above a set brightness",
       "Protecting skin tones or highlights at a chosen level"
      ],
      [
       "False colour",
       "Colours mapped to brightness bands",
       "Judging exposure of faces and walls precisely"
      ],
      [
       "Waveform",
       "Brightness across the image width",
       "Matching exposure shot to shot"
      ]
     ],
     "src": "Descriptions are ours; the sources name zebra stripes, false colour and histograms as tools. {{wiki-5d2}}"
    },
    {
     "t": "p",
     "x": "A zebra set to 100 per cent shows where the signal is at or close to maximum and may be clipped. Some operators set it lower, at 85 to 90 per cent, for an earlier warning. If you use a borrowed camera, check what level its zebra is set to. {{fh-ch5b}}"
    },
    {
     "t": "p",
     "x": "A histogram suits the 'mountain in the middle' approach, where most pixels sit in the midtones and away from both edges. {{fh-ch5b}} A waveform monitor shows the level of every part of the picture, so a shiny forehead that goes above 100 per cent is easy to spot and trace, which a histogram cannot do. {{fh-ch5b}}"
    },
    {
     "t": "p",
     "x": "With a standard video gamma, one stop of exposure moves a midtone's level by about 20 per cent, and the handbook puts the dynamic range of digital video cameras of its day at around ten stops. {{fh-ch5b}} Those are the handbook's figures for 2012 cameras, so check yours."
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Do not expose every face to the same number. The handbook calls the old habit of putting skin at 65 to 70 per cent outdated: skin varies widely, and auto-iris aims at 18 per cent grey, so it tends to expose everyone alike, leaving some people too dark and others too light. {{fh-ch5b}} For a sit-down interview with a light-skinned person, 50 to 55 per cent on a waveform is described as a safe starting point. {{fh-ch5b}} Exposure should serve the scene. {{fh-ch5b}}"
    },
    {
     "t": "example",
     "title": "Worked example: protecting a window highlight (illustrative)",
     "steps": [
      "You film a person beside a bright window with a standard profile. The histogram touches the right edge, so the window is clipped.",
      "Switch to a flat or log profile. The curve reserves more room for the highlights, so the window keeps detail.",
      "Lower the exposure by one stop and check the histogram no longer touches the right edge.",
      "In grading, lift the shadows to recover the face. If the face now looks noisy, the answer is light on the face, not a higher ISO."
     ]
    },
    {
     "t": "activity",
     "x": "Record 20 seconds of a high-contrast scene on your standard profile and 20 seconds on your flattest one. Compare the histograms and see where the highlights clip."
    },
    {
     "t": "check",
     "q": "What does a log profile give you, according to the source?",
     "o": [
      "Sharper edges",
      "A wide tonal range with more room to grade",
      "Less noise always",
      "A faster frame rate"
     ],
     "a": 1,
     "w": "It gives a wide dynamic and tonal range and allows more latitude for colour and style choices. {{wiki-log}}"
    },
    {
     "t": "check",
     "q": "How many levels does a 10-bit channel have?",
     "o": [
      "256",
      "512",
      "1024",
      "4096"
     ],
     "a": 2,
     "w": "Ten bits give 2^10 = 1024 levels (our arithmetic)."
    },
    {
     "t": "check",
     "q": "The handbook says a zebra set to 100 per cent shows you:",
     "o": [
      "Where the signal is at or near maximum and may clip",
      "Where the picture is in focus",
      "Where the colour is neutral",
      "The exact stop value"
     ],
     "a": 0,
     "w": "Zebra stripes appear wherever the video signal passes the preset level; at 100 per cent they mark possible clipping. {{fh-ch5b}}"
    },
    {
     "t": "take",
     "i": [
      "A log profile trades a flat look for extra highlight and shadow detail. {{wiki-log}}",
      "Shoot log only if you will grade it.",
      "Use histogram, zebra or false colour to protect the highlights."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Sound, support and a pre-shoot check",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "The 5D Mark II shipped with a monaural microphone and an external microphone jack. {{wiki-5d2}} That is typical: the camera is a good image recorder and a limited sound recorder."
    },
    {
     "t": "p",
     "x": "Double-system sound means recording picture and sound on separate devices and syncing them later. Early Super 8 sound filmmakers did the same: companies built systems to record sound separately because the film itself carried no sound. {{wiki-super8}}"
    },
    {
     "t": "p",
     "x": "The habit carries over to a DSLR: a separate recorder with a microphone close to the speaker gives cleaner sound than the camera's input. The handbook agrees: many DSLRs record much lower quality audio than video, so a separate recorder can make a big difference. {{fh-ch1}} It also recommends still recording audio in the camera as a scratch track for reference. {{fh-ch11}}"
    },
    {
     "t": "h",
     "x": "Support"
    },
    {
     "t": "p",
     "x": "The first film cameras were fastened directly to the head of a tripod, and the first rotating tripod head was built in 1897 so that Robert Paul could follow a procession in one shot. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "A DSLR is light and small, which makes it easy to hold and hard to keep steady. The usual answers are a tripod, a shoulder rig, a monopod, a slider or a gimbal. This is our summary."
    },
    {
     "t": "h",
     "x": "Focus"
    },
    {
     "t": "p",
     "x": "Many stills lenses are designed for autofocus and have a short focus throw, which makes pulling focus smooth by hand difficult. Cine lenses have longer focus rotation and marked distances. This is our summary of common practice."
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Use manual focus and peaking or magnified view on the screen for planned shots. Autofocus is useful for run-and-gun work if you have tested how your camera behaves."
    },
    {
     "t": "table",
     "title": "A pre-shoot checklist for a DSLR or mirrorless camera (our checklist)",
     "head": [
      "Check",
      "Why"
     ],
     "rows": [
      [
       "Format cards in the camera",
       "Avoids errors and old files"
      ],
      [
       "Frame rate and shutter set (for example 24 fps, 1/48 s)",
       "Consistent motion in every clip"
      ],
      [
       "Picture profile set and noted",
       "So the grade matches"
      ],
      [
       "White balance set by hand",
       "Auto shifts mid-take"
      ],
      [
       "Manual exposure, ISO at base or noted",
       "Consistent look"
      ],
      [
       "Stabilisation and autofocus decisions made",
       "Avoid surprises"
      ],
      [
       "Batteries charged and a spare",
       "Video drains power"
      ],
      [
       "Test the sound with headphones",
       "You hear problems on set"
      ],
      [
       "Clip a slate or clap",
       "Syncs sound"
      ]
     ],
     "src": "Checklist is ours, based on the limits in this module."
    },
    {
     "t": "h",
     "x": "Cards and compression"
    },
    {
     "t": "p",
     "x": "The card must be able to write fast enough for the format you shoot. A higher frame rate or larger frame may need a faster card, and slower cards sold for stills may not work for video. {{fh-ch3}} Format each card in the camera you will use it in, and use a name-brand card. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "DSLRs mostly record highly compressed H.264 video. That keeps files small, but long-GOP codecs take a lot of computer processing to decode and edit, so playback can stutter and outputting the finished film can take a long time. {{fh-ch14}} Our reading: plan time for converting the footage, or test an edit before the shoot, rather than finding the problem afterwards."
    },
    {
     "t": "p",
     "x": "Where you can record 10 or 12 bits instead of 8, or use an external recorder, you get more tonal range and footage that stands up better to grading. {{fh-ch5b}}"
    },
    {
     "t": "example",
     "title": "Worked example: a 3-minute shoot plan (illustrative)",
     "steps": [
      "You will shoot 12 takes of about 90 seconds each.",
      "Total footage: 12 × 90 = 1080 s, or 18 minutes.",
      "At about 337 MB per minute (the earlier estimate) you need about 6.1 GB of card space.",
      "Add margin: carry cards for at least three times that, and a second card or drive for backup."
     ]
    },
    {
     "t": "activity",
     "x": "Make your own pre-shoot checklist on one page and tick it off before your next shoot. Add any item that has bitten you before."
    },
    {
     "t": "check",
     "q": "Why record sound separately from the camera?",
     "o": [
      "The camera cannot record sound",
      "A recorder near the speaker is cleaner than the camera's built-in microphone",
      "It is cheaper",
      "It is required by law"
     ],
     "a": 1,
     "w": "Separate recording gives better sound; the camera mic is mono and distant. {{wiki-5d2}}"
    },
    {
     "t": "check",
     "q": "What is the main point of the pre-shoot checklist?",
     "o": [
      "To look professional",
      "To remove surprises that appear on set",
      "To get a lower ISO",
      "To avoid tripods"
     ],
     "a": 1,
     "w": "A checklist catches avoidable problems before the cast and light are waiting."
    },
    {
     "t": "check",
     "q": "You record sound on a separate recorder. What does the handbook still recommend doing in the camera?",
     "o": [
      "Record audio as a scratch track for reference",
      "Turn the microphone off",
      "Record only video",
      "Use the camera microphone at full gain"
     ],
     "a": 0,
     "w": "A scratch track in the camera helps with reference and syncing. {{fh-ch11}}"
    },
    {
     "t": "take",
     "i": [
      "The camera is a good picture recorder and a weak sound recorder.",
      "Support, focus and sound are the places most DSLR shoots fail.",
      "Run the same checklist every time."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Dynamic range, gamma and what ISO really does",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "The eye copes with about twenty-four stops of brightness if you count the pupil adjusting, which is far more than any camera records in one frame. {{fh-ch5}}"
    },
    {
     "t": "table",
     "title": "Brightness range, as the handbook gives it (2012 figures)",
     "head": [
      "System",
      "Stops",
      "Contrast ratio"
     ],
     "rows": [
      [
       "Human eye with pupil adjusting",
       "about 24",
       "-"
      ],
      [
       "Colour negative film",
       "about 10 (up to 12 with the curve's ends)",
       "about 1,000:1"
      ],
      [
       "Analog video camera",
       "about 5",
       "about 40:1"
      ],
      [
       "Good digital video camera",
       "about 10",
       "-"
      ],
      [
       "Digital cinema camera (Alexa, F65)",
       "14",
       "-"
      ],
      [
       "RED Epic with HDRx",
       "18",
       "-"
      ]
     ],
     "src": "Figures from {{fh-ch5}} and {{fh-ch7}}; the handbook gives colour negative as ten stops in one chapter and up to sixteen in another, so treat the figure as approximate. The contrast ratio of 1,000:1 is 2^10 = 1,024, which matches ten stops."
    },
    {
     "t": "p",
     "x": "A sensor responds in a straight line to light until it hits the white clip, and video signals stop at about 109 per cent. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Tone curves squeeze more stops into that fixed container. A knee point (kept above about 80 per cent) bends the top of the curve so highlights compress rather than clip. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Rec. 709 is the standard HD gamma: it looks bright and saturated but loses extreme highlights. Cine gammas darken the midtones and extend the highlights, and some are meant to be graded. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Log mapping gives more samples to the dark tones the eye separates best, because digital capture is linear and spends bits equally on highlights. The picture looks flat and needs a viewing LUT. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "RAW is not video: each frame is a digital negative that must be demosaicked, graded and given a gamma curve in post. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Highlights lost at capture cannot be invented later, but you can always crush shadows in post, so do not throw shadow detail away in camera. {{fh-ch5}}"
    },
    {
     "t": "h",
     "x": "What ISO and gain really change"
    },
    {
     "t": "p",
     "x": "ISO and gain amplify the signal after the sensor, so they add noise and cannot rescue clipped highlights. {{fh-ch3}} {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "They do move the balance of latitude. A higher ISO effectively underexposes the sensor, which leaves more room above middle grey for highlights. A lower ISO leaves more room below it for shadows. Film behaves the other way round. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Cameras are tuned to a native ISO, and the lowest setting may not be the cleanest, so test it. {{fh-ch3}}"
    },
    {
     "t": "example",
     "title": "Worked example: sensor ratio (our arithmetic)",
     "steps": [
      "A scene spans ten stops from deep shadow to a bright window.",
      "Ten stops is a factor of 2^10 = 1,024, so the brightest area is about a thousand times brighter than the darkest.",
      "A camera with ten usable stops can just hold it; a camera with six stops (64:1) must clip one end.",
      "Choose: add light to the shadows, shade the window, or let the window go."
     ]
    },
    {
     "t": "check",
     "q": "Why does a flat log picture need a viewing LUT on set?",
     "o": [
      "It stores colour in a separate file",
      "It looks milky and flat until a curve makes it look normal",
      "It removes noise",
      "It doubles the frame rate"
     ],
     "a": 1,
     "w": "The log curve remaps brightness, so the raw image looks flat; a LUT shows a normal-looking version without changing the file. {{fh-ch5}}"
    },
    {
     "t": "check",
     "q": "Which statement about ISO on a digital video camera is closest to the handbook?",
     "o": [
      "A higher ISO makes the sensor physically more sensitive",
      "ISO amplifies the signal after the sensor and shifts latitude between highlights and shadows",
      "Lowering ISO always increases dynamic range",
      "ISO has no effect on noise"
     ],
     "a": 1,
     "w": "Gain and ISO boost the signal after the sensor, so noise rises with it. {{fh-ch3}} {{fh-ch5}}"
    },
    {
     "t": "take",
     "i": [
      "Camera range runs from about five stops (old video) to fourteen or more (digital cinema). {{fh-ch5}}",
      "Log and RAW are digital negatives; they need grading. {{fh-ch5}}",
      "ISO amplifies; it does not add sensitivity at the sensor. {{fh-ch3}}"
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "Backups, data rates, power and monitors",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Copy every card to a drive, then copy the drive again before you wipe the card. A common production rule is three copies on at least two kinds of storage, held in two places. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "Use a checksum-verified copy, compare folder sizes, keep the card's folder structure unchanged and name each download uniquely. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "Do not erase a card until the day it is needed again, because full cards are extra backups. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "Hard drives fail, so spin archive drives up every year and migrate them after a few years. LTO tape is the archival choice, and flash cards are not trusted for the shelf. {{fh-ch2}}"
    },
    {
     "t": "h",
     "x": "Data rates"
    },
    {
     "t": "p",
     "x": "Camera rates are in megabits per second (Mb/s). Divide by eight for megabytes per second. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "Cards must sustain a write speed above the format's data rate, and video needs faster cards than stills. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "A minute of standard-definition DV takes about 217 MB, while a minute of uncompressed 2K takes more than 17 GB, which is about eighty times as much. {{fh-ch14}}"
    },
    {
     "t": "example",
     "title": "Worked example: card speed and battery (our arithmetic)",
     "steps": [
      "A camera records 24 Mb/s. 24 ÷ 8 = 3 MB/s, so a card rated 30 MB/s has ten times the speed needed.",
      "Battery life is watt-hours divided by watts: a 52 Wh battery on a 26 W camera runs about 2 hours.",
      "Digital recorders draw power while standing by, so rehearsal time counts."
     ]
    },
    {
     "t": "h",
     "x": "Monitors and sound"
    },
    {
     "t": "p",
     "x": "Set up the monitor from colour bars before you judge exposure. Warm it up for fifteen minutes, set the white point to 6500 K, set black from the PLUGE stripes, then white and chroma. {{fh-appa}}"
    },
    {
     "t": "p",
     "x": "A computer monitor is an RGB display, so it shows component video flat and dark unless it is remapped. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "Record sound with the microphone close, keep averages near -20 dBFS with peaks to about -10, and record twenty seconds of room tone at each place. {{fh-ch11}}"
    },
    {
     "t": "p",
     "x": "Sound is often more important to audiences than picture. A clear track with a poor picture is more watchable than the reverse. {{fh-ch2}}"
    },
    {
     "t": "check",
     "q": "A 52 Wh battery powers a 26 W camera. Roughly how long will it run?",
     "o": [
      "30 minutes",
      "1 hour",
      "2 hours",
      "4 hours"
     ],
     "a": 2,
     "w": "52 ÷ 26 = 2 hours, before standby and cold losses (our arithmetic). {{fh-ch3}}"
    },
    {
     "t": "check",
     "q": "Which is closest to a safe rule for card data?",
     "o": [
      "Format the card when it is full",
      "Copy to two or three places, verify, and wipe only when needed",
      "Keep one copy on the camera",
      "Trust the camera's playback"
     ],
     "a": 1,
     "w": "The handbook's backup rule is three copies, two technologies, two places. {{fh-ch2}}"
    },
    {
     "t": "take",
     "i": [
      "Verify, back up, then wipe. {{fh-ch2}}",
      "Mb/s ÷ 8 = MB/s. {{fh-ch3}}",
      "Set the monitor from bars before judging exposure. {{fh-appa}}"
     ]
    }
   ]
  },
  {
   "id": "l7",
   "title": "Video levels, timecode and HD habits",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Reading the waveform"
    },
    {
     "t": "p",
     "x": "Brown measures the video signal in IRE units, from the black reference up to peak white at 100 IRE. The waveform monitor is the reliable meter, because a picture monitor can mislead you. {{brown-video}}"
    },
    {
     "t": "p",
     "x": "In analog NTSC, black sits at 7.5 IRE, called setup or pedestal. Brown says digital video has no setup and starts at zero. {{brown-video}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Our caution: some digital systems use a limited-range encoding, so black may not sit at zero. Check the codec's data sheet instead of assuming either case."
    },
    {
     "t": "h",
     "x": "Why drop-frame exists"
    },
    {
     "t": "p",
     "x": "Brown explains that ten minutes of NTSC video holds exactly 17,982 frames, so every tenth minute ends on an exact frame boundary. Drop-frame timecode uses this to make an hour of video read as an hour. {{brown-video}}"
    },
    {
     "t": "example",
     "title": "Drop-frame count, our arithmetic",
     "steps": [
      "Counting 30 numbers a second for ten minutes gives 30 × 600 = 18,000 numbers.",
      "Drop-frame skips two numbers at the start of nine of those ten minutes, which is 18 numbers.",
      "18,000 − 18 = 17,982, which equals 29.97 × 600 = 17,982 frames."
     ]
    },
    {
     "t": "p",
     "x": "Drop-frame matters when exact running time is critical. It is not needed in every job. {{brown-video}}"
    },
    {
     "t": "h",
     "x": "Slates and pre-roll"
    },
    {
     "t": "p",
     "x": "Brown says to pre-roll audio for at least five seconds before syncing with the slate. A timecode slate must be re-jammed often, because it runs on its own clock; some slates display a prompt when they need it. {{brown-hd}}"
    },
    {
     "t": "h",
     "x": "High-definition habits"
    },
    {
     "t": "ul",
     "i": [
      "Shoot at 23.98 or 29.97 rather than 24 or 30, to reduce artefacts later. {{brown-hd}}",
      "HD sees into shadows and fine detail more than film, so makeup, wardrobe and set flaws show. {{brown-hd}}",
      "Brown calls the idea that HD needs less light a myth, and puts HD speed near ISO 320. {{brown-hd}}"
     ]
    },
    {
     "t": "p",
     "x": "Fabe describes Mike Figgis's Timecode, shot in real time with four cameras. Its 93-minute running time matches the shooting time, and a mistake could be fixed only by redoing a whole take. Digital capture made that possible. {{fabe-timecode}}"
    },
    {
     "t": "check",
     "q": "How many frames are in ten minutes of NTSC video, per Brown?",
     "o": [
      "17,982",
      "18,000",
      "17,000",
      "18,018"
     ],
     "a": 0,
     "w": "30 × 600 = 18,000 numbers, less 18 dropped. {{brown-video}}"
    },
    {
     "t": "check",
     "q": "What does Brown suggest for frame rates in HD?",
     "o": [
      "Shoot 23.98 or 29.97, not 24 or 30",
      "Always shoot 30",
      "Avoid 23.98",
      "Use 25 everywhere"
     ],
     "a": 0,
     "w": "It reduces artefacts later in the process. {{brown-hd}}"
    },
    {
     "t": "take",
     "i": [
      "Use the waveform, not the picture monitor. {{brown-video}}",
      "An hour of drop-frame video reads as an hour. {{brown-video}}",
      "HD needs as much light as film. {{brown-hd}}"
     ]
    }
   ]
  },
  {
   "id": "l8",
   "title": "Colour sampling, compression and DSLR files",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Colour sampling"
    },
    {
     "t": "p",
     "x": "The Handbook says 4:4:4 keeps full colour detail, as in uncompressed RGB. 4:2:2 halves the colour detail, and 4:2:0 and 4:1:1 keep a quarter. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Gamut is unchanged by subsampling, but fine colour detail suffers and green-screen keying gets harder. {{fh-ch1}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Our note: 4:2:0 halves the colour detail both across and down the picture, which is how it keeps a quarter."
    },
    {
     "t": "h",
     "x": "Compression"
    },
    {
     "t": "p",
     "x": "The Handbook compares DV at about 5:1 compression, 36 Mbps, with 172 Mbps for uncompressed standard definition. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Our check: 172 ÷ 36 = 4.8, which matches the book's roughly 5:1."
    },
    {
     "t": "p",
     "x": "HDV is about 40:1, and H.264 is used in most DSLRs. ProRes 422 HQ and DNxHD 220 are examples of visually lossless codecs. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Intraframe compression treats each frame on its own. Interframe compression, such as H.264 long-GOP, compresses across frames. DV shows mosquito noise at its compression level. {{fh-ch5}}"
    },
    {
     "t": "p",
     "x": "The Handbook says JPEG 2000 wavelet compression was adopted for cinema because its failures go soft instead of blocky. {{fh-ch5}}"
    },
    {
     "t": "h",
     "x": "Raw, log and what you can edit"
    },
    {
     "t": "p",
     "x": "RAW and log from digital cinema cameras are flat digital negatives, not for direct viewing. Some cameras handle fourteen stops. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Common DSLR modes were 1080 at 30, 25 and 24p, and 720 at 60 and 50p. Many editors transcode DSLR files to a less compressed codec before cutting. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Film Art notes that each step in resolution multiplies the information, so 4K carries four times as much as 2K. {{fa-ch1}}"
    },
    {
     "t": "p",
     "x": "Our arithmetic: 4,096 × 2,160 ÷ (2,048 × 1,080) = 4.0. And 1080p, at 1,920 × 1,080, has 1 − 1,920 ÷ 2,048 = 6.25 per cent fewer pixels than 2K, which is the Handbook's about 6 per cent."
    },
    {
     "t": "check",
     "q": "What does 4:2:0 do?",
     "o": [
      "Keeps a quarter of the colour detail",
      "Keeps all colour detail",
      "Removes brightness",
      "Doubles the frame rate"
     ],
     "a": 0,
     "w": "4:2:0 and 4:1:1 keep a quarter of the colour detail. {{fh-ch1}}"
    },
    {
     "t": "check",
     "q": "How many times more information does 4K carry than 2K?",
     "o": [
      "Four",
      "Two",
      "Eight",
      "Sixteen"
     ],
     "a": 0,
     "w": "Each step multiplies the information. {{fa-ch1}}"
    },
    {
     "t": "take",
     "i": [
      "4:2:0 keeps a quarter of the colour detail. {{fh-ch1}}",
      "H.264 long-GOP is interframe; many editors transcode first. {{fh-ch1}}",
      "RAW and log are flat negatives for grading. {{fh-ch1}}"
     ]
    }
   ]
  },
  {
   "id": "l9",
   "title": "Viewfinder, white balance and camera choice",
   "min": 16,
   "blocks": [
    {
     "t": "h",
     "x": "Trust the viewfinder carefully"
    },
    {
     "t": "p",
     "x": "The Handbook warns that the viewfinder shows the camera output, not the recording. LCDs can plug up shadows, so set brightness, contrast and colour first. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "Set peaking at a medium level. Diopter focus is for your eye only. Turn off data overlays. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "Autoexposure fluctuates, reads the centre and silhouettes backlit subjects. Use it to set the exposure, then lock the iris. {{fh-ch3}}"
    },
    {
     "t": "h",
     "x": "White balance"
    },
    {
     "t": "p",
     "x": "Auto white balance lags after changes, is confused by fluorescent or mercury-vapour light, and can shift skin tone between angles. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "A preset can be a creative choice: candlelight stays warm. Skin looks better slightly warm. Keep focus manual, because passive autofocus fails in low contrast. {{fh-ch3}}"
    },
    {
     "t": "h",
     "x": "The sensor"
    },
    {
     "t": "p",
     "x": "A Bayer sensor is 50 per cent green and 25 per cent each red and blue. Detail circuits do not add resolution, and on large-sensor cameras they should be turned off. {{fh-ch3}}"
    },
    {
     "t": "h",
     "x": "Choosing a camera"
    },
    {
     "t": "p",
     "x": "The Handbook treats a format as a recipe of codec, data rate, frame size, rate and scan. It advises spending on glass rather than the body. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "It says to talk to the lab and the post house before you choose, and not to trust flash cards for long-term storage. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "External recorders such as the Atomos Ninja bypass the camera codec for 10-bit ProRes. {{fh-ch2}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The Handbook dates from 2012. Check current camera models and codecs before you rely on its examples."
    },
    {
     "t": "check",
     "q": "What fraction of a Bayer sensor is green?",
     "o": [
      "50 per cent",
      "25 per cent",
      "33 per cent",
      "100 per cent"
     ],
     "a": 0,
     "w": "Green is 50 per cent, red and blue 25 per cent each. {{fh-ch3}}"
    },
    {
     "t": "check",
     "q": "What should you do with autoexposure on a backlit subject?",
     "o": [
      "Set the exposure, then lock the iris",
      "Leave it on",
      "Open to the widest stop",
      "Turn the camera off"
     ],
     "a": 0,
     "w": "Autoexposure silhouettes backlit subjects and fluctuates. {{fh-ch3}}"
    },
    {
     "t": "take",
     "i": [
      "The viewfinder shows camera output, not the recording. {{fh-ch3}}",
      "Lock the iris after you set it. {{fh-ch3}}",
      "Spend on glass, and ask the lab first. {{fh-ch2}}"
     ]
    }
   ]
  },
  {
   "id": "l10",
   "title": "Sound for a one-person shoot",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Why sound comes first"
    },
    {
     "t": "p",
     "x": "The Handbook says sound often matters more than picture. A poorly lit scene with clean dialogue is watchable, while a pretty scene with unintelligible sound is not. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "DSLR preamps are cheap, so record double system and keep the camera audio as a sync guide. {{fh-ch2}}"
    },
    {
     "t": "h",
     "x": "Digital audio"
    },
    {
     "t": "p",
     "x": "Sample at least twice the highest frequency you want, which is the Nyquist rule. That gives 44.1 kHz for CD and 48 kHz for video. {{fh-ch10}}"
    },
    {
     "t": "p",
     "x": "16-bit audio has 65,536 levels. 24-bit helps in post. Record uncompressed linear PCM, for example in Broadcast Wave with timecode metadata. {{fh-ch10}}"
    },
    {
     "t": "example",
     "title": "Data rate, our arithmetic",
     "steps": [
      "Data rate = bit depth × sample rate × channels.",
      "24 bits × 48,000 samples a second = 1,152,000 bits a second for one channel.",
      "1,152,000 ÷ 8 × 60 = 8,640,000 bytes, about 8.6 MB a minute per channel."
     ]
    },
    {
     "t": "h",
     "x": "Levels and distance"
    },
    {
     "t": "p",
     "x": "Digital meters read dBFS, where 0 is clipping. Professional practice averages dialogue at about −20 dBFS with peaks to about −10, which leaves 10 dB of headroom. {{fh-ch11}}"
    },
    {
     "t": "p",
     "x": "Do not fix a low level by boosting a noisy recorder. Get the microphone closer, because the sound pressure halves when the distance doubles. {{fh-ch11}}"
    },
    {
     "t": "p",
     "x": "Record 20 seconds of room tone at every location. Keep the background consistent. {{fh-ch11}}"
    },
    {
     "t": "h",
     "x": "Kit and sync"
    },
    {
     "t": "ul",
     "i": [
      "Use an external preamp with XLR and +48 V phantom power, which is not for dynamic microphones. {{fh-ch10}}",
      "Turn off automatic gain control. Prefer line level. {{fh-ch10}}",
      "Put lavalier microphones at the sternum, and keep the boom close to the source. {{fh-ch10}}"
     ]
    },
    {
     "t": "p",
     "x": "Record scratch audio in the camera too. Sync with a clapper, a timecode slate or jam-synced timecode. Waveform-matching software can also sync camera audio to the recorder. {{fh-ch11}}"
    },
    {
     "t": "check",
     "q": "Why must you record at least 48 kHz for video, per the Nyquist rule?",
     "o": [
      "Sample at least twice the highest frequency",
      "It is cheaper",
      "It removes hum",
      "It sets the f-stop"
     ],
     "a": 0,
     "w": "Sampling must be at least twice the highest frequency. {{fh-ch10}}"
    },
    {
     "t": "check",
     "q": "The distance from the microphone doubles. What happens to sound pressure?",
     "o": [
      "It halves",
      "It doubles",
      "It stays the same",
      "It quadruples"
     ],
     "a": 0,
     "w": "Sound pressure halves when the distance doubles. {{fh-ch11}}"
    },
    {
     "t": "take",
     "i": [
      "Record double system, and keep camera audio as a guide. {{fh-ch2}}",
      "Average dialogue near −20 dBFS. {{fh-ch11}}",
      "Record 20 seconds of room tone. {{fh-ch11}}"
     ]
    }
   ]
  },
  {
   "id": "l11",
   "title": "The lecturer's method: Gregg Toland",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "Gregg Toland (1904 to 1948) was an American cinematographer known for innovative use of lighting and techniques such as deep focus. {{wiki-toland}}"
    },
    {
     "t": "p",
     "x": "We read his own 1941 essay Realism for Citizen Kane in full, and a Wikipedia page as excerpts. The essay is a primary source, so this record is rich. {{toland-ac1941}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Start from what the picture must do. He and Welles felt the audience should feel it was looking at reality rather than at a movie. {{toland-ac1941}}",
      "Say what conventional practice cannot do. The unconventional set-ups, he writes, cannot be done by conventional means, but they had to be done. {{toland-ac1941}}",
      "Change the sets to serve the shot. Most sets had real ceilings, low and sometimes lower than a real room, and many angles were low, so some sets were built on parallels to put the lens at floor level. {{toland-ac1941}}",
      "Change the light. With no overhead lighting possible, everything was lit from the floor, so they used the twin-arc broadsides developed for Technicolor, with smaller lamps added. {{toland-ac1941}}",
      "Choose film and glass together. He reasoned that if a fast film like Plus-X at about f/3.5 improved definition, a super-speed film like Super XX at still smaller stops might do better, and he says preliminary experiments proved it. {{toland-ac1941}}",
      "Meet the new problems as they appear: lighting balance, focus setting and lens behaviour, each of which he describes. Solving them, he says, taught the crew a lot. {{toland-ac1941}}"
     ]
    },
    {
     "t": "p",
     "x": "Wikipedia adds that he modified the Mitchell camera to allow a wider range of movement, especially from low angles, and devised a remote-control system for focusing. {{wiki-toland}}"
    },
    {
     "t": "p",
     "x": "He says the Vard Opticote non-glare coating gave an increase in speed of half a stop to a stop, with a marked increase in definition from eliminating flare and internal reflections. {{toland-ac1941}}"
    },
    {
     "t": "p",
     "x": "He says the ceilings were muslin, so microphones could sit just above them, out of the picture and with no overhead lights to cast shadows. {{toland-ac1941}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The sources differ on the speed of Super XX. Wikipedia gives ASA 100. An editorial note on Toland's essay gives the 1940 film a Weston rating of 64, approximating ASA. The lesson does not depend on the number. {{wiki-toland}} {{toland-ac1941}}"
    },
    {
     "t": "table",
     "title": "Toland's limits and answers, with a DSLR parallel (the third column is our adaptation)",
     "head": [
      "Limit",
      "Toland's answer",
      "Your DSLR parallel"
     ],
     "rows": [
      [
       "Little depth at wide stops",
       "Smaller aperture, more light, faster film",
       "Smaller aperture, more lamps or ISO, and ND to control the rest"
      ],
      [
       "Flare and low contrast in the glass",
       "Coated lenses",
       "Lens hood, clean glass, test for flare"
      ],
      [
       "Microphone shadows",
       "Muslin ceilings, mics above",
       "A separate recorder close to the speaker"
      ],
      [
       "Lenses vary by stop",
       "Know each lens",
       "Test every lens at every stop you plan to use"
      ],
      [
       "Camera could not reach low angles",
       "Modified camera, floors on parallels",
       "Low tripod, ground spreader or a rig that lets you shoot low"
      ]
     ],
     "src": "Toland's column is from his essay and Wikipedia. The third column is our adaptation. {{toland-ac1941}} {{wiki-toland}}"
    },
    {
     "t": "h",
     "x": "Worked example: how many stops did his changes have to cover?"
    },
    {
     "t": "example",
     "title": "From the usual stop to his stop (arithmetic on his numbers)",
     "steps": [
      "He says conventional interiors ran between f/2.3 and f/2.8, with an occasional f/3.5, while his crew shot at f/8 or smaller, often f/11. {{toland-ac1941}}",
      "From f/3.5 to f/11 is 2 × log base 2 of (11 ÷ 3.5), about 3.3 stops. That is about 10 times less light reaching the film.",
      "The coating gave half a stop to one stop, so it covers up to 1 stop of that. {{toland-ac1941}}",
      "That leaves at least 2.3 stops for the film and the lamps. A faster film and brighter arc lamps supplied it. {{toland-ac1941}}",
      "The same bookkeeping works for you: list the stops you need, then list what each change contributes."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a limit audit"
    },
    {
     "t": "ol",
     "i": [
      "Write what your next project needs in one sentence, such as: two people sharp in a small room, handheld, with clear sound.",
      "List every limit that stands in the way: clip length, noise at the ISO you need, depth of field at the aperture you can light, rolling shutter, sound, focus.",
      "For each, mark Change, Plan around, or Accept. Change what lights, lenses or settings can solve, and plan around what they cannot.",
      "Test each change before the day, with a before and after frame.",
      "Write down any new problem the change created, as Toland did, and solve that too."
     ]
    },
    {
     "t": "activity",
     "x": "Do the limit audit for your next project with at least five limits. Test one change and show the before and after."
    },
    {
     "t": "check",
     "q": "Where did Toland start?",
     "o": [
      "With the newest film",
      "With what the picture needed to do",
      "With the cheapest lamps",
      "With a new camera body"
     ],
     "a": 1,
     "w": "He and Welles started from the feeling of reality they wanted. {{toland-ac1941}}"
    },
    {
     "t": "check",
     "q": "About how many stops separate f/3.5 from f/11?",
     "o": [
      "1.3",
      "2.3",
      "3.3",
      "5.3"
     ],
     "a": 2,
     "w": "2 × log base 2 of (11 ÷ 3.5) is about 3.3."
    },
    {
     "t": "check",
     "q": "Why test each lens at each stop?",
     "o": [
      "Lenses are identical",
      "Some lenses lose quality at certain stops and recover at others",
      "It saves film",
      "It changes colour"
     ],
     "a": 1,
     "w": "He notes lenses that were excellent until f/6.3, worse below, then better again at f/11 or f/16. {{toland-ac1941}}"
    },
    {
     "t": "take",
     "i": [
      "Start from the need, then audit the limits. {{toland-ac1941}}",
      "Change what you can, test it, and plan around the rest.",
      "Every change can create a new problem. Look for it."
     ]
    }
   ]
  }
 ]
};
