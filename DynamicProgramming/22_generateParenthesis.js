// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

//let n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// let n = 1
// Output: ["()"]
var generateParenthesis = function (n) {
  const result = [];

  // Helper function for recursion
  const generate = (current, open, close) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      generate(current + "(", open + 1, close);
    }
    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  };

  generate("", 0, 0);
  return result;
};

console.log(generateParenthesis(n));

// ====================================javacode=========================================
// import java.util.ArrayList;
// import java.util.List;

// public class Solution {

//     public List<String> generateParenthesis(int n) {
//         List<String> result = new ArrayList<>();
//         generate(result, "", 0, 0, n);
//         return result;
//     }

//     private void generate(List<String> result, String current, int open, int close, int n) {
//         if (current.length() == 2 * n) {
//             result.add(current);
//             return;
//         }

//         if (open < n) {
//             generate(result, current + "(", open + 1, close, n);
//         }
//         if (close < open) {
//             generate(result, current + ")", open, close + 1, n);
//         }
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();
//         int n = 3;
//         System.out.println(solution.generateParenthesis(n));
//     }
// }
