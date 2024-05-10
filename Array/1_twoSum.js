// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// let nums = [2, 7, 11, 15];
// let target = 9;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// let nums = [3, 2, 4];
// let target = 6;
// Output: [1,2]
// Example 3:

// let nums = [3, 3];
// let target = 6;
// Output: [0,1]

let nums = [2, 11, 7, 15];
let target = 9;
//Output: [1,3]

var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in obj) {
      return [obj[complement], i];
    }
    obj[nums[i]] = i;
  }
  return [];
};
console.log(twoSum(nums, target));

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };
// console.log(twoSum(nums, target));

// =================================================Javacode================================

// class Solution {

//   public int[] twoSum(int[] nums, int target) {
//       for (int i = 0; i < nums.length - 1; i++) {
//           for (int j = i + 1; j < nums.length; j++) {
//               if (nums[i] + nums[j] == target) {
//                   return new int[] { i, j };
//               }
//           }
//       }
//       // If no such indices are found
//       return new int[] {};
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();

//       int[] nums1 = { 2, 7, 11, 15 };
//       int target1 = 9;
//       int[] result1 = solution.twoSum(nums1, target1);
//       System.out.println(Arrays.toString(result1)); // Output: [0, 1]

//       int[] nums2 = { 3, 2, 4 };
//       int target2 = 6;
//       int[] result2 = solution.twoSum(nums2, target2);
//       System.out.println(Arrays.toString(result2)); // Output: [1, 2]

//       int[] nums3 = { 3, 3 };
//       int target3 = 6;
//       int[] result3 = solution.twoSum(nums3, target3);
//       System.out.println(Arrays.toString(result3)); // Output: [0, 1]
//   }
// }
