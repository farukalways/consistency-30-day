// একটি অ্যারে কে remove করো without modifying original

const arr1 = [1, 2, 3, 4];

let originalArray = ["apple", "banana", "orange"];
const referenceArray = originalArray;

originalArray.splice(0, originalArray.length);

console.log(originalArray);
console.log(referenceArray);
