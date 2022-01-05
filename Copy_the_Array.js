function copyArray(A, B) {
  for (var i = 0; i < A.length; i++) {
    A[i] = A[i] + B;
  }
  return A;
}
