// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

let s = "RLRRLLRLRL";
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// let s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// let s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

var balancedStringSplit = function (s) {
  let balance = 0;
  let count = 0;
  for (let char of s) {
    if (char === "R") {
      balance++;
    } else {
      balance--;
    }
    if (balance === 0) {
      count++;
    }
  }
  return count;
};
console.log(balancedStringSplit(s));
