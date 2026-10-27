/* Which module outcome each question tests, for the mastery view. Keys are the review-card ids: q = quiz item, p = pre-check, x = retrieval item.
   Values are 0-based indexes into the module's outcomes. Retrieval items test earlier modules and are left out. A lecturer's-method question is tagged 3. */
Object.assign(window.COURSE_OUTCOMES = window.COURSE_OUTCOMES || {}, {
 "investing-1": { q0: 1, q1: 2, q2: 1, q3: 3, q4: 1, p0: 0, p1: 1 },
 "investing-2": { q0: 0, q1: 1, q2: 2, q3: 3, q4: 1, p0: 0, p1: 1 },
 "investing-3": { q0: 0, q1: 1, q2: 2, q3: 3, q4: 1, q5: 0, p0: 0, p1: 1 },
 "investing-4": { q0: 0, q1: 1, q2: 0, q3: 3, p0: 0, p1: 1 },
 "investing-5": { q0: 2, q1: 1, q2: 2, q3: 3, p0: 0, p1: 2 },
 "investing-6": { q0: 0, q1: 1, q2: 2, q3: 3, p0: 0, p1: 2 }
});
