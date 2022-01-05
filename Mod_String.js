function mod(A, B) {
  var ans = 0;
  var power = 1;
  for (var i = A.length - 1; i >= 0; i--) {
    ans = ans + A[i].trim().split("").map(Number) * power;
    ans = ans % B;
    power = (power * 10) % B;
  }
  return ans;
}

A =
  "6562800446546751053033681283622332585949169375825307419010747907087102529693988502714663897293527240363734284937813181135000995192664742291904645171438423695200374401117403";
B = 36173;

console.log(mod(A, B));
