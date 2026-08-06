// একটি স্ট্রিং এর মধ্যে কতগুলো vowel আছে তা বের করো।

const text = "javascript";
//  way 1
function vowelCount1(str) {
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

// way 2
function vowelCount2(str) {
  let count = 0;
  const vowels = "aeiou";
  const lowerStr = str.toLowerCase();

  for (const char of lowerStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
