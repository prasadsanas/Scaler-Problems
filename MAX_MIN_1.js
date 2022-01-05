function minMax(A, B) {
  A.sort(function (a, b) {
    return a - b;
  });
  return A[A.length - B] - A[B - 1];
}

A = [5, 17, 100, 11];
B = 1;
console.log(minMax(A, B));
