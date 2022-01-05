function arithmetic(A) {
  A.sort((a, b) => {
    return a - b;
  });
  var d = A[1] - A[0];
  for (var i = 1; i < A.length; i++) {
    if (A[i] - A[i - 1] != d) {
      return 0;
    }
  }
  return 1;
}

A = [2, 4, 1];
console.log(arithmetic(A));
