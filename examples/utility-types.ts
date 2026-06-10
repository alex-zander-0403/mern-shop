// ==============={ BaseUser }===============
type BaseUser = {
  id: number;
  login: string;
  email: string;
};

// ==============={ Partial }===============

// Partial<T> - Делает все свойства опциональными
type PartialUser = Partial<BaseUser>;
// { id?: number; login?: string; email?: string; }

// ==============={ Required }===============

// Required<T> - Делает все свойства обязательными
type RequiredConfig = Required<BaseUser>;
// { id: number; login: string; email: string; }

// ==============={ Readonly }===============

// Readonly<T> - Делает все свойства readonly
type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly login: string; readonly email: string; }

// ==============={ Pick / Omit}===============

// Pick<T, K> - Выбирает указанные поля из типа
// Omit<T, K> - Исключает указанные поля из типа

type UserPreview = Pick<BaseUser, "login" | "email">;
// { login: string; email: string }
// id не был добавлен

// -----

type UserWithoutEmail = Omit<BaseUser, "email">;
// { id: number; login: string; }
// email был исключен

// ==============={ Exclude / Extract }===============

type Colors1 = "red" | "green" | "yellow" | "blue" | "black";
type Colors2 = "yellow" | "grey" | "white";

// Exclude<T, U> - Исключает типы U из объединения T
type NarrowColor1 = Exclude<Colors1, "red" | "green">;
// type NarrowColor1 = "yellow" | "blue" | "black"

// -----

// Extract<T, U> - Извлекает типы, которые есть в обоих объединениях.
type NarrowColor2 = Extract<Colors1, "red" | "green">;
// type NarrowColor2 = "red" | "green"

// Извлекает типы, которые есть в обоих объединениях
type NarrowColor3 = Extract<Colors1, Colors2>;
// type NarrowColor3 = "yellow"

// ==============={ ReturnType / Parameters }===============

function getUser(id: number, login: string) {
  return { userId: id, userName: login };
}

// ReturnType<T> - Получает тип возвращаемого значения из функции
// достаем тип возвращаемого из функции значения, предварительно приведя функцию к типу (type of)
type UserFromFnType = ReturnType<typeof getUser>;
// { userId: number; userName: string; }

// -----

// Parameters<T> - Получает типы параметров функции в виде кортежа
type GetUserParametersType = Parameters<typeof getUser>;
// type GetUserParametersType = [id: number, login: string]

// ==============={ Record }===============

type Page = "home" | "about" | "contact";

// Record<K, T> - Создаёт тип объекта с ключами типа K и значениями типа T.
type PageData = Record<Page, { title: string; views: number }>;
// {
//   home: { title: string; views: number };
//   about: { title: string; views: number };
//   contact: { title: string; views: number };
// }

const pages: PageData = {
  home: { title: "Home", views: 1000 },
  about: { title: "About", views: 500 },
  contact: { title: "Contact", views: 200 },
};
