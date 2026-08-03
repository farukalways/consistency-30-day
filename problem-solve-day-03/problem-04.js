// একটি অ্যারেতে সব জোড় সংখ্যা বের করো।

const myArr = [2, 4, 5, 3, 7, 8];

function evenNumber(arr) {
  const result = [];

  for (item of arr) {
    if (item % 2 === 0) {
      result.push(item);
    }
  }
  return result;
}

console.log(evenNumber(myArr));
