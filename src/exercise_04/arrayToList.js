export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) {
    throw new Error('Creating list from undefined array')
  }
  if (!array.length) {
    throw new Error('Creating list from empty array')
  }

  function Node(val) {
    this.value = val;
    this.next = null;
  }
  let head, pre, cur;
  array.forEach((itm, i) => {
    if (i === 0) {
      head = new Node(itm);
      pre = head;
    } else {
      cur = new Node(itm);
      pre.next = cur;
      pre = cur;
    }
  })
  return head;
}
