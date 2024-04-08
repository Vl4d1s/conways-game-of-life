import { useState, useCallback, useEffect, useRef } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import "./App.css";
import {
  applyPatternToGrid,
  generateEmptyGrid,
  isGridClean,
} from "./utils/grid-utils";
import { runSimulationStep } from "./utils/simulation-utils";
import { patterns } from "./config";

export default function App() {
  const [grid, setGrid] = useState<number[][]>(() => generateEmptyGrid());
  const [running, setRunning] = useState<boolean>(false);
  const runningRef = useRef<boolean>(running);
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

  const setPattern = (patternKey: string) => {
    const pattern = patterns[patternKey as string];
    setGrid(() => applyPatternToGrid(pattern, numRows, numCols));
  };

  return (
    <div className="container">
      <h1 className="app-title">Finonex | Conway's Game of Life</h1>
      <ControlPanel
        setRunning={() => setRunning(!running)}
        running={running}
        resetGrid={resetGrid}
        nextGeneration={generateNextGeneration}
        isGridClean={isGridClean(grid)}
        setPattern={setPattern}
      />
      <GameBoard grid={grid} setGrid={setGrid} />
    </div>
  );
}
