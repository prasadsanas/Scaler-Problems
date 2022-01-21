function solve(A) {
  let str = A.toString();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let product = 1;
    for (let j = i; j < str.length; j++) {
      let num = str[j];
      product *= num;
      if (!obj[product]) {
        obj[product] = 1;
      } else {
        return 0;
      }
    }
  }
  return 1;
}

A = 23;
console.log(solve(A));
