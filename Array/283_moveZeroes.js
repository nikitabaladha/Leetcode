// Example 1:

let nums = [0, 0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      nums.splice(i, 1);
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  return nums;
};
console.log(moveZeroes(nums));

//===============================================Javacode=================================================

// class Solution {

//   public void moveZeroes(int[] nums) {
//       int nonZeroIndex = 0;

//       // Move non-zero elements to the front of the array
//       for (int i = 0; i < nums.length; i++) {
//           if (nums[i] != 0) {
//               nums[nonZeroIndex++] = nums[i];
//           }
//       }

//       // Fill the remaining elements with zeroes
//       for (int i = nonZeroIndex; i < nums.length; i++) {
//           nums[i] = 0;
//       }
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();

//       // Example 1
//       int[] nums1 = { 0, 1, 0, 3, 12 };
//       solution.moveZeroes(nums1);
//       System.out.println(Arrays.toString(nums1)); // Output: [1, 3, 12, 0, 0]

//       // Example 2
//       int[] nums2 = { 0 };
//       solution.moveZeroes(nums2);
//       System.out.println(Arrays.toString(nums2)); // Output: [0]
//   }
// }
