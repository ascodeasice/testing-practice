// import { expect } from "expect";
import capitalize from "./capitalize";

it("All lower case", () => {
  expect(capitalize("apple")).toBe("Apple");
});

it("All upper case", () => {
  expect(capitalize("APPLE")).toBe("Apple");
});

it("Not string", () => {
  expect(() => capitalize(undefined)).toThrow();
});

it("Empty string", () => {
  expect(capitalize("")).toBe("");
});