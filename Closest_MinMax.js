function closest(A) {
  let min = Infinity;
  let max = -Infinity;
  for (var i = 0; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }
    if (A[i] > max) {
      max = A[i];
    }
  }

  if (min == max) {
    return 1;
  }
  var ans = A.length;
  for (var i = 0; i < A.length; i++) {
    if (A[i] == min) {
      for (var j = i + 1; j < A.length; j++) {
        if (A[j] == max) {
          ans = Math.min(ans, j - i + 1);
        }
      }
    } else if (A[i] == max) {
      for (var j = i + 1; j < A.length; j++) {
        if (A[j] == min) {
          ans = Math.min(ans, j - i + 1);
        }
      }
    }
  }
  return ans;
}

A = [2];
console.log(closest(A));
