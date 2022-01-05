function Reverse(A) {
  var result = 0;
  var i = 31;
  var j = 0;
  while (i >= 0) {
    if (((A >> j) & 1) == 1 && j <= 31) {
      result = result + Math.pow(2, i);
    }
    j++;
    i--;
  }

  return result;
}

console.log(Reverse(3));
