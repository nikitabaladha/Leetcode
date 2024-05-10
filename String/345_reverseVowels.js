// Reverse Vowels of a String
// Solved
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

let s = "hello";
// Output: "holle"
// Example 2:

// let  s = "leetcode"
// Output: "leotcede"

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

var reverseVowels = function (s) {
  s = s.split("");
  let start = 0;
  let end = s.length - 1;
  while (end > start) {
    if (!vowels.includes(s[start])) start++;
    else if (!vowels.includes(s[end])) end--;
    else {
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start = start + 1;
      end = end - 1;
    }
  }
  return s.join("");
};
console.log(reverseVowels(s));
