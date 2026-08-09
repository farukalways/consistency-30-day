/*একটি Online Learning Platform নতুন Student Registration-এর পরে একটি Introduction Message তৈরি করতে চায়।

Input
Function একটি Object গ্রহণ করবে।
Example:
{
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}
Output
Template Literal ব্যবহার করে Return করবে—

Example:
My name is Rafi. I am 18 years old. I am learning JavaScript.


Challenge
Return "Invalid"
যদি Input Object না হয়
অথবা name, age অথবা course property না থাকে
 */

function studentIntroduction(student) {
  if (
    typeof student !== "object" ||
    student === null ||
    Array.isArray(student)
  ) {
    return "Invalid";
  }

  if (!student.name || !student.age || !student.course) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}
