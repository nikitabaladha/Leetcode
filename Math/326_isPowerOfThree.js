// Example 1:

let n = 27;
// Output: true
// Explanation: 27 = 3^3
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false; // 0 and negative numbers are not powers of three
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
};

console.log(isPowerOfThree(n)); // Output: true

// =======================================Javacode======================================

// class Solution {
//   public boolean isPowerOfThree(int n) {
//       if (n <= 0) {
//           return false; // 0 and negative numbers are not powers of three
//       }

//       while (n % 3 == 0) {
//           n /= 3;
//       }

//       return n == 1;
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();
//       int n = 19683;
//       System.out.println(solution.isPowerOfThree(n)); // Output: true
//   }
// }
