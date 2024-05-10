// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// let s = "ABAB"
// let k = 2;
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// let s = "AABABBA";
//  let k = 1;
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var characterReplacement = function (s, k) {
  const charCount = new Array(26).fill(0); // Array to store the count of each character
  let maxCount = 0; // Maximum count of a single character in the current window
  let maxLength = 0; // Length of the longest substring with the same letter

  let start = 0; // Start index of the window

  for (let end = 0; end < s.length; end++) {
    const charIndex = s.charCodeAt(end) - "A".charCodeAt(0);
    charCount[charIndex]++;

    // Update the maximum count of a single character in the current window
    maxCount = Math.max(maxCount, charCount[charIndex]);

    // Check if the window size can be expanded within the given k operations
    if (end - start + 1 - maxCount > k) {
      // Move the window start to shrink it
      charCount[s.charCodeAt(start) - "A".charCodeAt(0)]--;
      start++;
    }

    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(characterReplacement(s, k));
