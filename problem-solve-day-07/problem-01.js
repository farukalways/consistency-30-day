// একটি ফাংশন লিখো যা অ্যারেতে কয়টি vowel আছে তা রিটার্ন করবে।

const arr = ["a", "f", "w,", "I"];

function vowelCount(arr1) {
  let count = 0;

  for (const item of arr1) {
    let arrItem = item.toLowerCase();
    if (
      arrItem === "a" ||
      arrItem === "e" ||
      arrItem === "i" ||
      arrItem === "o" ||
      arrItem === "u"
    ) {
      count += 1;
    }
  }
  return count;
}

console.log(vowelCount(arr));
