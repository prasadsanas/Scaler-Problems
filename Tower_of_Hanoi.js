function solve(A) {
  tower(A, 1, 2, 3);
}

function tower(A, src, temp, dest) {
  let row = [];
  if (A == 0) {
    return;
  }
  tower(A - 1, src, dest, temp);
  row.push(A, src, dest);
  console.log(row);
  tower(A - 1, temp, src, dest);
}

A = 4;
solve(A);
