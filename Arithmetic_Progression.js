function Ap(A) {
  A.sort((a, b) => {
    return a - b;
  });
  let num = A[1] - A[0];
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] == num) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

A = [1, 4, 3];
console.log(Ap(A));
