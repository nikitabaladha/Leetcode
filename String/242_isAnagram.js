// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

let s = "anagram";
let t = "nagaram";
// Output: true
// Example 2:

// let s = "rat";
// let  t = "car"
// Output: false

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};

console.log(isAnagram(s, t));

// ====================================Javacode=============================

// import java.util.Arrays;

// public class Solution {
//     public boolean isAnagram(String s, String t) {
//         // Check if the lengths of both strings are the same
//         if (s.length() != t.length()) {
//             return false;
//         }

//         // Convert strings to arrays, sort them, and then compare
//         char[] sortedS = s.toCharArray();
//         char[] sortedT = t.toCharArray();

//         Arrays.sort(sortedS);
//         Arrays.sort(sortedT);

//         return Arrays.equals(sortedS, sortedT);
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         String s1 = "anagram";
//         String t1 = "nagaram";
//         System.out.println(solution.isAnagram(s1, t1)); // Output: true

//         String s2 = "rat";
//         String t2 = "car";
//         System.out.println(solution.isAnagram(s2, t2)); // Output: false
//     }
// }
