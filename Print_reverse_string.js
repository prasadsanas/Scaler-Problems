// function reverse(A) {
//   var str = "";
//   for (var i = A.length - 1; i >= 0; i--) {
//     str = str + A[i];
//   }
//   return str;
// }

// A = "scaleracademy";
// console.log(reverse(A));

function runProgram(input) {
  // Write code here
  // input = input.trim().split("\n");
  var str = "";
  for (var i = input.length - 1; i >= 0; i--) {
    str = str + input[i];
  }
  console.log(str);
}

if (process.env.USER === "prasadsanas") {
  runProgram(`
    scaleracademy
    `);
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
