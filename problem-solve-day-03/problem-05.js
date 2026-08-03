// একটি অ্যারের মধ্যে সর্বোচ্চ সংখ্যা খুঁজে বের করো।

const myNumber = [2, 3, 4, 5, 7, 90, 346, 43, 62];

function highestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  let result = arr[0];

  for (const item of arr) {
    if (item > result) {
      result = item;
    }
  }

  return result;
}

console.log(highestNumber(myNumber));

console.log(highestNumber([-10, -5, -20]));
