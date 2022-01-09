function solve(A, B) {
  let output = [];
  let obj = {};
  for (var i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]] += 1;
    }
  }
  for (var j = 0; j < B.length; j++) {
    if (obj[B[j]]) {
      output.push(B[j]);
      obj[B[j]] = obj[B[j]] - 1;
    }
  }
  return output;
}
A = [2, 1, 4, 10];
B = [3, 6, 2, 10, 10];
console.log(solve(A, B));
