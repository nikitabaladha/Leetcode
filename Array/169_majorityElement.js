// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

let nums = [3, 2, 3];
// Output: 3
// Example 2:

// let nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let obj = {};
  for (let num of nums) {
    if (!obj[num]) {
      obj[num] = 0;
    }
    obj[num]++;
    if (obj[num] > nums.length / 2) {
      return num;
    }
  }
  return null;
};

console.log(majorityElement(nums));

// =================================================================
var majorityElement = function (nums) {
  let count = 0,
    leader;
  for (let i = 0; i < nums.length; i++) {
    if (count < 1) leader = nums[i];
    if (nums[i] == leader) count++;
    else count--;
  }
  return leader;
};
console.log(majorityElement(nums));

// var majorityElement = function (nums) {
//   let counter = {};
//   for (let num of nums) {
//     if (counter[num]) {
//       counter[num] += 1;
//     } else {
//       counter[num] = 1;
//     }
//   }

//   for (let key in counter) {
//     if (counter[key] > nums.length / 2) {
//       return key;
//     }
//   }
// };

// var majorityElement = function (nums) {
//   nums = nums.sort(); // [2,3,3]    []
//   let maxCount = 0;
//   let output = "";
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       if (count > maxCount) {
//         maxCount = count;
//         output = nums[i];
//       } else {
//         count = 0;
//       }
//     } else {
//       // count + 1;
//       count++;
//       output = nums[i];
//     }
//   }
//   return output;
// };

// console.log(majorityElement(nums));

// =====================================Javacode========================================

// class Solution {

//   public int majorityElement(int[] nums) {
//       Map<Integer, Integer> counter = new HashMap<>();

//       // Count the occurrences of each number
//       for (int num : nums) {
//           counter.put(num, counter.getOrDefault(num, 0) + 1);
//       }

//       // Find the majority element
//       for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {
//           if (entry.getValue() > nums.length / 2) {
//               return entry.getKey();
//           }
//       }

//       // Return a default value (you can modify this based on your requirements)
//       return -1;
//   }
// }
