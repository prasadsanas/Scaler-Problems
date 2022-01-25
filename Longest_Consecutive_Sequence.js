function solve(arr, n) {
  // let obj = {};
  // for (let i = 0; i < A.length; i++) {
  //   obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1;
  // }
  // // console.log(obj);
  // let longest_seq = 0;

  // for (let i = 0; i < A.length; i++) {
  //   if (!obj[A[i] - 1]) {
  //     let j = A[i];
  //     while (obj[A[j]]) {
  //       j++;
  //     }
  //     longest_seq = Math.max(longest_seq, j - A[i]);
  //   }
  // }
  // return longest_seq;

  let S = new Set();
  let ans = 0;

  // Hash all the array elements
  for (let i = 0; i < n; i++) S.add(arr[i]);

  // check each possible sequence from
  // the start then update optimal length
  for (let i = 0; i < n; i++) {
    // if current element is the starting
    // element of a sequence
    if (!S.has(arr[i] - 1)) {
      // Then check for next elements
      // in the sequence
      let j = arr[i];
      while (S.has(j)) j++;

      // update optimal length if
      // this length is more
      ans = Math.max(ans, j - arr[i]);
    }
  }
  return ans;
}

A = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
n = 10;
console.log(solve(A, n));
