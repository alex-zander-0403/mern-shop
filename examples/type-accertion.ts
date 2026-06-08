let value: unknown = "hello";
let length1 = (value as string).length;

interface Post {
  id: number;
  title: string;
}

// type accertion
const dataFromFetch1 = {
  id: 229,
  title: "hello ts",
} as Post;

// type accertion ❌ конфликтует с JSX
const dataFromFetch2 = <Post>{
  id: 235,
  title: "hello ts",
};

// satisfies в отличии от as, не преобразовывает объект, а только проверяет соответствия (4.9)
const dataFromFetch3 = {
  id: 450,
  title: "hello ts",
} satisfies Post;
