function solve(A) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let sum_arr = [];
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = 0; j < A[i].length; j++) {
      let index = alphabet.indexOf(A[i][j]) + 1;
      sum += index;
    }
    sum_arr.push(sum);
  }
  let obj = {};
  for (let i = 0; i < sum_arr.length; i++) {
    if (!obj[sum_arr[i]]) {
      obj[sum_arr[i]] = i + 1;
    } else {
      obj[sum_arr[i]] = i + 1;
    }
  }
  return obj;
}

A = ["cat", "dog", "god", "tca"];
console.log(solve(A));
