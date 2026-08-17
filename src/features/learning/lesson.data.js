export const lessons = [
  {
    id: 'trajectory',
    tag: 'Lesson 1 of 2',
    title: 'Why angle changes everything',
    concept:
      "Fire something into the air and two things fight each other: gravity pulls it down, forward motion carries it out. The angle you launch at decides which one wins — and how far the thing actually travels.",
    visual: {
      kind: 'trajectory',
      label: 'Launch angle',
      min: 10,
      max: 80,
      step: 5,
      default: 45,
      unit: '°',
    },
    question: {
      prompt: 'At which angle does a projectile travel the farthest (ignoring air resistance)?',
      options: ['20°', '45°', '60°', '90°'],
      correctIndex: 1,
    },
  },
  {
    id: 'wave',
    tag: 'Lesson 2 of 2',
    title: 'Squeeze the wave, raise the pitch',
    concept:
      "A wave's frequency is how many times it repeats each second. Its wavelength is the physical distance between repeats. Push more waves into the same second and each one has to get physically shorter — that trade-off is why a smaller guitar string rings higher.",
    visual: {
      kind: 'wave',
      label: 'Frequency',
      min: 1,
      max: 10,
      step: 1,
      default: 4,
      unit: ' Hz',
    },
    question: {
      prompt: 'As frequency goes up, what happens to wavelength?',
      options: ['It increases', 'It decreases', 'It stays the same', "It's unrelated to frequency"],
      correctIndex: 1,
    },
  },
]
