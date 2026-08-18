// একটি সিস্টেমের ব্যবহারকারীর Role এবং Status পরিচালনা করার জন্য একটি ফাংশন লিখুন

type UserRole = "admin" | "editor" | "viewer";
type UserStatus = "active" | "suspended";
interface User {
  id: number | string;
  role: UserRole;
  status: UserStatus;
}

const newUser: User = {
  id: 32,
  role: "admin",
  status: "suspended",
};
const updateStatus = (user: User, newStatus: UserStatus) => {
  return {
    ...user,
    status: newStatus,
  };
};

console.log(updateStatus(newUser, "active"));
