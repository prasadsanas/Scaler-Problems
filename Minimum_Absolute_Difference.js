function difference(A) {
  //   var min = Infinity;
  //   var diff;
  //   for (var i = 0; i < A.length; i++) {
  //     for (var j = 0; j < A.length; j++) {
  //       if (i != j) {
  //         if (A[i] > A[j]) {
  //           diff = A[i] - A[j];
  //         } else {
  //           diff = A[j] - A[i];
  //         }
  //       }
  //       if (diff < min) {
  //         min = diff;
  //       }
  //     }
  //   }
  //   return min;

  A.sort((a, b) => {
    return a - b;
  });
  var min = Infinity;
  for (var i = 0; i < A.length; i++) {
    if (A[i + 1] - A[i] < min) {
      min = A[i + 1] - A[i];
    }
  }
  return min;
}

A = [5, 17, 100, 11];
console.log(difference(A));
