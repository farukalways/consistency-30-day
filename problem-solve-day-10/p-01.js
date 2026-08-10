// একটি সংখ্যা প্রাইম কিনা চেক করো।

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(7));
