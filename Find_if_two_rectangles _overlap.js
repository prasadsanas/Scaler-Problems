function overlap(A, B, C, D, E, F, G, H) {
  // If one rectangle is on left side of other
  if (A >= G || E >= C) return 0;

  // If one rectangle is above other
  if (B >= H || F >= D) return 0;

  return 1;
}

A = 0;
B = 0;
C = 4;
D = 4;
E = 2;
F = 2;
G = 6;
H = 6;

console.log(overlap(A, B, C, D, E, F, G, H));
