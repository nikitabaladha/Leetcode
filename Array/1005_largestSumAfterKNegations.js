// Example 1:

let nums = [4, 2, 3];
let k = 1;
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].
// Example 2:

// let nums = [3, -1, 0, 2];
// let k = 3;
// Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
// Example 3:

// let nums = [2, -3, -1, 5, -4],
// let k = 2;
// Output: 13
// Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].

var largestSumAfterKNegations = function (nums, k) {
  const sortedArray = nums.slice().sort((a, b) => a - b);

  let i = 0;

  // Negate all negative numbers
  while (i < sortedArray.length && k > 0 && sortedArray[i] < 0) {
    sortedArray[i] = -sortedArray[i];
    k--;
    i++;
  }

  // If k is still greater than 0 and is an odd number, we need to negate the smallest positive number
  if (k % 2 !== 0) {
    // Find the index of the smallest absolute value
    const minIndex = sortedArray.indexOf(Math.min(...sortedArray));
    sortedArray[minIndex] = -sortedArray[minIndex];
  }

  return sortedArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
console.log(largestSumAfterKNegations(nums, k));

//===============================================Javacode===============================================

// import java.util.Arrays;

// public class Solution {
//     public int largestSumAfterKNegations(int[] nums, int k) {
//         int[] sortedArray = Arrays.copyOf(nums, nums.length);
//         Arrays.sort(sortedArray);

//         int i = 0;

//         // Negate all negative numbers
//         while (i < sortedArray.length && k > 0 && sortedArray[i] < 0) {
//             sortedArray[i] = -sortedArray[i];
//             k--;
//             i++;
//         }

//         // If k is still greater than 0 and is an odd number, we need to negate the smallest positive number
//         if (k % 2 != 0) {
//             // Find the index of the smallest absolute value
//             int minIndex = 0;
//             for (int j = 1; j < sortedArray.length; j++) {
//                 if (sortedArray[j] < sortedArray[minIndex]) {
//                     minIndex = j;
//                 }
//             }
//             sortedArray[minIndex] = -sortedArray[minIndex];
//         }

//         // Calculate the sum of the array
//         int sum = 0;
//         for (int num : sortedArray) {
//             sum += num;
//         }

//         return sum;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();
//         int[] nums = {4, 2, 3};
//         int k = 1;
//         System.out.println(solution.largestSumAfterKNegations(nums, k)); // Output: 5
//     }
// }
