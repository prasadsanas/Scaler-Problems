function longest(Arr) {
  let left_Arr = [];
  let Right_Arr = [];
  let count = 0;
  var A = Arr.trim().split("").map(Number);

  if (A.length <= 2) {
    if ((A[0] == 0 && A[1] == 1) || (A[1] == 0 && A[0] == 1)) {
      return 1;
    }
  }
  for (var i = 0; i < A.length; i++) {
    if (A[i] == 1) {
      count++;
      left_Arr.push(count);
    } else {
      count = 0;
      left_Arr.push(count);
    }
  }
  count = 0;
  for (var i = A.length - 1; i >= 0; i--) {
    if (A[i] == 1) {
      count++;
      Right_Arr.push(count);
    } else {
      count = 0;
      Right_Arr.push(count);
    }
  }
  for (var i = 0; i < Right_Arr.length / 2; i++) {
    var temp = Right_Arr[i];
    Right_Arr[i] = Right_Arr[Right_Arr.length - 1 - i];
    Right_Arr[Right_Arr.length - 1 - i] = temp;
  }

  console.log(left_Arr);
  console.log(Right_Arr);

  var max_length = 0;
  for (var i = 1; i < A.length - 1; i++) {
    if (A[i] == 0) {
      max_length = Math.max(max_length, left_Arr[i - 1] + Right_Arr[i + 1] + 1);
    }
  }
  return max_length;
}

A = "111000";
console.log(longest(A));
