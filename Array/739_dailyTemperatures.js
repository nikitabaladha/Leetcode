// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// let temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// let temperatures = [30,60,90]
// Output: [1,1,0]

var dailyTemperatures = function (temperatures) {
  const helperStack = []; // []

  const result = new Array(temperatures.length).fill(0); // []
  //   console.log(result);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      helperStack.length > 0 &&
      temperatures[i] >= temperatures[helperStack[helperStack.length - 1]]
    ) {
      console.log(
        "helperStack",
        temperatures[helperStack[helperStack.length - 1]]
      );
      helperStack.pop();
    }

    if (helperStack.length > 0) {
      result[i] = helperStack[helperStack.length - 1] - i;
    }

    helperStack.push(i);
  }

  return result;
};

console.log(dailyTemperatures(temperatures));

// ===========================Javacode======================================

// import java.util.Stack;

// public class Solution {

//     public int[] dailyTemperatures(int[] temperatures) {
//         Stack<Integer> helperStack = new Stack<>();
//         int n = temperatures.length;
//         int[] result = new int[n];

//         for (int i = n - 1; i >= 0; i--) {
//             while (!helperStack.isEmpty() && temperatures[i] >= temperatures[helperStack.peek()]) {
//                 helperStack.pop();
//             }

//             if (!helperStack.isEmpty()) {
//                 result[i] = helperStack.peek() - i;
//             }

//             helperStack.push(i);
//         }

//         return result;
//     }
// }
