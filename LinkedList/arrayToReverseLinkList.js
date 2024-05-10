const array = [1, 2, 3, 4, 5];

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
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

  printList() {
    let current = this.head;

    let result = "";

    while (current !== null) {
      result += current.data + "->";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

const linkedList = new LinkedList();
linkedList.createReverseLinkedListFromArray(array);
linkedList.printList();
