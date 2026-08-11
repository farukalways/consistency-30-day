// একটি অ্যারেকে বড় থেকে ছোট ক্রমে সাজাও।

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const sortDescending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

console.log(sortDescending(arr));
