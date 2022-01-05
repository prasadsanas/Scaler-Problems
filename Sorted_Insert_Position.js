function insert(A, B) {
  let index = -1;
  let l = 0;
  let r = A.length - 1;
  if (B == 0) {
    return 0;
  }
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] == B) {
      return mid;
    } else if (A[mid] < B) {
      index = mid + 1;
      console.log(mid);
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return index;
}

A = [1, 3, 5, 6];
B = 5;
console.log(A[148]);
console.log(insert(A, B));
