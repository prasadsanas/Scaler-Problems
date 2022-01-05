function maxDiff(A, B) {
  let total_sum = 0;
  for (var i = 0; i < A.length; i++) {
    total_sum += A[i];
  }
  let s1 = 0;
  for (var i = 0; i < B; i++) {
    s1 += A[i];
  }
  for (var i = B; i < A.length; i++) {}
  return total_sum;
}

A = [1, 2, 3, 4, 5];
B = 2;
console.log(maxDiff(A, B));
