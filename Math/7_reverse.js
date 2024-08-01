// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

let x = 123;
// Output: 321

// Example 2:

// let  x = -123
// Output: -321

// Example 3:

// let x = 120
// Output: 21

var reverse = function (x) {
  let rev = 0;
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    if (
      rev > Math.floor(2147483647 / 10) ||
      (rev === Math.floor(2147483647 / 10) && digit > 7)
    ) {
      return 0;
    }

    rev = rev * 10 + digit;
  }

  return sign * rev;
};

console.log(reverse(x));

var reverse = function (x) {
  // Define the 32-bit signed integer range limits
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);

  // Initialize the result variable
  let result = 0;
  let num = Math.abs(x);

  while (num !== 0) {
    // Get the last digit of num
    const digit = num % 10;
    num = Math.floor(num / 10);

    // Check for overflow before pushing the digit to result
    if (
      result > Math.floor(MAX_INT / 10) ||
      (result === Math.floor(MAX_INT / 10) && digit > MAX_INT % 10)
    ) {
      return 0;
    }

    // Build the reversed number
    result = result * 10 + digit;
  }

  // Return the result with the original sign
  return x < 0 ? -result : result;
};

let x1 = 123;
console.log(reverse(x1)); // Output: 321

let x2 = -123;
console.log(reverse(x2)); // Output: -321

let x3 = 120;
console.log(reverse(x3)); // Output: 21
