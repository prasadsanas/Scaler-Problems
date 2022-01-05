function equality(A) {
  var max = -Infinity;
  var answer = 0;
  for (var i = 0; i < A.length; i++) {
    if (max < A[i]) {
      max = A[i];
    }
  }
  for (var i = 0; i < A.length; i++) {
    answer = answer + (max - A[i]);
  }
  return answer;
}

A = [2, 4, 1, 3, 2];

console.log(equality(A));
