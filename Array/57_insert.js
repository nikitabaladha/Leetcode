// You are given an array of non-overlapping intervals intervals where intervals[i] = [start i, end i] represent the start and the end of the ith interval and intervals is sorted in ascending order by start i. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by start i and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:

// let intervals = [
//   [1, 3],
//   [6, 9],
// ];
// let newInterval = [2, 5];
// Output: [[1,5],[6,9]]
// Example 2:

let intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
let newInterval = [4, 8];
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;

  for (; i < intervals.length && intervals[i][1] < newInterval[0]; i++) {
    result.push(intervals[i]);
  }

  for (; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    } else if (newInterval[1] >= intervals[i][0]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
  }

  result.push(newInterval);

  return result;
};

console.log(insert(intervals, newInterval));

// =================================================================

var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;

  // Add all intervals that come before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the merged interval
  result.push(newInterval);

  // Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

console.log(insert(intervals, newInterval));

// =================================================================

var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;

  // Add all intervals that come before newInterval
  for (; i < intervals.length && intervals[i][1] < newInterval[0]; i++) {
    result.push(intervals[i]);
  }

  // Merge overlapping intervals
  for (; i < intervals.length && intervals[i][0] <= newInterval[1]; i++) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
  }

  // Add the merged interval
  result.push(newInterval);

  // Add remaining intervals
  for (; i < intervals.length; i++) {
    result.push(intervals[i]);
  }

  return result;
};

console.log(insert(intervals, newInterval));
