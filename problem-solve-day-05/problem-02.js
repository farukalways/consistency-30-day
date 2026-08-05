// একটি অ্যারে উল্টো করে দেখাও।

const fruits = ["apple", "banana", "cherry", "mango", "orange"];

// return new array
function inverted(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }

  return result;
}

// use two pointer  algoridom

function inverted2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

inverted2(fruits);
console.log(fruits);
