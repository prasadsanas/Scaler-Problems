function equilibrium(A) {
  for (var i = 0; i < A.length; i++) {
    var leftSum = 0;
    var rightSum = 0;
    for (var j = 0; j <= i; j++) {
      leftSum += A[j];
    }
    for (var k = i; k < A.length; k++) {
      rightSum += A[k];
    }
    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
}

A = [1, 2, 3];

console.log(equilibrium(A));
