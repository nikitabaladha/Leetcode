// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

let words = ["bella", "label", "roller"];
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function (words) {
  let result = [];

  let chars = words[0].split("");

  for (let char of chars) {
    if (words.every((word) => word.includes(char))) {
      result.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }

  return result;
};

console.log(commonChars(words));
