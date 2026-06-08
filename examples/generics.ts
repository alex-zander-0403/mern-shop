interface User {
  id: number;
  login: string;
}

interface Product {
  title: string;
}

interface ApiResponse<T> {
  data: T;
}

// =========================================

// тип с подтипом в дженерике
// const response: ApiResponse<User> = {
//   data: {
//     id: 14,
//     login: "alex",
//   },
// };

// =========================================

// дженерики в функциях
function fetch<T>(arg: T) {
  const response: ApiResponse<T> = { data: arg };

  return response;
}

// вызов
const myUser = fetch<User>({
  id: 123,
  login: "bob",
});

// =========================================

// условные типы
type isArray<T> = T extends any[] ? true : false;

const data1: isArray<string> = false;
const data2: isArray<string[]> = true;

// --------------------

type User1 = {
  id: number;
  login: string;
};

type Error1 = {
  message: string;
};

type loginUser<T> = T extends User1 ? User1 : Error1;

const userData: loginUser<User1> = {
  id: 123,
  login: "qwe",
};

const errorData: loginUser<123> = { message: "login failed" };
