function solve(A, B) {
  var obj = {};

  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    obj[(A[i] + A[j]) % B] = obj[(A[i] + A[j]) % B]
      ? obj[(A[i] + A[j]) % B] + 1
      : 1;

    i++;
    j--;
  }
  return obj;
}

A = [1, 2, 3, 4, 5];
B = 2;
console.log(solve(A, B));
