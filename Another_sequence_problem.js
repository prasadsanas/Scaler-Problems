function sequence(A) {
  if (A == 0 || A == 1) {
    return 1;
  } else if (A == 2) {
    return 2;
  } else {
    return sequence(A - 1) + sequence(A - 2) + sequence(A - 3) + A;
  }
}

A = 3;
console.log(sequence(A));
