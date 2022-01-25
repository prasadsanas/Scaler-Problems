function solve(A, B) {
  let sum_A = 0;
  let sum_B = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    sum_A += A.charCodeAt(i);
  }
  console.log(sum_A);
  for (let i = 0; i < A.length; i++) {
    sum_B += B.charCodeAt(i);
  }
  //   console.log(sum_B);
  if (sum_A == sum_B) {
    count++;
  }
  for (let i = A.length; i < B.length; i++) {
    sum_B = sum_B - B.charCodeAt(i - A.length) + B.charCodeAt(i);
    console.log(sum_A, sum_B, B[i - A.length], B[i]);
    if (sum_A == sum_B) {
      count++;
    }
  }
  return count;
}

A = "docp";
B = "aoapeooeoapcpaocecddoocdcqqapeapccc";
console.log(solve(A, B));
