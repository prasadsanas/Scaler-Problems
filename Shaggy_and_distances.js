function distance(A) {
  var obj = {};
  var min_distance = A.length;
  for (var i = 0; i < A.length; i++) {
    if (!obj[A[i]] && obj[A[i]] !== 0) {
      obj[A[i]] = i;
    } else {
      obj[A[i]] = i - obj[A[i]];
      min_distance = Math.min(min_distance, obj[A[i]]);
    }
  }
  if (min_distance == A.length) {
    return -1;
  }
  return min_distance;
}

console.log(distance(A));
