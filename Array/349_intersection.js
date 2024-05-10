// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
// Output: [2,2]
// Example 2:

// let nums1 = [4,9,5];
// let nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const intersection = [];

  for (let num of nums2) {
    if (set.has(num)) {
      intersection.push(num);
      set.delete(num);
    }
  }

  return intersection;
};

console.log(intersection(nums1, nums2));
