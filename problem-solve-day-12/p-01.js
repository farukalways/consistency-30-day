// একটি নাম্বার উল্টো করে দেখাও

const arr1 = 12344556;

function reversnum(para) {
  return Number(String(para).split("").reverse().join(""));
}
