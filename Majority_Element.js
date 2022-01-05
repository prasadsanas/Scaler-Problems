function majority(A) {
  for (var i = 0; i < A.length; i++) {
    var count = 0;
    for (var j = 0; j < A.length; j++) {
      if (A[j] == A[i]) {
        count++;
      }
    }
    if (count > Math.floor(A.length / 2)) {
      return A[i];
    }
  }
}

A = [1, 1, 2];
console.log(majority(A));
