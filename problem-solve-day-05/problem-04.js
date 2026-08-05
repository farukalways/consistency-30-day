// দুটি অ্যারে মিশাও।

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];

function addTwoArr(arr3, arr4) {
  const arr = [...arr3, ...arr4];

  return arr;
}

addTwoArr(arr1, arr2);
