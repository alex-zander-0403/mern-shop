// ==============={ base type }===============
interface User {
  id: number;
  login: string;
}

// ===========================================

// тип утилита, который создает новый тип с уже readonly свойствами
type ReadOnlyType<T> = {
  readonly [Key in keyof T]: T[Key];
  // -readonly [Key in keyof T]: T[Key]; // обратный -эффект
};

type newUser1 = ReadOnlyType<User>;
// {
//   readonly id: number;
//   readonly login: string;
// }

// ===========================================

// тип утилита, который создает новый тип с уже опциональными свойствами!
type OptionalType<T> = {
  [Key in keyof T]?: T[Key];
  // [Key in keyof T]-?: T[Key]; // обратный -эффект
};

type newUser2 = OptionalType<User>;
// {
//   id?: number | undefined;
//   login?: string | undefined;
// }

// ===========================================

// тип утилита, который создает новый тип с исключением свойств (Exclude) или null значениями (| null)!
type WithoutId<T> = {
  [Key in keyof T as Exclude<Key, "id">]: T[Key] | null;
};

type newUser3 = WithoutId<User>;
// {
//   login: string | null;
// }
