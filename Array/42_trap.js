// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// let height = [4,2,0,3,2,5]
// Output: 9

var trap = function (height) {
  // Initialize two pointers, left and right, and variables to track the maximum height encountered from both directions.
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0; // Variable to accumulate the trapped water.

  // Continue the loop as long as the left pointer is less than the right pointer.
  while (left < right) {
    // Compare the heights at the left and right pointers.
    if (height[left] < height[right]) {
      // If the height at the left is smaller, update the leftMax and calculate the trapped water.
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
      // Move the left pointer to the next position.
      left++;
    } else {
      // If the height at the right is smaller, update the rightMax and calculate the trapped water.
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
      // Move the right pointer to the previous position.
      right--;
    }
  }

  // Return the total trapped water.
  return result;
};

console.log(trap(height)); // Output: 9

// ====================================Javacode=============================
// public class Solution {
//     public int trap(int[] height) {
//         int left = 0;
//         int right = height.length - 1;
//         int leftMax = 0;
//         int rightMax = 0;
//         int result = 0;

//         while (left < right) {
//             if (height[left] < height[right]) {
//                 leftMax = Math.max(leftMax, height[left]);
//                 result += leftMax - height[left];
//                 left++;
//             } else {
//                 rightMax = Math.max(rightMax, height[right]);
//                 result += rightMax - height[right];
//                 right--;
//             }
//         }

//         return result;
//     }
// }
