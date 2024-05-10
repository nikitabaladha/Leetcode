let operations = ["5", "-2", "4", "C", "D", "9", "+", "+"];
// Output: 27

// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

// var calPoints = function (ops) {
//   var X = /^[-+]?[0-9]+$/; // for all integers including 0

//   let Output = [];
//   for (let i = 0; i < ops.length; i++) {
//     if (ops[i].match(X)) {
//       Output.push(parseInt(ops[i]));
//     }
//     if (ops[i] === "C") {
//       Output.pop(ops[i - 1]);
//     }
//     if (ops[i] === "D") {
//       let double = Output[Output.length - 1] * 2;
//       Output.push(double);
//     }
//     if (ops[i] === "+") {
//       let sum = Output[Output.length - 1] + Output[Output.length - 2];
//       Output.push(sum);
//     }
//   }
//   let totalSum = 0;
//   Output.forEach((item) => {
//     totalSum += item;
//   });
//   return totalSum;
// };
// console.log(calPoints(ops));

var calPoints = function (operations) {
  return operations
    .reduce((acc, operation) => {
      if (+operation) acc.push(+operation);
      if (operation === "C") acc.pop();
      if (operation === "D") acc.push(acc[acc.length - 1] * 2);
      if (operation === "+")
        acc.push(acc[acc.length - 1] + acc[acc.length - 2]);
      return acc;
    }, [])
    .reduce((total, curr) => (total += curr), 0);
};
console.log(calPoints(operations));

// const params = [1, 2, 3];

// function calculate(params) {
//   console.log(array1);
// }

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(calculate(array1)); // Max to 3 arguments as variable, If it is more than that pass it as object
