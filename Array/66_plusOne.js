// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

let digits = [9, 8, 9];
//[9,9,9,0]

// var plusOne = function (digits) {
//   return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
// };

var plusOne = function (digits) {
  digits[digits.length - 1] += 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 9) {
      digits[i] = 0;

      if (i === 0) {
        digits.unshift(1);
      } else {
        digits[i - 1] += 1;
      }
    } else {
      break;
    }
  }

  return digits;
};

console.log(plusOne(digits));

// =================================Javacode============================================

// class Solution {

//   public int[] plusOne(int[] digits) {
//       int n = digits.length;
//       for (int i = n - 1; i >= 0; i--) {
//           if (digits[i] < 9) { //less than 9
//               digits[i] += 1;
//               return digits;
//           }
//           digits[i] = 0; //9
//       }
//       //all are 9 eg.[9,9,9,9,9,]
//       int[] res = new int[n + 1];
//       res[0] = 1;
//       return res;
//   }
// }
