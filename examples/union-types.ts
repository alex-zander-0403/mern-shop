// union types

type MainInfo = {
  login: string;
  password: string;
};

type SecondaryInfo = {
  email: string;
  age: number;
  gender: "male" | "female";
};

// union type
type User = MainInfo | SecondaryInfo;

// =======================================

// может быть первым подтипом в User
// User -> MainInfo
const user1: User = {
  login: "torretto",
  password: "123",
};
// может быть вторым подтипом в User
// User -> SecondaryInfo
const user2: User = {
  email: "gonki123@mail.com",
  age: 12,
  gender: "male",
};
// может быть типом User объединяющим два подтипа
// User
const user3: User = {
  login: "torretto",
  password: "123",
  email: "gonki123@mail.com",
  age: 12,
  gender: "male",
};

console.log(user1);
console.log(user2);
console.log(user3);
