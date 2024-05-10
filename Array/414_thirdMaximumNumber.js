let nums = [
  3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
  5, 6,
];
var thirdMax = function (nums) {
  const arr = [...new Set(nums)];

  arr.sort(function (a, b) {
    return a - b;
  });

  if (arr.length >= 3) {
    return arr[arr.length - 3];
  } else {
    return arr[arr.length - 1];
  }
};
console.log(thirdMax(nums));
