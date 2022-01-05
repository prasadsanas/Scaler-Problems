function magic(A) {
  if (A == 1) {
    return 5;
  } else if (A % 2 == 0) {
    return Math.pow(5, A);
  } else {
    return Math.pow(5, A - 1) + 5;
  }
}

A = 4;
console.log(magic(A));
