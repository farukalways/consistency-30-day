// একটি ফাংশন লিখো যা একটি সংখ্যা পেলে ফ্যাক্টোরিয়াল রিটার্ন করবে।

function getFactorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(getFactorial(5));
