// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

let ransomNote = "a";
let magazine = "b";
// Output: false
// Example 2:

// let ransomNote = "aa";
// let magazine = "ab"
// Output: false
// Example 3:

// let ransomNote = "aa";
// let magazine = "aab"
// Output: true

// var canConstruct = function (ransomNote, magazine) {
//   const magazineMap = new Map();

//   for (const char of magazine) {
//     const isExist = magazineMap.get(char);
//     if (!isExist) {
//       magazineMap.set(char, 1);
//     } else {
//       magazineMap.set(char, isExist + 1);
//     }
//   }

//   for (const char of ransomNote) {
//     if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
//       return false;
//     }
//     magazineMap.set(char, magazineMap.get(char) - 1);
//   }
//   return true;
// };
// console.log(canConstruct(ransomNote, magazine));

// --------------------------------------------------------------------------------------------------------------------

var canConstruct = function (ransomNote, magazine) {
  const obj = {};

  for (let letter of magazine) {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }

  for (let letter of ransomNote) {
    if (!obj[letter]) {
      return false;
    }
    obj[letter]--;
  }
  return true;
};
console.log(canConstruct(ransomNote, magazine));

// ----------------------------------------------------------------------------------------------------------------------
obj[letter] = (obj[letter] ? obj[letter] : 0) + 1; // ternary operator

obj[letter] = (obj[letter] || 0) + 1; // Falsy conditional operator
