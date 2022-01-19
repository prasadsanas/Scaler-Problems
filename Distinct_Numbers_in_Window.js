function Distinct(A, B) {
  var output = [];
  var obj = {};
  for (var i = 0; i < B; i++) {
    obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
  }
  output.push(Object.keys(obj).length);

  for (var i = B; i < A.length; i++) {
    obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
    obj[A[i - B]] = obj[A[i - B]] - 1;

    if (obj[A[i - B]] == "0") {
      delete obj[A[i - B]];
    }

    output.push(Object.keys(obj).length);
  }

  return output;
}

A = [1, 2, 1, 3, 4, 3];
B = 3;
console.log(Distinct(A, B));
