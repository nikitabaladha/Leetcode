// Add at first

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.currentNode = null;
  }

  // insertAtPosition(data, position) {
  //   if (position < 0) {
  //     console.log("Invalid position");
  //     return;
  //   }

  //   const newNode = new Node(data);

  //   // If position is 1, insert at head position
  //   if (position === 1 || position === 0) {
  //     newNode.next = this.head;
  //     this.head = newNode;
  //     return;
  //   }

  //   let current = this.head;
  //   let previous = null;
  //   let currentPosition = 1;

  //   // Traverse the list to the desired position
  //   while (currentPosition < position && current !== null) {
  //     previous = current;
  //     current = current.next;
  //     currentPosition++;
  //   }

  //   // If position is beyond the end of the list, insert at the end
  //   if (current === null) {
  //     previous.next = newNode;
  //     this.currentNode = newNode;
  //   } else if (current !== null) {
  //     // Otherwise, insert at the desired position
  //     newNode.next = current;
  //     previous.next = newNode;
  //   } else {
  //     console.log("Invalid position");
  //   }
  // }

  insertAtPosition(data, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    const newNode = new Node(data);

    // If position is 1, insert at head position
    if (position === 1 || position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let currentPosition = 1;

    // Traverse the list to the desired position
    while (currentPosition < position - 1 && current !== null) {
      current = current.next;
      currentPosition++;
    }

    // If position is beyond the end of the list, insert at the end
    if (current === null) {
      console.log("Invalid position");
      return;
    } else if (current !== null) {
      const dummyNode = current.next;
      current.next = newNode;
      newNode.next = dummyNode;
    }
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.currentNode = newNode;
    } else {
      let current = this.currentNode;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      this.currentNode = newNode;
    }
  }

  createReverseLinkedListFromArray(array) {
    if (array.length === 0) return null;
    this.head = new Node(array[0]);

    for (let i = 1; i < array.length; i++) {
      const newNode = new Node(array[i]);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  length() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  removeFirstNode() {
    if (!this.head) {
      console.log("LinkList is empty");
    }
    const removedNode = this.head;
    this.head = this.head.next;
    return removedNode;
  }

  removeLastNode() {
    if (!this.head) {
      console.log("LinkList is empty");
      return;
    }

    if (!this.head.next) {
      const removedNode = this.head;
      this.head = null;
      this.currentNode = null;
      return removedNode;
    }

    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.currentNode = previous;
    return current;
  }

  removeAtPosition(position) {
    if (!this.head) {
      console.log("Linked list is empty");
      return;
    }

    if (position <= 0) {
      console.log("Invalid position");
      return;
    }

    if (position === 1) {
      let removeAtPosition = this.head;
      this.head = this.head.next;
      return removeAtPosition;
    }

    let current = this.head;
    let currentPosition = 1;

    // Traverse the list to the desired position 1 2 3 4 5   : 3
    //                                           1 2 < 2
    while (currentPosition < position - 1 && current !== null) {
      current = current.next;
      currentPosition++;
    }

    if (current.next === null) {
      console.log("Invalid position");
      return null;
    }

    const removedNode = current.next;
    current.next = current.next.next;
    return removedNode;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

const linkedList = new LinkedList();

// linkedList.insertAtBeginning(3);
// linkedList.insertAtBeginning(2);
// linkedList.insertAtBeginning(1);

linkedList.insertAtLast(1);
linkedList.insertAtLast(2);
linkedList.insertAtLast(3);
linkedList.insertAtLast(4);
linkedList.insertAtLast(5);

// linkedList.createReverseLinkedListFromArray([1, 2, 3, 4, 5]);

// console.log("Original linked list:");
// linkedList.printList();
// console.log("Length of linked list:", linkedList.length());

// console.log("Linked list after inserting 5 at position -1:");
// linkedList.insertAtPosition(5, -1);

// linkedList.insertAtPosition(0, 0);
// console.log("Linked list after inserting 0 at position 0:");
// linkedList.printList();

// linkedList.insertAtPosition(4, 3);
// console.log("Linked list after inserting 4 at position 3:");
// linkedList.printList();

// linkedList.insertAtPosition(6, 4);
// linkedList.printList();
// console.log("Length of linked list:", linkedList.length());

// linkedList.removeAtPosition(4);
// linkedList.printList();

// linkedList.removeFirstNode();
// linkedList.printList();

linkedList.removeLastNode();
linkedList.printList();
