function solve(A, B, C) {
  let l = 0;
  let r = Math.max(B, C) * A;
  let ans = 0;
  while (l <= r) {
    mid = Math.floor((r + l) / 2);
    if (mid == A) {
      ans = mid;
      l = mid - 1;
    } else if (mid < A) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}

// A = 807414236;
// B = 3788;
// C = 38141;
// 238134151

A = 1;
B = 2;
C = 3;

console.log(solve(A, B, C));
