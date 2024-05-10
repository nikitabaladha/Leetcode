class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node to the beginning of the list
  addAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  // Add a node to the last of the list
  appendAtLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //   Insert at any position of the list
  insertAtPosition(data, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    // If position is 1 or 0, insert at head position
    if (position === 1 || position === 0) {
      this.addAtBeginning(data);
    } else if (position > this.length) {
      this.appendAtLast(data);
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let currentPosition = 1;

      while (currentPosition < position && currentNode.next !== null) {
        console.log("Hello");
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      const newNode = new Node(data);
      newNode.next = currentNode;
      newNode.prev = previousNode;
      previousNode.next = newNode;

      currentNode.prev = newNode;

      this.length++;
    }
  }

  deleteFirst() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
  }

  deleteLast() {
    if (!this.tail) {
      console.log("List is empty");
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
  }

  deleteAtPosition(position) {
    if (position < 0 || position > this.length) {
      console.log("Invalid position");
      return;
    }

    if (position === 0 || position === 1) {
      this.deleteFirst();
    } else if (position === this.length) {
      this.deleteLast();
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let currentPosition = 1;

      while (currentPosition < position && currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }
      let nextNode = currentNode.next;

      previousNode.next = nextNode;
      nextNode.prev = previousNode;

      currentNode.next = null;
      currentNode.prev = null;

      this.length--;
    }
  }

  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
    console.log(this.length);
  }
}

const DoublyLinkList = new doublyLinkList();
DoublyLinkList.appendAtLast(10);
DoublyLinkList.appendAtLast(20);
DoublyLinkList.appendAtLast(30);
DoublyLinkList.appendAtLast(40);
DoublyLinkList.appendAtLast(50);
DoublyLinkList.print();

// DoublyLinkList.insertAtPosition(1000, 0);
// DoublyLinkList.print();

// DoublyLinkList.deleteFirst();
// DoublyLinkList.print();

// DoublyLinkList.deleteLast();
// DoublyLinkList.print();

DoublyLinkList.deleteAtPosition(2);

DoublyLinkList.deleteAtPosition(1);

DoublyLinkList.deleteAtPosition(3);
DoublyLinkList.print();
