function SubarraySum(A, B) {
  let prefix_sum = [];
  prefix_sum.push(A[0]);
  for (var i = 1; i < A.length; i++) {
    prefix_sum.push(A[i] + prefix_sum[i - 1]);
  }
  console.log(prefix_sum);
  let l = 0;
  let r = 1;
  while (r < prefix_sum.length) {
    if (prefix_sum[l] == Math.abs(B)) {
      count++;
    }
    if (prefix_sum[r] - prefix_sum[l - 1] == Math.abs(B)) {
      count++;
      l++;
      r++;
    } else if (A[r] - A[l - 1] < Math.abs(B)) {
      r++;
    } else {
      l++;
      if (l == r) {
        r++;
      }
    }
  }
  return -1;
}

A = [5, 10, 20, 100, 105];
B = 110;

// A = [1, 2, 3, 4, 5];
// B = 5;
console.log(SubarraySum(A, B));
