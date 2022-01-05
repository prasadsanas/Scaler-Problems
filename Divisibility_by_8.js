function divisibleBy8(A) {
  if (A.length > 3) {
    var str = "";
    for (var i = A.length - 3; i < A.length; i++) {
      str = str + A[i];
    }
    var num = str.trim().split("").map(Number).join("");
    if (num % 8 == 0) {
      return 1;
    } else {
      return 0;
    }
  } else {
    var num = A.trim().split("").map(Number).join("");
    if (num % 8 == 0) {
      return 1;
    } else {
      return 0;
    }
  }
}

A =
  "40897237111816995922805307737859413552091006514927603847883130124746756767426237849396480087733429432861339411285568084588535007444731";
console.log(divisibleBy8(A));
