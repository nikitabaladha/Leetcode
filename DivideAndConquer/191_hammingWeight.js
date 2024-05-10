// Example 1:

// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
// Example 2:

// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
// Example 3:

// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

var hammingWeight = function (n) {
  let bitMask = 1; // Initialize a bitmask starting from the rightmost bit
  let count = 0; // Initialize a count variable to keep track of the number of '1' bits

  // Iterate over each bit in the 32-bit representation of the input
  for (let i = 0; i < 32; i++) {
    // Check if the current bit is set (equals 1)
    if (n & bitMask) {
      count++; // Increment the count if the current bit is '1'
    }

    n >>= 1; // Move to the next bit by shifting the input to the right
  }

  return count; // Return the total count of '1' bits
};
console.log(hammingWeight(n));

//==============================Javacode==================================

// public class Solution {

//     // you need to treat n as an unsigned value
//     public int hammingWeight(int n) {
//         int bitMask = 1; // Initialize a bitmask starting from the rightmost bit
//         int count = 0; // Initialize a count variable to keep track of the number of '1' bits

//         // Iterate over each bit in the 32-bit representation of the input
//         for (int i = 0; i < 32; i++) {
//             // Check if the current bit is set (equals 1)
//             if ((n & bitMask) != 0) {
//                 count++; // Increment the count if the current bit is '1'
//             }

//             n >>= 1; // Move to the next bit by shifting the input to the right
//         }

//         return count; // Return the total count of '1' bits
//     }
// }
