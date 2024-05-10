// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

// Example 1:

// let head = [1,2,2,1]
// Output: true
// Example 2:

// let head = [1,2]
// Output: false

var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast.next !== null) {
    fast = fast.next;
    if (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return slow;
};

var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};

var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let midNode = middleNode(head);
  let secondHalf = midNode.next;
  let head2 = reverseList(secondHalf);
  let firstHalf = head;
  while (firstHalf !== null && head2 !== null) {
    if (firstHalf.val !== head2.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    head2 = head2.next;
  }

  return true;
};
