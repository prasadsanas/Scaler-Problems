function search(A, B) {
  let output = [];

  // for 1st occurrence
  let l = 0;
  let r = A.length - 1;
  let ans = -1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (A[mid] < B) {
      l = mid + 1;
    } else if (A[mid] > B) {
      r = mid - 1;
    } else {
      ans = mid;
      r = mid - 1;
    }
  }
  output.push(ans);

  // for last occurrence
  l = 0;
  r = A.length - 1;
  ans = -1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (A[mid] < B) {
      l = mid + 1;
    } else if (A[mid] > B) {
      r = mid - 1;
    } else {
      ans = mid;
      l = mid + 1;
    }
  }
  output.push(ans);
  return output;
}

A = [5, 7, 7, 8, 8, 10];
B = 8;
console.log(search(A, B));
