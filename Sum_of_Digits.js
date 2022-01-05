function sumOfDigits(A) {
  if (A < 10) {
    return A;
  } else {
    return sumOfDigits(Math.floor(A / 10)) + (A % 10);
  }
}

A = 123;
console.log(sumOfDigits(A));
