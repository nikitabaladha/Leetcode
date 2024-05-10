// let s = "ab#c";
// let t = "ad#c";
// Output: true
// Explanation: Both s and t become "ac".

// let s = "ab##";
// let t = "c#d#";
// Output: true
// Explanation: Both s and t become "".

let s = "a#c";
let t = "b";
// Output: false
// Explanation: s becomes "c" while t becomes "b".

var backspaceCompare = function (s, t) {
  // Helper function to process the input string and return the final result
  const processString = (str) => {
    const stack = [];
    for (const char of str) {
      if (char === "#" && stack.length) {
        stack.pop(); // Remove the previous character
      } else {
        stack.push(char); // Add non-backspace characters to the stack
      }
    }
    return stack.join(""); // Convert the stack to a string
  };

  // Compare the processed strings
  return processString(s) === processString(t);
};
console.log(backspaceCompare(s, t));
