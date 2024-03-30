// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Example 1:

// let words = ["leet", "code"];
// let x = "e";
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

let words = ["abc", "bcd", "aaaa", "cbc"];
let x = "a";
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
// Example 3:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []
// Explanation: "z" does not occur in any of the words. Hence, we return an empty array.

var findWordsContaining = function (words, x) {
  let indices = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      indices.push(i);
    }
  }
  return indices;
};
console.log(findWordsContaining(words, x));
