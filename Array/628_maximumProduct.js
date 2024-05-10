// let nums = [1, 2, 3];
// Output: 6

// let nums = [1,2,3,4];
// Output: 24

let nums = [-100, -98, -9, -1, 2, 3, 4];
// Output: 39200

// let nums = [-1, -2, -3];
// Output: -6;

var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => a - b);

  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};

console.log(maximumProduct(nums));
