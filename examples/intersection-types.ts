// intersection types

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
type User = MainInfo & SecondaryInfo;

// =======================================

// User должен! быть типом объединяющим два подтипа
const user3: User = {
  login: "torretto",
  password: "123",
  email: "gonki123@mail.com",
  age: 12,
  gender: "male",
};
