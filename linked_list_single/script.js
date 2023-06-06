class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new ListNode(data);
    if (!this.root) {
      this.root = newNode;
      this.tail = this.root;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(data) {
    let newRoot = new ListNode(data, this.root);
    this.root = newRoot;
    this.length++;
  }

  toString() {
    let result = "root --> ";
    let current = this.root;
    while (current != null) {
      result += current.data + " --> ";
      current = current.next;
    }
    return result + "null";
  }

  get(index) {
    let count = 0;
    let current = this.root;
    while (current != null) {
      if (index === count) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.root = this.root.next;
      if (!this.root) {
        this.tail = null;
      }
    } else {
      let prevNode = this.getNode(index - 1);
      let nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;
      if (nodeToRemove === this.tail) {
        this.tail = prevNode;
      }
    }

    this.length--;
  }

  getNode(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }

    let count = 0;
    let current = this.root;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
}

// Create a new linked list
const list = new LinkedList();

// Add elements to the list
list.push(1);
list.push(2);
list.push(3);

// Prepend an element to the list
list.prepend(0);

// Output the list
console.log(list.toString()); // Output: root --> 0 --> 1 --> 2 --> 3 --> null

// Get an element at a specific index
console.log(list.get(2)); // Output: 2

// Remove an element at a specific index
list.remove(1);

// Output the updated list
console.log(list.toString()); // Output: root --> 0 --> 2 --> 3 --> null
