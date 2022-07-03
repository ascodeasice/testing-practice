const Calculator = (() => {
  const add = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      throw new Error("Not numbers");
    }
    else {
      return a + b;
    }
  }

  const subtract = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      throw new Error("Not numbers");
    }
    else {
      return a - b;
    }
  }

  const multiply = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      throw new Error("Not numbers");
    }
    else {
      return a * b;
    }
  }

  const divide = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      throw new Error("Not numbers");
    }
    else if (b == 0) {
      throw new Error("Can't be divided by zero");
    }
    else {
      return a / b;
    }
  }

  return { add, subtract, multiply, divide };
})();
//written as IIFE

export default Calculator;