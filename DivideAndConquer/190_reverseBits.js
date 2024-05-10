// Example 1:

let n = "00000010100101000001111010011100";
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

var reverseBits = function (n) {
  let string = n.toString(2).padStart(32, 0).split("").reverse().join("");

  let newString = parseInt(string, 2);
  return newString;
};
console.log(reverseBits(n));

// ================================Javacode=================================

// import java.math.BigInteger;

// public class Solution {

//     // you need treat n as an unsigned value
//     public int reverseBits(int n) {
//         String S = Integer.toBinaryString(n);
//         String s2 = "";
//         char arr[] = S.toCharArray();
//         for (int i = S.length() - 1; i >= 0; i--) {
//             s2 += arr[i];
//         }
//         if (S.length() < 32) {
//             for (int i = 0; i < 32 - S.length(); i++) {
//                 s2 += '0';
//             }
//         }
//         long x = Long.parseLong(s2, 2);
//         return (int) x;
//     }
// }
