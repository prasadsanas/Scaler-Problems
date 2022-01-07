function power(A, B, C) {
  if (A == 0 || A == 1) {
    return A;
  } else if (B == 0) {
    return 1;
  }
  ans = power(A, B / 2, C);
  if (B % 2 == 0) {
    result = ((ans % C) * (ans % C)) % C;
  } else {
    result = (((((ans % C) * ans) % C) * A) % C) % C;
  }
  if (result < 0) {
    result += C;
  }
  return result;
}

A = 71045970;
B = 41535484;
C = 64735492;
console.log(power(A, B, C));
