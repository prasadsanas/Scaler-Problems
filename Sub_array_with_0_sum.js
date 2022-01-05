function SubarraySum(A) {
  var prefix_array = [];
  prefix_array.push(A[0]);
  for (var i = 1; i < A.length; i++) {
    prefix_array.push(A[i] + prefix_array[i - 1]);
  }
  var obj = {};
  for (var i = 0; i < prefix_array.length; i++) {
    obj[prefix_array[i]] = obj[prefix_array[i]] ? obj[prefix_array[i]] + 1 : 1;
  }

  for (let key in obj) {
    if (key == "0") {
      return 1;
    } else if (obj[key] > 1) {
      return 1;
    }
  }
  return 0;
}
