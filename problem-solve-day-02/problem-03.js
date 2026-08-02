// ৫-এর নামতা প্রিন্ট করো

function namta(val) {
  const result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(i * val);
  }

  return result;
}

function namta2(val) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${val} x ${i} = ${val * i}`);
  }
}

namta(5);
