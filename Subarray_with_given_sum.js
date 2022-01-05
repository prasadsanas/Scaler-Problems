function SubarraySum(A, B) {
  var i = 0;
  var j = 0;
  var sum = 0;
  while (i < A.length && j < A.length) {
    if (sum == B) {
      return A.slice(i, j);
    } else if (sum < B) {
      sum = sum + A[j];
      j++;
    } else {
      sum = sum - A[i];
      i++;
    }
  }
  if (A[A.length - 1] == B) {
    return [B];
  }
  return -1;
  //   2nd Approach -------------
  //   for (var i = 0; i < A.length; i++) {
  //     var sum = 0;
  //     var output = [];
  //     for (var j = i; j < A.length; j++) {
  //       sum = sum + A[j];
  //       output.push(A[j]);
  //       if (sum == B) {
  //         return output;
  //       }
  //     }
  //   }
  //   return -1;
}

A = [5, 10, 20, 100, 105];
B = 110;

console.log(SubarraySum(A, B));
