function solve(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
    }
  }
  for (let i = 1; i <= A.length; i++) {
    if (!obj[i]) {
      return i;
    }
  }
}

A = [-8, -7, -6];
console.log(solve(A));
