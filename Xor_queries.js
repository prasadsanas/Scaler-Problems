function xor(A, B) {
  var output = [];
  for (var i = 0; i < B.length; i++) {
    let sub_out = [];
    let L = B[i][0] - 1;
    let R = B[i][1] - 1;
    var ans = A[L];
    if (A[L] == 0) {
      var unset_bit = 1;
    } else {
      var unset_bit = 0;
    }
    for (var j = L + 1; j <= R; j++) {
      ans = ans ^ A[j];
      if (A[j] == 0) {
        unset_bit++;
      }
    }
    sub_out.push(ans);
    sub_out.push(unset_bit);
    output.push(sub_out);
  }
  return output;
}

A = [1, 0, 0, 0, 1];
B = [
  [2, 4],
  [1, 5],
  [3, 5],
];

console.log(xor(A, B));
