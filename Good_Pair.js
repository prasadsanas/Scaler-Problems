function goodPair(A, B) {
  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] + A[j] == B) {
        return 1;
      }
    }
  }
  return 0;
}

A = [1, 2, 3, 4];
B = 7;
console.log(goodPair(A, B));
