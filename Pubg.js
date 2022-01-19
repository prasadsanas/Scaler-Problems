function solve(A) {
  let ans = A[0];
  for (let i = 0; i < A.length; i++) {
    ans = GCD(ans, A[i]);
  }
  return ans;
}

function GCD(A, B) {
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
A = [6, 4];
console.log(solve(A));
