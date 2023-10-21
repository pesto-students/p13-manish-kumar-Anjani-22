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

  print(head = this.head) {
    let current = head;
    while (current !== null) {
      console.log(current.data + " -> ");
      current = current.next;
    }
  }
}

// Reverse K Nodes
function reverse_K_nodes(head, k) {
  let current = head;
  let prev = null;
  let count = 0;
  let last = [];
  let first = [];
  while (current) {
    first.push(current);
    prev = null;
    while (count < k && current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
      count++;
    }
    count = 0;
    last.push(prev);
  }
  last.push(current);

  const fCount = first.length;
  const lCount = last.length;

  for (let i = 0; i < fCount - 1; i++) {
    first[i].next = last[i + 1];
  }

  return last[0];
}

let l = new LinkedList();

l.append("1");
l.append("2");
l.append("3");
l.append("4");
l.append("5");
l.append("6");
l.append("7");
l.append("8");
l.append("9");
l.append("10");
l.append("11");

console.log("Original List:");
l.print();

const newHead = reverse_K_nodes(l.head, 3);

// Update the head of the LinkedList with the new head
l.head = newHead;

console.log("After reverse k nodes List:");
l.print();
