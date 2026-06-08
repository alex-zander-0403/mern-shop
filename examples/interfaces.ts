// interfaces

// для функций -синтаксис
interface Fn2 {
  (arg: number): void;
}

// Объявление с одинаковым именем (declaration merging)

interface Post {
  id: number;
}

interface Post {
  text: string;
}
// { id: number, text: string }
const post: Post = { id: 1, text: "lorem ipsum" };

// наследование/расширение - через extends
interface BaseUser {
  id: number;
  login: string;
}

interface ExtendedUser extends BaseUser {
  password: string;
}

// const user2: ExtendedUser = {
//   id: 220,
//   login: "qwerty",
//   password: "12345"
// };
