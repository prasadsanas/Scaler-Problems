// function noble(A) {
//   for (var i = 0; i < A.length; i++) {
//     var count = 0;
//     for (var j = 0; j < A.length; j++) {
//       if (A[i] < A[j]) {
//         count++;
//       }
//     }
//     if (count == A[i]) {
//       return 1;
//     }
//   }
//   return -1;
// }

function noble(A) {
  A.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < A.length; i++) {
    length = A.length - i + 1;
    if (A[A.length - 1] == 0) {
      return 1;
    }
    if (A[i] == length && A[i + 1] > A[i]) {
      console.log(A[i]);
      return 1;
    }
  }
  return -1;
}

A = [-4, -2, 0, -1, -6];

console.log(noble(A));
