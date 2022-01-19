function solve(A, B) {
  let obj = {};
  for (let i = 0; i < B.length; i++) {
    obj[B[i]] = obj[B[i]] ? obj[B[i]] + 1 : 1;
  }
  for (key in obj) {
    if (obj[key] % A != 0) {
      return -1;
    }
  }
  return 1;
}

A = 2;
B = "bbaabb";
console.log(solve(A, B));
