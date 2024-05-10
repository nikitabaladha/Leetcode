let s = "Hello World";
// Output: 5
// Explanation: The last word is "World" with length 5.

// let s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// let s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord(s));

// =======================================Javacode================================================

// public class Solution {

//   public int lengthOfLastWord(String s) {
//       String[] words = s.trim().split(" ");

//       if (words.length == 0) {
//           return 0;
//       }

//       return words[words.length - 1].length();
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();

//       String s = "Hello World";
//       int result = solution.lengthOfLastWord(s);
//       System.out.println(result); // Output: 5
//   }
// }
