function isalpha(A) {
  for (var i = 0; i < A.length; i++) {
    var str = A[i];
    var index = str.charCodeAt(0);
    if ((index >= 65 && index <= 90) || (index >= 97 && index <= 122)) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

A = ["S", "c", "a", "l", "e", "r", "A", "c", "a", "d", "e", "m", "y"];
console.log(isalpha(A));
