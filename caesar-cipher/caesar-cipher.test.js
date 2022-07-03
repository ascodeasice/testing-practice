import caesarCipher from "./caesar-cipher";

it("Normal shift", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe("fghijklmnopqrstuvwxyzabcde");
})

it("Normal shift(2)", () => {
  expect(caesarCipher("attack at dawn", 12)).toBe("mffmow mf pmiz");
})

it("with upper case", () => {
  expect(caesarCipher("PaNdA", 5)).toBe("UfSiF");
})

it("with punctuation", () => {
  expect(caesarCipher("attack, at dawn.", 5)).toBe("fyyfhp, fy ifbs.");
})

it("Shift on non-string", () => {
  expect(() => caesarCipher(32, 4)).toThrow();
})

it("Shift negative number", () => {
  expect(() => caesarCipher("attack at dawn", -1)).toThrow();
})

it("Shift huge number", () => {
  expect(caesarCipher("attack at dawn", 26)).toBe("attack at dawn");
})
