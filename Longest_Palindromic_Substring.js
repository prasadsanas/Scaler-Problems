function LPS(A) {
  let max_length = 0;
  let output = "";
  for (let i = 0; i < A.length; i++) {
    let str = "";
    for (let j = i; j < A.length; j++) {
      str = str + A[j];

      let reverse = reverseString(str);
      if (str == reverse && max_length < str.length) {
        output = str;
        max_length = output.length;
      }
    }
  }
  return output;
}

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

A = "aaaabaaa";
console.log(LPS(A));
