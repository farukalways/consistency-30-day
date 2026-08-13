// একটি অ্যারে থেকে সর্বোচ্চ ও সর্বনিম্ন সংখ্যার পার্থক্য বের করো

const arr1 = [1, 2, 3, 4, 2, 3, 1, 4, 56, 3];

function maxMinDiffer(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];
  arr.forEach((e) => {
    if (maxNum < e) {
      maxNum = e;
    } else if (minNum > e) {
      minNum = e;
    }
  });

  return maxNum - minNum;
}

console.log(maxMinDiffer(arr1));
