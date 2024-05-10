// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

let head = [1, 2, 3, 4, 5];
// Output: [5,4,3,2,1]
// Example 2:

// let head = [1,2]
// Output: [2,1]
// Example 3:

// let head = []
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// class ListNode {
//   // constructor(val, next = null) {
//   //   this.val = val;
//   //   this.next = next;
//   // }
// }

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

console.log(reversedHead(head));
