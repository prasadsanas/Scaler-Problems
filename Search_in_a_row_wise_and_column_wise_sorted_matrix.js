function search(A, B) {
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
      if (A[i][j] == B) {
        return (i + 1) * 1009 + (j + 1);
      }
    }
  }
  return -1;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = 2;

console.log(search(A, B));
