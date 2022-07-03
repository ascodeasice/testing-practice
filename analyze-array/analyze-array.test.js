import { expect } from "expect";
import analyzeArray from "./analyze-array";

it("Empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0
  })
})

it("Array with non-numbers", () => {
  expect(() => analyzeArray([3, "str", 2])).toThrow();
})

it("Normal array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})

it("Normal array(2)", () => {
  const object = analyzeArray([-1, 1, 5, -5]);
  expect(object).toEqual({
    average: 0,
    min: -5,
    max: 5,
    length: 4
  })
})