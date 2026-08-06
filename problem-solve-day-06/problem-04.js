{
  /* 
    1. একটি অবজেক্ট তৈরি করো যার মধ্যে নাম, বয়স, শহর থাকবে।
    2. অবজেক্ট থেকে একটি প্রপার্টি অ্যাক্সেস করো।
    3. অবজেক্টে নতুন প্রপার্টি যোগ করো।
    4.অবজেক্টে প্রপার্টি আপডেট করো।
    5.অবজেক্ট থেকে প্রপার্টি মুছে ফেলো।
    6.অবজেক্টের সব key প্রিন্ট করো।
    7.অবজেক্টের সব value প্রিন্ট করো।
*/
}
const person = {
  name: "ali",
  age: 22,
  country: "Bangladesh",
};

const personName = person.name;

person.status = "student";
person.name = "sujon";
delete person.country;
const keys = Object.keys(person);

const values = Object.values(person);
