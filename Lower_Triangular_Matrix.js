function lowerMatrix(A) {
  var flag = true;
  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i][j] == 0) {
        flag = true;
      } else {
        return 0;
      }
    }
  }
  if (flag) {
    return 1;
  }
}

A = [
  [0, 2],
  [0, 0],
];
console.log(lowerMatrix(A));
