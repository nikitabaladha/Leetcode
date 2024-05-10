// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

let nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// let nums = [0,1,1];
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// let nums = [0,0,0];
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

var threeSum = function (nums) {
  const result = [];

  if (nums.length < 3) {
    return result;
  }

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    const target = 0 - nums[i];

    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum(nums));
// =================================================================

var threeSum = function (nums) {
  if (!nums || nums.length < 3) {
    return [];
  }

  // Sort the array
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the fixed element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for the other two elements
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum(nums));

// ================================Javacode=================================

// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.HashSet;
// import java.util.List;
// import java.util.Set;

// public class Solution {

//     public List<List<Integer>> threeSum(int[] nums) {
//         if (nums == null || nums.length < 3) {
//             return new ArrayList<>();
//         }

//         // Sort the elements
//         Arrays.sort(nums);
//         Set<List<Integer>> result = new HashSet<>();

//         // Fix the first element and find the other two elements
//         for (int i = 0; i < nums.length - 2; i++) {
//             // Skip duplicates for the fixed element
//             if (i > 0 && nums[i] == nums[i - 1]) {
//                 continue;
//             }

//             int left = i + 1;
//             int right = nums.length - 1;

//             while (left < right) {
//                 int sum = nums[i] + nums[left] + nums[right];

//                 if (sum == 0) {
//                     // Add the list, and move to find other triplets
//                     result.add(Arrays.asList(nums[i], nums[left], nums[right]));
//                     left++;
//                     right--;

//                     // Skip duplicates for the other two elements
//                     while (left < right && nums[left] == nums[left - 1]) {
//                         left++;
//                     }

//                     while (left < right && nums[right] == nums[right + 1]) {
//                         right--;
//                     }
//                 } else if (sum < 0) {
//                     left++;
//                 } else {
//                     right--;
//                 }
//             }
//         }

//         return new ArrayList<>(result);
//     }
// }
