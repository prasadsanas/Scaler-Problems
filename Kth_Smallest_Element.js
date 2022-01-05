function solve(A, B) {
  var temp;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (A[i] < A[j]) {
        temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
    }
    if (i == B - 1) {
      return A[i];
    }
  }
}

A = [1, 2];
B = 2;
console.log(solve(A, B));
