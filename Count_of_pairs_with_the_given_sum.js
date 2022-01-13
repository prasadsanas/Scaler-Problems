function solve(A, B) {
  let count = 0;
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    if (A[i] + A[j] == B) {
      count++;
      i++;
      j--;
    } else if (A[i] + A[j] > B) {
      j--;
    } else {
      i++;
    }
  }
  return count;
}

A = [5, 10, 20, 100, 105];
B = 110;
console.log(solve(A, B));
