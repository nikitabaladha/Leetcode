let nums = [1, 2, 3, 1, 2, 3];
let k = 2;
// Output: false;

var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && j - i <= k) {
        return true;
      }
    }
  }
  return false;
};
console.log(containsNearbyDuplicate(nums, k));

// var containsNearbyDuplicate = function (nums, k) {
//   const visited = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (visited[num] !== undefined && i - visited[num] <= k) {
//       return true;
//     }
//     visited[num] = i;
//   }
//   return false;
// };
// console.log(containsNearbyDuplicate(nums, k));

// ==================================Javacode================================

// import java.util.HashMap;
// import java.util.Map;

// public class Solution {

//     public boolean containsNearbyDuplicate(int[] nums, int k) {
//         Map<Integer, Integer> numIndexMap = new HashMap<>();

//         for (int i = 0; i < nums.length; i++) {
//             int currentNum = nums[i];

//             if (numIndexMap.containsKey(currentNum) && i - numIndexMap.get(currentNum) <= k) {
//                 return true;
//             }

//             numIndexMap.put(currentNum, i);
//         }

//         return false;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         // Example usage
//         int[] nums = { 1, 2, 3, 1 };
//         int k = 3;
//         System.out.println(solution.containsNearbyDuplicate(nums, k)); // Output: true
//     }
// }
