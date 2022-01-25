function Distinct(A, B) {
  // var output = [];
  // var obj = {};
  // for (var i = 0; i < B; i++) {
  //   obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
  // }
  // output.push(Object.keys(obj).length);

  // for (var i = B; i < A.length; i++) {
  //   obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
  //   obj[A[i - B]] = obj[A[i - B]] - 1;
  //   console.log(obj);
  //   if (obj[A[i - B]] == "0") {
  //     delete obj[A[i - B]];
  //   }

  //   output.push(Object.keys(obj).length);
  // }

  // return output;

  if (!A || !A.length || B > A.length) {
    return [];
  }

  let count = 0;
  const hash = {};
  const res = [];

  for (let i = 0; i < B; i++) {
    if (hash[A[i]]) {
      hash[A[i]]++;
    } else {
      hash[A[i]] = 1;
      count++;
    }
  }

  res[0] = count;

  for (let i = B; i < A.length; i++) {
    hash[A[i - B]]--;
    if (!hash[A[i - B]]) {
      count--;
    }
    if (hash[A[i]]) {
      hash[A[i]]++;
    } else {
      hash[A[i]] = 1;
      count++;
    }
    res[i - B + 1] = count;
  }

  return res;
}

A = [1, 2, 1, 3, 4, 3];
B = 3;
console.log(Distinct(A, B));
