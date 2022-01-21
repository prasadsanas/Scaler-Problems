function solve(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
  }
  let count = 0;
  for (keys in obj) {
    if (obj[keys] % 2 != 0) {
      count++;
      if (count > 1) {
        return 0;
      }
    }
  }
  return 1;
}

A = "abbaee";
console.log(solve(A));
