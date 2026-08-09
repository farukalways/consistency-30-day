/*
একটি Social Media Platform-এ User-দের Status Check করতে হবে।
User List একটি Array of Object আকারে দেওয়া আছে।
Function শুধুমাত্র isActive: true হওয়া User-দের Array Return করবে।

Input
একটি array of object যেখানে name এবং isActive property থাকবে।
যেমনঃ
[
 {name:"A", isActive:true},
 {name:"B", isActive:false}
]


Output
শুধুমাত্র isActive: true হওয়া User-দের Array Return করবে।
যেমনঃ
[{name:"A", isActive:true}]

Challenge
Return "Invalid"
Input Array না হলে
Empty Array হলে
Object-এ isActive property না থাকলে
*/

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  const hasValidObjects = users.every(
    (user) => typeof user === "object" && user !== null && "isActive" in user,
  );

  if (!hasValidObjects) {
    return "Invalid";
  }

  return users.filter((user) => user.isActive === true);
}
