function reverse(A) {
  var i = 0;
  var j = A.length - 1;
  while (i < j / 2) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
    i++;
    j--;
  }
  return A;

  //   var str = "";
  //   for (var i = A.length - 1; i >= 0; i--) {
  //     str = str + A[i];
  //   }
  //   return str;
}

A = "scaler";
console.log(reverse(A));
