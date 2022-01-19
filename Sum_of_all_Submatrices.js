function solve(A) {
  let sum = 0;
  let n = A.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let top_left = (i + 1) * (j + 1);
      let bottom_right = (n - i) * (n - j);
      //   console.log(top_left, bottom_right);
      sum += top_left * bottom_right * A[i][j];
    }
  }
  return sum;
}

A = [
  [8, 9, 9, 1, 7],
  [5, 5, 10, 1, 0],
  [7, 7, 5, 8, 6],
  [7, 3, 7, 9, 2],
  [7, 7, 8, 10, 6],
];

console.log(solve(A));
