function leftRoatation(A, B) {
  var output = [];
  for (var i = 0; i < B.length; i++) {
    let arr = [];
    if (B[i] > A.length) {
      B[i] = B[i] % A.length;
    }
    for (var j = B[i]; j < A.length; j++) {
      arr.push(A[j]);
    }
    for (var k = 0; k < B[i]; k++) {
      arr.push(A[k]);
    }
    output.push(arr);
  }
  return output;
}

A = [
  4, 74, 35, 16, 100, 77, 50, 51, 31, 29, 67, 12, 43, 31, 83, 2, 85, 85, 39, 27,
  64, 86, 5,
];
B = [
  73, 70, 47, 19, 46, 25, 46, 4, 33, 33, 6, 31, 23, 19, 44, 53, 69, 30, 69, 89,
  59, 25, 38, 82, 26, 8, 36, 3,
];

console.log(leftRoatation(A, B));
