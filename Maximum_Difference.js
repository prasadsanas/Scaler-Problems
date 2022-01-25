function maxDiff(A, B) {
  A.sort((a, b) => {
    return a - b;
  });

  // Total Sum
  let total_sum = 0;
  for (let i = 0; i < A.length; i++) {
    total_sum += A[i];
  }

  // Max subset Sum
  let S2 = 0;
  for (let i = A.length - B; i < A.length; i++) {
    S2 += A[i];
  }

  // Min Subset SUm
  let S1 = 0;
  for (let i = 0; i < A.length - B; i++) {
    S1 += A[i];
  }
  console.log(total_sum, S2, S1);

  return Math.max(Math.abs(total_sum - S1), Math.abs(S2 - S1));
}

A = [5, 17, 100, 11];
B = 3;
console.log(maxDiff(A, B));
