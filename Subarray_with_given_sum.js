function SubarraySum(A, B) {
  for (var i = 0; i < A.length; i++) {
    let sum = A[i];
    for (var j = i + 1; j < A.length; j++) {
      if (sum == B) {
        return A.slice(i, j + 1);
      }
      if (sum > B) {
        break;
      }
      sum += A[j];
    }
  }
  return -1;
}

A = [5, 10, 20, 100, 105];
B = 110;

// A = [1, 2, 3, 4, 5];
// B = 5;
console.log(SubarraySum(A, B));
