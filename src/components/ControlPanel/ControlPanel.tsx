import React from "react";
import "./ControlPanel.css";

interface ControlPanelProps {
  setRunning: (running: boolean) => void;
  running: boolean;
  resetGrid: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  setRunning,
  running,
  resetGrid,
}) => {
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
};

export default ControlPanel;
