function sortColor(A) {
  A.sort((a, b) => {
    return a - b;
  });
  return A;
}

A = [0, 1, 2, 0, 1, 2];
console.log(sortColor(A));
