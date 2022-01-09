function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  var A = input[0].trim().split(" ").map(Number);
  var B = input[1];
  A.shift();
  // console.log(A, B);
  for (var i = 0; i < B - 1; i++) {
    A.push(A.shift());
  }
  console.log(A.join(" "));
}

if (process.env.USER === "prasadsanas") {
  runProgram(`5 1 2 3 4 5
  3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

//  var j = A.length - 1;
//   for (var i = 0; i < A.length / 2; i++) {
//     var temp = A[i];
//     A[i] = A[j];
//     A[j] = temp;
//     j--;
//   }
//   console.log(A);
//   j = B - 1;
//   for (var i = 0; i < B / 2; i++) {
//     var temp = A[i];
//     A[i] = A[j];
//     A[j] = temp;
//     j--;
//   }
//   console.log(A);

//   j = A.length - 1;
//   for (var i = B; i < (B + j) / 2; i++) {
//     var temp = A[i];
//     A[i] = A[j];
//     A[j] = temp;
//     j--;
//   }
//   console.log(A);
