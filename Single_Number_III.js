function singleNumber(A) {
  var output = [];
  var set_array = [];
  var unset_array = [];
  var res = A[0];
  for (var i = 1; i < A.length; i++) {
    res = res ^ A[i];
  }

  var ch = 0;
  for (var i = 0; i < A.length; i++) {
    if (((res >> i) & 1) == 1) {
      ch = i;
      break;
    }
  }

  for (var i = 0; i < A.length; i++) {
    if ((A[i] >> ch) & (1 == 1)) {
      set_array.push(A[i]);
    } else {
      unset_array.push(A[i]);
    }
  }

  res = unset_array[0];
  for (var i = 1; i < unset_array.length; i++) {
    res = res ^ unset_array[i];
  }
  output.push(res);
  res = set_array[0];
  for (var i = 1; i < set_array.length; i++) {
    res = res ^ set_array[i];
  }
  output.push(res);

  var temp;
  for (var i = 0; i < output.length; i++) {
    for (var j = 0; j < output.length; j++) {
      if (output[i] < output[j]) {
        temp = output[i];
        output[i] = output[j];
        output[j] = temp;
      }
    }
  }
  return output;
}

A = [1, 2, 3, 1, 2, 4];
console.log(singleNumber(A));
