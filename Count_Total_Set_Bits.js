function solve(A) {
  let mod = 1000000007;
  let total_count = 0;
  for (let i = 1; i <= A; i++) {
    total_count += countSetBit(i);
  }
  return total_count % mod;
}

function countSetBit(x) {
  let count = 0;
  while (x) {
    count += x & 1;
    x >>= 1;
  }
  return count;
}

A = 1000000000;
console.log(solve(A));
