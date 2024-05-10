// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Example 1:

let tokens = ["2", "1", "+", "3", "*"];
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// let tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(parseInt(tokens[i]))) {
      stack.push(parseInt(tokens[i]));
    } else {
      let op2 = stack.pop();
      let op1 = stack.pop();
      let result;
      if (tokens[i] === "*") {
        result = op1 * op2;
      } else if (tokens[i] === "+") {
        result = op1 + op2;
      } else if (tokens[i] === "-") {
        result = op1 - op2;
      } else if (tokens[i] === "/") {
        result = Math.trunc(op1 / op2);
      }
      stack.push(result);
    }
  }
  return stack.pop();
};

console.log(evalRPN(tokens));

// var evalRPN = function (tokens) {
//   let stack = [];

//   for (let token of tokens) {
//     if (token.match(/[0-9]/)) {
//       stack.push(parseInt(token));
//     } else {
//       let b = stack.pop();
//       let a = stack.pop();
//       let c = 0;

//       if (token === "+") {
//         c = a + b;
//       } else if (token === "-") {
//         c = a - b;
//       } else if (token === "*") {
//         c = a * b;
//       } else {
//         c = Math.trunc(a / b); // Use Math.trunc to get integer division
//       }

//       stack.push(c);
//     }
//   }

//   return stack.pop();
// };
// console.log(evalRPN(tokens));

// ================================Javacode=================================
// import java.util.Stack;

// public class Solution {
//     public int evalRPN(String[] tokens) {
//         Stack<Integer> stack = new Stack<>();

//         for (String token : tokens) {
//             if (token.matches("-?\\d+")) {  // Match positive or negative integers
//                 stack.push(Integer.parseInt(token));
//             } else {
//                 int b = stack.pop();
//                 int a = stack.pop();
//                 int c = 0;

//                 if (token.equals("+")) {
//                     c = a + b;
//                 } else if (token.equals("-")) {
//                     c = a - b;
//                 } else if (token.equals("*")) {
//                     c = a * b;
//                 } else {
//                     c = a / b; // Note: Integer division in Java automatically truncates towards zero
//                 }

//                 stack.push(c);
//             }
//         }

//         return stack.pop();
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         // Example usage:
//         System.out.println(solution.evalRPN(new String[]{"2", "1", "+", "3", "*"})); // Output: 9
//         System.out.println(solution.evalRPN(new String[]{"4", "13", "5", "/", "+"})); // Output: 6
//         System.out.println(solution.evalRPN(new String[]{"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"})); // Output: 22
//     }
// }
