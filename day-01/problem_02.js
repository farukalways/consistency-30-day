// তিনটি সংখ্যার মধ্যে সবচেয়ে ছোটটি বের করো।

function smallNum(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "invalid number";
  }

  return Math.min(a, b, c);
}

console.log(smallNum(1, 3, 4));
