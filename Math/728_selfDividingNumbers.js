// let left = 1;
// let right = 22;
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

let left = 47;
let right = 85;
// Output: [48,55,66,77]

var selfDividingNumbers = function (left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    let digits = i.toString();

    for (let j = 0; j < digits.length; j++) {
      if (digits[j] != 0 && digits % digits[j] == 0) {
        if (j == digits.length - 1) {
          result.push(digits);
        }
      } else {
        break;
      }
    }
  }
  return result;
};

// var selfDividingNumbers = function (left, right) {
//   const ans = [];

//   for (left; left <= right; left++) {
//     [...String(left)].every((e) => left % +e === 0) ? ans.push(left) : null;
//   }

//   return ans;
// };
console.log(selfDividingNumbers(left, right));
