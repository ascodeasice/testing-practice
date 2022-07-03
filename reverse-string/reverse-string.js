function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Not a string");
  }

  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

export default reverseString;