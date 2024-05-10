// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// let nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// let nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function (nums) {
  const missingNumber = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!nums.includes(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
};
console.log(findDisappearedNumbers(nums));
