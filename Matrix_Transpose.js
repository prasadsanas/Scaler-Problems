function Transpose(A) {
  var output = [];
  var m = A[0].length;
  var n = A.length;
  for (var i = 0; i < m; i++) {
    var arr = [];
    for (var j = 0; j < n; j++) {
      arr.push(A[j][i]);
    }
    output.push(arr);
  }
  return output;
}

A = [
  [1, 2],
  [1, 2],
  [1, 2],
];
console.log(Transpose(A));
