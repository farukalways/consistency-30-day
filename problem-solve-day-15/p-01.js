const text = "programming";

const result = text
  .split("")
  .filter((char) => text.indexOf(char) === text.lastIndexOf(char))
  .join("");

console.log(result);
