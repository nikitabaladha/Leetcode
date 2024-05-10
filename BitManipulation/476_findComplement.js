let num = 5;
// Output: 2;

// Explanation: The binary representation of 5 is 101 (no leading zero bits),
// and its complement is 010. So you need to output 2.

var findComplement = function (num) {
  let number = num
    .toString(2)
    .split("")
    .map((x) => (x === "0" ? "1" : "0"))
    .join("");

  return parseInt(number, 2);
};
console.log(findComplement(num));
