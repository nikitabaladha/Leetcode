// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: true

// Example 2:

// let board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

var isValidSudoku = function (board) {
  let seen = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        // Check for duplicates in the same row, column, and sub-box
        if (
          seen.has("row" + i + board[i][j]) ||
          seen.has("column" + j + board[i][j]) ||
          seen.has(
            "box" + Math.floor(i / 3) * 3 + Math.floor(j / 3) + board[i][j]
          )
        ) {
          return false; // Duplicate found, board is invalid
        }

        // Add current value to the set
        seen.add("row" + i + board[i][j]);
        seen.add("column" + j + board[i][j]);
        seen.add(
          "box" + Math.floor(i / 3) * 3 + Math.floor(j / 3) + board[i][j]
        );
      }
    }
  }

  return true; // No duplicates found, board is valid
};

console.log(isValidSudoku(board));

// ===============================Javacode==================================

// import java.util.HashSet;
// import java.util.Set;

// public class Solution {
//     public boolean isValidSudoku(char[][] board) {
//         Set<String> seen = new HashSet<>();

//         for (int i = 0; i < 9; i++) {
//             for (int j = 0; j < 9; j++) {
//                 if (board[i][j] != '.') {
//                     // Check for duplicates in the same row, column, and sub-box
//                     if (seen.contains("row" + i + board[i][j]) ||
//                         seen.contains("column" + j + board[i][j]) ||
//                         seen.contains("box" + (i / 3) * 3 + (j / 3) + board[i][j])) {
//                         return false; // Duplicate found, board is invalid
//                     }

//                     // Add current value to the set
//                     seen.add("row" + i + board[i][j]);
//                     seen.add("column" + j + board[i][j]);
//                     seen.add("box" + (i / 3) * 3 + (j / 3) + board[i][j]);
//                 }
//             }
//         }

//         return true; // No duplicates found, board is valid
//     }
// }
