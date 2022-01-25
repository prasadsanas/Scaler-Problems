function solve(A) {
  var x = {};
  for (var i = 0; i < A.length; i++) {
    A[i] = A[i].split("").sort().join("");
  }
  var ans = [];
  for (var i = 0; i < A.length; i++) {
    var temp = [i + 1];
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] == A[j]) {
        temp.push(j + 1);
        A[j] = "";
      }
    }
    if (A[i] != "") ans.push(temp);
  }

  return ans;
}

A = ["cat", "dog", "god", "tca"];
console.log(solve(A));
