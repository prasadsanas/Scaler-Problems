function sum(A) {
  //   for (var i = 0; i < A.length; i++) {
  //     var left = i + 1;
  //     var right = A.length - i;
  //     total = left * right;
  //     ans += total * A[i];
  //   }
  var ans = 0;
  for (var i = 0; i < A.length; i++) {
    ans = ans + A[i];
    for (var j = i; j < A.length; j++) {
      ans = ans + A[j];
    }
  }
  return ans;
}

A = [2, 1, 3];

console.log(sum(A));
