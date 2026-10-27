/* Cinematography: DSLR and analog film (module 1). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["cinematography-1"] = {
 "intro": "A moving image is a stack of exposures, one per frame, so every exposure choice is also a motion choice. This module gives you the language (stops), the rule that sets motion blur (shutter angle) and the habit of changing brightness without changing the look. Lecturer lens: Eadweard Muybridge needed shutters fast enough, and plates sensitive enough, to freeze a galloping horse. His method is a worked case of the trade-off this module teaches: motion, shutter and light.",
 "outcomes": [
  "Convert between shutter angle, frame rate and shutter speed, and choose a speed that gives normal motion blur.",
  "Count stops between two f-numbers, and pick a neutral density filter strength from the count.",
  "Say what changes, besides brightness, when you shoot at a higher frame rate for slow motion.",
  "Pick a frame rate and shutter that avoid mains flicker for the place you are shooting.",
  "Lecturer's method: Run a one-variable test on a moving subject, say what each faster exposure costs in light, and keep the evidence."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Stops: the shared language of light",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "A stop is a doubling or halving of the light reaching the sensor or film. {{wiki-fnumber}}"
    },
    {
     "t": "p",
     "x": "The unit is also called an EV, and each added stop means a factor of two while each subtracted stop means a factor of one half. {{wiki-fnumber}}"
    },
    {
     "t": "p",
     "x": "Every exposure control in a camera is built on that one idea, so learning to count in stops lets you move between lens, shutter, sensitivity and filters without a calculator."
    },
    {
     "t": "h",
     "x": "The f-number scale"
    },
    {
     "t": "p",
     "x": "The f-number is the focal length divided by the diameter of the entrance pupil. {{wiki-fnumber}}"
    },
    {
     "t": "p",
     "x": "Standard lenses mark a scale that follows the powers of the square root of 2: f/1, f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16, f/22. {{wiki-fnumber}}"
    },
    {
     "t": "p",
     "x": "Each step to a bigger number halves the light-gathering area, so the image becomes one stop darker. {{wiki-fnumber}}"
    },
    {
     "t": "table",
     "title": "The full-stop f-number scale and the light each setting passes (relative to f/1.4)",
     "head": [
      "f-number",
      "Relative light",
      "Stops darker than f/1.4"
     ],
     "rows": [
      [
       "f/1.4",
       "1",
       "0"
      ],
      [
       "f/2",
       "1/2",
       "1"
      ],
      [
       "f/2.8",
       "1/4",
       "2"
      ],
      [
       "f/4",
       "1/8",
       "3"
      ],
      [
       "f/5.6",
       "1/16",
       "4"
      ],
      [
       "f/8",
       "1/32",
       "5"
      ],
      [
       "f/11",
       "1/64",
       "6"
      ],
      [
       "f/16",
       "1/128",
       "7"
      ]
     ],
     "src": "Scale from {{wiki-fnumber}}; the relative-light column is our arithmetic (each step halves the light)."
    },
    {
     "t": "fig",
     "id": "cinematography-stops",
     "title": "Every full stop halves the light",
     "cap": "The f-number scale is a geometric sequence. Moving right closes the aperture one stop at a time."
    },
    {
     "t": "h",
     "x": "Speed in the same units"
    },
    {
     "t": "p",
     "x": "Film and sensor sensitivity use the same logic. In the ISO arithmetic scale, doubling the number doubles the sensitivity, so ISO 400 is one stop faster than ISO 200. {{wiki-filmspeed}}"
    },
    {
     "t": "p",
     "x": "The ISO system combines the older ASA arithmetic scale with the German DIN logarithmic scale, which is why a box may read ISO 100/21°. {{wiki-filmspeed}}"
    },
    {
     "t": "example",
     "title": "Worked example: counting stops (illustrative settings)",
     "steps": [
      "A scene is correctly exposed at ISO 200, f/4. You want the same exposure at f/8.",
      "Count the full stops from f/4 to f/8: f/4, f/5.6, f/8. That is two stops darker.",
      "To compensate, you need two stops more sensitivity: ISO 200 becomes 400, then 800.",
      "Check: the aperture area is a quarter as big (two halvings) and the sensitivity is four times higher (two doublings), so the exposure is unchanged."
     ]
    },
    {
     "t": "terms",
     "i": [
      [
       "Stop",
       "A factor of two in light. One stop up doubles the light; one stop down halves it."
      ],
      [
       "EV",
       "Exposure value; the unit that counts stops of exposure."
      ],
      [
       "f-number",
       "Focal length divided by entrance pupil diameter; the lens's light-gathering setting."
      ],
      [
       "ISO",
       "A sensitivity rating. Doubling the number doubles the sensitivity."
      ]
     ]
    },
    {
     "t": "activity",
     "x": "Write the f-number scale from memory down to f/16, then circle every pair that is two stops apart. Check it against the table."
    },
    {
     "t": "check",
     "q": "A lens is set to f/2.8. You close it to f/8. By how many stops does the image darken?",
     "o": [
      "Two",
      "Three",
      "Four",
      "Five"
     ],
     "a": 1,
     "w": "f/2.8 to f/4, f/5.6 and f/8 is three full steps, so three stops. {{wiki-fnumber}}"
    },
    {
     "t": "check",
     "q": "Which change adds exactly one stop of exposure?",
     "o": [
      "ISO 200 to ISO 300",
      "f/8 to f/5.6",
      "f/8 to f/4",
      "ISO 400 to ISO 200"
     ],
     "a": 1,
     "w": "Opening from f/8 to f/5.6 doubles the aperture area. f/8 to f/4 would be two stops. {{wiki-fnumber}}"
    },
    {
     "t": "take",
     "i": [
      "A stop is a factor of two in light. {{wiki-fnumber}}",
      "Aperture, shutter and sensitivity all count in stops, so they trade with each other.",
      "Count steps on the scale instead of reaching for a formula."
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Frame rate and shutter angle",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "A film camera exposes a frame while a rotating disc shutter is open and moves the next frame into place while it is closed. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "The size of the opening is the shutter angle, and it fixes what share of each frame interval the film is exposed. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "The relationship is exposure time divided by frame interval equals shutter angle divided by 360°. {{wiki-shutter}}"
    },
    {
     "t": "fig",
     "id": "cinematography-shutterangle",
     "title": "A 180° shutter at 24 frames per second",
     "cap": "Half the disc is open, so the film is exposed for half of each 1/24 s interval."
    },
    {
     "t": "h",
     "x": "The 180° starting point"
    },
    {
     "t": "p",
     "x": "A 180° shutter angle is considered normal, and it controls how much motion blur is recorded in each frame. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "A tight shutter angle constricts motion blur and a wide one allows it. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "At 24 frames per second the frame interval is 1/24 s, so a 180° shutter exposes each frame for 1/48 s. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "The LMU book gives 12 frames a second as the minimum for the eye to read motion. Twenty-four is the cinema standard, well above that floor. {{lmu-nonsense}}"
    },
    {
     "t": "p",
     "x": "Digital cameras have no spinning disc, so they state the same idea as a shutter speed, and 1/50 s at 24 fps works out to about 173°. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "The 180° figure was a camera setting in the 1920s, not a rule. Gregory's catalogue gives Institute Standard 180°, Bell and Howell 170°, Eyemo 160°, DeVry 135°, and the Akeley at a fixed 230°, which admits about 30 per cent more light. {{gregory-motion-picture}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Where the television system is NTSC (North America, Japan and others), cameras that say 24p usually record 23.976 frames per second, and 30 fps is really 29.97. The difference is 0.1 per cent. The shutter arithmetic on this page is unaffected at this precision. {{fh-ch5}}"
    },
    {
     "t": "table",
     "title": "Shutter speed that gives each angle (our arithmetic from the formula)",
     "head": [
      "Frame rate",
      "360°",
      "180°",
      "90°",
      "45°"
     ],
     "rows": [
      [
       "24 fps",
       "1/24 s",
       "1/48 s",
       "1/96 s",
       "1/192 s"
      ],
      [
       "25 fps",
       "1/25 s",
       "1/50 s",
       "1/100 s",
       "1/200 s"
      ],
      [
       "30 fps",
       "1/30 s",
       "1/60 s",
       "1/120 s",
       "1/240 s"
      ],
      [
       "60 fps",
       "1/60 s",
       "1/120 s",
       "1/240 s",
       "1/480 s"
      ]
     ],
     "src": "Each cell is (angle ÷ 360) ÷ frame rate. Cameras round to the nearest speed they offer. {{wiki-shutter}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "Shutter angle is a share of the frame interval, so when the frame rate changes, the shutter speed that gives the same blur changes with it."
    },
    {
     "t": "h",
     "x": "What the angle does to motion"
    },
    {
     "t": "p",
     "x": "Tight shutters give a stuttering, stop-motion look that has been used in action and war films, and they help capture particles flying through the air. {{wiki-shutter}}"
    },
    {
     "t": "p",
     "x": "Because a digital shutter does not need to advance film, it can stay open for nearly the whole frame, which allows longer motion blur than film can record at sync-sound speeds. {{wiki-shutter}}"
    },
    {
     "t": "example",
     "title": "Worked example: from speed to angle and back",
     "steps": [
      "You shoot at 25 fps (a common rate in regions with 50 Hz mains and PAL television; our assumption). The frame interval is 1/25 s.",
      "A 180° shutter is half of that interval: 1/50 s.",
      "Your camera offers 1/60 s. The angle is 360° × 25 ÷ 60 = 150°, slightly tighter, so slightly crisper movement.",
      "Now the reverse: the same camera at 1/500 s gives 360° × 25 ÷ 500 = 18°, a very tight shutter with almost no blur."
     ]
    },
    {
     "t": "activity",
     "x": "Set your camera to 24 fps and record the same hand wave at 1/48 (or the nearest speed), 1/125 and 1/500. Note how the blur changes."
    },
    {
     "t": "check",
     "q": "At 30 fps, what shutter speed gives a 180° angle?",
     "o": [
      "1/30 s",
      "1/60 s",
      "1/100 s",
      "1/120 s"
     ],
     "a": 1,
     "w": "The interval is 1/30 s and half of it is 1/60 s. {{wiki-shutter}}"
    },
    {
     "t": "check",
     "q": "Compared with 180°, a 45° shutter makes motion look:",
     "o": [
      "Smoother with more blur",
      "Sharper and more stuttering",
      "Brighter",
      "The same"
     ],
     "a": 1,
     "w": "A tight angle constricts blur and gives a stuttering look. {{wiki-shutter}}"
    },
    {
     "t": "take",
     "i": [
      "Shutter angle is the share of each frame interval the sensor or film is exposed. {{wiki-shutter}}",
      "180° is the normal starting point. {{wiki-shutter}}",
      "Recalculate the shutter speed whenever the frame rate changes."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Changing brightness without changing the look",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "In video, two settings are usually fixed once you have chosen the look: the frame rate and the shutter angle. Our reading of the 180° rule is that this leaves aperture, sensitivity and filters to carry the exposure."
    },
    {
     "t": "p",
     "x": "Motion pictures make limited use of aperture control, and cinematographers usually pick one aperture for interiors and another for exteriors, then adjust exposure with filters or light levels. {{wiki-dof}}"
    },
    {
     "t": "p",
     "x": "The reason is consistency: depth of field changes with the aperture, so changing it to fix exposure also changes how much is in focus. {{wiki-dof}}"
    },
    {
     "t": "h",
     "x": "Neutral density filters"
    },
    {
     "t": "p",
     "x": "A neutral density (ND) filter cuts light without changing colour, so it lets you keep a wide aperture and a normal shutter in bright light. This is a standard technique and the filter markings below are our addition, not from the sources we read."
    },
    {
     "t": "p",
     "x": "ND strength is often marked as optical density, where 0.3 equals one stop, 0.6 equals two, 0.9 equals three and 1.2 equals four. The arithmetic is simple: a density D blocks light by a factor of 10 to the power D."
    },
    {
     "t": "p",
     "x": "Film-world ND filters are marked in steps of 0.1, and each 0.1 is a third of a stop. {{fh-ch8}} When you stack two ND filters you add their densities (0.3 plus 0.6 is 0.9, three stops), whereas the filter factors multiply (2 times 4 is 8). {{fh-ch8}} Some filters carry the factor instead of the density, so a filter marked 2X is one stop and one marked 4X is two. {{fh-ch8}}"
    },
    {
     "t": "p",
     "x": "Video-style ND filters are often marked as fractions instead: 1/4, 1/16 and 1/64 are two, four and six stops. {{fh-ch8}} Variable ND filters, built from two polarising layers, let you dial the strength, but some neutral density filters have poor optics, so test yours for softening and for dark corners, especially with wide lenses. {{fh-ch8}}"
    },
    {
     "t": "table",
     "title": "ND filter strengths (our arithmetic)",
     "head": [
      "Density",
      "Stops",
      "Light passed",
      "Marked as"
     ],
     "rows": [
      [
       "0.3",
       "1",
       "1/2",
       "ND2"
      ],
      [
       "0.6",
       "2",
       "1/4",
       "ND4"
      ],
      [
       "0.9",
       "3",
       "1/8",
       "ND8"
      ],
      [
       "1.2",
       "4",
       "1/16",
       "ND16"
      ],
      [
       "1.8",
       "6",
       "1/64",
       "ND64"
      ]
     ],
     "src": "Check: 10^0.3 is about 2, 10^1.2 is about 15.8, 10^1.8 is about 63.1."
    },
    {
     "t": "example",
     "title": "Worked example: bright day, shallow focus (illustrative numbers)",
     "steps": [
      "At base ISO 100 and the 180° shutter of 1/50 s, a bright, hazy outdoor scene is correctly exposed at f/11.",
      "You want f/2.8 so the background softens. Count the stops from f/11 to f/2.8: f/11, f/8, f/5.6, f/4, f/2.8. That is four stops more light.",
      "You cannot lower ISO below base, and you should not change the shutter, so the extra light has to be removed in front of the lens.",
      "Four stops is ND 1.2 (ND16). With it on, f/2.8, 1/50 s and ISO 100 gives the same exposure that f/11 gave before.",
      "If the filter you own is stronger than needed (a six-stop ND 1.8, say), it removes two stops too many. Either fit a weaker one or open the lens two more stops, to f/1.4 if the lens allows. If it is weaker, close the lens a little. Fixed-strength filters mean you often settle for a nearby aperture."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Fix the order of your decisions. First frame rate and shutter angle for the motion you want. Then aperture for the depth of field you want. Then ISO and ND filters to land the exposure."
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "With digital video, a shot that is slightly underexposed is easier to rescue in post than one that is badly overexposed, because blown highlights have no detail left to recover. {{fh-ch3}} Keep gain or ISO low and raise it only when you cannot get the exposure any other way, since it adds electronic noise. {{fh-ch3}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Gain and ISO do not make the sensor more sensitive. They amplify the signal after it leaves the sensor, so noise rises with the picture and highlights that already clipped stay clipped. On many digital cameras a higher ISO also shifts latitude towards the highlights, and a lower one towards the shadows, which is the opposite of film, where a faster stock curtails highlights. Check your own camera's native ISO. {{fh-ch3}} {{fh-ch5}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Cheap ND filters can add a colour cast or soften the image. Test any filter against a grey card before an important shoot. This warning is our advice."
    },
    {
     "t": "activity",
     "x": "Pick a bright scene. Find the exposure with no filter, then decide the aperture you want and work out the ND strength you need before you buy or borrow one."
    },
    {
     "t": "check",
     "q": "You need to lose five stops of light and filters are marked by density. Which density is closest?",
     "o": [
      "0.9",
      "1.2",
      "1.5",
      "2.4"
     ],
     "a": 2,
     "w": "Five stops is a factor of 32. Density 1.5 gives 10^1.5, about 31.6. That is the match."
    },
    {
     "t": "check",
     "q": "Why do cinematographers usually avoid changing aperture to fix exposure within a scene?",
     "o": [
      "It is not possible on cinema lenses",
      "Depth of field changes with aperture",
      "It changes the colour",
      "It changes the frame rate"
     ],
     "a": 1,
     "w": "Aperture changes depth of field, which would change the look between shots. {{wiki-dof}}"
    },
    {
     "t": "take",
     "i": [
      "Fix frame rate and shutter angle first, then choose aperture, then land exposure with ISO and ND.",
      "ND density 0.3 is one stop.",
      "Work the stop count before you buy a filter."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Slow motion, flicker and rolling shutter",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Slow motion is made by shooting at a higher frame rate and playing the frames back at a lower one. Shooting at 48 fps and playing at 24 fps gives half speed."
    },
    {
     "t": "p",
     "x": "That is simple arithmetic, but it has a cost: at a 180° shutter the exposure time per frame shrinks as the frame rate rises."
    },
    {
     "t": "example",
     "title": "Worked example: the light cost of slow motion (illustrative)",
     "steps": [
      "At 24 fps with 180°, exposure is 1/48 s.",
      "At 48 fps with 180°, exposure is 1/96 s. That is half as long, so one stop less light.",
      "At 60 fps with 180°, exposure is 1/120 s. The ratio 120 ÷ 48 is 2.5, and log base 2 of 2.5 is about 1.3, so you lose about one and a third stops.",
      "At 120 fps with 180°, exposure is 1/240 s. The ratio is 5, which is about 2.3 stops.",
      "You must add that light back with a wider aperture, higher ISO or more lamps."
     ]
    },
    {
     "t": "table",
     "title": "Light lost when slow motion keeps a 180° shutter (our arithmetic)",
     "head": [
      "Frame rate",
      "Shutter speed",
      "Stops lost vs 24 fps",
      "Playback speed at 24 fps"
     ],
     "rows": [
      [
       "24 fps",
       "1/48 s",
       "0",
       "100%"
      ],
      [
       "48 fps",
       "1/96 s",
       "1",
       "50%"
      ],
      [
       "60 fps",
       "1/120 s",
       "about 1.3",
       "40%"
      ],
      [
       "120 fps",
       "1/240 s",
       "about 2.3",
       "20%"
      ]
     ],
     "src": "Stops lost = log2(new shutter speed ÷ 48)."
    },
    {
     "t": "p",
     "x": "There are two ways to make slow motion, and they look different. Shooting at a higher frame rate records many continuous frames, so the slowed action stays smooth. Shooting at the normal rate and slowing it in post repeats each frame, so motion can look jerky and the ordinary motion blur is stretched out. {{fh-ch9}} Software that interpolates new frames can improve a post slowdown, and the handbook suggests a very fast shutter, under 1/2000 s, if you plan to do that. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "High frame rates also steady a shaky camera, because the jolts are spread further apart in time. {{fh-ch9}} At the far end, a high-speed camera at 250 fps stretches one second into more than ten seconds at 24p (our arithmetic: 250 ÷ 24 is about 10.4). {{fh-ch9}}"
    },
    {
     "t": "h",
     "x": "Flicker"
    },
    {
     "t": "p",
     "x": "Rolling-shutter sensors scan a frame line by line, so fast flashes or lights that pulse can light only part of the frame. {{wiki-rolling}}"
    },
    {
     "t": "p",
     "x": "Fluorescent lighting and strobes are named as situations that cause this partial exposure. {{wiki-rolling}}"
    },
    {
     "t": "p",
     "x": "The handbook's rule of thumb for ordinary fluorescent tubes is not to use a shutter faster than 1/60 s where the mains is 60 Hz, or 1/50 s where it is 50 Hz, as in the UK and Ireland. {{fh-ch12}} It adds that flicker-free lamps exist and are the better answer when you can choose. {{fh-ch12}} The next lesson works through the full rules."
    },
    {
     "t": "h",
     "x": "Rolling shutter"
    },
    {
     "t": "p",
     "x": "A rolling shutter captures each frame by scanning across the scene, so different rows are recorded at slightly different times. {{wiki-rolling}}"
    },
    {
     "t": "p",
     "x": "It is found in many digital stills and video cameras that use CMOS sensors, and in the consumer market the majority use it. {{wiki-rolling}}"
    },
    {
     "t": "p",
     "x": "The effects include wobble when the camera vibrates, skew when the camera or subject moves sideways, and partial exposure. {{wiki-rolling}}"
    },
    {
     "t": "p",
     "x": "Higher-end cinema cameras read the sensor faster, so their artefacts are milder than those of low-end cameras. {{wiki-rolling}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Film does not have this problem in the same way, because each frame is exposed through the gate at once. The next module explains why DSLR video has it."
    },
    {
     "t": "activity",
     "x": "Pan the camera quickly past a vertical post, then film the same pan at a slower speed. Note how much the post leans. Then record a spinning fan or propeller toy."
    },
    {
     "t": "check",
     "q": "You shoot at 60 fps with a 180° shutter. How does the exposure compare with 24 fps at 180°?",
     "o": [
      "Same",
      "About 1.3 stops darker",
      "One stop brighter",
      "Two stops darker"
     ],
     "a": 1,
     "w": "The exposure time drops from 1/48 s to 1/120 s, a ratio of 2.5, about 1.3 stops. This is our arithmetic from {{wiki-shutter}}."
    },
    {
     "t": "check",
     "q": "What is the main reason handheld telephoto shots wobble on many DSLRs?",
     "o": [
      "Low ISO",
      "Rolling shutter",
      "Wrong white balance",
      "Too much light"
     ],
     "a": 1,
     "w": "Wobble appears when the camera vibrates, especially handheld at telephoto settings. {{wiki-rolling}}"
    },
    {
     "t": "take",
     "i": [
      "Slow motion costs light because the shutter time per frame drops. {{wiki-shutter}}",
      "Rolling shutter causes wobble, skew and partial exposure. {{wiki-rolling}}",
      "Test the lights and the pan speed before you commit to a location."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Choosing a frame rate and shutter for the room you are in",
   "min": 22,
   "blocks": [
    {
     "t": "p",
     "x": "Frame rate, format and shutter speed are project settings. You choose them once, before shooting, and change them rarely. Exposure is a picture control that you adjust on nearly every shot. {{fh-ch3}}"
    },
    {
     "t": "p",
     "x": "On most video cameras the shutter defaults to about half the frame rate. {{fh-ch3}} A DSLR will not do that for you unless it is in an automatic mode, so you set it yourself. A safe starting point for 24p, 25p or 50i is 1/50 s. For 30p it is 1/50 s or 1/60 s, and for 60i or 60p it is 1/60 s. {{fh-ch3}}"
    },
    {
     "t": "h",
     "x": "Why lights flicker on camera"
    },
    {
     "t": "p",
     "x": "Mains-powered discharge lamps, including HMIs and fluorescent tubes, pulse with the supply. The eye does not notice, but a camera can see the pulses unevenly from frame to frame, which shows as brightness flicker. {{fh-ch12}}"
    },
    {
     "t": "p",
     "x": "For HMI lights, the handbook gives three conditions. Use a crystal-controlled camera, a stable power supply, and a frame rate that divides evenly into twice the mains frequency. {{fh-ch12}} Where the mains is 60 Hz, 24 fps works with shutter angles from 60° to 200°, and 144° leaves the most room for error. {{fh-ch12}} Where it is 50 Hz, 25 fps works at any angle, and 24 fps needs a 172.8° shutter. {{fh-ch12}}"
    },
    {
     "t": "table",
     "title": "Flicker-safe settings from the handbook (video values as given there)",
     "head": [
      "Mains",
      "Frame rate",
      "What to set"
     ],
     "rows": [
      [
       "50 Hz (UK, Ireland, most of Europe)",
       "25p or 50i",
       "Shutter 1/50 s or 1/100 s"
      ],
      [
       "50 Hz",
       "24 fps",
       "Shutter angle 172.8° (1/50 s)"
      ],
      [
       "60 Hz (North America)",
       "30p or 60i",
       "Shutter 1/65 s or 1/120 s"
      ],
      [
       "60 Hz",
       "24 fps",
       "Shutter angle 60° to 200°, best at 144° (1/60 s)"
      ]
     ],
     "src": "{{fh-ch12}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "A 172.8° shutter at 24 fps is exactly 1/50 s, which is the shutter speed many DSLRs offer. In the UK and Ireland that setting is also the one that stays clear of mains flicker. Our arithmetic: 360 × 24 ÷ 50 = 172.8."
    },
    {
     "t": "h",
     "x": "Other frame-rate choices"
    },
    {
     "t": "p",
     "x": "Running a camera slower than the project rate, called undercranking, exposes each frame for longer. At 12 fps instead of 24 fps you gain one stop, which the handbook suggests for low-light scenes with no movement, such as night exteriors. {{fh-ch9}} Running faster, called overcranking, gives slow motion whose strength depends on your base rate. In a 30 fps project, 60 fps plays at half speed, and the shorter exposure needs more light. {{fh-ch9}}"
    },
    {
     "t": "example",
     "title": "Worked example: a time-lapse sunset (illustrative)",
     "steps": [
      "The sunset takes two hours (120 minutes) and you want 10 seconds of finished shot in a 24p project. {{fh-ch9}}",
      "10 seconds × 24 fps = 240 frames, so you must expose an average of 240 ÷ 120 = 2 frames a minute, one every 30 seconds. {{fh-ch9}}",
      "Start before the main action and carry on after it, and record more frames than you think you need. You can speed the footage up a little in post, but you cannot add frames. {{fh-ch9}}",
      "A wide lens usually gives the best time-lapse look. With a long lens, individual cars or people can pop into one frame and out of the next. {{fh-ch9}}"
     ]
    },
    {
     "t": "example",
     "title": "Worked example: a 24p interview in a UK office (illustrative)",
     "steps": [
      "The room is lit by ordinary fluorescent tubes, and UK mains is 50 Hz. The rule of thumb is not to go faster than 1/50 s. {{fh-ch12}}",
      "At 24 fps, 1/50 s is 360 × 24 ÷ 50 = 172.8°, so a 1/50 s shutter is already the limit and also the normal setting.",
      "The window light makes the shot too bright at f/2.8. Do not raise the shutter to 1/100 s: our arithmetic puts that at 360 × 24 ÷ 100 = 86.4°, which is faster than the rule allows and risks flicker.",
      "Instead, add ND filtering (lesson 3), or stop the lens down. If you can choose the lamps, flicker-free fluorescent or LED units remove the problem. {{fh-ch12}}"
     ]
    },
    {
     "t": "activity",
     "x": "Find out the mains frequency where you will shoot. Write down the frame rate and shutter speed you would set for 24p there, and the angle each shutter speed gives. Then film a ceiling fluorescent light at 1/50 s and 1/500 s and compare."
    },
    {
     "t": "check",
     "q": "You shoot 24p under ordinary fluorescent tubes on 50 Hz mains. Which shutter speed is safest?",
     "o": [
      "1/50 s",
      "1/125 s",
      "1/250 s",
      "1/1000 s"
     ],
     "a": 0,
     "w": "The rule of thumb is not to use a shutter faster than 1/50 s on 50 Hz mains. {{fh-ch12}}"
    },
    {
     "t": "check",
     "q": "You undercrank a shot to 12 fps with a 180° shutter instead of 24 fps. How does the exposure change?",
     "o": [
      "One stop brighter",
      "One stop darker",
      "Two stops brighter",
      "No change"
     ],
     "a": 0,
     "w": "Each frame is exposed for twice as long, so you gain one stop. {{fh-ch9}}"
    },
    {
     "t": "take",
     "i": [
      "Frame rate and shutter are project settings, and exposure is a per-shot control.",
      "On 50 Hz mains, keep the shutter at 1/50 s or slower under fluorescent or HMI light at 24 fps.",
      "Undercranking adds light and overcranking costs it."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "Choosing a base frame rate",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Before you shoot, choose one base frame rate for the project, then change it only for slow or fast motion. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "24 fps is the film rate, and the standard exposure of 1/48 s per frame gives the blur audiences associate with cinema. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "It is a slow sample rate, so a fast pan across a sharp, busy scene can stutter. This is called judder, strobing or skipping. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "Silent cameras were cranked at about 16 fps, and 24 fps was settled for sound in the late 1920s. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "Talbot writes that sixteen pictures a second was chosen for economy. The Edison kinetoscope needed about thirty for the illusion, and twenty-four would have been practically no better than sixteen. {{talbot-moving-pictures}}"
    },
    {
     "t": "p",
     "x": "A projector flashes each frame two or three times, so the screen flashes 48 to 72 times a second and the light looks steady. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "The old idea that the eye holds an image (persistence of vision) is a weak explanation, because afterimages follow the eye. Beta movement, where flashes in two places read as one moving thing, fits better. {{fh-ch1}}"
    },
    {
     "t": "table",
     "title": "Base frame rates and the look they give",
     "head": [
      "Rate",
      "Look",
      "Fits",
      "Watch for"
     ],
     "rows": [
      [
       "24p (23.976 in NTSC countries)",
       "Filmlike, long blur",
       "Cinema, film-out, low light",
       "Judder on fast pans"
      ],
      [
       "25p",
       "Close to 24p",
       "Former PAL countries; easy to make 50i",
       "Runs 4 per cent faster than 24 film"
      ],
      [
       "30p (29.97)",
       "Neutral",
       "Web; intercutting NTSC standard definition",
       "Awkward for PAL delivery"
      ],
      [
       "50i or 60i",
       "Realistic, like television",
       "News, sport, documentary",
       "Dramas look less like movies; interlace artefacts"
      ],
      [
       "48p, 50p, 60p",
       "Smooth, crisp, little blur",
       "Sport, slow motion, 3D",
       "Heavy data; looks very real"
      ]
     ],
     "src": "Summary of the handbook's frame-rate discussion {{fh-ch2}}; the 4 per cent figure is 25 ÷ 24 = 1.042, which the handbook rounds to 4.1."
    },
    {
     "t": "p",
     "x": "A 24p master converts easily to 25p, 50i and 60i, which is why some filmmakers shoot 24p as a universal master. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "Progressive is the safer choice because progressive converts to interlace easily, but interlace converts back to progressive with some loss. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "Whatever you pick, shoot a test at two rates on the same camera and monitor, then look at it on a big screen. {{fh-ch2}}"
    },
    {
     "t": "h",
     "x": "Gain in decibels"
    },
    {
     "t": "p",
     "x": "Video gain is counted in decibels, and 6 dB doubles the sensitivity, which is one stop. {{fh-ch3}}"
    },
    {
     "t": "example",
     "title": "Worked example: gain and stops (our arithmetic)",
     "steps": [
      "A gain switch offers 0, 3, 6, 9 and 18 dB.",
      "6 dB is one stop, so 12 dB is two stops and 18 dB is three stops (18 ÷ 6).",
      "If a scene needs f/2.8 at 0 dB and you want f/8, that is three stops, so you need 18 dB or an equal change in light."
     ]
    },
    {
     "t": "activity",
     "x": "Shoot the same pan at 24p and 60p on one camera, keeping the shutter near half the frame rate, and note where the 24p version strobes."
    },
    {
     "t": "check",
     "q": "A clean pan across a detailed street shows stutter at 24 fps. Which change helps most without raising the frame rate?",
     "o": [
      "Pan more slowly or throw the background out of focus",
      "Raise the gain",
      "Shoot interlaced",
      "Turn off the viewfinder"
     ],
     "a": 0,
     "w": "Slower pans and a soft background reduce judder. {{fh-ch9}}"
    },
    {
     "t": "check",
     "q": "How many stops of extra sensitivity is a gain of 12 dB?",
     "o": [
      "One",
      "Two",
      "Three",
      "Four"
     ],
     "a": 1,
     "w": "6 dB is one stop, so 12 dB is two stops (our arithmetic). {{fh-ch3}}"
    },
    {
     "t": "take",
     "i": [
      "Pick the base frame rate for the screen you expect, then keep it. {{fh-ch2}}",
      "24p is filmlike but judders on fast pans; 50i or 60i looks like television. {{fh-ch2}}",
      "6 dB of gain is one stop. {{fh-ch3}}"
     ]
    }
   ]
  },
  {
   "id": "l7",
   "title": "Light arithmetic and the pre-shot routine",
   "min": 15,
   "blocks": [
    {
     "t": "h",
     "x": "Distance and angle change exposure"
    },
    {
     "t": "p",
     "x": "Brown gives an inverse-square example: moving a lamp from 11 feet to 8 feet from the subject raises the illumination by one stop, like opening the lens from f/11 to f/8. {{brown-exposure}}"
    },
    {
     "t": "example",
     "title": "Check Brown's lamp example, our arithmetic",
     "steps": [
      "The light ratio is (11 ÷ 8)² = 1.89.",
      "Log base 2 of 1.89 is 0.92, so the gain is about one stop, which matches the book's round figure."
     ]
    },
    {
     "t": "p",
     "x": "Brown adds the cosine law. As a surface turns away from the source, the exposure falls with the cosine of the angle. {{brown-exposure}}"
    },
    {
     "t": "p",
     "x": "Our worked case: a surface turned 60 degrees from facing the lamp receives cos 60° = 0.5 of the light, which is one stop less."
    },
    {
     "t": "h",
     "x": "Why middle grey is 18 per cent"
    },
    {
     "t": "p",
     "x": "Brown explains that Zone V is the middle of a ten-zone scale but is not 50 per cent reflectance. It is 18 per cent, because the eye judges tone logarithmically. {{brown-exposure}}"
    },
    {
     "t": "p",
     "x": "He also says one third of a stop is the smallest difference the unaided eye sees on most negative stocks, so film speeds come in third-stop steps. ISO 320 is one stop faster than ISO 160. {{brown-exposure}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Brown links skin tones to particular zones. Treat those as rules of thumb, and take a reading from the subject instead."
    },
    {
     "t": "h",
     "x": "The pre-shot routine"
    },
    {
     "t": "p",
     "x": "Brown describes the old FAST check: focus, aperture, speed and tachometer. Most cameras no longer have a tachometer, but the frame-rate setting must still be checked. {{brown-production}}"
    },
    {
     "t": "p",
     "x": "One errant flip of a switch can change 24 fps to 23 or 25. Do the checks in the same order every time. {{brown-production}}"
    },
    {
     "t": "p",
     "x": "The assistant should also track how much stock is left, so the camera does not run out in the middle of a take. {{brown-production}}"
    },
    {
     "t": "check",
     "q": "A lamp moves from 11 ft to 8 ft. How much more light does the subject receive?",
     "o": [
      "About one stop",
      "About half a stop",
      "About two stops",
      "None"
     ],
     "a": 0,
     "w": "Our arithmetic: (11 ÷ 8)² = 1.89, about one stop. This matches Brown's example. {{brown-exposure}}"
    },
    {
     "t": "check",
     "q": "What does FAST stand for in Brown's pre-shot check?",
     "o": [
      "Focus, aperture, speed, tachometer",
      "Film, aperture, shutter, timecode",
      "Focus, angle, shutter, tilt",
      "Frame, audio, slate, take"
     ],
     "a": 0,
     "w": "It is the old checklist for the camera before a take. {{brown-production}}"
    },
    {
     "t": "take",
     "i": [
      "A lamp 11 ft away moved to 8 ft gives about one stop. {{brown-exposure}}",
      "Middle grey is 18 per cent because the eye judges tone logarithmically. {{brown-exposure}}",
      "Check the frame rate before every take. {{brown-production}}"
     ]
    }
   ]
  },
  {
   "id": "l8",
   "title": "Why motion looks smooth, and what speed says",
   "min": 15,
   "blocks": [
    {
     "t": "h",
     "x": "Two processes make film move"
    },
    {
     "t": "p",
     "x": "Film Art says researchers believe two processes make cinematic motion: critical flicker fusion and apparent motion. {{fa-ch1}}"
    },
    {
     "t": "p",
     "x": "If you flash a light faster and faster, at around 50 flashes a second you see a steady beam. Film is shot and projected at 24 frames a second, and the projector shutter blocks the beam twice for each frame, so each frame is flashed twice. {{fa-ch1}}"
    },
    {
     "t": "p",
     "x": "Our arithmetic: 24 frames × 2 flashes = 48 flashes a second, close to the 50 that the book gives as the threshold."
    },
    {
     "t": "p",
     "x": "Early silent films were shot at lower rates, often 16 or 20 images a second, and projected with one flash per image. The flicker gave movies their nickname. {{fa-ch1}}"
    },
    {
     "t": "h",
     "x": "Speed and screen time"
    },
    {
     "t": "p",
     "x": "Silent films shot at 16 to 20 fps look jerky and fast when they are shown at 24. Projected at the correct speed they can look as smooth as films made today. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "The rule is simple. If the camera runs slower than the projector, the action looks sped up. If it runs faster, the action looks slowed. {{fa-ch5}}"
    },
    {
     "t": "h",
     "x": "What speed means"
    },
    {
     "t": "p",
     "x": "Brown says high-speed filming usually gives a dreamlike, otherworldly effect. Low-speed filming, which speeds the action up, is mostly used for comedy. {{brown-image}}"
    },
    {
     "t": "p",
     "x": "Brown adds that a slight slowing, at rates a little over normal, can subtly emphasise a moment, and higher speeds underline it more. {{brown-image}}"
    },
    {
     "t": "p",
     "x": "His example is Raging Bull, where the camera ran at up to 120 fps in some fight shots. {{brown-image}}"
    },
    {
     "t": "p",
     "x": "Our arithmetic: 120 fps played at 24 fps runs at 120 ÷ 24 = 5 times slower than life."
    },
    {
     "t": "check",
     "q": "About how many flashes a second give a steady beam, per Film Art?",
     "o": [
      "50",
      "12",
      "24 exactly",
      "500"
     ],
     "a": 0,
     "w": "Around 50 flashes a second, so a double-flashed 24 fps film sits at 48. {{fa-ch1}}"
    },
    {
     "t": "check",
     "q": "A film shot at 16 fps is projected at 24 fps. How does it look?",
     "o": [
      "Sped up",
      "Slowed down",
      "Unchanged",
      "Out of focus"
     ],
     "a": 0,
     "w": "Fewer frames per second in the camera than the projector speeds the action up. {{fa-ch5}}"
    },
    {
     "t": "take",
     "i": [
      "Flicker fusion needs about 50 flashes a second. {{fa-ch1}}",
      "A camera slower than the projector speeds the action up. {{fa-ch5}}",
      "High speed reads as dreamlike; low speed reads as comic. {{brown-image}}"
     ]
    }
   ]
  },
  {
   "id": "l9",
   "title": "The lecturer's method: Eadweard Muybridge",
   "min": 22,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "Eadweard Muybridge (1830 to 1904) was an English photographer known for pioneering photographic studies of motion. {{wiki-muybridge}}"
    },
    {
     "t": "p",
     "x": "We read the opening of his own 1887 prospectus and a Wikipedia page as excerpts, so the record is partial. His voice is not documented in what we read, so anything voiced in this course is inferred. {{muybridge-1887}} {{wiki-muybridge}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Name what the eye cannot do. Leland Stanford wanted a proper picture of a horse at full speed, because the eye could not break down a trot or gallop. {{wiki-muybridge}}",
      "Make a first attempt and find why it failed. In 1873 a single camera gave a small, very fuzzy picture, because the emulsions were insensitive and early pictures were little more than blurry silhouettes. {{wiki-muybridge}}",
      "Change the equipment, not just the effort. He experimented with ever-faster mechanical shutters and electrically triggered mechanisms, and with more sensitive emulsions to suit shorter exposures. {{wiki-muybridge}}",
      "Multiply the viewpoints and trigger them from the subject. In June 1878 a battery of 12 cameras along the Palo Alto track had shutters tripped by wires that the horse or a cart wheel hit. {{wiki-muybridge}}",
      "Test in front of witnesses. On 15 June 1878 the press and turf men watched, and an accident with a snapping strap was captured on the negatives and shown to them. {{wiki-muybridge}}",
      "Scale the test into an investigation. The experiments continued in 1879 with 24 cameras, and his 1887 prospectus offers 781 plates. {{wiki-muybridge}} {{muybridge-1887}}"
     ]
    },
    {
     "t": "p",
     "x": "In his own prospectus he says the 1878 photographs, published as The Horse in Motion, were results of experiments with automatic electro-photographic apparatus he devised, that the subject had held his attention since 1872, and that a systematic investigation with improved appliances would show facts of value to the artist and the scientist. {{muybridge-1887}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Muybridge wanted to freeze each moment. A film camera at 180° wants the opposite: some blur in every frame. What we borrow is the trade-off and the testing habit, not his aim. That reading is ours."
    },
    {
     "t": "table",
     "title": "His problem against your DSLR (the right column is our adaptation)",
     "head": [
      "His constraint",
      "His answer",
      "Your equivalent"
     ],
     "rows": [
      [
       "Insensitive emulsion",
       "More sensitive emulsions",
       "Raise ISO, open the aperture or add light"
      ],
      [
       "Slow mechanical shutter",
       "Faster shutters, electric triggers",
       "A faster shutter speed in the camera, with a stop cost"
      ],
      [
       "One viewpoint cannot show phases",
       "A row of cameras",
       "A burst of frames, or a higher frame rate for slow motion"
      ],
      [
       "Sceptics doubted the picture",
       "A public session and the original negative",
       "Keep your original file and your settings log"
      ]
     ],
     "src": "The first two columns follow {{wiki-muybridge}}. The third is our adaptation."
    },
    {
     "t": "h",
     "x": "Worked example: how much blur, and what it costs (illustrative numbers)"
    },
    {
     "t": "example",
     "title": "A runner at 5 m/s past your camera",
     "steps": [
      "At 1/50 s the runner moves 5 ÷ 50 = 0.1 m, that is 10 cm, during one exposure. The picture shows a smear about that long.",
      "At 1/1000 s the runner moves 5 ÷ 1000 = 0.005 m, that is 5 mm. The picture shows a nearly frozen figure.",
      "The shutter is 1000 ÷ 50 = 20 times faster, so you need 20 times more light, which is log base 2 of 20, about 4.3 stops.",
      "You can pay in three currencies: aperture (open 4.3 stops, for example f/8 to about f/1.8), sensitivity (ISO 100 to about ISO 2000), or lamps. Muybridge's equivalent was a more sensitive plate. {{wiki-muybridge}}",
      "Decide first what motion you want. For cinema blur keep near 180°. To freeze, pay the stops before the day."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a one-variable test"
    },
    {
     "t": "ol",
     "i": [
      "Write the goal in one sentence, for example: show a hand wave with clear fingers but still a trace of motion.",
      "Shoot a baseline clip at 24 fps and 1/48 s. Note the result, and say why it falls short.",
      "Change one thing only, the shutter speed, and shoot again. Keep the exposure right by changing the aperture, ISO or ND only as far as needed, and log each change.",
      "Repeat with a second speed. Put the three clips side by side.",
      "Keep the original files and the settings table so another person could check your result."
     ]
    },
    {
     "t": "activity",
     "x": "Do the one-variable test with a real moving subject and write the stops each step cost. Keep the table."
    },
    {
     "t": "check",
     "q": "What did Muybridge change after the fuzzy 1873 picture?",
     "o": [
      "Only the lens colour",
      "Faster shutters, electric triggering and more sensitive emulsions",
      "A slower horse",
      "A larger tripod only"
     ],
     "a": 1,
     "w": "He worked on faster shutters, electrically triggered mechanisms and more sensitive emulsions. {{wiki-muybridge}}"
    },
    {
     "t": "check",
     "q": "A runner moves 5 m/s. About how far do they move during a 1/500 s exposure?",
     "o": [
      "5 cm",
      "1 cm",
      "5 mm",
      "1 mm"
     ],
     "a": 1,
     "w": "5 ÷ 500 = 0.01 m, which is 1 cm."
    },
    {
     "t": "check",
     "q": "Going from 1/50 s to 1/1000 s costs about how many stops of light?",
     "o": [
      "2",
      "3",
      "4.3",
      "6"
     ],
     "a": 2,
     "w": "The ratio is 20, and log base 2 of 20 is about 4.3."
    },
    {
     "t": "take",
     "i": [
      "A short exposure is paid for in light or sensitivity. {{wiki-muybridge}}",
      "Change one variable at a time and write down the result.",
      "Keep the original and the log so a sceptic can check."
     ]
    }
   ]
  }
 ]
};
