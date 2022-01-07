function solve(A, B) {
  let arr = [];
  arr.push(A[0]);
  for (var i = 1; i < A.length; i++) {
    arr.push(arr[i - 1] + A[i]);
  }
}

A = [1, 2, 3, 4, 5];
B = 10;
console.log(solve(A));
