function solve(A, B, C) {
  var head = A;
  var curr = A;
  var count = 1;
  var mNodePre = null;
  var nNodePre = null;
  while (count < B) {
    mNodePre = curr;
    curr = curr.next;
    count++;
  }
  nNodePre = curr;
  var next = curr.next;

  while (count < C) {
    var temp = next.next;
    next.next = curr;

    curr = next;
    next = temp;
    count++;
  }
  nNodePre.next = next;
  if (mNodePre == null) head = curr;
  else mNodePre.next = curr;
  return head;
}
