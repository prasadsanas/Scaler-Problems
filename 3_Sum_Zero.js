function solve(A) {
  let result_arr = [];
  for (let i = 0; i < A.length - 2; i++) {
    let j = i + 1;
    let k = A.length - 1;
    let output = [];
    while (j < k) {
      if (A[i] + A[j] + A[k] == 0 && A[i] < A[j] < A[k]) {
        output.push(A[i], A[j], A[k]);
        i++;
        k--;
      } else if (A[i] + A[j] + A[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
    if (output.length == 3) {
      result_arr.push(output);
    }
  }
  return result_arr;
}

A = [-1, 0, 1, 2, -1, 4];
console.log(solve(A));
