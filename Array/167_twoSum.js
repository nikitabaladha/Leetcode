// Example 1:

let numbers = [2, 7, 11, 15];
let target = 9;
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// let numbers = [2,3,4];
// let target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// let numbers = [-1,0];
// let target = -1;
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

var twoSum = function (numbers, target) {
  let map = new Map();
  for (i = 0; i < numbers.length; ++i) {
    const curr = numbers[i];
    const comp = target - curr;
    if (map.has(comp)) {
      return [i + 1, map.get(comp) + 1].sort((a, b) => a - b);
    } else {
      map.set(curr, i);
    }
  }
};
console.log(twoSum(numbers, target));

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
};

// ================================Javacode=================================

// class Solution {
//     public int[] twoSum(int[] numbers, int target) {
//         int left = 0;
//         int right = numbers.length - 1;

//         while (left < right) {
//             int sum = numbers[left] + numbers[right];

//             if (sum == target) {
//                 return new int[]{left + 1, right + 1};
//             } else if (sum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }

//         return new int[0]; // No solution found
//     }
// }
