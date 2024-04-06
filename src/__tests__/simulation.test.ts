import {
  countLiveNeighbors,
  runSimulationStep,
  applyLiveCellRules,
  applyDeadCellRules,
} from "../utils/simulation-utils";

describe("Simulation", () => {
  describe("countLiveNeighbors function", () => {
    const grid: number[][] = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];

    it("should return the correct number of live neighbors for a cell in the middle of the grid", () => {
      const result = countLiveNeighbors(grid, 1, 1);
      expect(result).toBe(4);
    });

    it("should return the correct number of live neighbors for a cell at the top left corner of the grid", () => {
      const result = countLiveNeighbors(grid, 0, 0);
      expect(result).toBe(3);
    });

    it("should return the correct number of live neighbors for a cell at the bottom right corner of the grid", () => {
      const result = countLiveNeighbors(grid, 2, 2);
      expect(result).toBe(3);
    });

    it("should return the correct number of live neighbors for a cell with no live neighbors", () => {
      const result = countLiveNeighbors(grid, 1, 0);
      expect(result).toBe(3);
    });

    it("should return the correct number of live neighbors for a cell at the edge of the grid", () => {
      const result = countLiveNeighbors(grid, 1, 2);
      expect(result).toBe(3);
    });
  });

  describe("runSimulationStep function with Blinker pattern", () => {
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
  });

  describe("applyLiveCellRules function", () => {
    it("should return 0 for a live cell with fewer than two live neighbors", () => {
      const result = applyLiveCellRules(1);
      expect(result).toBe(0);
    });

    it("should return 0 for a live cell with more than three live neighbors", () => {
      const result = applyLiveCellRules(4);
      expect(result).toBe(0);
    });

    it("should return 1 for a live cell with two or three live neighbors", () => {
      const result1 = applyLiveCellRules(2);
      expect(result1).toBe(1);

      const result2 = applyLiveCellRules(3);
      expect(result2).toBe(1);
    });
  });

  describe("applyDeadCellRules function", () => {
    it("should return 0 for a dead cell with fewer than three live neighbors", () => {
      const result = applyDeadCellRules(2);
      expect(result).toBe(0);
    });

    it("should return 1 for a dead cell with exactly three live neighbors", () => {
      const result = applyDeadCellRules(3);
      expect(result).toBe(1);
    });

    it("should return 0 for a dead cell with more than three live neighbors", () => {
      const result = applyDeadCellRules(4);
      expect(result).toBe(0);
    });
  });
});
