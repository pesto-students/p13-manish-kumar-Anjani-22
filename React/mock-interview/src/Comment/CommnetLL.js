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

  // Method to append a new node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to delete a node with a specific value
  delete(value) {
    if (!this.head) {
      return; // Empty list, nothing to delete
    }

    if (this.head.data === value) {
      this.head = this.head.next; // Update head to skip the first node
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === value) {
        current.next = current.next.next; // Update reference to skip the node to be deleted
        return;
      }
      current = current.next;
    }
  }

  // Method to print the linked list
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Create a linked list

export default LinkedList;

// myList.append(1);
// myList.append(2);
// myList.append(3);
// myList.append(4);
// myList.append(5);

// console.log("Original linked list:");
// myList.print();

// // Delete node with value 3
// myList.delete(3);

// console.log("\nLinked list after deleting node with value 3:");
// myList.print();
