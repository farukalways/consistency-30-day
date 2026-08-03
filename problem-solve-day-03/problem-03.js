// একটি অ্যারেতে একটি আইটেম মুছে ফেলো।

const myNaumber = [1, 2, 3, 4];

function removeFirst(myArr) {
  for (let i = 0; i < myArr.length - 1; i++) {
    myArr[i] = myArr[i + 1];
    console.log(i);
  }

  return (myArr.length = myArr.length - 1);
}

function removeLast(myArr) {
  if (myArr.length > 0) {
    myArr.length = myArr.length - 1;
  }
  return myArr.length;
}

console.log(myRemove(myNaumber));
console.log(myNaumber);
