// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

let nums = [1, 1, 2];
// [1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// let nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).const num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  let k = 0; // Initialize a pointer for the unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i]; // Overwrite the next unique element
    }
  }

  // nums array now contains unique elements up to index k
  nums.length = k + 1; // Truncate the array to remove duplicates

  return nums.length;
};

console.log(removeDuplicates(nums));

// ==================================Javacode===============================

// public class Solution {
//   public int removeDuplicates(int[] nums) {
//       if (nums.length == 0) {
//           return 0;
//       }

//       int k = 0;

//       for (int i = 1; i < nums.length; i++) {
//           if (nums[i] != nums[k]) {
//               k++;
//               nums[k] = nums[i];
//           }
//       }

//       // Truncate the array to remove duplicates
//       int newLength = k + 1;
//       // If you need to return the modified array, you can create a new array and copy elements
//       //int[] newArray = Arrays.copyOf(nums, newLength);

//       return newLength;
//   }
// }
