function solve(A) {
  let arr = [];
  tower(A, 1, 2, 3, arr);
  return arr;
}

function tower(A, src, temp, dest, output) {
  if (A == 0) {
    return;
  }
  tower(A - 1, src, dest, temp, output);
  output.push([A, src, dest]);
  tower(A - 1, temp, src, dest, output);
}

A = 3;
console.log(solve(A));
