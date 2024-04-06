import { runSimulationStep } from "../utils/simulation-utils";

describe("runSimulationStep with Blinker pattern", () => {
  it("should correctly oscillate the Blinker pattern", () => {
    const initialGrid = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const expectedGridAfterOneStep = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const resultAfterOneStep = runSimulationStep(initialGrid);
    expect(resultAfterOneStep).toEqual(expectedGridAfterOneStep);

    const resultAfterTwoSteps = runSimulationStep(resultAfterOneStep);
    expect(resultAfterTwoSteps).toEqual(initialGrid);
  });

  it("should return the correct next state for a live cell with fewer than two live neighbors", () => {
    const result = determineNextState(0, 0, 1, 0);
    expect(result).toBe(0); // Expect the live cell to die due to underpopulation
  });

  it("should return the correct next state for a live cell with two live neighbors", () => {
    const result = determineNextState(0, 0, 2, 1);
    expect(result).toBe(1); // Expect the live cell to survive to the next generation
  });

  it("should return the correct next state for a live cell with three live neighbors", () => {
    const result = determineNextState(0, 0, 3, 1);
    expect(result).toBe(1); // Expect the live cell to survive to the next generation
  });

  it("should return the correct next state for a live cell with more than three live neighbors", () => {
    const result = determineNextState(0, 0, 4, 1);
    expect(result).toBe(0); // Expect the live cell to die due to overpopulation
  });

  it("should return the correct next state for a dead cell with exactly three live neighbors", () => {
    const result = determineNextState(0, 0, 3, 0);
    expect(result).toBe(1); // Expect the dead cell to become alive (reproduction)
  });

  it("should return the correct next state for a dead cell with any other number of live neighbors", () => {
    const result = determineNextState(0, 0, 2, 0);
    expect(result).toBe(0); // Expect the dead cell to remain dead
  });
});
