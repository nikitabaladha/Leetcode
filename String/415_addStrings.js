// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// let num1 = "11";
// let num2 = "123";
// Output: "134"
// Example 2:

let num1 = "455";
let num2 = "755";
// Output: "533"
// Example 3:

// let num1 = "0";
// let num2 = "0";
// Output: "0"

var addStrings = function (num1, num2) {
  return (BigInt(num1) + BigInt(num2)).toString();
};
console.log(addStrings(num1, num2));

// =================================================================

var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

    const sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
};
console.log(addStrings(num1, num2));

// ======Another Way============
// var addStrings = function (nums1, nums2) {
//   let i = nums1.length - 1;
//   let j = nums2.length - 1;
//   let carry = 0;
//   let result = "";
//   while (i >= 0 || j >= 0 || carry > 0) {
//     const num1 = parseInt(nums1[i] || 0);
//     const num2 = parseInt(nums2[j] || 0);
//     const sum = num1 + num2 + carry;
//     let sumTotal = sum;

//     if (sum >= 10) {
//       const [first, point, last] = (sum / 10).toString();
//       carry = parseInt(first);
//       sumTotal = last || 0;
//     } else carry = 0;
//     result = sumTotal + result;

//     i--;
//     j--;
//   }

//   return result;
// };
// console.log(addStrings(num1, num2));
