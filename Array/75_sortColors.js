// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

let nums = [2, 0, 2, 3, 9, 0];
// Output: [0,0,1,1,2,2]
// Example 2:

// let nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] > nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];

      left++;
      right--;
    } else if (nums[left] < nums[right]) {
      left++;
    } else left++;
    right--;
  }
};
console.log(sortColors(nums));

// =================================================================

var sortColors = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let i = 0;

  while (i <= high) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      i++;
      low++;
    } else if (nums[i] === 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    } else {
      i++;
    }
  }

  return nums;
};

console.log(sortColors(nums));
