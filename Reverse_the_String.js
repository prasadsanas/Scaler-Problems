function ReverseString(A) {
  var A = A.trim().split(" ");
  console.log(A);
  var str = "";
  for (var i = A.length - 1; i >= 0; i--) {
    str = str + " " + A[i];
  }
  return str.trim();
}

A = "the sky is blue";
console.log(ReverseString(A));
