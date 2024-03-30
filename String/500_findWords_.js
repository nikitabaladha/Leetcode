// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".
// Example 1:

let words = ["Hello", "Alaska", "Dad", "Peace"];
// Output: ["Alaska","Dad"]
// Example 2:

// let words = ["omk"]
// Output: []
// Example 3:

// let words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

var findWords = function (words) {
  let output = [];
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < words.length; j++) {
      let canType = true;
      for (let char of words[j].toLowerCase()) {
        if (!rows[i].includes(char)) {
          canType = false;
          break;
        }
      }
      if (canType) {
        output.push(words[j]);
      }
    }
  }
  return output;
};

console.log(findWords(words));
