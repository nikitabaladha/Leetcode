// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]
// Example 2:

// let list1 = [];
// let list2 = []
// Output: []
// Example 3:

// let list1 = [];
// let list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Define function to merge two sorted linked lists
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-1);
  let prev = dummy;
  let current1 = list1;
  let current2 = list2;
  while (current1 && current2) {
    if (current1.val <= current2.val) {
      prev.next = current1;
      prev = current1;
      current1 = current1.next;
    } else {
      prev.next = current2;
      prev = current2;
      current2 = current2.next;
    }
  }
  if (current1) prev.next = current1;
  if (current2) prev.next = current2;
  return dummy.next;
};

// Convert array to linked list
var arrayToLinkedList = function (arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};

// Convert linked list to array
var linkedListToArray = function (head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

// Convert arrays to linked lists
let linkedList1 = arrayToLinkedList(list1);
let linkedList2 = arrayToLinkedList(list2);

// Merge the linked lists
let mergedList = mergeTwoLists(linkedList1, linkedList2);

// Convert merged linked list to array and log
console.log(linkedListToArray(mergedList));
