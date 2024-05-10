// Given an integer num, return a string of its base 7 representation.

let num = 100;
// Output: "202"

// let num = -7;
// Output: "-10"

// var convertToBase7 = function (num) {
//   return num.toString(7);
// };
// console.log(convertToBase7(num));

// conventional :-----------------------------------------------------------------------------

const convertToBase7 = (num) => {
  if (num == 0) return "0";
  const isNeagtive = num < 0;
  if (isNeagtive) num = Math.abs(num);
  let base7number = "";

  while (num > 0) {
    base7number = (num % 7) + base7number;
    num = Math.floor(num / 7);
  }

  return isNeagtive ? "-" + base7number : base7number;
};
console.log(convertToBase7(num));
