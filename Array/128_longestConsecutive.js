// Example 1:

// let nums = [100, 4, 200, 1, 3, 2];
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9

let nums = [-1, 0, 1, 2, 3, 5, 6, 7];

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let count = 1;
  let maxLength = 1;

  let sortedNums = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] - sortedNums[i - 1] === 1) {
      count++;
    } else if (sortedNums[i] !== sortedNums[i - 1]) {
      // Start a new consecutive sequence
      count = 1;
    }

    // Update the maximum length
    maxLength = Math.max(maxLength, count);
  }

  return maxLength;
};

console.log(longestConsecutive(nums));

// ==============================Javacode===================================
// import java.util.Arrays;

// public class Solution {
//     public int longestConsecutive(int[] nums) {
//         if (nums.length == 0) {
//             return 0;
//         }

//         int count = 1;
//         int maxLength = 1;

//         // Sorting the array
//         Arrays.sort(nums);

//         for (int i = 1; i < nums.length; i++) {
//             if (nums[i] - nums[i - 1] == 1) {
//                 count++;
//             } else if (nums[i] != nums[i - 1]) {
//                 // Start a new consecutive sequence
//                 count = 1;
//             }

//             // Update the maximum length
//             maxLength = Math.max(maxLength, count);
//         }

//         return maxLength;
//     }

//     public static void main(String[] args) {
//         int[] nums = { /* Your array elements here */ };
//         Solution solution = new Solution();
//         System.out.println(solution.longestConsecutive(nums));
//     }
// }
