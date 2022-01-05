function multiplication(A) {
  var output = [];
  if (A.length == 1) {
    return A;
  }
  for (var i = 0; i < A.length; i++) {
    if (i == 0) {
      output.push(A[0] * A[1]);
    } else if (i == A.length - 1) {
      output.push(A[A.length - 1] * A[A.length - 2]);
    } else {
      output.push(A[i - 1] * A[i + 1]);
    }
  }
  return output;
}
A = [1, 2, 3, 4, 5];
console.log(multiplication(A));
