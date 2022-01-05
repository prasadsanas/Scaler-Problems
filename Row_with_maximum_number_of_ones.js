function max(A) {
  let output_row = 0;
  let output_count = 0;
  for (var i = 0; i < A.length; i++) {
    var count = 0;
    for (var j = 0; j < A[i].length; j++) {
      if (A[i][j] == 1) {
        count++;
      }
    }
    if (count > output_count) {
      output_count = count;
      output_row = i;
    }
  }
  return output_row;
}

A = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
];
console.log(max(A));
