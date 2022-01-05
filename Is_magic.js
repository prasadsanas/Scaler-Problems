function magic(A) {
  if (A % 9 == 1) {
    return 1;
  } else {
    return 0;
  }
}

A = 1291;
console.log(magic(A));
