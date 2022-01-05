function leftRoatation(A, B) {
  var output = [];
  let arr = A;
  for (var i = 0; i < B.length; i++) {
    for (var j = 0; j < B[i]; j++) {
      arr.push(arr.shift());
    }
  }
  return output;
}

A = [1, 2, 3, 4, 5];
B = [2, 3];
console.log(leftRoatation(A, B));
