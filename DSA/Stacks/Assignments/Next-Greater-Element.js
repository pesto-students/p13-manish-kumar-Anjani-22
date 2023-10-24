import Stack from "./Stacks/StackLL.js";
function nextGreaterElement(arr) {
  let nge = new Array(arr.length).fill(-1);
  let stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    while (!stack.isEmpty() && element > stack.peek()) {
      let index = arr.indexOf(stack.pop());
      nge[index] = element;
    }
    stack.push(element);
  }

  while (!stack.isEmpty()) {
    let index = arr.indexOf(stack.pop());
    nge[index] = -1;
  }

  console.log(nge);
}
