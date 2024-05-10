// Example 1:

let n = 5;
// Output: 2
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
// Example 2:

// Input: n = 7
// Output: 0
// Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
// Example 3:

// Input: n = 10
// Output: 5
// Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.

var bitwiseComplement = function (n) {
  let binaryNumber = n.toString(2);
  let binaryArray = [];

  for (let i = 0; i < binaryNumber.length; i++) {
    binaryArray.push(binaryNumber[i] === "0" ? "1" : "0");
  }

  let binaryString = binaryArray.join("");
  return parseInt(binaryString, 2);
};
console.log(bitwiseComplement(n));

// ======================================Javacodec================================

// public class Solution {

//     public int bitwiseComplement(int n) {
//         if (n == 0) {
//             return 1;
//         }

//         StringBuilder binaryString = new StringBuilder(Integer.toBinaryString(n));
//         for (int i = 0; i < binaryString.length(); i++) {
//             char currentChar = binaryString.charAt(i);
//             binaryString.setCharAt(i, (currentChar == '0') ? '1' : '0');
//         }

//         return Integer.parseInt(binaryString.toString(), 2);
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();
//         int n = 5;
//         System.out.println(solution.bitwiseComplement(n)); // Output: 2
//     }
// }
