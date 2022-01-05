function peak(A) {
  let n = A.length - 1;
  if (n == 0) {
    return A[0];
  }
  if (n == 1) {
    if (A[0] > A[1]) {
      return A[0];
    } else {
      return A[1];
    }
  }
  if (A[n] > A[n - 1]) {
    return A[n];
  }
  let l = 1;
  let r = n - 1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (A[mid - 1] < A[mid] && A[mid + 1] < A[mid]) {
      return A[mid];
    } else if (A[mid - 1] < A[mid]) {
      l = mid + 1;
      ans = A[mid];
    } else {
      r = mid - 1;
    }
  }
  return ans;
}

A = [1, 1000000000, 1000000000];
console.log(peak(A));
