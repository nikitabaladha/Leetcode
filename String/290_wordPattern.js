// Example 1:

let pattern = "abba",
  s = "dog cat cat dog";
// Output: true
// Example 2:

// let pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// let pattern = "aaaa", s = "dog cat cat dog"
// Output: false

var wordPattern = function (pattern, s) {
  let str = s.split(" ");

  if (pattern.length !== str.length) return false;

  let r1 = "";
  for (let i = 0; i < pattern.length; i++) {
    r1 += pattern.indexOf(pattern[i]);
  }
  console.log(r1);

  let r2 = "";
  for (let i = 0; i < str.length; i++) {
    r2 += str.indexOf(str[i]);
  }
  console.log(r2);

  return r1 === r2;
};
console.log(wordPattern(pattern, s));

// ============================== Another implementation =============================

// var wordPattern = function (pattern, s) {
//   const words = s.split(" ");

//   if (pattern.length !== words.length) {
//     return false;
//   }

//   const charToWord = new Map();
//   const wordToChar = new Map();

//   for (let i = 0; i < pattern.length; i++) {
//     const char = pattern[i];
//     const word = words[i];

//     if (!charToWord.has(char) && !wordToChar.has(word)) {
//       charToWord.set(char, word);
//       wordToChar.set(word, char);
//     } else if (charToWord.get(char) !== word || wordToChar.get(word) !== char) {
//       return false;
//     }
//   }

//   return true;
// };
