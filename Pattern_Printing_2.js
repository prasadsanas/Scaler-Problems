function pattern(A) {
  var output = [];
  for (var j = 1; j <= A; j++) {
    var result = [];
    for (var l = A; l > j; l--) {
      result.push(0);
    }
    for (var k = j; k > 0; k--) {
      result.push(k);
    }

    output.push(result);
  }
  return output;
}

console.log(pattern(4));
