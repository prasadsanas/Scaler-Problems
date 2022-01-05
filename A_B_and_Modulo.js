function modulo(A, B) {
  let m = A - B;
  while (m > 0) {
    if ((A - B) % m == 0) {
      return m;
    }
    m--;
  }
  if (m < 0) {
    return B - A;
  } else {
    return A - B;
  }
}

A = 8309642;
B = 5095206;
console.log(modulo(A, B));
