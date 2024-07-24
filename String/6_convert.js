// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

let s = "PAYPALISHIRING";
let numRows = 3;
// Output: "PAHNAPLSIIGYIR"

// Example 2:

// let s = "PAYPALISHIRING";
// let numRows = 4;
// Output: "PINALSIGYAHRPI"

// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:

// let s = "A";
// let numRows = 1;
// Output: "A"

var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let rows = Array(Math.min(numRows, s.length)).fill("");
  let currRow = 0;
  let goingDown = false;

  for (let c of s) {
    rows[currRow] += c;

    if (currRow === 0 || currRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};
console.log(convert(s, numRows));
