// একটি স্ট্রিং এর মধ্যে কতগুলো vowel আছে তা বের করো।

const text = "javascript";

function vowelCount(str) {
  const lowerStr = str.toLowerCase();
  let result = 0;

  for (const item of lowerStr) {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      result = result + 1;
    }
  }
  return result;
}

console.log(vowelCount(text));
