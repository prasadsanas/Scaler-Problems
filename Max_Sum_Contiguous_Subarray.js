// Brute Force Approach
// function max(A) {
//   var max = -Infinity;
//   for (var i = 0; i < A.length; i++) {
//     var sum = 0;
//     for (var j = i; j < A.length; j++) {
//       sum = sum + A[j];
//       if (max < sum) {
//         max = sum;
//       }
//     }
//   }
//   return max;
// }

// Kadanes's Algorithm
function max(A) {
  var max = -Infinity;
  var sum = 0;
  for (var i = 0; i < A.length; i++) {
    sum = sum + A[i];
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

// A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
A = [1, 2, 3, 4, -10];
console.log(max(A));
