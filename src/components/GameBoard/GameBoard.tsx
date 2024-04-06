interface GameBoardProps {
  grid: number[][];
  setGrid: (grid: number[][]) => void;
}

const GameBoard = ({ grid, setGrid }: GameBoardProps) => {
  const toggleGridCell = (i: number, k: number) => {
    const newGrid = [...grid];
    newGrid[i][k] = grid[i][k] ? 0 : 1;
    setGrid(newGrid);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid[0].length}, 20px)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((_, k) => (
          <div
            key={`${i}-${k}`}
            onClick={() => toggleGridCell(i, k)}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? "black" : undefined,
              border: "solid 1px black",
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
