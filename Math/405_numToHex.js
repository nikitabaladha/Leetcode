let num = -2;

var toHex = function (num) {
  if (num === 0) return "0";
  if (num < 0) {
    num = 0xffffffff + num + 1;
  }
  return num.toString(16);
};
console.log(toHex(num));

// var toHex = function (num) {
//   return (num >>> 0).toString(16);
// };
// console.log(toHex(num));
