function first_Repeat(A) {
  var obj = {};
  for (var i = 0; i < A.length; i++) {
    // var count = 1;
    // if (!obj[A[i]]) {
    //   obj[A[i]] = count;
    // } else {
    //   count++;
    //   obj[A[i]] = count;
    // }

    obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
  }
  for (var i = 0; i < A.length; i++) {
    if (obj[A[i]] > 1) {
      return A[i];
    }
  }
  return -1;
}

A = [10, 5, 3, 4, 3, 5, 6];
console.log(first_Repeat(A));
