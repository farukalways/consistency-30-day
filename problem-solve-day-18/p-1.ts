// ১. এখানে User interface টি লিখুন
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
}

// ২. এখানে formatUserInfo ফাংশনটি লিখুন
function formatUserInfo(user: User) {
  if (user.phoneNumber) {
    return `${user.name} (${user.email}) - Phone: ${user.phoneNumber}`;
  } else {
    return `${user.name} (${user.email}) - Phone: Phone: Not provided`;
  }
}

const newUser: User = {
  id: 12,
  name: "ali",
  email: "ali@gmail.com",
  phoneNumber: "0274857",
};

console.log(formatUserInfo(newUser));
