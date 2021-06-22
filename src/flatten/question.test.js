import { flattenDeep } from "./question";

describe("FlattenDepp", () => {
  test("integer array - 1", () => {
    expect(flattenDeep([1, 2, [3, 4, 5, [6, 7], 8], 9])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });
  test("integer array - 2", () => {
    expect(
      flattenDeep([[1, 2, 3], 4, [5, 6, [7, [8, 9, [10]]], 11], 12])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});
