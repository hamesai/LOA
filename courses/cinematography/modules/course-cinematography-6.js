/* Cinematography: DSLR and analog film (module 6). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["cinematography-6"] = {
 "intro": "Film records light chemically on a strip that must be developed before anyone sees it. That changes how you meter, how many takes you can afford and what you learn on the day. This module covers the gauges, the stocks, the exposure maths and an honest comparison with digital. Lecturer lens: George Eastman separated taking the picture from developing it, sold the system as a whole, and saw that most of the money would be in the film. His method is a way to cost and divide a film shoot.",
 "outcomes": [
  "Compare Super 8, 16 mm and 35 mm by frame size, run time and typical use.",
  "Choose a film stock and filter for a light source, and work out the exposure change.",
  "Plan a film shoot with a test, a shot budget and a processing route, and state what film adds and costs against digital.",
  "Run a camera-side routine: convert shutter angle to exposure time, check the gate, and load and label film.",
  "Lecturer's method: Cost the whole path from exposure to finished file, decide which steps to hand to a lab, and handle film so the handed-off steps start well."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "The gauges: Super 8, 16 mm and 35 mm",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "A film gauge is the width of the film strip. 35 mm is the most commonly used standard for motion pictures photographed on film. {{wiki-35mm}}"
    },
    {
     "t": "p",
     "x": "The 35 mm width was introduced around 1890 by William Kennedy Dickson and Thomas Edison. {{wiki-35mm}}"
    },
    {
     "t": "p",
     "x": "Eastman Kodak introduced 16 mm in 1923 as a less expensive alternative for amateurs. {{wiki-16mm}}"
    },
    {
     "t": "p",
     "x": "Kodak launched Super 8 in 1965 as an improvement on the older Double 8 home-movie format. {{wiki-super8}}"
    },
    {
     "t": "fig",
     "id": "cinematography-gauges",
     "title": "Gauge widths drawn to scale",
     "cap": "Super 8 (8 mm), 16 mm and 35 mm film strips. A wider strip gives a bigger frame."
    },
    {
     "t": "table",
     "title": "Three gauges compared",
     "head": [
      "",
      "Super 8",
      "16 mm",
      "35 mm"
     ],
     "rows": [
      [
       "Introduced",
       "1965 (Kodak)",
       "1923 (Kodak)",
       "about 1890"
      ],
      [
       "Frame / aperture",
       "Not quoted (not captured when we read the page)",
       "10.26 × 7.49 mm; Super 16 is 12.52 × 7.41 mm",
       "22 × 16 mm for the Academy 4-perf frame"
      ],
      [
       "Aspect ratio",
       "Not quoted",
       "1.37; Super 16 is 1.69",
       "1.375 Academy; about 2.39 anamorphic"
      ],
      [
       "Film carried",
       "50 ft in a cartridge, 3600 frames",
       "Spools and magazines",
       "1,000 ft is about 11 minutes at 24 fps"
      ],
      [
       "Typical use today",
       "Artists, students, textures",
       "Low-budget features, student films, TV",
       "Features and high-end work"
      ]
     ],
     "src": "From {{wiki-super8}}, {{wiki-16mm}} and {{wiki-35mm}}. Super 8's exact frame size was not captured when we read the page, so we do not quote it."
    },
    {
     "t": "h",
     "x": "Three kinds of 8 mm"
    },
    {
     "t": "p",
     "x": "Super 8 was not the only 8 mm system. A 1976 UNESCO report describes three that could be edited together and shown on almost any 8 mm projector. {{unesco-super8}} Treat its details as dated, and note that the scanned text is poor, so we use only features it states clearly."
    },
    {
     "t": "table",
     "title": "The 8 mm families in 1976 (UNESCO report)",
     "head": [
      "System",
      "What it was",
      "Trade-offs the report mentions"
     ],
     "rows": [
      [
       "Super 8",
       "Cartridge loading, single pass, built-in light meter and automatic exposure. The picture area was enlarged by about 50 per cent over Double 8 on the same 8 mm width",
       "The cartridge's plastic pressure plate is said by critics to hold the film less steady than a metal in-camera plate"
      ],
      [
       "Single 8 (Fuji)",
       "The same film size as Super 8 on a thinner, stronger polyester base, in a two-reel cartridge",
       "Polyester is harder to splice. The cartridge is simpler, allows manual backwinding for double exposures and dissolves, and has a metal pressure plate said to be slightly steadier. Only Fuji made the cameras"
      ],
      [
       "Double Super 8",
       "16 mm-wide film on reels, run through the camera twice and slit after processing",
       "Metal in-camera pressure plate and a wider choice of stocks, in sturdier but dearer cameras"
      ]
     ],
     "src": "{{unesco-super8}}"
    },
    {
     "t": "p",
     "x": "Sound on 8 mm was almost always magnetic, recorded about eighteen frames ahead of the picture frame it belongs to. Optical sound on Super 8 was very rare. {{unesco-super8}}"
    },
    {
     "t": "p",
     "x": "The eighteen-frame advance has a practical cost in editing. When two pieces of striped film are spliced, the sound that belongs to the new shot does not start until eighteen frames after the splice, so the first eighteen frames carry sound from the previous scene. {{unesco-super8}} Our arithmetic: 18 ÷ 18 fps is 1 second at the usual Super 8 speed, and 18 ÷ 24 is 0.75 seconds at 24 fps. The report's answers are to plan the first second of each shot as silent, or to transfer the sound to a full-coat tape that can be cut frame for frame. {{unesco-super8}}"
    },
    {
     "t": "p",
     "x": "Most 8 mm stock was positive reversal, which gives a projection-contrast image straight from the camera. Copies add contrast and exaggerate colour, and the report ranks the print routes by quality: reversal to positive print, then reversal via an internegative, then negative to positive print. {{unesco-super8}} Because workprints cost about as much as the original processing and edge numbers were rarely available, many 8 mm film-makers edited the camera original, which means giving up laboratory fades and dissolves and doing them in camera. {{unesco-super8}}"
    },
    {
     "t": "p",
     "x": "The report puts the 16 mm image area at about three times that of Super 8. {{unesco-super8}} It also notes that Super 8 cameras of the time offered single-frame exposure and built-in intervalometers for time-lapse, and existing-light cameras with fast lenses. {{unesco-super8}}"
    },
    {
     "t": "check",
     "q": "In single-system Super 8 sound with an 18-frame advance, about how long is the wrong-sound gap after a splice at 18 fps?",
     "o": [
      "About 1 second",
      "About a tenth of a second",
      "About 10 seconds",
      "None"
     ],
     "a": 0,
     "w": "18 frames at 18 fps is one second. {{unesco-super8}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Sources disagree on the date. The UNESCO report says Super 8 appeared in 1964, while the table above gives 1965. A likely reason is the difference between announcement and sale, but that is our guess and we have not checked it."
    },
    {
     "t": "h",
     "x": "Run time from the film itself"
    },
    {
     "t": "p",
     "x": "A Super 8 cartridge holds 50 feet of film at 72 frames per foot, a nominal 3600 frames. {{wiki-super8}}"
    },
    {
     "t": "p",
     "x": "35 mm film runs at 16 frames per foot, so at 24 frames per second that is 90 feet per minute, and 1,000 feet is about 11 minutes. {{wiki-35mm}}"
    },
    {
     "t": "p",
     "x": "The usual silent speed for Super 8 is 18 frames per second. {{wiki-telecine}}"
    },
    {
     "t": "example",
     "title": "Worked example: how long is a roll?",
     "steps": [
      "Super 8 at 18 fps: 3600 ÷ 18 = 200 seconds, or 3 minutes 20 seconds.",
      "Super 8 at 24 fps: 3600 ÷ 24 = 150 seconds, or 2 minutes 30 seconds.",
      "35 mm: 1,000 ft × 16 frames per foot = 16,000 frames. At 24 fps that is 16,000 ÷ 24 ≈ 667 seconds, or 11.1 minutes. {{wiki-35mm}}",
      "So a full Super 8 cartridge is only about 3 minutes of picture. That is the time budget for everything you shoot on it."
     ]
    },
    {
     "t": "example",
     "title": "Worked example: a 16 mm magazine, with a disagreement on 35 mm",
     "steps": [
      "The handbook says a standard 400 ft 16 mm magazine runs 11 minutes at 24 fps, which is 36 ft a minute. {{fh-ch6}}",
      "Check: 16 mm has 40 frames to the foot, and 24 fps × 60 = 1,440 frames a minute, so 1,440 ÷ 40 = 36 ft a minute and 400 ÷ 36 = 11.1 minutes. The figures agree.",
      "For 35 mm the handbook says 96 ft a minute and about 10 minutes for a 1,000 ft magazine. {{fh-ch6}}",
      "Our arithmetic from 16 frames to the foot gives 24 × 60 ÷ 16 = 90 ft a minute and 1,000 ÷ 90 = 11.1 minutes. We have kept 90 ft and 11 minutes, and treat the handbook's 96 as a rounding or typing difference. Confirm the running length with your supplier before you order film."
     ]
    },
    {
     "t": "h",
     "x": "What the cartridge does"
    },
    {
     "t": "p",
     "x": "The Super 8 cartridge loads into the camera in under two seconds without threading, and coded notches on it let the camera recognise the film speed. {{wiki-super8}}"
    },
    {
     "t": "ul",
     "i": [
      "A notch in the cartridge sets the film speed on many Super 8 cameras with automatic exposure. With some Pro8 negative stocks you may have to cut the notch yourself to get the right speed and filter setting. {{fh-ch6}}",
      "On many cameras the footage counter resets to zero when you open the film door, so write the footage down if you open it mid-cartridge. {{fh-ch6}}",
      "Keep the cartridge out of direct sunlight, and do not break the foil until you load. {{fh-ch6}}"
     ]
    },
    {
     "t": "p",
     "x": "Kodak's system won out over Fujifilm's rival Single-8, which used the same film dimensions but a different cartridge. {{wiki-super8}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Many 16 mm cameras, such as the Bolex, are spring-wound or battery-driven mechanical cameras. They work without a battery drain like a DSLR but can have faults after decades. Test before you rely on one. This is our advice. The handbook describes the Bolex H16 Reflex as a spring-wound camera with a 135° variable shutter that takes 100 ft internal loads. {{fh-ch6}}"
    },
    {
     "t": "activity",
     "x": "Pick the gauge you would shoot your next film test on. Write its run time per roll at the frame rate you will use and how many shots of 10 seconds that gives you."
    },
    {
     "t": "check",
     "q": "How long does a 50 ft Super 8 cartridge run at 18 fps?",
     "o": [
      "1 min 40 s",
      "2 min 30 s",
      "3 min 20 s",
      "11 min"
     ],
     "a": 2,
     "w": "3600 frames ÷ 18 fps = 200 seconds. {{wiki-super8}}"
    },
    {
     "t": "check",
     "q": "Which gauge was introduced in 1923 as a cheaper alternative to 35 mm for amateurs?",
     "o": [
      "Super 8",
      "16 mm",
      "Single-8",
      "70 mm"
     ],
     "a": 1,
     "w": "Kodak introduced 16 mm in 1923. {{wiki-16mm}}"
    },
    {
     "t": "take",
     "i": [
      "Know your roll length: Super 8 is about 3 minutes, 35 mm 1,000 ft is about 11. {{wiki-super8}} {{wiki-35mm}}",
      "Wider gauges mean a larger frame and a lower grain at the same size on screen.",
      "Cartridges set film speed with notches. {{wiki-super8}}"
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Film stocks, speed and colour balance",
   "min": 17,
   "blocks": [
    {
     "t": "p",
     "x": "The cinematographer chooses a gauge, then a stock: reversal film, which produces a positive image when developed, or negative film. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Kodak currently sells one colour reversal film in Super 8, Ektachrome 100D, and three colour negative stocks, VISION3 50D, 200T and 500T, according to the page we read. {{wiki-super8}}"
    },
    {
     "t": "p",
     "x": "The letter after the number gives the light the stock is balanced for: D is daylight at 5500 K and T is tungsten at 3200 K. {{kodak-500t}} {{kodak-250d}}"
    },
    {
     "t": "p",
     "x": "The number is the exposure index, a speed rating. 250D is rated 250 in daylight, 500T is rated 500 in tungsten light. {{kodak-250d}} {{kodak-500t}}"
    },
    {
     "t": "table",
     "title": "Exposure indexes and filters for two Kodak stocks",
     "head": [
      "Stock",
      "Light",
      "Filter",
      "Exposure index"
     ],
     "rows": [
      [
       "VISION3 500T (tungsten-balanced)",
       "Tungsten 3200 K",
       "None",
       "500"
      ],
      [
       "VISION3 500T",
       "Daylight 5500 K",
       "Wratten 2 optical filter No. 85",
       "320"
      ],
      [
       "VISION3 250D (daylight-balanced)",
       "Daylight 5500 K",
       "None",
       "250"
      ],
      [
       "VISION3 250D",
       "Tungsten 3200 K",
       "Wratten 2 gelatin filter No. 80A",
       "64"
      ]
     ],
     "src": "From the Kodak technical data for 5219 and 5207."
    },
    {
     "t": "callout",
     "k": "key",
     "x": "Matching stock to light is the film version of white balance. The filter fixes the colour and costs exposure, so the speed drops."
    },
    {
     "t": "h",
     "x": "What the filter costs in stops"
    },
    {
     "t": "example",
     "title": "Worked example: the cost of balancing (our arithmetic)",
     "steps": [
      "500T in daylight uses the 85 filter, and the rating falls from 500 to 320. The ratio is 500 ÷ 320 = 1.56. In stops that is log base 2 of 1.56, about 0.64, roughly two-thirds of a stop. {{kodak-500t}}",
      "250D in tungsten uses the 80A filter and the rating falls from 250 to 64. The ratio is 250 ÷ 64 = 3.9, about 1.97 stops, so nearly two stops. {{kodak-250d}}",
      "Therefore using the daylight stock under lamps loses almost two stops of speed, but using the tungsten stock in daylight loses only two-thirds of a stop. That is one reason the T stock is popular on mixed-light jobs."
     ]
    },
    {
     "t": "p",
     "x": "The handbook gives a shortcut: divide the stock's speed by the filter factor. A filter with factor 4 on ISO 100 film gives a meter setting of ISO 25. {{fh-ch8}} It uses the same method for a tungsten stock with an 85: 100 ÷ 1.6 is about 64. {{fh-ch8}} Our check on the Kodak figures: 500 ÷ 1.6 = 312, which Kodak rounds to 320, and 250 ÷ 4 = 62.5, which Kodak rounds to 64."
    },
    {
     "t": "p",
     "x": "Faster stocks have larger silver halide crystals, so they look grainier, and slower stocks generally have finer grain and more exposure latitude, though not always. Negative stocks have more latitude than reversal. {{fh-ch7}} A slight overexposure of colour negative, by about half a stop, tends to give less visible grain, richer blacks and more saturated colour, while underexposure brings more grain, smoky blacks and less perceived sharpness. {{fh-ch7}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The handbook is a 2012 text, so check the current Kodak sheet for any stock you buy. The principles about grain and exposure do not date, but stock names and ratings do."
    },
    {
     "t": "h",
     "x": "More of what Kodak says about 500T"
    },
    {
     "t": "p",
     "x": "Kodak says the stock can be exposed with tungsten lamps about 200 K above or below 3200 K without correction filters, since final colour balance can be done in post-production. {{kodak-500t}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Colour has been added to black and white in several ways. Tinting dyes the developed film so light areas pick up colour; toning colours the dark areas while light areas stay white or faint; hand colouring paints frames. Night scenes were often tinted blue and firelight red. Kodak's 1918 guide names the toning colours copper red (tone A), sepia (E), sulphide (F), olive green (G) and blue iron (H). Its bath times are for 1918 stock only: they are historical and must not be used as current instructions. {{eastman-tinting-toning}} Kodak's 1918 guide names the toning colours copper red (tone A), sepia (E), sulphide (F), olive green (G) and blue iron (H). Its bath times are for 1918 stock only: they are historical and must not be used as current instructions. {{eastman-tinting-toning}} Day for night shot in sunlight through a blue filter before night shooting was practical, and a colour timer picks a key tone during printing. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "Kodak says no filter or exposure correction is needed for exposure times from 1/1000 s to 1 s. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "Kodak describes technology that gives two stops of extended highlight latitude. This is a manufacturer's claim, which we have not tested. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "Colour negative motion-picture films are processed in the ECN-2 process, which most commercial motion-picture laboratories offer. {{kodak-500t}}"
    },
    {
     "t": "h",
     "x": "Choosing between the stocks"
    },
    {
     "t": "table",
     "title": "Which stock for which job (our guidance based on the Kodak data)",
     "head": [
      "Situation",
      "Stock",
      "Why"
     ],
     "rows": [
      [
       "Bright exterior day",
       "250D or 50D",
       "Balanced for daylight; lower grain"
      ],
      [
       "Interior lit by lamps",
       "500T",
       "Balanced for tungsten; fast"
      ],
      [
       "Mixed daylight and lamps",
       "500T with 85 for exterior shots",
       "One stock for both, with a filter outdoors"
      ],
      [
       "Dim interior, no lights",
       "500T at wide aperture",
       "The fastest stock available"
      ],
      [
       "High-contrast vivid look",
       "Ektachrome 100D (reversal)",
       "Reversal gives a direct positive and a distinct look"
      ]
     ],
     "src": "Stocks and balance from Kodak data; the choices are our advice."
    },
    {
     "t": "activity",
     "x": "List the three light conditions you expect on your first film shoot. For each, choose a stock, a filter and the exposure index, and write the exposure change in stops."
    },
    {
     "t": "check",
     "q": "You shoot 500T in daylight with the 85 filter. What exposure index do you set?",
     "o": [
      "500",
      "320",
      "250",
      "64"
     ],
     "a": 1,
     "w": "Kodak gives 320 for daylight with an 85 filter. {{kodak-500t}}"
    },
    {
     "t": "check",
     "q": "Roughly how many stops do you lose using 250D under 3200 K lamps with an 80A?",
     "o": [
      "None",
      "About one",
      "About two",
      "About four"
     ],
     "a": 2,
     "w": "250 down to 64 is a factor of 3.9, about two stops. {{kodak-250d}}"
    },
    {
     "t": "take",
     "i": [
      "D stocks are balanced for daylight and T stocks for tungsten. {{kodak-250d}} {{kodak-500t}}",
      "A balancing filter costs speed; work out the exposure change in stops.",
      "Check the current technical sheet for the stock you buy."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Shooting film: test, meter, protect and process",
   "min": 17,
   "blocks": [
    {
     "t": "p",
     "x": "Film is exposed in the camera and developed later, so you cannot see the result on set. Our reading: that makes the pre-shoot test the key habit of film work."
    },
    {
     "t": "h",
     "x": "The test"
    },
    {
     "t": "example",
     "title": "Worked example: a grey-card bracket (our method, illustrative)",
     "steps": [
      "Load a short length of film or a test roll. Place a grey card in even light.",
      "Meter the card with an incident reading and expose it at the metered setting, then at one stop over and one stop under, and at two over and two under.",
      "Slate each length with the stop offset, such as +1 or -2.",
      "When the film comes back, see which frames look right and how far each way still holds detail. That tells you your meter, your camera's shutter and your lab's process in one test.",
      "Log the result. If the metered frame is a little thin, expose the stock one-third of a stop more in future."
     ]
    },
    {
     "t": "h",
     "x": "Metering and the camera"
    },
    {
     "t": "p",
     "x": "Kodak's exposure indexes apply to readings of average subjects from the camera position, or from an 18 percent grey card held close to the subject. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "The standard exposure table is given for 24 frames per second and a 180° shutter, as in the digital case. {{kodak-500t}} Many mechanical film cameras have a fixed shutter angle, and the shutter angle on a motion-picture camera is usually changed by a special tool, not mid-shot. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "A film camera with a mirror shutter lets you see through the lens, but the viewfinder image goes dark at the moment each frame is exposed, so a gunshot flash seen in the finder may not be on the film. Beam-splitter reflexes, used in most Super 8 cameras, send a third of a stop to a full stop of light to the finder. {{fh-ch6}} {{wiki-shutter}}"
    },
    {
     "t": "h",
     "x": "Handling"
    },
    {
     "t": "p",
     "x": "Do not use a safelight. Handle unprocessed film in total darkness. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "Kodak says to store unexposed film at 13 °C (55 °F) or lower, and at -18 °C (0 °F) or lower for extended storage, and to process exposed film promptly. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "To prevent telescoping, condensation and spotting, let film warm to room temperature before use. Kodak lists 1 hour for 8 mm and 16 mm film after an 8 °C rise and 1.5 hours after a 39 °C rise, and 3 and 5 hours for 35 mm. {{kodak-500t}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Keep film away from heat, and be wary of repeated X-ray inspections in airports and on mail. We have not researched current airport or postal rules, so ask your airline and your lab before you travel with film."
    },
    {
     "t": "p",
     "x": "The handbook adds that X-ray exposure is cumulative, so repeated inspections are the main worry, especially for fast films. Carry-on scanners should not noticeably harm most films, and it suggests hand-carrying the film and asking for a hand inspection. Kodak recommends never shipping unprocessed film as checked baggage, because baggage scanners are far more powerful. {{fh-ch7}} Also check the policy of any courier. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "For storage, it gives under 55 °F (13 °C) at 60 per cent humidity or less for up to three months, and a freezer at about 0 °F to −10 °F (−18 °C to −23 °C) for longer, in plastic freezer bags. Let the film reach room temperature before you break the moisture-proof seal. {{fh-ch7}} It says Kodak recommends using raw stock within six months, and suggests ordering it to arrive about a week before it is needed. {{fh-ch7}} If you buy stock of unknown age, test a roll first. {{fh-ch7}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Airport scanners have changed since 2012. Treat the handbook's X-ray advice as a starting point and ask your airline and your lab what applies now."
    },
    {
     "t": "h",
     "x": "Processing and scanning"
    },
    {
     "t": "p",
     "x": "Colour negative motion-picture film is processed in the ECN-2 process by commercial laboratories. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "Vera Drake was shot on Super 16, scanned at high resolution, edited and graded digitally, and printed out to 35 mm film. {{wiki-16mm}}"
    },
    {
     "t": "p",
     "x": "We have not checked which laboratories in the UK or Ireland offer Super 8 and 16 mm processing and scanning today, so find one and ask for a price list before you buy film."
    },
    {
     "t": "example",
     "title": "Worked example: planning the roll (illustrative)",
     "steps": [
      "A Super 8 cartridge at 18 fps is 200 seconds.",
      "Plan 20 shots of about 8 seconds each: 20 × 8 = 160 seconds. That leaves 40 seconds for the test bracket and retakes.",
      "Cost per finished minute of film is (stock + processing + scan) ÷ minutes on the roll. Suppose a cartridge, processing and scan came to £60 in total (an illustrative number, not a quote). Then 60 ÷ 3.33 minutes ≈ £18 for each minute shot.",
      "If your shooting ratio is 3 to 1, each finished minute costs about £54. Ask your lab for today's real quote and replace the numbers."
     ]
    },
    {
     "t": "activity",
     "x": "Write a roll plan: list every shot, its length in seconds, the stock and exposure index, and the test bracket. Leave 10 to 20 percent spare."
    },
    {
     "t": "check",
     "q": "Why bracket exposures on a test?",
     "o": [
      "Because film is cheap",
      "You cannot see the result on set, so you learn how your gear and lab behave",
      "To waste film",
      "It is required by the lab"
     ],
     "a": 1,
     "w": "Film is developed later, so a test is the only way to check your whole chain in advance (our reasoning)."
    },
    {
     "t": "check",
     "q": "Which should you avoid when handling unexposed film?",
     "o": [
      "Total darkness",
      "A safelight",
      "Cool storage",
      "A changing bag"
     ],
     "a": 1,
     "w": "Kodak says not to use a safelight. {{kodak-500t}}"
    },
    {
     "t": "take",
     "i": [
      "Test before the real roll.",
      "Handle film in total darkness and store it cool. {{kodak-500t}}",
      "Cost per finished minute is stock, processing and scan divided by minutes, times the shooting ratio."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Film and digital: what you gain, what you pay",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Film is a different capture medium, not just a look. These are the main differences for a cinematographer."
    },
    {
     "t": "table",
     "title": "Film and digital side by side (our summary; sources noted where we used them)",
     "head": [
      "Question",
      "Film",
      "Digital (DSLR or mirrorless)"
     ],
     "rows": [
      [
       "Seeing the result",
       "Not until processed",
       "Immediately on screen"
      ],
      [
       "Cost of a take",
       "Stock, processing and scan every time",
       "Almost free once you own the card"
      ],
      [
       "Exposure margin",
       "Negative film has a forgiving range and can hold highlights; test your stock",
       "Highlights clip hard; log helps"
      ],
      [
       "Shutter",
       "Rotary shutter exposes a whole frame at once (our reading of)",
       "Many CMOS sensors scan line by line"
      ],
      [
       "Sound",
       "Recorded separately (double-system) or on magnetic stripe in some Super 8 cartridges",
       "Camera mic is weak; record separately"
      ],
      [
       "Look",
       "Grain, halation, a soft roll-off",
       "Clean, sharp; can be graded to imitate film"
      ],
      [
       "Workflow",
       "Process, scan, then edit and grade digitally",
       "Copy cards, edit, grade"
      ],
      [
       "Time to delivery",
       "Days to weeks",
       "Same day"
      ]
     ],
     "src": "Rows are summaries. Sources are named in the cells that depend on them. {{wiki-log}} {{wiki-shutter}} {{wiki-rolling}} {{wiki-super8}}"
    },
    {
     "t": "p",
     "x": "A film camera can carry a video assist, which sends part of the light to a small video camera so you can watch or record the shot. It is only an approximation of the film image, so it cannot show scratches, a run-out or what the film will really look like. {{fh-ch6}} Some film cameras can also expose timecode along the edge of the film. {{fh-ch6}}"
    },
    {
     "t": "p",
     "x": "Digital processes are widely used even for film projects: the 16 mm page describes a digital intermediate workflow in which film is scanned, graded digitally, then output. {{wiki-16mm}}"
    },
    {
     "t": "p",
     "x": "Cost savings are one reason to choose a smaller gauge: the Hurt Locker used Super 16 cameras, which let the production run multiple cameras and expose over a million feet of film. {{wiki-16mm}}"
    },
    {
     "t": "p",
     "x": "Kodak is the last remaining manufacturer of motion-picture film as of the 2015 version of the source, and there has been a small revival in 35 mm shooting in the 2020s. {{wiki-35mm}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Do not buy a film camera because of how film looks in a social media post. Test the whole chain: camera, stock, lab and scan. Many first rolls fail for avoidable reasons."
    },
    {
     "t": "h",
     "x": "Getting a film look on a DSLR"
    },
    {
     "t": "p",
     "x": "A number of digital cameras approximate the 16 mm format by using 16 mm-sized sensors and lenses. {{wiki-16mm}} DSLR sensors similar to the 35 mm frame can produce similar depth of field. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Our reading: depth of field, shutter angle, frame rate, grading and grain can be imitated. Process variation, halation and how highlights roll off are harder to copy and depend on the chain you choose."
    },
    {
     "t": "example",
     "title": "Worked example: a decision (illustrative)",
     "steps": [
      "You have a 3-minute short with one location, a budget for one Super 8 cartridge per scene and a weekend.",
      "Digital: shoot 20 takes of every shot on a DSLR and choose the best. Cost is time.",
      "Film: shoot two takes of every shot on Super 8, after rehearsal. Cost is stock and processing. Each take is committed to the roll.",
      "A hybrid: film the parts that benefit from the film's texture, and shoot the rest on digital. Match the shutter angle and frame rate, and grade them together.",
      "Choose film if you want the discipline and the texture and can afford the processing and scanning. Choose digital if you need many takes or fast turnaround."
     ]
    },
    {
     "t": "activity",
     "x": "Make a one-page decision table for your next project: list its needs and score film, digital and a hybrid on each, with a reason."
    },
    {
     "t": "check",
     "q": "Which is a real cost difference between film and digital?",
     "o": [
      "Film takes cost stock, processing and scanning each time",
      "Digital cameras need darkness",
      "Film has no shutter",
      "Digital stores less"
     ],
     "a": 0,
     "w": "Each film take uses stock and needs processing and scanning. {{wiki-16mm}}"
    },
    {
     "t": "check",
     "q": "What is a digital intermediate?",
     "o": [
      "Developing at home",
      "A workflow in which film is scanned, graded digitally and output",
      "A type of lens",
      "A battery"
     ],
     "a": 1,
     "w": "The source describes shooting on film, scanning, grading and printing out. {{wiki-16mm}}"
    },
    {
     "t": "take",
     "i": [
      "Film and digital differ in feedback, cost per take, shutter and workflow.",
      "Hybrid workflows are common. {{wiki-16mm}}",
      "Test the whole chain before you commit."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "The camera-side routine: shutter, gate, loading and labels",
   "min": 25,
   "blocks": [
    {
     "t": "p",
     "x": "A film camera has a lens and mount, a viewfinder, a film chamber or magazine, a motor, a gate with a claw, and a shutter. The claw pulls each frame down and holds it still while it is exposed, in a stop-start movement called the intermittent. Loops of slack let the continuously running reels feed that stop-start movement, and a camera that jams has usually lost its loop. {{fh-ch6}}"
    },
    {
     "t": "h",
     "x": "Shutter angle and exposure time"
    },
    {
     "t": "p",
     "x": "Exposure equals intensity times time. At the standard 24 fps, a 180° shutter gives 1/48 s, which people round to 1/50 s. A narrower shutter gives a faster speed. {{fh-ch6}} A 135° shutter gives about 1/65 s, and a 90° shutter about 1/100 s. {{fh-ch6}}"
    },
    {
     "t": "table",
     "title": "Exposure time at 24 fps (our arithmetic: angle ÷ 360 ÷ 24)",
     "head": [
      "Shutter angle",
      "Exposure time",
      "Fraction of a 180° exposure"
     ],
     "rows": [
      [
       "180°",
       "1/48 s",
       "1"
      ],
      [
       "144°",
       "1/60 s",
       "0.8"
      ],
      [
       "135°",
       "1/64 s",
       "0.75"
      ],
      [
       "90°",
       "1/96 s",
       "0.5"
      ],
      [
       "45°",
       "1/192 s",
       "0.25"
      ]
     ]
    },
    {
     "t": "p",
     "x": "A variable shutter can be closed while the camera runs, for example to change exposure as you move from sun into shade, but a narrow angle risks judder when there is a lot of movement. Check the shutter setting at the start of each day, because someone else may have narrowed it. {{fh-ch6}} In general longer exposures reduce judder and need less light, but too long a time brings heavy motion blur. {{fh-ch6}}"
    },
    {
     "t": "example",
     "title": "Worked example: the light lost to a beam-splitter (our arithmetic)",
     "steps": [
      "A Bolex H16 has a 135° shutter, which is 1/64 s at 24 fps, or about 1/65 s. {{fh-ch6}}",
      "Its manual suggests metering with an effective shutter speed of 1/80 s to allow for the light that the prism diverts to the finder. {{fh-ch6}}",
      "The ratio is 80 ÷ 65 = 1.23, and log base 2 of 1.23 is about 0.3, so roughly a third of a stop. That sits inside the handbook's range of a third to a full stop for beam-splitter reflexes. {{fh-ch6}}"
     ]
    },
    {
     "t": "h",
     "x": "Checks before and during a roll"
    },
    {
     "t": "ul",
     "i": [
      "Gate check: dirt or bits of emulsion lodged at the aperture show as dark hairs at the edge of the picture. Look at the edges of the aperture with a lighted magnifier, and lift dirt out with an orangewood stick, never metal. {{fh-ch6}}",
      "How often: on a feature, at each new roll and before moving to a new set-up. On a documentary, once a roll may be all you have time for. {{fh-ch6}}",
      "Scratch test: run a few feet of unused film through the camera and examine it at an angle to a light. {{fh-ch6}}",
      "Light leak test: expose with a bright light moved around the camera, then look for fogging at the edges. Tape the edges of magazines. {{fh-ch6}}",
      "Framing chart: shoot a chart with frame lines head-on and match it to the viewfinder, so the lab and post team can reproduce your framing. {{fh-ch6}}",
      "Eyepiece: close the viewfinder light trap when you are not looking through it, because stray light can travel backwards through the reflex system and fog the film. {{fh-ch6}}"
     ]
    },
    {
     "t": "h",
     "x": "Loading and labelling"
    },
    {
     "t": "p",
     "x": "Load magazines in a changing bag or a darkroom, in a clean place, with the sleeves above your elbows and out of direct sun. Dirt on the film ends up in the gate. {{fh-ch6}} Label every magazine with the film type, the length of the roll and the camera roll number as a minimum, and never give two camera rolls the same number. {{fh-ch6}} Keep spare cores, cans and black bags for short ends, and carry at least one extra magazine. {{fh-ch6}}"
    },
    {
     "t": "example",
     "title": "Worked example: how many rolls? (illustrative)",
     "steps": [
      "You expect about 40 minutes of takes on 16 mm at 24 fps, using 400 ft rolls that run about 11.1 minutes.",
      "Our arithmetic: 40 ÷ 11.1 = 3.6, so you need four rolls.",
      "Add a margin for retakes and the test bracket, and a spare magazine so you can load the next roll before it is needed. {{fh-ch6}}"
     ]
    },
    {
     "t": "activity",
     "x": "Write a one-page camera-side checklist for your chosen camera: shutter angle and speed, the gate check, the labels you will write, and where you will load and unload. Say who does what if you are working alone."
    },
    {
     "t": "check",
     "q": "A film camera has a 135° shutter and runs at 24 fps. What is its shutter speed?",
     "o": [
      "About 1/64 s",
      "1/48 s",
      "1/96 s",
      "1/25 s"
     ],
     "a": 0,
     "w": "135° ÷ 360° is 0.375, and 0.375 ÷ 24 is 1/64 s. {{fh-ch6}}"
    },
    {
     "t": "check",
     "q": "Why should you close the viewfinder light trap when you are not looking through a film camera's eyepiece?",
     "o": [
      "Stray light can pass back through the reflex system and fog the film",
      "It saves battery",
      "It stops the shutter turning",
      "It keeps the lens clean"
     ],
     "a": 0,
     "w": "Light entering the eyepiece can travel backwards and expose the film. {{fh-ch6}}"
    },
    {
     "t": "take",
     "i": [
      "Know your shutter angle and the exposure time it gives.",
      "Check the gate often, and label every roll.",
      "A film viewfinder does not show the exposed frame, so test and log."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "The characteristic curve, push, pull and latitude",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "A film's characteristic curve plots density against exposure. It has a base-plus-fog level, a threshold, a toe, a straight line and a shoulder. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "Tones on the straight line keep their separation, shadows near the threshold turn to featureless black, and highlights high on the shoulder compress. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "Gamma is the slope of the straight line. Colour negative has a low gamma of about 0.55 and the print has about 3.8, so the product is about 2, twice the contrast of nature. That is why cinema in a dark room looks normal. {{fh-ch5}}"
    },
    {
     "t": "table",
     "title": "Process choices that change contrast",
     "head": [
      "Choice",
      "What it does",
      "Cost"
     ],
     "rows": [
      [
       "Push (force develop)",
       "Rate the film faster; longer development raises contrast and speed",
       "More grain; little shadow detail gained"
      ],
      [
       "Pull",
       "Overexpose and underdevelop to lower contrast and grain",
       "Not all stocks or labs allow it"
      ],
      [
       "Flashing",
       "A dim uniform exposure lifts shadows",
       "Milky, grainier, desaturated look"
      ],
      [
       "Bleach bypass",
       "Leaves silver in the print for contrast and desaturation",
       "Test first; can be done digitally"
      ]
     ],
     "src": "Summary of {{fh-ch7}}."
    },
    {
     "t": "p",
     "x": "When you push, double the ISO number for one stop and multiply by four for two. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "Latitude has two meanings: the stock's total range (colour negative about ten to twelve stops, reversal about six), and the exposure error you can get away with. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "Negative film tolerates about one to one and a half stops of under-exposure and two or more of over-exposure, while reversal has about a stop either way. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "Slight overexposure of colour negative gives finer grain and richer blacks; underexposure gives grain and smoky blacks. {{fh-ch7}}"
    },
    {
     "t": "example",
     "title": "Worked example: push arithmetic (our arithmetic)",
     "steps": [
      "ISO 100 stock pushed one stop is exposed at EI 200 (double the number).",
      "Pushed two stops it is exposed at EI 400 (multiply by four).",
      "Each stop of push costs a stop of light you did not need to add, but the shadow detail stays where the exposure left it."
     ]
    },
    {
     "t": "p",
     "x": "Handling matters too: use stock within six months, freeze it if it will wait longer, warm it before opening, and hand-carry it through airports because X-ray fogging is cumulative. {{fh-ch7}}"
    },
    {
     "t": "check",
     "q": "Which change raises contrast and grain but does little for shadow detail?",
     "o": [
      "Pull one stop",
      "Push one stop",
      "Flashing",
      "Using slower film"
     ],
     "a": 1,
     "w": "Pushing makes brighter tones respond more than the toe. {{fh-ch7}}"
    },
    {
     "t": "check",
     "q": "A stock is rated ISO 100 and you push two stops. What EI do you meter at?",
     "o": [
      "200",
      "300",
      "400",
      "800"
     ],
     "a": 2,
     "w": "Two stops multiplies the speed by four (our arithmetic). {{fh-ch7}}"
    },
    {
     "t": "take",
     "i": [
      "Expose important tones on the straight line. {{fh-ch7}}",
      "Push adds speed and contrast, not shadow detail. {{fh-ch7}}",
      "Latitude is range and tolerance; know which is meant. {{fh-ch7}}"
     ]
    }
   ]
  },
  {
   "id": "l7",
   "title": "Metering: incident, reflected, skin and backlight",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "An incident meter reads the light falling on the subject, with a white dome pointed back at the camera. A reflected meter reads the light bouncing off the subject. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "A reflected meter is built to render whatever you read as middle grey, so a black cat will come out too bright unless you give it less exposure than the meter says. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "An 18 per cent grey card is the standard reference, and average pale skin reflects about twice as much (about 35 per cent). Open up one stop from a skin reading, and close down half a stop to a stop for darker skin. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "Average readings in stops, not arithmetic. A bright area at f/16 and a dark one at f/2 average at f/5.6, because it is three stops from each. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "A reflected reading toward a bright window would silhouette the subject, so open the iris about one and a half stops as a rule of thumb. Close down a half stop if flare is severe. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "Use T-stops for exposure and, on beam-splitter cameras, an effective shutter speed that allows for the light sent to the finder. {{fh-ch7}}"
    },
    {
     "t": "table",
     "title": "Quick exposure corrections",
     "head": [
      "Situation",
      "Correction"
     ],
     "rows": [
      [
       "Pale skin read with a reflected meter",
       "Open 1 stop"
      ],
      [
       "Dark skin read with a reflected meter",
       "Close 1/2 to 1 stop"
      ],
      [
       "Subject against a bright window or sun",
       "Open about 1 1/2 stops"
      ],
      [
       "Hazy distant landscape",
       "Close about 1/2 stop front-lit, 1 stop side-lit"
      ],
      [
       "Sunset silhouette",
       "Read the sky, bracket 1/2 to 1 stop each way"
      ]
     ],
     "src": "Rules of thumb from {{fh-ch7}}."
    },
    {
     "t": "example",
     "title": "Worked example: skin and backlight (our arithmetic)",
     "steps": [
      "A reflected reading of a pale face says f/8. Open one stop to f/5.6.",
      "A medium dark face reads f/8; close half a stop to roughly f/9.5 and a full stop to f/11.",
      "A backlit face reads f/8; open one and a half stops, halfway between f/5.6 and f/4, about f/4.7."
     ]
    },
    {
     "t": "p",
     "x": "In contrasty scenes the scene's range can exceed the film's, so add fill, shade the bright area, or choose which end to lose. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "At the lab, tag the can as exposed, with title, stock, emulsion number, footage and special processing, and never repeat a camera roll number. {{fh-ch7}}"
    },
    {
     "t": "check",
     "q": "You take a reflected reading of a very pale subject. What does an uncorrected exposure do?",
     "o": [
      "Renders it as middle grey, so too dark",
      "Renders it as pure white",
      "Matches it exactly",
      "Overexposes by two stops"
     ],
     "a": 0,
     "w": "A reflected meter pushes whatever it reads toward middle grey, so pale subjects come out too dark. {{fh-ch7}}"
    },
    {
     "t": "check",
     "q": "Readings of f/2 and f/16 are averaged in stops. Where do you land?",
     "o": [
      "f/9",
      "f/5.6",
      "f/8",
      "f/4"
     ],
     "a": 1,
     "w": "f/2 to f/16 is six stops; halfway is three stops from f/2, which is f/5.6 (our arithmetic). {{fh-ch7}}"
    },
    {
     "t": "take",
     "i": [
      "Incident reads light; reflected reads brightness and assumes grey. {{fh-ch7}}",
      "Open for pale skin and backlight; close for dark skin. {{fh-ch7}}",
      "Average in stops, not numbers. {{fh-ch7}}"
     ]
    }
   ]
  },
  {
   "id": "l8",
   "title": "High speed, time-lapse and format arithmetic",
   "min": 20,
   "blocks": [
    {
     "t": "h",
     "x": "High-speed formulas, written out"
    },
    {
     "t": "p",
     "x": "Brown's high-speed formulas lose their division signs in our copy. The examples are right, so this lesson writes the formulas out. {{brown-special}}"
    },
    {
     "t": "ul",
     "i": [
      "1 ÷ exposure time = (360 ÷ shutter angle) × frame rate. {{brown-special}}",
      "Times normal speed = frame rate ÷ transfer rate. {{brown-special}}",
      "Screen time = frame rate × event duration ÷ transfer rate. {{brown-special}}"
     ]
    },
    {
     "t": "example",
     "title": "Brown's examples, our arithmetic",
     "steps": [
      "A 120 degree shutter at 360 fps: (360 ÷ 120) × 360 = 1,080, so exposure is 1/1080 s.",
      "360 fps played at 24 fps is 360 ÷ 24 = 15 times normal speed.",
      "A half-second event at 360 fps is 180 frames, which plays for 180 ÷ 24 = 7.5 seconds."
     ]
    },
    {
     "t": "p",
     "x": "A camera with a beam splitter, for example for a video tap, usually needs about half a stop of compensation. {{brown-special}}"
    },
    {
     "t": "h",
     "x": "Mixing strobe and tungsten"
    },
    {
     "t": "p",
     "x": "A strobe does not change exposure with frame rate, but tungsten does. At 96 fps the tungsten must be set for f/11 to read f/5.6 at that speed. {{brown-special}}"
    },
    {
     "t": "p",
     "x": "Add the two sources as light, not as f-numbers. Two equal sources of f/5.6 give twice the light, which is f/8. {{brown-special}}"
    },
    {
     "t": "p",
     "x": "Our check: 96 fps with a 180 degree shutter exposes each frame for 1/192 s against 1/48 s at 24 fps. That is four times less light, two stops, so f/11 becomes f/5.6. This agrees with Brown."
    },
    {
     "t": "h",
     "x": "Time-lapse"
    },
    {
     "t": "example",
     "title": "Brown's cloud example, our arithmetic",
     "steps": [
      "The director wants 15 seconds on screen at 24 fps: 15 × 24 = 360 frames.",
      "Six hours is 6 × 3,600 = 21,600 seconds.",
      "21,600 ÷ 360 = 60 seconds between frames, so one frame a minute, which is the interval Brown's chart gives."
     ]
    },
    {
     "t": "h",
     "x": "Formats"
    },
    {
     "t": "ul",
     "i": [
      "The Academy aperture was created in 1932 to make room for the optical soundtrack. {{brown-formats}}",
      "3-perf systems advance three perforations a frame, use less stock and give longer magazine times. The negative is converted to 4-perf at some stage. {{brown-formats}}",
      "Anamorphic negative is 1.18:1. Unsqueezed, it projects at about 2.35:1, the figure Brown gives. Earlier lessons use 2.39:1, the later standard; our note. {{brown-formats}}"
     ]
    },
    {
     "t": "p",
     "x": "Our check: 1.18 × 2, since the lens squeezes the image to half its width, is 2.36, close to 2.35."
    },
    {
     "t": "check",
     "q": "What is the exposure time for 120 degrees at 360 fps?",
     "o": [
      "1/1080 s",
      "1/720 s",
      "1/360 s",
      "1/120 s"
     ],
     "a": 0,
     "w": "(360 ÷ 120) × 360 = 1,080. {{brown-special}}"
    },
    {
     "t": "check",
     "q": "Two equal f/5.6 light sources together read as...",
     "o": [
      "f/8",
      "f/11.2",
      "f/4",
      "f/5.6"
     ],
     "a": 0,
     "w": "Two equal sources double the light, which is one stop. {{brown-special}}"
    },
    {
     "t": "take",
     "i": [
      "Write the division out: (360 ÷ angle) × frame rate. {{brown-special}}",
      "Add light sources as light, not as f-numbers. {{brown-special}}",
      "Time-lapse interval = event seconds ÷ frames wanted. {{brown-special}}"
     ]
    }
   ]
  },
  {
   "id": "l9",
   "title": "Formats, finishing and the mechanics of speed",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Frames, perforations and gauges"
    },
    {
     "t": "p",
     "x": "The Handbook says Super 16 has one row of perforations and a frame 40 per cent larger than 16 mm, at 1.67:1. That is nearly 16:9, so an HD transfer needs negligible cropping. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Film Art agrees that Super 16 gives about 40 per cent more image area for a 35 mm blow-up at 1.85. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "Super 35 reclaims the soundtrack area for a 32 per cent larger image and must be scanned. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Three-perf saves 25 per cent of stock, and two-perf Techniscope saves 50 per cent at 2.40:1. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "Our arithmetic: a 4-perf frame advances four perforations. 3 ÷ 4 = 0.75, so three-perf uses 25 per cent less. 2 ÷ 4 = 0.5, so two-perf uses half."
    },
    {
     "t": "p",
     "x": "65 mm is shot and 70 mm is shown. IMAX runs film horizontally at fifteen perforations a frame. {{fh-ch1}}"
    },
    {
     "t": "h",
     "x": "Film against digital"
    },
    {
     "t": "p",
     "x": "The Handbook says film costs more per minute, but a film camera rig may rent for much less a day than a high-end digital camera. Film holds a wide tonal range and is simpler in heat and power. {{fh-ch1}}"
    },
    {
     "t": "p",
     "x": "It also says film forces planning and a low shooting ratio, and that long-term playback of digital files is uncertain while film keeps if stored well. {{fh-ch1}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "These points date from 2012, when labs were closing. Check what labs and stocks are available now."
    },
    {
     "t": "h",
     "x": "Traditional finishing"
    },
    {
     "t": "p",
     "x": "A and B rolls alternate shots on two rolls with black leader between them. This hides splices in 16 mm and allows fades, dissolves and superimpositions. {{fh-ch16}}"
    },
    {
     "t": "p",
     "x": "Optical sound sits ahead of the picture, 26 frames in 16 mm and 20 frames in 35 mm. Pullups are needed when reels are spliced. {{fh-ch16}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Lab printer-light scales differ, and Brown's own figures for printer points disagree with themselves. Use the lab's own data, not a book's."
    },
    {
     "t": "h",
     "x": "The mechanics behind frame rate"
    },
    {
     "t": "p",
     "x": "Arnheim describes intermittent motion. A claw pulls the film down one frame at a time, a Maltese cross can advance it, and a shutter covers the gate while it moves. {{arnheim-motion}}"
    },
    {
     "t": "p",
     "x": "He adds that the faster a subject moves, the shorter each exposure and the gap between frames must be to catch its phases. Marey's rate of 12 a second could not catch the flight of a bird. {{arnheim-motion}}"
    },
    {
     "t": "check",
     "q": "How much stock does three-perf save over four-perf?",
     "o": [
      "25 per cent",
      "50 per cent",
      "10 per cent",
      "None"
     ],
     "a": 0,
     "w": "Our arithmetic: 3 ÷ 4 = 0.75, so it uses a quarter less. {{fh-ch1}}"
    },
    {
     "t": "check",
     "q": "Why does a shutter cover the gate during the film's move?",
     "o": [
      "The film moves only between exposures",
      "To cool the film",
      "To add grain",
      "To change the colour"
     ],
     "a": 0,
     "w": "The frame must be still when light reaches it. {{arnheim-motion}}"
    },
    {
     "t": "take",
     "i": [
      "Super 16 is nearly 16:9. {{fh-ch1}}",
      "Three-perf saves 25 per cent of stock. {{fh-ch1}}",
      "Use the lab's own printer-light data. {{fh-ch16}}"
     ]
    }
   ]
  },
  {
   "id": "l10",
   "title": "The lecturer's method: George Eastman",
   "min": 22,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "George Eastman (1854 to 1932) founded the Eastman Kodak Company and helped bring roll film into the mainstream. {{wiki-eastman}}"
    },
    {
     "t": "p",
     "x": "We read part of his own 1888 patent and Wikipedia as excerpts, so the record is partial. The patent describes the camera, not his business thinking, so the business points come from Wikipedia. {{eastman-patent}} {{wiki-eastman}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Remove the step the customer finds hard. In 1888 he released the Kodak camera, sold loaded with film for 100 exposures. {{wiki-eastman}}",
      "Take the work back in a package. The photographer mailed the camera to Rochester with $10, and the company processed the film, made a print of each exposure, reloaded the camera and returned it all. {{wiki-eastman}}",
      "Build the camera around the film. His patent describes a camera whose lens sits inside a hollow cylindrical shutter with openings on opposite sides, turning half a revolution with each press, and a roll-holder with a measuring roller and an indicator. {{eastman-patent}}",
      "Make the money where it recurs. He saw that most revenue would come from film rolls rather than cameras, and so he focused on film production. {{wiki-eastman}}",
      "Sell to the whole market. By providing quality, affordable film to every camera maker, Kodak turned competitors into de facto business partners. {{wiki-eastman}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The source describes Eastman as controlling his public image, and a definitive biography only appeared in 1996, so we know his methods mostly from the products and the patent. {{wiki-eastman}}"
    },
    {
     "t": "table",
     "title": "Stages of a shot on film and who does each (the Eastman column follows the sources; the rest is our adaptation)",
     "head": [
      "Stage",
      "1888 Kodak",
      "Your film shoot"
     ],
     "rows": [
      [
       "Load",
       "Loaded at the factory",
       "You load a cartridge or magazine in the dark"
      ],
      [
       "Expose",
       "Photographer",
       "You, with a meter and a test"
      ],
      [
       "Count what is used",
       "A film indicator",
       "Footage counter and your shot log"
      ],
      [
       "Develop and print",
       "Eastman's factory",
       "A lab, in a process such as ECN-2 for colour negative"
      ],
      [
       "Deliver",
       "Prints and a reloaded camera",
       "Scans and files, with the originals returned"
      ]
     ],
     "src": "Eastman's column follows the sources. The third column is our adaptation. {{wiki-eastman}} {{eastman-patent}} {{kodak-500t}}"
    },
    {
     "t": "h",
     "x": "Worked example: cost per exposure, per frame and per minute (illustrative)"
    },
    {
     "t": "example",
     "title": "Putting a price on each step",
     "steps": [
      "In 1888 $10 covered processing, prints, a reload and the return, for 100 exposures. That is 10 ÷ 100 = $0.10 per exposure. {{wiki-eastman}}",
      "A Super 8 cartridge holds 3,600 frames. {{wiki-super8}} Suppose stock, processing and scan together cost £60, a placeholder, not a quote. That is 60 ÷ 3,600 = £0.0167, about 1.7p per frame.",
      "At 18 frames per second a cartridge runs 200 seconds, which is 3.33 minutes, so the cost is 60 ÷ 3.33 = £18 per minute shot.",
      "With a shooting ratio of 3 to 1 the cost per finished minute is about £54. As Eastman saw, the film is where the money goes, so work this out before you buy the camera."
     ]
    },
    {
     "t": "h",
     "x": "What you cannot hand off: handling the film"
    },
    {
     "t": "p",
     "x": "Kodak says to store unexposed film at 13 °C (55 °F) or lower, at -18 °C (0 °F) or lower for extended storage, and to process exposed film promptly. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "Let film warm to room temperature before use, to prevent telescoping, condensation and spotting. Kodak lists 1 hour for 8 mm and 16 mm film after an 8 °C rise and 1.5 hours after a 39 °C rise, and 3 and 5 hours for 35 mm. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "Do not use a safelight. Handle unprocessed film in total darkness. {{kodak-500t}}"
    },
    {
     "t": "h",
     "x": "Apply it: a hand-off table"
    },
    {
     "t": "ol",
     "i": [
      "List every step from buying the film to a finished file.",
      "For each, ask who can do it well, and where a mistake would be invisible until too late.",
      "Hand off the steps you cannot do well or cannot check, such as processing and scanning. Keep the steps that need your eye, such as metering and handling.",
      "Get a real quote from a lab, with its date, and work the cost per finished minute at your shooting ratio.",
      "Write the film handling steps from the Kodak sheet into your plan sheet."
     ]
    },
    {
     "t": "activity",
     "x": "Make the hand-off table and write the all-in cost per finished minute from a real quote."
    },
    {
     "t": "check",
     "q": "Where did Eastman expect most revenue to come from?",
     "o": [
      "Cameras",
      "Film rolls",
      "Tripods",
      "Lenses"
     ],
     "a": 1,
     "w": "He recognised that most revenue would come from film rolls. {{wiki-eastman}}"
    },
    {
     "t": "check",
     "q": "A £60 cartridge holds 3,600 frames. About what does each frame cost?",
     "o": [
      "0.17p",
      "1.7p",
      "17p",
      "£1.70"
     ],
     "a": 1,
     "w": "60 ÷ 3,600 is about £0.0167."
    },
    {
     "t": "check",
     "q": "What does Kodak say about handling unprocessed film?",
     "o": [
      "Use a green safelight",
      "Handle it in total darkness",
      "Handle it in bright light",
      "Keep it hot"
     ],
     "a": 1,
     "w": "Do not use a safelight; handle unprocessed film in total darkness. {{kodak-500t}}"
    },
    {
     "t": "take",
     "i": [
      "Cost the whole path, not only the film.",
      "Hand off what you cannot do well or cannot check. {{wiki-eastman}}",
      "Handle film cool, warm it before use and keep it dark. {{kodak-500t}}"
     ]
    }
   ]
  }
 ]
};
