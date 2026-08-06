// একটি স্ট্রিং উল্টো করে দেখাও।

const language = "javascript";

function inverted(str) {
  const strLength = str.length;
  let result = "";
  for (let i = strLength - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
}

console.log(inverted(language));
