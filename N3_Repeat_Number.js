function repeatNumber(A) {
  var obj = {};
  for (var i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
      if (obj[A[i]] > A.length / 3) {
        return A[i];
      }
    } else {
      obj[A[i]] = obj[A[i]] + 1;
      if (obj[A[i]] > A.length / 3) {
        return A[i];
      }
    }
  }
  return -1;
}

A = [1, 2, 3, 4];
console.log(repeatNumber(A));
