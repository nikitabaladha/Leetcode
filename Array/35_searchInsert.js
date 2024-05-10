// let nums = [1,3,5,6];
// let target = 5
// Output: 2

// let nums = [1,3,5,6];
// let target = 2
// Output: 1

// let nums = [1,3,5,6];
// let target = 7
// Output: 4

let nums = [3, 5, 7, 9];
let target = 2;

var searchInsert = function (nums, target) {
  if (nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === target) return i;
    if (nums[i] > target && nums[i - 1] <= target) return i;
  }
};
console.log(searchInsert(nums, target));

// ===========================Javacode==================================

// public class Solution {

//   public int searchInsert(int[] nums, int target) {
//       if (nums[0] > target) {
//           return 0;
//       }
//       if (nums[nums.length - 1] < target) {
//           return nums.length;
//       }

//       for (int i = 0; i < nums.length; i++) {
//           if (nums[i] == target) {
//               return i;
//           }
//           if (nums[i] > target && nums[i - 1] <= target) {
//               return i;
//           }
//       }

//       return -1; // This line will not be reached in a valid scenario
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();

//       int[] nums = { 1, 3, 5, 6 };
//       int target = 5;
//       int result = solution.searchInsert(nums, target);
//       System.out.println(result); // Output: 2
//   }
// }
