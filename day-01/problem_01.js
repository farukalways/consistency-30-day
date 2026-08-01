// দুইটি সংখ্যার মধ্যে বড়টি বের করো।
// system 1
function bigNumber(a, b) {
  if (!Number.isNaN(a) || !Number.isNaN(b)) {
    if (a < b) {
      return b;
    } else if (b < a) {
      return a;
    }
  } else {
    return "invalid number";
  }
}

// system 2
function bigNumber2(a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    return "invalid number";
  }
  return Math.max(a, b);
}

console.log(bigNumber2(55, 4));
