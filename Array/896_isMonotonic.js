let nums = [1, 2, 2, 3];
// Output: true

// let nums = [6,5,4,4];
// Output: true

// let nums = [1,3,2]
// Output: false

var isMonotonic = function (nums) {
    
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] <= nums[i + 1]) {
      return true;
    } else if (nums[i] >= nums[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(isMonotonic(nums));
