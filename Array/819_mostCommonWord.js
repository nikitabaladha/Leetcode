// let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
// let banned = ["hit"];
// Output: "ball"
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.

let paragraph = "a.";
let banned = [];
// Output: "a"

var mostCommonWord = function (paragraph, banned) {
  const words = paragraph.toLowerCase().match(/\b\w+\b/g);

  const wordFrequency = {};

  for (const word of words) {
    if (!banned.includes(word)) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  }

  let mostCommon = "";
  let maxFrequency = 0;

  for (const [word, frequency] of Object.entries(wordFrequency)) {
    if (frequency > maxFrequency) {
      mostCommon = word;
      maxFrequency = frequency;
    }
  }

  return mostCommon;
};

console.log(mostCommonWord(paragraph, banned));
