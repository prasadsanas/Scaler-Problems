function subsequence(A) {
  var count = 0;
  var ans = 0;
  for (var i = A.length - 1; i >= 0; i--) {
    if (A[i] == "G") {
      count++;
    } else if (A[i] == "A") {
      ans += count;
    }
  }
  return ans;
}

A = "GUGPUAGAFQBMPYAGGAAOALAELGGGAOGLGEGZ";
console.log(subsequence(A));
