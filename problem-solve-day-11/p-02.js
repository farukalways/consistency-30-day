// অ্যারে তে শুধু ফাল্সি ভ্যালুগুলো ফিল্টার করো।

const mixedArray = [
  "JS Dev",
  0,
  true,
  "",
  100,
  null,
  "Learning",
  undefined,
  NaN,
  false,
  {},
];

function removeFalsyVal(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsyVal(mixedArray));
