// একটি অ্যারের সব স্ট্রিং কে বড় হাতের অক্ষরে রূপান্তর করো।

const fruits = ["apple", "banana", "cherry", "mango", "orange"];

function upperLetter(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }
  return arr.length;
}
