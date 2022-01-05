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

A = 16777214;
console.log(solve(A));

// const maxn = 2e7 + 10;

// let done = false;

// let prime = new Array(maxn).fill(1);

// module.exports = {
//   primesum: function (A) {
//     if (!done) {
//       for (let i = 2; i < maxn; i++) {
//         if (!prime[i]) continue;

//         for (let j = i * i; j < maxn; j += i) {
//           prime[j] = 0;
//         }
//       }

//       done = true;
//     }

//     for (let i = 2; i <= A; i++) {
//       if (prime[i] && prime[A - i]) {
//         return [i, A - i];
//       }
//     }
//   },
// };
