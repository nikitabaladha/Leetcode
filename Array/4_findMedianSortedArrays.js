// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// let nums1 = [1, 3];
// let nums2 = [2];
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

let nums1 = [1, 2];
let nums2 = [4, 5];
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// How to Find Median?
// Step 1: Sort the given data in increasing order.
// Step 2: Count the number of observations.
// Step 3: If the number of observations is odd use median formula: Median = [(n + 1)/2]th term.   1,3,5,7
// Step 4: If the number of observations is even use median formula: Median = [(n/2)th term + (n/2 + 1)th term]/2.   2,4,6,8

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = mergedArray.length;

  if (length % 2 === 0) {
    // If the merged array has even length
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return (mergedArray[middleIndex1] + mergedArray[middleIndex2]) / 2;
  } else {
    // If the merged array has odd length
    const middleIndex = Math.floor(length / 2);
    return mergedArray[middleIndex];
  }
};
console.log(findMedianSortedArrays(nums1, nums2));
