// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// let nums = [1, 2, 3, 1];
// Output: true
// Example 2:

let nums = [1, 2, 3, 4];
// Output: false
// Example 3:

// let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true

var containsDuplicate = function (nums) {
  let obj = {};
  for (let num of nums) {
    if (!obj[num]) {
      obj[num] = 0;
    }
    obj[num]++;
    if (obj[num] > 1) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate(nums));

// =================================================================
var containsDuplicate = function (nums) {
  let obj = {};
  for (let num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate(nums));

// =====================================================================

var containsDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    set.add(num);
  }
  return nums.length !== set.size;
};
console.log(containsDuplicate(nums));

// ======================================================================

var containsDuplicate = function (nums) {
  const newSet = new Set(nums);

  return newSet.size !== nums.length;
};
console.log(containsDuplicate(nums));

//  =================================================================
// var containsDuplicate = function (nums) {
//   nums.sort();
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) return true;
//   }
//   return false;
// };
// console.log(containsDuplicate(nums));

// =========================================Javacode================================

// import java.util.Arrays;

// public class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         // Sort the array
//         Arrays.sort(nums);

//         // Iterate through the sorted array to check for duplicates
//         for (int i = 0; i < nums.length - 1; i++) {
//             if (nums[i] == nums[i + 1]) {
//                 return true;
//             }
//         }

//         return false;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         // Example usage
//         int[] nums = {1, 2, 3, 1};
//         System.out.println(solution.containsDuplicate(nums)); // Output: true
//     }
// }
