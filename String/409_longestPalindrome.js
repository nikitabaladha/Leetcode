// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

let s = "aaabccccdd";
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// let s = "a";
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function (s) {
  let obj = {};
  let count = 0;
  let oddCount = false;

  for (let char of s) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  for (const value of Object.values(obj)) {
    if (value % 2 === 0) {
      count += value;
    } else {
      oddCount = true;
      count += value - 1;
    }
  }

  if (oddCount) {
    count++;
  }

  return count;
};

console.log(longestPalindrome(s));
