function lszero(A) {
  var prefix_array = [];
  prefix_array.push(A[0]);
  for (var i = 1; i < A.length; i++) {
    prefix_array.push(A[i] + prefix_array[i - 1]);
  }
  console.log(prefix_array);
  var obj = {};
  for (var i = 0; i < prefix_array.length; i++) {
    obj[prefix_array[i]] = obj[prefix_array[i]]
      ? Math.max(i, obj[prefix_array[i]])
      : i;
    console.log(obj);
  }
  return obj;
}

A = [1, 2, -2, 4, -4];
console.log(lszero(A));
