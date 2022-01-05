function fibonacci(A) {
  if (A == 0) {
    return 0;
  } else if (A == 1) {
    return 1;
  } else {
    return fibonacci(A - 1) + fibonacci(A - 2);
  }
}

A = 9;
console.log(fibonacci(A));
