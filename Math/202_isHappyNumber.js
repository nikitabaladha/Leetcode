let n = 19;
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:

// Input: n = 2
// Output: false

var isHappy = function (n, count = 0) {
  if (n < 1 || count > 7) return false;

  if (n === 1) return true;

  let nums = n.toString().split("");

  const newValue = nums.reduce((previous, current) => {
    let pow = parseInt(current) * parseInt(current);
    previous = previous + pow;
    return previous;
  }, 0);

  return isHappy(newValue, count + 1);
};
console.log(isHappy(n));

// ===================================Javacode=====================================

// public class Solution {
//   public boolean isHappy(int n) {
//       return isHappyHelper(n, 0);
//   }

//   private boolean isHappyHelper(int n, int count) {
//       if (n < 1 || count > 7) return false;

//       if (n == 1) return true;

//       String numStr = Integer.toString(n);
//       char[] nums = numStr.toCharArray();

//       int newValue = 0;
//       for (char digit : nums) {
//           int pow = Character.getNumericValue(digit) * Character.getNumericValue(digit);
//           newValue += pow;
//       }

//       return isHappyHelper(newValue, count + 1);
//   }

//   public static void main(String[] args) {
//       Solution solution = new Solution();
//       int n = 19; // You can replace 19 with any other number
//       System.out.println(solution.isHappy(n));
//   }
// }
