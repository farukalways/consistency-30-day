// একটি স্ট্রিং এর দৈর্ঘ্য বের করো।

const value1 = "hello javaScript";
function stringLength(val) {
  let count = 0;

  for (const item of val) {
    count++;
  }
  return count;
}

console.log(stringLength(value1));
