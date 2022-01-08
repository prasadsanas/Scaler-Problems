function leftRoatation(A, B) {
  var output = [];
  for (var i = 0; i < B.length; i++) {
    let arr = A;
    for (var j = 0; j < B[i]; j++) {
      arr.push(arr.shift());
    }
    output.push(arr);
  }
  return output;
}

A = [1, 2, 3, 4, 5];
B = [2, 3];
console.log(leftRoatation(A, B));
