// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// [1,1,2,2,4]   []
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

let nums = [2, 2, 1];

var singleNumber = function (nums) {
  let result = [];
  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    // Check if the current number is not paired with the next one
    if (nums[i] !== nums[i + 1]) {
      result.push(nums[i]);
    } else {
      i++; // Skip the paired number
    }
  }

  return result;
};

var singleNumber = function (nums) {
  const object = {};
  for (const num of nums) {
    object[num] = object[num] + 1 || 1;
  }
  for (const key in object) {
    if (object[key] === 1) {
      return key;
    }
  }
};
console.log(singleNumber(nums));

// ===============================Javacode==================================

// import java.util.HashMap;
// import java.util.Map;

// class Solution {

//     public int singleNumber(int[] nums) {
//         Map<Integer, Integer> frequencyMap = new HashMap<>();

//         // Count the frequency of each number
//         for (int num : nums) {
//             frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
//         }

//         // Find the number with frequency 1
//         for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
//             if (entry.getValue() == 1) {
//                 return entry.getKey();
//             }
//         }

//         // Return a default value (you can modify this based on your requirements)
//         return -1;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();
//         int[] nums = { /* Your input array here */ };
//         int result = solution.singleNumber(nums);

//         // Print the result
//         System.out.println(result);
//     }
// }
