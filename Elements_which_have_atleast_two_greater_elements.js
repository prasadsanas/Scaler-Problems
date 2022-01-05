function Greater(A) {
  var max1 = -Infinity;
  var max2 = -Infinity;
  var output = [];
  for (var i = 0; i < A.length; i++) {
    if (max1 < A[i]) {
      max1 = A[i];
    }
  }
  for (var i = 0; i < A.length; i++) {
    if (A[i] < max1 && A[i] > max2) {
      max2 = A[i];
    }
  }

  for (var i = 0; i < A.length; i++) {
    if (A[i] < max1 && A[i] < max2) {
      output.push(A[i]);
    }
  }
  return output;
}

A = [11, 17, 100, 5];
console.log(Greater(A));
