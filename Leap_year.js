function leap(A) {
  if (A % 400 == 0) {
    return 1;
  } else if (A % 100 != 0) {
    if (A % 4 == 0) {
      return 1;
    }
    return 0;
  }
  return 0;
}

A = 1999;
console.log(leap(A));
