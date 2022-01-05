function solve(A) {
  let output = [];
  for (var i = 0; i < A.length; i++) {
    let count = 0;
    for (j = 1; j * j <= A[i]; j++) {
      if (A[i] % j == 0) {
        if (A[i] / j == j) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    output.push(count);
  }
  return output;
}

A = [2, 3, 4, 5];
console.log(solve(A));
