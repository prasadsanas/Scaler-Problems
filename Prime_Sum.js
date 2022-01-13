function solve(A) {
  var obj = {};
  let output = [];
  let x = 2;
  while (x <= A) {
    let count = 0;
    for (var i = 1; i * i <= x; i++) {
      if (x % i == 0) {
        count++;
        if (i != x / i) {
          count++;
        }
        if (count > 2) {
          break;
        }
      }
    }
    if (count == 2) {
      if (!obj[x]) {
        obj[x] = 1;
      }
    }
    x++;
  }
  for (key in obj) {
    let m = A - key;
    if (obj[m]) {
      output.push(A - m);
      output.push(m);
      return output;
    }
  }
}

A = 10;
console.log(solve(A));
