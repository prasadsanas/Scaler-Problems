function solve(A) {
  let l = 0;
  let r = A;
  let ans = 0;
  while (l <= r) {
    mid = Math.floor((r + l) / 2);
    if (mid * mid == A) {
      return mid;
    } else if (mid * mid < A) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}

A = 9;
console.log(solve(A));
