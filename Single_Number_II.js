function solve(A) {
  let n = 0;
  let ans = 0;
  while (n < 32) {
    let count = 0;
    for (var i = 0; i < A.length; i++) {
      let x = A[i] >> n;
      if (x % 2 == 1) {
        count++;
      }
    }
    ans += (count % 3) * Math.pow(2, n);
    n++;
  }
  return ans;
}

A = [0, 0, 0, 1];
console.log(solve(A));
