import { useState, useCallback, useEffect, useRef } from "react";
import { runSimulationStep } from "./utils/simulation-utils";
import GameBoard from "./components/GameBoard/GameBoard";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import "./App.css";
import { generateEmptyGrid, isGridClean } from "./utils/grid-utils";

export default function App() {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  const numRows = grid.length;
  const numCols = grid[0].length;

  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((currentGrid) => runSimulationStep(currentGrid));
    setTimeout(runSimulation, 100);
  }, []);

  useEffect(() => {
    if (running) {
      runSimulation();
    }
  }, [running, runSimulation]);

  const resetGrid = () => {
    setRunning(false);
    setGrid(generateEmptyGrid(numRows, numCols));
  };

  const generateNextGeneration = () => {
    setGrid((currentGrid) => runSimulationStep(currentGrid));
  };

  return (
    <div className="container">
      <h1 className="app-title">Conway's Game of Life</h1>
      <ControlPanel
        setRunning={() => setRunning(!running)}
        running={running}
        resetGrid={resetGrid}
        nextGeneration={generateNextGeneration}
        isGridClean={isGridClean(grid)}
      />
      <GameBoard grid={grid} setGrid={(grid) => setGrid(grid)} />
    </div>
  );
}
