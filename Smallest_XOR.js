function solve(A, B) {
  return countSetBit(B);
}

function countSetBit(n) {
  let count = 0;
  while (n > 0) {
    count += (n >> 1) & 1;
    n = n >> 1;
  }
  return count;
}

A = 3;
B = 3;
console.log(solve(A, B));
