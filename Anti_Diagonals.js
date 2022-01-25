function solve(A) {
  var n = A.length;
  var result = [];
  // in N-size matrix there are N * 2 - 1 diagonals
  for (var i = 0; i < n * 2 - 1; i++) {
    var diagonal = [];
    var row = i < n ? 0 : i - (n - 1);
    var col = i < n ? i : n - 1;
    diagonal.push(A[row][col]);
    // go down and left untill we hit the boundaries
    while (row + 1 < n && col - 1 >= 0) {
      diagonal.push(A[++row][--col]);
    }
    result.push(diagonal);
  }
  for (let k = 0; k < result.length; k++) {
    while (result[k].length < A.length) {
      result[k].push(0);
    }
  }
  return result;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(solve(A));
