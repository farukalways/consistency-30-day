// function identity<T>(val: T): T {
//   return val;
// }
// ==============================
// function wrapInObject <T>(val: T): { data: T } {
//   return { data: val };
// }
// ==============================

// function makePair<T, U>(first: T, second: U): { first: T; second: U } {
//   return { first, second };
// }

// ==============================
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

function createResponse<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    message: "string",
    data: data,
  };
}
