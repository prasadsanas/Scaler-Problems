function SmallAndGreat(A) {
  var min = A[0];
  var max = A[0];
  for (var i = 1; i < A.length; i++) {
    if (min > A[i]) {
      min = A[i];
    }
    if (max < A[i]) {
      max = A[i];
    }
  }
  //   console.log(min);
  //   console.log(max);
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > min && A[i] < max) {
      count++;
    }
  }
  return count;
}

A = [
  913, 440, 865, 72, 612, 445, 101, 994, 356, 91, 461, 930, 583, 448, 543, 170,
  333, 107, 425, 73, 172, 416, 899, 826, 659, 561, 314, 25, 110,
];

console.log(SmallAndGreat(A));
