function solve(A) {
  var n = A.length;
  for (var i = 0; i < A.length; i++) {
    A[i] += (A[A[i]] % n) * n;
  }
  for (var i = 0; i < A.length; i++) {
    A[i] = Math.floor(A[i] / n);
  }
  return A;
}

A = [1, 0];
console.log(solve(A));
