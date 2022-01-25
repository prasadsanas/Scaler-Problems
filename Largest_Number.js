function solve(A) {
  A = A.map(function (a) {
    return a.toString();
  });
  //   console.log(A);
  ans = A.sort(function (a, b) {
    return parseInt(b + a) - parseInt(a + b);
  }).join("");

  if (ans[0] == "0") {
    return "0";
  }
  return ans;
}
A = [3, 30, 34, 5, 9];
console.log(solve(A));
