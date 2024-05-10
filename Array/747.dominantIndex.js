let nums = [3, 6, 1, 0];
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

// let nums = [1, 2, 3, 4];
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

var dominantIndex = function (nums) {
  let max = Math.max(...nums);
  let maxIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] * 2);

    if (max === nums[i]) {
      maxIndex = i;
    } else if (max < nums[i] * 2) {
      return -1;
    }
  }
  return maxIndex;
};
console.log(dominantIndex(nums));
