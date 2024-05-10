// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  const noSpecialChar = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = noSpecialChar.split("").reverse().join("");

  return noSpecialChar === reversedString;
};

console.log(isPalindrome(s));

// =====================================Javacode========================================

// class Solution {

//   public boolean isPalindrome(String s) {
//       String noSpecialChar = s.toLowerCase().replaceAll("[^a-z0-9]", "");
//       String reversedString = new StringBuilder(noSpecialChar).reverse().toString();

//       return noSpecialChar.equals(reversedString);
//   }
// }
