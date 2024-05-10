// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

let s = "abcabcbb";
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// let s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// let s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let end = 0;
  let charSet = new Set();

  while (end < s.length) {
    if (!charSet.has(s[end])) {
      charSet.add(s[end]);
      maxLength = Math.max(maxLength, end - start + 1);
      end++;
    } else {
      charSet.delete(s[start]);
      start++;
    }
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring(s));
