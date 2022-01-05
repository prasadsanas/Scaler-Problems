function leaders(A) {
  var max = -Infinity;
  var output = [];
  for (var i = A.length - 1; i >= 0; i--) {
    if (max < A[i]) {
      max = A[i];
      output.push(max);
    }
  }
  return output;
}

A = [1, 2];
console.log(leaders(A));
