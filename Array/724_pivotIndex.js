let nums = [1, 7, 3, 6, 5, 6];
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// let nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// let nums = [2,1,-1]
// Output: 0
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

var pivotIndex = function (nums) {
  let pivot = 0;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = pivot + 1; i < nums.length; i++) {
    rightSum += nums[i];
  }
  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (leftSum === rightSum) return pivot;
    leftSum += nums[pivot];
    rightSum -= nums[pivot + 1];
  }
  return -1;
};
console.log(pivotIndex(nums));

