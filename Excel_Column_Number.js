function excel(str) {
  var str_arr = str.trim().split("");
  var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var sum = 0;
  for (var i = 0; i < str_arr.length; i++) {
    for (var j = 0; j < alphabets.length; j++) {
      if (str_arr[i] == alphabets[j]) {
        sum = sum * 26;
        sum += j + 1;
      }
    }
  }
  return sum;
}

str = "ABCD";
console.log(excel(str));
