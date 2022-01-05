// function pair(A) {
//   var temp;
//   for (var i = 0; i < A.length / 2; i++) {
//     temp = A[i];
//     A[i] = A[A.length - 1 - i];
//     A[A.length - 1 - i] = temp;
//   }
//   return A;
// }

// A = [1, 2, 3, 4, 5, 6];
// // console.log(pair(A));

// for (var i = 0; i < A.length; i++) {
//   for (var j = i; j < A.length; j++) {
//     console.log(A[j]);
//   }
// }

function deleteString(A) {
  var count = 0;
  var max = A[0];
  for (var i = 1; i < A.length; i++) {
    if (A[i] > A[i + 1] || max > A[i + 1]) {
      count++;
      // console.log(A[i + 1]);
      max = A[i];
    }
  }
  console.log(count);
}

A = "vwzyx";
deleteString(A);
