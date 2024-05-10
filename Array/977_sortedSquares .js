let nums = [-4, -1, 0, 3, 10];
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].

// let nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function (nums) {
  let squareNums = [];
  for (let i = 0; i < nums.length; i++) {
    squareNums.push(nums[i] * nums[i]);
  }

  return squareNums.sort(function (a, b) {
    return a - b;
  });
};

// -----------------------------------------------------------------------------------------------

var sortedSquares = function (nums) {
  return nums.map((element) => element * element).sort((a, b) => a - b);
};
console.log(sortedSquares(nums));
