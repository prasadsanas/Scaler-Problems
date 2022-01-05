function factorial(A) {
  if (A == 0 || A == 1) {
    return 1;
  } else {
    return A * factorial(A - 1);
  }
}

A = 5;
console.log(factorial(A));
