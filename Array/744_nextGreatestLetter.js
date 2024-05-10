// let letters = ["c", "f", "j"];
// let target = "a";
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

let letters = ["c", "f", "j"];
let target = "c";
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

// let letters = ["x","x","y","y"];
// let target = "z";
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

var nextGreatestLetter = function (letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
};
console.log(nextGreatestLetter(letters, target));
