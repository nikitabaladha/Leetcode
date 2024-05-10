let s = "ab";
let goal = "ba";
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// let s = "ab";
// let goal = "ab";
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

// let s = "aa";
// let goal = "aa";
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

const buddyStrings = function (s, goal) {
  // Check if lengths are different
  if (s.length !== goal.length) {
    return false;
  }

  // Case 1: If the strings are identical
  if (s === goal) {
    const uniqueChars = new Set(s);
    // Check if there are duplicate characters
    return uniqueChars.size < s.length;
  }

  // Array to store indices of differing characters
  const mismatches = [];

  // Iterate through each character of the strings
  for (let i = 0; i < s.length; i++) {
    // Check for differing characters
    if (s[i] !== goal[i]) {
      mismatches.push(i);

      // Check if more than 2 differences exist
      if (mismatches.length > 2) {
        return false;
      }
    }
  }

  // Case 2: Check if exactly two differences and they can be swapped
  if (mismatches.length === 2) {
    const [i, j] = mismatches;
    return s[i] === goal[j] && s[j] === goal[i];
  }

  // Default case: No valid swaps found
  return false;
};

console.log(buddyStrings(s, goal));
