// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

let s = "()";
// Output: true
// Example 2:

// let s = "()[]{}"
// Output: true
// Example 3:

// let s = "(]";
// Output: false

var isValid = function (s) {
  const obj = { "}": "{", ")": "(", "]": "[" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      let poppedValue = stack.pop();
      if (poppedValue !== obj[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(isValid(s));

// =============================================================================
var isValid = function (s) {
  const stack = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(")");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === "[") {
      stack.push("]");
    } else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};
console.log(isValid(s));

// =================================================================
// var isValid = (s) => {
//   if (s.length <= 1) return false;

//   const obj = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   const stack = [];

//   for (let char of s) {
//     if (obj[char]) {
//       if (stack.pop() !== obj[char]) {
//         return false;
//       }
//     } else {
//       stack.push(char);
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isValid(s));

// ===============================Javacode==================================

// import java.util.Stack;

// public class Solution {
//     public boolean isValid(String s) {
//         Stack<Character> stack = new Stack<>();

//         for (char c : s.toCharArray()) {
//             if (c == '(') {
//                 stack.push(')');
//             } else if (c == '{') {
//                 stack.push('}');
//             } else if (c == '[') {
//                 stack.push(']');
//             } else if (stack.isEmpty() || stack.pop() != c) {
//                 return false;
//             }
//         }

//         return stack.isEmpty();
//     }
// }
