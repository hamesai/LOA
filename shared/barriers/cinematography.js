/* Barrier aids for Cinematography: word check, gradient check and a make-it-concrete task per module. */
(function (D) { var L = window.COURSE_LEARN = window.COURSE_LEARN || {}; Object.keys(D).forEach(function (k) { var e = L[k] = L[k] || {}, d = D[k]; if (d.w) e.words = d.w; if (d.b) e.base = d.b; if (d.m) e.mass = { title: d.m[0], task: d.m[1], limit: d.m[2] }; }); })({
"cinematography-1": {
 w: [["Stop", "A doubling or halving of the light reaching the sensor or film."],
     ["Shutter angle", "How much of each frame interval the shutter is open, in degrees. 180 degrees is the usual film look."],
     ["Frame rate", "The number of frames recorded per second."],
     ["ISO", "The sensitivity setting of the sensor or film. A higher value is brighter and noisier."],
     ["Motion blur", "The streak left by a moving subject during one exposure."]],
 m: ["See blur for yourself", "Film a waving hand twice, once at a slow shutter speed and once at a fast one, with everything else the same. Play both back and write down what changed.", "Phone cameras often override manual exposure. Use a camera that lets you set shutter speed."]
},
"cinematography-2": {
 w: [["Rolling shutter", "A sensor that reads the picture line by line, so fast movement can lean or wobble."],
     ["Crop factor", "How much narrower a smaller sensor sees than a full-frame sensor with the same lens."],
     ["Dynamic range", "The span from the darkest to the brightest detail the camera can record."],
     ["Picture profile", "A set of colour and contrast settings, such as a flat profile that keeps more highlight and shadow detail."],
     ["Codec", "The way video is compressed and stored."]],
 b: [["What does one stop mean?", "A doubling or halving of light."],
     ["Which shutter speed matches a 180 degree shutter at 24 frames per second?", "About 1/48 of a second, usually set to 1/50."]],
 m: ["Make the wobble show", "Film a vertical door frame while you pan quickly past it. Watch the playback for leaning lines, then repeat slowly and compare.", "How strong the effect is depends on the camera."]
},
"cinematography-3": {
 w: [["Focal length", "The lens property that sets how wide or narrow the view is. A smaller number is wider."],
     ["Depth of field", "How much of the scene, near to far, is acceptably sharp."],
     ["Field of view", "How much of the scene fits in the frame."],
     ["Prime lens", "A lens with one fixed focal length."],
     ["Rule of thirds", "A composition guide that divides the frame into a three by three grid and places key points on the lines."]],
 b: [["What three settings balance exposure?", "Aperture, shutter speed and ISO."],
     ["Why keep the shutter near 180 degrees for film-style motion?", "It gives natural-looking motion blur."]],
 m: ["Make a viewfinder", "Cut a rectangle from card in the shape of your frame. Hold it at arm's length and then close to your eye, and walk around a room. Note how the view changes. This is what a focal length change does.", "The card shows field of view only. It cannot show depth of field."]
},
"cinematography-4": {
 w: [["Colour temperature", "A number in kelvin that describes whether light looks warm and orange or cool and blue."],
     ["Key light", "The main light on the subject."],
     ["Fill light", "A softer light that lifts the shadows left by the key."],
     ["Backlight", "A light from behind the subject that separates it from the background."],
     ["Hard and soft light", "Hard light makes sharp shadows. Soft light, from a large or diffused source, makes gentle ones."]],
 b: [["What does depth of field depend on?", "Aperture, focal length and the distance to the subject."],
     ["What gives a wider field of view?", "A shorter focal length."]],
 m: ["Light an apple three ways", "Light an apple with one desk lamp from the front, the side and behind. Photograph each. Write what each position does to the shadows.", "A desk lamp is not a film light. The point is the direction, not the power."]
},
"cinematography-5": {
 w: [["Coverage", "Filming a scene from enough angles that the editor has choices."],
     ["Continuity", "Keeping details such as props, position and light consistent from shot to shot."],
     ["180 degree rule", "A guide to keep the camera on one side of an imaginary line between two characters, so left and right stay consistent."],
     ["Master shot", "A wide shot that covers the whole scene."],
     ["Cutaway", "A shot of something other than the main action, used to cover a join."]],
 b: [["Name the lights in a three-point setup.", "Key, fill and backlight."],
     ["How does a warm lamp look on a camera set for daylight?", "More orange."]],
 m: ["Mark the line", "Ask two people to talk. Put tape on the floor along the line between them. Shoot the conversation from three positions, all on one side of the tape, and then cross it once. Compare the cuts.", "A two-person test is simple. Real scenes have more characters and moving axes."]
},
"cinematography-6": {
 w: [["Gauge", "The width of the film, such as 16 mm or 35 mm."],
     ["Emulsion", "The light-sensitive layer on the film."],
     ["Film stock", "A particular kind of film, with its own speed, colour and grain."],
     ["Latitude", "How much over or under exposure the film tolerates and still gives a usable image."],
     ["Metering", "Measuring the light to choose an exposure."]],
 b: [["What is coverage?", "Filming a scene from enough angles to give the editor choices."],
     ["What is the 180 degree rule for?", "Keeping left and right consistent between characters."]],
 m: ["Draw the strip", "Cut a strip of paper to the width of 35 mm film. Mark one foot along it and draw the frames, with four perforation holes per frame. Count how many frames fit in a foot (16).", "The strip shows size only, not the look of film."]
},
"cinematography-7": {
 w: [["Telecine", "Scanning film to make a video copy."],
     ["Interlaced", "Video drawn as two fields of alternate lines for each frame."],
     ["Pulldown", "A pattern that repeats film frames to turn 24 frames per second into about 30 for video."],
     ["Field", "Half of an interlaced picture, either the odd or the even lines."],
     ["Hybrid finish", "A workflow that mixes film and digital steps."]],
 b: [["What is a film gauge?", "The width of the film."],
     ["Why does latitude matter when you meter film?", "It sets how forgiving the film is to exposure error."]],
 m: ["Split a picture into fields", "Draw a simple picture on ten lines. Colour the odd lines red and the even lines blue. The red lines are one field and the blue lines are the other.", "A hand drawing shows the idea only. Real fields are captured at different instants."]
},
"cinematography-cap": {
 b: [["Which modules cover exposure, lenses, light, movement and film?", "Exposure is module 1, lenses module 3, light module 4, movement module 5 and film module 6."],
     ["What must stay the same between two capture paths for a fair comparison?", "The scene, the light and the framing."]],
 m: ["Board the test shoot", "Draw a shot list board with the scene on the left, then one column for each capture path. Write the settings for each shot before you shoot.", "A plan on paper will change on set. Record what changed."]
}
});
