function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let testcases = +input[0];

  for (let i = 0; i < testcases; i++) {
    let arr = input[i + 1].trim().split(" ").map(Number);
    // console.log(arr);
    var count = 0;
    var even = 0;
    var odd = 0;

    for (var j = 1; j <= arr[0]; j++) {
      if (arr[j] % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }
    if (odd >= even) {
      count = odd - even;
    } else {
      count = even - odd;
    }

    console.log(count);
  }
}

if (process.env.USER === "prasadsanas") {
  runProgram(`1 
  4 1 2 3 4 `);
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
