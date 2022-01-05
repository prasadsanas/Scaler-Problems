function solve(A) {
  var even_sum = 0;
  var odd_sum = 0;
  for (var i = 0; i < A.length; i++) {
    if (i % 2 == 0) {
      even_sum += A[i];
    } else {
      odd_sum += A[i];
    }
  }
  console.log(even_sum, odd_sum);
}
A = [2, 1, 6, 4];
console.log(solve(A));
