function pattern(A) {
  var output = [];
  for (var j = 1; j <= A; j++) {
    var result = [];
    for (var k = 1; k <= j; k++) {
      result.push(k);
    }
    for (var l = j; l <= A - 1; l++) {
      result.push(0);
    }
    output.push(result);
  }
  return output;
}

console.log(pattern(4));
