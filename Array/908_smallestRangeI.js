// let nums = [1];
// let k = 0;
// Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

// let nums = [0,10];
// let k = 2
// Output: 6
// Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.

let nums = [1,3,6];
let k = 3;
// Output: 0
// Explanation: Change nums to be [4, 4, 4]. The score is max(nums) - min(nums) = 4 - 4 = 0.

var smallestRangeI = function (nums, k) {
  // Find the current range of the array
  const originalRange = Math.max(...nums) - Math.min(...nums);

  // Calculate the maximum and minimum possible values in the modified array
  const maxPossible = Math.max(...nums) - k;
  const minPossible = Math.min(...nums) + k;

  // If the difference between maxPossible and minPossible is negative, return 0
  // Otherwise, return the difference, as making all elements equal within this range will minimize the overall difference
  return Math.max(0, maxPossible - minPossible);
};

console.log(smallestRangeI(nums, k));
