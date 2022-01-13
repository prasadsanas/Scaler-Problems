function solve(A) {
  let i = 0;
  let j = A.length - 1;
  let max_water = 0;

  while (i < j) {
    let water = A[i] < A[j] ? (j - i) * A[i] : (j - i) * A[j];
    max_water = Math.max(max_water, water);
    if (A[i] < A[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max_water;
}

A = [1];
console.log(solve(A));
