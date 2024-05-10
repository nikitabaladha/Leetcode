// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

// Example 1:

// let words = ["hello", "leetcode"];
// let order = "hlabcdefgijkmnopqrstuvwxyz";
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// let words = ["word", "world", "row"];
// let order = "worldabcefghijkmnpqstuvxyz";
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

let words = ["app", "apple"];
let order = "abcdefghijklmnopqrstuvwxyz";
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

// var isAlienSorted = function (words, order) {
//   let map = {};

//   for (let i = 0; i < order.length; i++) {
//     map[order[i]] = i;
//   }

//   for (let i = 0; i < words.length - 1; i++) {
//     for (let j = 0; j < words[i].length; j++) {
//       if (j >= words[i + 1].length) return false;
//       if (words[i][j] == words[i + 1][j]) continue;
//       let pos1 = map[words[i][j]];
//       let pos2 = map[words[i + 1][j]];
//       if (pos1 < pos2) break;
//       else return false;
//     }
//   }

//   return true;
// };

var isAlienSorted = function (words, order) {
  const map = {};

  for (let i = 0; i < order.length; i++) map[order[i]] = i;

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] === words[i + 1]) continue;
    for (let j = 0; j < words[i].length; j++) {
      const word1 = words[i][j];
      const word2 = words[i + 1][j];
      if (word1 === word2) continue;
      if (word1 === undefined) break;
      const pos1 = map[word1];
      const pos2 = map[word2];
      if (pos1 < pos2) break;
      else return false;
    }
  }
  return true;
};
console.log(isAlienSorted(words, order));
