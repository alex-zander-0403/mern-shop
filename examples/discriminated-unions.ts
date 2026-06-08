type figure =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number };

// if (figure.type === "circle") { figure.radius } // литерал type гарантирует сужение

// ===========================

function calc(arg: figure) {
  if (arg.type === "circle") {
    return arg.radius / (2 * Math.PI);
  }
  if (arg.type === "square") {
    return arg.side * arg.side;
  }
}

console.log(calc({ type: "square", side: 10 })); // 100
