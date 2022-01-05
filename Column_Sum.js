function ColumnSum(A) {
  var output = [];
  for (var j = 0; j < A[0].length; j++) {
    var sum = 0;
    for (var i = 0; i < A.length; i++) {
      sum += A[i][j];
    }
    output.push(sum);
  }
  return output;
}

A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 2, 3, 4],
];

console.log(ColumnSum(A));
