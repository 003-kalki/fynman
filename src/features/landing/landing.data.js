export const subjects = [
  { id: 'math',    label: 'MATH',    x: 120, y: 130 },
  { id: 'physics', label: 'PHYSICS', x: 330, y: 90  },
  { id: 'cs',      label: 'CS',      x: 420, y: 270 },
  { id: 'chem',    label: 'CHEM',    x: 330, y: 410 },
  { id: 'bio',     label: 'BIO',     x: 110, y: 370 },
];

export const subjectData = {
  math: {
    title: 'Math',
    glyph: '∑',
    tint: '108,140,255',
    text: "Math is the language every other field borrows from — physics, CS, even biology's models run on it. If patterns and problem-solving click for you, this is where it starts.",
  },
  physics: {
    title: 'Physics',
    glyph: 'φ',
    tint: '232,176,75',
    text: 'Physics asks how the universe actually works, then makes you prove it. Perfect if you like taking things apart, literally or mathematically, to see why they work.',
  },
  cs: {
    title: 'Computer Science',
    glyph: '{ }',
    tint: '108,140,255',
    text: "Computer Science turns ideas into things that run: apps, algorithms, entire systems. If you like building things people actually use, this is the most direct path there.",
  },
  chem: {
    title: 'Chemistry',
    glyph: '⚗',
    tint: '232,176,75',
    text: "Chemistry is the science of what things are made of and how they change. It's behind medicine, materials, and half of biology — if reactions fascinate you, start here.",
  },
  bio: {
    title: 'Biology',
    glyph: 'β',
    tint: '108,140,255',
    text: "Biology studies life itself, from single cells to entire ecosystems. If you're drawn to how living things work, grow, and adapt, this field never runs out of questions.",
  },
};

export const CARD_THRESHOLD = 55;
