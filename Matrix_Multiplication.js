function multiply(A, B) {
  var output = [];
  for (var i = 0; i < A.length; i++) {
    output[i] = [];
    for (var j = 0; j < B[0].length; j++) {
      var value = 0;
      for (var k = 0; k < A[0].length; k++) {
        value += A[i][k] * B[k][j];
      }
      output[i][j] = value;
    }
  }
  return output;
}

A = [
  [1, 2],
  [3, 4],
];
B = [
  [5, 6],
  [7, 8],
];

console.log(multiply(A, B));
