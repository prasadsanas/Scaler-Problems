var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}

/// Masai
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let vowel_count = 0;
  for (var i = 0; i < input[0].length; i++) {
    if (
      input[0][i] == "a" ||
      input[0][i] == "e" ||
      input[0][i] == "i" ||
      input[0][i] == "o" ||
      input[0][i] == "u"
    ) {
      vowel_count++;
    }
  }
  console.log(input[0].length - vowel_count);
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
