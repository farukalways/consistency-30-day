// একটি অ্যারেতে একটি নির্দিষ্ট মান আছে কিনা খুঁজে দেখো।

const fruits = ["apple", "banana", "cherry", "mango", "orange"];

function myincludes(arr, searchValue) {
  for (const item of arr) {
    if (item === searchValue) {
      return true;
    }
  }
  return false;
}

console.log(myincludes(fruits, "appl"));
