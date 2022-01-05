function repeat(A) {
  var output = [];
  var obj = {};
  var sum = 0;
  for (var i = 0; i < A.length; i++) {
    sum += A[i];
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]] = obj[A[i]] + 1;
      output.push(A[i]);
    }
  }
  var total = (A.length * (A.length + 1)) / 2;
  output.push(total - (sum - output[0]));
  return output;
}

A = [3, 1, 2, 5, 3];
console.log(repeat(A));
