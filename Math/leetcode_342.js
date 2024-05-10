// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:

// let n = 16
// Output: true
// Example 2:

// let n = 5
// Output: false
// Example 3:

// let n = 1
// Output: true

var isPowerOfFour = function (n) {
  while (n > 1) {
    n /= 4;
  }
  return n === 1;
};
console.log(isPowerOfFour(n));
