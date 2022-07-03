//helper function
const alphaNum = 26;

function isLowerCase(char) {
  return char.toLowerCase() == char;
}

function isUpperCase(char) {
  return char.toUpperCase() == char;
}

function isPunc(char) {
  return isLowerCase(char) && isUpperCase(char);//changing case doesn't work on punctuation
}

function shiftLowerCase(char, shift) {
  const codeA = "a".charCodeAt(0);
  const newCode = codeA + (char.charCodeAt(0) - codeA + shift) % alphaNum;
  const newChar = String.fromCharCode(newCode);

  return newChar;
}

function shiftUpperCase(char, shift) {
  const codeA = "A".charCodeAt(0);
  const newCode = codeA + (char.charCodeAt(0) - codeA + shift) % alphaNum;
  const newChar = String.fromCharCode(newCode);

  return newChar;
}

//public function
function caesarCipher(str, shift) {
  if (typeof str !== "string") {
    throw new Error("Not a string");
  }
  if (typeof shift !== "number" || shift < 0) {
    throw new Error("Invalid shift");
  }
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (isPunc(str[i])) {
      newStr += str[i];
    }
    else if (isLowerCase(str[i])) {
      newStr += shiftLowerCase(str[i], shift);
    }
    else if (isUpperCase(str[i])) {
      newStr += shiftUpperCase(str[i], shift);
    }
  }

  return newStr;
}

export default caesarCipher;