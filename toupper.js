function toupper(A) {
  var output = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i].charCodeAt(0) >= 97 && A[i].charCodeAt(0) <= 122) {
      let text = String.fromCharCode(A[i].charCodeAt(0) ^ 32);
      output.push(text);
    } else {
      output.push(A[i]);
    }
  }
  return output;
}

A = ["s", "c", "a", "l", "e", "r", "#", "2", "0", "2", "0"];
console.log(toupper(A));
