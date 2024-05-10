// let nums = [3,2,2,3];
// let val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// =================================Javacode==================================================
// public class Solution {

//   public int removeElement(int[] nums, int val) {
//       int k = 0; // Pointer to track the position of non-matching elements

//       for (int i = 0; i < nums.length; i++) {
//           if (nums[i] != val) {
//               nums[k] = nums[i];
//               k++;
//           }
//       }

//       return k;
//   }

//   public static void main(String[] args) {
//       // Example usage
//       Solution solution = new Solution();

//       // Example 1
//       int[] nums1 = { 3, 2, 2, 3 };
//       int val1 = 3;
//       int result1 = solution.removeElement(nums1, val1);
//       System.out.println(result1); // Output: 2
//       // Note: The modified array nums1 can be accessed directly

//       // Example 2
//       int[] nums2 = { 0, 1, 2, 2, 3, 0, 4, 2 };
//       int val2 = 2;
//       int result2 = solution.removeElement(nums2, val2);
//       System.out.println(result2); // Output: 5
//       // Note: The modified array nums2 can be accessed directly
//   }
// }
