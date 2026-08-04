// একটি অ্যারের সব স্ট্রিং কে বড় হাতের অক্ষরে রূপান্তর করো।

const fruits = ["apple", "banana", "cherry", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
  fruits[i] = fruits[i][0].toUpperCase() + fruits[i].slice(1);
}

console.log(fruits);
