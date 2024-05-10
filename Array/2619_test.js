// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// let nums = [null, {}, 3];
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// let nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

let nums = [null, {}, 3];
const numsLast = nums.last();

function test() {
  const myArray = [1, 2, 4];
  return myArray.last();
}

console.log(numsLast);
console.log(test());
