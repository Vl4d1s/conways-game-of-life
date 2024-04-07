import "./ControlPanel.css";

interface ControlPanelProps {
  setRunning: (running: boolean) => void;
  running: boolean;
  resetGrid: () => void;
}

export default function ControlPanel({
  setRunning,
  running,
  resetGrid,
}: ControlPanelProps) {
  return (
    <div className="control-panel">
      <button className="control-button" onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button className="control-button" onClick={resetGrid}>
        Reset
      </button>
    </div>
  );
}
