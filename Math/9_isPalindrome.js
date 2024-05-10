// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

let x = 121;
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// let x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// let x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function (x) {
  const reverseNumber = parseInt(x.toString().split("").reverse().join(""), 10);

  return reverseNumber === number;
};
console.log(isPalindrome(number));

// =================================Javacode================================

// class Solution {

//   // Method to check if a number is a palindrome
//   public boolean isPalindrome(int x) {
//       try {
//           // Convert the integer to a string, reverse it, and parse it back to an integer
//           int reverseNumber = Integer.parseInt(new StringBuilder(Integer.toString(x)).reverse().toString());

//           // Check if the reversed number is equal to the original number
//           return reverseNumber == x;
//       } catch (NumberFormatException e) {
//           // Handle the exception if parsing the reversed string to an integer fails
//           // This typically happens when the reversed string exceeds the integer range
//           // For example, if the original number is too large or has leading zeros
//           // In such cases, return false
//           return false;
//       }
//   }

//   // Main method to test the isPalindrome method
//   public static void main(String[] args) {
//       // Create an instance of the Solution class
//       Solution solution = new Solution();

//       // Test cases
//       System.out.println(solution.isPalindrome(121));  // Output: true
//       System.out.println(solution.isPalindrome(-121)); // Output: false
//       System.out.println(solution.isPalindrome(10));   // Output: false
//   }
// }
