// Given a string s, return the longest palindromic substring in s.

// Example 1:

let s = "abacbababd";
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// let s = "cbbd";
// Output: "bb"

var longestPalindrome = function (s) {
  if (!s || s.length < 1) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    // Check for palindrome of odd length centered at i
    let len1 = expandAroundCenter(s, i, i);

    // Check for palindrome of even length centered between i and i+1
    let len2 = expandAroundCenter(s, i, i + 1);

    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};
console.log(longestPalindrome(s));
