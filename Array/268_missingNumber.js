// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

let nums = [3, 0, 1];

var missingNumber = function (nums) {
  let newNum = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return nums.length;
};
console.log(missingNumber(nums));

//===================================Javacode===========================================

// import java.util.Arrays;

// public class Solution {
//     public int missingNumber(int[] nums) {
//         // Sort the array in ascending order
//         Arrays.sort(nums);

//         // Iterate through the sorted array
//         for (int i = 0; i < nums.length; i++) {
//             // Check if the index is not equal to the current element
//             if (i != nums[i]) {
//                 return i;
//             }
//         }

//         // If the loop completes, the missing number is the length of the array
//         return nums.length;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         // Example usage
//         int[] nums = {3, 0, 1};
//         System.out.println(solution.missingNumber(nums)); // Output: 2
//     }
// }
