export const runSimulationStep = (grid: number[][]): number[][] => {
  const numRows = grid.length;
  const numCols = grid[0].length;

  const operations: number[][] = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];

  // Function to count the number of live neighbors for a given cell
  const countLiveNeighbors = (rowIndex: number, colIndex: number): number => {
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

  // Function to determine the next state of a cell based on its neighbors
  const determineNextState = (rowIndex: number, colIndex: number): number => {
    const liveNeighbors = countLiveNeighbors(rowIndex, colIndex);
    const currentCellState = grid[rowIndex][colIndex];

    // Apply the rules of Conway's Game of Life
    if (currentCellState === 1) {
      if (liveNeighbors < 2 || liveNeighbors > 3) {
        return 0; // Any live cell with fewer than two live neighbors dies
      } else {
        return 1; // Any live cell with two or three live neighbors lives on
      }
    } else {
      if (liveNeighbors === 3) {
        return 1; // Any dead cell with exactly three live neighbors becomes alive
      } else {
        return 0; // Otherwise, the cell remains dead
      }
    }
  };

  // Apply the rules to each cell in the grid and generate the new grid
  const newGrid = grid.map((row, rowIndex) =>
    row.map((_, colIndex) => determineNextState(rowIndex, colIndex))
  );

  return newGrid;
};
