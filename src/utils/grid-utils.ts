import { Pattern } from "../config";

export const generateEmptyGrid = (
  numRows: number = 25,
  numCols: number = 25
): number[][] => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

export const isGridClean = (grid: number[][]) => {
  return grid.every((row) => row.every((cell) => cell === 0));
};

export function applyPatternToGrid(
  pattern: Pattern,
  numRows: number,
  numCols: number
): number[][] {
  if (!pattern.pattern || pattern.pattern.length === 0) {
    return generateEmptyGrid(numRows, numCols);
  }

  const newGrid = generateEmptyGrid(numRows, numCols);
  const startRow = Math.floor((numRows - pattern.pattern.length) / 2);
  const startCol = Math.floor((numCols - pattern.pattern[0].length) / 2);

  for (let i = 0; i < pattern.pattern.length; i++) {
    for (let j = 0; j < pattern.pattern[i].length; j++) {
      if (pattern.pattern[i][j] === 1) {
        newGrid[startRow + i][startCol + j] = 1;
      }
    }
  }

  return newGrid;
}
