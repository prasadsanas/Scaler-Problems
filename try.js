function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let input1 = input[0].trim().split(" ");
  let input2 = input[1].trim().split(" ");
  let len = input1[0];
  let one_zero = +input1[1];
  let zero_one = +input1[2];
  let str = input2[0];

  if (zero_one <= one_zero) {
    temp = zero_one;
    zero_one = one_zero;
    one_zero = temp;
    for (var i = 0; i < str.length; i++) {
      str[i] ^= 1;
    }
  }
  let ans = 0;
  let arr = [];
  for (var j = 0; j < str.length; j++) {
    if (arr.length > 0 && arr[arr.length - 1] < str[j]) {
      arr.pop();
      ans += zero_one;
    } else {
      arr.push(str[j]);
    }
  }
  let zeros = 0;
  let ones = 0;
  arr.forEach((el) => {
    if (el == 0) {
      zeros++;
    } else {
      ones++;
    }
  });

  //   console.log(zeros, ones);
  ans += one_zero + Math.min(zeros, ones);
  console.log(ans);
}

if (process.env.USER === "prasadsanas") {
  runProgram(`5 5 1
  10111   
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
