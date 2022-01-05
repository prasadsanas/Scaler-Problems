function difference(A) {
  var output = [];
  for (var i = 0; i < A.length - 1; i++) {
    output.push(A[i + 1] - A[i]);
  }
  return output;
}
A = [2];
console.log(difference(A));
