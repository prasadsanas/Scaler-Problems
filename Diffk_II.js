function solve(A, k) {
  let i = 0;
  let j = A.length - 1;
  while (i < A.length || j >= 0) {
    if (i != j && A[i] - A[j] == k) {
      return 1;
    }
    i++;
    j--;
  }
  return 0;
}

A = [1, 5, 4, 1, 2];
B = 0;
console.log(solve(A, B));
