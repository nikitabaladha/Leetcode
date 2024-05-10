let nums = [1, 3, 5, 4, 7];
// Output: 3;

// let nums = [2, 2, 2, 2, 2];
// Output: 1;

var findLengthOfLCIS = function (nums) {
  let count = 1,
    maxCount = 1;
  for (var i = 0, j = 1; i < nums.length - 1, j < nums.length; i++, j++) {
    if (nums[i] < nums[j]) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 1;
    }
  }
  return maxCount;
};
console.log(findLengthOfLCIS(nums));
