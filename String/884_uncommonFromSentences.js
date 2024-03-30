// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:

let s1 = "this apple is sweet";
let s2 = "this apple is sour";
// Output: ["sweet","sour"]
// Example 2:

// let s1 = "apple apple";
// let s2 = "banana";
// Output: ["banana"]

var uncommonFromSentences = function (s1, s2) {
  const allWords = (s1 + " " + s2).split(" ");

  const wordCount = {};

  const uncommonWords = [];

  for (const word of allWords) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  for (const word in wordCount) {
    if (wordCount[word] === 1) {
      uncommonWords.push(word);
    }
  }

  return uncommonWords;
};

console.log(uncommonFromSentences(s1, s2));
