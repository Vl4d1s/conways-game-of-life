export interface Pattern {
  name: string;
  pattern: number[][];
}

interface PatternCollection {
  [key: string]: Pattern;
}

export const patterns: PatternCollection = {
  empty: { name: "Empty", pattern: [] },
  glider: {
    name: "Glider",
    pattern: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
    ],
  },
  spaceship: {
    name: "Spaceship",
    pattern: [
      [0, 0, 1, 1, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
    ],
  },
  omniperiodic: {
    name: "Omniperciodic",
    pattern: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
  },
  spacefiller: {
    name: "Spacefiller",
    pattern: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  },
  beehive: {
    name: "Beehive",
    pattern: [
      [0, 1, 1, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 0],
    ],
  },
};
