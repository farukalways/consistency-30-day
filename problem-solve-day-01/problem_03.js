// একটি সংখ্যা জোড় (even) না বিজোড় (odd) চেক করো।

function evenAndOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenAndOdd(13));
