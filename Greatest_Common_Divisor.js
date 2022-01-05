function solve(A, B) {
  if (B > A) {
    let temp = A;
    A = B;
    B = temp;
  }
  while (A > 0) {
    let temp = A;
    A = B % A;
    B = temp;
  }
  return B;
}
A = 6;
B = 7;
console.log(solve(A, B));
