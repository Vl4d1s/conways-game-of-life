import "./GameBoard.css";

export interface GameBoardProps {
  grid: number[][];
  setGrid: (grid: number[][]) => void;
}

export default function GameBoard({ grid, setGrid }: GameBoardProps) {
  const toggleGridCell = (i: number, k: number) => {
    const newGrid = [...grid];
    newGrid[i][k] = grid[i][k] ? 0 : 1;
    setGrid(newGrid);
  };

  return (
    <div className="game-board">
      {grid.map((rows, i) => (
        <div key={i} className="row">
          {rows.map((_, k) => (
            <div
              key={`${i}-${k}`}
              className={`cell ${grid[i][k] ? "black" : ""}`}
              onClick={() => toggleGridCell(i, k)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
