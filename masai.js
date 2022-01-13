function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let input1 = input[0].trim().split(" ");
  let input2 = input[1].trim().split(" ");
  let N = +input1[0];
  let K = +input1[1];

  let H = +input2[0];
  let W = +input2[1];
  let D = +input2[2];
  let M = +input2[3];

  let time = 0;
  while (K > 0) {
    if (time == 0) {
      time += H;
      time += M;
      time += W;
    } else {
      time += W;
      time += H;
    }
    K--;
  }
  console.log(time);
}

if (process.env.USER === "prasadsanas") {
  runProgram(`2 2
  1 1 1 1
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
