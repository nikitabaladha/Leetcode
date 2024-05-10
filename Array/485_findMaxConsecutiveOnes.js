let nums = [1, 1, 0, 1, 1, 1];
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// let nums = [1,0,1,1,0,1];
// Output: 2

var findMaxConsecutiveOnes = function (nums) {
  let largest = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? (current = 0) : current++;
    if (current > largest) largest = current;
  }
  return largest;
};
console.log(findMaxConsecutiveOnes(nums));
