// একটি অ্যারেতে শুধুমাত্র একবার আসা সংখ্যাগুলো বের করো

const arr1 = [1, 2, 3, 4, 2, 3, 1, 4, 56, 3];

function setOneItem(arr) {
  const result = [];
  arr.forEach((e) => {
    if (!result.includes(e)) {
      result.push(e);
    }
  });

  return result;
}

console.log(setOneItem(arr1));
