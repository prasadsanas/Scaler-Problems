function solve(A, B) {
  if (A.length < 2 || B < 0) {
    return 0;
  }
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    let Ai = A[i] + B;
    let Aj = A[i] - B;
    if (obj[Ai] || obj[Aj]) {
      return 1;
    }
    obj[A[i]] = 1;
  }
  return 0;
}

A = [1, 3, 2];
B = 0;
console.log(solve(A, B));

// Ai - Aj = B
// Aj - Ai = B
