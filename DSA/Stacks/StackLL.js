import { Node } from "./LinkedList-1/LinkedListClass.js";
class Stack {
  constructor() {
    this.top == null; //heaed
  }
  push(element) {
    let newNode = new Node(element);
    if (this.isEmpty()) top = newNode;
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }
  pop() {
    if (!this.isEmpty()) return "Empty Stack";
    else {
      let temp = this.top.next;
      this.top.next = null;
      this.top = temp;
    }
    peek();
    {
      if (!this.isEmpty()) return "Empty Stack";
      else return this.top.data;
    }
  }
  isEmpty() {
    return top === null;
  }

  printStack() {
    if (!this.isEmpty()) return "Empty Stack";
    let current = top;
    let str = "";
    while (current) {
      str = str + current.data + "\n";
      current = current.next;
    }
  }
}
