import { expect } from "expect";
import reverseString from "./reverse-string";

it("Empty string", () => {
  expect(reverseString("")).toBe("")
})

it("Non-string", () => {
  expect(() => reverseString(undefined)).toThrow();
})

it("Normal string", () => {
  expect(reverseString("test")).toBe("tset");
})

it("multi-word string", () => {
  expect(reverseString("multiple words")).toBe("sdrow elpitlum");
})