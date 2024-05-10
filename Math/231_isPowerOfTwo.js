// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

let n = 16;
var isPowerOfTwo = function (n) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};
console.log(isPowerOfTwo(n));

// =============================Javacode========================================

// public class Solution {
//   public boolean isPowerOfTwo(int n) {
//       if (n == 0) {
//           return false;
//       } else if (n == 1) {
//           return true;
//       } else if (n % 2 != 0) {
//           return false;
//       }
//       return isPowerOfTwo(n / 2);
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();

//       // Example usage
//       int n = 16; // You can replace 16 with any other number
//       System.out.println(solution.isPowerOfTwo(n));
//   }
// }
