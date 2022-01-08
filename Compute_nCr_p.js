function solve(A, B, C) {
  let num = factorial(A);
  let denom = factorial(A - B) * factorial(B);

  console.log(num, denom);
  return (num / denom) % C;
}

function factorial(A) {
  if (A == 0 || A == 1) {
    return 1;
  } else {
    return A * factorial(A - 1);
  }
}

A = 778;
B = 578;
C = 10007;
console.log(solve(A, B, C));
