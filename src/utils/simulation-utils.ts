export const operations: number[][] = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

export const countLiveNeighbors = (
  grid: number[][],
  rowIndex: number,
  colIndex: number
): number => {
  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;
  operations.forEach(([x, y]) => {
    const newRow = rowIndex + x;
    const newCol = colIndex + y;
    // Check if the new position is within the grid bounds
    if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
      count += grid[newRow][newCol];
    }
  });
  return count;
};

export const determineNextState = (
  grid: number[][],
  rowIndex: number,
  colIndex: number
): number => {
  const liveNeighbors = countLiveNeighbors(grid, rowIndex, colIndex);
  const currentCellState = grid[rowIndex][colIndex];

  return currentCellState === 1
    ? applyLiveCellRules(liveNeighbors)
    : applyDeadCellRules(liveNeighbors);
};

export const applyLiveCellRules = (liveNeighbors: number): number => {
  if (liveNeighbors < 2 || liveNeighbors > 3) {
    return 0; // Any live cell with fewer than two live neighbors dies
  } else {
    return 1; // Any live cell with two or three live neighbors lives on
  }
};

export const applyDeadCellRules = (liveNeighbors: number): number => {
  if (liveNeighbors === 3) {
    return 1; // Any dead cell with exactly three live neighbors becomes alive
  } else {
    return 0; // Otherwise, the cell remains dead
  }
};

export const runSimulationStep = (grid: number[][]): number[][] => {
  // Apply the rules to each cell in the grid and generate the new grid
  const newGrid = grid.map((row, rowIndex) =>
    row.map((_, colIndex) => determineNextState(grid, rowIndex, colIndex))
  );

  return newGrid;
};
