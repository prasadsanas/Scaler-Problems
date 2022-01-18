function solve(A, B) {
  let x_obj = {};
  let y_obj = {};
  for (let i = 0; i < A.length; i++) {
    x_obj[A[i]] = x_obj[A[i]] ? x_obj[A[i]] + 1 : 1;
  }
  //   console.log(x_obj);
  for (let j = 0; j < B.length; j++) {
    y_obj[B[j]] = y_obj[B[j]] ? y_obj[B[j]] + 1 : 1;
  }
  //   console.log(y_obj);
  let count = 0;
  for (let k = 0; k < A.length; k++) {
    count += (x_obj[A[k]] - 1) * (y_obj[B[k]] - 1);
  }
  return count % (Math.pow(10, 9) + 7);
}

A = [1, 1, 2, 3, 3];
B = [1, 2, 1, 2, 1];
console.log(solve(A, B));
