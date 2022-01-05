function smallestXOR(A, B) {
  var min = Infinity;

  var min_array = [];

  while (i < Math.pow(2, B)) {
    min = A ^ i;
    min_array.push(min);
    i++;
  }
  console.log(min_array);
  for (var j = 0; j < min_array.length; j++) {
    var count = 0;
    var num = min_array[j];
    while (min_array[j] > 0) {
      if (min_array[j] % 2 == 1) {
        count++;
      }
      min_array[j] = Math.floor(min_array[j] / 2);
    }
    if (count == B) {
      return num;
    }
  }
}

console.log(smallestXOR(9, 3));
