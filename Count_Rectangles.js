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
  for (let i = 0; i < A.length; i++) {
    let x1 = A[i];
    let y1 = B[i];
    for (let j = 0; j < A.length; j++) {
      let x2 = A[j];
      let y2 = B[j];
    }
  }
  return count;
}

A = [1, 1, 2, 2];
B = [1, 2, 1, 2];
console.log(solve(A, B));
