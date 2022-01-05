function consecutive(A) {
  // var temp;
  // for (var i = 0; i < A.length; i++) {
  //   for (var j = 0; j < A.length; j++) {
  //     if (A[i] < A[j]) {
  //       temp = A[i];
  //       A[i] = A[j];
  //       A[j] = temp;
  //     }
  //   }
  // }
  A.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] + 1 == A[i + 1]) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

A = [1, 3, 2, 5];
console.log(consecutive(A));
