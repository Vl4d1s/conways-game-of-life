import { useState, useCallback, useEffect, useRef } from "react";
import { runSimulationStep } from "./utils/simulation-utils";
import GameBoard from "./components/GameBoard/GameBoard";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import "./App.css";
import { generateEmptyGrid } from "./utils/grid-utils";

const numRows = 30;
const numCols = 30;

const App = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid(numRows, numCols));
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);

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

  return (
    <div>
      <ControlPanel
        setRunning={() => setRunning(!running)}
        running={running}
        resetGrid={resetGrid}
      />
      <GameBoard grid={grid} setGrid={(grid) => setGrid(grid)} />
    </div>
  );
};

export default App;
