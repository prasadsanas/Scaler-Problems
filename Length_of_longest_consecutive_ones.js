// function longest(Arr) {
// let left_Arr = [];
// let Right_Arr = [];
// let count = 0;
// var A = Arr.trim().split("").map(Number);
// if (A.length <= 2) {
//   if ((A[0] == 0 && A[1] == 1) || (A[1] == 0 && A[0] == 1)) {
//     return 1;
//   }
// }
// for (var i = 0; i < A.length; i++) {
//   if (A[i] == 1) {
//     count++;
//     left_Arr.push(count);
//   } else {
//     count = 0;
//     left_Arr.push(count);
//   }
// }
// count = 0;
// for (var i = A.length - 1; i >= 0; i--) {
//   if (A[i] == 1) {
//     count++;
//     Right_Arr.push(count);
//   } else {
//     count = 0;
//     Right_Arr.push(count);
//   }
// }
// for (var i = 0; i < Right_Arr.length / 2; i++) {
//   var temp = Right_Arr[i];
//   Right_Arr[i] = Right_Arr[Right_Arr.length - 1 - i];
//   Right_Arr[Right_Arr.length - 1 - i] = temp;
// }
// // console.log(left_Arr);
// // console.log(Right_Arr);
// var max_length = 0;
// for (var i = 1; i < A.length - 1; i++) {
//   if (A[i] == 0) {
//     if (left_Arr[i - 1] == 0) {
//       max_length = Math.max(max_length, Right_Arr[i + 1] + 1);
//     } else if (Right_Arr[i + 1] == 0) {
//       max_length = Math.max(max_length, left_Arr[i - 1] + 1);
//     } else {
//       max_length = Math.max(
//         max_length,
//         left_Arr[i - 1] + Right_Arr[i + 1] + 1
//       );
//     }
//   }
// }
// return max_length;
// }

function longest(A) {
  var cnt_one = 0;

  var max_cnt = 0,
    temp = 0;

  for (var i = 0; i < n; i++) {
    if (s[i] == "1") {
      cnt_one++;
      temp++;
    } else {
      max_cnt = Math.max(temp, max_cnt);
      temp = 0;
    }
  }

  max_cnt = Math.max(max_cnt, temp);

  // To store cumulative 1's
  var left = Array(n);
  var right = Array(n);

  if (s[0] == "1") left[0] = 1;
  else left[0] = 0;

  if (s[n - 1] == "1") right[n - 1] = 1;
  else right[n - 1] = 0;

  // Counting cumulative 1's from left
  for (var i = 1; i < n; i++) {
    if (s[i] == "1") left[i] = left[i - 1] + 1;
    // If 0 then start new cumulative
    // one from that i
    else left[i] = 0;
  }

  for (var i = n - 2; i >= 0; i--) {
    if (s[i] == "1") right[i] = right[i + 1] + 1;
    else right[i] = 0;
  }

  for (var i = 1; i < n - 1; i++) {
    // perform step 3 of the approach
    if (s[i] == "0") {
      // step 3
      var sum = left[i - 1] + right[i + 1];

      if (sum < cnt_one) max_cnt = Math.max(max_cnt, sum + 1);
      else max_cnt = Math.max(max_cnt, sum);
    }
  }

  return max_cnt;
}

A = "111000";
console.log(longest(A));
