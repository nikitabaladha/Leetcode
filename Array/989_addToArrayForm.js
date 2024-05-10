let num = [1, 2, 0, 0];
let k = 34;
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// let num = [2,7,4];
// let k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

// let num = [2,1,5];
// let k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

var addToArrayForm = function (num, k) {
  let sum = BigInt(num.join("")) + BigInt(k);
  let convertSum = sum
    .toString()
    .split("")
    .map((num) => parseInt(num));
  return convertSum;
};

console.log(addToArrayForm(num, k));
