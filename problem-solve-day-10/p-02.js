// একটি স্ট্রিং-এ কোন অক্ষরটি সবচেয়ে বেশি আছে তা বের করো।

const str = "mostFrequentChar";

const mostFrequentChar = (val) => {
  const isMostValue = {};
  let mostVal;
  let count = 0;

  for (const item of val) {
    if (isMostValue[item]) {
      isMostValue[item]++;
    } else {
      isMostValue[item] = 1;
    }
  }

  for (const key in isMostValue) {
    if (isMostValue[key] > count) {
      count = isMostValue[key];
      mostVal = key;
    }
  }

  return mostVal;
};

console.log(mostFrequentChar(str));
