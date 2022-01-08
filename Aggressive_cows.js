function solve(A, B) {
  A.sort((a, b) => {
    return a - b;
  });
  let l = A[0];
  let r = A[A.length - 1] - A[0];
  let ans = 0;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (check(mid, B, A, r)) {
      ans = mid;
      l = mid + 1;
    } else {
      console.log(l, r, "hello");
      r = mid - 1;
    }
  }
  return ans;
}
function check(mid, B, A) {
  let count = 1;
  for (var i = 1; i < A.length; i++) {
    let last_index = A[0];
    if (A[i] - last_index >= mid) {
      count++;
      last_index = A[i];
      if (count == B) {
        return true;
      }
    }
  }
  return false;
}

A = [
  82, 61, 38, 88, 12, 7, 6, 12, 48, 8, 31, 90, 35, 5, 88, 2, 66, 19, 5, 96, 84,
  95,
];
B = 8;
console.log(solve(A, B));
