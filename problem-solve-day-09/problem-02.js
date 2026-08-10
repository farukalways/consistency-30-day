// একটি অ্যারেতে কতগুলো ইউনিক সংখ্যা আছে বের করো।

const numbers = [4, 7, 2, 4, 9, 7, 1, 2, 6, 9, 3];

function unicNum(arr) {
  const result = [];

  arr.map((number) => {
    const isNumber = result.includes(number);
    if (!isNumber) {
      result.push(number);
    }
  });

  return result;
}
// unicNum(numbers);

console.log(unicNum(numbers));
