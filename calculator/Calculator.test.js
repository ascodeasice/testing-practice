import Calculator from "./Calculator";

it("Add numbers", () => {
  expect(Calculator.add(1, 2)).toBe(3);
})

it("Add non-numbers", () => {
  expect(() => Calculator.add("1", 2)).toThrow();
})

it("Subtract numbers", () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
})

it("Subtract non-numbers", () => {
  expect(() => Calculator.subtract("1", 2)).toThrow();
})

it("Multiply numbers", () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
})

it("Add non-numbers", () => {
  expect(() => Calculator.add("1", 2)).toThrow();
})

it("Divide non-zero numbers", () => {
  expect(Calculator.divide(4, 2)).toBe(2);
})

it("Divided by zero", () => {
  expect(() => Calculator.divide(2, 0)).toThrow();
})

it("Divided by non-numbers", () => {
  expect(() => Calculator.divide(4, "2")).toThrow();
})