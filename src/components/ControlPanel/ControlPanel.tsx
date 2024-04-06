interface ControlPanelProps {
  setRunning: (running: boolean) => void;
  running: boolean;
  resetGrid: () => void;
}

const ControlPanel = ({
  setRunning,
  running,
  resetGrid,
}: ControlPanelProps) => {
  return (
    <div>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={resetGrid}>Reset</button>
    </div>
  );
};

export default ControlPanel;
