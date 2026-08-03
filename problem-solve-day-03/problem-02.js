// একটি অ্যারের শুরুতে নতুন আইটেম যোগ করো
const numbers = [20, 30, 40];

function myUnshift(targetArray, newItem) {
  for (let i = targetArray.length; i > 0; i--) {
    targetArray[i] = targetArray[i - 1];
  }

  targetArray[0] = newItem;

  return targetArray.length;
}

myUnshift(numbers, 10);

console.log(numbers);
