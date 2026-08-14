// কটি স্ট্রিং-এ যতগুলো space আছে তার সংখ্যা বের করো

const text = "Hello World I am Shopon";

const count = text.match(/ /g)?.length || 0;

console.log(count); // 4
