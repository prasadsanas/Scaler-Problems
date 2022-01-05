function identity(A) {
  var flag = true;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (i != j) {
        if (A[i][j] == 0) {
          flag = true;
        } else {
          return 0;
        }
      }
      if (i == j && A[i][j] == 1) {
        flag = true;
      }
    }
  }
  if (flag) {
    return 1;
  }
}

A = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
];
console.log(identity(A));
