function solve(A) {
  A.sort((a, b) => {
    return a - b;
  });
  var MOD = 1000000007;
  var min_sum = 0;
  var max_sum = 0;
  for (let i = 0; i < A.length; i++) {
    max_sum = 2 * max_sum + A[A.length - 1 - i];
    max_sum %= MOD;
    min_sum = 2 * min_sum + A[i];
    min_sum %= MOD;
  }
  return (max_sum - min_sum + MOD) % MOD;
}
A = [5, 4, 2];
console.log(solve(A));
