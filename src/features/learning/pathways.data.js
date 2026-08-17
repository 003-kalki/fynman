// Per-subject "why this subject + pick a starting point" content, shown before
// the lesson path. Only physics has real lessons built (see lesson.data.js /
// GridMazePuzzle) — the other subjects are stocked with real intro copy so the
// same SubjectIntro screen works unmodified once their content exists.
export const learningSubjects = {
  physics: {
    id: 'physics',
    title: 'Physics',
    hook: 'The universe, but debuggable.',
    intro:
      "Physics is the search for the rules everything else runs on — motion, energy, light, the forces that hold atoms together and planets apart. It's for people who don't just want to use the universe, they want to know why it works the way it does.",
    substreams: [
      { id: 'mechanics', label: 'Mechanics', glyph: '→', blurb: 'Forces, motion, and why things fall the way they do.' },
      { id: 'waves', label: 'Waves & Optics', glyph: '∿', blurb: 'Sound, light, and everything that travels in ripples.' },
      { id: 'em', label: 'Electromagnetism', glyph: '⚡', blurb: 'Electricity, magnetism, and the field that links them.' },
      { id: 'thermo', label: 'Thermodynamics', glyph: '≋', blurb: 'Heat, energy, and why some things never reverse.' },
      { id: 'modern', label: 'Modern Physics', glyph: '⊛', blurb: 'Relativity and quantum mechanics — where intuition breaks.' },
    ],
  },
  math: {
    id: 'math',
    title: 'Math',
    hook: 'The pattern behind every pattern.',
    intro:
      "Math is the language every other field ends up borrowing — physics, computer science, even biology's models run on it underneath. It's less about calculation and more about finding the pattern that makes something suddenly make sense.",
    substreams: [
      { id: 'algebra', label: 'Algebra & Functions', glyph: '∑', blurb: 'Variables, equations, and how quantities relate.' },
      { id: 'geometry', label: 'Geometry', glyph: '△', blurb: 'Shape, space, and proof — logic you can see.' },
      { id: 'calculus', label: 'Calculus', glyph: '∫', blurb: 'Rates of change, and the math of anything moving.' },
      { id: 'stats', label: 'Probability & Statistics', glyph: '%', blurb: 'Uncertainty, made precise enough to act on.' },
    ],
  },
  cs: {
    id: 'cs',
    title: 'Computer Science',
    hook: 'Ideas that actually run.',
    intro:
      "Computer Science turns ideas into things that run — apps, algorithms, entire systems. It's for people who like building things other people actually use, and who don't mind that the computer will not forgive a single typo.",
    substreams: [
      { id: 'programming', label: 'Programming Fundamentals', glyph: '{ }', blurb: 'How to actually tell a computer what to do.' },
      { id: 'dsa', label: 'Data Structures & Algorithms', glyph: '◪', blurb: 'Organizing data so problems stop being slow.' },
      { id: 'web', label: 'Web Development', glyph: '◧', blurb: 'The apps and sites you use every day, from scratch.' },
      { id: 'ai', label: 'AI & Machine Learning', glyph: '✳', blurb: 'Systems that improve at a task by seeing examples.' },
      { id: 'security', label: 'Cybersecurity', glyph: '⚿', blurb: 'Finding the crack before someone else does.' },
    ],
  },
  bio: {
    id: 'bio',
    title: 'Biology',
    hook: 'Life, one working part at a time.',
    intro:
      "Biology studies life itself — from a single cell dividing to an entire ecosystem staying in balance. If you're endlessly curious about how living things work, break, and adapt, this field never actually runs out of new questions.",
    substreams: [
      { id: 'cell', label: 'Cell Biology', glyph: 'β', blurb: 'The smallest unit that still counts as alive.' },
      { id: 'genetics', label: 'Genetics', glyph: '⌬', blurb: 'The instructions living things are built from.' },
      { id: 'physiology', label: 'Human Physiology', glyph: '♡', blurb: 'How your own body actually keeps running.' },
      { id: 'ecology', label: 'Ecology', glyph: '≈', blurb: 'How living things depend on everything around them.' },
    ],
  },
  chem: {
    id: 'chem',
    title: 'Chemistry',
    hook: 'Everything is just rearranged atoms.',
    intro:
      "Chemistry is the science of what things are actually made of, and what happens when you rearrange them. It sits underneath medicine, materials, and half of biology — if reactions and transformations fascinate you, this is where to start.",
    substreams: [
      { id: 'atomic', label: 'Atomic Structure', glyph: '⚛', blurb: 'What atoms are, and why the periodic table works.' },
      { id: 'organic', label: 'Organic Chemistry', glyph: '⬡', blurb: 'Carbon-based molecules — including the ones in you.' },
      { id: 'reactions', label: 'Reactions & Equilibrium', glyph: '⇌', blurb: 'What happens when substances actually meet.' },
      { id: 'materials', label: 'Materials Science', glyph: '⚗', blurb: 'Designing matter with the properties you want.' },
    ],
  },
}

export const DEFAULT_SUBJECT_ID = 'physics'
