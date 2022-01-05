function concat(A, B, C) {
  var output = [];
  output.push(A);
  output.push(B);
  output.push(C);
  output.sort((a, b) => {
    return a - b;
  });
  var string = "";
  string = string + output[0] + output[1] + output[2];
  return string;
}

A = 10;
B = 20;
C = 30;
console.log(concat(A, B, C));
