// Example 1:

// let nums = [1, 1, 1, 2, 2, 3];
// let k = 2;
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

let nums = [4, 1, -1, 2, -1, 2, 3];
let k = 2;
// Output: [2, -1];

var topKFrequent = function (nums, k) {
  const countMap = new Map();

  // Iterate over the array
  for (const element of nums) {
    // Check if the element is already in the map
    if (countMap.has(element)) {
      // If yes, increment the count
      countMap.set(element, countMap.get(element) + 1);
    } else {
      // If not, add the element to the map with count 1
      countMap.set(element, 1);
    }
  }

  // Sort the keys based on their frequencies
  const sortedKeys = Array.from(countMap.keys()).sort(
    (a, b) => countMap.get(b) - countMap.get(a)
  );

  // Return the top k frequent elements
  return sortedKeys.slice(0, k);
};

console.log(topKFrequent(nums, k));

//===========================================Javacode======================================================

// import java.util.*;

// public class Solution {
//     public int[] topKFrequent(int[] nums, int k) {
//         // Create a map to store the counts
//         Map<Integer, Integer> countMap = new HashMap<>();

//         // Iterate over the array
//         for (int element : nums) {
//             // Check if the element is already in the map
//             if (countMap.containsKey(element)) {
//                 // If yes, increment the count
//                 countMap.put(element, countMap.get(element) + 1);
//             } else {
//                 // If not, add the element to the map with count 1
//                 countMap.put(element, 1);
//             }
//         }

//         // Create a priority queue to sort the keys based on their frequencies
//         PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(
//                 (a, b) -> Integer.compare(countMap.get(b), countMap.get(a))
//         );

//         // Add all keys to the priority queue
//         priorityQueue.addAll(countMap.keySet());

//         // Create an array to store the top k frequent elements
//         int[] result = new int[k];

//         // Pop the top k elements from the priority queue
//         for (int i = 0; i < k; i++) {
//             result[i] = priorityQueue.poll();
//         }

//         return result;
//     }

//     public static void main(String[] args) {
//         int[] nums = {4, 1, -1, 2, -1, 2, 3};
//         int k = 2;

//         Solution solution = new Solution();
//         int[] result = solution.topKFrequent(nums, k);

//         // Print the result
//         System.out.print("Top " + k + " frequent elements: ");
//         for (int num : result) {
//             System.out.print(num + " ");
//         }
//     }
// }
