function Sum(A) {
  var min = Infinity;
  var max = -Infinity;
  for (var i = 0; i < A.length; i++) {
    if (min > A[i]) {
      min = A[i];
    }
    if (max < A[i]) {
      max = A[i];
    }
  }
  return max + min;
}
