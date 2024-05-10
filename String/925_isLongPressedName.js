// let name = "alex";
// let typed = "aaleex";
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.

let name = "leelee";
let typed = "lleeelee";
// Output: true

// let name = "saeed";
// let typed = "ssaaedd";
// Output: false;
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.

var isLongPressedName = function (name, typed) {
  let i = 0;
  let j = 0;

  while (j < typed.length) {
    if (i < name.length && name[i] === typed[j]) {
      // Matched characters, move to the next in both strings
      i++;
      j++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      // Handle long-pressed key in the typed string
      j++;
    } else {
      // Mismatch, not a long-pressed name
      return false;
    }
  }

  // Check if all characters in 'name' are processed
  return i === name.length;
};
console.log(isLongPressedName(name, typed));
