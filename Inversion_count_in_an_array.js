// function solve(A) {
//   let count = 0;
//   let mod = 1000000007;
//   for (let i = 0; i < A.length - 1; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] > A[j]) {
//         count++;
//       }
//     }
//   }
//   return count % mod;
// }

A = [6, 12, 10, 17, 10, 22, 9, 19, 21, 31, 26, 8];
console.log(solve(A));
