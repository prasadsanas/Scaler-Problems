function singleNumber(A) {
  let result = A[0];
  for (var i = 1; i < A.length; i++) {
    result = result ^ A[i];
  }
  return result;
}

var A = [1, 3, 1, 3, 2, 4, 4];
console.log(singleNumber(A));
