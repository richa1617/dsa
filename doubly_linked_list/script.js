class ListNode {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      let oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
    } else {
      let oldTail = this.tail;
      let newTail = this.tail.prev;
      newTail.next = null;
      oldTail.prev = null;
      this.tail = newTail;
      this.length--;
      return oldTail;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = oldHead.next;
      newHead.prev = null;
      oldHead.next = null;
      this.head = newHead;
    }
    this.length--;
    return oldHead;
  }

  unshift(data) {
    let newHead = new ListNode(data);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let newNode = new ListNode(value);
      let prevNode = this.get(index - 1);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
    }
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let nodeToRemove = this.get(index);
      let prevNode = nodeToRemove.prev;
      let nextNode = nodeToRemove.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      nodeToRemove.prev = null;
      nodeToRemove.next = null;
      this.length--;
      return nodeToRemove;
    }
  }

  toString() {
    let result = "null";
    let current = this.head;
    while (current != null) {
      result += " <-- " + current.data + " -->";
      current = current.next;
    }
    return result + " null";
  }
}

let list = new LinkedList();

list.push(80);
list.push(70);
list.push(56);
list.push(60);
list.push(65);
list.push(68);

console.log(list.toString());

list.insert(2, 90);

console.log(list.toString());
