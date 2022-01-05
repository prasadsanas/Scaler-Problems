function palindrome(A) {
  var i = 0;
  var j = A.length - 1;
  while (i < j) {
    if (A[i] == A[j]) {
      i++;
      j--;
    } else {
      return 0;
    }
  }
  return 1;
}

A = "naman";
console.log(palindrome(A));
