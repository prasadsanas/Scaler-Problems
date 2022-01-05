function countDuplicate(A) {
  var obj = {};
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (obj[A[i]]) {
      count++;
    } else {
      obj[A[i]] = true;
    }
  }
  return count;
}

A = [1, 10, 20, 1, 25, 1, 10, 30, 25, 1];
countDuplicate(A);
