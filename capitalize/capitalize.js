function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("Can't capitalize non-string");
  }
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      newStr += str[i].toUpperCase();
    }
    else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

export default capitalize;