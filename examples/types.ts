// types

// для примитивов
type Id = number;
type IsActive = boolean;

// Union types + литералы
type ID = string | number;
type Literal = "small" | "medium" | "big";

// для кортежей
type Point = [number, number];

// для функций удобнее
type Fn1 = (arg: number) => void;

// Utility types
type Nullable<T> = T | null;

// Conditional types
type IsString<T> = T extends string ? true : false;

// наследование/расширение возможно через intersection &
type User = {
  name: string;
  age: number;
};

type AdvancedUser = User & { password: string };

// const user1: AdvancedUser = {
//   name: "Alex",
//   age: 33,
//   password: "12345"
// };
