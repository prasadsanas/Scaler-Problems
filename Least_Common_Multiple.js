function lcm(A, B) {
  var ans = A * B;
  for (var i = 1; i <= B; i++) {
    ans = A * i;
    if (ans % B == 0) {
      return ans;
    }
  }
}

A = 2;
B = 6;
console.log(lcm(A, B));
