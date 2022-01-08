function power(A, B, C) {
  if (B == 0) {
    return 1 % C;
  }
  if (B == 1) {
    return ((A % C) + C) % C;
  }
  var ans = BigInt(power(A, B / 2, C));
  if (B % 2 == 0) {
    var result = BigInt((ans * ans) % C);
    return result;
  } else {
    var result = BigInt((((ans * ans) % C) * A) % C);
    return result;
  }
}

A = 71045970;
B = 41535484;
C = 64735492;
console.log(power(A, B, C));
