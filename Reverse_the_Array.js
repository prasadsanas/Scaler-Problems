function reverse(A) {
  for (var i = 0; i < A.length / 2; i++) {
    var temp = A[i];
    A[i] = A[A.length - 1 - i];
    A[A.length - 1 - i] = temp;
  }
  return A;
}
