let num = 120;

var checkPerfectNumber = function (num) {
  if (num <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum == num;
};
console.log(checkPerfectNumber(num));
