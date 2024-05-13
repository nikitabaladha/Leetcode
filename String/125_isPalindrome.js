// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

let s = "A man, a plan, a canal: Panama";
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// let s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// let s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  let cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleanString.length - 1;
  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome(s));

// =================================================================

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
