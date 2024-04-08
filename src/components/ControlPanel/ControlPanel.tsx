import "./ControlPanel.css";
import { patterns } from "../../config";

export interface ControlPanelProps {
  setRunning: (running: boolean) => void;
  running: boolean;
  resetGrid: () => void;
  nextGeneration: () => void;
  isGridClean: boolean;
  setPattern: (pattern: string) => void;
}

export default function ControlPanel({
  setRunning,
  running,
  resetGrid,
  nextGeneration,
  isGridClean,
  setPattern,
}: ControlPanelProps) {
  return (
    <div className="control-panel">
      <button className="control-button" onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button
        className="control-button"
        onClick={nextGeneration}
        disabled={isGridClean || running}
      >
        Next Generation
      </button>
      <button
        className="control-button reset-button"
        onClick={resetGrid}
        disabled={isGridClean}
      >
        Reset
      </button>
      <select
        onChange={(e) => setPattern(e.target.value)}
        className="pattern-select"
      >
        {Object.entries(patterns).map(([key, { name }]) => (
          <option key={key} value={key}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
