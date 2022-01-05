function Add(A, B) {
  var output = [];
  for (var i = 0; i < A.length; i++) {
    var arr = [];
    for (var j = 0; j < B[i].length; j++) {
      arr.push(A[i][j] + B[i][j]);
    }
    output.push(arr);
  }
  return output;
}

A = [[6], [2], [3], [10], [1], [3]];
B = [[6], [7], [3], [8], [1], [2]];
console.log(Add(A, B));
