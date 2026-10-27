/* Cinematography: DSLR and analog film (module 5). Block types: _template/TEMPLATE.md. */
(window.COURSE = window.COURSE || {})["cinematography-5"] = {
 "intro": "A good shot moves for a reason and cuts together with its neighbours. This module covers how cameras move, the continuity rule that keeps an audience oriented, and how to plan coverage so the edit has what it needs. Lecturer lens: Karl Freund took the camera off the tripod, and later perfected a three-camera system with a wide centre camera and two close-up cameras. His account is a plan for coverage, lenses, crew and rehearsal.",
 "outcomes": [
  "Name the basic camera moves, choose a support for each, and give a reason for the movement.",
  "Plan camera positions that obey the 180-degree rule and know when and how to break it.",
  "Write a shot list for a short scene, estimate its schedule and calculate the shooting ratio.",
  "Lecturer's method: Plan a multi-camera set-up with a wide camera and close cameras, convert his lens choices to your sensor, and schedule the rehearsal that makes it work."
 ],
 "lessons": [
  {
   "id": "l1",
   "title": "Camera movement and what carries it",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "The earliest film cameras were fastened directly to a tripod head, so the first films were effectively fixed shots. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "In 1897 Robert W. Paul had the first real rotating camera head made so he could follow a procession in one uninterrupted shot. {{wiki-cine}}"
    },
    {
     "t": "p",
     "x": "Since then the vocabulary of movement has grown, but the first question stays the same: why is the camera moving?"
    },
    {
     "t": "table",
     "title": "Basic moves (our summary of common vocabulary)",
     "head": [
      "Move",
      "What moves",
      "Typical effect"
     ],
     "rows": [
      [
       "Pan",
       "Camera turns left or right on a fixed point",
       "Follows action or reveals space"
      ],
      [
       "Tilt",
       "Camera turns up or down",
       "Reveals height or a face"
      ],
      [
       "Dolly or track",
       "Camera travels on wheels or a track",
       "Smooth travel into or alongside the scene"
      ],
      [
       "Push in",
       "Dolly or slider moves towards the subject",
       "Rising attention"
      ],
      [
       "Handheld",
       "Operator carries the camera",
       "Urgency, documentary feel"
      ],
      [
       "Zoom",
       "Lens focal length changes",
       "Changes framing without moving the camera; looks different from a push in"
      ]
     ],
     "src": "Vocabulary is conventional."
    },
    {
     "t": "p",
     "x": "A zoom changes the focal length without moving the camera, so the whole image is magnified equally, like walking up to a photograph. A dolly or push in moves the camera through the space, so perspective changes and objects slide past the edges of the frame. {{fh-ch9}} The moving camera adds a sense of depth, while the zoom tends to flatten space and can draw attention to the act of filming. {{fh-ch9}}"
    },
    {
     "t": "ul",
     "i": [
      "Zoom against the direction of travel and you get a treadmill effect: a runner coming towards the camera seems to make no progress if the lens zooms back. {{fh-ch9}}",
      "Dolly one way and zoom the other, and the subject keeps the same size while the perspective stretches. Hitchcock used this in Vertigo, and Spielberg and Scorsese used it too. {{fh-ch9}}",
      "A good zoom starts slowly, reaches its speed and eases to a stop. You can hide a zoom inside a pan, and novices tend to zoom too often. {{fh-ch9}}"
     ]
    },
    {
     "t": "p",
     "x": "Pans work best when they follow a moving subject. The hardest pans cross still landscapes or objects, where any unevenness shows, and they must be slow. {{fh-ch9}} The classic advice is that a move should start from rest, gather speed and ease down to a stop, though it is often broken. {{fh-ch9}} Bigger screens exaggerate camera movement. {{fh-ch9}}"
    },
    {
     "t": "h",
     "x": "Judder: how fast is too fast to pan"
    },
    {
     "t": "p",
     "x": "At 24 fps there are fewer pictures a second, so a fast move can look as if the object jumps from place to place. That is judder, also called strobing, and it can cause eyestrain. {{fh-ch9}} A rule of thumb is to allow at least five to seven seconds for an object to cross the screen, whether the camera pans or the subject moves through a fixed frame. {{fh-ch9}}"
    },
    {
     "t": "table",
     "title": "How far the picture jumps between frames (our arithmetic, 1920-pixel-wide frame at 24 fps)",
     "head": [
      "Seconds to cross the screen",
      "Frames",
      "Pixels per frame"
     ],
     "rows": [
      [
       "1",
       "24",
       "80"
      ],
      [
       "3",
       "72",
       "about 27"
      ],
      [
       "5",
       "120",
       "16"
      ],
      [
       "7",
       "168",
       "about 11"
      ]
     ]
    },
    {
     "t": "ul",
     "i": [
      "Judder is worst on fast pans across strong vertical lines, in sharp, high-contrast scenes, and on large screens. {{fh-ch9}}",
      "If the camera follows a subject, the viewer watches the subject and notices the background less. Use shallow depth of field to let the background go soft. {{fh-ch9}}",
      "Fast swish pans are usually not a problem. {{fh-ch9}}",
      "A slow shutter such as 1/24 s may reduce judder on a video camera. {{fh-ch9}}",
      "Wheels that look stopped or spinning backwards are the same effect: the frames catch the spokes in the same or slightly earlier position. {{fh-ch9}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Our reading: the table makes the rule concrete. Under the seven-second rule the picture shifts about 11 pixels a frame across a 1920-pixel image, while a one-second pan shifts 80. That is a useful figure to test against your own footage on a big screen."
    },
    {
     "t": "h",
     "x": "Supports for a DSLR kit"
    },
    {
     "t": "table",
     "title": "Supports and when to use them (our summary)",
     "head": [
      "Support",
      "Strength",
      "Limit"
     ],
     "rows": [
      [
       "Tripod with fluid head",
       "Smooth pans and tilts",
       "Fixed position"
      ],
      [
       "Slider",
       "Small smooth moves, good for detail",
       "Short travel"
      ],
      [
       "Gimbal",
       "Smooth walking shots",
       "Learning curve; balance and battery"
      ],
      [
       "Shoulder rig",
       "Handheld control with weight",
       "Fatigue"
      ],
      [
       "Dolly and track",
       "Longer, controlled travel",
       "Space and set-up time"
      ],
      [
       "Monopod",
       "Quick height and stability",
       "Not locked off"
      ]
     ],
     "src": "Summary is ours."
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Handheld telephoto shots with a rolling-shutter sensor wobble, and fast sideways moves skew vertical lines. {{wiki-rolling}} Prefer a wider lens and a gimbal for moving shots."
    },
    {
     "t": "example",
     "title": "Worked example: planning a slider push-in (illustrative)",
     "steps": [
      "The slider travels 80 cm and the move lasts 8 seconds.",
      "Speed = 80 ÷ 8 = 10 cm per second.",
      "At 24 fps the clip has 8 × 24 = 192 frames, so the camera advances 80 ÷ 192 ≈ 0.42 cm per frame.",
      "If you want the move slower on screen, lengthen the time, not the distance: 12 seconds covers 80 cm at about 6.7 cm per second.",
      "Keep the focus pulled to the end position and test the focus at both ends before the take."
     ]
    },
    {
     "t": "p",
     "x": "The handbook suggests a slow, deliberate slider move of six seconds or more with a wide-angle lens, and says the movement reads best when the camera passes objects in the foreground. {{fh-ch9}} The 8-second move above fits that advice."
    },
    {
     "t": "ul",
     "i": [
      "Tripod: a fluid head is best for smooth pans, because a friction head makes smooth pans hard. Level the tripod, and use a spreader and a quick-release plate. {{fh-ch9}}",
      "Handheld: a shoulder-mounted camera is steadiest. A wide lens makes jiggle less annoying. In unscripted work, practise counting slowly to six without any camera movement. {{fh-ch9}}",
      "Gimbal and Steadicam type devices give dolly-like moves with fast set-ups, but they respond to sudden subject movement more slowly than a shoulder camera and can bob when they stop. {{fh-ch9}}",
      "Image stabilisation: lens stabilisers can add a floating lag to some movements, and electronic stabilisation uses a cropped part of the sensor. Software can also steady footage in post. {{fh-ch9}}",
      "Vehicles: shooting at right angles to a moving car makes it look roughly twice as fast as it is, and wide lenses exaggerate speed. {{fh-ch9}}"
     ]
    },
    {
     "t": "activity",
     "x": "Choose one subject and film three moves: a pan, a push in and a handheld walk. Write a reason for each move in a sentence."
    },
    {
     "t": "check",
     "q": "What best reduces wobble in a handheld shot on a rolling-shutter camera?",
     "o": [
      "A wider lens and a steadier support",
      "A higher ISO",
      "A warmer white balance",
      "A longer shutter"
     ],
     "a": 0,
     "w": "Wobble appears when the camera vibrates, especially handheld at telephoto settings. {{wiki-rolling}}"
    },
    {
     "t": "check",
     "q": "A slider moves 60 cm in 5 seconds. What is the speed?",
     "o": [
      "6 cm/s",
      "10 cm/s",
      "12 cm/s",
      "30 cm/s"
     ],
     "a": 2,
     "w": "60 ÷ 5 = 12 cm per second."
    },
    {
     "t": "check",
     "q": "The handbook's rule of thumb for avoiding judder says an object should take at least how long to cross the screen?",
     "o": [
      "Five to seven seconds",
      "One second",
      "Two seconds",
      "Thirty seconds"
     ],
     "a": 0,
     "w": "Allow at least five to seven seconds, for a camera pan or a subject moving through a still frame. {{fh-ch9}}"
    },
    {
     "t": "check",
     "q": "What is the main visual difference between a dolly push in and a zoom?",
     "o": [
      "The dolly changes perspective and the zoom magnifies the whole image equally",
      "The zoom changes perspective and the dolly does not",
      "There is no difference",
      "The dolly is always faster"
     ],
     "a": 0,
     "w": "A dolly moves through space and changes perspective. A zoom magnifies everything equally. {{fh-ch9}}"
    },
    {
     "t": "take",
     "i": [
      "Move the camera for a reason you can say in one sentence.",
      "Choose the support to match the move.",
      "Rolling shutter punishes shaky telephoto shots. {{wiki-rolling}}"
     ]
    }
   ]
  },
  {
   "id": "l2",
   "title": "The 180-degree rule and continuity",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "The 180-degree rule keeps the camera on one side of an imaginary line between two characters, so the first character stays frame right of the second. {{wiki-180}}"
    },
    {
     "t": "p",
     "x": "Crossing the line is called jumping the line, and shooting on all sides of it is shooting in the round. {{wiki-180}}"
    },
    {
     "t": "fig",
     "id": "cinematography-rule180",
     "title": "The line of action",
     "cap": "Cameras on the green side keep A on the left and B on the right in every shot. A camera on the red side swaps them."
    },
    {
     "t": "p",
     "x": "Shifting to the other side of the characters on a cut reverses their left-to-right order and may disorient the viewer. {{wiki-180}}"
    },
    {
     "t": "p",
     "x": "The rule also applies to the path of a moving character: if a character walks to the left, the next shot should show them leaving frame left and entering frame right. {{wiki-180}}"
    },
    {
     "t": "p",
     "x": "A car chase is an example. If a vehicle leaves the right side of the frame, it should enter from the left in the next shot. {{wiki-180}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "The line is set by the action. Draw it between the people or along the direction of movement before you place the camera."
    },
    {
     "t": "p",
     "x": "The 180° system gives you three things at once: a consistent left-to-right position for the characters, consistent eyelines, and consistent screen direction for anything that moves. {{fa-ch6}} Cut to a shot from the other side and the two characters swap places on screen. {{fa-ch6}} Crossing the line while establishing a scene is worse. If two cowboys are shown walking in the same screen direction, the viewer may think one is following the other. {{fa-ch6}}"
    },
    {
     "t": "ul",
     "i": [
      "A shot taken on the line itself is neutral and can be cut with shots from either side. {{fh-ch9}}",
      "The camera can cross the line during a take with little disorientation. The trouble comes if you later cut that shot out, which forces a cut across the line, and a neutral shot between them can ease it. {{fh-ch9}}",
      "It matters most where screen direction builds the space, such as a shot/reverse-shot conversation, where the two must look in opposite directions, or a chase. {{fh-ch9}}",
      "It can apply across scenes: interviews with opposing views are often framed facing opposite sides, to suggest contrast. {{fh-ch9}}",
      "When two lines compete, for example two people talking in a moving car, draw the line along their eyelines, because their relationship is the key element. {{fh-ch9}}"
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "The 180° system is a convention of the continuity style, not a law. Ozu cuts across the line often and Tati works as if the action were a point at the centre of a circle, with the camera free to stand anywhere on the circumference. {{fa-ch6}} The handbook calls the continuity rules guidelines, and says violations may disorient the audience but are rarely disastrous. {{fh-ch9}}"
    },
    {
     "t": "h",
     "x": "Crossing the line on purpose"
    },
    {
     "t": "p",
     "x": "There are ways to cross the line without confusion: alter the movement, or set cameras on one side only. {{wiki-180}}"
    },
    {
     "t": "p",
     "x": "The LMU book names three options: the rule itself, keeping the eyeline match across the cut, and a shot that motivates the crossing. {{lmu-nonsense}}"
    },
    {
     "t": "p",
     "x": "Another way is a shot in which the camera arcs from one side of the line to the other during the scene, which orients the viewer to the new angle. {{wiki-180}}"
    },
    {
     "t": "p",
     "x": "A jump cut can also be used to denote time, for example when a character leaves frame left and re-enters frame left in a new place. {{wiki-180}}"
    },
    {
     "t": "example",
     "title": "Worked example: two people at a table (illustrative)",
     "steps": [
      "A sits on the left, B on the right, seen from the camera in the master shot. The line runs from A to B.",
      "Camera positions on the master side give an over-the-shoulder of A looking right and an over-the-shoulder of B looking left.",
      "In every cut A looks right and B looks left, so their eyelines match.",
      "If you place a camera behind B and shoot A from the other side, A looks left and the pair looks like they have swapped places.",
      "To cross the line, add a wide shot on the line, or have a person stand and move so the line changes, then cut."
     ]
    },
    {
     "t": "h",
     "x": "Other continuity points"
    },
    {
     "t": "ul",
     "i": [
      "Keep props, costume and hand positions consistent across takes.",
      "Match the direction of light on faces from shot to shot.",
      "Use the same exposure settings and white balance for every shot in a scene.",
      "Slate every take so the edit can find it."
     ]
    },
    {
     "t": "p",
     "x": "A second continuity problem is the jump cut, where two takes of the same shot are cut together and the picture appears to leap. To avoid it, make the second shot clearly different in size and angle: change the focal length or move the camera forward or back, and also move it sideways. Some say the angle should change by at least 30°, but the LMU book sets the minimum at 45°, which is the safer figure. {{fh-ch9}} {{lmu-nonsense}} A wide shot cuts easily with a medium or close-up, but two similar mediums often feel rough. {{fh-ch9}}"
    },
    {
     "t": "ul",
     "i": [
      "Overlap the action between shots, so the editor can choose a cutting point. For a wide shot of a man getting into a car, run through the door slam, and begin the close-up before the point where the wide ended. {{fh-ch9}}",
      "When a character walks out of frame, let them leave completely at the end of a shot, which gives the editor more options. {{fh-ch9}}",
      "A cutaway, such as a listener in the crowd at a speech, covers a join. {{fh-ch9}}"
     ]
    },
    {
     "t": "activity",
     "x": "Draw an overhead sketch of a dialogue scene with the line marked. Place the cameras. Film it and check, frame by frame, that A is always on the same side."
    },
    {
     "t": "check",
     "q": "What does the 180-degree rule keep consistent?",
     "o": [
      "The colour",
      "The left-to-right positions of the characters",
      "The focal length",
      "The frame rate"
     ],
     "a": 1,
     "w": "The first character stays frame right of the second. {{wiki-180}}"
    },
    {
     "t": "check",
     "q": "A car leaves the right side of the frame. Where should it enter in the next shot?",
     "o": [
      "The right",
      "The left",
      "Top",
      "It does not matter"
     ],
     "a": 1,
     "w": "To keep direction, it should enter from the left. {{wiki-180}}"
    },
    {
     "t": "check",
     "q": "Two takes of the same close-up from the same position are cut together and the picture seems to leap. What is this called?",
     "o": [
      "A jump cut",
      "A cutaway",
      "A reverse shot",
      "A rack focus"
     ],
     "a": 0,
     "w": "Cutting two similar shots of the same subject without a clear change of size and angle gives a jump cut. {{fh-ch9}}"
    },
    {
     "t": "take",
     "i": [
      "Draw the line first, then place the cameras. {{wiki-180}}",
      "Direction of movement matters as much as position. {{wiki-180}}",
      "Cross the line deliberately, with a bridging shot or a camera move. {{wiki-180}}"
     ]
    }
   ]
  },
  {
   "id": "l3",
   "title": "Coverage and the shot list",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "Coverage means shooting a scene from enough positions that the editor can build it several ways. The standard set is a master, singles, over-the-shoulders and inserts. This is common practice, summarised by us."
    },
    {
     "t": "table",
     "title": "Standard coverage for a two-person scene (our summary)",
     "head": [
      "Shot",
      "What it does",
      "Setups"
     ],
     "rows": [
      [
       "Master",
       "The whole scene in one wide shot; safety net for the edit",
       "1"
      ],
      [
       "Over-the-shoulder (A and B)",
       "Links the speakers; keeps space",
       "2"
      ],
      [
       "Close-ups (A and B)",
       "Emotion and reaction",
       "2"
      ],
      [
       "Inserts and cutaways",
       "Objects, hands, details that tell story or cover cuts",
       "1 or more"
      ]
     ],
     "src": "Counts are typical, not fixed."
    },
    {
     "t": "p",
     "x": "Classic Hollywood coverage was a master shot, a two-shot, a close-up of one character and a reverse of the other. {{fh-ch9}} A scene often moves from long shot to medium to close-up, which orients the audience and feels like moving into the action. {{fh-ch9}} A cut the other way, from medium to long, suggests larger action or a leave-taking. {{fh-ch9}} Audiences today accept freer styles, so treat these as habits, not rules. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "Coverage matters because angles let the editor change the pace, choose the best performances and edit around mistakes. If a scene is covered with only one or two angles, options are limited, and many editors have lamented a director's lack of coverage. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "Overlap the action between takes so the cuts have material to match. Each take should run a little before and after the lines."
    },
    {
     "t": "h",
     "x": "Writing a shot list"
    },
    {
     "t": "p",
     "x": "A shot list is a table of every setup in the order you plan to shoot it. A storyboard draws the frames. A shot list is faster to write and enough for many small shoots."
    },
    {
     "t": "table",
     "title": "A shot list for one scene (illustrative)",
     "head": [
      "#",
      "Shot",
      "Lens",
      "Move",
      "Notes"
     ],
     "rows": [
      [
       "1",
       "Wide master of the table",
       "24 mm",
       "Locked off",
       "Both actors; whole dialogue"
      ],
      [
       "2",
       "OTS on A",
       "50 mm",
       "Locked off",
       "Eyeline right"
      ],
      [
       "3",
       "OTS on B",
       "50 mm",
       "Locked off",
       "Eyeline left"
      ],
      [
       "4",
       "Close-up A",
       "85 mm",
       "Slow push in",
       "Last four lines"
      ],
      [
       "5",
       "Close-up B",
       "85 mm",
       "Locked off",
       "Reaction"
      ],
      [
       "6",
       "Insert of the letter",
       "50 mm",
       "Locked off",
       "Hands only"
      ]
     ],
     "src": "Illustrative list."
    },
    {
     "t": "example",
     "title": "Worked example: schedule and shooting ratio (illustrative numbers)",
     "steps": [
      "Six setups. For each: 15 minutes to light and place the camera, 10 minutes to rehearse, three takes of 2 minutes each (6 minutes), and 5 minutes to reset. That is 36 minutes.",
      "Six setups take 6 × 36 = 216 minutes, or 3 hours 36 minutes, before breaks.",
      "Footage shot: six setups × 3 takes × 2 minutes = 36 minutes of material.",
      "Suppose the scene runs 4 minutes in the final cut. The shooting ratio is 36 : 4, or 9 to 1.",
      "On film the same ratio costs far more per minute, which is why film shoots rehearse longer and shoot fewer takes. The analog module explains why."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Shoot the wide first, then work in towards close-ups. Actors warm up in the wide, and you have a safe edit if time runs out."
    },
    {
     "t": "p",
     "x": "The handbook puts a carefully planned drama at roughly 5:1 to 15:1, so the 9:1 in the example sits inside that range. {{fh-ch9}} Digital footage costs little per minute, so people tend to shoot at a much higher ratio than on film. That can relax a shoot and let you take risks, but it can also produce rambling shots with no clear start or finish, and it brings real costs in storage, transcoding and time spent viewing and logging. {{fh-ch9}} Deciding in advance which part of a scene needs the wide and which needs close-ups, sometimes called pre-editing, saves time but reduces options. {{fh-ch9}}"
    },
    {
     "t": "activity",
     "x": "Write a shot list for a one-page scene. Count the setups, estimate the schedule using the method above, and work out the shooting ratio after the edit."
    },
    {
     "t": "check",
     "q": "Why shoot a master as well as close-ups?",
     "o": [
      "It is a legal rule",
      "It gives the editor a full-scene safety net",
      "It is cheaper",
      "It avoids rehearsal"
     ],
     "a": 1,
     "w": "The master lets the editor cover mistakes and build the scene."
    },
    {
     "t": "check",
     "q": "You shoot 36 minutes and use 4 minutes. What is the shooting ratio?",
     "o": [
      "4:1",
      "9:1",
      "36:1",
      "144:1"
     ],
     "a": 1,
     "w": "36 ÷ 4 = 9."
    },
    {
     "t": "take",
     "i": [
      "Plan coverage before the day. Master, singles, over-the-shoulders and inserts are the baseline.",
      "A shot list turns a scene into setups you can time.",
      "The shooting ratio is footage shot divided by footage used."
     ]
    }
   ]
  },
  {
   "id": "l4",
   "title": "Planning the day with a small crew",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "The cinematographer is the person in charge of the image: lighting, camera and lenses. {{wiki-cine}} On a small shoot one person may also operate the camera, pull focus and light, but the jobs still exist."
    },
    {
     "t": "table",
     "title": "Camera-department jobs and who covers them on a small shoot (our summary)",
     "head": [
      "Job",
      "Does",
      "On a tiny crew"
     ],
     "rows": [
      [
       "Cinematographer or director of photography",
       "Designs the look and lighting",
       "You"
      ],
      [
       "Camera operator",
       "Frames and moves the camera",
       "You or a friend"
      ],
      [
       "Focus puller",
       "Keeps the subject sharp as things move",
       "A second person, or autofocus with tests"
      ],
      [
       "Gaffer or electrician",
       "Places and powers the lights",
       "You or a helper"
      ],
      [
       "Sound recordist",
       "Records dialogue",
       "A separate person if at all possible"
      ]
     ],
     "src": "Summary is ours."
    },
    {
     "t": "h",
     "x": "Schedules"
    },
    {
     "t": "ul",
     "i": [
      "Put weather-dependent exteriors early, with an interior ready to move to, and do not put a key scene on the first day. {{fh-ch9}}",
      "Group setups by location and lighting, not by story order.",
      "Leave 15 minutes between setups for resets and unexpected problems.",
      "Use daylight for exteriors in a fixed window."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "This course's earlier advice to start with the hardest scene was our own rule of thumb, and the handbook says something different for a longer shoot. It suggests easier scenes first so the team can find its rhythm, because crews are bumpy at first, settle into a groove, and then tire. {{fh-ch9}} For a single-day shoot with a small crew, the hardest-first rule can still make sense, since the crew will be at its freshest. Choose by the length of the shoot."
    },
    {
     "t": "ul",
     "i": [
      "On a low-budget film, three or four script pages in a twelve-hour day is common, and a list of set-ups is often cut back as time and light run out. {{fh-ch9}}",
      "A change of location costs a lot of time, so avoid moving during a day. {{fh-ch9}}",
      "Schedule meal breaks at least every six hours, and leave at least twelve hours between wrap and the next call. Exhaustion has caused serious accidents. {{fh-ch9}}",
      "Shoot the wide shots of a crowd first and the close-ups after most of the crowd has gone. {{fh-ch9}}"
     ]
    },
    {
     "t": "example",
     "title": "Worked example: a half-day (illustrative)",
     "steps": [
      "Call time 8:00. Load in and set up the first location: 45 minutes, so first setup at 8:45.",
      "Six setups of 36 minutes finish at 8:45 + 3 h 36 min = 12:21.",
      "Lunch from 12:30 to 13:15. Wrap and pack gear: 30 minutes.",
      "Total day: about 6 hours with only the one scene. If the plan also needs a second scene, the day is a full one.",
      "Plan 20 percent spare time. A 10-minute overrun per setup adds up to an hour."
     ]
    },
    {
     "t": "h",
     "x": "Risks and safety"
    },
    {
     "t": "ul",
     "i": [
      "Cable runs: tape them down and mark them.",
      "Heat: lamps get hot and tripods can tip. Weigh them down.",
      "Public places: check permission for filming and for equipment.",
      "Vehicles and heights: use a qualified person; do not shoot from a moving vehicle without a plan."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "The UK guidance for productions gives a drone rule of thumb: 100 m high needs 100 m horizontal separation, with 50 m from assemblies of people and a 5 m absolute minimum. It refers to the CAA for the limits, so check those before any flight. London has its own code of practice for cranes, jibs and location permits. {{filming-england-drones}} {{film-london-code}} We have not researched public liability insurance, so check that for your own location."
    },
    {
     "t": "activity",
     "x": "Write a one-page plan for a half-day shoot using the template above. List each setup, the time you give it, the crew you have and one risk you must handle."
    },
    {
     "t": "check",
     "q": "The handbook suggests scheduling which scenes relatively early in a production, in case the weather turns?",
     "o": [
      "Exteriors",
      "Night scenes only",
      "Dialogue in small rooms",
      "Insert shots"
     ],
     "a": 0,
     "w": "Exterior scenes go early because bad weather later could stop them. Have an interior ready as a cover set. {{fh-ch9}}"
    },
    {
     "t": "check",
     "q": "Why group setups by location and lighting?",
     "o": [
      "To impress the crew",
      "To cut time spent re-lighting and moving",
      "To save memory",
      "It is required"
     ],
     "a": 1,
     "w": "Re-lighting and moving are the costly parts of a day."
    },
    {
     "t": "take",
     "i": [
      "Name every job on the set, even if one person does several.",
      "Group by location and light, and put exteriors early.",
      "Add spare time and a risk list."
     ]
    }
   ]
  },
  {
   "id": "l5",
   "title": "Point of view, suspense and the cut",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "Where you put the camera decides whose story it is. The same visit to a doctor can follow the patient, follow his wife, or begin with the doctor reading the bad test result alone. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "In the third version the audience knows more than the man does, which creates irony and tension. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "Hitchcock used a bomb under a table to explain it: a surprise gives fifteen seconds of shock, while showing the bomb first gives fifteen minutes of suspense. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "An eye line close to the lens, but not into it, feels subjective. Wobbly handheld work is read by convention as a character's inner state. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "A look, a cut to what is seen, and a cut back to the face is the three-shot pattern that Hollywood took from early montage, and Rear Window is built from it. {{fh-ch13}}"
    },
    {
     "t": "table",
     "title": "Two ways to build meaning",
     "head": [
      "Approach",
      "How it works",
      "Example"
     ],
     "rows": [
      [
       "Mise-en-scène",
       "Meaning grows inside a long take with deep space",
       "Citizen Kane's deep focus; Touch of Evil's opening take"
      ],
      [
       "Montage",
       "Meaning comes from joining shots",
       "Kuleshov's neutral face with soup, a girl or a gun; Eisenstein's lions in Potemkin"
      ]
     ],
     "src": "Summary of {{fh-ch9}} and {{fh-ch13}}. Staging and cutting are tools, not opposites."
    },
    {
     "t": "p",
     "x": "Kuleshov showed that the same neutral face reads as hunger, pity or fear depending on the shot it is cut against. {{fh-ch13}}"
    },
    {
     "t": "p",
     "x": "Cut on action to hide a join. Change size and angle between shots, and use a cutaway or reaction shot to bridge a mismatch. {{fh-ch13}}"
    },
    {
     "t": "p",
     "x": "Let sound lead or follow the picture (a J-cut or an L-cut) so a conversation does not cut mechanically. {{fh-ch13}}"
    },
    {
     "t": "p",
     "x": "Hitchcock held that the sound track and the picture should contrast, and he previsualised so fully that his editor joked cutting meant trimming slates. {{fh-ch9}} {{fh-ch13}}"
    },
    {
     "t": "p",
     "x": "Edit long first, then fine-cut. Check the cut on a big screen and with fresh viewers, and keep the first minutes tight. {{fh-ch13}}"
    },
    {
     "t": "activity",
     "x": "Cut a thirty-second scene three ways: staying with one person, staying with the other, and showing the threat before either person knows. Note how your sympathy moves."
    },
    {
     "t": "check",
     "q": "What does the Kuleshov effect show?",
     "o": [
      "That actors should not move",
      "That the meaning of a shot depends on the shots around it",
      "That cuts must be invisible",
      "That close-ups are always strongest"
     ],
     "a": 1,
     "w": "The same neutral face read as different feelings depending on what it was cut with. {{fh-ch13}}"
    },
    {
     "t": "check",
     "q": "In Hitchcock's bomb example, what produces suspense?",
     "o": [
      "Hiding the bomb until it explodes",
      "Showing the audience the bomb before the characters know",
      "Cutting very fast",
      "Using a loud score"
     ],
     "a": 1,
     "w": "Giving the audience knowledge the characters lack builds suspense. {{fh-ch9}}"
    },
    {
     "t": "take",
     "i": [
      "Camera position is a point-of-view choice. {{fh-ch9}}",
      "Staging and cutting are both ways to build meaning. {{fh-ch13}}",
      "Shot meaning depends on neighbours. {{fh-ch13}}"
     ]
    }
   ]
  },
  {
   "id": "l6",
   "title": "Documentary habits, slates and the shooting ratio",
   "min": 14,
   "blocks": [
    {
     "t": "p",
     "x": "Documentary shooting is uncontrolled, so you think like an editor while you film. Get wides, reactions and neutral cutaways, and begin and end moves on a still frame for a few seconds so the editor can trim. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "For a long scene, cover it with varied angles, shots of the listener, over-the-shoulder views, and neutral shots with no visible lips or fingers. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "Keep the crew small, use few lights, and talk to your subject off camera. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "In interviews ask for full-sentence answers, no references to earlier talk, and a re-ask at a different focal length if you want to join two answers. Leave room at the bottom for lower thirds. {{fh-ch9}}"
    },
    {
     "t": "h",
     "x": "Slates, takes and ratios"
    },
    {
     "t": "p",
     "x": "A slate gives scene, take, camera roll and date. Use a timecode slate (a digislate) or a clapper board, preferably at the head of the shot, and hold it large and in focus. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "The usual call is: sound speed, camera speed, mark, then action. A tail slate is held upside down. {{fh-ch9}}"
    },
    {
     "t": "p",
     "x": "Record twenty seconds of room tone and any wild lines, and shoot at least two usable takes of key shots. {{fh-ch9}} {{fh-ch11}}"
    },
    {
     "t": "p",
     "x": "The shooting ratio is footage shot divided by finished running time. A planned drama may run 5:1 to 15:1, while reality television can run to hundreds of hours for one. {{fh-ch9}}"
    },
    {
     "t": "example",
     "title": "Worked example: a ratio (our arithmetic)",
     "steps": [
      "A ten-minute short with a ratio of 8:1 needs 80 minutes of footage.",
      "At a data rate of 24 Mb/s (3 MB/s) that is 80 × 60 × 3 = 14,400 MB, about 14.4 GB.",
      "At a day rate of three script pages in twelve hours, a thirty-page script takes about ten shooting days."
     ]
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "A very high ratio makes shooting relaxed but the cutting room slow, and shots can ramble with no start or end. Film makes you plan; digital tempts you to keep rolling. {{fh-ch9}}"
    },
    {
     "t": "check",
     "q": "What is a shooting ratio?",
     "o": [
      "Cost per minute of film",
      "Footage shot compared with the finished running time",
      "The ratio of wide to close shots",
      "The aspect ratio of the frame"
     ],
     "a": 1,
     "w": "It is total footage shot divided by final running time. {{fh-ch9}}"
    },
    {
     "t": "check",
     "q": "Why start and finish a camera move on a still frame?",
     "o": [
      "It saves battery",
      "It gives the editor clean material to trim",
      "It makes the move faster",
      "It removes judder"
     ],
     "a": 1,
     "w": "The editor may cut the static start and end, but needs them. {{fh-ch9}}"
    },
    {
     "t": "take",
     "i": [
      "Think like an editor while you shoot. {{fh-ch9}}",
      "Slate every take and record room tone. {{fh-ch9}} {{fh-ch11}}",
      "Plan the ratio against budget and time. {{fh-ch9}}"
     ]
    }
   ]
  },
  {
   "id": "l7",
   "title": "Framing: size, angle, offscreen space and function",
   "min": 15,
   "blocks": [
    {
     "t": "p",
     "x": "A frame limits what we see and sets a viewpoint. It has four decisions: size and shape, what is onscreen and offscreen, the distance, angle and height of the viewpoint, and whether the frame moves. {{fa-ch5}}"
    },
    {
     "t": "table",
     "title": "Shot sizes measured against the human body",
     "head": [
      "Shot",
      "Frames the figure"
     ],
     "rows": [
      [
       "Extreme long",
       "Figure tiny or lost; landscapes"
      ],
      [
       "Long",
       "Whole figure, background still dominates"
      ],
      [
       "Medium long",
       "From about the knees up"
      ],
      [
       "Medium",
       "From the waist up; gesture and expression"
      ],
      [
       "Medium close-up",
       "From the chest up"
      ],
      [
       "Close-up",
       "Head, hands or a small object"
      ],
      [
       "Extreme close-up",
       "Part of a face or a magnified object"
      ]
     ],
     "src": "Summary of {{fa-ch5}}. The size is judged by the proportion of the screen the subject fills, not the camera's real distance."
    },
    {
     "t": "p",
     "x": "Angle can be straight-on, high or low. Level can be true or canted (tipped). Height is separate from angle: Ozu shot from a low height with a straight-on angle. {{fa-ch5}}"
    },
    {
     "t": "callout",
     "k": "key",
     "x": "Framings have no fixed meaning. A low angle can show power, yet in Citizen Kane the lowest angles come at Kane's defeat. The context of the film decides the function. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "There are six zones of offscreen space: beyond each of the four edges, behind the set and behind the camera. A hand, a sound or a glance can bring one onscreen and surprise. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "A framing can become a motif if repeated, or stand out because it is rare, such as one extreme close-up in a film of long shots. A POV shot is a framing read as a character's view. {{fa-ch5}}"
    },
    {
     "t": "h",
     "x": "What the moving frame does"
    },
    {
     "t": "p",
     "x": "Reframing is a small pan or tilt that keeps figures balanced, so it is hardly noticed. A following shot tracks a moving figure. A camera that moves on its own can reveal a clue, a room or a connection between characters. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "A real move shows different sides of objects and lets planes slide past each other. A zoom only magnifies, so the positions of objects do not change. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "Speed matters too: fast zooms and whip pans feel energetic, and a slow descent feels solemn. {{fa-ch5}}"
    },
    {
     "t": "activity",
     "x": "Shoot one action in five sizes from medium long to extreme close-up, then cut them. Note which size gives the information and which gives the feeling."
    },
    {
     "t": "check",
     "q": "What measures whether a shot is a close-up?",
     "o": [
      "The camera's real distance",
      "How much of the screen the subject fills",
      "The lens brand",
      "The aspect ratio"
     ],
     "a": 1,
     "w": "Scale of the subject in the frame decides it. {{fa-ch5}}"
    },
    {
     "t": "check",
     "q": "A zoom differs from a track because:",
     "o": [
      "It changes the relative positions of objects",
      "It only magnifies the same view",
      "It cannot be slow",
      "It needs a dolly"
     ],
     "a": 1,
     "w": "A zoom keeps the vantage point. {{fa-ch5}}"
    },
    {
     "t": "take",
     "i": [
      "Name shot size by the body in frame. {{fa-ch5}}",
      "Angle has no fixed meaning; context does. {{fa-ch5}}",
      "Use offscreen space for surprise. {{fa-ch5}}"
     ]
    }
   ]
  },
  {
   "id": "l8",
   "title": "The cut: matching, rhythm and the long take",
   "min": 16,
   "blocks": [
    {
     "t": "p",
     "x": "Joining two shots creates four relations: graphic (shapes, light, colour), rhythmic (length), spatial and temporal. {{fa-ch6}}"
    },
    {
     "t": "h",
     "x": "Spatial continuity tools"
    },
    {
     "t": "p",
     "x": "A common pattern is an establishing shot, closer shots that break the space down, then a reestablishing shot when someone enters or moves. {{fa-ch6}}"
    },
    {
     "t": "p",
     "x": "Shot/reverse shot alternates the two ends of the axis, usually at a three-quarter view, and the eyeline match shows a look and then what is seen. A match on action cuts in the middle of a movement so the viewer follows the movement and misses the cut. {{fa-ch6}}"
    },
    {
     "t": "p",
     "x": "A cheat cut mismatches small positions, such as a chair, because the story dominates attention. Dialogue can run over a cut. When characters reposition, a new axis may be set. {{fa-ch6}}"
    },
    {
     "t": "p",
     "x": "The Kuleshov effect builds a place from separate pieces, so no shot has to show all of it. {{fa-ch6}}"
    },
    {
     "t": "h",
     "x": "Rhythm and time"
    },
    {
     "t": "p",
     "x": "In continuity style, long shots stay on screen longer than mediums, and mediums longer than close-ups. Shortening shots speeds a scene. In one sequence of The Birds, shots shrink from about 41 seconds to about 1.5 seconds, then later cuts shorten by two frames each. {{fa-ch6}}"
    },
    {
     "t": "p",
     "x": "An ellipsis can be made with a dissolve, an empty frame on each side of a cut, or a cutaway. Old rules say a dissolve means a short lapse and a fade a long one, but modern films mostly use plain cuts and changes of light, place or position. {{fa-ch6}}"
    },
    {
     "t": "p",
     "x": "Crosscutting alternates lines of action in different places and gives a sense of simultaneity. {{fa-ch6}}"
    },
    {
     "t": "p",
     "x": "Intensified continuity is the modern style: far more cuts (2,000 to 3,000 or more against 300 to 500 in 1930 to 1960), tighter framing, telephoto lenses and more camera movement. {{fa-ch6}}"
    },
    {
     "t": "h",
     "x": "The long take"
    },
    {
     "t": "p",
     "x": "A long take is a shot of unusual duration. It is not a long shot, which is a distant framing. A long take needs dense staging and often camera movement to keep interest. {{fa-ch5}}"
    },
    {
     "t": "p",
     "x": "Reel length once limited it: a 35 mm camera magazine runs about 11 minutes, which is why Rope hides its cuts. Digital allowed Russian Ark to be one shot of about 90 minutes. {{fa-ch5}}"
    },
    {
     "t": "callout",
     "k": "note",
     "x": "Rules are conventions. Ozu cuts across the axis and keeps the story clear, and Godard used jump cuts on purpose. Know the convention before you break it. {{fa-ch6}}"
    },
    {
     "t": "activity",
     "x": "Film two people crossing a room and cut it with a match on action, then cut it again with a cutaway as an ellipsis. Compare the feel."
    },
    {
     "t": "check",
     "q": "Which tool lets a viewer miss a cut?",
     "o": [
      "A match on action",
      "A canted frame",
      "A long take",
      "A fade"
     ],
     "a": 0,
     "w": "A cut in the middle of a movement hides itself. {{fa-ch6}}"
    },
    {
     "t": "check",
     "q": "What is a long take?",
     "o": [
      "A distant framing",
      "A shot of unusually long duration",
      "A zoom",
      "A slow-motion shot"
     ],
     "a": 1,
     "w": "Duration, not distance. {{fa-ch5}}"
    },
    {
     "t": "take",
     "i": [
      "Establish, break down, reestablish. {{fa-ch6}}",
      "Cut on movement. {{fa-ch6}}",
      "Long take is about time, not distance. {{fa-ch5}}"
     ]
    }
   ]
  },
  {
   "id": "l9",
   "title": "Cuts, blinks and the pace of a scene",
   "min": 20,
   "blocks": [
    {
     "t": "h",
     "x": "Why a cut works"
    },
    {
     "t": "p",
     "x": "Walter Murch describes a cut as a larger displacement than the small change between frames. The mind must reread the new picture as a new context. {{murch-test}}"
    },
    {
     "t": "p",
     "x": "A blink marks the point where a viewer separates one thought from the next. A cut placed when the mind has got the idea reads as punctuation. A cut a frame early or late reads as a jump. {{murch-test}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Cut on the thought, not on the action alone. {{murch-test}}"
    },
    {
     "t": "h",
     "x": "Figures from Murch"
    },
    {
     "t": "p",
     "x": "Murch gives these as figures from the films and the time he knew. Real blinking runs at about 4 to 40 a minute. An action sequence can carry about 25 cuts a minute, and a dialogue scene about 6. {{murch-dragnet}}"
    },
    {
     "t": "p",
     "x": "Murch also counts cuts in the first twenty minutes of some films: about 85 in Sunset Boulevard and about 225 in The Third Man. Use these as examples of how pace has changed, not as rules. {{murch-afterword}}"
    },
    {
     "t": "p",
     "x": "Our arithmetic. At 25 cuts a minute a cut comes every 2.4 seconds (60 ÷ 25). At 6 cuts a minute a cut comes every 10 seconds (60 ÷ 6)."
    },
    {
     "t": "h",
     "x": "Choose the cut by the story"
    },
    {
     "t": "p",
     "x": "Murch's test is the Rule of Six, in order: emotion, story, rhythm, eye-trace, the two-dimensional plane and three-dimensional space. He gives rough weights, with emotion near half. He offers them as his judgement, not as measurements. {{murch-cuts}}"
    },
    {
     "t": "p",
     "x": "He also says the editor should do the most with the least, and that suggestion beats exposition. {{murch-cuts}}"
    },
    {
     "t": "p",
     "x": "Murch calls cutting to every speaker a shallow rule. Choose the branch point by the thought the audience is having. {{murch-dragnet}}"
    },
    {
     "t": "h",
     "x": "Affinity and contrast"
    },
    {
     "t": "p",
     "x": "Block says an affinity cut keeps the eye in one area of the frame across the join, so it stays invisible. A contrast cut makes the eye jump, which can be jarring. {{block-continuum}}"
    },
    {
     "t": "p",
     "x": "Affinity can hide a screen-direction error. Check direction even when a cut feels smooth. {{block-continuum}}"
    },
    {
     "t": "h",
     "x": "Pace comes from the turns"
    },
    {
     "t": "p",
     "x": "McKee says a location's visual interest is used up in roughly two or three minutes. Then the editor repeats the same establishing or two-shot, and expression drains away. Treat this as a rule of thumb, not a formula. {{mckee-rhythm}}"
    },
    {
     "t": "check",
     "q": "A cut every 10 seconds equals how many cuts a minute?",
     "o": [
      "3",
      "6",
      "10",
      "60"
     ],
     "a": 1,
     "w": "60 ÷ 10 = 6. Our arithmetic. {{murch-dragnet}}"
    },
    {
     "t": "check",
     "q": "Block says an affinity cut is...",
     "o": [
      "Jarring",
      "Invisible",
      "Always wrong",
      "Silent"
     ],
     "a": 1,
     "w": "Affinity keeps the eye in one area, so the cut stays invisible. {{block-continuum}}"
    },
    {
     "t": "take",
     "i": [
      "A cut should land where the blink would. {{murch-test}}",
      "Affinity hides a cut; contrast shows it. {{block-continuum}}",
      "Pace is a rule of thumb about repetition, not a formula. {{mckee-rhythm}}"
     ]
    }
   ]
  },
  {
   "id": "l10",
   "title": "Montage: meaning from the neighbour",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Meaning comes from the next shot"
    },
    {
     "t": "p",
     "x": "Marilyn Fabe describes Kuleshov's experiments. The same actor's face, placed after a bowl of soup, a coffin or a child, was read as hunger, grief or tenderness. The meaning came from the juxtaposition. {{fabe-montage}}"
    },
    {
     "t": "p",
     "x": "Arnheim makes the same point: good montage makes each shot take its meaning from its neighbours. {{arnheim-making}}"
    },
    {
     "t": "h",
     "x": "A checklist for montage"
    },
    {
     "t": "p",
     "x": "Arnheim's classification of montage gives a checklist. Use it when you plan the cut before you shoot. {{arnheim-making}}"
    },
    {
     "t": "ul",
     "i": [
      "Cutting-unit length: long strips for quiet, short cuts for tumult, mixed lengths for shock.",
      "Whole scenes: sequential, interlaced (cross-cut) or inserted.",
      "Within a scene: a long shot then details, details then a long shot, or details only.",
      "Time relations: synchronous, before and after, or neutral.",
      "Space relations, and subject links such as similar shape, contrast of shape, or similar or contrasting meaning."
     ]
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Arnheim's unit-length rule is a planning tool. Write the cutting units on the shot list, then check them against the scene's mood. {{arnheim-making}}"
    },
    {
     "t": "h",
     "x": "Cuts you do not see"
    },
    {
     "t": "p",
     "x": "Arnheim describes a stroboscopic cut: a few frames removed inside one continuous movement change the action without the viewer noticing a cut. {{arnheim-making}}"
    },
    {
     "t": "p",
     "x": "Arnheim accepts a jump in place or time as turning a page in a film. He asks for a clean time continuum inside a scene, not between scenes. {{arnheim-reality}}"
    },
    {
     "t": "h",
     "x": "Cut for the story, not for shock"
    },
    {
     "t": "p",
     "x": "McKee warns that a smash cut to a shock the story has not earned is a trick. A cut that opens a gap and gives insight is story. {{mckee-surprise}}"
    },
    {
     "t": "activity",
     "x": "Shoot three shots: a face, an object it looks at, and the reaction. Cut them in three orders, with a soup bowl, then a coffin, then a child as the object. Write down what the audience reads each time."
    },
    {
     "t": "check",
     "q": "What did Arnheim suggest for tumult?",
     "o": [
      "Long strips",
      "Short cutting units",
      "No cuts",
      "Titles"
     ],
     "a": 1,
     "w": "Short cutting units for tumult, long strips for quiet. {{arnheim-making}}"
    },
    {
     "t": "check",
     "q": "What creates the meaning in Kuleshov's experiment?",
     "o": [
      "The actor's skill",
      "Juxtaposition",
      "Colour",
      "Sound alone"
     ],
     "a": 1,
     "w": "The meaning comes from the juxtaposition. {{fabe-montage}}"
    },
    {
     "t": "take",
     "i": [
      "Each shot takes its meaning from the next. {{arnheim-making}}",
      "Some cuts go unnoticed; others must be planned as jumps. {{arnheim-reality}}",
      "A shock is a trick unless the story earns it. {{mckee-surprise}}"
     ]
    }
   ]
  },
  {
   "id": "l11",
   "title": "Point of view, reaction and the insert",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Whose view is it?"
    },
    {
     "t": "p",
     "x": "McKee says the camera angle chooses empathy. A shot from one character's view builds empathy, and a neutral profile distances the audience. A neutral profile is also the comic setup. {{mckee-pov}}"
    },
    {
     "t": "p",
     "x": "In his breakdown of Chinatown, McKee shifts the point of view beat by beat, from Gittes to Evelyn to Khan. Each shift is a shift of what the camera should favour: a shot should sit with the character whose expectation has just broken. {{mckee-chinatown}}"
    },
    {
     "t": "h",
     "x": "Hold the reaction"
    },
    {
     "t": "p",
     "x": "McKee says the camera's job is to hold the moment of choice: the reaction and the decision, not the set-up. {{mckee-character}}"
    },
    {
     "t": "p",
     "x": "Arnheim shows inner state through visible action. A spilt cup, or a cigarette lit and then left alone, can express feeling that is held back. Show the action, not an explanation. {{arnheim-content}}"
    },
    {
     "t": "h",
     "x": "Insert or master"
    },
    {
     "t": "p",
     "x": "McKee writes only the angles the story needs. An insert of a note is justified only when the audience must read it with the character. Otherwise the master holds. {{mckee-text}}"
    },
    {
     "t": "p",
     "x": "Block separates continuous events, one take with the camera right throughout, from fragmented coverage, where contrast, affinity and rhythm are set shot by shot. Decide which before the shoot. {{block-continuous}}"
    },
    {
     "t": "callout",
     "k": "warn",
     "x": "Coverage decides who the audience looks at. A missing reaction is a loss of meaning, not a neutral gap. {{mckee-character}}"
    },
    {
     "t": "activity",
     "x": "A character reads a letter. Plan it twice: first as a master, then an insert of the letter and a reaction; second as one take on her face while she reads. Say which version the story needs and why. The example is illustrative."
    },
    {
     "t": "check",
     "q": "McKee says an insert is justified when...",
     "o": [
      "It looks pretty",
      "The audience must read it with the character",
      "The master is too wide",
      "There is dialogue"
     ],
     "a": 1,
     "w": "The insert must carry what the character reads. {{mckee-text}}"
    },
    {
     "t": "check",
     "q": "Which choice keeps more control for the editor?",
     "o": [
      "One continuous take",
      "Coverage set shot by shot",
      "Neither",
      "A drone shot"
     ],
     "a": 1,
     "w": "Fragmented coverage leaves the rhythm to the edit. {{block-continuous}}"
    },
    {
     "t": "take",
     "i": [
      "A shot from one view builds empathy. {{mckee-pov}}",
      "Hold the reaction and the decision. {{mckee-character}}",
      "Insert only what the audience must read. {{mckee-text}}"
     ]
    }
   ]
  },
  {
   "id": "l12",
   "title": "Planning the look with two graphs",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Two graphs, one story"
    },
    {
     "t": "p",
     "x": "Bruce Block plans the look on two graphs. The first graph is always the story, plotted as conflict intensity over time. A second graph below it plots one visual component, such as space running from flat to deep. {{block-components}}"
    },
    {
     "t": "p",
     "x": "For each visual component Block offers three choices. {{block-components}}"
    },
    {
     "t": "ol",
     "i": [
      "Constant: the component never changes, which creates one visual world and unity for the whole production.",
      "Progression: the component changes gradually, and the story's rising conflict motivates the change.",
      "Contrast and affinity: the component changes at chosen moments, so the visual intensity of a shot, scene or sequence follows the story's structure."
     ]
    },
    {
     "t": "h",
     "x": "His examples"
    },
    {
     "t": "p",
     "x": "Block's invented story The Meeting has Alex fail twice and then succeed in meeting Jordan. As a constant, every shot uses flat space, to fit a simple small town. As a progression, space moves from flat to deep as the failures raise the conflict. As contrast and affinity, space jumps from flat to deep at the end of each attempt. {{block-components}}"
    },
    {
     "t": "p",
     "x": "He points to The Shining for two progressions at once. Space becomes deeper, and the dominant red moves from a desaturated pink to a saturated red as the central character grows more dangerous. {{block-components}}"
    },
    {
     "t": "p",
     "x": "He points to Citizen Kane for a constant deep space that suits a complicated central character. {{block-components}}"
    },
    {
     "t": "callout",
     "k": "tip",
     "x": "Our inference for a short film: pick one constant look, then spend one or two deliberate changes at the story's peaks. A look that changes at every beat gives the audience nothing to compare."
    },
    {
     "t": "activity",
     "x": "Sketch your story's conflict as a line over time. Under it, draw a second line for one visual component, such as lens width, colour saturation or camera height. Mark each place where the second line changes and say what story event motivates it."
    },
    {
     "t": "check",
     "q": "In Block's method, which graph comes first?",
     "o": [
      "The story's conflict intensity",
      "The colour palette",
      "The shot list",
      "The soundtrack"
     ],
     "a": 0,
     "w": "The first graph is always the story. {{block-components}}"
    },
    {
     "t": "check",
     "q": "Which choice keeps a component unchanged throughout?",
     "o": [
      "Constant",
      "Progression",
      "Contrast",
      "Affinity"
     ],
     "a": 0,
     "w": "A constant keeps the component the same for the whole production. {{block-components}}"
    },
    {
     "t": "take",
     "i": [
      "Plan the look against the story's intensity. {{block-components}}",
      "Choose constant, progression, or contrast and affinity for each component. {{block-components}}",
      "Motivate every change from the story. {{block-components}}"
     ]
    }
   ]
  },
  {
   "id": "l13",
   "title": "Movement on the screen: parallax and intensity",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Four kinds of movement"
    },
    {
     "t": "p",
     "x": "Block separates actual movement, which only happens in the real world, from induced movement, where a moving object makes a nearby still one seem to move the other way. {{block-continuum}}"
    },
    {
     "t": "p",
     "x": "Apparent movement is what film and video rely on: one still image is replaced by another, and the change is read as movement. Relative movement is movement measured against a stationary reference such as the frame lines. {{block-continuum}}"
    },
    {
     "t": "p",
     "x": "Block's example: a camera that keeps a flying aeroplane centred shows no movement for that aeroplane, because it does not move against the frame. {{block-continuum}}"
    },
    {
     "t": "h",
     "x": "Two-dimensional and three-dimensional moves"
    },
    {
     "t": "p",
     "x": "Pan, tilt and zoom are two-dimensional moves. All objects in the frame move together, at the same rate, whatever their distance from the camera. {{block-continuum}}"
    },
    {
     "t": "p",
     "x": "Dolly, track and crane moves are three-dimensional. The foreground moves faster than the background, so the moves create the relative movement of depth. {{block-continuum}}"
    },
    {
     "t": "p",
     "x": "Block adds that a dolly circling an object reverses the pattern: the foreground object moves slowly and the background moves faster. {{block-continuum}}"
    },
    {
     "t": "ul",
     "i": [
      "Block rates three-dimensional moves as almost always more intense than two-dimensional ones.",
      "The exception is the snap zoom, a very fast zoom that creates sudden contrasts in size and speed.",
      "A camera held level keeps vertical and horizontal lines parallel to the frame, while a tilted frame turns them into diagonals, which adds intensity."
     ]
    },
    {
     "t": "callout",
     "k": "note",
     "x": "This lesson uses Block's sense of relative movement. Your camera-movement lesson earlier in this module treats the same moves from the operator's side."
    },
    {
     "t": "check",
     "q": "Which move shows foreground and background moving at different rates?",
     "o": [
      "Pan",
      "Tilt",
      "Zoom",
      "Dolly"
     ],
     "a": 3,
     "w": "Three-dimensional moves create the relative movement of depth. {{block-continuum}}"
    },
    {
     "t": "check",
     "q": "What does Block say about a snap zoom?",
     "o": [
      "It adds intensity",
      "It removes intensity",
      "It is a three-dimensional move",
      "It hides cuts"
     ],
     "a": 0,
     "w": "A snap zoom creates sudden contrasts that conventional moves rarely match. {{block-continuum}}"
    },
    {
     "t": "take",
     "i": [
      "A pan moves everything at one rate; a dolly shows depth. {{block-continuum}}",
      "Movement is judged against the frame. {{block-continuum}}",
      "Snap zooms are the intense exception. {{block-continuum}}"
     ]
    }
   ]
  },
  {
   "id": "l14",
   "title": "Griffith's editing grammar",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Cuts that hide themselves"
    },
    {
     "t": "p",
     "x": "Marilyn Fabe credits D. W. Griffith with developing the match cut systematically. It is any element in joined shots that smooths the transition so viewers keep their orientation in the space. {{fabe-griffith}}"
    },
    {
     "t": "p",
     "x": "In a movement match, a gesture begun in a long shot, such as raising a hand to the face, continues smoothly in the close-up that follows. {{fabe-griffith}}"
    },
    {
     "t": "h",
     "x": "Point of view, then reaction"
    },
    {
     "t": "p",
     "x": "A point-of-view shot shows what a character sees. Fabe notes that it is often followed by a reaction shot of the character. The pair gives two ways to identify with the character: through their eyes, then through their face. {{fabe-griffith}}"
    },
    {
     "t": "p",
     "x": "The effect is strongest when the reaction is unexpected, for example a character who sees something horrifying and smiles. {{fabe-griffith}}"
    },
    {
     "t": "h",
     "x": "Cross-cutting and optical transitions"
    },
    {
     "t": "p",
     "x": "A cross-cut alternates between two lines of action, so spatially separate events seem to happen at the same time. Fabe notes that before Griffith began directing in 1908, the usual practice was to follow one character or group in an unbroken line. {{fabe-griffith}}"
    },
    {
     "t": "p",
     "x": "Fades and irises also control pace. A fade-in brightens from black, a fade-out dims to black, and an iris opens or closes the picture in a circle. {{fabe-griffith}}"
    },
    {
     "t": "activity",
     "x": "Film someone raising a cup to their lips in a wide shot, then a close-up. Cut on the movement, and check that the hand is at the same stage on both sides of the cut."
    },
    {
     "t": "check",
     "q": "What is a movement match?",
     "o": [
      "A gesture continued smoothly across a cut",
      "A fast zoom",
      "A fade to black",
      "A change of lens"
     ],
     "a": 0,
     "w": "The action carries over so the viewer does not notice the cut. {{fabe-griffith}}"
    },
    {
     "t": "check",
     "q": "What does a cross-cut give the viewer?",
     "o": [
      "The impression of simultaneous events",
      "A slower pace",
      "A different focal length",
      "A flashback"
     ],
     "a": 0,
     "w": "It alternates between separate lines of action. {{fabe-griffith}}"
    },
    {
     "t": "take",
     "i": [
      "A match cut hides the edit by continuing the action. {{fabe-griffith}}",
      "A point of view plus a reaction doubles identification. {{fabe-griffith}}",
      "Cross-cutting links separate events in time. {{fabe-griffith}}"
     ]
    }
   ]
  },
  {
   "id": "l15",
   "title": "Coverage rules, the line and six kinds of cut",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Cover from a master"
    },
    {
     "t": "p",
     "x": "Brown says a master shot establishes the layout of the scene and the physical relationships of the characters. The editor can then cut to mediums, close-ups and reactions without confusing the audience. {{brown-technique}}"
    },
    {
     "t": "p",
     "x": "A master should have a beginning and an ending, so the editor can find a logical place to cut into the scene and out of it. {{brown-technique}}"
    },
    {
     "t": "p",
     "x": "Editors look for a cutting point, a place where the edit is motivated and flows. Not every one can be planned, but be aware of them as you shoot. {{brown-technique}}"
    },
    {
     "t": "h",
     "x": "The line and neutral shots"
    },
    {
     "t": "p",
     "x": "Brown names five things that can establish the line: a look, directional movement, a specific action, an exit from the frame, or geography. {{brown-continuity}}"
    },
    {
     "t": "p",
     "x": "The camera may go anywhere inside a 180 degree arc on one side of the line and keep directional continuity. It can move closer or farther, higher or lower, if it stays on that side. {{brown-continuity}}"
    },
    {
     "t": "p",
     "x": "A neutral shot lets you cross. A very high shot, such as the one from The Lady from Shanghai that Brown shows, can be cut to any angle without a continuity clash. {{brown-continuity}}"
    },
    {
     "t": "p",
     "x": "Some positions that look wrong are fine because they are neutral angles that can pan into either screen direction. {{brown-continuity}}"
    },
    {
     "t": "h",
     "x": "The 20 per cent rule"
    },
    {
     "t": "p",
     "x": "Brown says the 20% rule and the 30 degree rule are pretty much the same thing: a cut needs a clear change in the shot. When two shots must match, image size is by far the most important parameter. Perspective and depth of field may differ slightly without being noticed. {{brown-continuity}}"
    },
    {
     "t": "h",
     "x": "Six kinds of cut"
    },
    {
     "t": "p",
     "x": "Brown lists six: the content cut, the action cut, the POV cut, the match cut, the conceptual cut and the zero cut. {{brown-continuity}}"
    },
    {
     "t": "ul",
     "i": [
      "A content cut adds new information or carries the story forward, as when you cut from the master to an over-the-shoulder and then a close-up. {{brown-continuity}}",
      "An action cut, also called a continuity or movement cut, starts an action in one shot and finishes it in the next. {{brown-continuity}}",
      "Every cut must still obey the line and the 20 per cent rule to be cuttable. {{brown-continuity}}"
     ]
    },
    {
     "t": "h",
     "x": "Cheats and long takes"
    },
    {
     "t": "p",
     "x": "A cheat can save a setup. For a shot of someone at a window, having the actor step back three feet to fit the camera is usually an unnoticeable cheat. {{brown-technique}}"
    },
    {
     "t": "p",
     "x": "Hitchcock's Rope is staged as one continuous take with only a few cuts. A standard roll of film lasted eleven minutes, so he hid cuts, for example by tracking past a column that fills the screen. Brown calls the claim of no cuts a myth. {{brown-technique}}"
    },
    {
     "t": "check",
     "q": "What does a master shot give the editor?",
     "o": [
      "The layout and the relationships in the scene",
      "A faster shutter",
      "A wider lens",
      "A sound track"
     ],
     "a": 0,
     "w": "It lets the editor cut in to mediums and close-ups without confusing the audience. {{brown-technique}}"
    },
    {
     "t": "check",
     "q": "Which cut starts an action in one shot and finishes it in the next?",
     "o": [
      "Action cut",
      "Content cut",
      "Zero cut",
      "Conceptual cut"
     ],
     "a": 0,
     "w": "Brown also calls it a continuity or movement cut. {{brown-continuity}}"
    },
    {
     "t": "check",
     "q": "What does a neutral shot allow?",
     "o": [
      "Crossing the line without a clash",
      "A longer take",
      "A faster pan",
      "A cheat"
     ],
     "a": 0,
     "w": "A neutral shot can be cut to any angle. {{brown-continuity}}"
    },
    {
     "t": "take",
     "i": [
      "Shoot a master that can be cut into and out of. {{brown-technique}}",
      "Stay on one side of the line, or cut through a neutral shot. {{brown-continuity}}",
      "Every cut needs a clear change of image size or angle. {{brown-continuity}}"
     ]
    }
   ]
  },
  {
   "id": "l16",
   "title": "Cutting for the story: McKee's tests",
   "min": 20,
   "blocks": [
    {
     "t": "h",
     "x": "Units of story, units of cutting"
    },
    {
     "t": "p",
     "x": "McKee ranks the units of a story as beat, scene, sequence, act and story. A scene turns a value in a character's life. {{mckee-spectrum}}"
    },
    {
     "t": "p",
     "x": "His example is a couple whose quarrel moves from bedroom to kitchen to garage to highway. The four locations are camera setups, not four scenes, because the value at stake does not change until the last moment. {{mckee-spectrum}}"
    },
    {
     "t": "p",
     "x": "Use this as a coverage test. A cut between locations that leaves the value unchanged is a setup, not an event. {{mckee-spectrum}}"
    },
    {
     "t": "h",
     "x": "Beats are behaviour"
    },
    {
     "t": "p",
     "x": "A beat is an exchange of action and reaction. McKee says it changes when behaviour changes, not when the dialogue does. {{mckee-analysis}}"
    },
    {
     "t": "p",
     "x": "Our inference: a shot list can follow the beats. Name the action and the reaction in each beat, and give the turning point the longest hold. {{mckee-analysis}}"
    },
    {
     "t": "p",
     "x": "McKee says the Crisis is a deliberately static moment, held so tension builds before the action. {{mckee-crisis}}"
    },
    {
     "t": "h",
     "x": "Plant and pay off"
    },
    {
     "t": "p",
     "x": "A setup should carry one meaning when it is first seen and a deeper one when it pays off. McKee's example is Noah Cross saying that he argued with his son-in-law about his daughter. We first read it as Evelyn, and later as Katherine. {{mckee-scene}}"
    },
    {
     "t": "p",
     "x": "Do not hold the payoff too long. In Jaws the body is found at once, and McKee contrasts The River, which delays the second half of its inciting incident for most of the film. {{mckee-inciting}}"
    },
    {
     "t": "p",
     "x": "For an opening, McKee's rule of thumb is that the first major event of the central plot comes within about the first quarter of the film. {{mckee-inciting}}"
    },
    {
     "t": "h",
     "x": "Pace and cross-cutting"
    },
    {
     "t": "p",
     "x": "A second act that repeats the first act's kind of action is treading water. If two sequences would cause the same reaction, merge or cut one. {{mckee-act}}"
    },
    {
     "t": "p",
     "x": "Alternating between two plots that never connect leaves the audience waiting for a link. McKee's example is The First Deadly Sin, where the killer never reaches the hospital. A cross-cut needs a causal or thematic link. {{mckee-act}}"
    },
    {
     "t": "h",
     "x": "Show, do not explain"
    },
    {
     "t": "p",
     "x": "McKee says a story proves its idea by dramatising it. He calls explanation in dialogue or narration a creative defeat. {{mckee-meaning}}"
    },
    {
     "t": "p",
     "x": "His test for voice-over is to strip it out and see whether the story still stands. He sees montage as usually decorative editing that hides undramatised information. {{mckee-exposition}}"
    },
    {
     "t": "p",
     "x": "His test for a hole in logic is whether the audience will notice at the speed of the cut. {{mckee-surprise}}"
    },
    {
     "t": "p",
     "x": "McKee notes that A Fish Called Wanda was shot with a bloody and a bloodless version of one moment. The bloody version killed the laugh in preview, so the release used the paw alone. The cut chose the tone. {{mckee-genre}}"
    },
    {
     "t": "check",
     "q": "What does McKee say changes a beat?",
     "o": [
      "A change in behaviour",
      "A change of location",
      "A change of lens",
      "A new line of dialogue"
     ],
     "a": 0,
     "w": "A beat changes when behaviour changes. {{mckee-analysis}}"
    },
    {
     "t": "check",
     "q": "What is McKee's test for voice-over?",
     "o": [
      "Strip it out and see if the story stands",
      "Add it to every scene",
      "Make it shorter",
      "Record it first"
     ],
     "a": 0,
     "w": "If the story still stands, the narration was an extra. {{mckee-exposition}}"
    },
    {
     "t": "take",
     "i": [
      "A change of location is a setup, not a scene. {{mckee-spectrum}}",
      "Plant a setup that means one thing now and another later. {{mckee-scene}}",
      "Cross-cut only between plots that affect each other. {{mckee-act}}"
     ]
    }
   ]
  },
  {
   "id": "l17",
   "title": "Case studies in cutting and framing",
   "min": 18,
   "blocks": [
    {
     "t": "h",
     "x": "Notorious: breaking a theft into shots"
    },
    {
     "t": "p",
     "x": "Fabe notes that Hitchcock could have shown Alicia stealing the key in one shot. He chose twelve. {{fabe-notorious}}"
    },
    {
     "t": "p",
     "x": "Four of the shots are long or medium shots that establish or re-establish the context. Most of the others are close-ups of her face, her hands or the key. Five are point-of-view shots from Alicia. {{fabe-notorious}}"
    },
    {
     "t": "p",
     "x": "Fabe's point is that seeing so much through her eyes pulls the audience into identification with her. {{fabe-notorious}}"
    },
    {
     "t": "h",
     "x": "The Bicycle Thief: a held take among short cuts"
    },
    {
     "t": "p",
     "x": "In the sequence Fabe analyses, shots run three to four seconds with point-of-view shots, reactions and movement matches. Shot 15 is held for eighteen seconds. {{fabe-bicycle}}"
    },
    {
     "t": "p",
     "x": "The camera follows Ricci in real time and space, first toward the bicycle and then toward his son, so his inner conflict is seen in one shot. {{fabe-bicycle}}"
    },
    {
     "t": "p",
     "x": "A jump cut earlier in the sequence shows his moral about-face. The dislocation in time and space reflects his own. {{fabe-bicycle}}"
    },
    {
     "t": "h",
     "x": "The 400 Blows: long takes for freedom"
    },
    {
     "t": "p",
     "x": "Fabe describes a forty-five-second take of Antoine escaping from the football game, followed by a seventy-five-second take as he runs for the sea. {{fabe-400}}"
    },
    {
     "t": "h",
     "x": "Citizen Kane: the lightning mix"
    },
    {
     "t": "p",
     "x": "Fabe describes the lightning mix. Images separated by huge gaps in time are joined by continuity on the sound track. {{fabe-kane}}"
    },
    {
     "t": "p",
     "x": "In the example she gives, Thatcher's Merry Christmas is finished fifteen years later in the next shot. {{fabe-kane}}"
    },
    {
     "t": "activity",
     "x": "Choose a short sequence from a film you know. Count the shots, note the shortest and longest, and mark each point-of-view shot. Say what the one long shot does that the short ones cannot."
    },
    {
     "t": "check",
     "q": "How many shots does Hitchcock use for the key theft in Notorious, per Fabe?",
     "o": [
      "Twelve",
      "One",
      "Four",
      "Thirty"
     ],
     "a": 0,
     "w": "Four are establishing shots and most of the rest are close-ups. {{fabe-notorious}}"
    },
    {
     "t": "check",
     "q": "What joins the shots in a lightning mix?",
     "o": [
      "Continuity on the sound track",
      "A dissolve",
      "A fade to black",
      "A caption"
     ],
     "a": 0,
     "w": "The dialogue carries across a gap of years. {{fabe-kane}}"
    },
    {
     "t": "take",
     "i": [
      "Break a key action into shots and add point of view. {{fabe-notorious}}",
      "A held take among short cuts shows an inner conflict. {{fabe-bicycle}}",
      "Sound can bridge a gap in time. {{fabe-kane}}"
     ]
    }
   ]
  },
  {
   "id": "l18",
   "title": "The lecturer's method: Karl Freund",
   "min": 26,
   "blocks": [
    {
     "t": "h",
     "x": "The record behind this lesson"
    },
    {
     "t": "p",
     "x": "We read his own account of filming I Love Lucy in full, as reproduced on a third-party site, and Wikipedia as excerpts. The camera facts come from his account. {{freund-1953}} {{wiki-freund}}"
    },
    {
     "t": "h",
     "x": "Two methods, one idea: put the camera where the story needs it"
    },
    {
     "t": "p",
     "x": "Wikipedia says Freund was a pioneer of the unchained camera, free of the tripod, in films such as The Last Laugh (1924). He wore the camera on his stomach and walked while it filmed, and also put it on a cart on a track and on a crane. {{wiki-freund}}"
    },
    {
     "t": "p",
     "x": "For I Love Lucy he did not invent the three-camera system, but he perfected it for film cameras in front of a live audience. {{wiki-freund}}"
    },
    {
     "t": "h",
     "x": "His three-camera method, step by step"
    },
    {
     "t": "ol",
     "i": [
      "Choose the cameras and glass. Three BNC Mitchell cameras with T-stop calibrated lenses, on dollies. {{freund-1953}}",
      "Give each camera a job. The middle camera usually covers the long shot with a 28 to 50 mm lens. The two close-up cameras, 75 to 90 degrees apart from the centre camera, carry 3 to 4 inch lenses. {{freund-1953}}",
      "Staff each camera as a unit. A crew of four per camera: the cameraman, his assistant, a grip and a cable man. {{freund-1953}}",
      "Mark and cue everything. Every dolly move is marked on the floor for every scene, and the camera moves are cued from the monitor box, with the whole crew on an intercom. {{freund-1953}}",
      "Plan the week. It takes four days to line up a show, two of them rehearsals. Rehearsals with cameras fill the last two days, and the actual shooting time is an hour and a half. {{freund-1953}}",
      "Accept the trade-offs. Retakes are not desirable with an audience, and he says close-ups of the usual glamour kind were discarded because they stood out like a sore thumb. {{freund-1953}}"
     ]
    },
    {
     "t": "table",
     "title": "Freund's plan and your two-camera plan (the right column is our adaptation)",
     "head": [
      "",
      "Freund",
      "You, with a small crew"
     ],
     "rows": [
      [
       "Centre camera",
       "Long shot, 28 to 50 mm",
       "Wide master on a tripod"
      ],
      [
       "Side cameras",
       "Close-ups, 3 to 4 inch lenses, 75 to 90° from centre",
       "One close camera on a slider or second tripod"
      ],
      [
       "Crew",
       "Four per camera",
       "Two or three people, with one job each"
      ],
      [
       "Marks and cues",
       "Floor marks and an intercom",
       "Tape marks and agreed hand signals"
      ],
      [
       "Lining up and rehearsal",
       "Four days, with camera rehearsals in the last two",
       "At least a full run-through with the camera moves"
      ]
     ],
     "src": "The Freund column is from his account. The right column is our adaptation. {{freund-1953}}"
    },
    {
     "t": "h",
     "x": "Worked example 1: his lenses on your sensor"
    },
    {
     "t": "example",
     "title": "Do his focal lengths transfer to a 1.6 crop DSLR? (our arithmetic)",
     "steps": [
      "The 35 mm Academy frame is 22 by 16 mm. {{wiki-35mm}} A 1.6 crop sensor is about 22.5 mm wide (36 ÷ 1.6), so the two frames are almost the same width: 22.5 ÷ 22 is about 1.02.",
      "So his 28 to 50 mm centre lens frames nearly the same on your crop camera, and so do his 3 to 4 inch lenses, which are 76 to 102 mm (3 × 25.4 and 4 × 25.4).",
      "On a full-frame camera, 36 mm wide, multiply by about 1.64 (36 ÷ 22) to get the same framing: his 28 to 50 mm becomes about 46 to 82 mm, and 76 to 102 mm becomes about 125 to 167 mm.",
      "Use these as starting points, then check the framing on your own camera."
     ]
    },
    {
     "t": "h",
     "x": "Worked example 2: his week against your hours (illustrative)"
    },
    {
     "t": "example",
     "title": "Scaling a four-day plan",
     "steps": [
      "His plan is four days of lining up and rehearsal for about an hour and a half of shooting. {{freund-1953}}",
      "If you have 12 hours in total for a short scene, follow his lean: keep most for planning, light and rehearsal, say 8 hours, and leave 4 for shooting and resets.",
      "At 36 minutes per setup from the schedule method in this module, 4 hours of shooting is 6 or 7 setups at most, before breaks, so plan 6 to keep spare time.",
      "With two cameras rolling together you may need fewer setups: a wide master and a close camera at once."
     ]
    },
    {
     "t": "h",
     "x": "Apply it: a two-camera plan"
    },
    {
     "t": "ol",
     "i": [
      "Draw the plan view and the line of action. Put the wide camera on the line side and the close camera 75 to 90 degrees away on the same side.",
      "Choose the lenses with the conversion above, and write the framing for each.",
      "Decide the lighting contrast the two cameras can share, as in the last lesson.",
      "Write the marks and cues, and assign every job.",
      "Schedule the rehearsal first, then the shoot, with spare time."
     ]
    },
    {
     "t": "activity",
     "x": "Write the two-camera plan for a one-minute scene, with lenses, jobs, marks and a schedule."
    },
    {
     "t": "check",
     "q": "Where did Freund put the close-up cameras?",
     "o": [
      "Behind the centre camera",
      "75 to 90 degrees from the centre camera",
      "On the ceiling",
      "Beside the actors"
     ],
     "a": 1,
     "w": "They were 75 to 90 degrees apart from the centre camera. {{freund-1953}}"
    },
    {
     "t": "check",
     "q": "A 3 inch lens is about how many millimetres?",
     "o": [
      "30",
      "76",
      "300",
      "760"
     ],
     "a": 1,
     "w": "3 × 25.4 mm is about 76 mm."
    },
    {
     "t": "check",
     "q": "What took most of Freund's week for each show?",
     "o": [
      "Shooting",
      "Rehearsal and planning",
      "Editing",
      "Travel"
     ],
     "a": 1,
     "w": "Four days lined up each show, two of them rehearsals, against an hour and a half of shooting. {{freund-1953}}"
    },
    {
     "t": "take",
     "i": [
      "Give each camera a job and each person a job. {{freund-1953}}",
      "His lenses transfer closely to a 1.6 crop sensor.",
      "Rehearse more than you shoot."
     ]
    }
   ]
  }
 ]
};
