function addBinary(a, b) {
  var result = "";
  var s = 0;

  var i = a.length - 1;
  var j = b.length - 1;
  while (i >= 0 || j >= 0 || s == 1) {
    s += i >= 0 ? a.charAt(i).charCodeAt(0) - "0".charCodeAt(0) : 0;
    s += j >= 0 ? b.charAt(j).charCodeAt(0) - "0".charCodeAt(0) : 0;

    result = String.fromCharCode(parseInt(s % 2) + "0".charCodeAt(0)) + result;

    s = parseInt(s / 2);

    i--;
    j--;
  }

  return result;
}

A = "101";
B = "11";
console.log(addBinary(A, B));
