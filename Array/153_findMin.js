// Example 1:

let nums = [3, 4, 5, 1, 2];
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// let nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// let nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    console.log(mid);

    // Check if the array is rotated on the right side
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // If not rotated on the right side, check the left side
      right = mid;
    }
  }

  // At this point, left and right will converge to the minimum element
  return nums[left];
};

console.log(findMin(nums));
