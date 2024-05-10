// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// let n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// let n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// let n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// var fib = function (n) {
//   if (n === 0 || n === 1) return n;

//   let first = 0;
//   let second = 1;
//   let sum = first + second;

//   for (let i = 2; i < n; i++) {
//     first = second;
//     second = sum;

//     sum = first + second;
//   }

//   return sum;
// };

// let fib = function (n) {
//   if (n <= 1) {
//     return n;
//   } else return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(n));

// const number = parseInt("Enter the number of terms: ");
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }
// console.log(fib(n));

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// const fibonacciArray = [];
// for (let i = 1; i <= 10; i++) {
//   fibonacciArray.push(fibonacci(i));
// }

// =========================================
// let n = 10;

// function fibonacci() {
//   let fibonacciArray = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
//   }
//   return fibonacciArray;
// }
// console.log(fibonacci());

// =================================

let n = 10;

function fibonacci(n) {
  let fibonacciArray = [];

  let a = 0;
  let b = 1;
  let c;

  for (let i = 0; i <= n; i++) {
    fibonacciArray.push(a);
    c = a + b;
    a = b;
    b = c;
  }

  return fibonacciArray;
}
console.log(fibonacci(n));

// let n = 10;

// function fibonacci(n) {
//   if (n <= 0) {
//     return [];
//   } else if (n === 1) {
//     return [0];
//   } else if (n === 2) {
//     return [0, 1];
//   } else {
//     let fibArray = fibonacci(n - 1);
//     fibArray.push(
//       fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
//     );
//     return fibArray;
//   }
// }
// console.log(fibonacci(n));
