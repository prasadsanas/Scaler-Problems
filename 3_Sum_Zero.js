// function solve(A) {
//   let result_arr = [];
//   for (let i = 0; i < A.length - 2; i++) {
//     let j = i + 1;
//     let k = A.length - 1;
//     let output = [];
//     while (j < k) {
//       if (A[i] + A[j] + A[k] == 0 && A[i] < A[j] < A[k]) {
//         output.push(A[i], A[j], A[k]);
//         i++;
//         k--;
//       } else if (A[i] + A[j] + A[k] < 0) {
//         j++;
//       } else {
//         k--;
//       }
//     }
//     if (output.length == 3) {
//       result_arr.push(output);
//     }
//   }
//   return result_arr;
// }

// A = [-1, 0, 1, 2, -1, 4];
// console.log(solve(A));

// Copy
module.exports = {
  //param A : array of integers
  //return a array of array of integers
  threeSum: function (A) {
    if (A.length === 3) {
      if (A[0] + A[1] + A[2] === 0) {
        return A;
      } else {
        return [];
      }
    }
    A.sort(function (a, b) {
      return a - b;
    });
    var result = [];
    for (var i = 0; i < A.length - 2; i++) {
      var ptr1 = i + 1;
      var ptr2 = A.length - 1;
      if (A[i] > 0) {
        break;
      }

      while (ptr1 < ptr2) {
        if (A[i] + A[ptr1] + A[ptr2] === 0) {
          var tempSolution = [A[i], A[ptr1], A[ptr2]];
          // console.log(tempSolution);
          // console.log(result);
          if (
            result.every(function (element) {
              // console.log(element[0]!=tempSolution[0] || element[1]!=tempSolution[1] || element[2]!=tempSolution[2]);
              return (
                element[0] != tempSolution[0] ||
                element[1] != tempSolution[1] ||
                element[2] != tempSolution[2]
              );
            }) === true ||
            result.length === 0
          ) {
            result.push([A[i], A[ptr1], A[ptr2]]);
          }
          ptr1++;
          ptr2--;
        } else if (A[i] + A[ptr1] + A[ptr2] < 0) {
          ptr1++;
        } else {
          ptr2--;
        }
      }
    }
    return result;
  },
};
