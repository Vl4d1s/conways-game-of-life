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
