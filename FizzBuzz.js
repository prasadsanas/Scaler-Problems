function fizzBuzz(A) {
  var output = [];
  for (var i = 1; i <= A; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      output.push("FizzBuzz");
    } else if (i % 5 == 0) {
      output.push("Buzz");
    } else if (i % 3 == 0) {
      output.push("Fizz");
    } else {
      output.push(i);
    }
  }
  return output;
}

A = 5;
console.log(fizzBuzz(A));
