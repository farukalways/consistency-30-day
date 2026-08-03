// একটি অ্যারে ডিক্লেয়ার করো।
// একটি অ্যারেতে নতুন আইটেম যোগ করো।
const numbers = [2, 4];

function myPush(arr, ...items) {
  for (item of items) {
    arr[arr.length] = item;
  }
  return arr.length;
}

console.log(myPush(numbers, 15));

myPush(numbers, 18, 44, 55, 5555);
console.log(numbers);
