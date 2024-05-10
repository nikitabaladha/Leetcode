// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

let num = 38;

var addDigits = function (num) {
  if (num < 10) return num;
  const numArray = num.toString().split("");

  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += parseInt(numArray[i]);
  }
  return addDigits(sum);
};
console.log(addDigits(num));

// =====================================Javacode==============================

// public class Solution {

//   public int addDigits(int num) {
//       if (num < 10) {
//           return num;
//       }

//       String numStr = Integer.toString(num);
//       char[] numArray = numStr.toCharArray();

//       int sum = 0;
//       for (char digit : numArray) {
//           sum += Character.getNumericValue(digit);
//       }

//       return addDigits(sum);
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();

//       // Example usage
//       int num = 38; // You can replace 38 with any other number
//       System.out.println(solution.addDigits(num));
//   }
// }
