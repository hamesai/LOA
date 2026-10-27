/* Cinematography: DSLR and analog film (module 4). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["cinematography-4"] = {
 "intro": "Cinematography is writing with light. This module covers the three things you can control on any set, a window or a lamp: the colour of the light, where it comes from, and how much of it reaches the subject. Lecturer lens: Karl Freund made light meters as well as films, and his own account of filming I Love Lucy begins with a lighting contrast problem. His method is to name the constraint, choose the contrast for it, and measure.",
 "outcomes": [
  "Give the colour temperature of common light sources and set white balance or a filter to match.",
  "Build a three-point setup, then adjust the key-to-fill relationship in stops.",
  "Use light levels in footcandles, the inverse-square law and a metering method to hit an exposure.",
  "Work out the lighting contrast ratio from two readings and the power draw of a lighting plan.",
  "Lecturer's method: Measure light before setting it, choose the lighting contrast for the delivery chain, and light each position to the same reading."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Colour temperature and white balance",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Colour temperature describes the colour of a light source by comparing it with a glowing black body, and it is measured in kelvins. {{wiki-kelvin}}"
    },
    {
     "t": "p",
     "x": "A lower number is warmer and more orange; a higher number is bluer. In lighting and film work this is the opposite of the artists' idea of warm and cool colours. {{wiki-kelvin}}"
    },
    {
     "t": "table",
     "title": "Colour temperatures of common sources",
     "head": [
      "Source",
      "Kelvin"
     ],
     "rows": [
      [
       "Candle flame, sunrise and sunset",
       "about 1,850 K"
      ],
      [
       "Household incandescent bulb",
       "about 2,400 to 2,900 K (sources differ, see below)"
      ],
      [
       "Studio lamps and photofloods",
       "3,200 K"
      ],
      [
       "Horizon daylight; cool white fluorescent",
       "about 5,000 K"
      ],
      [
       "Midday daylight; electronic flash",
       "5,500–6,000 K"
      ],
      [
       "Overcast daylight",
       "6,500 K"
      ]
     ],
     "src": "Values from the table in {{wiki-kelvin}}."
    },
    {
     "t": "table",
     "title": "Where the handbook's figures differ from the table above",
     "head": [
      "Source",
      "Table above",
      "The Filmmaker's Handbook"
     ],
     "rows": [
      [
       "Household bulb",
       "about 2,400 K",
       "about 2,900 K for 100 to 200 W bulbs, often around 2,800 K"
      ],
      [
       "Sunrise or sunset",
       "about 1,850 K",
       "about 2,000 K"
      ],
      [
       "Fluorescent tube",
       "about 5,000 K for cool white",
       "3,500 K warm white and 4,300 K daylight tubes, and tubes have no true colour temperature"
      ],
      [
       "Overcast sky",
       "6,500 K",
       "6,000 to 7,500 K"
      ],
      [
       "Daylight",
       "5,500 to 6,000 K",
       "5,500 K nominal, 5,500 to 6,500 K on average, 5,600 K for HMI"
      ],
      [
       "Studio tungsten",
       "3,200 K",
       "3,200 K"
      ]
     ],
     "src": "{{fh-ch8}}"
    },
    {
     "t": "p",
     "x": "The figures disagree because each is a rough benchmark for a source that varies with its age, power and the sky. Learn the ones that agree, which are 3,200 K for studio tungsten and about 5,500 to 5,600 K for daylight, and treat the rest as ranges. {{fh-ch8}} Fluorescent tubes have a discontinuous spectrum, so a kelvin figure is only a rough equivalent, and a green tint may need a gel or a custom white balance. {{fh-ch8}}"
    },
    {
     "t": "p",
     "x": "A given difference in kelvins matters more at the warm end. The gap between 3,000 K and 3,200 K is easy to see, while 5,400 K against 5,600 K is not. {{fh-ch8}} The mired scale removes that problem, because equal mired shifts look equal everywhere. Mired is 1,000,000 divided by the kelvin figure (our addition to the handbook's description). {{fh-ch8}}"
    },
    {
     "t": "example",
     "title": "Worked example: a mired shift (our arithmetic)",
     "steps": [
      "3,200 K is 1,000,000 ÷ 3,200 = 312.5 mired. 5,600 K is 1,000,000 ÷ 5,600 = about 178.6 mired.",
      "To match 5,600 K daylight to 3,200 K tungsten you want the larger mired value, so the shift is 312.5 − 178.6, about +134 mired.",
      "A positive result calls for yellow or orange filtration, which warms the scene. A negative one calls for blue. {{fh-ch8}}",
      "Check the other way: going from 3,200 K to 5,600 K is −134 mired, so you need blue."
     ]
    },
    {
     "t": "fig",
     "id": "cinematography-kelvin",
     "title": "A scale of light colours",
     "cap": "From candle flame to overcast sky, the scale runs from orange to blue."
    },
    {
     "t": "p",
     "x": "Daylight early in the morning and late in the afternoon has a lower, warmer colour temperature because the atmosphere scatters more of the shorter wavelengths. {{wiki-kelvin}}"
    },
    {
     "t": "p",
     "x": "The daylight standard for film is 5500 K. {{wiki-kelvin}}"
    },
    {
     "t": "h",
     "x": "Matching the camera to the light"
    },
    {
     "t": "p",
     "x": "Photographic film is made for specific light sources, commonly daylight and tungsten, and it gives neutral colour when matched to the source. {{wiki-kelvin}}"
    },
    {
     "t": "p",
     "x": "Filters on the lens or colour gels over the lights can correct the balance. {{wiki-kelvin}}"
    },
    {
     "t": "p",
     "x": "Where there is more than one source with a different colour temperature, one way to balance them is to place correcting gel filters over each light. {{wiki-kelvin}}"
    },
    {
     "t": "p",
     "x": "Digital cameras let you set a white balance in kelvins or from a grey card, which tells the camera what neutral looks like under that light."
    },
    {
     "t": "example",
     "title": "Worked example: a mixed-light interior (illustrative)",
     "steps": [
      "A room has a window with daylight (about 5500 K) and a tungsten lamp (about 3200 K).",
      "If you set the camera to 5500 K, the window looks neutral and the lamp looks orange.",
      "If you set it to 3200 K, the lamp is neutral and the window looks blue.",
      "Choose by what matters most in the shot. If the subject is lit by the window, set 5500 K and treat the lamp's orange as a feature, as many films do.",
      "Or use gels on the window to bring it to 3200 K so one white balance serves both, which is the approach the source describes. {{wiki-kelvin}}"
     ]
    },
    {
     "t": "table",
     "title": "What colour conversion costs in light",
     "head": [
      "Correction",
      "Light lost"
     ],
     "rows": [
      [
       "Straight 85 filter on the lens (daylight to tungsten balance)",
       "about two-thirds of a stop (filter factor 1.6)"
      ],
      [
       "Three-quarter CTO gel (roughly an 85)",
       "about two-thirds of a stop"
      ],
      [
       "80A filter (tungsten to daylight balance)",
       "two stops (filter factor 4)"
      ],
      [
       "Full CTB gel on a tungsten lamp",
       "about one and two-thirds stops"
      ],
      [
       "Dichroic blue filter on a tungsten lamp",
       "about one stop"
      ]
     ],
     "src": "{{fh-ch8}} {{fh-ch12}}"
    },
    {
     "t": "ul",
     "i": [
      "Window and lamp together: use a three-quarter or half CTB on the lamps, so the tungsten stays a little yellow against the daylight. That loses less light, and can look good. {{fh-ch12}}",
      "Or gel the window with CTO to match the tungsten, using a paler gel if you want the outside to stay a little blue. {{fh-ch12}}",
      "If daylight is the main light, use HMI, daylight fluorescent or LED, which need no filter. If the window adds little, block it out and light entirely with tungsten. {{fh-ch12}}",
      "No video or film camera can render daylight and tungsten both neutral in one frame, so choose which one to leave coloured. {{fh-ch12}}"
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "If you warm the image with a filter on the lens, white balance first and put the filter on afterwards. Otherwise the camera sees the warmth and cancels it. {{fh-ch8}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Shoot an 18 per cent grey card at the start of a set-up. In post, setting the grey to neutral and correct exposure pulls the other colours into place. {{fh-ch8}}"
    },
    {
     "t": "activity",
     "x": "Photograph a white sheet of paper under four sources in your home with auto white balance, then with a fixed 5500 K. Note which sources look orange or blue."
    },
    {
     "t": "check",
     "q": "Which source is warmest?",
     "o": [
      "Overcast sky",
      "Midday sun",
      "Candle flame",
      "Electronic flash"
     ],
     "a": 2,
     "w": "A candle flame is about 1,850 K, the lowest on the list. {{wiki-kelvin}}"
    },
    {
     "t": "check",
     "q": "Your camera is set to 5500 K and you film a person under a 3200 K lamp. The skin looks:",
     "o": [
      "Blue",
      "Orange",
      "Green",
      "Neutral"
     ],
     "a": 1,
     "w": "A low colour temperature light appears orange when the camera is balanced for a higher one. {{wiki-kelvin}}"
    },
    {
     "t": "check",
     "q": "A straight 85 filter costs about how much light?",
     "o": [
      "Two-thirds of a stop",
      "Two stops",
      "Half a stop",
      "None at all"
     ],
     "a": 0,
     "w": "An 85 has a filter factor of 1.6, about two-thirds of a stop. {{fh-ch8}}"
    },
    {
     "t": "take",
     "i": [
      "Colour temperature is measured in kelvins; lower is warmer. {{wiki-kelvin}}",
      "Daylight film is balanced for 5500 K and tungsten for 3200 K. {{wiki-kelvin}}",
      "Match the lights or accept the mix on purpose."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Three-point and four-point lighting",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "Three-point lighting is a standard method in theatre, video, film and photography, using three lights at separate positions to light a subject while controlling shadows. {{wiki-3pt}}"
    },
    {
     "t": "fig",
     "id": "cinematography-threept",
     "title": "A three-point setup from above",
     "cap": "The key lights the face from one side, the fill softens the shadow from the other, and the backlight rims the subject from behind."
    },
    {
     "t": "table",
     "title": "The three lights",
     "head": [
      "Light",
      "Position",
      "Job",
      "Notes"
     ],
     "rows": [
      [
       "Key",
       "In front, to one side",
       "Main illumination; sets the design",
       "In daytime exteriors the sun is often the key."
      ],
      [
       "Fill",
       "Other side, around face height",
       "Softens the shadows from the key",
       "Usually softer and less bright, up to half as bright."
      ],
      [
       "Backlight",
       "Behind, usually to one side",
       "Rims the subject to separate it from the background",
       "A thin outline of light."
      ]
     ],
     "src": "All rows summarise {{wiki-3pt}}."
    },
    {
     "t": "p",
     "x": "The key light's strength, colour and angle set the shot's overall lighting design more than anything else. {{wiki-3pt}}"
    },
    {
     "t": "p",
     "x": "The fill balances the key by lighting shaded surfaces and reducing harsh shadows such as the one the nose casts. {{wiki-3pt}}"
    },
    {
     "t": "p",
     "x": "A reflector, such as a white card or a white wall, can act as the fill instead of a lamp, giving a softer effect. {{wiki-3pt}}"
    },
    {
     "t": "p",
     "x": "Without a fill the contrast can be stark; that is sometimes deliberate, as in low-key lighting, but natural-looking shots need a fill. {{wiki-3pt}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The Wikipedia page we used carries a warning that it relies on a single source, so treat the details as a starting point. It matches common practice."
    },
    {
     "t": "h",
     "x": "Where to put each light"
    },
    {
     "t": "ul",
     "i": [
      "Key: usually about 45 degrees to one side of the camera and about 45 degrees above the subject, high enough that the nose shadow falls down and not across the cheek. {{fh-ch12}}",
      "Let the subject look towards the key, so both eyes are lit. A far-side key, which lights the side of the face away from the camera, gives a more dramatic look. {{fh-ch12}}",
      "Fill: close to the camera on the opposite side, soft, so its own shadows stay out of sight. A white card or foam core can do the job without adding new shadows, but it often has to be quite close. {{fh-ch12}}",
      "Backlight: high and behind, fairly hard, angled down so it does not strike the tip of the nose. A backlight at subject height and off to one side is called a kicker. {{fh-ch12}}",
      "Skip a light if it does not help. A subject may separate from the background simply by being lighter or darker than it. {{fh-ch12}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Frontal light flattens and hides texture, side light shows texture and depth, and backlight outlines the shape. Light from directly overhead cuts deep shadows into the eye sockets. {{fh-ch12}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "In black and white there is no colour contrast, so a green leaf and a red apple can render as the same grey. The classic fix is strong backlight or a rim light to separate subject from background, and there is no need to match the colour of different sources. Most modern monochrome is shot in colour and desaturated in post. {{fh-ch2}}"
    },
    {
     "t": "video",
     "id": "2SVesm1p8Bg",
     "title": "Three Point Lighting | A Cinematography Must Know",
     "by": "Brady Bessette (YouTube, 2021)",
     "note": "Title and channel confirmed on the YouTube page; we did not watch it. It covers key, rim and fill."
    },
    {
     "t": "h",
     "x": "Adding a fourth light"
    },
    {
     "t": "p",
     "x": "A background light makes it a four-point setup. It lights the wall or scenery behind the subject, removes shadows the subject casts on it, or draws attention to the background. {{wiki-3pt}}"
    },
    {
     "t": "p",
     "x": "It also helps give depth to the composition, offsetting the single-eye nature of the camera. {{wiki-3pt}}"
    },
    {
     "t": "h",
     "x": "Setting the fill in stops"
    },
    {
     "t": "example",
     "title": "Worked example: keeping the fill at half the key (illustrative)",
     "steps": [
      "Your key lamp reads 160 footcandles on the face. The source says the fill is usually up to half as bright. {{wiki-3pt}}",
      "Half of 160 is 80 footcandles, one stop below the key. A softer, flatter look uses 80; a moodier look uses less, such as 40 (two stops down).",
      "Light spreads out as you move away: the illumination falls with the square of the distance. This is standard physics, not from our sources.",
      "A lamp at 2 m that reads 160 footcandles will read 40 at 4 m (double the distance, one quarter of the light), which is two stops less.",
      "So to get 40 footcandles of fill from the same lamp, put it at 4 m. To get 80, put it about 2.8 m away (2 m × √2)."
     ]
    },
    {
     "t": "h",
     "x": "Two ways of writing the ratio"
    },
    {
     "t": "p",
     "x": "The handbook defines the lighting contrast ratio as key plus fill, to fill alone: (K+F):F. You measure the bright side of the face, which gets both lights, against the shadow side, which gets only the fill, ideally with an incident meter and the key turned off for the second reading. {{fh-ch12}} A difference of one stop is 2:1, two stops 4:1 and three stops 8:1. {{fh-ch12}}"
    },
    {
     "t": "p",
     "x": "The earlier worked example says the fill is up to half as bright as the key, which is a key-to-fill ratio of 2:1. Those are different numbers. With a key of 160 footcandles and a fill of 80, the bright side gets 240 and the shadow side 80, so the lighting contrast is 3:1, about 1.6 stops (our arithmetic: log base 2 of 3)."
    },
    {
     "t": "table",
     "title": "Same 160 footcandle key, different fills (our arithmetic)",
     "head": [
      "Fill (footcandles)",
      "Key : fill",
      "Lighting contrast (K+F):F",
      "Stops, lit side to shadow"
     ],
     "rows": [
      [
       "160",
       "1:1",
       "2:1",
       "1.0"
      ],
      [
       "80",
       "2:1",
       "3:1",
       "1.6"
      ],
      [
       "53",
       "3:1",
       "4:1",
       "2.0"
      ],
      [
       "40",
       "4:1",
       "5:1",
       "2.3"
      ],
      [
       "23",
       "7:1",
       "8:1",
       "3.0"
      ]
     ]
    },
    {
     "t": "p",
     "x": "Kodak considers 2:1 or 3:1 normal, and the handbook calls that conservative, because to the eye those ratios look quite flat. Low-key scenes, night effects and many sunlit outdoor shots use ratios much higher than 4:1. {{fh-ch12}} The picture tends to pick up contrast on its way to the screen, so starting a little flat is safer than starting too harsh, since lost shadow and highlight detail is hard to recover. {{fh-ch12}}"
    },
    {
     "t": "activity",
     "x": "Light a friend's face with a lamp or window as key and a white card as fill. Move the card nearer and farther. Photograph each and note how the shadow side changes."
    },
    {
     "t": "check",
     "q": "In the three-point system, which light is usually the softest and weakest?",
     "o": [
      "Key",
      "Fill",
      "Backlight",
      "Background"
     ],
     "a": 1,
     "w": "The fill is usually softer and less bright, up to half the key. {{wiki-3pt}}"
    },
    {
     "t": "check",
     "q": "You move a lamp from 2 m to 4 m. How much light do you lose?",
     "o": [
      "One stop",
      "Two stops",
      "Half",
      "None"
     ],
     "a": 1,
     "w": "Illumination falls with the square of distance. Double the distance gives a quarter of the light, two stops. This is standard physics."
    },
    {
     "t": "check",
     "q": "The bright side of a face reads one stop above the shadow side. What is the handbook's lighting contrast ratio?",
     "o": [
      "2:1",
      "4:1",
      "1:1",
      "8:1"
     ],
     "a": 0,
     "w": "One stop is a ratio of 2 to 1, two stops is 4 to 1 and three stops is 8 to 1. {{fh-ch12}}"
    },
    {
     "t": "take",
     "i": [
      "Key sets the design; fill controls the shadows; backlight separates. {{wiki-3pt}}",
      "Fill is up to half as bright as the key. {{wiki-3pt}}",
      "Distance changes light level with the inverse square."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Quality, direction and motivation",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "A light has a colour, a level, a direction and a quality. Quality means hard or soft. Hard light comes from a small source and casts crisp shadows; soft light comes from a large source and wraps around the subject. This is a common distinction, summarised by us."
    },
    {
     "t": "p",
     "x": "The size of a source is relative to the subject, so a window is a large source for a face and a small one for a ballroom."
    },
    {
     "t": "table",
     "title": "Hard and soft light (our summary of common practice)",
     "head": [
      "",
      "Hard",
      "Soft"
     ],
     "rows": [
      [
       "Source",
       "Small or far (bare bulb, sun)",
       "Large or near (window, softbox, bounce)"
      ],
      [
       "Shadows",
       "Sharp edges",
       "Gentle gradient"
      ],
      [
       "Mood",
       "Drama, strength, texture",
       "Gentleness, flattering"
      ],
      [
       "Control",
       "Flags and cutters easy",
       "Needs more space"
      ]
     ],
     "src": "Summary is ours."
    },
    {
     "t": "p",
     "x": "Hard light is crisp and shows texture, and it also shows skin defects, make-up and lighting mistakes more than soft light does. {{fh-ch12}} Soft light is more forgiving, and a large, soft key may need little or no fill. {{fh-ch12}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Softer is not always easier. Diffused lights do not throw as far, so they must be placed closer, and soft sources fall off more sharply than focused hard ones. {{fh-ch12}} For even light on action that moves, the handbook suggests a brighter, harder light from further away. {{fh-ch12}}"
    },
    {
     "t": "h",
     "x": "Motivated light"
    },
    {
     "t": "p",
     "x": "Motivated light means the light on screen appears to come from something in the scene, such as a window, a lamp or a screen. The audience believes the lighting because it has a believable source. This is common cinematography practice."
    },
    {
     "t": "p",
     "x": "Lighting can affect the mood of a scene: darker shots with less natural light can feel gloomy or tense, and brighter lighting feels more cheerful. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "The cinematographer plans light to convey mood, emotion and narrative in each shot. {{wiki-cine}}"
    },
    {
     "t": "h",
     "x": "Shaping light"
    },
    {
     "t": "ul",
     "i": [
      "Bounce: aim a lamp at a white card or ceiling to make a bigger, softer source.",
      "Diffusion: place a translucent sheet between lamp and subject to soften it.",
      "Flags and cutters: black cards that stop light going where you do not want it.",
      "Negative fill: a black card or cloth on the shadow side, which makes shadows deeper.",
      "Practicals: lamps visible in frame, which add warm pools of light and motivation."
     ]
    },
    {
     "t": "p",
     "x": "Practicals often do not give enough light, and a bright bulb makes the shade look burned out. A lampshade should read about two to three stops brighter than the faces nearby to look natural. {{fh-ch12}} Often the practical is only set dressing, with a low-power bulb or a dimmer, and an off-camera lamp does the real lighting. Flag that lamp so it does not cast a shadow of the practical. {{fh-ch12}}"
    },
    {
     "t": "p",
     "x": "Dimmers lower the voltage, so tungsten lamps turn more orange as they dim, while LEDs and some fluorescents dim without changing colour. {{fh-ch12}}"
    },
    {
     "t": "example",
     "title": "Worked example: from flat to shaped (illustrative)",
     "steps": [
      "A person sits at a desk. One bare lamp sits above the camera. The result is flat, with a hard shadow behind the head.",
      "Step 1: move the lamp to the side, 45° from the camera, so shapes appear on the face.",
      "Step 2: bounce it into a white sheet so the source is bigger and the shadows soften.",
      "Step 3: add a card of white on the dark side as fill, held about 1 m from the face.",
      "Step 4: put a small warm lamp in the background as a practical. The background gets its own depth and the face keeps a motivated look."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Hot lights are a burn and fire risk. Use gloves, keep fabrics clear, and do not leave lamps unattended or covered. This is our safety advice."
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Handle quartz lamps with gloves or paper, because finger oils damage the glass. Quartz bulbs can explode, so never switch one on when anyone is directly in front of the fixture. Weigh down stands with sandbags, tape cables flat, and fit a safety cord to any hanging light. {{fh-ch12}}"
    },
    {
     "t": "activity",
     "x": "Light a still life with a single window or lamp. Change only one thing at a time: direction, then size of source, then fill. Photograph each stage."
    },
    {
     "t": "check",
     "q": "A bigger source relative to the subject usually gives:",
     "o": [
      "Harder shadows",
      "Softer shadows",
      "Redder light",
      "Brighter colours"
     ],
     "a": 1,
     "w": "Larger sources wrap light and soften shadows (common practice, our summary)."
    },
    {
     "t": "check",
     "q": "What is the point of motivated light?",
     "o": [
      "It saves electricity",
      "The light appears to come from a believable source in the scene",
      "It makes the image sharper",
      "It avoids the need for a camera"
     ],
     "a": 1,
     "w": "Audiences accept the lighting because it seems to come from something in the world of the film (common practice)."
    },
    {
     "t": "take",
     "i": [
      "Plan colour, level, direction and quality for every shot.",
      "Lighting sets mood. {{wiki-cine}}",
      "Make the light feel motivated, and keep it safe."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Metering and getting the exposure right",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "An exposure meter reads light and suggests settings. An incident meter reads the light falling on the subject; a reflected meter reads the light bouncing off it. Kodak's data say its film indexes apply to incident or reflected readings of average subjects, or to a reading from an 18 percent grey card held close to the subject. {{kodak-500t}}"
    },
    {
     "t": "p",
     "x": "For unusually light or dark subjects, Kodak says to decrease or increase the exposure indicated by the meter. {{kodak-500t}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "A reflected meter assumes the subject is average. A white wall reads too dark and a black coat reads too bright unless you correct."
    },
    {
     "t": "p",
     "x": "The handbook gives a sunny-day example. If people stand by a building and you take an incident reading in the shade, the people in the sun will be badly overexposed, and the reverse. The reading has to be interpreted, not just copied. {{fh-ch7}}"
    },
    {
     "t": "p",
     "x": "It also notes that average light skin reads about a stop brighter than the 18 per cent grey that an auto-iris aims for, so auto-exposure on a close-up of a face can render some people too dark and others too light. {{fh-ch5b}}"
    },
    {
     "t": "p",
     "x": "With video, do not assume the camera's ISO setting matches your meter. A digital video signal is processed, so there is no simple measured sensitivity. To calibrate, fill the frame with a grey card, lock the shutter and ISO, let auto-iris choose an f-stop, then change the meter's ISO until it reads the same f-stop. Experienced video operators rarely set exposure with a meter, but a meter can speed up lighting. {{fh-ch5b}}"
    },
    {
     "t": "h",
     "x": "A light-level table you can use"
    },
    {
     "t": "p",
     "x": "Kodak's exposure table for tungsten light gives the footcandles needed at each aperture for an average subject at 24 frames per second with a 180° shutter, using the 500 exposure index. {{kodak-500t}}"
    },
    {
     "t": "table",
     "title": "Footcandles needed for correct exposure at EI 500, 24 fps, 180° shutter",
     "head": [
      "Aperture",
      "f/1.4",
      "f/2",
      "f/2.8",
      "f/4",
      "f/5.6",
      "f/8"
     ],
     "rows": [
      [
       "Footcandles",
       "5",
       "10",
       "20",
       "40",
       "80",
       "160"
      ]
     ],
     "src": "Table from {{kodak-500t}}. Each aperture step needs double the light, matching the stop scale in Module 1."
    },
    {
     "t": "p",
     "x": "The pattern is the same stop scale: one stop smaller aperture needs twice the light. {{kodak-500t}}"
    },
    {
     "t": "example",
     "title": "Worked example: can I shoot here? (illustrative)",
     "steps": [
      "A small room measures 20 footcandles at the face with your lamps.",
      "At EI 500 the Kodak table says f/2.8 needs 20 footcandles. {{kodak-500t}}",
      "Your digital camera is set to ISO 500, which we treat as comparable for this estimate. At f/2.8 the exposure is correct. At f/4 you would need 40 footcandles.",
      "If you want f/4 for more depth, either double the light, or double the sensitivity to ISO 1000 (one stop) and accept more noise.",
      "ISO 1000 is half the light per aperture: at f/2.8 it needs 10 footcandles, and at f/4 it needs 20."
     ]
    },
    {
     "t": "h",
     "x": "Using the camera's own aids"
    },
    {
     "t": "p",
     "x": "Check the histogram, the zebras or false colour as covered in Module 2, and compare them with the meter. Trust the combination, not one tool."
    },
    {
     "t": "ul",
     "i": [
      "Shoot a grey card at the start of each lighting set-up.",
      "Write the exposure settings on the slate or in a log.",
      "Check highlights on the brightest part of the face and the window or bulb in the frame."
     ]
    },
    {
     "t": "activity",
     "x": "Meter a scene with your phone's light meter app or the camera's meter. Use the Kodak table logic to calculate whether your lamps are strong enough for the aperture you want."
    },
    {
     "t": "check",
     "q": "At EI 500, 24 fps and 180° shutter, how much light does f/4 need?",
     "o": [
      "10 fc",
      "20 fc",
      "40 fc",
      "80 fc"
     ],
     "a": 2,
     "w": "The table lists 40 footcandles for f/4. {{kodak-500t}}"
    },
    {
     "t": "check",
     "q": "Why use a grey card?",
     "o": [
      "To change the colour",
      "It gives a standard 18 percent reference to meter from",
      "To make the picture sharper",
      "To avoid lighting"
     ],
     "a": 1,
     "w": "Kodak describes readings from an 18 percent reflectance grey card. {{kodak-500t}}"
    },
    {
     "t": "check",
     "q": "You meter a close-up on a light-skinned face with auto-iris. What will the handbook say tends to happen?",
     "o": [
      "The face may come out too dark, because skin is about a stop brighter than the grey the meter assumes",
      "The face will always be correct",
      "The face will come out too bright",
      "Nothing, skin tone is irrelevant to metering"
     ],
     "a": 0,
     "w": "Average light skin is about a stop brighter than 18 per cent grey, so a meter aimed at grey can underexpose it. {{fh-ch5b}}"
    },
    {
     "t": "take",
     "i": [
      "Meter incident or reflected, and correct for unusual subjects. {{kodak-500t}}",
      "Each stop needs twice the light. {{kodak-500t}}",
      "Combine the meter with the camera's own exposure aids."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Lighting a real location: power, sun and a quick interview set-up",
   "min": 25,
   "blocks": [
    {
     "t": "p",
     "x": "Most of the lighting problems on a real shoot come from the place, not the lamps. The handbook recommends scouting first: check the power, estimate the natural light at different times of day with a camera or meter, and plan which windows will need gel. {{fh-ch12}}"
    },
    {
     "t": "h",
     "x": "Counting the power"
    },
    {
     "t": "p",
     "x": "The estimate is volts multiplied by amps equals watts. Where mains is 220 to 240 volts, divide a lamp's wattage by 200, which rounds up and leaves a safety margin, to get the current in amps. {{fh-ch12}} Then look at the breaker or fuse box, count the circuits and note each circuit's maximum current. {{fh-ch12}}"
    },
    {
     "t": "example",
     "title": "Worked example: three lamps on one circuit (illustrative)",
     "steps": [
      "You plan two 650 W lamps and one 1,000 W lamp, so 650 + 650 + 1,000 = 2,300 W.",
      "Our arithmetic: 2,300 ÷ 200 = 11.5 A by the handbook's rounded rule. {{fh-ch12}}",
      "If the circuit is rated at 16 A you are inside it with a margin. If it is rated at 10 A, you must split the lamps across two circuits.",
      "LED lamps need much less power for the same light, so they ease the load. {{fh-ch12}} Never use thin household extension leads, which add load and can melt. {{fh-ch12}}"
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Check the rating of the fuse in each plug as well as the circuit breaker. Heavy loads on one lead overheat it. This is our caution. The handbook warns against thin household extension leads."
    },
    {
     "t": "h",
     "x": "Sunny days"
    },
    {
     "t": "p",
     "x": "In direct sun the sun is the key and the sky is the fill, which usually gives too much contrast. The classic problem is people at midday with deep eye shadows, which is why hazy or lightly overcast days suit people best. {{fh-ch12}} A white card or small reflector fills the shadows, an overhead frame with a silk or a scrim softens or cuts the sun, and moving the subject into gentle shade, away from a bright background, helps most of all. {{fh-ch12}} Where the sun is not overhead, moving the subject or the camera changes the contrast a great deal. {{fh-ch12}}"
    },
    {
     "t": "h",
     "x": "A quick interview set-up"
    },
    {
     "t": "ul",
     "i": [
      "Turn off overhead fluorescents if they are flat or mixed in colour, and cover or control windows so the light does not change during the interview. {{fh-ch12}}",
      "Use a soft key from the side, with the subject looking towards it. Either add a white card for fill or accept a high-contrast look with both eyes lit. {{fh-ch12}}",
      "If you do not want the window to glow, use negative fill, such as black duvetyn, on the shadow side to stop room reflections lifting it. Usually a white card is the better choice when contrast is already too great. {{fh-ch12}}",
      "Facing a bright window, light the face brightly, reduce the window with a black scrim gel (about two stops) and use a camera ND to open the iris. {{fh-ch12}}",
      "Pick a working f-stop and keep it across set-ups, so you can judge lighting by eye. A lens is often sharpest about two stops down from wide open. {{fh-ch12}}"
     ]
    },
    {
     "t": "activity",
     "x": "Take a room you know. Write down its mains voltage, the lamps you could use and their wattage, and the number of amps your plan draws using the rule above. Then draw a light plan with key, fill and backlight, and say which light is the practical."
    },
    {
     "t": "check",
     "q": "Mains is 230 V and you plan 2,000 W of lights. By the handbook's rounded rule, about how many amps is that?",
     "o": [
      "10 A",
      "2 A",
      "46 A",
      "100 A"
     ],
     "a": 0,
     "w": "2,000 ÷ 200 = 10 A, with a safety margin built in. {{fh-ch12}}"
    },
    {
     "t": "check",
     "q": "What is the classic problem when shooting people in midday sun?",
     "o": [
      "Deep eye shadows from too much lighting contrast",
      "Too little light",
      "A blue colour cast",
      "Rolling shutter"
     ],
     "a": 0,
     "w": "Direct sun is a hard key with only sky fill, so shadows are very deep. {{fh-ch12}}"
    },
    {
     "t": "take",
     "i": [
      "Count amps before you plug lamps in.",
      "In sun, fill, diffuse or move; do not just open the lens.",
      "Pick one working f-stop and judge the lighting against it."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "High-key, low-key and the direction of light",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Film Art lists four features of lighting: quality (hard or soft), direction, source and colour. Earlier lessons covered quality and motivation, so this one adds direction and key style. {{fa-ch4}}"
    },
    {
     "t": "table",
     "title": "Direction of light and its effect",
     "head": [
      "Direction",
      "Effect"
     ],
     "rows": [
      [
       "Frontal (beside the camera)",
       "Removes shadows and flattens the face"
      ],
      [
       "Side",
       "Sculpts the face and brings out texture"
      ],
      [
       "Back",
       "Alone it gives a silhouette; with front light it gives an edge or rim"
      ],
      [
       "Under",
       "Distorts; suits horror, or a real source such as a fire or a flashlight"
      ],
      [
       "Top",
       "Shapes cheekbones and separates a figure from the background"
      ]
     ],
     "src": "Summary of {{fa-ch4}}"
    },
    {
     "t": "p",
     "x": "Shadows are attached (the shading from an object's own shape, such as a nose on a cheek) or cast (thrown on another surface). Highlights show texture. {{fa-ch4}}"
    },
    {
     "t": "h",
     "x": "High-key and low-key"
    },
    {
     "t": "p",
     "x": "High-key light uses fill and backlight for low contrast, soft shadows and detail in the dark areas. It suits comedy, adventure and most drama, even night scenes. {{fa-ch4}}"
    },
    {
     "t": "p",
     "x": "Low-key light uses hard sidelight with little or no fill. It gives deep shadows and is common in horror and film noir. {{fa-ch4}}"
    },
    {
     "t": "p",
     "x": "The three-point set-up is redone for each camera position. Overlapping several key lights keeps light constant on a moving actor, and moving through dappled light does the opposite. {{fa-ch4}}"
    },
    {
     "t": "h",
     "x": "A short history that explains the habits"
    },
    {
     "t": "p",
     "x": "Studios moved from glass-roofed daylight to artificial light between 1914 and 1917. The Cheat (1915) used one or two hard sources with no fill, which its maker sold to exhibitors as Rembrandt lighting. {{fa-ch12}}"
    },
    {
     "t": "p",
     "x": "Not every film follows the studio system. Breathless was shot on location in available light, so faces sometimes fall into shadow, and Italian neorealism and the New Wave also avoided studio three-point lighting. {{fa-ch12}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "If a cut forces you to choose, keep the spirit of the light rather than its literal continuity. A cinematographer on Alexander kept the intended atmosphere over strictly matching light across an axis change. {{fa-ch6}}"
    },
    {
     "t": "activity",
     "x": "Light one face with a single lamp from the front, then the side, then behind, then from below. Photograph all four and name the mood of each."
    },
    {
     "t": "check",
     "q": "Which set-up gives chiaroscuro?",
     "o": [
      "High-key with lots of fill",
      "Low-key with hard sidelight and little fill",
      "Flat frontal light",
      "Soft top light"
     ],
     "a": 1,
     "w": "Low-key uses hard sidelight with little fill. {{fa-ch4}}"
    },
    {
     "t": "check",
     "q": "A light directly beside the camera tends to:",
     "o": [
      "Sculpt the face",
      "Flatten it",
      "Make a silhouette",
      "Distort it from below"
     ],
     "a": 1,
     "w": "Frontal light removes shadow and flattens. {{fa-ch4}}"
    },
    {
     "t": "take",
     "i": [
      "Direction decides what light does to a face. {{fa-ch4}}",
      "High-key is low contrast; low-key is hard sidelight with little fill. {{fa-ch4}}",
      "Look at the genre and period when you copy a style. {{fa-ch12}}"
     ]
    }
   ]
  },
  {
   "id": "l7",
   "title": "Light as form, tone and story",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Light as form"
    },
    {
     "t": "p",
     "x": "Rudolf Arnheim argued that the person behind the camera decides how each object reads, by placing lamps and shadows. The same face can look bony and vivid or flat and grey. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "Arnheim also says a single bright beam across a dark room is an effect that black and white can do well and colour often cannot. {{arnheim-making}}"
    },
    {
     "t": "h",
     "x": "Tone decides what is seen"
    },
    {
     "t": "p",
     "x": "Block says a line or a shape is seen only where there is tonal contrast. {{block-lines}}"
    },
    {
     "t": "p",
     "x": "To find the linear motif in a frame, squint at it or look through a contrast-viewing glass. Then light and dress the set to keep the motif the story needs. {{block-lines}}"
    },
    {
     "t": "p",
     "x": "Block's test is coincidence of tone. When the tonal range matches the subject, the subject shows. When it does not, the subject hides. A face in shadow can move the audience's attention to sound. {{block-tone}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Judge tone on a black-and-white monitor or with a contrast glass. Colour can hide tone that the audience will see. {{block-tone}}"
    },
    {
     "t": "h",
     "x": "Light as story and mood"
    },
    {
     "t": "p",
     "x": "The same events can read as farce or as thriller. McKee's test keeps the events fixed and changes the light, colour, lens and casting. Bright full shots and a comic cast make the scene funny; night, tight canted shots and muted colour make it frightening. {{mckee-scene}}"
    },
    {
     "t": "p",
     "x": "Light sets the mood, but the scene's turn sets the emotion. {{mckee-scene}}"
    },
    {
     "t": "p",
     "x": "Brown makes the same demand in his lighting-as-storytelling chapter: light should motivate the story, not only expose the set. {{brown-lighting-story}}"
    },
    {
     "t": "p",
     "x": "Our inference: each genre carries a convention about its look, and lighting is where that convention is tested. McKee says a genre's conventions are a limit to honour and then vary, not a free choice of mood. {{mckee-genre}}"
    },
    {
     "t": "h",
     "x": "Image systems in light"
    },
    {
     "t": "p",
     "x": "McKee calls a repeated category of images an image system. Water in Les Diaboliques and light and shadow in Casablanca repeat with variation, below conscious notice. {{mckee-text}}"
    },
    {
     "t": "p",
     "x": "For lighting, that means choosing one recurring light source or colour per film, then checking it across the grade. It should not be decoration on each shot. {{mckee-text}}"
    },
    {
     "t": "h",
     "x": "Research the world you are lighting"
    },
    {
     "t": "p",
     "x": "McKee describes a story's setting in four dimensions: period, duration, location and level of conflict. {{mckee-setting}}"
    },
    {
     "t": "p",
     "x": "Our inference: before you light a period or a place, check what its light, weather and interiors really looked like. The lighting must fit that world. {{mckee-setting}}"
    },
    {
     "t": "check",
     "q": "According to Block, what makes a line visible?",
     "o": [
      "Tonal contrast",
      "Colour alone",
      "Sharp focus",
      "Camera movement"
     ],
     "a": 0,
     "w": "A line is seen only where there is tonal contrast. {{block-lines}}"
    },
    {
     "t": "check",
     "q": "In McKee's mood test, what is kept fixed?",
     "o": [
      "The light and lens",
      "The events",
      "The cast",
      "The colour grade"
     ],
     "a": 1,
     "w": "The events are fixed, and the light, colour, lens and casting change the mood. {{mckee-scene}}"
    },
    {
     "t": "take",
     "i": [
      "Light is form: the lamp and shadow decide how an object reads. {{arnheim-making}}",
      "Test tone on a black-and-white monitor or with a contrast glass. {{block-tone}}",
      "Light sets the mood, and the turn sets the emotion. {{mckee-scene}}"
     ]
    }
   ]
  },
  {
   "id": "l8",
   "title": "Filters, flicker and mixed light",
   "min": 20,
   "blocks": [
    {
     "t": "h",
     "x": "Filters change the light before it reaches the film"
    },
    {
     "t": "p",
     "x": "Filter density adds. 0.3 is one stop, 0.6 is two stops and 0.9 is three stops, so stacking a 0.3 and a 0.6 gives three stops. {{fh-ch8}}"
    },
    {
     "t": "p",
     "x": "Brown's colour-balance chapter gives the mired method: mired value is 1,000,000 divided by the colour temperature, and the filtration is the target mired value minus the source mired value. {{brown-balance}}"
    },
    {
     "t": "ol",
     "i": [
      "Find the source and target temperatures. Daylight is about 5,600 K; tungsten is 3,200 K.",
      "Convert each to mireds. 1,000,000 ÷ 5,600 = 178.6, and 1,000,000 ÷ 3,200 = 312.5.",
      "Subtract the source from the target. 312.5 − 178.6 is about 134 mireds. Daylight shot with tungsten balance needs an orange (CTO-type) filter of about that shift. Our arithmetic; check the maker's chart for the nearest sheet."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Polarisers lose about 1 2/3 to 2 stops and work best about 90 degrees from the sun. Check the meter reading with the filter on. {{brown-balance}}"
    },
    {
     "t": "h",
     "x": "Flicker and shutter"
    },
    {
     "t": "p",
     "x": "Discharge sources such as HMI and fluorescent light flicker when the shutter and the mains frequency do not match. Brown calls for crystal-controlled generators and flicker-free ballasts for speeds that are not in sync. {{brown-production}}"
    },
    {
     "t": "p",
     "x": "Our worked example. At 24 fps on 60 Hz mains, a 144 degree shutter gives 144 ÷ 360 × 1/24 = 1/60 second, which is in sync. On 50 Hz mains, 172.8 degrees gives 172.8 ÷ 360 × 1/24 = 1/50 second. The arithmetic is ours."
    },
    {
     "t": "h",
     "x": "Monitors, roll bars and metamerism"
    },
    {
     "t": "p",
     "x": "Brown gives a monitor rule: a 180 degree shutter at 29.97 fps avoids roll bars in video transfer. For 24 fps sync, a 144 degree shutter at 23.976 fps reduces roll bars but does not remove them, and costs about a third of a stop. {{brown-special}}"
    },
    {
     "t": "p",
     "x": "Spot meters can underread a video monitor, often by a stop or more, so Brown suggests trusting test prints over a spot reading. {{brown-special}}"
    },
    {
     "t": "p",
     "x": "Paint, wardrobe and set colours that match under one light may not match under another. This is metamerism. Judge them under the light they will meet on set. {{brown-color}}"
    },
    {
     "t": "p",
     "x": "Standard sources in the CIE set include illuminant A, a tungsten source that Brown puts at 2,854 K (other references give 2,856 K), and C, about 6,500 K daylight. 5,500 K is still the common standard for lighting instruments. {{brown-color}}"
    },
    {
     "t": "check",
     "q": "At 24 fps on 60 Hz mains, which shutter angle gives 1/60 second?",
     "o": [
      "90 degrees",
      "144 degrees",
      "172.8 degrees",
      "180 degrees"
     ],
     "a": 1,
     "w": "144 ÷ 360 × 1/24 = 1/60. Our arithmetic. {{brown-production}}"
    },
    {
     "t": "check",
     "q": "Why judge paint or wardrobe under the light it will meet?",
     "o": [
      "Metamerism",
      "Flicker",
      "Roll bars",
      "ND density"
     ],
     "a": 0,
     "w": "Colours that match in one light can differ in another. {{brown-color}}"
    },
    {
     "t": "take",
     "i": [
      "Density adds: 0.3 is one stop. {{fh-ch8}}",
      "Mired shift is 1,000,000 divided by the colour temperature. {{brown-balance}}",
      "Check flicker with shutter and mains together. {{brown-production}}"
     ]
    }
   ]
  },
  {
   "id": "l9",
   "title": "Big lamps, HMIs and greenscreen cautions",
   "min": 16,
   "blocks": [
    {
     "t": "h",
     "x": "Big lamps"
    },
    {
     "t": "p",
     "x": "Brown warns never to point a 5K, 10K or 20K straight up. The lens blocks ventilation and the unit overheats, and the filament can sag against the glass. The bulb fails and the lens can crack. {{brown-equipment}}"
    },
    {
     "t": "p",
     "x": "Large HMIs and xenons follow the same rule. {{brown-equipment}}"
    },
    {
     "t": "h",
     "x": "HMIs"
    },
    {
     "t": "p",
     "x": "An HMI needs a ballast, which limits the current. Early ballasts were very heavy; electronic ballasts are lighter and can run on a square wave, which solves the flicker problem. {{brown-equipment}}"
    },
    {
     "t": "p",
     "x": "Brown says a colour rendering index of 90 or above is needed for film and video work, and that most HMIs exceed it. The check matters most for fluorescent and other gas-discharge sources. {{brown-equipment}}"
    },
    {
     "t": "p",
     "x": "When an HMI is dimmed, its colour temperature shifts slightly cooler. A tungsten bulb does the opposite and gets warmer as the voltage drops. {{brown-equipment}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The rare-earth names in our copy of the HMI section are garbled by scanning, so this lesson does not repeat them."
    },
    {
     "t": "h",
     "x": "Greenscreen"
    },
    {
     "t": "p",
     "x": "Chroma key makes one colour transparent and puts another image in its place. The colour is replaced across the whole scene, so a foreground subject with bright green eyes would lose them. Choose a screen colour that does not occur in the foreground. {{brown-special}}"
    },
    {
     "t": "p",
     "x": "Brown suggests shooting a clean plate, the lit background with the subject removed, as a reference for post-production. {{brown-special}}"
    },
    {
     "t": "p",
     "x": "There is no general agreement on whether the background should match the foreground exposure or run up to a stop under or over. Ask the person who will do the final composite before you shoot. {{brown-special}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The 30 IRE separation figure in the book comes from one maker's bulletin. Treat vendor numbers as that vendor's, and confirm them with your compositor. {{brown-special}}"
    },
    {
     "t": "check",
     "q": "Why must you choose a screen colour that is absent from the foreground?",
     "o": [
      "The colour is replaced across the whole scene",
      "Green is brighter than blue",
      "It saves a stop of light",
      "It removes flicker"
     ],
     "a": 0,
     "w": "Whatever colour is keyed becomes transparent everywhere in the frame. {{brown-special}}"
    },
    {
     "t": "check",
     "q": "What is the safe way to aim a 5K?",
     "o": [
      "Straight up",
      "Never straight up",
      "Always at the ceiling",
      "Only with gels on the lens"
     ],
     "a": 1,
     "w": "Pointing it straight up blocks ventilation and lets the filament sag. {{brown-equipment}}"
    },
    {
     "t": "take",
     "i": [
      "Never aim a big lamp straight up. {{brown-equipment}}",
      "HMIs need a ballast and a high CRI. {{brown-equipment}}",
      "Ask the compositor for the exposure target. {{brown-special}}"
     ]
    }
   ]
  },
  {
   "id": "l10",
   "title": "Colour as a control",
   "min": 16,
   "blocks": [
    {
     "t": "h",
     "x": "Colours change each other"
    },
    {
     "t": "p",
     "x": "Block calls this simultaneous contrast: a colour takes on qualities from its surroundings within a single shot. A colour placed on a black background shifts in brightness. {{block-colour}}"
    },
    {
     "t": "p",
     "x": "Complementary colours placed side by side raise each other's apparent saturation. The pairs are magenta and green, red and cyan, and yellow and blue. {{block-colour}}"
    },
    {
     "t": "h",
     "x": "Control colour in this order"
    },
    {
     "t": "p",
     "x": "Brown says to begin colour control with locations, art direction and costume, then the time of day, lighting and grip control. Use the simplest means that reaches the goal. {{brown-palette}}"
    },
    {
     "t": "p",
     "x": "When you desaturate, primaries hold up better than pastels. Skin tones are generally pastel, so they lose colour faster than a primary in the frame. {{brown-palette}}"
    },
    {
     "t": "h",
     "x": "Daylight changes colour"
    },
    {
     "t": "p",
     "x": "Block describes sunrise as more lavender, noon daylight as bluer, and sunset as more red. Overcast skies read bluer. Nearby surfaces add their own colour: red brick adds red, and a forest adds green. {{block-colour}}"
    },
    {
     "t": "p",
     "x": "He uses magic hour for the daylight when the sun is just below the horizon, which gives shadowless blue light. {{block-colour}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Terms differ. Many crews use golden hour for the warm light near sunrise and sunset. Say which light you mean, with a time and a colour temperature."
    },
    {
     "t": "h",
     "x": "Colour basics from Brown"
    },
    {
     "t": "p",
     "x": "Brown calls light an additive system of colour. Red, green and blue are the primaries, and all of them mixed make white. Paint is a subtractive system, and mixing paint removes light. {{brown-color}}"
    },
    {
     "t": "p",
     "x": "The Purkinje effect explains movie moonlight. In dim light blue looks brighter than red, so moonlight is perceived as slightly bluish. {{brown-color}}"
    },
    {
     "t": "check",
     "q": "Which pair raises each other's apparent saturation?",
     "o": [
      "Red and cyan",
      "Red and orange",
      "Blue and green",
      "Yellow and orange"
     ],
     "a": 0,
     "w": "Complementary pairs sit opposite on the colour wheel. {{block-colour}}"
    },
    {
     "t": "check",
     "q": "In Brown's order, what comes first in colour control?",
     "o": [
      "Locations, art direction and costume",
      "The grade",
      "Filters",
      "A lens change"
     ],
     "a": 0,
     "w": "Use the simplest means first. {{brown-palette}}"
    },
    {
     "t": "take",
     "i": [
      "A colour is changed by its neighbours. {{block-colour}}",
      "Start with sets and costume, not the grade. {{brown-palette}}",
      "Name the light you mean. {{block-colour}}"
     ]
    }
   ]
  },
  {
   "id": "l11",
   "title": "The lecturer's method: Karl Freund",
   "min": 24,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "Karl Freund (1890 to 1969) was a cinematographer and director who photographed Metropolis (1927) and Dracula (1931). {{wiki-freund}}"
    },
    {
     "t": "p",
     "x": "We read his own account of filming I Love Lucy in full, as reproduced on a third-party site, and Wikipedia as excerpts. The record is partial to rich, with the caveat that we did not see the original print. {{freund-1953}} {{wiki-freund}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Name what the show needs. Three motion picture cameras were used instead of TV cameras, for editing flexibility and better picture than kinescope recording. {{freund-1953}}",
      "Place the lights to serve the audience and the cameras. The lights had to go above the stage, so the audience had a clear view and the cameras could move without floor cables. {{freund-1953}}",
      "Find the problem in the result. Overhead light was unflattering, and prints that looked right in a projection room showed too much contrast on a closed TV circuit. He names subject lighting contrast as the greatest difference between standard motion picture technique and TV film. {{freund-1953}}",
      "Choose the fix that changes the least. He chose to expose the negative with a subject lighting contrast considerably lower than normal for black-and-white film, and to process the negative and print in the normal way. {{freund-1953}}",
      "Plan the light from rehearsal. At the end of the second day the cameraman sees a run-through and notes the camera positions, and instructs the electrical crew where lights are to go. {{freund-1953}}",
      "Keep the changes simple during the shoot. The only floor lights are on each camera dolly above the lens, controlled by dimmers. {{freund-1953}}"
     ]
    },
    {
     "t": "p",
     "x": "Wikipedia adds that his company Photo Research Corporation made the Norwood Director direct-reading incident light meter with Donald W. Norwood, and that a photometer and a brightness meter earned him two Academy Awards for technical achievement. {{wiki-freund}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Wikipedia says Freund designed a flat lighting system that eliminates shadows. His own account describes lower subject contrast with overhead lights. We follow his own account. Wikipedia also gives two founding dates for Photo Research, 1941 and 1944, and we do not settle which is right. {{wiki-freund}} {{freund-1953}}"
    },
    {
     "t": "table",
     "title": "His constraint and answer, with your parallel (the third column is our adaptation)",
     "head": [
      "Constraint",
      "Freund's answer",
      "Your parallel"
     ],
     "rows": [
      [
       "Audience and mobile cameras",
       "Lights overhead, no floor cables",
       "Lights on stands out of frame, taped cables"
      ],
      [
       "Too much contrast on the delivery chain",
       "Lower subject lighting contrast, normal processing",
       "Add fill, and choose a flat profile only if you will grade"
      ],
      [
       "Several cameras, one light plan",
       "Light worked out at rehearsal",
       "Light once for the setups you will shoot, then meter"
      ],
      [
       "No time to relight",
       "Dimmers on the dolly lights",
       "Dimmable or adjustable lamps, and flags"
      ]
     ],
     "src": "The first two columns are from his account. The third is our adaptation. {{freund-1953}}"
    },
    {
     "t": "h",
     "x": "Worked example: the lighting ratio as a number (illustrative values)"
    },
    {
     "t": "example",
     "title": "Key and fill, in stops",
     "steps": [
      "Freund does not state a ratio in his account. Here is our arithmetic. Measure the shadow side at 80 fc, which is the fill alone, and add 160 fc of key on the lit side. The lit side then reads 160 + 80 = 240 fc.",
      "The ratio is 240 ÷ 80 = 3 to 1, which is log base 2 of 3, about 1.6 stops.",
      "If you raise the fill to 160 fc, the lit side is 320 fc against 160, a ratio of 2 to 1, which is 1 stop. That is a flatter picture.",
      "If you drop the fill to 40 fc, the lit side is 200 fc against 40, a ratio of 5 to 1, about 2.3 stops. That is more contrasty.",
      "Pick the ratio for the delivery chain and the mood, measure it, and write it on the plan sheet."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a meter run"
    },
    {
     "t": "ol",
     "i": [
      "Pick the aperture and ISO you want and look up the footcandles in the Kodak table (for example f/4 at EI 500 needs 40 fc). {{kodak-500t}}",
      "Place the lights from your rehearsal, as Freund did, and note the positions.",
      "With an incident meter or a reliable phone meter, measure at the face for each position the actor will stand in, on the key side and the shadow side.",
      "Work the lighting ratio in stops and compare it with your target.",
      "Adjust, measure again, and record the final numbers."
     ]
    },
    {
     "t": "activity",
     "x": "Do a meter run at three positions and write the readings and the ratio for each."
    },
    {
     "t": "check",
     "q": "What did Freund do about lighting contrast, in his own account?",
     "o": [
      "Raised it",
      "Used a subject lighting contrast considerably lower than normal and processed normally",
      "Ignored it",
      "Removed all lights"
     ],
     "a": 1,
     "w": "He lowered the subject lighting contrast and used normal processing. {{freund-1953}}"
    },
    {
     "t": "check",
     "q": "Key adds 160 fc to a shadow side of 80 fc. What is the lit-to-shadow ratio?",
     "o": [
      "2:1",
      "3:1",
      "5:1",
      "8:1"
     ],
     "a": 1,
     "w": "The lit side is 240 fc and 240 ÷ 80 is 3."
    },
    {
     "t": "check",
     "q": "Where were Freund's floor lights?",
     "o": [
      "On stands in the audience",
      "On each camera dolly above the lens",
      "Under the actors",
      "There were none overhead"
     ],
     "a": 1,
     "w": "The only floor lights were mounted on each camera dolly above the lens. {{freund-1953}}"
    },
    {
     "t": "take",
     "i": [
      "Choose the lighting contrast for the delivery chain. {{freund-1953}}",
      "Measure the light at each position and write it down.",
      "A lighting ratio is a number in stops, not a feeling."
     ]
    }
   ]
  }
 ]
};
