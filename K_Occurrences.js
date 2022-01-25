function solve(A, B, C) {
  let obj = {};
  for (let i = 0; i < A; i++) {
    obj[C[i]] = obj[C[i]] ? obj[C[i]] + 1 : 1;
  }
  let sum = 0;
  for (key in obj) {
    if (obj[key] == B) {
      sum += Number(key);
    }
  }
  return sum;
}

A = 5;
B = 2;
C = [1, 2, 2, 3, 3];
console.log(solve(A, B, C));
