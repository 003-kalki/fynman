export const motivationOptions = [
  { id: 'explore', glyph: '◎', label: 'Explore careers', sub: 'See what a STEM career could actually look like' },
  { id: 'improve', glyph: '↗', label: 'Get better at a subject', sub: 'Sharpen something you already care about' },
  { id: 'parents', glyph: '⌂', label: 'My parents told me to', sub: "No judgment — let's still make it worth it" },
  { id: 'curious', glyph: '?', label: 'Just curious', sub: 'No pressure, just here to look around' },
]

export const grades = [
  { id: '9', label: '9th grade' },
  { id: '10', label: '10th grade' },
  { id: '11', label: '11th grade' },
  { id: '12', label: '12th grade' },
]

// glyphs mirror src/features/landing/landing.data.js subjectData for visual continuity
export const subjects = [
  { id: 'math', label: 'Math', glyph: '∑' },
  { id: 'physics', label: 'Physics', glyph: 'φ' },
  { id: 'cs', label: 'Computer Science', glyph: '{ }' },
  { id: 'bio', label: 'Biology', glyph: 'β' },
  { id: 'chem', label: 'Chemistry', glyph: '⚗' },
]

export const levels = [
  { id: 'beginner', label: 'Beginner', sub: (subject) => `New to ${subject}` },
  { id: 'novice', label: 'Novice', sub: (subject) => `Know the basics of ${subject}` },
  { id: 'intermediate', label: 'Intermediate', sub: (subject) => `Comfortable with ${subject} fundamentals` },
  { id: 'advanced', label: 'Advanced', sub: (subject) => `Already ahead in ${subject}` },
]

// 3x3 grid indices (0-8), the order cells must be clicked in to solve the teaser puzzle
export const teaserSequence = [0, 2, 8, 6, 4]
