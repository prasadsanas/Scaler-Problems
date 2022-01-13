function solve(A, B) {
  let count = 0;

  A.sort((a, b) => {
    return a - b;
  });
  let i = 0;
  let j = 1;
  while (j < A.length) {
    if (A[j] - A[i] == Math.abs(B)) {
      count++;
      i++;
      j++;
    } else if (A[j] - A[i] < Math.abs(B)) {
      j++;
    } else {
      i++;
      if (i == j) {
        j++;
      }
    }
  }
  return count;
}

A = [8, 12, 16, 4, 0, 20];
B = 4;
console.log(solve(A, B));
