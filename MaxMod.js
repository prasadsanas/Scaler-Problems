function maxMod(A) {
  let max = 0;
  A.sort((a, b) => {
    return a - b;
  });
  console.log(A);

  let i = 0;
  let j = A.length - 1 - i;
  while (i < j) {
    if (A[i] % A[j] > max) {
      max = A[i] % A[j];
      i++;
    } else {
      j--;
    }
  }
  return max;
}

A = [
  42, 494, 116, 845, 781, 38, 315, 397, 405, 379, 427, 835, 72, 926, 983, 508,
  795, 590, 785, 475, 521, 81, 926, 835, 543, 539, 224, 775, 882, 825, 693, 594,
  391, 105, 973, 94, 445, 35, 709, 407, 789, 927, 672, 13, 107, 771, 875, 642,
  903, 443, 31, 426, 769, 551, 36, 83, 609, 542, 768, 188, 745, 380, 30, 238,
  473, 865, 275, 332, 105, 874, 547, 318, 23, 790, 767, 19, 643, 836, 126, 310,
  460, 456, 466, 131, 376, 64, 19, 784, 594, 834, 257, 225, 956, 277, 488, 34,
  114, 35, 630, 112,
];
console.log(maxMod(A));
