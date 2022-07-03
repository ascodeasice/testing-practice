function analyzeArray(arr) {
  if (arr.some(item => typeof item != "number")) {
    throw new Error("Can't analyze array with non-numbers");
  }
  else if (arr.length == 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0
    };
  }
  else {
    const sum = arr.reduce((acc, item) => {
      return acc + item;
    });

    const min = arr.reduce((min, item) => Math.min(min, item));
    const max = arr.reduce((max, item) => Math.max(max, item));

    return {
      average: sum / arr.length,
      min: min,
      max: max,
      length: arr.length
    }
  }
}

export default analyzeArray;