function solve(A, B) {
  if (B == 0) {
    return 0;
  }
  if (B < Math.pow(2, A - 2)) {
    return solve(A - 1, B);
  } else {
    return 1 - solve(A - 1, B - Math.pow(2, A - 2));
  }
}

A = 5;
B = 5;
console.log(solve(A, B));

0;
01;
0110;
01101001;
0110100110010110;
