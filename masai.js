function solve(A) {
  let vowel_count = 0;
  for (var i = 0; i < A.length; i++) {
    if (
      A[i] == "a" ||
      A[i] == "e" ||
      A[i] == "i" ||
      A[i] == "o" ||
      A[i] == "u"
    ) {
      vowel_count++;
    }
  }
  return A.length - vowel_count;
}
A = "masaischool";
console.log(solve(A));
