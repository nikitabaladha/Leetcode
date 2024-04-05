// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

let word = "g";
// Output: true
// Example 2:

// let word = "FlaG";
// Output: false

var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word) {
    return true;
  }

  if (word.toLowerCase() === word) {
    return true;
  }

  if (word[0].toUpperCase() + word.slice(1).toLowerCase() === word) {
    return true;
  }

  return false;
};
console.log(detectCapitalUse(word));

// ===========================================================================
var detectCapitalUse = function (word) {
  let capitalCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      capitalCount++;
    }
  }

  if (
    capitalCount === word.length ||
    capitalCount === 0 ||
    (capitalCount === 1 && word[0] === word[0].toUpperCase())
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse(word));

//================================================================

var detectCapitalUse = function (word) {
  let firstCharUpperCase = word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
  let allUpperCase = true;
  let allLowerCase = true;

  for (let i = 1; i < word.length; i++) {
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      allUpperCase = false;
    } else if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      allLowerCase = false;
    }
  }

  if ((firstCharUpperCase && allUpperCase) || allLowerCase) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse(word));
