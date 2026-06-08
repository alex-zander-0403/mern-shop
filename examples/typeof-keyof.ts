// ===================={ typeof }====================
const user113 = {
  id: 211,
  login: "Alex",
};

type User = typeof user113;

// -------------------

function getData(arg: number): string {
  return String(arg);
}

// извлечение типа функции
type getDataFn = typeof getData; // type getDataFn = (arg: number) => string

// * utility type для извлечения типа возвращаемого значения функции
type getDataReturnType = ReturnType<typeof getData>; // type getDataReturnType = string

// * utility type для извлечения массива аргументов функции
type getDataParams = Parameters<typeof getData>; // type getDataParams = [arg: number]

// ===================={ keyof }====================

interface Car {
  brand: string;
  year: number;
  electric: boolean;
}

type CarKeys = keyof Car; // "brand" | "year" | "electric"

// -------------------

const user119: User = {
  id: 265,
  login: "Bob",
};

// Ограничение параметра K автоматически ограничивается ключами T
function getByKey<T, K extends keyof T>(obj: T, key: K) {
  //
  return obj[key];
}

console.log(getByKey(user119, "id")); // 265
