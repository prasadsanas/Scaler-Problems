function solve(A, B) {
  var obj = {};
  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]] = obj[A[i]] + 1;
    }
  }
  let count = 0;
  let ans = 0;
  for (let k = 0; k < A.length; k++) {
    if (obj[B - A[k]]) {
      ans = ans + obj[A[k]] * obj[B - A[k]];
      console.log(ans, obj[A[k]], obj[B - A[k]]);
    }
  }
  return Math.floor(ans / 2);
}

A = [1, 2, 6, 6, 7, 9, 9];
B = 13;
console.log(solve(A, B));
