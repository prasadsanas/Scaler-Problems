//param A : integer
//return an integer
function numSetBits(A) {
  var count = 0;
  while (A > 0) {
    if (A % 2 == 1) {
      count++;
    }
    A = Math.floor(A / 2);
  }
  return count;
}

console.log(numSetBits(63));
