function solve(A) {
  const res = new Array(A);
  for (let i = 0; i < A; i++) {
    res[i] = new Array(A);
  }

  let curr = 1;
  let top = (left = 0);
  let bottom = (right = A - 1);
  let dir = 0;
  while (top <= bottom && left <= right) {
    switch (dir) {
      case 0:
        for (let i = left; i <= right; i++) {
          res[top][i] = curr;
          curr++;
        }
        top++;
        break;
      case 1:
        for (let i = top; i <= bottom; i++) {
          res[i][right] = curr;
          curr++;
        }
        right--;
        break;
      case 2:
        for (let i = right; i >= left; i--) {
          res[bottom][i] = curr;
          curr++;
        }
        bottom--;
        break;
      case 3:
      default:
        for (let i = bottom; i >= top; i--) {
          res[i][left] = curr;
          curr++;
        }
        left++;
    }
    dir = (dir + 1) % 4;
  }

  return res;
}

A = 2;
console.log(solve(A));
