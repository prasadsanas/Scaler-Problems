function Noble(A) {
  A.sort((a, b) => {
    return b - a;
  });
  var count = 0;
  if (A[0] == 0) {
    return 1;
  }
  for (var i = 1; i < A.length; i++) {
    if (A[i] == A[i - 1]) {
      if (count == A[i]) {
        return 1;
      }
    } else {
      count = i;
      if (count == A[i]) {
        return 1;
      }
    }
  }
  return -1;
}

A = [1, 2, 7, 0, 9, 3, 6, 0, 6];
console.log(Noble(A));
