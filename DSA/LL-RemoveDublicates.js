class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let newNode = new Node(data);
    newNode.next = null;
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current.next !== null) {
      console.log(current.data + " -> ");
      current = current.next;
    }
  }
}

function removeDublicates(head) {
  const linkedSet = new Set();
  if (!head) {
    return "LinkedList Empty";
  }
  if (!head.next) {
    return head;
  }
  prev = head;
  currentNode = head.next;
  while (currentNode != null) {
    let data = currentNode.data;
    if (linkedSet.has(data)) {
      prev.next = currentNode.next();
    } else {
      linkedSet.add(data);
      prev = prev.next;
      currentNode = currentNode.next;
    }
  }
}
let l = new LinkedList();

l.append("B");
l.append("C");
l.append("A");
l.append("B");
l.append("C");
l.print();
let head = l.head;

removeDublicates(head);

l.print();
