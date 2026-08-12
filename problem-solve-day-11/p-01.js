// একটি অ্যারে থেকে ডুপ্লিকেট রিমুভ করো।

const arr1 = [1, 2, 4, 4, 2, 5, 7, 8, 1, 3];

function removeDublicateNumber(arr) {
  const result = [];

  arr.forEach((e) => {
    if (!result.includes(e)) {
      result.push(e);
    }
  });
  return result;
}

console.log(removeDublicateNumber(arr1));
