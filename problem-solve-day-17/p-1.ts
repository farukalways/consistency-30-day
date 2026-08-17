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

// ফাংশনটি ওই ইউজার অবজেক্টের status আপডেট করে নতুন ইউজার অবজেক্টটি রিটার্ন করবে।
const updateStatus = (user: User, newStatus: UserStatus) => {
  return {
    ...user,
    status: newStatus,
  };
};

console.log(updateStatus(newUser, "active"));
