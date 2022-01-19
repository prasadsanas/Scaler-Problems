function solve(A, B) {
  A.sort((a, b) => {
    return a - b;
  });
  let prefix_sum = [];
  prefix_sum.push(A[0]);
  for (var i = 1; i < A.length; i++) {
    prefix_sum.push(prefix_sum[i - 1] + A[i]);
  }
  console.log(prefix_sum);

  let left = 0;
  let ans = -1;
  let right = A.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let j;
    for (j = mid; j < A.length; j++) {
      if (prefix_sum[j] - prefix_sum[j - mid] > B) {
        break;
      }
    }
    // console.log(j);
    if (j == A.length) {
      left = mid + 1;
      ans = mid;
      // console.log(mid);
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

A = [1, 2, 3, 4, 5];
B = 10;
console.log(solve(A));
