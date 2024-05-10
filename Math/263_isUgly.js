// Example 1:

let n = 6;
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// let n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// let n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }

  const factors = [2, 3, 5];

  for (const factor of factors) {
    while (n % factor === 0) {
      n /= factor;
    }
  }

  return n === 1;
};

console.log(isUgly(n));

// ================================Javacode=================================

// public class Solution {

//     public boolean isUgly(int n) {
//         if (n <= 0) {
//             return false;
//         }

//         int[] factors = { 2, 3, 5 };

//         for (int factor : factors) {
//             while (n % factor == 0) {
//                 n /= factor;
//             }
//         }

//         return n == 1;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         // Example usage
//         int n = 6;
//         System.out.println(solution.isUgly(n)); // Output: true
//     }
// }
