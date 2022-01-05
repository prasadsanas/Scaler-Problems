function solve(A) {
  let output = [];
  for (var i = 0; i < A.length; i++) {
    let row = [];
    for (var j = 0; j < A[i].length; j++) {
      if (A[i][j] % 2 == 0) {
        row.push(A[i][j]);
      }
    }
    output.push(row);
  }
  return output;
}

A = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [13, 15, 17, 19],
];

console.log(solve(A));
