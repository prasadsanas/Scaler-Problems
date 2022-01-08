function solve(A) {
  let count = 0;
  for (var i = 1; i <= A; i++) {
    let n = 0;
    while (n < 32) {
      if (i >> n % 2 == 1) {
        count++;
        console.log(i >> n, i, count);
      }
      n++;
    }
  }
  return count % 1000000007;
}

A = 3;
console.log(solve(A));
