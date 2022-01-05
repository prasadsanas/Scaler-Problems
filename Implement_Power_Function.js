function power(A, B, C) {
  if (A == 0) {
    return 0;
  } else if (B == 0) {
    return 1;
  }

  var ans = 0;
  ans = power(A, B / 2, C) % C;
  if (B % 2 == 0) {
    return ((ans % C) * (ans % C)) % C;
  } else {
    return (((ans % C) * (ans % C) * A) % C) % C;
  }
}

A = -1;
B = 1;
C = 20;
console.log(power(A, B, C));
