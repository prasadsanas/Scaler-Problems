function solve(A) {
  let prefix_gcd = [];
  let suffix_gcd = [];

  //prefix gcd
  prefix_gcd[1] = A[0];
  for (let i = 2; i <= A.length; i++) {
    prefix_gcd[i] = GCD(prefix_gcd[i - 1], A[i]);
  }
  //   console.log(prefix_gcd);

  //suffix gcd
  suffix_gcd[A.length] = A[A.length - 1];
  for (let i = A.length - 1; i >= 1; i--) {
    suffix_gcd[i] = GCD(suffix_gcd[i + 1], A[i]);
  }
  //   console.log(suffix_gcd);

  // delete one
  let ans = Math.max(suffix_gcd[1], prefix_gcd[A.length - 1]);
  for (let i = 2; i <= A.length - 1; i++) {
    ans = Math.max(ans, GCD(prefix_gcd[i - 1], suffix_gcd[i + 1]));
  }
  return ans;
}

function GCD(A, B) {
  if (B > A) {
    let temp = A;
    A = B;
    B = temp;
  }
  while (A > 0) {
    let temp = A;
    A = B % A;
    B = temp;
  }
  return B;
}
A = [21, 7, 3, 42, 63];
console.log(solve(A));
