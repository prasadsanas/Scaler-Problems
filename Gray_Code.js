function grayCode(A) {
  var result = [0];
  for (var i = 0; i < A; i++) {
    for (var j = result.length - 1; j >= 0; j--) {
      result.push(result[j] | (1 << i));
    }
  }
  return result;
}

A = 2;
console.log(grayCode(A));
