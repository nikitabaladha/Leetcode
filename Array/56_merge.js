// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// let intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

let intervals = [
  [1, 4],
  [4, 5],
];
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let nextInterval = intervals[i];

    if (currentInterval[1] >= nextInterval[0]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }

  result.push(currentInterval);

  return result;
};

console.log(merge(intervals));

// ==========================Not correct still fails some cases===================================

var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  let result = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      max = Math.max(intervals[i][1], intervals[i + 1][1]);
      result.push([intervals[i][0], max]);
      i++;
    } else {
      result.push(intervals[i]);
    }
  }

  result.push(intervals[intervals.length - 1]);

  return result;
};
console.log(merge(intervals));
