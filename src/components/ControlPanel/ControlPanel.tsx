import "./ControlPanel.css";

interface ControlPanelProps {
  setRunning: (running: boolean) => void;
  running: boolean;
  resetGrid: () => void;
  nextGeneration: () => void;
  isGridClean: boolean;
}

export default function ControlPanel({
  setRunning,
  running,
  resetGrid,
  nextGeneration,
  isGridClean,
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
    </div>
  );
}
