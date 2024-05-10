// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;
// Output: true;

// let matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
//   target = 13;
// Output: false;

var searchMatrix = function (matrix, target) {
  //   const flattenedArray = [].concat(...matrix);
  const flattenedArray = matrix.flat();
  let start = 0;
  let end = flattenedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (flattenedArray[middle] === target) {
      return true;
    } else if (flattenedArray[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
};

console.log(searchMatrix(matrix, target));
