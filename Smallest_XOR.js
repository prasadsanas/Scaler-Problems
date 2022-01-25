function solve(A, B) {
  let set_A = countSetBit(A);
  let set_B = countSetBit(B);
  console.log(set_A, set_B);
  // let n = 1;
  // while (n < A * B) {
  //   let m = A ^ n;
  //   if (B == countSetBit(m)) {
  //     return m;
  //   }
  //   n++;
  // }
}

function countSetBit(x) {
  let count = 0;
  while (x) {
    count += x & 1;
    x >>= 1;
  }
  return count;
}
A = 3;
B = 3;
console.log(solve(A, B));
