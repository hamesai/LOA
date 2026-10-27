/* Cinematography: DSLR and analog film (module 3). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["cinematography-3"] = {
 "intro": "The lens decides what the audience sees, how deep the focus runs and how space feels. This module gives you the numbers behind those choices and a vocabulary for framing, so that a lens choice is a decision, not a habit. Lecturer lens: Gregg Toland shot interiors at f/8 to f/16 when convention was f/2.3 to f/2.8. His essay is a method for buying depth of field and then paying for it in light and contrast.",
 "outcomes": [
  "Estimate the horizontal angle of view of a lens and describe how wide and long lenses treat space.",
  "Use the depth-of-field formula to compare apertures, focal lengths and distances.",
  "Choose an aspect ratio and a shot size for a scene, and frame with a clear reason.",
  "Set focus for a shot with two subjects at different distances, using split focus or the hyperfocal distance, and say what flare will do.",
  "Lecturer's method: Say what a depth requirement costs in light, set the aperture from the composition, lower the lighting contrast to match, and test the lens."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Focal length, angle of view and perspective",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "The focal length of a lens fixes its angle of view and therefore its field of view. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Wide-angle lenses have short focal lengths and make spatial distances more obvious: a person in the distance looks much smaller while someone in front looms large. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Long-focus lenses reduce that exaggeration, make far-off objects seem close together and flatten perspective. {{wiki-cine}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The source adds that the difference in perspective is really caused by camera distance rather than focal length itself. Moving the camera changes perspective; changing the lens at the same spot only crops or widens the frame."
    },
    {
     "t": "h",
     "x": "Estimating the angle of view"
    },
    {
     "t": "p",
     "x": "The horizontal angle of view for a frame of width w and a lens of focal length f is 2 × arctan(w ÷ 2f). This is standard geometry and not from the sources we read."
    },
    {
     "t": "table",
     "title": "Horizontal angle of view (our arithmetic; full frame 36 mm wide, and a 1.6 crop sensor about 22.5 mm wide)",
     "head": [
      "Focal length",
      "Full frame",
      "1.6 crop sensor",
      "Feel"
     ],
     "rows": [
      [
       "18 mm",
       "90.0°",
       "64.0°",
       "Very wide; strong perspective"
      ],
      [
       "24 mm",
       "73.7°",
       "50.2°",
       "Wide"
      ],
      [
       "35 mm",
       "54.4°",
       "35.6°",
       "Moderate wide"
      ],
      [
       "50 mm",
       "39.6°",
       "25.4°",
       "Normal"
      ],
      [
       "85 mm",
       "23.9°",
       "15.1°",
       "Short tele; flattering for faces"
      ],
      [
       "135 mm",
       "15.2°",
       "9.5°",
       "Tele; compresses space"
      ]
     ],
     "src": "Computed from the formula. Use the crop factor from the previous module to move between columns. {{wiki-crop}}"
    },
    {
     "t": "p",
     "x": "A normal lens gives a natural-looking perspective for its format. In stills, 50 mm is normal on full frame and gives about 40° horizontally. {{fh-ch4}} In cinema the benchmark is narrower: 50 mm is also called normal on the Academy 35 mm film frame, which is only a little more than half the size of a stills frame and gives about 24°, and 25 mm is the normal lens for standard 16 mm. {{fh-ch4}} The handbook's safe range is a horizontal angle between 40° and 24° for any format, and it adds that what feels normal is partly subjective. {{fh-ch4}}"
    },
    {
     "t": "p",
     "x": "As a rough rule of thumb, a wide-angle lens is about half the normal focal length, and below about a third of normal counts as extreme wide. Longer than about one and a half times normal is telephoto. {{fh-ch4}}"
    },
    {
     "t": "example",
     "title": "Worked example: the same face from two lenses (illustrative)",
     "steps": [
      "You frame a head-and-shoulders shot of a person with a 35 mm lens at 1.2 m. The nose looks large against the ears and the background shows a lot.",
      "Now step back to 2.4 m (double the distance) and switch to a 70 mm lens (double the focal length). The face is about the same size in the frame.",
      "The facial features now look flatter and more natural, and the background fills more of the frame with a narrower slice of the room behind.",
      "The focal length did not flatten the face by itself. The extra distance did, and the longer lens just kept the face the same size. This follows the source's point that distance drives perspective. {{wiki-cine}}"
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "At the usual filming distance of about five feet (1.5 m) or more, you do not need to worry about stretching a face. For close-ups the handbook leans towards a longer lens from further back, but warns that perspective that is too flat can cost intimacy. {{fh-ch4}} A wide lens exaggerates how fast something moves towards the camera, which is useful for speed and unsettling for comedy or menace. {{fh-ch4}}"
    },
    {
     "t": "activity",
     "x": "Photograph or film the same person from 1 m with a wide lens and from 3 m with a long lens, adjusting the framing so the face is the same size. Compare the faces and the backgrounds."
    },
    {
     "t": "check",
     "q": "What mostly drives the difference in perspective between a wide and a long shot of a face?",
     "o": [
      "Lens brand",
      "Camera distance",
      "Sensor colour",
      "Frame rate"
     ],
     "a": 1,
     "w": "The source says the perspective differences come from the camera distance more than the focal length itself. {{wiki-cine}}"
    },
    {
     "t": "check",
     "q": "A 50 mm lens on full frame has a horizontal angle of view of about:",
     "o": [
      "15°",
      "24°",
      "40°",
      "74°"
     ],
     "a": 2,
     "w": "2 × arctan(18 ÷ 50) is about 39.6°."
    },
    {
     "t": "take",
     "i": [
      "Focal length sets the angle of view. {{wiki-cine}}",
      "Distance from the subject, not the lens alone, changes perspective.",
      "Wide lenses exaggerate space and long lenses compress it. {{wiki-cine}}"
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "Aperture, T-stops and depth of field",
   "min": 17,
   "blocks": [
    {
     "t": "p",
     "x": "Depth of field is the range of distances that look acceptably sharp, defined using a circle of confusion. {{wiki-dof}}"
    },
    {
     "t": "p",
     "x": "It depends on four things: focal length, subject distance, aperture and the acceptable size of the circle of confusion. {{wiki-dof}}"
    },
    {
     "t": "p",
     "x": "The approximate formula is DOF ≈ 2 u² N c ÷ f², where u is the subject distance, N the f-number, c the circle of confusion and f the focal length. {{wiki-dof}}"
    },
    {
     "t": "p",
     "x": "It grows in proportion to the f-number and the circle of confusion, and with the square of the subject distance. {{wiki-dof}} It shrinks with the square of the focal length. {{wiki-dof}}"
    },
    {
     "t": "fig",
     "id": "cinematography-dof",
     "title": "Depth of field at 3 m with a 50 mm lens",
     "cap": "Each doubling of the f-number (two stops) doubles the depth that looks sharp: 43 cm at f/2, 86 cm at f/4 and about 1.7 m at f/8."
    },
    {
     "t": "example",
     "title": "Worked example: the formula in numbers (c = 0.03 mm is an illustrative full-frame value)",
     "steps": [
      "50 mm lens, subject at 3000 mm, f/2: DOF ≈ 2 × 3000² × 2 × 0.03 ÷ 50² = 1,080,000 ÷ 2500 ≈ 432 mm, about 43 cm.",
      "At f/4 the depth doubles to about 86 cm, and at f/8 to about 173 cm.",
      "Now an 85 mm lens at the same 3000 mm and f/2: 1,080,000 ÷ 7225 ≈ 149 mm, only 15 cm, but the subject is also larger in the frame.",
      "To get the same size subject with the 85 mm you stand back to 3000 × 85 ÷ 50 = 5100 mm. At f/2 the depth is 2 × 5100² × 2 × 0.03 ÷ 85² ≈ 432 mm, the same as the 50 mm. For the same image size and f-number, depth of field is the same. {{wiki-dof}}"
     ]
    },
    {
     "t": "callout",
     "k": "key",
     "x": "For a fixed subject size and f-number, focal length does not change depth of field. At a fixed distance, a longer lens gives less depth of field because the subject also gets bigger."
    },
    {
     "t": "p",
     "x": "The handbook makes the same point with its own numbers: swapping a 50 mm lens at 10 ft for a 25 mm at 5 ft changes the depth of field very little. {{fh-ch4}} What does change is the background. A wider lens leaves it sharper, which is why cinematographers reach for long lenses when they want the background thrown out of focus. {{fh-ch4}}"
    },
    {
     "t": "p",
     "x": "Treat the formula and any chart or phone app as a guide, not a measurement. Real lenses, exact sensor sizes and the size of the screen can move the true depth of field by 15 to 20 per cent. {{fh-ch4}} Something that looks sharp on a small screen can look soft when projected large, so depth seems shallower on the big screen. {{fh-ch4}}"
    },
    {
     "t": "h",
     "x": "Sensor size and depth of field"
    },
    {
     "t": "p",
     "x": "A smaller image format gives more depth of field for the same field of view: the source says 70 mm film has less depth of field than 35 mm film, and 16 mm has more. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Digital SLR sensors are close to 35 mm film in size and so can produce similar depth of field, which is why filmmakers adopted them. {{wiki-cine}}"
    },
    {
     "t": "h",
     "x": "F-stops and T-stops"
    },
    {
     "t": "p",
     "x": "Cine lenses are engraved with T-stops, not f-stops, so that the light lost in the glass does not upset exposure set with a meter. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "The f-number is a geometric ratio and ignores light transmission, while a T-stop accounts for it. {{wiki-fnumber}}"
    },
    {
     "t": "p",
     "x": "The gap between the two is small on prime lenses, usually under a quarter of a stop, and larger on zooms. {{fh-ch4}} A zoom marked f/2 might be T2.5, which loses about two-thirds of a stop (our arithmetic: (2.5 ÷ 2)² is about 1.56, and log base 2 of 1.56 is about 0.64). {{fh-ch4}} The T number is always the higher one. Use T-stops to set exposure, but use f-stops in depth-of-field calculations. {{fh-ch4}}"
    },
    {
     "t": "h",
     "x": "Deep and shallow focus"
    },
    {
     "t": "p",
     "x": "In Citizen Kane (1941) Gregg Toland and Orson Welles used small apertures to keep foreground and background sharp, which is called deep focus. {{wiki-cine}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The handbook describes the same achievement as wide-angle lenses, bright lights and fast film stocks working together to beat the shallow depth of field of typical 35 mm work. We trust Toland's own article for the apertures and use the handbook for the summary. Small apertures needed the extra light and faster stock. {{fh-ch2}}"
    },
    {
     "t": "p",
     "x": "Shifting the plane of focus from one subject to another inside a shot is a rack focus. {{wiki-cine}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Shallow focus is a tool for directing attention, not a mark of quality. If the audience needs to see the room, use more depth."
    },
    {
     "t": "activity",
     "x": "Choose a subject 3 m away and a 50 mm equivalent lens. Shoot at your widest aperture, then two and four stops down. Measure the zone that looks sharp and compare it with the formula."
    },
    {
     "t": "check",
     "q": "With the lens and the subject fixed, going from f/2 to f/4 does what to depth of field?",
     "o": [
      "Halves it",
      "Doubles it",
      "Leaves it",
      "Squares it"
     ],
     "a": 1,
     "w": "Depth of field is proportional to the f-number, so doubling the f-number doubles the depth. {{wiki-dof}}"
    },
    {
     "t": "check",
     "q": "Why do cine lenses carry T-stops?",
     "o": [
      "They look nicer",
      "They account for light lost in the glass so meter readings are reliable",
      "They change depth of field",
      "They set frame rate"
     ],
     "a": 1,
     "w": "T-stops include transmission loss, so exposure set by meter is exact. {{wiki-cine}}"
    },
    {
     "t": "check",
     "q": "A zoom lens is marked f/2 but its T-stop is T2.5. About how much light does its glass absorb?",
     "o": [
      "About two-thirds of a stop",
      "About a quarter of a stop",
      "A full stop",
      "None"
     ],
     "a": 0,
     "w": "A move from f/2 to T2.5 is a light ratio of about 1.56, about 0.64 of a stop. {{fh-ch4}}"
    },
    {
     "t": "take",
     "i": [
      "DOF ≈ 2 u² N c ÷ f². {{wiki-dof}}",
      "Doubling the f-number doubles the depth. {{wiki-dof}}",
      "Pick the depth for the story, not for the look of the lens."
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Aspect ratio and framing",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "Aspect ratio is the width of the image divided by its height, written as 4:3 or in decimals such as 1.33. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Standards for aspect ratio have changed over time, and different ratios give different aesthetic effects. {{wiki-cine}}"
    },
    {
     "t": "table",
     "title": "Common frame shapes (ratios and sizes from the sources; the 16:9 and 4:3 rows are our arithmetic)",
     "head": [
      "Format",
      "Ratio",
      "Note"
     ],
     "rows": [
      [
       "Edison-era 35 mm",
       "1.33:1",
       "24.89 × 18.67 mm frame"
      ],
      [
       "Academy ratio, 35 mm 4-perf",
       "1.375:1",
       "22 × 16 mm camera aperture"
      ],
      [
       "Standard 16 mm",
       "1.37:1",
       "10.26 × 7.49 mm"
      ],
      [
       "Super 16",
       "1.69:1",
       "12.52 × 7.41 mm"
      ],
      [
       "Widescreen 35 mm (North America)",
       "1.85:1",
       "The most common theatrical ratio there today"
      ],
      [
       "Widescreen 35 mm (Europe)",
       "1.66:1",
       "More common in European films"
      ],
      [
       "HD video (16:9)",
       "1.78:1",
       "16 ÷ 9 = 1.78"
      ],
      [
       "Anamorphic 35 mm",
       "about 2.39:1",
       "Formerly 2.35:1"
      ]
     ],
     "src": "{{fa-ch5}}"
    },
    {
     "t": "fig",
     "id": "cinematography-aspect",
     "title": "Frames drawn to the same width",
     "cap": "The same width cropped to wider shapes leaves less height. At 2.39:1 only about 74% of a 16:9 picture's height remains."
    },
    {
     "t": "example",
     "title": "Worked example: cropping 16:9 to 2.39:1",
     "steps": [
      "A 1920 × 1080 frame has a ratio of 1.78.",
      "For 2.39:1 at the same width, the height is 1920 ÷ 2.39 ≈ 803 pixels.",
      "The kept share of the height is 803 ÷ 1080 ≈ 74%, so about 26% of the picture is removed or covered by bars.",
      "Frame for this crop while shooting. If you shoot 16:9 and crop later, keep important content out of the cropped band."
     ]
    },
    {
     "t": "p",
     "x": "There are two ways to get a widescreen frame. Masking, called a hard matte, simply covers the top and bottom, while an anamorphic lens squeezes the picture on the way in and a matching lens unsqueezes it on the way out. {{fa-ch5}} Many films are shot full frame with the expectation that they will be masked for the cinema or for video, and the unmasked area can then show a boom microphone or a light that nobody noticed. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "Widescreen turns the screen into a band, which favours horizontal compositions. A common answer is to put the important information a little off centre, or to give the frame several points of interest. {{fa-ch5}}"
    },
    {
     "t": "h",
     "x": "Shot sizes and composition vocabulary"
    },
    {
     "t": "p",
     "x": "Directors and cinematographers use a shared vocabulary for how much of a subject is in frame. This is common practice, summarised by us."
    },
    {
     "t": "table",
     "title": "Shot sizes (our summary of common vocabulary)",
     "head": [
      "Shot",
      "Frames",
      "Use"
     ],
     "rows": [
      [
       "Wide or establishing",
       "The whole space",
       "Where we are"
      ],
      [
       "Full",
       "A person head to toe",
       "Body language, movement"
      ],
      [
       "Medium",
       "Waist up",
       "Everyday conversation"
      ],
      [
       "Close-up",
       "Face",
       "Emotion"
      ],
      [
       "Extreme close-up",
       "Part of a face or an object",
       "Detail, intensity"
      ],
      [
       "Insert",
       "An object that matters to the story",
       "Information"
      ]
     ],
     "src": "Vocabulary is conventional; there is no single standard definition."
    },
    {
     "t": "ul",
     "i": [
      "Headroom: leave a small gap above the head, not a large one.",
      "Looking room: give a subject space in the direction they look or move.",
      "Thirds: placing the subject on a third of the frame is a convention, not a rule.",
      "Leading lines and layers: foreground, middle and background create depth."
     ]
    },
    {
     "t": "activity",
     "x": "Frame the same subject at three shot sizes and two aspect ratios. Put the six frames in a row. Which feels most intimate? Which tells you most about the place?"
    },
    {
     "t": "check",
     "q": "Which ratio is wider?",
     "o": [
      "1.37:1",
      "1.78:1",
      "1.33:1",
      "1.69:1"
     ],
     "a": 1,
     "w": "1.78:1 is the widest of these. 1.37, 1.33 and 1.69 are all narrower."
    },
    {
     "t": "check",
     "q": "You crop a 1920 × 1080 picture to 2.39:1 at the same width. About how many pixels of height remain?",
     "o": [
      "540",
      "803",
      "960",
      "1080"
     ],
     "a": 1,
     "w": "1920 ÷ 2.39 is about 803 pixels."
    },
    {
     "t": "check",
     "q": "You shoot full frame and plan to mask to widescreen later. What is the main risk?",
     "o": [
      "Equipment or crew may be visible in the area that will be masked",
      "The picture will be softer",
      "The frame rate will change",
      "The sound will drift"
     ],
     "a": 0,
     "w": "The unmasked top and bottom can show a microphone or light that the final mask hides. {{fa-ch5}}"
    },
    {
     "t": "take",
     "i": [
      "Aspect ratio is a creative choice with a cost in picture area.",
      "Use shot sizes as a vocabulary, not a recipe.",
      "Frame for the final ratio from the start."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Choosing lenses: primes, zooms and adapters",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Prime lenses offer greater optical quality and are faster, with larger aperture openings, than zooms, so they are often used in professional cinematography. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Zooms are chosen for speed or ease of use, or for shots with a zoom move. {{wiki-cine}}"
    },
    {
     "t": "table",
     "title": "Primes and zooms for a DSLR kit (a mix of the source and our experience-based advice)",
     "head": [
      "",
      "Prime",
      "Zoom"
     ],
     "rows": [
      [
       "Light in low light",
       "Wide aperture, often f/1.4 to f/2",
       "Often f/2.8 or slower"
      ],
      [
       "Image quality",
       "Usually higher (but some high-quality zooms are nearly as sharp)",
       "Often lower"
      ],
      [
       "Speed on set",
       "Slower: change lenses",
       "Faster: change framing"
      ],
      [
       "Cost",
       "Several lenses to buy",
       "One lens covers a range"
      ],
      [
       "Zoom move in shot",
       "Not possible",
       "Possible"
      ]
     ],
     "src": "Quality and speed points from {{wiki-cine}}; the other rows are our summary."
    },
    {
     "t": "p",
     "x": "Zooms are more complex than primes, so they tend to be larger, heavier, more delicate and more prone to flare and distortion. They also tend to have a little less depth of field than a prime of the same focal length. {{fh-ch4}} Cine and video zooms are normally parfocal, meaning they hold focus as you zoom. Many stills zooms are varifocal and do not. {{fh-ch4}}"
    },
    {
     "t": "ul",
     "i": [
      "With a cine or video zoom, zoom all the way in, set focus, then zoom out. If you focus wide first, the shot will usually go soft when you zoom in. {{fh-ch4}}",
      "With a stills zoom, check focus by eye after every change of focal length, ideally with the magnified view. {{fh-ch4}}",
      "Watch for focus breathing, where the picture size changes as you pull focus, and avoid lenses that do it if you can. {{fh-ch4}}",
      "Check the f-stop does not ramp. A zoom that opens to f/1.4 at wide may close to f/2 at full zoom, losing a stop mid-shot. {{fh-ch4}}"
     ]
    },
    {
     "t": "h",
     "x": "Anamorphic and speciality lenses"
    },
    {
     "t": "p",
     "x": "Anamorphic lenses squeeze the picture horizontally and a matching process unsqueezes it, producing a wider frame, about 2.39:1 on 35 mm. {{wiki-35mm}}"
    },
    {
     "t": "p",
     "x": "In 2009 Vantage introduced anamorphic lenses with a 1.30× squeeze for Super 16, so nearly the whole Super 16 frame could be used for 2.39:1. {{wiki-16mm}}"
    },
    {
     "t": "p",
     "x": "Optical adapters were once used to put a larger-format lens in front of a small video sensor, on a ground glass screen, to get shallower depth of field. {{wiki-cine}}"
    },
    {
     "t": "h",
     "x": "Testing a lens before you trust it"
    },
    {
     "t": "example",
     "title": "Worked example: a ten-minute lens test (our method)",
     "steps": [
      "Mount the camera on a tripod facing a flat wall with a printed text page, 1.5 m away.",
      "Shoot at the widest aperture, then every stop down to f/11, with focus fixed on the page.",
      "Look at the centre and the corners. The sharpest aperture is usually two or three stops from wide open.",
      "Rack the focus from near to far on a tripod and watch for the image size changing as you do. Large changes are a problem if you plan focus pulls.",
      "Note the findings on a card for each lens."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Rent before you buy. A lens that tests well on a chart can still be awkward to use for focus pulls."
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Traditionally a lens is sharpest two to three stops down from wide open, because aberrations are worst at the widest openings and diffraction softens the image at the smallest. {{fh-ch4}} How small is too small depends on the sensor: with a Super 35 sized sensor even f/16 or f/22 is usually usable, but with a 1/3-inch sensor going beyond about f/8 may visibly soften the picture. {{fh-ch4}} If a lens test shows softness at f/16, use a neutral density filter and open up instead. {{fh-ch4}}"
    },
    {
     "t": "activity",
     "x": "Test your two most-used lenses with the wall method above. Write down the sharpest aperture for each."
    },
    {
     "t": "check",
     "q": "Why are primes often used in professional work?",
     "o": [
      "They zoom",
      "Greater optical quality and larger aperture openings",
      "They are cheaper",
      "They have no glass"
     ],
     "a": 1,
     "w": "The source gives optical quality and speed as the reasons. {{wiki-cine}}"
    },
    {
     "t": "check",
     "q": "What is the purpose of an anamorphic lens?",
     "o": [
      "To make the picture wider by squeezing it horizontally and unsqueezing later",
      "To remove noise",
      "To add colour",
      "To change frame rate"
     ],
     "a": 0,
     "w": "Anamorphic formats produce a wider picture, about 2.39:1 on 35 mm. {{wiki-35mm}}"
    },
    {
     "t": "take",
     "i": [
      "Choose primes for quality and low light and zooms for speed. {{wiki-cine}}",
      "Test every lens before you rely on it.",
      "Match the lens to the framing and the working speed of the shoot."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Using lenses on set: focus, hyperfocal distance and flare",
   "min": 24,
   "blocks": [
    {
     "t": "p",
     "x": "Focus is a creative control. When someone speaks they should usually be sharp, and for close shots the rule of thumb is to focus on the eyes. {{fh-ch4}} To see focus pop in and out, set it with the lens at its widest aperture and then stop down to the f-stop you need. {{fh-ch4}}"
    },
    {
     "t": "h",
     "x": "Split focus and tape focus"
    },
    {
     "t": "p",
     "x": "You get roughly twice as much depth of field behind the point of focus as in front of it. So if two things must both be sharp, focusing halfway between them favours the nearer one. The handbook's rule of thumb is to focus one third of the way from the nearer to the farther object. With objects at 10 ft and 40 ft, that is 20 ft. {{fh-ch4}}"
    },
    {
     "t": "p",
     "x": "On controlled shoots an assistant often measures the distance with a tape from the sensor plane, marked on many cameras with the symbol Ф, and sets the lens scale. Tape focus is often more accurate with wide-angle lenses, where the depth is too great to judge by eye in a small viewfinder. Stills lenses have crude scales and are meant to be focused by eye. {{fh-ch4}}"
    },
    {
     "t": "example",
     "title": "Worked example: split focus (illustrative metric numbers)",
     "steps": [
      "Two actors stand 3 m and 12 m from the camera. Both must be acceptably sharp.",
      "Our arithmetic: 3 + (12 − 3) ÷ 3 = 6 m. Focus at 6 m, not at the halfway point of 7.5 m.",
      "That leaves 3 m in front of the focus point and 6 m behind, matching the two-to-one rule of thumb. {{fh-ch4}}",
      "The rule is not exact, and the split changes with focal length and distance, so check it in the monitor. {{fh-ch4}}"
     ]
    },
    {
     "t": "h",
     "x": "Hyperfocal distance"
    },
    {
     "t": "p",
     "x": "For a given lens and f-stop, the hyperfocal distance is the closest focus setting at which the far limit of depth of field reaches infinity. At that setting, everything from half that distance to infinity is acceptably sharp. {{fh-ch4}} It is handy when focusing is hard, for instance in fast, unpredictable shooting with a wide lens."
    },
    {
     "t": "example",
     "title": "Worked example: a 25 mm lens at f/8",
     "steps": [
      "The standard formula is hyperfocal distance = focal length² ÷ (f-number × circle of confusion) + focal length.",
      "The handbook's figures use a circle of confusion of 1/1000 inch, which is 0.0254 mm. {{fh-ch4}}",
      "Our arithmetic: 25² ÷ (8 × 0.0254) + 25 = 625 ÷ 0.2032 + 25, about 3,076 + 25 = 3,101 mm, or 3.1 m.",
      "The handbook gives about 10 ft for the same lens and aperture, which agrees. {{fh-ch4}} Focus at 3.1 m and the depth of field runs from about 1.55 m to infinity.",
      "Stop down or choose a larger circle of confusion and the distance shrinks. A different sensor or screen size changes the circle you should use."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The handbook also quotes a 25 mm lens focused at 4 ft with a total depth of field of 7 inches at f/2. Our own calculation with the same circle of confusion gives about 9.6 inches, so we have not used that figure. Charts and apps can differ from one another by more than we would like, which is another reason to check in the monitor."
    },
    {
     "t": "h",
     "x": "Flare"
    },
    {
     "t": "p",
     "x": "Light bouncing between lens elements washes over the picture, lifts the blacks, lowers contrast and softens the edges of backlit figures. Zooms with many elements are the most vulnerable. {{fh-ch4}} Stray light can reach the front element even when the lamp is out of frame. A deeper lens shade, a matte box or a flag over the light blocks it. {{fh-ch4}} If you can see reflections on the front element from in front of the lens, there will be flare in the picture. {{fh-ch4}}"
    },
    {
     "t": "p",
     "x": "Flare is not always a fault. In the early 1960s Raoul Coutard shot into café windows and let the flare soften the image for Godard, which was regarded as an artistic breakthrough. {{fh-ch4}} Decide whether you want it, then control it."
    },
    {
     "t": "activity",
     "x": "Set up two objects at about 2 m and 6 m. Focus on the nearer one, then on the farther one, then at one third of the way between them. Record each, look at both objects in the monitor, and decide which focus gives the most useful picture."
    },
    {
     "t": "check",
     "q": "Two objects are 10 ft and 40 ft from the camera. Following the handbook's rule of thumb, where should you focus?",
     "o": [
      "20 ft",
      "25 ft",
      "30 ft",
      "10 ft"
     ],
     "a": 0,
     "w": "Focus one third of the way from the nearer to the farther object: 10 + 30 ÷ 3 = 20 ft. {{fh-ch4}}"
    },
    {
     "t": "check",
     "q": "You have a cine zoom. What is the correct order to set focus?",
     "o": [
      "Zoom all the way in, set focus, then zoom out",
      "Zoom all the way out, set focus, then zoom in",
      "Set focus at the middle of the range",
      "Leave autofocus on"
     ],
     "a": 0,
     "w": "Depth of field is smallest at the longest focal length, so focus there. {{fh-ch4}}"
    },
    {
     "t": "take",
     "i": [
      "Focus on the eyes, and use a third of the way from near to far for split focus.",
      "Hyperfocal focusing keeps everything from half that distance to infinity acceptably sharp.",
      "Control flare with a shade, matte box or flag, or use it on purpose."
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "Lens tables: circle of confusion and equivalents",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "A depth-of-field chart or app starts from a choice of circle of confusion, the largest blur the eye accepts as a point. {{fh-appc}}"
    },
    {
     "t": "table",
     "title": "Circle of confusion by format",
     "head": [
      "Format",
      "Circle of confusion"
     ],
     "rows": [
      [
       "Full-frame DSLR (5D Mark II)",
       "0.030 mm"
      ],
      [
       "Super 35 sensor",
       "0.020 mm"
      ],
      [
       "APS-C sensor",
       "0.019 mm"
      ],
      [
       "Four Thirds sensor",
       "0.015 mm"
      ],
      [
       "35 mm motion picture film",
       "0.025 mm"
      ],
      [
       "16 mm film",
       "0.015 mm"
      ]
     ],
     "src": "Values from {{fh-appc}}. 16 mm film and Four Thirds share a value because film grain and unsteady projection reduce what the eye can judge."
    },
    {
     "t": "p",
     "x": "Depth of field is geometry, so charts are approximate. Use f-stops for the calculation. T-stop tables are slightly stingy if your lens is marked in f-stops. {{fh-appc}}"
    },
    {
     "t": "p",
     "x": "If you focus at the hyperfocal distance, everything from half that distance to infinity is acceptably sharp. {{fh-appc}}"
    },
    {
     "t": "h",
     "x": "Angle of view across formats"
    },
    {
     "t": "p",
     "x": "A 40-degree horizontal view needs 50 mm on a full-frame DSLR, about 33 mm on Super 35 and about 24 mm on Four Thirds. {{fh-appe}}"
    },
    {
     "t": "p",
     "x": "To translate, divide focal lengths with the starting sensor in the denominator. A 100 mm lens on Four Thirds frames like about 130 mm on Super 35. {{fh-appe}}"
    },
    {
     "t": "p",
     "x": "A camcorder with a half-inch sensor and a 5 mm lens matches a 26 mm lens on full frame (a multiplier of about 5.2). {{fh-appe}}"
    },
    {
     "t": "example",
     "title": "Worked example: checking a chart figure (our arithmetic)",
     "steps": [
      "The handbook's table gives a 100 mm lens at T8 focused at 10 ft a depth of field from 9 ft to 11 ft 4 in, using a circle of confusion of 1/500 inch (0.0508 mm).",
      "Hyperfocal distance H = f² ÷ (N × c) = 100² ÷ (8 × 0.0508) = about 24,600 mm, which is 80.7 ft.",
      "Near limit = H × s ÷ (H + s) with s = 3,048 mm gives about 2,712 mm, or 8.9 ft. Far limit = H × s ÷ (H − s) gives about 3,479 mm, or 11.4 ft.",
      "That agrees with the chart to within an inch or two."
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The handbook's own worked case in the lens chapter (a 25 mm lens at f/2 focused at 4 ft with a depth of 7 inches) does not match the standard formulas, which give about 9.6 inches. We left that figure out. {{fh-ch4}}"
    },
    {
     "t": "check",
     "q": "You switch from a full-frame DSLR with a 50 mm lens to a Four Thirds camera and want the same framing. Roughly which lens?",
     "o": [
      "12 mm",
      "24 mm",
      "50 mm",
      "100 mm"
     ],
     "a": 1,
     "w": "The Four Thirds crop factor is about 0.5, so 50 mm becomes roughly 24 mm. {{fh-appe}}"
    },
    {
     "t": "check",
     "q": "If you focus at the hyperfocal distance, what is acceptably sharp?",
     "o": [
      "Only the focus point",
      "From half that distance to infinity",
      "Only beyond the focus point",
      "Nothing nearer than twice the distance"
     ],
     "a": 1,
     "w": "Hyperfocal focus puts the near limit at half the distance. {{fh-appc}}"
    },
    {
     "t": "take",
     "i": [
      "Pick a circle of confusion for the format and screen before using a chart. {{fh-appc}}",
      "Equivalent lenses scale by sensor size. {{fh-appe}}",
      "Check chart answers with the formula when it matters. (our check)"
     ]
    }
   ]
  },
  {
   "id": "l7",
   "title": "Composition, depth cues and where the eye goes",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "A frame is a flat picture, and the eye is pulled to contrast, movement and faces. A cinematographer composes with those pulls in mind. {{fa-ch4}}"
    },
    {
     "t": "table",
     "title": "What draws the eye first",
     "head": [
      "Pull",
      "Example",
      "Use it to"
     ],
     "rows": [
      [
       "Contrast",
       "Bright subject on a dark ground; a warm colour against a cool, limited palette",
       "Make the key subject pop"
      ],
      [
       "Movement",
       "The only thing moving in a still frame",
       "Steer attention without a cut"
      ],
      [
       "Frontality",
       "Faces and fronts of bodies over backs",
       "Keep emotion readable"
      ],
      [
       "Balance",
       "Loose left-right balance, or deliberate imbalance that primes a change",
       "Calm the frame, or hint that something will enter"
      ]
     ],
     "src": "Summary of {{fa-ch4}}"
    },
    {
     "t": "h",
     "x": "Cues for depth on a flat screen"
    },
    {
     "t": "p",
     "x": "The screen is flat, so depth is suggested. The monocular cues are overlap, smaller size for distant objects, converging lines (linear perspective), haze and softness in the distance (aerial perspective), shading and cast shadows, and movement. Seeing with two eyes (stereopsis) is the extra cue that 3D adds. {{fa-ch4}}"
    },
    {
     "t": "p",
     "x": "Lens choice changes these cues: a wide lens exaggerates depth and makes approaching figures cover ground quickly, a long lens flattens planes and makes an approach seem slow. Zooming changes magnification only. {{fa-ch5}}"
    },
    {
     "t": "h",
     "x": "Deep space is not deep focus"
    },
    {
     "t": "p",
     "x": "Deep space is how you stage things on several planes. Deep focus is an optical result in which those planes are all sharp. You can have one without the other, as when a foreground rail and a distant figure are soft and only the middle plane is sharp. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "Deep focus came from faster stock, shorter lenses and stronger light, and the brighter lighting that Technicolor needed helped the trend in the late 1930s. A smaller chip gives a digital camera more depth of field than 35 mm film at the same framing. {{fa-ch5}} {{fa-ch12}}"
    },
    {
     "t": "p",
     "x": "Selective focus keeps one plane sharp and lets the rest blur. Racking focus moves the sharp plane during a shot, so attention passes from foreground to background or back. {{fa-ch5}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Lens length can mislead on purpose. A long lens can make a figure seem close behind another until a cut from the side shows the real distance. {{fa-ch5}}"
    },
    {
     "t": "activity",
     "x": "Frame one scene three ways: a wide lens with staging on three planes, a long lens with the planes squeezed, and a rack focus between two faces. Note what the eye does in each."
    },
    {
     "t": "check",
     "q": "A long lens is most likely to do what to a crowd walking towards the camera?",
     "o": [
      "Make them seem to approach slowly and squash into one plane",
      "Make them seem to rush",
      "Remove depth of field",
      "Stretch the foreground"
     ],
     "a": 0,
     "w": "Long lenses flatten space and slow apparent approach. {{fa-ch5}}"
    },
    {
     "t": "check",
     "q": "Which is optical rather than a matter of staging?",
     "o": [
      "Deep space",
      "Deep focus",
      "Overlap",
      "Frontality"
     ],
     "a": 1,
     "w": "Deep focus describes what is sharp, which depends on lens, aperture and light. {{fa-ch5}}"
    },
    {
     "t": "take",
     "i": [
      "The eye follows contrast, movement and faces. {{fa-ch4}}",
      "Deep space is staging; deep focus is optics. {{fa-ch5}}",
      "Wide lenses exaggerate depth and long lenses flatten it. {{fa-ch5}}"
     ]
    }
   ]
  },
  {
   "id": "l8",
   "title": "Angle and lens as meaning",
   "min": 16,
   "blocks": [
    {
     "t": "h",
     "x": "The angle chooses what the audience sees"
    },
    {
     "t": "p",
     "x": "Arnheim notes that early films took whatever angle showed the object and its movement most clearly. Later directors treated the unavoidable choice of angle as part of the expression. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "His example is Alexander Room's The Ghost That Never Returns. A freed convict shakes his fists back down the road. The camera then moves a few yards back and keeps the same direction of view, so it now sits behind the prison bars. The bars fill the foreground and the same scene appears through them. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "The shot puts the prison into a scene that is about freedom, without needing to cut to the prison. Arnheim calls this making a virtue of the necessity of choosing an angle. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "He also notes that Russian films use a worm's-eye view to make an authority figure loom like a mountain, and that a high view of a rowing boat turns attention from the boat to its form. {{arnheim-making}}"
    },
    {
     "t": "h",
     "x": "Size in the frame"
    },
    {
     "t": "p",
     "x": "Brown gives Hitchcock's rule: the size of an object in the frame should equal its importance in the story at that moment. {{brown-technique}}"
    },
    {
     "t": "p",
     "x": "His example is The Lady from Shanghai. The gun matters in the scene, so Welles uses a low camera angle, a wide lens and positioning to make the gun prominent. {{brown-lens-frame}}"
    },
    {
     "t": "h",
     "x": "Lens and angle together"
    },
    {
     "t": "p",
     "x": "Fabe describes Do the Right Thing. Radio Raheem is shot in a big close-up with an extreme 10 mm wide-angle lens, from an extreme low angle and from Dutch angles. His size and threat grow, and the tilted frame warns of the trouble he brings. {{fabe-dtrt}}"
    },
    {
     "t": "p",
     "x": "Our inference: a wide lens close to a face enlarges the nearest features, and a low angle adds height. Both push the same meaning."
    },
    {
     "t": "h",
     "x": "What counts as a long shot"
    },
    {
     "t": "p",
     "x": "Arnheim says a long shot includes the whole of everything relevant to the situation. In his Buster Keaton example, a shot of an office becomes in effect a detail shot, because the crucial thing in it is one corner of the room. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "Use this as your working definition of shot size. Ask what the audience needs to see, and size the shot to it. {{arnheim-making}}"
    },
    {
     "t": "h",
     "x": "Close-ups and long shots work as a pair"
    },
    {
     "t": "p",
     "x": "Arnheim says a close-up can show a detail that stands for the whole, such as one man in a procession mopping his brow. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "Too many close-ups lose the room and the position of the people, which gives the viewer a tiresome sense of uncertainty. Pair them with long shots. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "Fabe describes The 400 Blows. Truffaut shoots Antoine and René in freedom with a moving camera and wide-angle, deep-focus long shots. Wide-angle lenses tend to exaggerate the distance between foreground and background and make the world seem open. {{fabe-400}}"
    },
    {
     "t": "p",
     "x": "Once Antoine is jailed, the frame closes in. In one shot a grid pattern encloses his face like a noose. {{fabe-400}}"
    },
    {
     "t": "check",
     "q": "What did Arnheim say the barred-gate shot did?",
     "o": [
      "It put the prison into a shot about freedom",
      "It hid the prisoner",
      "It changed the lens",
      "It slowed the action"
     ],
     "a": 0,
     "w": "The camera moved behind the bars, so the prison framed the free road. {{arnheim-making}}"
    },
    {
     "t": "check",
     "q": "Hitchcock's rule as Brown gives it says an object's size in frame should equal...",
     "o": [
      "Its importance in the story at that moment",
      "Its real size",
      "Its distance from the lens",
      "Its brightness"
     ],
     "a": 0,
     "w": "Size in frame follows importance. {{brown-technique}}"
    },
    {
     "t": "activity",
     "x": "Shoot one action twice: someone opens a door and sees a letter. First choose the angle that shows it most clearly. Then choose an angle that adds meaning, such as a low view or a foreground obstruction. Say what each version tells the audience."
    },
    {
     "t": "take",
     "i": [
      "An angle is a choice of what to show and what to hide. {{arnheim-making}}",
      "Make the important thing large in the frame. {{brown-technique}}",
      "A long shot means the whole of what matters, not a set distance. {{arnheim-making}}"
     ]
    }
   ]
  },
  {
   "id": "l9",
   "title": "Depth cues, flat space and depth-of-field myths",
   "min": 20,
   "blocks": [
    {
     "t": "h",
     "x": "Depth cues"
    },
    {
     "t": "p",
     "x": "Block lists the cues that make a picture read as deep or flat: converging lines, size change, textural diffusion, relative movement, aerial diffusion such as fog or smoke, tonal and colour separation, position against the horizon, shape change, overlap and focus. {{block-space}}"
    },
    {
     "t": "p",
     "x": "Relative movement is the cue a dolly adds. Block's example: the camera starts 5 feet from a foreground actor and 100 feet from background actors, then dollies forward 3 feet. {{block-space}}"
    },
    {
     "t": "example",
     "title": "Block's dolly example, our arithmetic",
     "steps": [
      "After the dolly the camera is 2 feet from the foreground actor and 97 feet from the background actors.",
      "The foreground actor appears 5 ÷ 2 = 2.5 times larger.",
      "The background actors appear 100 ÷ 97 = about 1.03 times larger, about 3 per cent. Block gives the same 3 per cent.",
      "The big change in front and the small change behind is the relative movement that reads as depth."
     ]
    },
    {
     "t": "p",
     "x": "A pan, tilt or zoom adds no relative movement, so Block says these moves emphasise flat space. He calls a zoom the flat-space equivalent of a dolly. {{block-space}}"
    },
    {
     "t": "h",
     "x": "The lens and flat space"
    },
    {
     "t": "p",
     "x": "In Block's telephoto example, an actor runs at the lens and the space looks flat. The actor stays so far from the camera that size, texture and speed barely change, so the depth cues are not activated. {{block-space}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "This agrees with the first lesson of this module. Distance from the subject drives perspective, and focal length alone does not. {{block-space}}"
    },
    {
     "t": "h",
     "x": "Equal framing and depth of field"
    },
    {
     "t": "p",
     "x": "Brown dispels a common belief. People think a wider lens gives more depth of field, then move the camera forward to keep the same frame. They end up with about the same depth of field, because image magnification is the critical factor. {{brown-optics}}"
    },
    {
     "t": "p",
     "x": "The depth-of-field formula still holds. Depth of field falls with the square of focal length when subject distance and f-number are fixed. Brown's point is that moving the camera changes the subject distance. {{brown-optics}}"
    },
    {
     "t": "p",
     "x": "As a rule of thumb, Brown says depth of field usually runs about one third in front of the point of focus and two thirds behind it. {{brown-optics}}"
    },
    {
     "t": "example",
     "title": "Brown's hyperfocal example, our arithmetic",
     "steps": [
      "A 50 mm lens at f/8 with a circle of confusion of 0.001 inch, which is 0.0254 mm.",
      "H = 50² ÷ (8 × 0.0254) + 50 = 2,500 ÷ 0.2032 + 50 = about 12,303 + 50 = 12,353 mm.",
      "12,353 mm ÷ 304.8 = about 40.5 feet. Brown gives about 40 feet."
     ]
    },
    {
     "t": "h",
     "x": "Close-up tools with checkable numbers"
    },
    {
     "t": "ul",
     "i": [
      "Extender factor: square the extension factor to get the exposure factor. A 2X gives 4, which is 2 stops. A 3X gives 9, about 3 stops. {{brown-optics}}",
      "Factors multiply. A 2X and a 3X together give 36, about five stops (log base 2 of 36 is 5.17, our arithmetic). {{brown-optics}}",
      "A 2X extender turns a 200 mm f/4 into a 400 mm f/8. {{brown-optics}}",
      "Close-focus diopter limit: divide 100 cm by the diopter power. A +2 diopter focuses at 50 cm. {{brown-optics}}"
     ]
    },
    {
     "t": "h",
     "x": "Hire-day lens tests"
    },
    {
     "t": "p",
     "x": "Brown lists twelve basic lens tests: resolution, corner resolution, vignetting, optical shift during focus, barrel distortion, pincushion distortion, collimation, infinity focus, veiling glare, consistent colour rendition, contrast, and depth of field for video and high-definition work. {{brown-optics}}"
    },
    {
     "t": "check",
     "q": "A 2X extender has what exposure factor?",
     "o": [
      "2",
      "4",
      "8",
      "16"
     ],
     "a": 1,
     "w": "Square the extension factor: 2 × 2 = 4, which is 2 stops. {{brown-optics}}"
    },
    {
     "t": "check",
     "q": "You fit a wider lens and move closer to keep the same frame. What happens to depth of field?",
     "o": [
      "About the same",
      "Much deeper",
      "Much shallower",
      "It disappears"
     ],
     "a": 0,
     "w": "Image magnification is unchanged, so depth of field is about the same. {{brown-optics}}"
    },
    {
     "t": "take",
     "i": [
      "A dolly shows depth; a zoom keeps space flat. {{block-space}}",
      "Equal framing gives about equal depth of field. {{brown-optics}}",
      "Square the extension factor for the exposure factor. {{brown-optics}}"
     ]
    }
   ]
  },
  {
   "id": "l10",
   "title": "Composition checklist",
   "min": 14,
   "blocks": [
    {
     "t": "h",
     "x": "People in the frame"
    },
    {
     "t": "p",
     "x": "Brown's headroom rule: leave the least headroom that does not make the head look crammed against the top. The closer the shot, the less headroom you can leave, and in a very tight shot the frame can cut into the top of the head. {{brown-frame}}"
    },
    {
     "t": "p",
     "x": "Noseroom, also called looking room: a turned head has visual weight, so never put it in the exact middle. The more the head turns, the more room it needs. {{brown-frame}}"
    },
    {
     "t": "p",
     "x": "TV safe: ground glass markings often include a line 10 per cent inside the full frame. Keep important elements inside it. This comes from broadcast practice, so check the framing your delivery needs. {{brown-frame}}"
    },
    {
     "t": "h",
     "x": "Block's seven components"
    },
    {
     "t": "p",
     "x": "Block names seven basic visual components: space, line, shape, tone, colour, movement and rhythm. Every picture is made of them, and each carries mood, emotion and ideas. {{block-intro}}"
    },
    {
     "t": "p",
     "x": "Use them as a checklist when a frame feels wrong. Ask which component is working against the story. {{block-intro}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Lens, angle and movement mostly control space. Lighting controls tone, and the grade controls colour."
    },
    {
     "t": "check",
     "q": "Which is one of Block's seven components?",
     "o": [
      "Rhythm",
      "Aperture",
      "Focal length",
      "Shutter"
     ],
     "a": 0,
     "w": "The seven are space, line, shape, tone, colour, movement and rhythm. {{block-intro}}"
    },
    {
     "t": "check",
     "q": "What is TV safe, in the book's description?",
     "o": [
      "A marking about 10 per cent inside the full frame",
      "A shutter setting",
      "A kind of filter",
      "A frame rate"
     ],
     "a": 0,
     "w": "Important elements should stay inside it. {{brown-frame}}"
    },
    {
     "t": "take",
     "i": [
      "Leave the least headroom that does not look crammed. {{brown-frame}}",
      "Give turned heads noseroom. {{brown-frame}}",
      "Check frames against Block's seven components. {{block-intro}}"
     ]
    }
   ]
  },
  {
   "id": "l11",
   "title": "The lecturer's method: Gregg Toland",
   "min": 26,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "This lesson rests on Toland's own 1941 essay, read in full, which makes the record rich for this topic. Wikipedia is used only to show where a source differs. {{toland-ac1941}} {{wiki-toland}}"
    },
    {
     "t": "h",
     "x": "His method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Measure the depth the composition needs. Some sets needed acceptable sharpness over nearly 200 feet. In another shot, two people were two or three feet from the lens with important action 30 to 40 feet behind them. {{toland-ac1941}}",
      "In one close composition a head less than 16 inches from the camera and a loving cup at arm's length were both sharp, with men 12 to 18 feet away also sharp. {{toland-ac1941}}",
      "Choose the lens and the stop. Short lenses increase depth, and so does stopping down. He says 35, 28 and 24 mm lenses at f/11 or f/16 become, for practical purposes, universal-focus lenses. {{toland-ac1941}}",
      "Pay for the stop with light and film. Smaller stops are paid for by raising the illumination level, a faster film and arc lamps, which put much light into a small unit. {{toland-ac1941}}",
      "Change the lighting balance. Fast film tends to flatten contrast, while coated lenses and small apertures both raise it, so scenes must be lit with much less contrast, with shadows opened up by more fill. {{toland-ac1941}}",
      "Set focus by experience and test the lens. He says the right focus point depends on focal length, stop and focus distance, and some lenses are poor at certain stops. {{toland-ac1941}}"
     ]
    },
    {
     "t": "table",
     "title": "Conventional interiors against Citizen Kane, in Toland's words",
     "head": [
      "",
      "Conventional interior",
      "Citizen Kane"
     ],
     "rows": [
      [
       "Aperture",
       "Maximum or close to it, f/2.3 to f/2.8, rarely f/3.5",
       "f/8 or smaller, often f/11, one at f/16"
      ],
      [
       "Light",
       "Spots from overhead rails",
       "Arc broadsides from the floor"
      ],
      [
       "Units used",
       "Not stated",
       "In many scenes, only five or six"
      ],
      [
       "Contrast",
       "Usual",
       "Much lower, shadows opened with fill"
      ]
     ],
     "src": "From {{toland-ac1941}}."
    },
    {
     "t": "h",
     "x": "Worked example 1: what f/11 buys over f/2.8"
    },
    {
     "t": "example",
     "title": "Depth of field on a 35 mm lens (c = 0.03 mm and the lens are illustrative)",
     "steps": [
      "DOF ≈ 2 u² N c ÷ f². {{wiki-dof}} For a 35 mm lens, a subject at 3 m, and c = 0.03 mm, at f/2.8 that is 2 × 3000² × 2.8 × 0.03 ÷ 35² = 1,512,000 ÷ 1225 ≈ 1234 mm, about 1.2 m.",
      "At f/11 it is 2 × 3000² × 11 × 0.03 ÷ 35² = 5,940,000 ÷ 1225 ≈ 4849 mm, about 4.8 m. {{wiki-dof}}",
      "The depth is about four times larger. f/2.8 to f/11 is four stops (f/2.8, 4, 5.6, 8, 11), so you need 16 times the light."
     ]
    },
    {
     "t": "h",
     "x": "Worked example 2: checking his focusing example against the formula"
    },
    {
     "t": "example",
     "title": "Focus at 4 feet 6 inches (our check, with illustrative lens and blur values)",
     "steps": [
      "Toland gives one example: focus set 4 feet 6 inches (about 1372 mm) from the camera, and everything from 18 inches to infinity acceptably sharp. He does not say which lens or stop. {{toland-ac1941}}",
      "The standard hyperfocal formulas are not in his essay or our sources, so this check is our addition: H = f² ÷ (N × c), near limit = H × u ÷ (H + u), far limit = H × u ÷ (H − u) if u is less than H, otherwise infinity.",
      "Try a 24 mm lens at f/16 with c = 0.03 mm: H = 576 ÷ 0.48 = 1200 mm. Because 1372 mm is more than H, the far limit is infinity. The near limit is 1200 × 1372 ÷ 2572 ≈ 640 mm, about 25 inches.",
      "With a looser blur tolerance of c = 0.045 mm, H is 800 mm and the near limit is about 505 mm, about 20 inches, close to his 18 inches.",
      "So his statement is plausible for a wide lens at a very small stop with a generous blur tolerance, but it is not true for every lens. Do not copy a focusing rule without testing it."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Very small apertures lose sharpness to diffraction on many lenses. That is not in Toland's essay; it is our caution, which is why he and we say to test each lens."
    },
    {
     "t": "h",
     "x": "Apply it: a depth budget"
    },
    {
     "t": "ol",
     "i": [
      "Sketch the shot and write the nearest and farthest things that must be sharp, with distances.",
      "Pick a lens and a stop, and work the depth of field with the formula. If it falls short, go wider or stop down.",
      "Work the stops you gave up. Each stop smaller needs twice the light.",
      "Set the lighting contrast to match: open the shadows with fill, and check the highlights.",
      "Shoot a test at your chosen stop and the stop on each side, and check the near and far limits against your numbers."
     ]
    },
    {
     "t": "activity",
     "x": "Do the depth budget on a real scene. Report the predicted and measured near and far limits and the stops of light paid."
    },
    {
     "t": "check",
     "q": "Which two changes did Toland say raise contrast?",
     "o": [
      "Fast film and long lenses",
      "Coated lenses and reduced apertures",
      "Arc lamps and muslin",
      "Low angles and ceilings"
     ],
     "a": 1,
     "w": "He says fast film flattens contrast, while coated lenses and reduced apertures increase it. {{toland-ac1941}}"
    },
    {
     "t": "check",
     "q": "You close from f/2.8 to f/11. About how much more light do you need?",
     "o": [
      "Twice",
      "Four times",
      "Sixteen times",
      "Sixty-four times"
     ],
     "a": 2,
     "w": "Four stops is 2 to the power 4, which is 16."
    },
    {
     "t": "check",
     "q": "Does a focusing rule from a published example work for any lens?",
     "o": [
      "Yes",
      "No, it depends on the lens and stop, so test it",
      "Only on film",
      "Only at f/11"
     ],
     "a": 1,
     "w": "Our check shows his example holds only for a wide lens at a very small stop with a generous blur tolerance."
    },
    {
     "t": "take",
     "i": [
      "Set the stop from the depth the shot needs. {{toland-ac1941}}",
      "Deep focus is paid for in light and in lighting contrast. {{toland-ac1941}}",
      "Test your lens at your stop before you trust a number."
     ]
    }
   ]
  }
 ]
};
