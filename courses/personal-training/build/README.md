# Build scripts for personal-training

Keep every script that writes this course here, never in a session scratchpad (a reboot can clear it).
`build.py` is the entry point: `python _template/kit.py rebuild personal-training` runs it, then ships.

No build.py exists for this course yet: its module files (modules/*.js) are the source. Edit them with
`_template/course_patch.js` or `_template/pc_fixlib.py`, then `kit.py ship personal-training`.
